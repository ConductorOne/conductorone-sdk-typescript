import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorRequest = {
    id: string | null;
    conflictMonitorDeleteRequest?: shared.ConflictMonitorDeleteRequest | undefined;
};
export type C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorResponse = {
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
    conflictMonitorDeleteResponse?: shared.ConflictMonitorDeleteResponse | undefined;
};
/** @internal */
export declare const C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorRequest$inboundSchema: z.ZodType<C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorRequest$Outbound = {
    id: string | null;
    ConflictMonitorDeleteRequest?: shared.ConflictMonitorDeleteRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorRequest$outboundSchema: z.ZodType<C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorRequest$Outbound, z.ZodTypeDef, C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorRequest$ {
    /** @deprecated use `C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorRequest$Outbound, z.ZodTypeDef, C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorRequest>;
    /** @deprecated use `C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorRequest$Outbound` instead. */
    type Outbound = C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorRequest$Outbound;
}
export declare function c1ApiAccessconflictV1AccessConflictServiceDeleteMonitorRequestToJSON(c1ApiAccessconflictV1AccessConflictServiceDeleteMonitorRequest: C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorRequest): string;
export declare function c1ApiAccessconflictV1AccessConflictServiceDeleteMonitorRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorResponse$inboundSchema: z.ZodType<C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ConflictMonitorDeleteResponse?: shared.ConflictMonitorDeleteResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorResponse$outboundSchema: z.ZodType<C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorResponse$Outbound, z.ZodTypeDef, C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorResponse$ {
    /** @deprecated use `C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorResponse$Outbound, z.ZodTypeDef, C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorResponse>;
    /** @deprecated use `C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorResponse$Outbound` instead. */
    type Outbound = C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorResponse$Outbound;
}
export declare function c1ApiAccessconflictV1AccessConflictServiceDeleteMonitorResponseToJSON(c1ApiAccessconflictV1AccessConflictServiceDeleteMonitorResponse: C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorResponse): string;
export declare function c1ApiAccessconflictV1AccessConflictServiceDeleteMonitorResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAccessconflictV1AccessConflictServiceDeleteMonitorResponse, SDKValidationError>;
