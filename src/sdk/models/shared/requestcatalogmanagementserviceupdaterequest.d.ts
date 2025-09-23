import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { RequestCatalogInput, RequestCatalogInput$Outbound } from "./requestcatalog.js";
import { RequestCatalogExpandMask, RequestCatalogExpandMask$Outbound } from "./requestcatalogexpandmask.js";
/**
 * Update a request catalog object by ID.
 */
export type RequestCatalogManagementServiceUpdateRequest = {
    catalog?: RequestCatalogInput | null | undefined;
    expandMask?: RequestCatalogExpandMask | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const RequestCatalogManagementServiceUpdateRequest$inboundSchema: z.ZodType<RequestCatalogManagementServiceUpdateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestCatalogManagementServiceUpdateRequest$Outbound = {
    catalog?: RequestCatalogInput$Outbound | null | undefined;
    expandMask?: RequestCatalogExpandMask$Outbound | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const RequestCatalogManagementServiceUpdateRequest$outboundSchema: z.ZodType<RequestCatalogManagementServiceUpdateRequest$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceUpdateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequestCatalogManagementServiceUpdateRequest$ {
    /** @deprecated use `RequestCatalogManagementServiceUpdateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequestCatalogManagementServiceUpdateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequestCatalogManagementServiceUpdateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequestCatalogManagementServiceUpdateRequest$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceUpdateRequest>;
    /** @deprecated use `RequestCatalogManagementServiceUpdateRequest$Outbound` instead. */
    type Outbound = RequestCatalogManagementServiceUpdateRequest$Outbound;
}
export declare function requestCatalogManagementServiceUpdateRequestToJSON(requestCatalogManagementServiceUpdateRequest: RequestCatalogManagementServiceUpdateRequest): string;
export declare function requestCatalogManagementServiceUpdateRequestFromJSON(jsonString: string): SafeParseResult<RequestCatalogManagementServiceUpdateRequest, SDKValidationError>;
