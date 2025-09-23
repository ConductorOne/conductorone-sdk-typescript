import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementProxyExpandMask, AppEntitlementProxyExpandMask$Outbound } from "./appentitlementproxyexpandmask.js";
/**
 * The CreateAppEntitlementProxyRequest message.
 */
export type CreateAppEntitlementProxyRequest = {
    expandMask?: AppEntitlementProxyExpandMask | null | undefined;
};
/** @internal */
export declare const CreateAppEntitlementProxyRequest$inboundSchema: z.ZodType<CreateAppEntitlementProxyRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateAppEntitlementProxyRequest$Outbound = {
    expandMask?: AppEntitlementProxyExpandMask$Outbound | null | undefined;
};
/** @internal */
export declare const CreateAppEntitlementProxyRequest$outboundSchema: z.ZodType<CreateAppEntitlementProxyRequest$Outbound, z.ZodTypeDef, CreateAppEntitlementProxyRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateAppEntitlementProxyRequest$ {
    /** @deprecated use `CreateAppEntitlementProxyRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateAppEntitlementProxyRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateAppEntitlementProxyRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateAppEntitlementProxyRequest$Outbound, z.ZodTypeDef, CreateAppEntitlementProxyRequest>;
    /** @deprecated use `CreateAppEntitlementProxyRequest$Outbound` instead. */
    type Outbound = CreateAppEntitlementProxyRequest$Outbound;
}
export declare function createAppEntitlementProxyRequestToJSON(createAppEntitlementProxyRequest: CreateAppEntitlementProxyRequest): string;
export declare function createAppEntitlementProxyRequestFromJSON(jsonString: string): SafeParseResult<CreateAppEntitlementProxyRequest, SDKValidationError>;
