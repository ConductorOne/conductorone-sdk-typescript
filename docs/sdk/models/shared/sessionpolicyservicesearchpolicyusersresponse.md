# SessionPolicyServiceSearchPolicyUsersResponse

SessionPolicyServiceSearchPolicyUsersResponse carries one page of the users
 a policy applies to.

## Example Usage

```typescript
import { SessionPolicyServiceSearchPolicyUsersResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SessionPolicyServiceSearchPolicyUsersResponse = {};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `nextPageToken`                                                 | *string*                                                        | :heavy_minus_sign:                                              | The token for the next page. Empty when this is the last page.  |
| `users`                                                         | [shared.PolicyUser](../../../sdk/models/shared/policyuser.md)[] | :heavy_minus_sign:                                              | The users on this page.                                         |