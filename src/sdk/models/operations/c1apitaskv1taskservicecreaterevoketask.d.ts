import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiTaskV1TaskServiceCreateRevokeTaskResponse = {
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
     * The TaskServiceCreateRevokeResponse returns a task view which has a task including JSONPATHs to the expanded items in the expanded array.
     */
    taskServiceCreateRevokeResponse?: shared.TaskServiceCreateRevokeResponse | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskServiceCreateRevokeTaskResponse$inboundSchema: z.ZodType<C1ApiTaskV1TaskServiceCreateRevokeTaskResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiTaskV1TaskServiceCreateRevokeTaskResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TaskServiceCreateRevokeResponse?: shared.TaskServiceCreateRevokeResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskServiceCreateRevokeTaskResponse$outboundSchema: z.ZodType<C1ApiTaskV1TaskServiceCreateRevokeTaskResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskServiceCreateRevokeTaskResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiTaskV1TaskServiceCreateRevokeTaskResponse$ {
    /** @deprecated use `C1ApiTaskV1TaskServiceCreateRevokeTaskResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiTaskV1TaskServiceCreateRevokeTaskResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiTaskV1TaskServiceCreateRevokeTaskResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiTaskV1TaskServiceCreateRevokeTaskResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskServiceCreateRevokeTaskResponse>;
    /** @deprecated use `C1ApiTaskV1TaskServiceCreateRevokeTaskResponse$Outbound` instead. */
    type Outbound = C1ApiTaskV1TaskServiceCreateRevokeTaskResponse$Outbound;
}
export declare function c1ApiTaskV1TaskServiceCreateRevokeTaskResponseToJSON(c1ApiTaskV1TaskServiceCreateRevokeTaskResponse: C1ApiTaskV1TaskServiceCreateRevokeTaskResponse): string;
export declare function c1ApiTaskV1TaskServiceCreateRevokeTaskResponseFromJSON(jsonString: string): SafeParseResult<C1ApiTaskV1TaskServiceCreateRevokeTaskResponse, SDKValidationError>;
