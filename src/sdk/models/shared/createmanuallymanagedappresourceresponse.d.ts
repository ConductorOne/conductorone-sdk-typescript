import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppResource, AppResource$Outbound } from "./appresource.js";
/**
 * The CreateManuallyManagedAppResourceResponse message.
 */
export type CreateManuallyManagedAppResourceResponse = {
    appResource?: AppResource | null | undefined;
};
/** @internal */
export declare const CreateManuallyManagedAppResourceResponse$inboundSchema: z.ZodType<CreateManuallyManagedAppResourceResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateManuallyManagedAppResourceResponse$Outbound = {
    appResource?: AppResource$Outbound | null | undefined;
};
/** @internal */
export declare const CreateManuallyManagedAppResourceResponse$outboundSchema: z.ZodType<CreateManuallyManagedAppResourceResponse$Outbound, z.ZodTypeDef, CreateManuallyManagedAppResourceResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateManuallyManagedAppResourceResponse$ {
    /** @deprecated use `CreateManuallyManagedAppResourceResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateManuallyManagedAppResourceResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateManuallyManagedAppResourceResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateManuallyManagedAppResourceResponse$Outbound, z.ZodTypeDef, CreateManuallyManagedAppResourceResponse>;
    /** @deprecated use `CreateManuallyManagedAppResourceResponse$Outbound` instead. */
    type Outbound = CreateManuallyManagedAppResourceResponse$Outbound;
}
export declare function createManuallyManagedAppResourceResponseToJSON(createManuallyManagedAppResourceResponse: CreateManuallyManagedAppResourceResponse): string;
export declare function createManuallyManagedAppResourceResponseFromJSON(jsonString: string): SafeParseResult<CreateManuallyManagedAppResourceResponse, SDKValidationError>;
