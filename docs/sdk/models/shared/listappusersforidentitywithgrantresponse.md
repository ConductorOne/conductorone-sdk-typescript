# ListAppUsersForIdentityWithGrantResponse

The ListAppUsersForIdentityWithGrantResponse message.

## Example Usage

```typescript
import { ListAppUsersForIdentityWithGrantResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ListAppUsersForIdentityWithGrantResponse = {};
```

## Fields

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bindings`                                                                                                                                                                   | [shared.AppEntitlementUserBinding](../../../sdk/models/shared/appentitlementuserbinding.md)[]                                                                                | :heavy_minus_sign:                                                                                                                                                           | The list of app users that may also have grant information.<br/> Without a grant, only the tenant, app, and app user ID will be set. With a grant, the whole struct is populated |