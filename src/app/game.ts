import Vue from 'vue';
import Vuex from 'vuex';

import store from '../store'
// Snyk API import
import SnykAPI from '../utils/http-client-snyk';
import { APIFiltersBodyRequest as APIFiltersVulnBodyRequest, APIHeaderRequest, APIFiltersBodyRequest } from '../utils/apiTypes';

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
    
    // //test trophy
    // Game.apiClient.listAllIntegrations(Game.headers).then( (response) => {
    //   //trophies = new Map(Object.entries(response.data)).size;
    //   const integrationsCount = Object.entries(response.data).length;
    //   if(integrationsCount > 0) {
    //     store.commit('trophy', {key: 'fixer', value:true})
    //   }
    //    //debugger;
    // });

    //platform trophy
    Game.apiClient.listAllProjects(Game.headers,Game.reqEmptyBody).then( (response) => {
      const results = response.data.projects.map( (el) => el.type);
      const myset = new Set(results);


      let scmProject=0; //score for task 2, Up to 1 point
      let projectsScore = 0; //score for task 3, Up to 5 points
      const maxprojectsScore = 5; 
      let platformScore=0; //score for task 4, Up to 3 points 

      //to calculate platformscore
      let containerScore = 0; //1 if present
      let sastScore = 0; //1 if present
      let iacScore = 0; //1 if present
      
      let score=0; //Total score for task 2,3 and 4 (task 1 to be implemented)

      //we are using container
      if(myset.has('apk') || myset.has('dockerfile') || myset.has('rpm')) {
        projectsScore++;
        containerScore=1;
      }
      //we are using IaC
      if(myset.has('k8sconfig') || myset.has('terraformconfig') || myset.has('helmconfig') || myset.has('cloudformation')) {
        projectsScore++;
        iacScore=1;
      }
      //we are using SAST
      if(myset.has('sast') ) {
        projectsScore++
        sastScore=1;
      }
      platformScore = sastScore+containerScore+iacScore;

      if(platformScore == 3){
        store.commit('trophy',{key:'platform',value:true})
      }
      if(projectsScore>maxprojectsScore) {projectsScore=5;}

      //SCM Integration task
      const resultsprojectOrigins = response.data.projects.map( (el) => el.origin);
      const mysetprojectOrigins = new Set(resultsprojectOrigins);
      if(myset.has('azure-repos') || myset.has('github') || myset.has('gitlab') || myset.has('bitbucket-cloud') || myset.has('bitbucket-server')) {
      scmProject=1; }

      score=projectsScore+platformScore+scmProject;

      store.commit('addScore', score);
    

    //fixer trophy
    Game.apiClient.countFixedIssues(Game.headers,Game.reqVulnBody).then( (res) => {  
      if(res.data.total > 0) {
        store.commit('trophy', {key:'fixer',value:true})
        if(res.data.total > 10) {
          store.commit('addScore', 10);
        } else {
          store.commit('addScore', res.data.total);
        }
      }
    });

  }
}
