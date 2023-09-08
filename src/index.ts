import axios, { InternalAxiosRequestConfig } from "axios";

import { Token } from "./token";
import {
  ServerList,
  ConductoroneSDKTypescript as ConductoroneSDKTypescript_orig,
} from "./src/sdk";
import type {
  SDKProps as SDKProps_orig,
} from "./src/sdk";

export interface SDKProps extends SDKProps_orig {
  clientID?: string;
  clientSecret?: string;
  serverURL?: string;
  serverIdx?: number;
  defaultClient?: any;
}

export class ConductoroneSDKTypescript extends ConductoroneSDKTypescript_orig {
  constructor(props?: SDKProps) {
    const serverIdx = props?.serverIdx ?? 0;
    let serverURL = props?.serverURL || ServerList[serverIdx];

    const defaultClient = props?.defaultClient ?? axios.create({baseURL: serverURL});
    const tokenClient = props?.defaultClient ?? axios.create({baseURL: serverURL});

    if (props?.clientID && props?.clientSecret) {
      const token = new Token(tokenClient, serverURL, props.clientID, props.clientSecret);
      defaultClient
      .interceptors
      .request
      .use(async (config): Promise<InternalAxiosRequestConfig<any>> => {
        const bearer = await token.getToken()
        config.headers.Authorization = `Bearer ${bearer}`;
        return config;
      });
    }

    super({...props, defaultClient});
  }
}

export { SDKConfiguration, ServerList } from "./src/sdk";
