# TaskServiceCreateOffboardingRequest

Create an offboarding task.

## Example Usage

```typescript
import { TaskServiceCreateOffboardingRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskServiceCreateOffboardingRequest = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `description`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | The description of the offboarding request.                           |
| `expandMask`                                                          | [shared.TaskExpandMask](../../../sdk/models/shared/taskexpandmask.md) | :heavy_minus_sign:                                                    | N/A                                                                   |
| `subjectUserId`                                                       | *string*                                                              | :heavy_minus_sign:                                                    | The ID of the user to offboard.                                       |