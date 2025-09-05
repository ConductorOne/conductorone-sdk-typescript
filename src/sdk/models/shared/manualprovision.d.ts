import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Manual provisioning indicates that a human must intervene for the provisioning of this step.
 */
export type ManualProvision = {
    /**
     * This field indicates a text body of instructions for the provisioner to indicate.
     */
    instructions?: string | null | undefined;
    /**
     * An array of users that are required to provision during this step.
     */
    userIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const ManualProvision$inboundSchema: z.ZodType<ManualProvision, z.ZodTypeDef, unknown>;
/** @internal */
export type ManualProvision$Outbound = {
    instructions?: string | null | undefined;
    userIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const ManualProvision$outboundSchema: z.ZodType<ManualProvision$Outbound, z.ZodTypeDef, ManualProvision>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ManualProvision$ {
    /** @deprecated use `ManualProvision$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ManualProvision, z.ZodTypeDef, unknown>;
    /** @deprecated use `ManualProvision$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ManualProvision$Outbound, z.ZodTypeDef, ManualProvision>;
    /** @deprecated use `ManualProvision$Outbound` instead. */
    type Outbound = ManualProvision$Outbound;
}
export declare function manualProvisionToJSON(manualProvision: ManualProvision): string;
export declare function manualProvisionFromJSON(jsonString: string): SafeParseResult<ManualProvision, SDKValidationError>;
