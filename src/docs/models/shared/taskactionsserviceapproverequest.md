# TaskActionsServiceApproveRequest

 The TaskActionsServiceApproveRequest object lets you approve a task.



## Fields

| Field                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `taskExpandMask`                                                                                                                                                                                                                | [TaskExpandMask](../../models/shared/taskexpandmask.md)                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                              |  The task expand mask is an array of strings that specifes the related objects the requester wishes to have returned when making a request where the expand mask is part of the input. Use '*' to view all possible responses.<br/> |
| `comment`                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                              |  The comment attached to the request.<br/>                                                                                                                                                                                      |
| `policyStepId`                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                              |  The ID of the policy step on the given task to approve.<br/>                                                                                                                                                                   |