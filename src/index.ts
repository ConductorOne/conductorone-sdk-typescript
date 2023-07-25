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
}

export class ConductoroneSDKTypescript extends ConductoroneSDKTypescript_orig {
  constructor(props?: SDKProps) {
    let serverURL = props?.serverURL;
    const serverIdx = props?.serverIdx ?? 0;

    if (!serverURL) {
      serverURL = ServerList[serverIdx];
    }

    const defaultClient = props?.defaultClient ?? axios.create({baseURL: serverURL});

    if (props?.clientID && props?.clientSecret) {
      const token = new Token(defaultClient, serverURL, props.clientID, props.clientSecret);
      defaultClient
      .interceptors
      .request
      .use(async (config): Promise<InternalAxiosRequestConfig<any>> => {
        try {
          const bearer = await token.getToken()
          config.headers.Authorization = `Bearer ${bearer}`;
          return config;
        } catch (e) {
          throw new Error(`Error getting bearer token: ${e}`);
        }
      });
    }

    super({...props, defaultClient});
  }
}

export { SDKConfiguration, ServerList } from "./src/sdk";
