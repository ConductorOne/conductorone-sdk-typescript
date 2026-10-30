# SessionPolicyServiceSearchAppUserSessionPoliciesResponse

Distinct effective policies, ordered by display name and policy ID.
 A tenant default appears only if it is selected for at least one user.
 An empty list means no effective policies were found, including when no
 current users have accounts holding the sign-in entitlement.

## Example Usage

```typescript
import { SessionPolicyServiceSearchAppUserSessionPoliciesResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SessionPolicyServiceSearchAppUserSessionPoliciesResponse = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `list`                                                                | [shared.SessionPolicy](../../../sdk/models/shared/sessionpolicy.md)[] | :heavy_minus_sign:                                                    | The list field.                                                       |
| `nextPageToken`                                                       | *string*                                                              | :heavy_minus_sign:                                                    | The token for the next page. Empty on the last page.                  |