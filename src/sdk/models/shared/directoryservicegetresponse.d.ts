import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DirectoryView, DirectoryView$Outbound } from "./directoryview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type DirectoryServiceGetResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The Directory Service Get Response returns a directory view with a directory and JSONPATHs indicating the
 *
 * @remarks
 *  location in the expanded array that items are expanded as indicated by the expand mask in the request.
 */
export type DirectoryServiceGetResponse = {
    directoryView?: DirectoryView | null | undefined;
    /**
     * List of serialized related objects.
     */
    expanded?: Array<DirectoryServiceGetResponseExpanded> | null | undefined;
};
/** @internal */
export declare const DirectoryServiceGetResponseExpanded$inboundSchema: z.ZodType<DirectoryServiceGetResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type DirectoryServiceGetResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const DirectoryServiceGetResponseExpanded$outboundSchema: z.ZodType<DirectoryServiceGetResponseExpanded$Outbound, z.ZodTypeDef, DirectoryServiceGetResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DirectoryServiceGetResponseExpanded$ {
    /** @deprecated use `DirectoryServiceGetResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DirectoryServiceGetResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `DirectoryServiceGetResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DirectoryServiceGetResponseExpanded$Outbound, z.ZodTypeDef, DirectoryServiceGetResponseExpanded>;
    /** @deprecated use `DirectoryServiceGetResponseExpanded$Outbound` instead. */
    type Outbound = DirectoryServiceGetResponseExpanded$Outbound;
}
export declare function directoryServiceGetResponseExpandedToJSON(directoryServiceGetResponseExpanded: DirectoryServiceGetResponseExpanded): string;
export declare function directoryServiceGetResponseExpandedFromJSON(jsonString: string): SafeParseResult<DirectoryServiceGetResponseExpanded, SDKValidationError>;
/** @internal */
export declare const DirectoryServiceGetResponse$inboundSchema: z.ZodType<DirectoryServiceGetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DirectoryServiceGetResponse$Outbound = {
    directoryView?: DirectoryView$Outbound | null | undefined;
    expanded?: Array<DirectoryServiceGetResponseExpanded$Outbound> | null | undefined;
};
/** @internal */
export declare const DirectoryServiceGetResponse$outboundSchema: z.ZodType<DirectoryServiceGetResponse$Outbound, z.ZodTypeDef, DirectoryServiceGetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DirectoryServiceGetResponse$ {
    /** @deprecated use `DirectoryServiceGetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DirectoryServiceGetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DirectoryServiceGetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DirectoryServiceGetResponse$Outbound, z.ZodTypeDef, DirectoryServiceGetResponse>;
    /** @deprecated use `DirectoryServiceGetResponse$Outbound` instead. */
    type Outbound = DirectoryServiceGetResponse$Outbound;
}
export declare function directoryServiceGetResponseToJSON(directoryServiceGetResponse: DirectoryServiceGetResponse): string;
export declare function directoryServiceGetResponseFromJSON(jsonString: string): SafeParseResult<DirectoryServiceGetResponse, SDKValidationError>;
