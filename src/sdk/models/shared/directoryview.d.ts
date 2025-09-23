import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Directory, Directory$Outbound } from "./directory.js";
/**
 * The directory view contains a directory and an app_path which is a JSONPATH set to the location in the expand mask that the expanded app will live if requested by the expander.
 */
export type DirectoryView = {
    /**
     * JSONPATH expression indicating the location of the App object in the  array.
     */
    appPath?: string | null | undefined;
    directory?: Directory | null | undefined;
};
/** @internal */
export declare const DirectoryView$inboundSchema: z.ZodType<DirectoryView, z.ZodTypeDef, unknown>;
/** @internal */
export type DirectoryView$Outbound = {
    appPath?: string | null | undefined;
    directory?: Directory$Outbound | null | undefined;
};
/** @internal */
export declare const DirectoryView$outboundSchema: z.ZodType<DirectoryView$Outbound, z.ZodTypeDef, DirectoryView>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DirectoryView$ {
    /** @deprecated use `DirectoryView$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DirectoryView, z.ZodTypeDef, unknown>;
    /** @deprecated use `DirectoryView$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DirectoryView$Outbound, z.ZodTypeDef, DirectoryView>;
    /** @deprecated use `DirectoryView$Outbound` instead. */
    type Outbound = DirectoryView$Outbound;
}
export declare function directoryViewToJSON(directoryView: DirectoryView): string;
export declare function directoryViewFromJSON(jsonString: string): SafeParseResult<DirectoryView, SDKValidationError>;
