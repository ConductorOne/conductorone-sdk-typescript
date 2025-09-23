import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The RemoveGrantDurationRequest message.
 */
export type RemoveGrantDurationRequest = {};
/** @internal */
export declare const RemoveGrantDurationRequest$inboundSchema: z.ZodType<RemoveGrantDurationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveGrantDurationRequest$Outbound = {};
/** @internal */
export declare const RemoveGrantDurationRequest$outboundSchema: z.ZodType<RemoveGrantDurationRequest$Outbound, z.ZodTypeDef, RemoveGrantDurationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RemoveGrantDurationRequest$ {
    /** @deprecated use `RemoveGrantDurationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RemoveGrantDurationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `RemoveGrantDurationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RemoveGrantDurationRequest$Outbound, z.ZodTypeDef, RemoveGrantDurationRequest>;
    /** @deprecated use `RemoveGrantDurationRequest$Outbound` instead. */
    type Outbound = RemoveGrantDurationRequest$Outbound;
}
export declare function removeGrantDurationRequestToJSON(removeGrantDurationRequest: RemoveGrantDurationRequest): string;
export declare function removeGrantDurationRequestFromJSON(jsonString: string): SafeParseResult<RemoveGrantDurationRequest, SDKValidationError>;
