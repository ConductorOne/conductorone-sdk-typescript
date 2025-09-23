import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAccessconflictV1AccessConflictServiceCreateMonitorResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Successful response
     */
    conflictMonitor?: shared.ConflictMonitor | undefined;
};
/** @internal */
export declare const C1ApiAccessconflictV1AccessConflictServiceCreateMonitorResponse$inboundSchema: z.ZodType<C1ApiAccessconflictV1AccessConflictServiceCreateMonitorResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAccessconflictV1AccessConflictServiceCreateMonitorResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ConflictMonitor?: shared.ConflictMonitor$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAccessconflictV1AccessConflictServiceCreateMonitorResponse$outboundSchema: z.ZodType<C1ApiAccessconflictV1AccessConflictServiceCreateMonitorResponse$Outbound, z.ZodTypeDef, C1ApiAccessconflictV1AccessConflictServiceCreateMonitorResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAccessconflictV1AccessConflictServiceCreateMonitorResponse$ {
    /** @deprecated use `C1ApiAccessconflictV1AccessConflictServiceCreateMonitorResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAccessconflictV1AccessConflictServiceCreateMonitorResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAccessconflictV1AccessConflictServiceCreateMonitorResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAccessconflictV1AccessConflictServiceCreateMonitorResponse$Outbound, z.ZodTypeDef, C1ApiAccessconflictV1AccessConflictServiceCreateMonitorResponse>;
    /** @deprecated use `C1ApiAccessconflictV1AccessConflictServiceCreateMonitorResponse$Outbound` instead. */
    type Outbound = C1ApiAccessconflictV1AccessConflictServiceCreateMonitorResponse$Outbound;
}
export declare function c1ApiAccessconflictV1AccessConflictServiceCreateMonitorResponseToJSON(c1ApiAccessconflictV1AccessConflictServiceCreateMonitorResponse: C1ApiAccessconflictV1AccessConflictServiceCreateMonitorResponse): string;
export declare function c1ApiAccessconflictV1AccessConflictServiceCreateMonitorResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAccessconflictV1AccessConflictServiceCreateMonitorResponse, SDKValidationError>;
