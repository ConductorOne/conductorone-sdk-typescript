# ConnectorOwnerUser

ConnectorOwnerUser represents a user ownership source for a connector.

## Example Usage

```typescript
import { ConnectorOwnerUser } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ConnectorOwnerUser = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `appId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The appId field.                                                                              |
| `connectorId`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The connectorId field.                                                                        |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `roleSlug`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The roleSlug field.                                                                           |
| `user`                                                                                        | [shared.User](../../../sdk/models/shared/user.md)                                             | :heavy_minus_sign:                                                                            | The User object provides all of the details for an user, as well as some configuration.       |