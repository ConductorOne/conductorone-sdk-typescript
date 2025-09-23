# RemoveEntitlementMembershipResponse

The RemoveEntitlementMembershipResponse message.

## Example Usage

```typescript
import { RemoveEntitlementMembershipResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RemoveEntitlementMembershipResponse = {};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `revokeTaskId`                                                                                                                                              | *string*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                          | The ID of the revoke task created to remove the user from the entitlement, if the entitlement is an access profile (aka. catalog).<br/> It's aka. the JML task. |