import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type Details = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The `Status` type defines a logical error model that is suitable for
 *
 * @remarks
 *  different programming environments, including REST APIs and RPC APIs. It is
 *  used by [gRPC](https://github.com/grpc). Each `Status` message contains
 *  three pieces of data: error code, error message, and error details.
 *
 *  You can find out more about this error model and how to work with it in the
 *  [API Design Guide](https://cloud.google.com/apis/design/errors).
 */
export type Status = {
    /**
     * The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code].
     */
    code?: number | null | undefined;
    /**
     * A list of messages that carry the error details.  There is a common set of
     *
     * @remarks
     *  message types for APIs to use.
     */
    details?: Array<Details> | null | undefined;
    /**
     * A developer-facing error message, which should be in English. Any
     *
     * @remarks
     *  user-facing error message should be localized and sent in the
     *  [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client.
     */
    message?: string | null | undefined;
};
/** @internal */
export declare const Details$inboundSchema: z.ZodType<Details, z.ZodTypeDef, unknown>;
/** @internal */
export type Details$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const Details$outboundSchema: z.ZodType<Details$Outbound, z.ZodTypeDef, Details>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Details$ {
    /** @deprecated use `Details$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Details, z.ZodTypeDef, unknown>;
    /** @deprecated use `Details$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Details$Outbound, z.ZodTypeDef, Details>;
    /** @deprecated use `Details$Outbound` instead. */
    type Outbound = Details$Outbound;
}
export declare function detailsToJSON(details: Details): string;
export declare function detailsFromJSON(jsonString: string): SafeParseResult<Details, SDKValidationError>;
/** @internal */
export declare const Status$inboundSchema: z.ZodType<Status, z.ZodTypeDef, unknown>;
/** @internal */
export type Status$Outbound = {
    code?: number | null | undefined;
    details?: Array<Details$Outbound> | null | undefined;
    message?: string | null | undefined;
};
/** @internal */
export declare const Status$outboundSchema: z.ZodType<Status$Outbound, z.ZodTypeDef, Status>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Status$ {
    /** @deprecated use `Status$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Status, z.ZodTypeDef, unknown>;
    /** @deprecated use `Status$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Status$Outbound, z.ZodTypeDef, Status>;
    /** @deprecated use `Status$Outbound` instead. */
    type Outbound = Status$Outbound;
}
export declare function statusToJSON(status: Status): string;
export declare function statusFromJSON(jsonString: string): SafeParseResult<Status, SDKValidationError>;
