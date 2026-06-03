# RequestSchemaServiceCreateEntitlementBindingRequest

The request message for creating a single entitlement binding on a request schema.

## Example Usage

```typescript
import { RequestSchemaServiceCreateEntitlementBindingRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RequestSchemaServiceCreateEntitlementBindingRequest = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `appEntitlementRef`                                                         | [shared.AppEntitlementRef](../../../sdk/models/shared/appentitlementref.md) | :heavy_minus_sign:                                                          | The AppEntitlementRef message.                                              |
| `requestSchemaId`                                                           | *string*                                                                    | :heavy_minus_sign:                                                          | The unique identifier of the request schema to bind the entitlement to.     |