import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The empty response message for setting the app entitlement owners.
 */
export type SetAppEntitlementOwnersResponse = {};
/** @internal */
export declare const SetAppEntitlementOwnersResponse$inboundSchema: z.ZodType<SetAppEntitlementOwnersResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type SetAppEntitlementOwnersResponse$Outbound = {};
/** @internal */
export declare const SetAppEntitlementOwnersResponse$outboundSchema: z.ZodType<SetAppEntitlementOwnersResponse$Outbound, z.ZodTypeDef, SetAppEntitlementOwnersResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SetAppEntitlementOwnersResponse$ {
    /** @deprecated use `SetAppEntitlementOwnersResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SetAppEntitlementOwnersResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `SetAppEntitlementOwnersResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SetAppEntitlementOwnersResponse$Outbound, z.ZodTypeDef, SetAppEntitlementOwnersResponse>;
    /** @deprecated use `SetAppEntitlementOwnersResponse$Outbound` instead. */
    type Outbound = SetAppEntitlementOwnersResponse$Outbound;
}
export declare function setAppEntitlementOwnersResponseToJSON(setAppEntitlementOwnersResponse: SetAppEntitlementOwnersResponse): string;
export declare function setAppEntitlementOwnersResponseFromJSON(jsonString: string): SafeParseResult<SetAppEntitlementOwnersResponse, SDKValidationError>;
