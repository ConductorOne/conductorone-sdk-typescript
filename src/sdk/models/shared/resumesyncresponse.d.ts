import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ResumeSyncResponse message.
 */
export type ResumeSyncResponse = {};
/** @internal */
export declare const ResumeSyncResponse$inboundSchema: z.ZodType<ResumeSyncResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ResumeSyncResponse$Outbound = {};
/** @internal */
export declare const ResumeSyncResponse$outboundSchema: z.ZodType<ResumeSyncResponse$Outbound, z.ZodTypeDef, ResumeSyncResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ResumeSyncResponse$ {
    /** @deprecated use `ResumeSyncResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ResumeSyncResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ResumeSyncResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ResumeSyncResponse$Outbound, z.ZodTypeDef, ResumeSyncResponse>;
    /** @deprecated use `ResumeSyncResponse$Outbound` instead. */
    type Outbound = ResumeSyncResponse$Outbound;
}
export declare function resumeSyncResponseToJSON(resumeSyncResponse: ResumeSyncResponse): string;
export declare function resumeSyncResponseFromJSON(jsonString: string): SafeParseResult<ResumeSyncResponse, SDKValidationError>;
