import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * This provision step indicates that we should check an external ticket to provision this entitlement
 */
export type ExternalTicketProvision = {
    /**
     * The appId field.
     */
    appId?: string | null | undefined;
    /**
     * The connectorId field.
     */
    connectorId?: string | null | undefined;
    /**
     * The externalTicketProvisionerConfigId field.
     */
    externalTicketProvisionerConfigId?: string | null | undefined;
    /**
     * This field indicates a text body of instructions for the provisioner to indicate.
     */
    instructions?: string | null | undefined;
};
/** @internal */
export declare const ExternalTicketProvision$inboundSchema: z.ZodType<ExternalTicketProvision, z.ZodTypeDef, unknown>;
/** @internal */
export type ExternalTicketProvision$Outbound = {
    appId?: string | null | undefined;
    connectorId?: string | null | undefined;
    externalTicketProvisionerConfigId?: string | null | undefined;
    instructions?: string | null | undefined;
};
/** @internal */
export declare const ExternalTicketProvision$outboundSchema: z.ZodType<ExternalTicketProvision$Outbound, z.ZodTypeDef, ExternalTicketProvision>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExternalTicketProvision$ {
    /** @deprecated use `ExternalTicketProvision$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExternalTicketProvision, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExternalTicketProvision$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExternalTicketProvision$Outbound, z.ZodTypeDef, ExternalTicketProvision>;
    /** @deprecated use `ExternalTicketProvision$Outbound` instead. */
    type Outbound = ExternalTicketProvision$Outbound;
}
export declare function externalTicketProvisionToJSON(externalTicketProvision: ExternalTicketProvision): string;
export declare function externalTicketProvisionFromJSON(jsonString: string): SafeParseResult<ExternalTicketProvision, SDKValidationError>;
