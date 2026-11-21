# AppUserSource

One record that makes up an account.

## Example Usage

```typescript
import { AppUserSource } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppUserSource = {};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `kind`                                                                                                                   | [shared.Kind](../../../sdk/models/shared/kind.md)                                                                        | :heavy_minus_sign:                                                                                                       | Where the record came from.                                                                                              |
| `reason`                                                                                                                 | [shared.AppUserSourceReason](../../../sdk/models/shared/appusersourcereason.md)                                          | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `recordId`                                                                                                               | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The record's ID in its source. For a connector record, this is the connector's resource ID without its resource type.    |
| `resourceTypeId`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | For a connector record, the connector resource type of the record, such as "user". Empty for an external record.         |
| `sourceId`                                                                                                               | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | For a connector record, the ID of the connector. For an external record, the ID of the application the record came from. |