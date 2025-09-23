import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiIamV1PersonalClientServiceDeleteRequest = {
    id: string | null;
    personalClientServiceDeleteRequest?: shared.PersonalClientServiceDeleteRequest | undefined;
};
export type C1ApiIamV1PersonalClientServiceDeleteResponse = {
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
    personalClientServiceDeleteResponse?: shared.PersonalClientServiceDeleteResponse | undefined;
};
/** @internal */
export declare const C1ApiIamV1PersonalClientServiceDeleteRequest$inboundSchema: z.ZodType<C1ApiIamV1PersonalClientServiceDeleteRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiIamV1PersonalClientServiceDeleteRequest$Outbound = {
    id: string | null;
    PersonalClientServiceDeleteRequest?: shared.PersonalClientServiceDeleteRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiIamV1PersonalClientServiceDeleteRequest$outboundSchema: z.ZodType<C1ApiIamV1PersonalClientServiceDeleteRequest$Outbound, z.ZodTypeDef, C1ApiIamV1PersonalClientServiceDeleteRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiIamV1PersonalClientServiceDeleteRequest$ {
    /** @deprecated use `C1ApiIamV1PersonalClientServiceDeleteRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiIamV1PersonalClientServiceDeleteRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiIamV1PersonalClientServiceDeleteRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiIamV1PersonalClientServiceDeleteRequest$Outbound, z.ZodTypeDef, C1ApiIamV1PersonalClientServiceDeleteRequest>;
    /** @deprecated use `C1ApiIamV1PersonalClientServiceDeleteRequest$Outbound` instead. */
    type Outbound = C1ApiIamV1PersonalClientServiceDeleteRequest$Outbound;
}
export declare function c1ApiIamV1PersonalClientServiceDeleteRequestToJSON(c1ApiIamV1PersonalClientServiceDeleteRequest: C1ApiIamV1PersonalClientServiceDeleteRequest): string;
export declare function c1ApiIamV1PersonalClientServiceDeleteRequestFromJSON(jsonString: string): SafeParseResult<C1ApiIamV1PersonalClientServiceDeleteRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiIamV1PersonalClientServiceDeleteResponse$inboundSchema: z.ZodType<C1ApiIamV1PersonalClientServiceDeleteResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiIamV1PersonalClientServiceDeleteResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    PersonalClientServiceDeleteResponse?: shared.PersonalClientServiceDeleteResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiIamV1PersonalClientServiceDeleteResponse$outboundSchema: z.ZodType<C1ApiIamV1PersonalClientServiceDeleteResponse$Outbound, z.ZodTypeDef, C1ApiIamV1PersonalClientServiceDeleteResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiIamV1PersonalClientServiceDeleteResponse$ {
    /** @deprecated use `C1ApiIamV1PersonalClientServiceDeleteResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiIamV1PersonalClientServiceDeleteResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiIamV1PersonalClientServiceDeleteResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiIamV1PersonalClientServiceDeleteResponse$Outbound, z.ZodTypeDef, C1ApiIamV1PersonalClientServiceDeleteResponse>;
    /** @deprecated use `C1ApiIamV1PersonalClientServiceDeleteResponse$Outbound` instead. */
    type Outbound = C1ApiIamV1PersonalClientServiceDeleteResponse$Outbound;
}
export declare function c1ApiIamV1PersonalClientServiceDeleteResponseToJSON(c1ApiIamV1PersonalClientServiceDeleteResponse: C1ApiIamV1PersonalClientServiceDeleteResponse): string;
export declare function c1ApiIamV1PersonalClientServiceDeleteResponseFromJSON(jsonString: string): SafeParseResult<C1ApiIamV1PersonalClientServiceDeleteResponse, SDKValidationError>;
