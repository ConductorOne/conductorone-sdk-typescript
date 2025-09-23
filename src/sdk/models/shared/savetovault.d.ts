import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The SaveToVault message.
 */
export type SaveToVault = {
    /**
     * The vaultIds field.
     */
    vaultIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const SaveToVault$inboundSchema: z.ZodType<SaveToVault, z.ZodTypeDef, unknown>;
/** @internal */
export type SaveToVault$Outbound = {
    vaultIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const SaveToVault$outboundSchema: z.ZodType<SaveToVault$Outbound, z.ZodTypeDef, SaveToVault>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SaveToVault$ {
    /** @deprecated use `SaveToVault$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SaveToVault, z.ZodTypeDef, unknown>;
    /** @deprecated use `SaveToVault$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SaveToVault$Outbound, z.ZodTypeDef, SaveToVault>;
    /** @deprecated use `SaveToVault$Outbound` instead. */
    type Outbound = SaveToVault$Outbound;
}
export declare function saveToVaultToJSON(saveToVault: SaveToVault): string;
export declare function saveToVaultFromJSON(jsonString: string): SafeParseResult<SaveToVault, SDKValidationError>;
