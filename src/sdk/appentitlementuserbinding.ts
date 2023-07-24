/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "./models/errors";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class AppEntitlementUserBinding {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * List App Users For Identity With Grant
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppEntitlementUserBindingService.ListAppUsersForIdentityWithGrant method.
     */
    async listAppUsersForIdentityWithGrant(
        req: operations.C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req =
                new operations.C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantRequest(
                    req
                );
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/api/v1/apps/{app_id}/entitlements/{app_entitlement_id}/users/{identity_user_id}/grants",
            req
        );

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

        const res: operations.C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantResponse =
            new operations.C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantResponse(
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
                    res.listAppUsersForIdentityWithGrantResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ListAppUsersForIdentityWithGrantResponse
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
