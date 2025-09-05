import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The source of the external reference.
 */
export declare const ExternalRefSource: {
    readonly Unspecified: "UNSPECIFIED";
    readonly Jira: "JIRA";
};
/**
 * The source of the external reference.
 */
export type ExternalRefSource = OpenEnum<typeof ExternalRefSource>;
/**
 * A reference to an external source. This value is unused currently, but may be brought back.
 */
export type ExternalRef = {
    /**
     * The source of the external reference.
     */
    externalRefSource?: ExternalRefSource | null | undefined;
    /**
     * The name of the external reference.
     */
    name?: string | null | undefined;
    /**
     * The URL to the external reference.
     */
    url?: string | null | undefined;
};
/** @internal */
export declare const ExternalRefSource$inboundSchema: z.ZodType<ExternalRefSource, z.ZodTypeDef, unknown>;
/** @internal */
export declare const ExternalRefSource$outboundSchema: z.ZodType<ExternalRefSource, z.ZodTypeDef, ExternalRefSource>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExternalRefSource$ {
    /** @deprecated use `ExternalRefSource$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExternalRefSource, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExternalRefSource$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExternalRefSource, z.ZodTypeDef, ExternalRefSource>;
}
/** @internal */
export declare const ExternalRef$inboundSchema: z.ZodType<ExternalRef, z.ZodTypeDef, unknown>;
/** @internal */
export type ExternalRef$Outbound = {
    externalRefSource?: string | null | undefined;
    name?: string | null | undefined;
    url?: string | null | undefined;
};
/** @internal */
export declare const ExternalRef$outboundSchema: z.ZodType<ExternalRef$Outbound, z.ZodTypeDef, ExternalRef>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExternalRef$ {
    /** @deprecated use `ExternalRef$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExternalRef, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExternalRef$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExternalRef$Outbound, z.ZodTypeDef, ExternalRef>;
    /** @deprecated use `ExternalRef$Outbound` instead. */
    type Outbound = ExternalRef$Outbound;
}
export declare function externalRefToJSON(externalRef: ExternalRef): string;
export declare function externalRefFromJSON(jsonString: string): SafeParseResult<ExternalRef, SDKValidationError>;
