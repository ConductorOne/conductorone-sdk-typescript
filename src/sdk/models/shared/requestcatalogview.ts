/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RequestCatalog } from "./requestcatalog";
import { Expose, Type } from "class-transformer";

/**
 * The RequestCatalogView message.
 */
export class RequestCatalogView extends SpeakeasyBase {
    /**
     * The RequestCatalog message.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "requestCatalog" })
    @Type(() => RequestCatalog)
    requestCatalog?: RequestCatalog;

    /**
     * The accessEntitlementsPath field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accessEntitlementsPath" })
    accessEntitlementsPath?: string;

    /**
     * The appPaths field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appPaths" })
    appPaths?: string;

    /**
     * The createdByUserPath field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "createdByUserPath" })
    createdByUserPath?: string;
}