# ConnectorServiceGetResponse

The ConnectorServiceGetResponse message contains the connectorView, and an expand mask.

## Example Usage

```typescript
import { ConnectorServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ConnectorServiceGetResponse = {};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `connectorView`                                                                                                               | [shared.ConnectorView](../../../sdk/models/shared/connectorview.md)                                                           | :heavy_minus_sign:                                                                                                            | The ConnectorView object provides a connector response object, as well as JSONPATHs to related objects provided by expanders. |
| `expanded`                                                                                                                    | [shared.ConnectorServiceGetResponseExpanded](../../../sdk/models/shared/connectorservicegetresponseexpanded.md)[]             | :heavy_minus_sign:                                                                                                            | The array of expanded items indicated by the request.                                                                         |