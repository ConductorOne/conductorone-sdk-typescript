import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiIamV1PersonalClientServiceGetRequest = {
    id: string | null;
};
export type C1ApiIamV1PersonalClientServiceGetResponse = {
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
    personalClientServiceGetResponse?: shared.PersonalClientServiceGetResponse | undefined;
};
/** @internal */
export declare const C1ApiIamV1PersonalClientServiceGetRequest$inboundSchema: z.ZodType<C1ApiIamV1PersonalClientServiceGetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiIamV1PersonalClientServiceGetRequest$Outbound = {
    id: string | null;
};
/** @internal */
export declare const C1ApiIamV1PersonalClientServiceGetRequest$outboundSchema: z.ZodType<C1ApiIamV1PersonalClientServiceGetRequest$Outbound, z.ZodTypeDef, C1ApiIamV1PersonalClientServiceGetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiIamV1PersonalClientServiceGetRequest$ {
    /** @deprecated use `C1ApiIamV1PersonalClientServiceGetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiIamV1PersonalClientServiceGetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiIamV1PersonalClientServiceGetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiIamV1PersonalClientServiceGetRequest$Outbound, z.ZodTypeDef, C1ApiIamV1PersonalClientServiceGetRequest>;
    /** @deprecated use `C1ApiIamV1PersonalClientServiceGetRequest$Outbound` instead. */
    type Outbound = C1ApiIamV1PersonalClientServiceGetRequest$Outbound;
}
export declare function c1ApiIamV1PersonalClientServiceGetRequestToJSON(c1ApiIamV1PersonalClientServiceGetRequest: C1ApiIamV1PersonalClientServiceGetRequest): string;
export declare function c1ApiIamV1PersonalClientServiceGetRequestFromJSON(jsonString: string): SafeParseResult<C1ApiIamV1PersonalClientServiceGetRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiIamV1PersonalClientServiceGetResponse$inboundSchema: z.ZodType<C1ApiIamV1PersonalClientServiceGetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiIamV1PersonalClientServiceGetResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    PersonalClientServiceGetResponse?: shared.PersonalClientServiceGetResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiIamV1PersonalClientServiceGetResponse$outboundSchema: z.ZodType<C1ApiIamV1PersonalClientServiceGetResponse$Outbound, z.ZodTypeDef, C1ApiIamV1PersonalClientServiceGetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiIamV1PersonalClientServiceGetResponse$ {
    /** @deprecated use `C1ApiIamV1PersonalClientServiceGetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiIamV1PersonalClientServiceGetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiIamV1PersonalClientServiceGetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiIamV1PersonalClientServiceGetResponse$Outbound, z.ZodTypeDef, C1ApiIamV1PersonalClientServiceGetResponse>;
    /** @deprecated use `C1ApiIamV1PersonalClientServiceGetResponse$Outbound` instead. */
    type Outbound = C1ApiIamV1PersonalClientServiceGetResponse$Outbound;
}
export declare function c1ApiIamV1PersonalClientServiceGetResponseToJSON(c1ApiIamV1PersonalClientServiceGetResponse: C1ApiIamV1PersonalClientServiceGetResponse): string;
export declare function c1ApiIamV1PersonalClientServiceGetResponseFromJSON(jsonString: string): SafeParseResult<C1ApiIamV1PersonalClientServiceGetResponse, SDKValidationError>;
