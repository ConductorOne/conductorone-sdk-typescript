import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The CIDRRestriction message.
 */
export type CIDRRestriction = {
    /**
     * The enabled field.
     */
    enabled?: boolean | null | undefined;
    /**
     * The sourceCidr field.
     */
    sourceCidr?: Array<string> | null | undefined;
};
/** @internal */
export declare const CIDRRestriction$inboundSchema: z.ZodType<CIDRRestriction, z.ZodTypeDef, unknown>;
/** @internal */
export type CIDRRestriction$Outbound = {
    enabled?: boolean | null | undefined;
    sourceCidr?: Array<string> | null | undefined;
};
/** @internal */
export declare const CIDRRestriction$outboundSchema: z.ZodType<CIDRRestriction$Outbound, z.ZodTypeDef, CIDRRestriction>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CIDRRestriction$ {
    /** @deprecated use `CIDRRestriction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CIDRRestriction, z.ZodTypeDef, unknown>;
    /** @deprecated use `CIDRRestriction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CIDRRestriction$Outbound, z.ZodTypeDef, CIDRRestriction>;
    /** @deprecated use `CIDRRestriction$Outbound` instead. */
    type Outbound = CIDRRestriction$Outbound;
}
export declare function cidrRestrictionToJSON(cidrRestriction: CIDRRestriction): string;
export declare function cidrRestrictionFromJSON(jsonString: string): SafeParseResult<CIDRRestriction, SDKValidationError>;
