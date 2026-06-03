# AppEntitlementProxyView

The AppEntitlementProxyView message.

## Example Usage

```typescript
import { AppEntitlementProxyView } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppEntitlementProxyView = {};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `appEntitlementProxy`                                                                           | [shared.AppEntitlementProxy](../../../sdk/models/shared/appentitlementproxy.md)                 | :heavy_minus_sign:                                                                              | An entitlement proxy binding that defines a hierarchical relationship between two entitlements. |
| `dstAppEntitlementPath`                                                                         | *string*                                                                                        | :heavy_minus_sign:                                                                              | The dstAppEntitlementPath field.                                                                |
| `dstAppPath`                                                                                    | *string*                                                                                        | :heavy_minus_sign:                                                                              | The dstAppPath field.                                                                           |
| `srcAppEntitlementPath`                                                                         | *string*                                                                                        | :heavy_minus_sign:                                                                              | The srcAppEntitlementPath field.                                                                |
| `srcAppPath`                                                                                    | *string*                                                                                        | :heavy_minus_sign:                                                                              | The srcAppPath field.                                                                           |