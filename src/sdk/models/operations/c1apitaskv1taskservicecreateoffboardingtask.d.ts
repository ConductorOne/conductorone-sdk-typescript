import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiTaskV1TaskServiceCreateOffboardingTaskResponse = {
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
    taskServiceCreateOffboardingResponse?: shared.TaskServiceCreateOffboardingResponse | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskServiceCreateOffboardingTaskResponse$inboundSchema: z.ZodType<C1ApiTaskV1TaskServiceCreateOffboardingTaskResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiTaskV1TaskServiceCreateOffboardingTaskResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TaskServiceCreateOffboardingResponse?: shared.TaskServiceCreateOffboardingResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskServiceCreateOffboardingTaskResponse$outboundSchema: z.ZodType<C1ApiTaskV1TaskServiceCreateOffboardingTaskResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskServiceCreateOffboardingTaskResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiTaskV1TaskServiceCreateOffboardingTaskResponse$ {
    /** @deprecated use `C1ApiTaskV1TaskServiceCreateOffboardingTaskResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiTaskV1TaskServiceCreateOffboardingTaskResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiTaskV1TaskServiceCreateOffboardingTaskResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiTaskV1TaskServiceCreateOffboardingTaskResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskServiceCreateOffboardingTaskResponse>;
    /** @deprecated use `C1ApiTaskV1TaskServiceCreateOffboardingTaskResponse$Outbound` instead. */
    type Outbound = C1ApiTaskV1TaskServiceCreateOffboardingTaskResponse$Outbound;
}
export declare function c1ApiTaskV1TaskServiceCreateOffboardingTaskResponseToJSON(c1ApiTaskV1TaskServiceCreateOffboardingTaskResponse: C1ApiTaskV1TaskServiceCreateOffboardingTaskResponse): string;
export declare function c1ApiTaskV1TaskServiceCreateOffboardingTaskResponseFromJSON(jsonString: string): SafeParseResult<C1ApiTaskV1TaskServiceCreateOffboardingTaskResponse, SDKValidationError>;
