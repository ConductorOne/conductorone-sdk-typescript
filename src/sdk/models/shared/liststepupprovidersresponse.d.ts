import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { StepUpProvider, StepUpProvider$Outbound } from "./stepupprovider.js";
/**
 * The ListStepUpProvidersResponse message.
 */
export type ListStepUpProvidersResponse = {
    /**
     * The list field.
     */
    list?: Array<StepUpProvider> | null | undefined;
    /**
     * The nextPageToken field.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ListStepUpProvidersResponse$inboundSchema: z.ZodType<ListStepUpProvidersResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListStepUpProvidersResponse$Outbound = {
    list?: Array<StepUpProvider$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ListStepUpProvidersResponse$outboundSchema: z.ZodType<ListStepUpProvidersResponse$Outbound, z.ZodTypeDef, ListStepUpProvidersResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListStepUpProvidersResponse$ {
    /** @deprecated use `ListStepUpProvidersResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListStepUpProvidersResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListStepUpProvidersResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListStepUpProvidersResponse$Outbound, z.ZodTypeDef, ListStepUpProvidersResponse>;
    /** @deprecated use `ListStepUpProvidersResponse$Outbound` instead. */
    type Outbound = ListStepUpProvidersResponse$Outbound;
}
export declare function listStepUpProvidersResponseToJSON(listStepUpProvidersResponse: ListStepUpProvidersResponse): string;
export declare function listStepUpProvidersResponseFromJSON(jsonString: string): SafeParseResult<ListStepUpProvidersResponse, SDKValidationError>;
