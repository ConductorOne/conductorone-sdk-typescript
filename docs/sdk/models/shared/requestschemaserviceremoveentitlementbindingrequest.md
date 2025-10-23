# RequestSchemaServiceRemoveEntitlementBindingRequest

The RequestSchemaServiceRemoveEntitlementBindingRequest message.

## Example Usage

```typescript
import { RequestSchemaServiceRemoveEntitlementBindingRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RequestSchemaServiceRemoveEntitlementBindingRequest = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `appEntitlementRef`                                                         | [shared.AppEntitlementRef](../../../sdk/models/shared/appentitlementref.md) | :heavy_minus_sign:                                                          | The AppEntitlementRef message.                                              |
| `requestSchemaId`                                                           | *string*                                                                    | :heavy_minus_sign:                                                          | The requestSchemaId field.                                                  |