# TaskActionsServiceDenyResponse

 The TaskActionsServiceDenyResponse returns a task view with paths indicating the location of expanded items in the array.



## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `taskView`                                                                                                                                                                                         | [TaskView](../../models/shared/taskview.md)                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                 |  Contains a task and JSONPATH expressions that describe where in the expanded array related objects are located. This view can be used to display a fully-detailed dashboard of task information.<br/> |
| `expanded`                                                                                                                                                                                         | Record<string, *any*>[]                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                 |  List of serialized related objects.<br/>                                                                                                                                                          |
| `ticketActionId`                                                                                                                                                                                   | *string*                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 |  The ID of the ticket (task) deny action created by this request.<br/>                                                                                                                             |