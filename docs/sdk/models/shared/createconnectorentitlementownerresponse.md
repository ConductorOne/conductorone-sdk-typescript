# CreateConnectorEntitlementOwnerResponse

CreateConnectorEntitlementOwnerResponse is the response for creating an entitlement ownership source on a connector.

## Example Usage

```typescript
import { CreateConnectorEntitlementOwnerResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CreateConnectorEntitlementOwnerResponse = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `connectorOwnerEntitlement`                                                                 | [shared.ConnectorOwnerEntitlement](../../../sdk/models/shared/connectorownerentitlement.md) | :heavy_minus_sign:                                                                          | ConnectorOwnerEntitlement represents an entitlement ownership source for a connector.       |