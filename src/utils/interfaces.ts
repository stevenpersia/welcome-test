import { Dispatch, SetStateAction } from "react";

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
  recruitment_process: string;
  reference: string;
  salary: ISalary;
  slug: string;
  start_date: ILang;
  websites_urls: IWebsiteUrl[];
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

export interface IWebsite {
  kind: string;
  organization_url: string;
  reference: string;
  root_url: string;
}

export interface IWebsiteUrl {
  url: string;
  website_reference: string;
}

export interface IWuiModal {
  animated: boolean;
  animating: boolean;
  baseId: string;
  hide: () => Dispatch<SetStateAction<boolean>>;
  modal: boolean;
  setAnimated: () => Dispatch<SetStateAction<any>>;
  setBaseId: () => Dispatch<SetStateAction<string>>;
  setModal: () => Dispatch<SetStateAction<IWuiModal>>;
  setVisible: () => Dispatch<SetStateAction<boolean>>;
  show: () => Dispatch<SetStateAction<boolean>>;
  stopAnimation: () => Dispatch<SetStateAction<boolean>>;
  toggle: () => boolean;
  visible: boolean;
}

export interface ISearchFormValues {
  text: string;
  groupBy: string;
}

export interface ISearchGroupByAttributeGroup {
  label: string;
  options: ISearchGroupByAttribute[];
}

export interface ISearchGroupByAttribute {
  label: string;
  value: string;
}
