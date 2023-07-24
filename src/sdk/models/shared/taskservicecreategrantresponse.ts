/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TaskView } from "./taskview";
import { Expose, Type } from "class-transformer";

/**
 * The TaskServiceCreateGrantResponse message.
 */
export class TaskServiceCreateGrantResponse extends SpeakeasyBase {
    /**
     *  Contains a task and JSONPATH expressions that describe where in the expanded array related objects are located. This view can be used to display a fully-detailed dashboard of task information.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "taskView" })
    @Type(() => TaskView)
    taskView?: TaskView;

    /**
     * The expanded field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expanded" })
    expanded?: Record<string, any>[];
}
