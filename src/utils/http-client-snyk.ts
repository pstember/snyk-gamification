import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ListIssueResponse, APIFiltersBodyRequest, APIHeaderRequest } from './apiTypes';
import HttpClient from './http-client';

export default class SnykAPI extends HttpClient {
  private static classInstance?: SnykAPI;

  private constructor() {
    super(process.env.VUE_APP_ENDPOINT || 'https://snyk.io/api/v1');
    this.initializeRequestInterceptor();
  }

  public static getInstance(): SnykAPI {
    if (!this.classInstance) {
      this.classInstance = new SnykAPI();
    }
    return this.classInstance;
  }

  private initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(
      this.handleRequest,
      this.handleError,
    );
  };

  private handleRequest = (config: AxiosRequestConfig) => {
    const res: AxiosRequestConfig = config;
    res.headers.authorization = 'Token ' + process.env.VUE_APP_SNYK_TOKEN;
    //debugger
    // res.headers['Content-type'] = 'application/json';

    return res;
  };

  public listAllIssues = async (body: APIFiltersBodyRequest) => {
    const perPage = 1000;
    const req = this.instance.post(`/reporting/issues/latest?page=1&perPage=${perPage}&sortBy=issueTitle&order=asc`, body)
    const response = [ req ];
    await req.then( (r: AxiosResponse<ListIssueResponse>) => {
      if( r.data.total > perPage ) {
        const pages = Math.ceil(r.data.total / perPage);
        for ( let i = 1 ; i < pages ; i++) {
          response.push(this.instance.post(`/reporting/issues/latest?page=${1+i}&perPage=${perPage}&sortBy=issueTitle&order=asc`, body));
        }
      }
    });
    return axios.all(response);
  };

  public listAllDependencies = async (params: APIHeaderRequest, body: APIFiltersBodyRequest) => {
    const perPage = 5000;
    const req = this.instance.post(`/org/${params.org}/dependencies?sortBy=dependency&order=desc&page=1&perPage=${perPage}`,body);
    const response = [ req ];
    await req.then( (r: AxiosResponse<ListIssueResponse>) => {
      if( r.data.total > perPage ) {
        const pages = Math.ceil(r.data.total / perPage);
        for ( let i = 1 ; i < pages ; i++) {
          response.push(this.instance.post(`/org/${params.org}/dependencies?sortBy=dependency&order=desc&page=${1+i}&perPage=${perPage}`, body));
        }
      }
    });
    return axios.all(response);
  };

  public countIssues = (body: APIFiltersBodyRequest) => this.instance.post('/reporting/counts/issues/latest?groupBy=severity', body);

  public listLicenses = (params: APIHeaderRequest, body: APIFiltersBodyRequest) => this.instance.post(`/org/${params.org}/licenses?sortBy=dependencies&order=desc`,body);

  public listAllIntegrations = (params: APIHeaderRequest) => this.instance.get(`/org/${params.org}/integrations`);

  public listOrgs = (params: APIHeaderRequest) => this.instance.get('/orgs');

  public listAllProjects = async (params: APIHeaderRequest, body: APIFiltersBodyRequest) => this.instance.post(`/org/${params.org}/projects`, body);

  public listIssuesOnePage = async (params: APIHeaderRequest, body: APIFiltersBodyRequest) => this.instance.post(`/reporting/issues/?from=${params.from}&to=${params.to}`, body);
  
}
