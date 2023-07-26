/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "./models/errors";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class RequestCatalogManagement {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Add Access Entitlements
     *
     * @remarks
     *  Add visibility bindings (access entitlements) to a catalog.
     *
     */
    async addAccessEntitlements(
        req: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req =
                new operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsRequest(
                    req
                );
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/api/v1/catalogs/{catalog_id}/visibility_bindings",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "requestCatalogManagementServiceAddAccessEntitlementsRequest",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsResponse =
            new operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsResponse(
                {
                    statusCode: httpRes.status,
                    contentType: contentType,
                    rawResponse: httpRes,
                }
            );
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.requestCatalogManagementServiceAddAccessEntitlementsResponse =
                        utils.objectToClass(
                            JSON.parse(decodedRes),
                            shared.RequestCatalogManagementServiceAddAccessEntitlementsResponse
                        );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Add App Entitlements
     *
     * @remarks
     *  Add requestable entitlements to a catalog.
     *
     */
    async addAppEntitlements(
        req: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req =
                new operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsRequest(
                    req
                );
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/api/v1/catalogs/{catalog_id}/requestable_entries",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "requestCatalogManagementServiceAddAppEntitlementsRequest",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsResponse =
            new operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsResponse(
                {
                    statusCode: httpRes.status,
                    contentType: contentType,
                    rawResponse: httpRes,
                }
            );
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.requestCatalogManagementServiceAddAppEntitlementsResponse =
                        utils.objectToClass(
                            JSON.parse(decodedRes),
                            shared.RequestCatalogManagementServiceAddAppEntitlementsResponse
                        );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Create
     *
     * @remarks
     *  Creates a new request catalog.
     *
     */
    async create(
        req: shared.RequestCatalogManagementServiceCreateRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceCreateResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new shared.RequestCatalogManagementServiceCreateRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/api/v1/catalogs";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "request", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceCreateResponse =
            new operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceCreateResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.requestCatalogManagementServiceGetResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.RequestCatalogManagementServiceGetResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Delete
     *
     * @remarks
     *  Delete a catalog.
     *
     */
    async delete(
        req: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteRequest(
                req
            );
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/api/v1/catalogs/{id}", req);

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "requestCatalogManagementServiceDeleteRequest",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "delete",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteResponse =
            new operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.requestCatalogManagementServiceDeleteResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.RequestCatalogManagementServiceDeleteResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get
     *
     * @remarks
     *  Get a catalog.
     *
     */
    async get(
        req: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceGetRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceGetResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceGetRequest(
                req
            );
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/api/v1/catalogs/{id}", req);

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceGetResponse =
            new operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceGetResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.requestCatalogManagementServiceGetResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.RequestCatalogManagementServiceGetResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * List Entitlements For Access
     *
     * @remarks
     *  List visibility bindings (access entitlements) for a catalog.
     *
     */
    async listEntitlementsForAccess(
        req: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req =
                new operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessRequest(
                    req
                );
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/api/v1/catalogs/{catalog_id}/visibility_entitlements",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessResponse =
            new operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessResponse(
                {
                    statusCode: httpRes.status,
                    contentType: contentType,
                    rawResponse: httpRes,
                }
            );
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.requestCatalogManagementServiceListEntitlementsForAccessResponse =
                        utils.objectToClass(
                            JSON.parse(decodedRes),
                            shared.RequestCatalogManagementServiceListEntitlementsForAccessResponse
                        );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * List Entitlements Per Catalog
     *
     * @remarks
     *  List entitlements in a catalog that are requestable.
     *
     */
    async listEntitlementsPerCatalog(
        req: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req =
                new operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogRequest(
                    req
                );
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/api/v1/catalogs/{catalog_id}/requestable_entitlements",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogResponse =
            new operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogResponse(
                {
                    statusCode: httpRes.status,
                    contentType: contentType,
                    rawResponse: httpRes,
                }
            );
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.requestCatalogManagementServiceListEntitlementsPerCatalogResponse =
                        utils.objectToClass(
                            JSON.parse(decodedRes),
                            shared.RequestCatalogManagementServiceListEntitlementsPerCatalogResponse
                        );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Remove Access Entitlements
     *
     * @remarks
     *  Remove visibility bindings (access entitlements) to a catalog.
     *
     */
    async removeAccessEntitlements(
        req: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req =
                new operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsRequest(
                    req
                );
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/api/v1/catalogs/{catalog_id}/visibility_bindings",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "requestCatalogManagementServiceRemoveAccessEntitlementsRequest",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "delete",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsResponse =
            new operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsResponse(
                {
                    statusCode: httpRes.status,
                    contentType: contentType,
                    rawResponse: httpRes,
                }
            );
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.requestCatalogManagementServiceRemoveAccessEntitlementsResponse =
                        utils.objectToClass(
                            JSON.parse(decodedRes),
                            shared.RequestCatalogManagementServiceRemoveAccessEntitlementsResponse
                        );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Remove App Entitlements
     *
     * @remarks
     *  Remove requestable entitlements from a catalog.
     *
     */
    async removeAppEntitlements(
        req: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req =
                new operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsRequest(
                    req
                );
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/api/v1/catalogs/{catalog_id}/requestable_entries",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "requestCatalogManagementServiceRemoveAppEntitlementsRequest",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "delete",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsResponse =
            new operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsResponse(
                {
                    statusCode: httpRes.status,
                    contentType: contentType,
                    rawResponse: httpRes,
                }
            );
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.requestCatalogManagementServiceRemoveAppEntitlementsResponse =
                        utils.objectToClass(
                            JSON.parse(decodedRes),
                            shared.RequestCatalogManagementServiceRemoveAppEntitlementsResponse
                        );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Update
     *
     * @remarks
     *  Update a catalog.
     *
     */
    async update(
        req: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateRequest(
                req
            );
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/api/v1/catalogs/{id}", req);

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "requestCatalogManagementServiceUpdateRequestInput",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateResponse =
            new operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.requestCatalogManagementServiceGetResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.RequestCatalogManagementServiceGetResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }
}
