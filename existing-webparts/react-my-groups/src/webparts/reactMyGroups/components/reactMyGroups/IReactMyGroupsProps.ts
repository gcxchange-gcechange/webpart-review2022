import { SPHttpClient } from '@microsoft/sp-http';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

export interface IReactMyGroupsProps {
  seeAllLink:string;
  createCommLink: string;
  titleEn: string;
  titleFr: string;
  layout: string;
  sort: string;
  numberPerPage: number;
  toggleSeeAll: boolean;
  spHttpClient: SPHttpClient;
  themeVariant: IReadonlyTheme | undefined;
  prefLang: string;
}
