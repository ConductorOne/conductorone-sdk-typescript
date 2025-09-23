import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { GrantTriggerFilter, GrantTriggerFilter$Outbound } from "./granttriggerfilter.js";
/**
 * The GrantFoundTrigger message.
 */
export type GrantFoundTrigger = {
    grantTriggerFilter?: GrantTriggerFilter | null | undefined;
};
/** @internal */
export declare const GrantFoundTrigger$inboundSchema: z.ZodType<GrantFoundTrigger, z.ZodTypeDef, unknown>;
/** @internal */
export type GrantFoundTrigger$Outbound = {
    grantTriggerFilter?: GrantTriggerFilter$Outbound | null | undefined;
};
/** @internal */
export declare const GrantFoundTrigger$outboundSchema: z.ZodType<GrantFoundTrigger$Outbound, z.ZodTypeDef, GrantFoundTrigger>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GrantFoundTrigger$ {
    /** @deprecated use `GrantFoundTrigger$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GrantFoundTrigger, z.ZodTypeDef, unknown>;
    /** @deprecated use `GrantFoundTrigger$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GrantFoundTrigger$Outbound, z.ZodTypeDef, GrantFoundTrigger>;
    /** @deprecated use `GrantFoundTrigger$Outbound` instead. */
    type Outbound = GrantFoundTrigger$Outbound;
}
export declare function grantFoundTriggerToJSON(grantFoundTrigger: GrantFoundTrigger): string;
export declare function grantFoundTriggerFromJSON(jsonString: string): SafeParseResult<GrantFoundTrigger, SDKValidationError>;
