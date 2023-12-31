/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PersonalClient } from "./personalclient";
import { Expose, Type } from "class-transformer";

/**
 * The PersonalClientServiceCreateResponse message contains the created personal client and client secret.
 */
export class PersonalClientServiceCreateResponse extends SpeakeasyBase {
    /**
     * The PersonalClient message contains information about a presonal client credential.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "client" })
    @Type(() => PersonalClient)
    personalClient?: PersonalClient;

    /**
     * The client secret that corresponds to the personal client. Make sure to save this, because it cannot be returned or queried again.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "clientSecret" })
    clientSecret?: string;
}
