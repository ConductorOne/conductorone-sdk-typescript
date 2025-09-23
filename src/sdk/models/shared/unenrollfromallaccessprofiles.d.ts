import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { UserRef, UserRef$Outbound } from "./userref.js";
/**
 * The UnenrollFromAllAccessProfiles message.
 */
export type UnenrollFromAllAccessProfiles = {
    /**
     * Optional list of catalog IDs to unenroll from. If empty, unenroll from all catalogs.
     */
    catalogIds?: Array<string> | null | undefined;
    /**
     * CEL expression to dynamically select catalog IDs. If provided, overrides catalog_ids.
     */
    catalogIdsCel?: string | null | undefined;
    /**
     * If true, the step will use the subject user of the automation as the subject.
     */
    useSubjectUser?: boolean | null | undefined;
    /**
     * The userIdsCel field.
     */
    userIdsCel?: string | null | undefined;
    /**
     * The userRefs field.
     */
    userRefs?: Array<UserRef> | null | undefined;
};
/** @internal */
export declare const UnenrollFromAllAccessProfiles$inboundSchema: z.ZodType<UnenrollFromAllAccessProfiles, z.ZodTypeDef, unknown>;
/** @internal */
export type UnenrollFromAllAccessProfiles$Outbound = {
    catalogIds?: Array<string> | null | undefined;
    catalogIdsCel?: string | null | undefined;
    useSubjectUser?: boolean | null | undefined;
    userIdsCel?: string | null | undefined;
    userRefs?: Array<UserRef$Outbound> | null | undefined;
};
/** @internal */
export declare const UnenrollFromAllAccessProfiles$outboundSchema: z.ZodType<UnenrollFromAllAccessProfiles$Outbound, z.ZodTypeDef, UnenrollFromAllAccessProfiles>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UnenrollFromAllAccessProfiles$ {
    /** @deprecated use `UnenrollFromAllAccessProfiles$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UnenrollFromAllAccessProfiles, z.ZodTypeDef, unknown>;
    /** @deprecated use `UnenrollFromAllAccessProfiles$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UnenrollFromAllAccessProfiles$Outbound, z.ZodTypeDef, UnenrollFromAllAccessProfiles>;
    /** @deprecated use `UnenrollFromAllAccessProfiles$Outbound` instead. */
    type Outbound = UnenrollFromAllAccessProfiles$Outbound;
}
export declare function unenrollFromAllAccessProfilesToJSON(unenrollFromAllAccessProfiles: UnenrollFromAllAccessProfiles): string;
export declare function unenrollFromAllAccessProfilesFromJSON(jsonString: string): SafeParseResult<UnenrollFromAllAccessProfiles, SDKValidationError>;
