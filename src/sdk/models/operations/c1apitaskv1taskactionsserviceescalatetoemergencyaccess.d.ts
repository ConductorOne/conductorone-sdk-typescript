import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessRequest = {
    taskId: string | null;
    taskActionsServiceEscalateToEmergencyAccessRequest?: shared.TaskActionsServiceEscalateToEmergencyAccessRequest | undefined;
};
export type C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessResponse = {
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
    taskServiceActionResponse?: shared.TaskServiceActionResponse | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessRequest$inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessRequest$Outbound = {
    task_id: string | null;
    TaskActionsServiceEscalateToEmergencyAccessRequest?: shared.TaskActionsServiceEscalateToEmergencyAccessRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessRequest$outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessRequest$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessRequest$ {
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessRequest$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessRequest>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessRequest$Outbound` instead. */
    type Outbound = C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessRequest$Outbound;
}
export declare function c1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessRequestToJSON(c1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessRequest: C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessRequest): string;
export declare function c1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessRequestFromJSON(jsonString: string): SafeParseResult<C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessResponse$inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TaskServiceActionResponse?: shared.TaskServiceActionResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessResponse$outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessResponse$ {
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessResponse>;
    /** @deprecated use `C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessResponse$Outbound` instead. */
    type Outbound = C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessResponse$Outbound;
}
export declare function c1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessResponseToJSON(c1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessResponse: C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessResponse): string;
export declare function c1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessResponseFromJSON(jsonString: string): SafeParseResult<C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessResponse, SDKValidationError>;
