import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ConnectorProvision, ConnectorProvision$Outbound } from "./connectorprovision.js";
import { DelegatedProvision, DelegatedProvision$Outbound } from "./delegatedprovision.js";
import { ExternalTicketProvision, ExternalTicketProvision$Outbound } from "./externalticketprovision.js";
import { ManualProvision, ManualProvision$Outbound } from "./manualprovision.js";
import { MultiStep, MultiStep$Outbound } from "./multistep.js";
import { UnconfiguredProvision, UnconfiguredProvision$Outbound } from "./unconfiguredprovision.js";
import { WebhookProvision, WebhookProvision$Outbound } from "./webhookprovision.js";
/**
 * ProvisionPolicy is a oneOf that indicates how a provision step should be processed.
 *
 * @remarks
 *
 * This message contains a oneof named typ. Only a single field of the following list may be set at a time:
 *   - connector
 *   - manual
 *   - delegated
 *   - webhook
 *   - multiStep
 *   - externalTicket
 *   - unconfigured
 */
export type ProvisionPolicyInput = {
    connector?: ConnectorProvision | null | undefined;
    delegated?: DelegatedProvision | null | undefined;
    externalTicket?: ExternalTicketProvision | null | undefined;
    manual?: ManualProvision | null | undefined;
    multiStep?: MultiStep | null | undefined;
    unconfigured?: UnconfiguredProvision | null | undefined;
    webhook?: WebhookProvision | null | undefined;
};
/** @internal */
export declare const ProvisionPolicyInput$inboundSchema: z.ZodType<ProvisionPolicyInput, z.ZodTypeDef, unknown>;
/** @internal */
export type ProvisionPolicyInput$Outbound = {
    connector?: ConnectorProvision$Outbound | null | undefined;
    delegated?: DelegatedProvision$Outbound | null | undefined;
    externalTicket?: ExternalTicketProvision$Outbound | null | undefined;
    manual?: ManualProvision$Outbound | null | undefined;
    multiStep?: MultiStep$Outbound | null | undefined;
    unconfigured?: UnconfiguredProvision$Outbound | null | undefined;
    webhook?: WebhookProvision$Outbound | null | undefined;
};
/** @internal */
export declare const ProvisionPolicyInput$outboundSchema: z.ZodType<ProvisionPolicyInput$Outbound, z.ZodTypeDef, ProvisionPolicyInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ProvisionPolicyInput$ {
    /** @deprecated use `ProvisionPolicyInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ProvisionPolicyInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `ProvisionPolicyInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ProvisionPolicyInput$Outbound, z.ZodTypeDef, ProvisionPolicyInput>;
    /** @deprecated use `ProvisionPolicyInput$Outbound` instead. */
    type Outbound = ProvisionPolicyInput$Outbound;
}
export declare function provisionPolicyInputToJSON(provisionPolicyInput: ProvisionPolicyInput): string;
export declare function provisionPolicyInputFromJSON(jsonString: string): SafeParseResult<ProvisionPolicyInput, SDKValidationError>;
