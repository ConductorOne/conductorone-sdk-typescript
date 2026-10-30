# AuthzenServerServiceListAuthzenPoliciesResponse

AuthzenServerServiceListAuthzenPoliciesResponse lists an app's CEL policy
 revisions, newest first.

## Example Usage

```typescript
import { AuthzenServerServiceListAuthzenPoliciesResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AuthzenServerServiceListAuthzenPoliciesResponse = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `list`                                                                | [shared.AuthzenPolicy](../../../sdk/models/shared/authzenpolicy.md)[] | :heavy_minus_sign:                                                    | The list field.                                                       |
| `nextPageToken`                                                       | *string*                                                              | :heavy_minus_sign:                                                    | Token for next page.                                                  |