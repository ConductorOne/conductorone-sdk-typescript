import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AccountFilter, AccountFilter$Outbound } from "./accountfilter.js";
import { EntitlementFilter, EntitlementFilter$Outbound } from "./entitlementfilter.js";
import { GrantFilter, GrantFilter$Outbound } from "./grantfilter.js";
/**
 * The GrantTriggerFilter message.
 */
export type GrantTriggerFilter = {
    accountFilter?: AccountFilter | null | undefined;
    entitlementFilter?: EntitlementFilter | null | undefined;
    grantFilter?: GrantFilter | null | undefined;
};
/** @internal */
export declare const GrantTriggerFilter$inboundSchema: z.ZodType<GrantTriggerFilter, z.ZodTypeDef, unknown>;
/** @internal */
export type GrantTriggerFilter$Outbound = {
    accountFilter?: AccountFilter$Outbound | null | undefined;
    entitlementFilter?: EntitlementFilter$Outbound | null | undefined;
    grantFilter?: GrantFilter$Outbound | null | undefined;
};
/** @internal */
export declare const GrantTriggerFilter$outboundSchema: z.ZodType<GrantTriggerFilter$Outbound, z.ZodTypeDef, GrantTriggerFilter>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GrantTriggerFilter$ {
    /** @deprecated use `GrantTriggerFilter$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GrantTriggerFilter, z.ZodTypeDef, unknown>;
    /** @deprecated use `GrantTriggerFilter$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GrantTriggerFilter$Outbound, z.ZodTypeDef, GrantTriggerFilter>;
    /** @deprecated use `GrantTriggerFilter$Outbound` instead. */
    type Outbound = GrantTriggerFilter$Outbound;
}
export declare function grantTriggerFilterToJSON(grantTriggerFilter: GrantTriggerFilter): string;
export declare function grantTriggerFilterFromJSON(jsonString: string): SafeParseResult<GrantTriggerFilter, SDKValidationError>;
