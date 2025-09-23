import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { App, App$Outbound } from "./app.js";
/**
 * Returns the new app's values.
 */
export type CreateAppResponse = {
    app?: App | null | undefined;
};
/** @internal */
export declare const CreateAppResponse$inboundSchema: z.ZodType<CreateAppResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateAppResponse$Outbound = {
    app?: App$Outbound | null | undefined;
};
/** @internal */
export declare const CreateAppResponse$outboundSchema: z.ZodType<CreateAppResponse$Outbound, z.ZodTypeDef, CreateAppResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateAppResponse$ {
    /** @deprecated use `CreateAppResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateAppResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateAppResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateAppResponse$Outbound, z.ZodTypeDef, CreateAppResponse>;
    /** @deprecated use `CreateAppResponse$Outbound` instead. */
    type Outbound = CreateAppResponse$Outbound;
}
export declare function createAppResponseToJSON(createAppResponse: CreateAppResponse): string;
export declare function createAppResponseFromJSON(jsonString: string): SafeParseResult<CreateAppResponse, SDKValidationError>;
