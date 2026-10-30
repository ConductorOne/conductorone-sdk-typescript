# MCPAccessProfileServiceSearchRequestableConnectorsResponse

MCPAccessProfileServiceSearchRequestableConnectorsResponse returns one page
 of card-ready requestable-connector entries.

## Example Usage

```typescript
import { MCPAccessProfileServiceSearchRequestableConnectorsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPAccessProfileServiceSearchRequestableConnectorsResponse = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `list`                                                                                      | [shared.RequestableConnectorView](../../../sdk/models/shared/requestableconnectorview.md)[] | :heavy_minus_sign:                                                                          | The page of connector cards.                                                                |
| `nextPageToken`                                                                             | *string*                                                                                    | :heavy_minus_sign:                                                                          | Token for next page.                                                                        |