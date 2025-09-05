import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppManagedStateBindingRef, AppManagedStateBindingRef$Outbound } from "./appmanagedstatebindingref.js";
import { ConnectorExpandMask, ConnectorExpandMask$Outbound } from "./connectorexpandmask.js";
/**
 * The ConnectorServiceCreateDelegatedRequest message contains the fields required to create a connector.
 */
export type ConnectorServiceCreateDelegatedRequest = {
    appManagedStateBindingRef?: AppManagedStateBindingRef | null | undefined;
    /**
     * The catalogId describes which catalog entry this connector is an instance of. For example, every Okta connector will have the same catalogId indicating it is an Okta connector.
     */
    catalogId?: string | null | undefined;
    /**
     * The description of the connector.
     */
    description?: string | null | undefined;
    /**
     * The displayName of the connector.
     */
    displayName?: string | null | undefined;
    expandMask?: ConnectorExpandMask | null | undefined;
    /**
     * The userIds field is used to define the integration owners of the connector.
     */
    userIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const ConnectorServiceCreateDelegatedRequest$inboundSchema: z.ZodType<ConnectorServiceCreateDelegatedRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ConnectorServiceCreateDelegatedRequest$Outbound = {
    appManagedStateBindingRef?: AppManagedStateBindingRef$Outbound | null | undefined;
    catalogId?: string | null | undefined;
    description?: string | null | undefined;
    displayName?: string | null | undefined;
    expandMask?: ConnectorExpandMask$Outbound | null | undefined;
    userIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const ConnectorServiceCreateDelegatedRequest$outboundSchema: z.ZodType<ConnectorServiceCreateDelegatedRequest$Outbound, z.ZodTypeDef, ConnectorServiceCreateDelegatedRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConnectorServiceCreateDelegatedRequest$ {
    /** @deprecated use `ConnectorServiceCreateDelegatedRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConnectorServiceCreateDelegatedRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConnectorServiceCreateDelegatedRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConnectorServiceCreateDelegatedRequest$Outbound, z.ZodTypeDef, ConnectorServiceCreateDelegatedRequest>;
    /** @deprecated use `ConnectorServiceCreateDelegatedRequest$Outbound` instead. */
    type Outbound = ConnectorServiceCreateDelegatedRequest$Outbound;
}
export declare function connectorServiceCreateDelegatedRequestToJSON(connectorServiceCreateDelegatedRequest: ConnectorServiceCreateDelegatedRequest): string;
export declare function connectorServiceCreateDelegatedRequestFromJSON(jsonString: string): SafeParseResult<ConnectorServiceCreateDelegatedRequest, SDKValidationError>;
