import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAuthV1AuthIntrospectResponse = {
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
     * IntrospectResponse contains information about the current user who is authenticated.
     */
    introspectResponse?: shared.IntrospectResponse | undefined;
};
/** @internal */
export declare const C1ApiAuthV1AuthIntrospectResponse$inboundSchema: z.ZodType<C1ApiAuthV1AuthIntrospectResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAuthV1AuthIntrospectResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    IntrospectResponse?: shared.IntrospectResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAuthV1AuthIntrospectResponse$outboundSchema: z.ZodType<C1ApiAuthV1AuthIntrospectResponse$Outbound, z.ZodTypeDef, C1ApiAuthV1AuthIntrospectResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAuthV1AuthIntrospectResponse$ {
    /** @deprecated use `C1ApiAuthV1AuthIntrospectResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAuthV1AuthIntrospectResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAuthV1AuthIntrospectResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAuthV1AuthIntrospectResponse$Outbound, z.ZodTypeDef, C1ApiAuthV1AuthIntrospectResponse>;
    /** @deprecated use `C1ApiAuthV1AuthIntrospectResponse$Outbound` instead. */
    type Outbound = C1ApiAuthV1AuthIntrospectResponse$Outbound;
}
export declare function c1ApiAuthV1AuthIntrospectResponseToJSON(c1ApiAuthV1AuthIntrospectResponse: C1ApiAuthV1AuthIntrospectResponse): string;
export declare function c1ApiAuthV1AuthIntrospectResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAuthV1AuthIntrospectResponse, SDKValidationError>;
