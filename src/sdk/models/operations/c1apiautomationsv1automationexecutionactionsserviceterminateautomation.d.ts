import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationRequest = {
    id: number | null;
    terminateAutomationRequest?: shared.TerminateAutomationRequest | undefined;
};
export type C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationResponse = {
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
    terminateAutomationResponse?: shared.TerminateAutomationResponse | undefined;
};
/** @internal */
export declare const C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationRequest$inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationRequest$Outbound = {
    id: string | null;
    TerminateAutomationRequest?: shared.TerminateAutomationRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationRequest$outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationRequest$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationRequest$ {
    /** @deprecated use `C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationRequest$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationRequest>;
    /** @deprecated use `C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationRequest$Outbound` instead. */
    type Outbound = C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationRequest$Outbound;
}
export declare function c1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationRequestToJSON(c1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationRequest: C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationRequest): string;
export declare function c1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationResponse$inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TerminateAutomationResponse?: shared.TerminateAutomationResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationResponse$outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationResponse$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationResponse$ {
    /** @deprecated use `C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationResponse$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationResponse>;
    /** @deprecated use `C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationResponse$Outbound` instead. */
    type Outbound = C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationResponse$Outbound;
}
export declare function c1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationResponseToJSON(c1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationResponse: C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationResponse): string;
export declare function c1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationResponse, SDKValidationError>;
