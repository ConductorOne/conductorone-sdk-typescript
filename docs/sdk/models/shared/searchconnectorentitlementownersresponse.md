# SearchConnectorEntitlementOwnersResponse

SearchConnectorEntitlementOwnersResponse is the response for searching entitlement ownership sources on a connector.

## Example Usage

```typescript
import { SearchConnectorEntitlementOwnersResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchConnectorEntitlementOwnersResponse = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `list`                                                                                        | [shared.ConnectorOwnerEntitlement](../../../sdk/models/shared/connectorownerentitlement.md)[] | :heavy_minus_sign:                                                                            | The list field.                                                                               |
| `nextPageToken`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | The nextPageToken field.                                                                      |