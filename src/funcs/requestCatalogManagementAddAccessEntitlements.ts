/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ConductoroneSDKTypescriptCore } from "../core.js";
import {
  encodeJSON as encodeJSON$,
  encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
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
 * Add Access Entitlements
 *
 * @remarks
 * Add visibility bindings (access entitlements) to a catalog.
 */
export async function requestCatalogManagementAddAccessEntitlements(
  client$: ConductoroneSDKTypescriptCore,
  request:
    operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsRequest,
  options?: RequestOptions,
): Promise<
  Result<
    operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsResponse,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input$ = request;

  const parsed$ = schemas$.safeParse(
    input$,
    (value$) =>
      operations
        .C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsRequest$outboundSchema
        .parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = encodeJSON$(
    "body",
    payload$.RequestCatalogManagementServiceAddAccessEntitlementsRequest,
    { explode: true },
  );

  const pathParams$ = {
    catalog_id: encodeSimple$("catalog_id", payload$.catalog_id, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path$ = pathToFunc("/api/v1/catalogs/{catalog_id}/visibility_bindings")(
    pathParams$,
  );

  const headers$ = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
  });

  const security$ = await extractSecurity(client$.options$.security);
  const context = {
    operationID:
      "c1.api.requestcatalog.v1.RequestCatalogManagementService.AddAccessEntitlements",
    oAuth2Scopes: [],
    securitySource: client$.options$.security,
  };
  const securitySettings$ = resolveGlobalSecurity(security$);

  const requestRes = client$.createRequest$(context, {
    security: securitySettings$,
    method: "POST",
    path: path$,
    headers: headers$,
    body: body$,
    timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const request$ = requestRes.value;

  const doResult = await client$.do$(request$, {
    context,
    errorCodes: [],
    retryConfig: options?.retries
      || client$.options$.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields$ = {
    ContentType: response.headers.get("content-type")
      ?? "application/octet-stream",
    StatusCode: response.status,
    RawResponse: response,
    Headers: {},
  };

  const [result$] = await m$.match<
    operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsResponse,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.json(
      200,
      operations
        .C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsResponse$inboundSchema,
      { key: "RequestCatalogManagementServiceAddAccessEntitlementsResponse" },
    ),
  )(response, { extraFields: responseFields$ });
  if (!result$.ok) {
    return result$;
  }

  return result$;
}
