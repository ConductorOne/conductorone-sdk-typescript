import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAccessconflictV1AccessConflictServiceGetMonitorRequest = {
    id: string | null;
};
export type C1ApiAccessconflictV1AccessConflictServiceGetMonitorResponse = {
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
export declare const C1ApiAccessconflictV1AccessConflictServiceGetMonitorRequest$inboundSchema: z.ZodType<C1ApiAccessconflictV1AccessConflictServiceGetMonitorRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAccessconflictV1AccessConflictServiceGetMonitorRequest$Outbound = {
    id: string | null;
};
/** @internal */
export declare const C1ApiAccessconflictV1AccessConflictServiceGetMonitorRequest$outboundSchema: z.ZodType<C1ApiAccessconflictV1AccessConflictServiceGetMonitorRequest$Outbound, z.ZodTypeDef, C1ApiAccessconflictV1AccessConflictServiceGetMonitorRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAccessconflictV1AccessConflictServiceGetMonitorRequest$ {
    /** @deprecated use `C1ApiAccessconflictV1AccessConflictServiceGetMonitorRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAccessconflictV1AccessConflictServiceGetMonitorRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAccessconflictV1AccessConflictServiceGetMonitorRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAccessconflictV1AccessConflictServiceGetMonitorRequest$Outbound, z.ZodTypeDef, C1ApiAccessconflictV1AccessConflictServiceGetMonitorRequest>;
    /** @deprecated use `C1ApiAccessconflictV1AccessConflictServiceGetMonitorRequest$Outbound` instead. */
    type Outbound = C1ApiAccessconflictV1AccessConflictServiceGetMonitorRequest$Outbound;
}
export declare function c1ApiAccessconflictV1AccessConflictServiceGetMonitorRequestToJSON(c1ApiAccessconflictV1AccessConflictServiceGetMonitorRequest: C1ApiAccessconflictV1AccessConflictServiceGetMonitorRequest): string;
export declare function c1ApiAccessconflictV1AccessConflictServiceGetMonitorRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAccessconflictV1AccessConflictServiceGetMonitorRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAccessconflictV1AccessConflictServiceGetMonitorResponse$inboundSchema: z.ZodType<C1ApiAccessconflictV1AccessConflictServiceGetMonitorResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAccessconflictV1AccessConflictServiceGetMonitorResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ConflictMonitor?: shared.ConflictMonitor$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAccessconflictV1AccessConflictServiceGetMonitorResponse$outboundSchema: z.ZodType<C1ApiAccessconflictV1AccessConflictServiceGetMonitorResponse$Outbound, z.ZodTypeDef, C1ApiAccessconflictV1AccessConflictServiceGetMonitorResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAccessconflictV1AccessConflictServiceGetMonitorResponse$ {
    /** @deprecated use `C1ApiAccessconflictV1AccessConflictServiceGetMonitorResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAccessconflictV1AccessConflictServiceGetMonitorResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAccessconflictV1AccessConflictServiceGetMonitorResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAccessconflictV1AccessConflictServiceGetMonitorResponse$Outbound, z.ZodTypeDef, C1ApiAccessconflictV1AccessConflictServiceGetMonitorResponse>;
    /** @deprecated use `C1ApiAccessconflictV1AccessConflictServiceGetMonitorResponse$Outbound` instead. */
    type Outbound = C1ApiAccessconflictV1AccessConflictServiceGetMonitorResponse$Outbound;
}
export declare function c1ApiAccessconflictV1AccessConflictServiceGetMonitorResponseToJSON(c1ApiAccessconflictV1AccessConflictServiceGetMonitorResponse: C1ApiAccessconflictV1AccessConflictServiceGetMonitorResponse): string;
export declare function c1ApiAccessconflictV1AccessConflictServiceGetMonitorResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAccessconflictV1AccessConflictServiceGetMonitorResponse, SDKValidationError>;
