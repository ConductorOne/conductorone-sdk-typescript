import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { StepUpProviderRef, StepUpProviderRef$Outbound } from "./stepupproviderref.js";
/**
 * The providerType field.
 */
export declare const ProviderType: {
    readonly ProviderTypeUnspecified: "PROVIDER_TYPE_UNSPECIFIED";
    readonly ProviderTypeOauth2: "PROVIDER_TYPE_OAUTH2";
    readonly ProviderTypeMicrosoft: "PROVIDER_TYPE_MICROSOFT";
};
/**
 * The providerType field.
 */
export type ProviderType = OpenEnum<typeof ProviderType>;
/**
 * Request message for searching step-up providers
 */
export type SearchStepUpProvidersRequest = {
    /**
     * Maximum number of results to return
     */
    pageSize?: number | null | undefined;
    /**
     * Token for pagination
     */
    pageToken?: string | null | undefined;
    /**
     * The providerType field.
     */
    providerType?: ProviderType | null | undefined;
    /**
     * Filter by name (partial match)
     */
    query?: string | null | undefined;
    /**
     * The refs field.
     */
    refs?: Array<StepUpProviderRef> | null | undefined;
};
/** @internal */
export declare const ProviderType$inboundSchema: z.ZodType<ProviderType, z.ZodTypeDef, unknown>;
/** @internal */
export declare const ProviderType$outboundSchema: z.ZodType<ProviderType, z.ZodTypeDef, ProviderType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ProviderType$ {
    /** @deprecated use `ProviderType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ProviderType, z.ZodTypeDef, unknown>;
    /** @deprecated use `ProviderType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ProviderType, z.ZodTypeDef, ProviderType>;
}
/** @internal */
export declare const SearchStepUpProvidersRequest$inboundSchema: z.ZodType<SearchStepUpProvidersRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchStepUpProvidersRequest$Outbound = {
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
    providerType?: string | null | undefined;
    query?: string | null | undefined;
    refs?: Array<StepUpProviderRef$Outbound> | null | undefined;
};
/** @internal */
export declare const SearchStepUpProvidersRequest$outboundSchema: z.ZodType<SearchStepUpProvidersRequest$Outbound, z.ZodTypeDef, SearchStepUpProvidersRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchStepUpProvidersRequest$ {
    /** @deprecated use `SearchStepUpProvidersRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchStepUpProvidersRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchStepUpProvidersRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchStepUpProvidersRequest$Outbound, z.ZodTypeDef, SearchStepUpProvidersRequest>;
    /** @deprecated use `SearchStepUpProvidersRequest$Outbound` instead. */
    type Outbound = SearchStepUpProvidersRequest$Outbound;
}
export declare function searchStepUpProvidersRequestToJSON(searchStepUpProvidersRequest: SearchStepUpProvidersRequest): string;
export declare function searchStepUpProvidersRequestFromJSON(jsonString: string): SafeParseResult<SearchStepUpProvidersRequest, SDKValidationError>;
