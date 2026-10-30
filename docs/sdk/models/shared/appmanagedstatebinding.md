# AppManagedStateBinding

AppManagedStateBinding records whether a connector-discovered application is managed in ConductorOne.

## Example Usage

```typescript
import { AppManagedStateBinding } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppManagedStateBinding = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `appId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Application that owns the connector which discovered this application.                        |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Display name of the discovered application.                                                   |
| `resourceId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | Resource ID of the discovered application.                                                    |
| `resourceTypeId`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | Resource type used by the connector to represent discovered applications.                     |
| `state`                                                                                       | [shared.AppManagedState](../../../sdk/models/shared/appmanagedstate.md)                       | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |