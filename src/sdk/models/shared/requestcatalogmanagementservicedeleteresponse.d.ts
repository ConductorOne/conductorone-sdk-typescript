import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Empty response with a status code indicating success.
 */
export type RequestCatalogManagementServiceDeleteResponse = {};
/** @internal */
export declare const RequestCatalogManagementServiceDeleteResponse$inboundSchema: z.ZodType<RequestCatalogManagementServiceDeleteResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestCatalogManagementServiceDeleteResponse$Outbound = {};
/** @internal */
export declare const RequestCatalogManagementServiceDeleteResponse$outboundSchema: z.ZodType<RequestCatalogManagementServiceDeleteResponse$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceDeleteResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequestCatalogManagementServiceDeleteResponse$ {
    /** @deprecated use `RequestCatalogManagementServiceDeleteResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequestCatalogManagementServiceDeleteResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequestCatalogManagementServiceDeleteResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequestCatalogManagementServiceDeleteResponse$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceDeleteResponse>;
    /** @deprecated use `RequestCatalogManagementServiceDeleteResponse$Outbound` instead. */
    type Outbound = RequestCatalogManagementServiceDeleteResponse$Outbound;
}
export declare function requestCatalogManagementServiceDeleteResponseToJSON(requestCatalogManagementServiceDeleteResponse: RequestCatalogManagementServiceDeleteResponse): string;
export declare function requestCatalogManagementServiceDeleteResponseFromJSON(jsonString: string): SafeParseResult<RequestCatalogManagementServiceDeleteResponse, SDKValidationError>;
