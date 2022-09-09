import { WebPartContext } from "@microsoft/sp-webpart-base";


export interface IPersonalGreetingProps {
  greetingTextEN: string;
  greetingTextFR: string;
  context: WebPartContext;
  position: string;
  textColor: string;
  fontSize: number;
  backgroundColor: string;
}
