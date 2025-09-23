import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { EditorMarker, EditorMarker$Outbound } from "./editormarker.js";
/**
 * The EditorValidateResponse message.
 */
export type EditorValidateResponse = {
    /**
     * The markers field.
     */
    markers?: Array<EditorMarker> | null | undefined;
};
/** @internal */
export declare const EditorValidateResponse$inboundSchema: z.ZodType<EditorValidateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type EditorValidateResponse$Outbound = {
    markers?: Array<EditorMarker$Outbound> | null | undefined;
};
/** @internal */
export declare const EditorValidateResponse$outboundSchema: z.ZodType<EditorValidateResponse$Outbound, z.ZodTypeDef, EditorValidateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EditorValidateResponse$ {
    /** @deprecated use `EditorValidateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EditorValidateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `EditorValidateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EditorValidateResponse$Outbound, z.ZodTypeDef, EditorValidateResponse>;
    /** @deprecated use `EditorValidateResponse$Outbound` instead. */
    type Outbound = EditorValidateResponse$Outbound;
}
export declare function editorValidateResponseToJSON(editorValidateResponse: EditorValidateResponse): string;
export declare function editorValidateResponseFromJSON(jsonString: string): SafeParseResult<EditorValidateResponse, SDKValidationError>;
