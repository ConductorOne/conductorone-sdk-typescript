import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppsCreateResponse = {
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
     * Returns the new app's values.
     */
    createAppResponse?: shared.CreateAppResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppsCreateResponse$inboundSchema: z.ZodType<C1ApiAppV1AppsCreateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppsCreateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    CreateAppResponse?: shared.CreateAppResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppsCreateResponse$outboundSchema: z.ZodType<C1ApiAppV1AppsCreateResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppsCreateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppsCreateResponse$ {
    /** @deprecated use `C1ApiAppV1AppsCreateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppsCreateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppsCreateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppsCreateResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppsCreateResponse>;
    /** @deprecated use `C1ApiAppV1AppsCreateResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppsCreateResponse$Outbound;
}
export declare function c1ApiAppV1AppsCreateResponseToJSON(c1ApiAppV1AppsCreateResponse: C1ApiAppV1AppsCreateResponse): string;
export declare function c1ApiAppV1AppsCreateResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppsCreateResponse, SDKValidationError>;
