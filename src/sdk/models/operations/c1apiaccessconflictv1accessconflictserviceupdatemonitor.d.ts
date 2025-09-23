import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorRequest = {
    id: string | null;
    conflictMonitorUpdateRequest?: shared.ConflictMonitorUpdateRequest | undefined;
};
export type C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorResponse = {
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
export declare const C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorRequest$inboundSchema: z.ZodType<C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorRequest$Outbound = {
    id: string | null;
    ConflictMonitorUpdateRequest?: shared.ConflictMonitorUpdateRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorRequest$outboundSchema: z.ZodType<C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorRequest$Outbound, z.ZodTypeDef, C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorRequest$ {
    /** @deprecated use `C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorRequest$Outbound, z.ZodTypeDef, C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorRequest>;
    /** @deprecated use `C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorRequest$Outbound` instead. */
    type Outbound = C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorRequest$Outbound;
}
export declare function c1ApiAccessconflictV1AccessConflictServiceUpdateMonitorRequestToJSON(c1ApiAccessconflictV1AccessConflictServiceUpdateMonitorRequest: C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorRequest): string;
export declare function c1ApiAccessconflictV1AccessConflictServiceUpdateMonitorRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorResponse$inboundSchema: z.ZodType<C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ConflictMonitor?: shared.ConflictMonitor$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorResponse$outboundSchema: z.ZodType<C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorResponse$Outbound, z.ZodTypeDef, C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorResponse$ {
    /** @deprecated use `C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorResponse$Outbound, z.ZodTypeDef, C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorResponse>;
    /** @deprecated use `C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorResponse$Outbound` instead. */
    type Outbound = C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorResponse$Outbound;
}
export declare function c1ApiAccessconflictV1AccessConflictServiceUpdateMonitorResponseToJSON(c1ApiAccessconflictV1AccessConflictServiceUpdateMonitorResponse: C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorResponse): string;
export declare function c1ApiAccessconflictV1AccessConflictServiceUpdateMonitorResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorResponse, SDKValidationError>;
