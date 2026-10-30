# UpdateFindingAssigneeRequest

The UpdateFindingAssigneeRequest message.

## Example Usage

```typescript
import { UpdateFindingAssigneeRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdateFindingAssigneeRequest = {};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `assigneeIdentityUserId`                                  | *string*                                                  | :heavy_minus_sign:                                        | The identity user to assign. Empty clears the assignment. |