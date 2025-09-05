import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The outcome of a provision instance that is cancelled.
 */
export type CancelledAction = {
    cancelledAt?: Date | null | undefined;
    /**
     * The userID, usually the system, that cancells a provision instance.
     */
    cancelledByUserId?: string | null | undefined;
};
/** @internal */
export declare const CancelledAction$inboundSchema: z.ZodType<CancelledAction, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelledAction$Outbound = {
    cancelledAt?: string | null | undefined;
    cancelledByUserId?: string | null | undefined;
};
/** @internal */
export declare const CancelledAction$outboundSchema: z.ZodType<CancelledAction$Outbound, z.ZodTypeDef, CancelledAction>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelledAction$ {
    /** @deprecated use `CancelledAction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelledAction, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelledAction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelledAction$Outbound, z.ZodTypeDef, CancelledAction>;
    /** @deprecated use `CancelledAction$Outbound` instead. */
    type Outbound = CancelledAction$Outbound;
}
export declare function cancelledActionToJSON(cancelledAction: CancelledAction): string;
export declare function cancelledActionFromJSON(jsonString: string): SafeParseResult<CancelledAction, SDKValidationError>;
