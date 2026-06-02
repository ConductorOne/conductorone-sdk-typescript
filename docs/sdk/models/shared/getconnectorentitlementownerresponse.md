# GetConnectorEntitlementOwnerResponse

GetConnectorEntitlementOwnerResponse is the response for getting an entitlement ownership source on a connector.

## Example Usage

```typescript
import { GetConnectorEntitlementOwnerResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GetConnectorEntitlementOwnerResponse = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `connectorOwnerEntitlement`                                                                 | [shared.ConnectorOwnerEntitlement](../../../sdk/models/shared/connectorownerentitlement.md) | :heavy_minus_sign:                                                                          | ConnectorOwnerEntitlement represents an entitlement ownership source for a connector.       |