# Assignment

Assignment is one principal (user) assigned to a session policy.

## Example Usage

```typescript
import { Assignment } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Assignment = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `source`                                                                  | [shared.AssignmentSource](../../../sdk/models/shared/assignmentsource.md) | :heavy_minus_sign:                                                        | Whether the assignment is direct or conferred through a group.            |
| `userId`                                                                  | *string*                                                                  | :heavy_minus_sign:                                                        | The assigned user's ID.                                                   |