import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { GrantTriggerFilter, GrantTriggerFilter$Outbound } from "./granttriggerfilter.js";
/**
 * The GrantDeletedTrigger message.
 */
export type GrantDeletedTrigger = {
    grantTriggerFilter?: GrantTriggerFilter | null | undefined;
};
/** @internal */
export declare const GrantDeletedTrigger$inboundSchema: z.ZodType<GrantDeletedTrigger, z.ZodTypeDef, unknown>;
/** @internal */
export type GrantDeletedTrigger$Outbound = {
    grantTriggerFilter?: GrantTriggerFilter$Outbound | null | undefined;
};
/** @internal */
export declare const GrantDeletedTrigger$outboundSchema: z.ZodType<GrantDeletedTrigger$Outbound, z.ZodTypeDef, GrantDeletedTrigger>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GrantDeletedTrigger$ {
    /** @deprecated use `GrantDeletedTrigger$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GrantDeletedTrigger, z.ZodTypeDef, unknown>;
    /** @deprecated use `GrantDeletedTrigger$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GrantDeletedTrigger$Outbound, z.ZodTypeDef, GrantDeletedTrigger>;
    /** @deprecated use `GrantDeletedTrigger$Outbound` instead. */
    type Outbound = GrantDeletedTrigger$Outbound;
}
export declare function grantDeletedTriggerToJSON(grantDeletedTrigger: GrantDeletedTrigger): string;
export declare function grantDeletedTriggerFromJSON(jsonString: string): SafeParseResult<GrantDeletedTrigger, SDKValidationError>;
