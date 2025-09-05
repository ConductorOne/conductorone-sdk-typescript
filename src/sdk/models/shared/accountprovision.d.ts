import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DoNotSave, DoNotSave$Outbound } from "./donotsave.js";
import { SaveToVault, SaveToVault$Outbound } from "./savetovault.js";
/**
 * The AccountProvision message.
 *
 * @remarks
 *
 * This message contains a oneof named storage_type. Only a single field of the following list may be set at a time:
 *   - saveToVault
 *   - doNotSave
 */
export type AccountProvision = {
    config?: {
        [k: string]: any;
    } | null | undefined;
    /**
     * The connectorId field.
     */
    connectorId?: string | null | undefined;
    doNotSave?: DoNotSave | null | undefined;
    saveToVault?: SaveToVault | null | undefined;
    /**
     * The schemaId field.
     */
    schemaId?: string | null | undefined;
};
/** @internal */
export declare const AccountProvision$inboundSchema: z.ZodType<AccountProvision, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountProvision$Outbound = {
    config?: {
        [k: string]: any;
    } | null | undefined;
    connectorId?: string | null | undefined;
    doNotSave?: DoNotSave$Outbound | null | undefined;
    saveToVault?: SaveToVault$Outbound | null | undefined;
    schemaId?: string | null | undefined;
};
/** @internal */
export declare const AccountProvision$outboundSchema: z.ZodType<AccountProvision$Outbound, z.ZodTypeDef, AccountProvision>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountProvision$ {
    /** @deprecated use `AccountProvision$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountProvision, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountProvision$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountProvision$Outbound, z.ZodTypeDef, AccountProvision>;
    /** @deprecated use `AccountProvision$Outbound` instead. */
    type Outbound = AccountProvision$Outbound;
}
export declare function accountProvisionToJSON(accountProvision: AccountProvision): string;
export declare function accountProvisionFromJSON(jsonString: string): SafeParseResult<AccountProvision, SDKValidationError>;
