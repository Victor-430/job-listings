export interface JobTypes {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

export type JobProp = {
  job: JobTypes;
};

export interface JobWithAddFilterProp extends JobProp {
  addFilter: (filter: string) => void;
}

export interface FilterListingsProps {
  clearFilter: () => void;
  removeFilter: (filter: string) => void;
  selectedFilters: string[];
}

export type languagesProp = {
  languages: string[];
};
