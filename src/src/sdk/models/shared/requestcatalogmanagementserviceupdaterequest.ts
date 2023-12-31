/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RequestCatalogInput } from "./requestcatalog";
import { RequestCatalogExpandMask } from "./requestcatalogexpandmask";
import { Expose, Type } from "class-transformer";

/**
 * Update a request catalog object by ID.
 */
export class RequestCatalogManagementServiceUpdateRequestInput extends SpeakeasyBase {
    /**
     * The RequestCatalog is used for managing which entitlements are requestable, and who can request them.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "catalog" })
    @Type(() => RequestCatalogInput)
    requestCatalog?: RequestCatalogInput;

    /**
     * The RequestCatalogExpandMask includes the paths in the catalog view to expand in the return value of this call.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expandMask" })
    @Type(() => RequestCatalogExpandMask)
    requestCatalogExpandMask?: RequestCatalogExpandMask;

    @SpeakeasyMetadata()
    @Expose({ name: "updateMask" })
    updateMask?: string;
}
