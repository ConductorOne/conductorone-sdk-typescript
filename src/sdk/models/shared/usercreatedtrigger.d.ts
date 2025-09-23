import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The UserCreatedTrigger message.
 */
export type UserCreatedTrigger = {
    /**
     * The condition field.
     */
    condition?: string | null | undefined;
};
/** @internal */
export declare const UserCreatedTrigger$inboundSchema: z.ZodType<UserCreatedTrigger, z.ZodTypeDef, unknown>;
/** @internal */
export type UserCreatedTrigger$Outbound = {
    condition?: string | null | undefined;
};
/** @internal */
export declare const UserCreatedTrigger$outboundSchema: z.ZodType<UserCreatedTrigger$Outbound, z.ZodTypeDef, UserCreatedTrigger>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UserCreatedTrigger$ {
    /** @deprecated use `UserCreatedTrigger$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UserCreatedTrigger, z.ZodTypeDef, unknown>;
    /** @deprecated use `UserCreatedTrigger$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UserCreatedTrigger$Outbound, z.ZodTypeDef, UserCreatedTrigger>;
    /** @deprecated use `UserCreatedTrigger$Outbound` instead. */
    type Outbound = UserCreatedTrigger$Outbound;
}
export declare function userCreatedTriggerToJSON(userCreatedTrigger: UserCreatedTrigger): string;
export declare function userCreatedTriggerFromJSON(jsonString: string): SafeParseResult<UserCreatedTrigger, SDKValidationError>;
