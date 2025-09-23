import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The severity field.
 */
export declare const Severity: {
    readonly Unknown: "UNKNOWN";
    readonly Hint: "HINT";
    readonly Info: "INFO";
    readonly Warning: "WARNING";
    readonly Error: "ERROR";
};
/**
 * The severity field.
 */
export type Severity = OpenEnum<typeof Severity>;
/**
 * The EditorMarker message.
 */
export type EditorMarker = {
    /**
     * The endColumn field.
     */
    endColumn?: number | null | undefined;
    /**
     * The endLineNumber field.
     */
    endLineNumber?: number | null | undefined;
    /**
     * The message field.
     */
    message?: string | null | undefined;
    /**
     * The severity field.
     */
    severity?: Severity | null | undefined;
    /**
     * The startColumn field.
     */
    startColumn?: number | null | undefined;
    /**
     * The startLineNumber field.
     */
    startLineNumber?: number | null | undefined;
};
/** @internal */
export declare const Severity$inboundSchema: z.ZodType<Severity, z.ZodTypeDef, unknown>;
/** @internal */
export declare const Severity$outboundSchema: z.ZodType<Severity, z.ZodTypeDef, Severity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Severity$ {
    /** @deprecated use `Severity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Severity, z.ZodTypeDef, unknown>;
    /** @deprecated use `Severity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Severity, z.ZodTypeDef, Severity>;
}
/** @internal */
export declare const EditorMarker$inboundSchema: z.ZodType<EditorMarker, z.ZodTypeDef, unknown>;
/** @internal */
export type EditorMarker$Outbound = {
    endColumn?: number | null | undefined;
    endLineNumber?: number | null | undefined;
    message?: string | null | undefined;
    severity?: string | null | undefined;
    startColumn?: number | null | undefined;
    startLineNumber?: number | null | undefined;
};
/** @internal */
export declare const EditorMarker$outboundSchema: z.ZodType<EditorMarker$Outbound, z.ZodTypeDef, EditorMarker>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EditorMarker$ {
    /** @deprecated use `EditorMarker$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EditorMarker, z.ZodTypeDef, unknown>;
    /** @deprecated use `EditorMarker$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EditorMarker$Outbound, z.ZodTypeDef, EditorMarker>;
    /** @deprecated use `EditorMarker$Outbound` instead. */
    type Outbound = EditorMarker$Outbound;
}
export declare function editorMarkerToJSON(editorMarker: EditorMarker): string;
export declare function editorMarkerFromJSON(jsonString: string): SafeParseResult<EditorMarker, SDKValidationError>;
