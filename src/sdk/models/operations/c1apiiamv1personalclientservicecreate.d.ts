import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiIamV1PersonalClientServiceCreateResponse = {
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
     * The PersonalClientServiceCreateResponse message contains the created personal client and client secret.
     */
    personalClientServiceCreateResponse?: shared.PersonalClientServiceCreateResponse | undefined;
};
/** @internal */
export declare const C1ApiIamV1PersonalClientServiceCreateResponse$inboundSchema: z.ZodType<C1ApiIamV1PersonalClientServiceCreateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiIamV1PersonalClientServiceCreateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    PersonalClientServiceCreateResponse?: shared.PersonalClientServiceCreateResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiIamV1PersonalClientServiceCreateResponse$outboundSchema: z.ZodType<C1ApiIamV1PersonalClientServiceCreateResponse$Outbound, z.ZodTypeDef, C1ApiIamV1PersonalClientServiceCreateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiIamV1PersonalClientServiceCreateResponse$ {
    /** @deprecated use `C1ApiIamV1PersonalClientServiceCreateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiIamV1PersonalClientServiceCreateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiIamV1PersonalClientServiceCreateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiIamV1PersonalClientServiceCreateResponse$Outbound, z.ZodTypeDef, C1ApiIamV1PersonalClientServiceCreateResponse>;
    /** @deprecated use `C1ApiIamV1PersonalClientServiceCreateResponse$Outbound` instead. */
    type Outbound = C1ApiIamV1PersonalClientServiceCreateResponse$Outbound;
}
export declare function c1ApiIamV1PersonalClientServiceCreateResponseToJSON(c1ApiIamV1PersonalClientServiceCreateResponse: C1ApiIamV1PersonalClientServiceCreateResponse): string;
export declare function c1ApiIamV1PersonalClientServiceCreateResponseFromJSON(jsonString: string): SafeParseResult<C1ApiIamV1PersonalClientServiceCreateResponse, SDKValidationError>;
