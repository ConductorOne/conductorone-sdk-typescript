# ConnectorServiceCreateResponse

The ConnectorServiceCreateResponse is the response returned from creating a connector.

## Example Usage

```typescript
import { ConnectorServiceCreateResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ConnectorServiceCreateResponse = {};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `connectorView`                                                                                                               | [shared.ConnectorView](../../../sdk/models/shared/connectorview.md)                                                           | :heavy_minus_sign:                                                                                                            | The ConnectorView object provides a connector response object, as well as JSONPATHs to related objects provided by expanders. |
| `expanded`                                                                                                                    | [shared.ConnectorServiceCreateResponseExpanded](../../../sdk/models/shared/connectorservicecreateresponseexpanded.md)[]       | :heavy_minus_sign:                                                                                                            | The array of expanded items indicated by the request.                                                                         |