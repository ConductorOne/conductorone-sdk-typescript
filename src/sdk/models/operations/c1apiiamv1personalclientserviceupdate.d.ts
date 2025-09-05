import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiIamV1PersonalClientServiceUpdateRequest = {
    id: string | null;
    personalClientServiceUpdateRequest?: shared.PersonalClientServiceUpdateRequest | undefined;
};
export type C1ApiIamV1PersonalClientServiceUpdateResponse = {
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
    personalClientServiceUpdateResponse?: shared.PersonalClientServiceUpdateResponse | undefined;
};
/** @internal */
export declare const C1ApiIamV1PersonalClientServiceUpdateRequest$inboundSchema: z.ZodType<C1ApiIamV1PersonalClientServiceUpdateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiIamV1PersonalClientServiceUpdateRequest$Outbound = {
    id: string | null;
    PersonalClientServiceUpdateRequest?: shared.PersonalClientServiceUpdateRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiIamV1PersonalClientServiceUpdateRequest$outboundSchema: z.ZodType<C1ApiIamV1PersonalClientServiceUpdateRequest$Outbound, z.ZodTypeDef, C1ApiIamV1PersonalClientServiceUpdateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiIamV1PersonalClientServiceUpdateRequest$ {
    /** @deprecated use `C1ApiIamV1PersonalClientServiceUpdateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiIamV1PersonalClientServiceUpdateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiIamV1PersonalClientServiceUpdateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiIamV1PersonalClientServiceUpdateRequest$Outbound, z.ZodTypeDef, C1ApiIamV1PersonalClientServiceUpdateRequest>;
    /** @deprecated use `C1ApiIamV1PersonalClientServiceUpdateRequest$Outbound` instead. */
    type Outbound = C1ApiIamV1PersonalClientServiceUpdateRequest$Outbound;
}
export declare function c1ApiIamV1PersonalClientServiceUpdateRequestToJSON(c1ApiIamV1PersonalClientServiceUpdateRequest: C1ApiIamV1PersonalClientServiceUpdateRequest): string;
export declare function c1ApiIamV1PersonalClientServiceUpdateRequestFromJSON(jsonString: string): SafeParseResult<C1ApiIamV1PersonalClientServiceUpdateRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiIamV1PersonalClientServiceUpdateResponse$inboundSchema: z.ZodType<C1ApiIamV1PersonalClientServiceUpdateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiIamV1PersonalClientServiceUpdateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    PersonalClientServiceUpdateResponse?: shared.PersonalClientServiceUpdateResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiIamV1PersonalClientServiceUpdateResponse$outboundSchema: z.ZodType<C1ApiIamV1PersonalClientServiceUpdateResponse$Outbound, z.ZodTypeDef, C1ApiIamV1PersonalClientServiceUpdateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiIamV1PersonalClientServiceUpdateResponse$ {
    /** @deprecated use `C1ApiIamV1PersonalClientServiceUpdateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiIamV1PersonalClientServiceUpdateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiIamV1PersonalClientServiceUpdateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiIamV1PersonalClientServiceUpdateResponse$Outbound, z.ZodTypeDef, C1ApiIamV1PersonalClientServiceUpdateResponse>;
    /** @deprecated use `C1ApiIamV1PersonalClientServiceUpdateResponse$Outbound` instead. */
    type Outbound = C1ApiIamV1PersonalClientServiceUpdateResponse$Outbound;
}
export declare function c1ApiIamV1PersonalClientServiceUpdateResponseToJSON(c1ApiIamV1PersonalClientServiceUpdateResponse: C1ApiIamV1PersonalClientServiceUpdateResponse): string;
export declare function c1ApiIamV1PersonalClientServiceUpdateResponseFromJSON(jsonString: string): SafeParseResult<C1ApiIamV1PersonalClientServiceUpdateResponse, SDKValidationError>;
