import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppResource, AppResource$Outbound } from "./appresource.js";
import { AppResourceExpandMask, AppResourceExpandMask$Outbound } from "./appresourceexpandmask.js";
/**
 * The AppResourceServiceUpdateRequest message.
 */
export type AppResourceServiceUpdateRequest = {
    appResource?: AppResource | null | undefined;
    expandMask?: AppResourceExpandMask | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const AppResourceServiceUpdateRequest$inboundSchema: z.ZodType<AppResourceServiceUpdateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AppResourceServiceUpdateRequest$Outbound = {
    appResource?: AppResource$Outbound | null | undefined;
    expandMask?: AppResourceExpandMask$Outbound | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const AppResourceServiceUpdateRequest$outboundSchema: z.ZodType<AppResourceServiceUpdateRequest$Outbound, z.ZodTypeDef, AppResourceServiceUpdateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppResourceServiceUpdateRequest$ {
    /** @deprecated use `AppResourceServiceUpdateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppResourceServiceUpdateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppResourceServiceUpdateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppResourceServiceUpdateRequest$Outbound, z.ZodTypeDef, AppResourceServiceUpdateRequest>;
    /** @deprecated use `AppResourceServiceUpdateRequest$Outbound` instead. */
    type Outbound = AppResourceServiceUpdateRequest$Outbound;
}
export declare function appResourceServiceUpdateRequestToJSON(appResourceServiceUpdateRequest: AppResourceServiceUpdateRequest): string;
export declare function appResourceServiceUpdateRequestFromJSON(jsonString: string): SafeParseResult<AppResourceServiceUpdateRequest, SDKValidationError>;
