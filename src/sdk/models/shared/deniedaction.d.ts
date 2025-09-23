import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The denied action indicates that the c1.api.policy.v1.ApprovalInstance had an outcome of denied.
 */
export type DeniedAction = {
    deniedAt?: Date | null | undefined;
    /**
     * The UserID that denied this step.
     */
    userId?: string | null | undefined;
};
/** @internal */
export declare const DeniedAction$inboundSchema: z.ZodType<DeniedAction, z.ZodTypeDef, unknown>;
/** @internal */
export type DeniedAction$Outbound = {
    deniedAt?: string | null | undefined;
    userId?: string | null | undefined;
};
/** @internal */
export declare const DeniedAction$outboundSchema: z.ZodType<DeniedAction$Outbound, z.ZodTypeDef, DeniedAction>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeniedAction$ {
    /** @deprecated use `DeniedAction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeniedAction, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeniedAction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeniedAction$Outbound, z.ZodTypeDef, DeniedAction>;
    /** @deprecated use `DeniedAction$Outbound` instead. */
    type Outbound = DeniedAction$Outbound;
}
export declare function deniedActionToJSON(deniedAction: DeniedAction): string;
export declare function deniedActionFromJSON(jsonString: string): SafeParseResult<DeniedAction, SDKValidationError>;
