  export interface Issue{
  readonly id: string;
  readonly title: string;
  readonly type: string;
  readonly language: string;
  readonly package: string;
  readonly packageManager: string;
  readonly exploitMaturity: string;
  readonly isUpgradable: boolean;
  readonly isPinnable: boolean;
  readonly isPatchable: boolean;
  readonly isIgnored: boolean;
  readonly severity: Severity;
  readonly cvssScore: string;
  readonly priorityScore: number;
  readonly version: string;
}

export interface Project {
  readonly id: string;
  readonly name: string;
  readonly source: string;
  readonly url: string;

}

export type Severity = 'low' | 'medium' | 'high' | 'none';

export interface License {
  readonly id: string;
  readonly dependencies: LicenseDependency[];
  readonly severity: Severity;
}

interface BaseDependency {
  readonly id: string;
  readonly name: string;
  readonly version: string;
}

export interface LicenseDependency extends BaseDependency {
  readonly packageManager: string;
}

export interface Dependency extends BaseDependency {
  readonly latestVersion: string;
  readonly isDeprecated: boolean;
  readonly issuesHigh: number;
  readonly issuesMedium: number;
  readonly issuesLow: number;
  readonly type: string;
}

export interface IssueEnriched {
  readonly issue: Issue;
  readonly isFixed: boolean;
  readonly introduceDate: string;
  readonly project: Project;
}