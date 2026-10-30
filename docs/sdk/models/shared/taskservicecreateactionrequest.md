# TaskServiceCreateActionRequest

The TaskServiceCreateActionRequest message submits a request action (requestable automation).

## Example Usage

```typescript
import { TaskServiceCreateActionRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskServiceCreateActionRequest = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `actionId`                                                            | *string*                                                              | :heavy_minus_sign:                                                    | The ID of the action to request.                                      |
| `description`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | An optional description of the request.                               |
| `expandMask`                                                          | [shared.TaskExpandMask](../../../sdk/models/shared/taskexpandmask.md) | :heavy_minus_sign:                                                    | N/A                                                                   |
| `formValues`                                                          | Record<string, *any*>                                                 | :heavy_minus_sign:                                                    | N/A                                                                   |