import Vue from 'vue';
import Vuex from 'vuex';

import store from '../store'
// Snyk API import
import SnykAPI from '../utils/http-client-snyk';
import { APIFiltersBodyRequest as APIFiltersVulnBodyRequest, APIHeaderRequest, APIFiltersBodyRequest } from '../utils/apiTypes';
import { Dependency, IssueEnriched, License } from '../utils/types';

Vue.use(Vuex)

export default class Game {

  protected static apiClient: SnykAPI = SnykAPI.getInstance();

  // Open-source data fetching
  // Define header for counting vulns
  protected static reqVulnBody: APIFiltersVulnBodyRequest = {
    filters: {
      orgs: [process.env.VUE_APP_ORG],
      isFixed: true,
  }};

  protected static reqEmptyBody: APIFiltersBodyRequest = {
    filters: {}
  };

  protected static headers: APIHeaderRequest = {
    org: process.env.VUE_APP_ORG,
    to: '2021-06-28',
    from: '2021-04-01',
  }

  public static async load() {
    Game.init();
    Game.loadTrophies();
  }

  protected static async init() {
    //fetch org name
  
    Game.apiClient.listOrgs(Game.headers).then( (response) => {
      //debugger
      const org = response.data.orgs.filter( (org) => org.id == process.env.VUE_APP_ORG )[0]
      //debugger
      store.commit('profile', {org: {slug: org.slug, url:org.url}})
    })
      //store org name into store
  }

  protected static async loadTrophies() {
    
    //test trophy
    Game.apiClient.listAllIntegrations(Game.headers).then( (response) => {
      //trophies = new Map(Object.entries(response.data)).size;
      const integrationsCount = Object.entries(response.data).length;
      if(integrationsCount > 0) {
        store.commit('trophy', {key: 'fixer', value:true})
      }
       //debugger;
    });

    //platform trophy
    Game.apiClient.listAllProjects(Game.headers,Game.reqEmptyBody).then( (response) => {
      const results = response.data.projects.map( (el) => el.type);
      const myset = new Set(results);
      
      let score = 0;

      //we are using container
      if(myset.has('apk') || myset.has('dockerfile') || myset.has('rpm')) {
        score++;
      }
      //we are using IaC
      if(myset.has('k8sconfig') || myset.has('terraformconfig') || myset.has('helmconfig') || myset.has('cloudformation')) {
        score++;
      }
      //we are using SAST
      if(myset.has('sast') ) {
        score++
      }
      if(score == 3){
        store.commit('trophy',{key:'platform',value:true})
      }
      store.commit('addScore', score);
    })

    //fixer trophy
    Game.apiClient.countFixedIssues(Game.headers,Game.reqVulnBody).then( (res) => {  
      if(res.data.total > 0) {
        store.commit('trophy', {key:'fixer',value:true})
      }
    });

  }

}
