/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { User } from "./user";
import { Expose, Type } from "class-transformer";

/**
 * The ListAppOwnersResponse message.
 */
export class ListAppOwnersResponse extends SpeakeasyBase {
    /**
     * The list field.
     */
    @SpeakeasyMetadata({ elemType: User })
    @Expose({ name: "list" })
    @Type(() => User)
    list?: User[];

    /**
     * The nextPageToken field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "nextPageToken" })
    nextPageToken?: string;

    /**
     * The notificationToken field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "notificationToken" })
    notificationToken?: string;
}