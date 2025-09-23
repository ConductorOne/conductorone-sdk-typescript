import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiIamV1PersonalClientSearchServiceSearchResponse = {
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
    personalClientSearchServiceSearchResponse?: shared.PersonalClientSearchServiceSearchResponse | undefined;
};
/** @internal */
export declare const C1ApiIamV1PersonalClientSearchServiceSearchResponse$inboundSchema: z.ZodType<C1ApiIamV1PersonalClientSearchServiceSearchResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiIamV1PersonalClientSearchServiceSearchResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    PersonalClientSearchServiceSearchResponse?: shared.PersonalClientSearchServiceSearchResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiIamV1PersonalClientSearchServiceSearchResponse$outboundSchema: z.ZodType<C1ApiIamV1PersonalClientSearchServiceSearchResponse$Outbound, z.ZodTypeDef, C1ApiIamV1PersonalClientSearchServiceSearchResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiIamV1PersonalClientSearchServiceSearchResponse$ {
    /** @deprecated use `C1ApiIamV1PersonalClientSearchServiceSearchResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiIamV1PersonalClientSearchServiceSearchResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiIamV1PersonalClientSearchServiceSearchResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiIamV1PersonalClientSearchServiceSearchResponse$Outbound, z.ZodTypeDef, C1ApiIamV1PersonalClientSearchServiceSearchResponse>;
    /** @deprecated use `C1ApiIamV1PersonalClientSearchServiceSearchResponse$Outbound` instead. */
    type Outbound = C1ApiIamV1PersonalClientSearchServiceSearchResponse$Outbound;
}
export declare function c1ApiIamV1PersonalClientSearchServiceSearchResponseToJSON(c1ApiIamV1PersonalClientSearchServiceSearchResponse: C1ApiIamV1PersonalClientSearchServiceSearchResponse): string;
export declare function c1ApiIamV1PersonalClientSearchServiceSearchResponseFromJSON(jsonString: string): SafeParseResult<C1ApiIamV1PersonalClientSearchServiceSearchResponse, SDKValidationError>;
