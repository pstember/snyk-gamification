import Vue from 'vue';
import Vuex from 'vuex';

import store from '../store'
// Snyk API import
import SnykAPI from '../utils/http-client-snyk';
import { APIFiltersBodyRequest as APIFiltersVulnBodyRequest, APIHeaderRequest } from '../utils/apiTypes';
import { Dependency, IssueEnriched, License } from '../utils/types';

Vue.use(Vuex)

export default class Game {

  protected static apiClient: SnykAPI = SnykAPI.getInstance();

  // Open-source data fetching
  // Define header for counting vulns
  protected static  reqVulnBody: APIFiltersVulnBodyRequest = {
    filters: {
      orgs: [process.env.VUE_APP_ORG],
      languages: ['node', 'javascript', 'ruby', 'java', 'scala', 'python', 'golang', 'php', 'dotnet', 'swift-objective-c'],
      types: ['vuln'],
  }};
  protected static headers: APIHeaderRequest = {
    org: process.env.VUE_APP_ORG,
  }

  public static async load() {
    Game.init();
    Game.loadTrophies();
  }

  protected static async init() {
    //fetch org name
  
    Game.apiClient.findOrgName(Game.headers).then( (response) => {
      //debugger
      const org = response.data.orgs.filter( (org) => org.id == process.env.VUE_APP_ORG )[0]
      //debugger
      store.commit('profile', {org: {slug: org.slug, url:org.url}})
    })
      //store org name into store
  }

  protected static async loadTrophies() {
    // fetch the info for list of trophies
    const vulns: IssueEnriched[] = [];
    let trophies;
    //debugger
    Game.apiClient.listAllIntegrations(Game.headers).then( (response) => {
      //trophies = new Map(Object.entries(response.data)).size;
      trophies = Object.entries(response.data).length;
       //debugger;

      // updating store for dynamic rendering
      store.commit('trophies', trophies);
    });
  }

}
