/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AppEntitlements } from "./appentitlements";
import { AppEntitlementSearch } from "./appentitlementsearch";
import { AppEntitlementUserBinding } from "./appentitlementuserbinding";
import { AppOwners } from "./appowners";
import { AppReport } from "./appreport";
import { AppReportAction } from "./appreportaction";
import { AppResource } from "./appresource";
import { AppResourceOwners } from "./appresourceowners";
import { AppResourceSearch } from "./appresourcesearch";
import { AppResourceType } from "./appresourcetype";
import { Apps } from "./apps";
import { AppSearch } from "./appsearch";
import { AppUsageControls } from "./appusagecontrols";
import { Auth } from "./auth";
import { Connector } from "./connector";
import { Directory } from "./directory";
import * as shared from "./models/shared";
import { PersonalClient } from "./personalclient";
import { Policies } from "./policies";
import { PolicySearch } from "./policysearch";
import { RequestCatalogManagement } from "./requestcatalogmanagement";
import { RequestCatalogSearch } from "./requestcatalogsearch";
import { Roles } from "./roles";
import { Task } from "./task";
import { TaskActions } from "./taskactions";
import { TaskSearch } from "./tasksearch";
import { User } from "./user";
import { UserSearch } from "./usersearch";
import axios, {AxiosInstance, InternalAxiosRequestConfig} from "axios";
import {Token} from "./token";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * The ConductorOne API server for the current tenant.
     */
    "https://{tenantDomain}.conductor.one",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows setting the tenantDomain variable for url substitution
     */
    tenantDomain?: string;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;

    /**
     * Allows setting a clientID for OAuth2 authentication
     */
    clientID?: string;

    /**
     * Allows setting a clientSecret for OAuth2 authentication
     */
    clientSecret?: string;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    securityClient: AxiosInstance;
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "0.1.0-alpha";
    sdkVersion = "1.1.0";
    genVersion = "2.71.0";

    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * ConductorOne API: The ConductorOne API is a HTTP API for managing ConductorOne resources.
 */
export class ConductoroneSDKTypescript {
    public appEntitlementSearch: AppEntitlementSearch;
    public appEntitlementUserBinding: AppEntitlementUserBinding;
    public appEntitlements: AppEntitlements;
    public appOwners: AppOwners;
    public appReport: AppReport;
    public appReportAction: AppReportAction;
    public appResource: AppResource;
    public appResourceOwners: AppResourceOwners;
    public appResourceSearch: AppResourceSearch;
    public appResourceType: AppResourceType;
    public appSearch: AppSearch;
    public appUsageControls: AppUsageControls;
    public apps: Apps;
    public auth: Auth;
    public connector: Connector;
    public directory: Directory;
    public personalClient: PersonalClient;
    public policies: Policies;
    public policySearch: PolicySearch;
    public requestCatalogManagement: RequestCatalogManagement;
    public requestCatalogSearch: RequestCatalogSearch;
    public roles: Roles;
    public task: Task;
    public taskActions: TaskActions;
    public taskSearch: TaskSearch;
    public user: User;
    public userSearch: UserSearch;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        let defaults: any = {};

        const serverDefaults = [
            {
                tenantDomain: props?.tenantDomain?.toString() ?? "example",
            },
        ];
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
            defaults = serverDefaults[serverIdx];
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

        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            securityClient: defaultClient,
            serverURL: serverURL,
            serverDefaults: defaults,
        });

        this.appEntitlementSearch = new AppEntitlementSearch(this.sdkConfiguration);
        this.appEntitlementUserBinding = new AppEntitlementUserBinding(this.sdkConfiguration);
        this.appEntitlements = new AppEntitlements(this.sdkConfiguration);
        this.appOwners = new AppOwners(this.sdkConfiguration);
        this.appReport = new AppReport(this.sdkConfiguration);
        this.appReportAction = new AppReportAction(this.sdkConfiguration);
        this.appResource = new AppResource(this.sdkConfiguration);
        this.appResourceOwners = new AppResourceOwners(this.sdkConfiguration);
        this.appResourceSearch = new AppResourceSearch(this.sdkConfiguration);
        this.appResourceType = new AppResourceType(this.sdkConfiguration);
        this.appSearch = new AppSearch(this.sdkConfiguration);
        this.appUsageControls = new AppUsageControls(this.sdkConfiguration);
        this.apps = new Apps(this.sdkConfiguration);
        this.auth = new Auth(this.sdkConfiguration);
        this.connector = new Connector(this.sdkConfiguration);
        this.directory = new Directory(this.sdkConfiguration);
        this.personalClient = new PersonalClient(this.sdkConfiguration);
        this.policies = new Policies(this.sdkConfiguration);
        this.policySearch = new PolicySearch(this.sdkConfiguration);
        this.requestCatalogManagement = new RequestCatalogManagement(this.sdkConfiguration);
        this.requestCatalogSearch = new RequestCatalogSearch(this.sdkConfiguration);
        this.roles = new Roles(this.sdkConfiguration);
        this.task = new Task(this.sdkConfiguration);
        this.taskActions = new TaskActions(this.sdkConfiguration);
        this.taskSearch = new TaskSearch(this.sdkConfiguration);
        this.user = new User(this.sdkConfiguration);
        this.userSearch = new UserSearch(this.sdkConfiguration);
    }
}
