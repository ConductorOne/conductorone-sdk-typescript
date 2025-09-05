import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The request message for setting the app owners.
 */
export type SetAppOwnersRequest = {
    /**
     * The user_ids field for the users to set as an owner of the app.
     */
    userIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const SetAppOwnersRequest$inboundSchema: z.ZodType<SetAppOwnersRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type SetAppOwnersRequest$Outbound = {
    userIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const SetAppOwnersRequest$outboundSchema: z.ZodType<SetAppOwnersRequest$Outbound, z.ZodTypeDef, SetAppOwnersRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SetAppOwnersRequest$ {
    /** @deprecated use `SetAppOwnersRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SetAppOwnersRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `SetAppOwnersRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SetAppOwnersRequest$Outbound, z.ZodTypeDef, SetAppOwnersRequest>;
    /** @deprecated use `SetAppOwnersRequest$Outbound` instead. */
    type Outbound = SetAppOwnersRequest$Outbound;
}
export declare function setAppOwnersRequestToJSON(setAppOwnersRequest: SetAppOwnersRequest): string;
export declare function setAppOwnersRequestFromJSON(jsonString: string): SafeParseResult<SetAppOwnersRequest, SDKValidationError>;
