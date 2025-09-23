# ConnectorServiceGetResponse

The ConnectorServiceGetResponse message contains the connectorView, and an expand mask.

## Example Usage

```typescript
import { ConnectorServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ConnectorServiceGetResponse = {};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `connectorView`                                                                                                   | [shared.ConnectorView](../../../sdk/models/shared/connectorview.md)                                               | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `expanded`                                                                                                        | [shared.ConnectorServiceGetResponseExpanded](../../../sdk/models/shared/connectorservicegetresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                | The array of expanded items indicated by the request.                                                             |