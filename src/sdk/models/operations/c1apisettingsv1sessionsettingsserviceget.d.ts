import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiSettingsV1SessionSettingsServiceGetResponse = {
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
    getSessionSettingsResponse?: shared.GetSessionSettingsResponse | undefined;
};
/** @internal */
export declare const C1ApiSettingsV1SessionSettingsServiceGetResponse$inboundSchema: z.ZodType<C1ApiSettingsV1SessionSettingsServiceGetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiSettingsV1SessionSettingsServiceGetResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    GetSessionSettingsResponse?: shared.GetSessionSettingsResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiSettingsV1SessionSettingsServiceGetResponse$outboundSchema: z.ZodType<C1ApiSettingsV1SessionSettingsServiceGetResponse$Outbound, z.ZodTypeDef, C1ApiSettingsV1SessionSettingsServiceGetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiSettingsV1SessionSettingsServiceGetResponse$ {
    /** @deprecated use `C1ApiSettingsV1SessionSettingsServiceGetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiSettingsV1SessionSettingsServiceGetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiSettingsV1SessionSettingsServiceGetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiSettingsV1SessionSettingsServiceGetResponse$Outbound, z.ZodTypeDef, C1ApiSettingsV1SessionSettingsServiceGetResponse>;
    /** @deprecated use `C1ApiSettingsV1SessionSettingsServiceGetResponse$Outbound` instead. */
    type Outbound = C1ApiSettingsV1SessionSettingsServiceGetResponse$Outbound;
}
export declare function c1ApiSettingsV1SessionSettingsServiceGetResponseToJSON(c1ApiSettingsV1SessionSettingsServiceGetResponse: C1ApiSettingsV1SessionSettingsServiceGetResponse): string;
export declare function c1ApiSettingsV1SessionSettingsServiceGetResponseFromJSON(jsonString: string): SafeParseResult<C1ApiSettingsV1SessionSettingsServiceGetResponse, SDKValidationError>;
