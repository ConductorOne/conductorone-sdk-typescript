import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The RequestCatalogExpandMask includes the paths in the catalog view to expand in the return value of this call.
 */
export type RequestCatalogExpandMask = {
    /**
     * An array of paths to be expanded in the response. May be any combination of "*", "created_by_user_id", "app_ids", and "access_entitlements".
     */
    paths?: Array<string> | null | undefined;
};
/** @internal */
export declare const RequestCatalogExpandMask$inboundSchema: z.ZodType<RequestCatalogExpandMask, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestCatalogExpandMask$Outbound = {
    paths?: Array<string> | null | undefined;
};
/** @internal */
export declare const RequestCatalogExpandMask$outboundSchema: z.ZodType<RequestCatalogExpandMask$Outbound, z.ZodTypeDef, RequestCatalogExpandMask>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequestCatalogExpandMask$ {
    /** @deprecated use `RequestCatalogExpandMask$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequestCatalogExpandMask, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequestCatalogExpandMask$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequestCatalogExpandMask$Outbound, z.ZodTypeDef, RequestCatalogExpandMask>;
    /** @deprecated use `RequestCatalogExpandMask$Outbound` instead. */
    type Outbound = RequestCatalogExpandMask$Outbound;
}
export declare function requestCatalogExpandMaskToJSON(requestCatalogExpandMask: RequestCatalogExpandMask): string;
export declare function requestCatalogExpandMaskFromJSON(jsonString: string): SafeParseResult<RequestCatalogExpandMask, SDKValidationError>;
