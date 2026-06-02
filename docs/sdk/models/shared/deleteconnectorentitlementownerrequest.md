# DeleteConnectorEntitlementOwnerRequest

DeleteConnectorEntitlementOwnerRequest is the request for deleting an entitlement ownership source on a connector.

## Example Usage

```typescript
import { DeleteConnectorEntitlementOwnerRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DeleteConnectorEntitlementOwnerRequest = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `appEntitlementRef`                                                         | [shared.AppEntitlementRef](../../../sdk/models/shared/appentitlementref.md) | :heavy_minus_sign:                                                          | The AppEntitlementRef message.                                              |