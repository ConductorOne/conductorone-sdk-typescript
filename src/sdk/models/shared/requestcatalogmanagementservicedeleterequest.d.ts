import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Delete a request catalog by Id. It uses URL value for input.
 */
export type RequestCatalogManagementServiceDeleteRequest = {};
/** @internal */
export declare const RequestCatalogManagementServiceDeleteRequest$inboundSchema: z.ZodType<RequestCatalogManagementServiceDeleteRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestCatalogManagementServiceDeleteRequest$Outbound = {};
/** @internal */
export declare const RequestCatalogManagementServiceDeleteRequest$outboundSchema: z.ZodType<RequestCatalogManagementServiceDeleteRequest$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceDeleteRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequestCatalogManagementServiceDeleteRequest$ {
    /** @deprecated use `RequestCatalogManagementServiceDeleteRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequestCatalogManagementServiceDeleteRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequestCatalogManagementServiceDeleteRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequestCatalogManagementServiceDeleteRequest$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceDeleteRequest>;
    /** @deprecated use `RequestCatalogManagementServiceDeleteRequest$Outbound` instead. */
    type Outbound = RequestCatalogManagementServiceDeleteRequest$Outbound;
}
export declare function requestCatalogManagementServiceDeleteRequestToJSON(requestCatalogManagementServiceDeleteRequest: RequestCatalogManagementServiceDeleteRequest): string;
export declare function requestCatalogManagementServiceDeleteRequestFromJSON(jsonString: string): SafeParseResult<RequestCatalogManagementServiceDeleteRequest, SDKValidationError>;
