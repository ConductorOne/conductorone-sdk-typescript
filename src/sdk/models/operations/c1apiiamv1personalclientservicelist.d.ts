import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiIamV1PersonalClientServiceListResponse = {
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
    personalClientServiceListResponse?: shared.PersonalClientServiceListResponse | undefined;
};
/** @internal */
export declare const C1ApiIamV1PersonalClientServiceListResponse$inboundSchema: z.ZodType<C1ApiIamV1PersonalClientServiceListResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiIamV1PersonalClientServiceListResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    PersonalClientServiceListResponse?: shared.PersonalClientServiceListResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiIamV1PersonalClientServiceListResponse$outboundSchema: z.ZodType<C1ApiIamV1PersonalClientServiceListResponse$Outbound, z.ZodTypeDef, C1ApiIamV1PersonalClientServiceListResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiIamV1PersonalClientServiceListResponse$ {
    /** @deprecated use `C1ApiIamV1PersonalClientServiceListResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiIamV1PersonalClientServiceListResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiIamV1PersonalClientServiceListResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiIamV1PersonalClientServiceListResponse$Outbound, z.ZodTypeDef, C1ApiIamV1PersonalClientServiceListResponse>;
    /** @deprecated use `C1ApiIamV1PersonalClientServiceListResponse$Outbound` instead. */
    type Outbound = C1ApiIamV1PersonalClientServiceListResponse$Outbound;
}
export declare function c1ApiIamV1PersonalClientServiceListResponseToJSON(c1ApiIamV1PersonalClientServiceListResponse: C1ApiIamV1PersonalClientServiceListResponse): string;
export declare function c1ApiIamV1PersonalClientServiceListResponseFromJSON(jsonString: string): SafeParseResult<C1ApiIamV1PersonalClientServiceListResponse, SDKValidationError>;
