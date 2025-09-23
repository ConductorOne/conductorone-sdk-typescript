import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The EditorValidateRequest message.
 */
export type EditorValidateRequest = {
    /**
     * The text field.
     */
    text?: string | null | undefined;
};
/** @internal */
export declare const EditorValidateRequest$inboundSchema: z.ZodType<EditorValidateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type EditorValidateRequest$Outbound = {
    text?: string | null | undefined;
};
/** @internal */
export declare const EditorValidateRequest$outboundSchema: z.ZodType<EditorValidateRequest$Outbound, z.ZodTypeDef, EditorValidateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EditorValidateRequest$ {
    /** @deprecated use `EditorValidateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EditorValidateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `EditorValidateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EditorValidateRequest$Outbound, z.ZodTypeDef, EditorValidateRequest>;
    /** @deprecated use `EditorValidateRequest$Outbound` instead. */
    type Outbound = EditorValidateRequest$Outbound;
}
export declare function editorValidateRequestToJSON(editorValidateRequest: EditorValidateRequest): string;
export declare function editorValidateRequestFromJSON(jsonString: string): SafeParseResult<EditorValidateRequest, SDKValidationError>;
