import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiTaskV1TaskServiceCreateGrantTaskResponse = {
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
     * The TaskServiceCreateGrantResponse returns a task view which has a task including JSONPATHs to the expanded items in the expanded array.
     */
    taskServiceCreateGrantResponse?: shared.TaskServiceCreateGrantResponse | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskServiceCreateGrantTaskResponse$inboundSchema: z.ZodType<C1ApiTaskV1TaskServiceCreateGrantTaskResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiTaskV1TaskServiceCreateGrantTaskResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TaskServiceCreateGrantResponse?: shared.TaskServiceCreateGrantResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskServiceCreateGrantTaskResponse$outboundSchema: z.ZodType<C1ApiTaskV1TaskServiceCreateGrantTaskResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskServiceCreateGrantTaskResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiTaskV1TaskServiceCreateGrantTaskResponse$ {
    /** @deprecated use `C1ApiTaskV1TaskServiceCreateGrantTaskResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiTaskV1TaskServiceCreateGrantTaskResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiTaskV1TaskServiceCreateGrantTaskResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiTaskV1TaskServiceCreateGrantTaskResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskServiceCreateGrantTaskResponse>;
    /** @deprecated use `C1ApiTaskV1TaskServiceCreateGrantTaskResponse$Outbound` instead. */
    type Outbound = C1ApiTaskV1TaskServiceCreateGrantTaskResponse$Outbound;
}
export declare function c1ApiTaskV1TaskServiceCreateGrantTaskResponseToJSON(c1ApiTaskV1TaskServiceCreateGrantTaskResponse: C1ApiTaskV1TaskServiceCreateGrantTaskResponse): string;
export declare function c1ApiTaskV1TaskServiceCreateGrantTaskResponseFromJSON(jsonString: string): SafeParseResult<C1ApiTaskV1TaskServiceCreateGrantTaskResponse, SDKValidationError>;
