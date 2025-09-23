import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiSettingsV1SessionSettingsServiceTestSourceIPResponse = {
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
    testSourceIPResponse?: shared.TestSourceIPResponse | undefined;
};
/** @internal */
export declare const C1ApiSettingsV1SessionSettingsServiceTestSourceIPResponse$inboundSchema: z.ZodType<C1ApiSettingsV1SessionSettingsServiceTestSourceIPResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiSettingsV1SessionSettingsServiceTestSourceIPResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TestSourceIPResponse?: shared.TestSourceIPResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiSettingsV1SessionSettingsServiceTestSourceIPResponse$outboundSchema: z.ZodType<C1ApiSettingsV1SessionSettingsServiceTestSourceIPResponse$Outbound, z.ZodTypeDef, C1ApiSettingsV1SessionSettingsServiceTestSourceIPResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiSettingsV1SessionSettingsServiceTestSourceIPResponse$ {
    /** @deprecated use `C1ApiSettingsV1SessionSettingsServiceTestSourceIPResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiSettingsV1SessionSettingsServiceTestSourceIPResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiSettingsV1SessionSettingsServiceTestSourceIPResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiSettingsV1SessionSettingsServiceTestSourceIPResponse$Outbound, z.ZodTypeDef, C1ApiSettingsV1SessionSettingsServiceTestSourceIPResponse>;
    /** @deprecated use `C1ApiSettingsV1SessionSettingsServiceTestSourceIPResponse$Outbound` instead. */
    type Outbound = C1ApiSettingsV1SessionSettingsServiceTestSourceIPResponse$Outbound;
}
export declare function c1ApiSettingsV1SessionSettingsServiceTestSourceIPResponseToJSON(c1ApiSettingsV1SessionSettingsServiceTestSourceIPResponse: C1ApiSettingsV1SessionSettingsServiceTestSourceIPResponse): string;
export declare function c1ApiSettingsV1SessionSettingsServiceTestSourceIPResponseFromJSON(jsonString: string): SafeParseResult<C1ApiSettingsV1SessionSettingsServiceTestSourceIPResponse, SDKValidationError>;
