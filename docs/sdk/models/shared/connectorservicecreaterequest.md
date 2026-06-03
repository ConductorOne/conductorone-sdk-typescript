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
| `config`                                                                                                        | [shared.ConnectorServiceCreateRequestConfig](../../../sdk/models/shared/connectorservicecreaterequestconfig.md) | :heavy_minus_sign:                                                                                              | Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.  |
| `description`                                                                                                   | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | The description field.                                                                                          |
| `connectorExpandMask`                                                                                           | [shared.ConnectorExpandMask](../../../sdk/models/shared/connectorexpandmask.md)                                 | :heavy_minus_sign:                                                                                              | The ConnectorExpandMask is used to expand related objects on a connector.                                       |
| `userIds`                                                                                                       | *string*[]                                                                                                      | :heavy_minus_sign:                                                                                              | The userIds field.                                                                                              |