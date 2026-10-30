# SessionPolicyServiceSearchAppUserSessionPoliciesRequest

Search the policies selected for users with accounts holding the application's
 SSO sign-in entitlement. Accounts not linked to a current user are excluded.

## Example Usage

```typescript
import { SessionPolicyServiceSearchAppUserSessionPoliciesRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SessionPolicyServiceSearchAppUserSessionPoliciesRequest = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `pageSize`                                                                          | *number*                                                                            | :heavy_minus_sign:                                                                  | Maximum number of policies per page. Follow next_page_token to complete the search. |
| `pageToken`                                                                         | *string*                                                                            | :heavy_minus_sign:                                                                  | The page token from the previous response.                                          |