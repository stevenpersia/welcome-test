export interface IJob {
  id: number;
  cms_sites_references: string[];
  contract_type: ILang;
  created_at: ILang;
  department: { id: number; name: string };
  description: string;
  name: string;
  office: IOffice;
  profile: string;
  published_at: string;
  reference: string;
  salary: ISalary;
  slug: string;
  websites_urls: IWebsiteUrl[];
}

export interface IWebsiteUrl {
  url: string;
  website_reference: string;
}

export interface IWebsite {
  kind: string;
  organization_url: string;
  reference: string;
  root_url: string;
}

export interface ILang {
  cs?: string;
  en?: string;
  es?: string;
  fr?: string;
  sk?: string;
}

export interface IOffice {
  id: number;
  address: string;
  city: string;
  country: ILang;
  district: string;
  name: string;
  zip_code: string;
}

export interface ISalary {
  min: number | null;
  max: number | null;
  currency: string;
  period: string;
}
