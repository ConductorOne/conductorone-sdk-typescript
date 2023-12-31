/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TaskView } from "./taskview";
import { Expose, Type } from "class-transformer";

/**
 * The TaskServiceGetResponse returns a task view which has a task including JSONPATHs to the expanded items in the expanded array.
 */
export class TaskServiceGetResponse extends SpeakeasyBase {
    /**
     * Contains a task and JSONPATH expressions that describe where in the expanded array related objects are located. This view can be used to display a fully-detailed dashboard of task information.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "taskView" })
    @Type(() => TaskView)
    taskView?: TaskView;

    /**
     * List of serialized related objects.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expanded" })
    expanded?: Record<string, any>[];
}
