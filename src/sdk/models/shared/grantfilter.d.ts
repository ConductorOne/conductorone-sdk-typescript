import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The grantFilterType field.
 */
export declare const GrantFilterType: {
    readonly GrantFilterTypeUnspecified: "GRANT_FILTER_TYPE_UNSPECIFIED";
    readonly GrantFilterTypePermanent: "GRANT_FILTER_TYPE_PERMANENT";
    readonly GrantFilterTypeTemporary: "GRANT_FILTER_TYPE_TEMPORARY";
};
/**
 * The grantFilterType field.
 */
export type GrantFilterType = OpenEnum<typeof GrantFilterType>;
/**
 * The grantJustificationType field.
 */
export declare const GrantJustificationType: {
    readonly GrantJustificationTypeUnspecified: "GRANT_JUSTIFICATION_TYPE_UNSPECIFIED";
    readonly GrantJustificationTypeAll: "GRANT_JUSTIFICATION_TYPE_ALL";
    readonly GrantJustificationTypeConductorOne: "GRANT_JUSTIFICATION_TYPE_CONDUCTOR_ONE";
    readonly GrantJustificationTypeDirect: "GRANT_JUSTIFICATION_TYPE_DIRECT";
};
/**
 * The grantJustificationType field.
 */
export type GrantJustificationType = OpenEnum<typeof GrantJustificationType>;
/**
 * The grantSourceFilter field.
 */
export declare const GrantSourceFilter: {
    readonly GrantSourceFilterUnspecified: "GRANT_SOURCE_FILTER_UNSPECIFIED";
    readonly GrantSourceFilterDirect: "GRANT_SOURCE_FILTER_DIRECT";
    readonly GrantSourceFilterInherited: "GRANT_SOURCE_FILTER_INHERITED";
};
/**
 * The grantSourceFilter field.
 */
export type GrantSourceFilter = OpenEnum<typeof GrantSourceFilter>;
/**
 * The GrantFilter message.
 */
export type GrantFilter = {
    /**
     * The grantFilterType field.
     */
    grantFilterType?: GrantFilterType | null | undefined;
    /**
     * The grantJustificationType field.
     */
    grantJustificationType?: GrantJustificationType | null | undefined;
    /**
     * The grantSourceFilter field.
     */
    grantSourceFilter?: GrantSourceFilter | null | undefined;
};
/** @internal */
export declare const GrantFilterType$inboundSchema: z.ZodType<GrantFilterType, z.ZodTypeDef, unknown>;
/** @internal */
export declare const GrantFilterType$outboundSchema: z.ZodType<GrantFilterType, z.ZodTypeDef, GrantFilterType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GrantFilterType$ {
    /** @deprecated use `GrantFilterType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GrantFilterType, z.ZodTypeDef, unknown>;
    /** @deprecated use `GrantFilterType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GrantFilterType, z.ZodTypeDef, GrantFilterType>;
}
/** @internal */
export declare const GrantJustificationType$inboundSchema: z.ZodType<GrantJustificationType, z.ZodTypeDef, unknown>;
/** @internal */
export declare const GrantJustificationType$outboundSchema: z.ZodType<GrantJustificationType, z.ZodTypeDef, GrantJustificationType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GrantJustificationType$ {
    /** @deprecated use `GrantJustificationType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GrantJustificationType, z.ZodTypeDef, unknown>;
    /** @deprecated use `GrantJustificationType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GrantJustificationType, z.ZodTypeDef, GrantJustificationType>;
}
/** @internal */
export declare const GrantSourceFilter$inboundSchema: z.ZodType<GrantSourceFilter, z.ZodTypeDef, unknown>;
/** @internal */
export declare const GrantSourceFilter$outboundSchema: z.ZodType<GrantSourceFilter, z.ZodTypeDef, GrantSourceFilter>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GrantSourceFilter$ {
    /** @deprecated use `GrantSourceFilter$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GrantSourceFilter, z.ZodTypeDef, unknown>;
    /** @deprecated use `GrantSourceFilter$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GrantSourceFilter, z.ZodTypeDef, GrantSourceFilter>;
}
/** @internal */
export declare const GrantFilter$inboundSchema: z.ZodType<GrantFilter, z.ZodTypeDef, unknown>;
/** @internal */
export type GrantFilter$Outbound = {
    grantFilterType?: string | null | undefined;
    grantJustificationType?: string | null | undefined;
    grantSourceFilter?: string | null | undefined;
};
/** @internal */
export declare const GrantFilter$outboundSchema: z.ZodType<GrantFilter$Outbound, z.ZodTypeDef, GrantFilter>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GrantFilter$ {
    /** @deprecated use `GrantFilter$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GrantFilter, z.ZodTypeDef, unknown>;
    /** @deprecated use `GrantFilter$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GrantFilter$Outbound, z.ZodTypeDef, GrantFilter>;
    /** @deprecated use `GrantFilter$Outbound` instead. */
    type Outbound = GrantFilter$Outbound;
}
export declare function grantFilterToJSON(grantFilter: GrantFilter): string;
export declare function grantFilterFromJSON(jsonString: string): SafeParseResult<GrantFilter, SDKValidationError>;
