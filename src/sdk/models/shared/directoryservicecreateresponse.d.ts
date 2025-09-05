import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DirectoryView, DirectoryView$Outbound } from "./directoryview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type DirectoryServiceCreateResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The DirectoryServiceCreateResponse message.
 */
export type DirectoryServiceCreateResponse = {
    directoryView?: DirectoryView | null | undefined;
    /**
     * List of serialized related objects.
     */
    expanded?: Array<DirectoryServiceCreateResponseExpanded> | null | undefined;
};
/** @internal */
export declare const DirectoryServiceCreateResponseExpanded$inboundSchema: z.ZodType<DirectoryServiceCreateResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type DirectoryServiceCreateResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const DirectoryServiceCreateResponseExpanded$outboundSchema: z.ZodType<DirectoryServiceCreateResponseExpanded$Outbound, z.ZodTypeDef, DirectoryServiceCreateResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DirectoryServiceCreateResponseExpanded$ {
    /** @deprecated use `DirectoryServiceCreateResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DirectoryServiceCreateResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `DirectoryServiceCreateResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DirectoryServiceCreateResponseExpanded$Outbound, z.ZodTypeDef, DirectoryServiceCreateResponseExpanded>;
    /** @deprecated use `DirectoryServiceCreateResponseExpanded$Outbound` instead. */
    type Outbound = DirectoryServiceCreateResponseExpanded$Outbound;
}
export declare function directoryServiceCreateResponseExpandedToJSON(directoryServiceCreateResponseExpanded: DirectoryServiceCreateResponseExpanded): string;
export declare function directoryServiceCreateResponseExpandedFromJSON(jsonString: string): SafeParseResult<DirectoryServiceCreateResponseExpanded, SDKValidationError>;
/** @internal */
export declare const DirectoryServiceCreateResponse$inboundSchema: z.ZodType<DirectoryServiceCreateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DirectoryServiceCreateResponse$Outbound = {
    directoryView?: DirectoryView$Outbound | null | undefined;
    expanded?: Array<DirectoryServiceCreateResponseExpanded$Outbound> | null | undefined;
};
/** @internal */
export declare const DirectoryServiceCreateResponse$outboundSchema: z.ZodType<DirectoryServiceCreateResponse$Outbound, z.ZodTypeDef, DirectoryServiceCreateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DirectoryServiceCreateResponse$ {
    /** @deprecated use `DirectoryServiceCreateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DirectoryServiceCreateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DirectoryServiceCreateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DirectoryServiceCreateResponse$Outbound, z.ZodTypeDef, DirectoryServiceCreateResponse>;
    /** @deprecated use `DirectoryServiceCreateResponse$Outbound` instead. */
    type Outbound = DirectoryServiceCreateResponse$Outbound;
}
export declare function directoryServiceCreateResponseToJSON(directoryServiceCreateResponse: DirectoryServiceCreateResponse): string;
export declare function directoryServiceCreateResponseFromJSON(jsonString: string): SafeParseResult<DirectoryServiceCreateResponse, SDKValidationError>;
