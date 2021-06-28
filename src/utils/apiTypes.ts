import { Issue } from './types';

export interface APIFiltersBodyRequest {
    readonly filters: Filters|ProjectFilters;    
  };

export interface Filters {
  readonly orgs: string[];
    readonly languages?: string[];
    readonly types?: string[];
    readonly isFixed?: boolean;
}

export interface ListIssueResponse {
  readonly results: Issue[];
  readonly total: number;
}

export interface APIHeaderRequest {
  readonly org: string;
  readonly from?: string;
  readonly to?: string;
}

export interface ProjectFilters {
  readonly origin?: string;
}