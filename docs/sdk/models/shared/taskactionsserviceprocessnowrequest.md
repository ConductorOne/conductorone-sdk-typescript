# TaskActionsServiceProcessNowRequest

The TaskActionsServiceProcessNowRequest object lets you trigger processing of a task immediately.

## Example Usage

```typescript
import { TaskActionsServiceProcessNowRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskActionsServiceProcessNowRequest = {};
```

## Fields

| Field                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                          | Required                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `taskExpandMask`                                                                                                                                                                                                              | [shared.TaskExpandMask](../../../sdk/models/shared/taskexpandmask.md)                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                            | The task expand mask is an array of strings that specifes the related objects the requester wishes to have returned when making a request where the expand mask is part of the input. Use '*' to view all possible responses. |