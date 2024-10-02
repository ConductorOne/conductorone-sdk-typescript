/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ConductoroneSDKTypescriptCore } from "../core.js";
import { encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../sdk/models/errors/httpclienterrors.js";
import { SDKError } from "../sdk/models/errors/sdkerror.js";
import { SDKValidationError } from "../sdk/models/errors/sdkvalidationerror.js";
import * as operations from "../sdk/models/operations/index.js";
import { Result } from "../sdk/types/fp.js";

/**
 * Get Bundle Automation
 *
 * @remarks
 * Get bundle automation
 */
export async function requestCatalogManagementGetBundleAutomation(
  client: ConductoroneSDKTypescriptCore,
  request:
    operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationRequest,
  options?: RequestOptions,
): Promise<
  Result<
    operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationResponse,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input = request;

  const parsed = safeParse(
    input,
    (value) =>
      operations
        .C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationRequest$outboundSchema
        .parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    request_catalog_id: encodeSimple(
      "request_catalog_id",
      payload.request_catalog_id,
      { explode: false, charEncoding: "percent" },
    ),
  };

  const path = pathToFunc(
    "/api/v1/catalogs/{request_catalog_id}/bundle_automation",
  )(pathParams);

  const headers = new Headers({
    Accept: "application/json",
  });

  const securityInput = await extractSecurity(client._options.security);
  const context = {
    operationID:
      "c1.api.requestcatalog.v1.RequestCatalogManagementService.GetBundleAutomation",
    oAuth2Scopes: [],
    securitySource: client._options.security,
  };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: [],
    retryConfig: options?.retries
      || client._options.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields = {
    ContentType: response.headers.get("content-type")
      ?? "application/octet-stream",
    StatusCode: response.status,
    RawResponse: response,
    Headers: {},
  };

  const [result] = await M.match<
    operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationResponse,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(
      200,
      operations
        .C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationResponse$inboundSchema,
      { key: "BundleAutomation" },
    ),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
