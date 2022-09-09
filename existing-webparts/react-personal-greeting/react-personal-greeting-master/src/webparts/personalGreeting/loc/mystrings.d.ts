declare interface IPersonalGreetingWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  UserLang: string;
  GreetingFr: string;
  GreetingEn: string;
}

declare module 'PersonalGreetingWebPartStrings' {
  const strings: IPersonalGreetingWebPartStrings;
  export = strings;
}
