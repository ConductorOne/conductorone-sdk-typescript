import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ResumeSyncRequest message.
 */
export type ResumeSyncRequest = {};
/** @internal */
export declare const ResumeSyncRequest$inboundSchema: z.ZodType<ResumeSyncRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ResumeSyncRequest$Outbound = {};
/** @internal */
export declare const ResumeSyncRequest$outboundSchema: z.ZodType<ResumeSyncRequest$Outbound, z.ZodTypeDef, ResumeSyncRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ResumeSyncRequest$ {
    /** @deprecated use `ResumeSyncRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ResumeSyncRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `ResumeSyncRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ResumeSyncRequest$Outbound, z.ZodTypeDef, ResumeSyncRequest>;
    /** @deprecated use `ResumeSyncRequest$Outbound` instead. */
    type Outbound = ResumeSyncRequest$Outbound;
}
export declare function resumeSyncRequestToJSON(resumeSyncRequest: ResumeSyncRequest): string;
export declare function resumeSyncRequestFromJSON(jsonString: string): SafeParseResult<ResumeSyncRequest, SDKValidationError>;
