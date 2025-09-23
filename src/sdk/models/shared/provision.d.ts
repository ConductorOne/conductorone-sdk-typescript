import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ProvisionPolicyInput, ProvisionPolicyInput$Outbound } from "./provisionpolicyinput.js";
import { ProvisionTarget, ProvisionTarget$Outbound } from "./provisiontarget.js";
/**
 * The provision step references a provision policy for this step.
 */
export type Provision = {
    /**
     * A field indicating whether this step is assigned.
     */
    assigned?: boolean | null | undefined;
    provisionPolicy?: ProvisionPolicyInput | null | undefined;
    provisionTarget?: ProvisionTarget | null | undefined;
};
/** @internal */
export declare const Provision$inboundSchema: z.ZodType<Provision, z.ZodTypeDef, unknown>;
/** @internal */
export type Provision$Outbound = {
    assigned?: boolean | null | undefined;
    provisionPolicy?: ProvisionPolicyInput$Outbound | null | undefined;
    provisionTarget?: ProvisionTarget$Outbound | null | undefined;
};
/** @internal */
export declare const Provision$outboundSchema: z.ZodType<Provision$Outbound, z.ZodTypeDef, Provision>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Provision$ {
    /** @deprecated use `Provision$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Provision, z.ZodTypeDef, unknown>;
    /** @deprecated use `Provision$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Provision$Outbound, z.ZodTypeDef, Provision>;
    /** @deprecated use `Provision$Outbound` instead. */
    type Outbound = Provision$Outbound;
}
export declare function provisionToJSON(provision: Provision): string;
export declare function provisionFromJSON(jsonString: string): SafeParseResult<Provision, SDKValidationError>;
