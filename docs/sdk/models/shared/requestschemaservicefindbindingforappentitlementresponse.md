# RequestSchemaServiceFindBindingForAppEntitlementResponse

The response message containing the binding for the specified app entitlement.

## Example Usage

```typescript
import { RequestSchemaServiceFindBindingForAppEntitlementResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RequestSchemaServiceFindBindingForAppEntitlementResponse = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `entitlementRef`                                                               | [shared.AppEntitlementRef](../../../sdk/models/shared/appentitlementref.md)    | :heavy_minus_sign:                                                             | N/A                                                                            |
| `requestSchemaId`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | The unique identifier of the request schema bound to this entitlement, if any. |