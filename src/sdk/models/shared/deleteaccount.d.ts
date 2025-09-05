import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The DeleteAccount message.
 */
export type DeleteAccount = {
    /**
     * The connectorId field.
     */
    connectorId?: string | null | undefined;
};
/** @internal */
export declare const DeleteAccount$inboundSchema: z.ZodType<DeleteAccount, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteAccount$Outbound = {
    connectorId?: string | null | undefined;
};
/** @internal */
export declare const DeleteAccount$outboundSchema: z.ZodType<DeleteAccount$Outbound, z.ZodTypeDef, DeleteAccount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteAccount$ {
    /** @deprecated use `DeleteAccount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteAccount, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteAccount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteAccount$Outbound, z.ZodTypeDef, DeleteAccount>;
    /** @deprecated use `DeleteAccount$Outbound` instead. */
    type Outbound = DeleteAccount$Outbound;
}
export declare function deleteAccountToJSON(deleteAccount: DeleteAccount): string;
export declare function deleteAccountFromJSON(jsonString: string): SafeParseResult<DeleteAccount, SDKValidationError>;
