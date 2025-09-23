import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiUserV1UserServiceGetRequest = {
    id: string | null;
};
export type C1ApiUserV1UserServiceGetResponse = {
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
     * The UserServiceGetResponse returns a user view which has a user including JSONPATHs to the expanded items in the expanded array.
     */
    userServiceGetResponse?: shared.UserServiceGetResponse | undefined;
};
/** @internal */
export declare const C1ApiUserV1UserServiceGetRequest$inboundSchema: z.ZodType<C1ApiUserV1UserServiceGetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiUserV1UserServiceGetRequest$Outbound = {
    id: string | null;
};
/** @internal */
export declare const C1ApiUserV1UserServiceGetRequest$outboundSchema: z.ZodType<C1ApiUserV1UserServiceGetRequest$Outbound, z.ZodTypeDef, C1ApiUserV1UserServiceGetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiUserV1UserServiceGetRequest$ {
    /** @deprecated use `C1ApiUserV1UserServiceGetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiUserV1UserServiceGetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiUserV1UserServiceGetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiUserV1UserServiceGetRequest$Outbound, z.ZodTypeDef, C1ApiUserV1UserServiceGetRequest>;
    /** @deprecated use `C1ApiUserV1UserServiceGetRequest$Outbound` instead. */
    type Outbound = C1ApiUserV1UserServiceGetRequest$Outbound;
}
export declare function c1ApiUserV1UserServiceGetRequestToJSON(c1ApiUserV1UserServiceGetRequest: C1ApiUserV1UserServiceGetRequest): string;
export declare function c1ApiUserV1UserServiceGetRequestFromJSON(jsonString: string): SafeParseResult<C1ApiUserV1UserServiceGetRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiUserV1UserServiceGetResponse$inboundSchema: z.ZodType<C1ApiUserV1UserServiceGetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiUserV1UserServiceGetResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    UserServiceGetResponse?: shared.UserServiceGetResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiUserV1UserServiceGetResponse$outboundSchema: z.ZodType<C1ApiUserV1UserServiceGetResponse$Outbound, z.ZodTypeDef, C1ApiUserV1UserServiceGetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiUserV1UserServiceGetResponse$ {
    /** @deprecated use `C1ApiUserV1UserServiceGetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiUserV1UserServiceGetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiUserV1UserServiceGetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiUserV1UserServiceGetResponse$Outbound, z.ZodTypeDef, C1ApiUserV1UserServiceGetResponse>;
    /** @deprecated use `C1ApiUserV1UserServiceGetResponse$Outbound` instead. */
    type Outbound = C1ApiUserV1UserServiceGetResponse$Outbound;
}
export declare function c1ApiUserV1UserServiceGetResponseToJSON(c1ApiUserV1UserServiceGetResponse: C1ApiUserV1UserServiceGetResponse): string;
export declare function c1ApiUserV1UserServiceGetResponseFromJSON(jsonString: string): SafeParseResult<C1ApiUserV1UserServiceGetResponse, SDKValidationError>;
