import { Issue } from './types';

export interface APIFiltersBodyRequest {
    readonly filters: Filters;    
  };

export interface Filters {
    readonly orgs: string[];
    readonly languages?: string[];
    readonly types: string[];
}

export interface ListIssueResponse {
  readonly results: Issue[];
  readonly total: number;
}

export interface APIHeaderRequest {
  readonly org: string;
}