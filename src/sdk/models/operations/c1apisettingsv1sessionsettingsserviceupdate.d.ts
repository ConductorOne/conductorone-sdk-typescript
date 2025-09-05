import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiSettingsV1SessionSettingsServiceUpdateResponse = {
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
    updateSessionSettingsResponse?: shared.UpdateSessionSettingsResponse | undefined;
};
/** @internal */
export declare const C1ApiSettingsV1SessionSettingsServiceUpdateResponse$inboundSchema: z.ZodType<C1ApiSettingsV1SessionSettingsServiceUpdateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiSettingsV1SessionSettingsServiceUpdateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    UpdateSessionSettingsResponse?: shared.UpdateSessionSettingsResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiSettingsV1SessionSettingsServiceUpdateResponse$outboundSchema: z.ZodType<C1ApiSettingsV1SessionSettingsServiceUpdateResponse$Outbound, z.ZodTypeDef, C1ApiSettingsV1SessionSettingsServiceUpdateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiSettingsV1SessionSettingsServiceUpdateResponse$ {
    /** @deprecated use `C1ApiSettingsV1SessionSettingsServiceUpdateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiSettingsV1SessionSettingsServiceUpdateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiSettingsV1SessionSettingsServiceUpdateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiSettingsV1SessionSettingsServiceUpdateResponse$Outbound, z.ZodTypeDef, C1ApiSettingsV1SessionSettingsServiceUpdateResponse>;
    /** @deprecated use `C1ApiSettingsV1SessionSettingsServiceUpdateResponse$Outbound` instead. */
    type Outbound = C1ApiSettingsV1SessionSettingsServiceUpdateResponse$Outbound;
}
export declare function c1ApiSettingsV1SessionSettingsServiceUpdateResponseToJSON(c1ApiSettingsV1SessionSettingsServiceUpdateResponse: C1ApiSettingsV1SessionSettingsServiceUpdateResponse): string;
export declare function c1ApiSettingsV1SessionSettingsServiceUpdateResponseFromJSON(jsonString: string): SafeParseResult<C1ApiSettingsV1SessionSettingsServiceUpdateResponse, SDKValidationError>;
