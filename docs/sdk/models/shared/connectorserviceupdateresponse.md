# ConnectorServiceUpdateResponse

ConnectorServiceUpdateResponse is the response returned by the update method.

## Example Usage

```typescript
import { ConnectorServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ConnectorServiceUpdateResponse = {};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `connectorView`                                                                                                               | [shared.ConnectorView](../../../sdk/models/shared/connectorview.md)                                                           | :heavy_minus_sign:                                                                                                            | The ConnectorView object provides a connector response object, as well as JSONPATHs to related objects provided by expanders. |
| `expanded`                                                                                                                    | [shared.ConnectorServiceUpdateResponseExpanded](../../../sdk/models/shared/connectorserviceupdateresponseexpanded.md)[]       | :heavy_minus_sign:                                                                                                            | The array of expanded items indicated by the request.                                                                         |