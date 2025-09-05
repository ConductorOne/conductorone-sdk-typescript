import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Exporter, Exporter$Outbound } from "./exporter.js";
/**
 * The ExportsSearchServiceSearchResponse message.
 */
export type ExportsSearchServiceSearchResponse = {
    /**
     * The list field.
     */
    list?: Array<Exporter> | null | undefined;
    /**
     * The nextPageToken field.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ExportsSearchServiceSearchResponse$inboundSchema: z.ZodType<ExportsSearchServiceSearchResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ExportsSearchServiceSearchResponse$Outbound = {
    list?: Array<Exporter$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ExportsSearchServiceSearchResponse$outboundSchema: z.ZodType<ExportsSearchServiceSearchResponse$Outbound, z.ZodTypeDef, ExportsSearchServiceSearchResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExportsSearchServiceSearchResponse$ {
    /** @deprecated use `ExportsSearchServiceSearchResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExportsSearchServiceSearchResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExportsSearchServiceSearchResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExportsSearchServiceSearchResponse$Outbound, z.ZodTypeDef, ExportsSearchServiceSearchResponse>;
    /** @deprecated use `ExportsSearchServiceSearchResponse$Outbound` instead. */
    type Outbound = ExportsSearchServiceSearchResponse$Outbound;
}
export declare function exportsSearchServiceSearchResponseToJSON(exportsSearchServiceSearchResponse: ExportsSearchServiceSearchResponse): string;
export declare function exportsSearchServiceSearchResponseFromJSON(jsonString: string): SafeParseResult<ExportsSearchServiceSearchResponse, SDKValidationError>;
