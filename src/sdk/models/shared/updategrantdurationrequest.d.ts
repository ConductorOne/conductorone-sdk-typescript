import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The UpdateGrantDurationRequest message.
 */
export type UpdateGrantDurationRequest = {
    newDeprovisionAt?: Date | null | undefined;
};
/** @internal */
export declare const UpdateGrantDurationRequest$inboundSchema: z.ZodType<UpdateGrantDurationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateGrantDurationRequest$Outbound = {
    newDeprovisionAt?: string | null | undefined;
};
/** @internal */
export declare const UpdateGrantDurationRequest$outboundSchema: z.ZodType<UpdateGrantDurationRequest$Outbound, z.ZodTypeDef, UpdateGrantDurationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateGrantDurationRequest$ {
    /** @deprecated use `UpdateGrantDurationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateGrantDurationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateGrantDurationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateGrantDurationRequest$Outbound, z.ZodTypeDef, UpdateGrantDurationRequest>;
    /** @deprecated use `UpdateGrantDurationRequest$Outbound` instead. */
    type Outbound = UpdateGrantDurationRequest$Outbound;
}
export declare function updateGrantDurationRequestToJSON(updateGrantDurationRequest: UpdateGrantDurationRequest): string;
export declare function updateGrantDurationRequestFromJSON(jsonString: string): SafeParseResult<UpdateGrantDurationRequest, SDKValidationError>;
