import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAutomationsV1AutomationServiceDeleteAutomationRequest = {
    id: string | null;
    deleteAutomationRequest?: shared.DeleteAutomationRequest | undefined;
};
export type C1ApiAutomationsV1AutomationServiceDeleteAutomationResponse = {
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
    deleteAutomationResponse?: shared.DeleteAutomationResponse | undefined;
};
/** @internal */
export declare const C1ApiAutomationsV1AutomationServiceDeleteAutomationRequest$inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceDeleteAutomationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAutomationsV1AutomationServiceDeleteAutomationRequest$Outbound = {
    id: string | null;
    DeleteAutomationRequest?: shared.DeleteAutomationRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAutomationsV1AutomationServiceDeleteAutomationRequest$outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceDeleteAutomationRequest$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationServiceDeleteAutomationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAutomationsV1AutomationServiceDeleteAutomationRequest$ {
    /** @deprecated use `C1ApiAutomationsV1AutomationServiceDeleteAutomationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceDeleteAutomationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAutomationsV1AutomationServiceDeleteAutomationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceDeleteAutomationRequest$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationServiceDeleteAutomationRequest>;
    /** @deprecated use `C1ApiAutomationsV1AutomationServiceDeleteAutomationRequest$Outbound` instead. */
    type Outbound = C1ApiAutomationsV1AutomationServiceDeleteAutomationRequest$Outbound;
}
export declare function c1ApiAutomationsV1AutomationServiceDeleteAutomationRequestToJSON(c1ApiAutomationsV1AutomationServiceDeleteAutomationRequest: C1ApiAutomationsV1AutomationServiceDeleteAutomationRequest): string;
export declare function c1ApiAutomationsV1AutomationServiceDeleteAutomationRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAutomationsV1AutomationServiceDeleteAutomationRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAutomationsV1AutomationServiceDeleteAutomationResponse$inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceDeleteAutomationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAutomationsV1AutomationServiceDeleteAutomationResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    DeleteAutomationResponse?: shared.DeleteAutomationResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAutomationsV1AutomationServiceDeleteAutomationResponse$outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceDeleteAutomationResponse$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationServiceDeleteAutomationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAutomationsV1AutomationServiceDeleteAutomationResponse$ {
    /** @deprecated use `C1ApiAutomationsV1AutomationServiceDeleteAutomationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceDeleteAutomationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAutomationsV1AutomationServiceDeleteAutomationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceDeleteAutomationResponse$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationServiceDeleteAutomationResponse>;
    /** @deprecated use `C1ApiAutomationsV1AutomationServiceDeleteAutomationResponse$Outbound` instead. */
    type Outbound = C1ApiAutomationsV1AutomationServiceDeleteAutomationResponse$Outbound;
}
export declare function c1ApiAutomationsV1AutomationServiceDeleteAutomationResponseToJSON(c1ApiAutomationsV1AutomationServiceDeleteAutomationResponse: C1ApiAutomationsV1AutomationServiceDeleteAutomationResponse): string;
export declare function c1ApiAutomationsV1AutomationServiceDeleteAutomationResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAutomationsV1AutomationServiceDeleteAutomationResponse, SDKValidationError>;
