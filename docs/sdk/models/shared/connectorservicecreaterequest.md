# ConnectorServiceCreateRequest

The ConnectorServiceCreateRequest message.

## Example Usage

```typescript
import { ConnectorServiceCreateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ConnectorServiceCreateRequest = {};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `catalogId`                                                                                                     | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | The catalogId field.                                                                                            |
| `config`                                                                                                        | [shared.ConnectorServiceCreateRequestConfig](../../../sdk/models/shared/connectorservicecreaterequestconfig.md) | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |
| `description`                                                                                                   | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | The description field.                                                                                          |
| `expandMask`                                                                                                    | [shared.ConnectorExpandMask](../../../sdk/models/shared/connectorexpandmask.md)                                 | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |
| `userIds`                                                                                                       | *string*[]                                                                                                      | :heavy_minus_sign:                                                                                              | The userIds field.                                                                                              |