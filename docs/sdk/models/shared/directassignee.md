# DirectAssignee

DirectAssignee names the assignee outright, in contrast to the derived arms
 reserved above.

## Example Usage

```typescript
import { DirectAssignee } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DirectAssignee = {};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `identityUserId`                                                                                                                                  | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Non-optional by design: contrast UpdateFindingAssigneeRequest, whose<br/> "^([a-zA-Z0-9]{27})?$" admits empty because that RPC is how a human clears. |