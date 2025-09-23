import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiSettingsV1AWSExternalIDSettingsGetResponse = {
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
    getAWSExternalIDResponse?: shared.GetAWSExternalIDResponse | undefined;
};
/** @internal */
export declare const C1ApiSettingsV1AWSExternalIDSettingsGetResponse$inboundSchema: z.ZodType<C1ApiSettingsV1AWSExternalIDSettingsGetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiSettingsV1AWSExternalIDSettingsGetResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    GetAWSExternalIDResponse?: shared.GetAWSExternalIDResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiSettingsV1AWSExternalIDSettingsGetResponse$outboundSchema: z.ZodType<C1ApiSettingsV1AWSExternalIDSettingsGetResponse$Outbound, z.ZodTypeDef, C1ApiSettingsV1AWSExternalIDSettingsGetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiSettingsV1AWSExternalIDSettingsGetResponse$ {
    /** @deprecated use `C1ApiSettingsV1AWSExternalIDSettingsGetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiSettingsV1AWSExternalIDSettingsGetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiSettingsV1AWSExternalIDSettingsGetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiSettingsV1AWSExternalIDSettingsGetResponse$Outbound, z.ZodTypeDef, C1ApiSettingsV1AWSExternalIDSettingsGetResponse>;
    /** @deprecated use `C1ApiSettingsV1AWSExternalIDSettingsGetResponse$Outbound` instead. */
    type Outbound = C1ApiSettingsV1AWSExternalIDSettingsGetResponse$Outbound;
}
export declare function c1ApiSettingsV1AWSExternalIDSettingsGetResponseToJSON(c1ApiSettingsV1AWSExternalIDSettingsGetResponse: C1ApiSettingsV1AWSExternalIDSettingsGetResponse): string;
export declare function c1ApiSettingsV1AWSExternalIDSettingsGetResponseFromJSON(jsonString: string): SafeParseResult<C1ApiSettingsV1AWSExternalIDSettingsGetResponse, SDKValidationError>;
