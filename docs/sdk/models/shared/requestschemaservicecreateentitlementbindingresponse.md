# RequestSchemaServiceCreateEntitlementBindingResponse

The response message for creating a single entitlement binding.

## Example Usage

```typescript
import { RequestSchemaServiceCreateEntitlementBindingResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RequestSchemaServiceCreateEntitlementBindingResponse = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `entitlementRef`                                                            | [shared.AppEntitlementRef](../../../sdk/models/shared/appentitlementref.md) | :heavy_minus_sign:                                                          | N/A                                                                         |
| `requestSchemaId`                                                           | *string*                                                                    | :heavy_minus_sign:                                                          | The unique identifier of the request schema the entitlement was bound to.   |