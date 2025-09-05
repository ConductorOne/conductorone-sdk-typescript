import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ExporterRef, ExporterRef$Outbound } from "./exporterref.js";
/**
 * The ExportsSearchServiceSearchRequest message.
 */
export type ExportsSearchServiceSearchRequest = {
    /**
     * Search for system log exporters with a case insensitive match on the display name.
     */
    displayName?: string | null | undefined;
    /**
     * The pageSize field.
     */
    pageSize?: number | null | undefined;
    /**
     * The pageToken field.
     */
    pageToken?: string | null | undefined;
    /**
     * The query field.
     */
    query?: string | null | undefined;
    /**
     * The refs field.
     */
    refs?: Array<ExporterRef> | null | undefined;
};
/** @internal */
export declare const ExportsSearchServiceSearchRequest$inboundSchema: z.ZodType<ExportsSearchServiceSearchRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ExportsSearchServiceSearchRequest$Outbound = {
    displayName?: string | null | undefined;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
    query?: string | null | undefined;
    refs?: Array<ExporterRef$Outbound> | null | undefined;
};
/** @internal */
export declare const ExportsSearchServiceSearchRequest$outboundSchema: z.ZodType<ExportsSearchServiceSearchRequest$Outbound, z.ZodTypeDef, ExportsSearchServiceSearchRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExportsSearchServiceSearchRequest$ {
    /** @deprecated use `ExportsSearchServiceSearchRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExportsSearchServiceSearchRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExportsSearchServiceSearchRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExportsSearchServiceSearchRequest$Outbound, z.ZodTypeDef, ExportsSearchServiceSearchRequest>;
    /** @deprecated use `ExportsSearchServiceSearchRequest$Outbound` instead. */
    type Outbound = ExportsSearchServiceSearchRequest$Outbound;
}
export declare function exportsSearchServiceSearchRequestToJSON(exportsSearchServiceSearchRequest: ExportsSearchServiceSearchRequest): string;
export declare function exportsSearchServiceSearchRequestFromJSON(jsonString: string): SafeParseResult<ExportsSearchServiceSearchRequest, SDKValidationError>;
