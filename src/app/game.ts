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
    Game.validateTasks();
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

  protected static async validateTasks() {
    
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
      
      const resultsType = response.data.projects.map( (el) => el.type);
      const projectType = new Set(resultsType);
      let projectsCount = response.data.projects.length;

      const maxprojectsScore = 5; 

      // Looking for platform badge + platform related quests
      let platformScore=0; 
      //we are using container
      if(projectType.has('apk') || projectType.has('dockerfile') || projectType.has('rpm')) {
        platformScore++;
      }
      //we are using IaC
      if(projectType.has('k8sconfig') || projectType.has('terraformconfig') || projectType.has('helmconfig') || projectType.has('cloudformation')) {
        platformScore++;
      }
      //we are using SAST
      if(projectType.has('sast') ) {
        platformScore++;
      }

      // check for platform trophy and extra scan task
      if (platformScore > 0) {
        store.commit('addScore', platformScore);
        store.commit('updateQuest',{category:'find',questName: 'extraScan', value: true})
        if(platformScore == 3) {
          store.commit('trophy',{key:'platform',value:true})
        }
      }

      //Looking for the number of project imported
      if(projectsCount>maxprojectsScore) {
        projectsCount = maxprojectsScore;
      }
      if (projectsCount > 0) {
        store.commit('addScore', projectsCount);
        store.commit('updateQuest',{category:'find',questName: 'importOne', value: true}) 
        if(projectsCount > 1) {
          store.commit('updateQuest',{category:'find',questName: 'importMulti', value: true})
        }
      }

      //Integration tasks
      const resultsOrigin = response.data.projects.map( (el) => el.origin);
      const originsSet = new Set(resultsOrigin);
      // SCM integration
      if(originsSet.has('azure-repos') || originsSet.has('github') || originsSet.has('gitlab') || originsSet.has('bitbucket-cloud') || originsSet.has('bitbucket-server')) {
        store.commit('updateQuest',{category:'find',questName: 'scmIntegration', value: true})
        store.commit('addScore', 1);
      }
      // CI/CD or CLI integration
      if(originsSet.has('cli')) {
        store.commit('updateQuest',{category:'monitor',questName: 'cicdcli', value: true})
        store.commit('addScore', 1);
        if (resultsOrigin.filter( (e) => e == 'cli').length > 1) {
          store.commit('addScore', 1);
        }
      }
    })

    //fixer trophy
    Game.apiClient.listIssuesOnePage(Game.headers,Game.reqVulnBody).then( (res) => {  
      if(res.data.total > 0) {
        store.commit('trophy', {key:'fixer',value:true})
        store.commit('updateQuest',{category:'fix',questName: 'fixIssue', value: true})
        if(res.data.total > 10) {
          store.commit('addScore', 10);
        } else {
          store.commit('addScore', res.data.total);
        }
      }
    });

  }
}
