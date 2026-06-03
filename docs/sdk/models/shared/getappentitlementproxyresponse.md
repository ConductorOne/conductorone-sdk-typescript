# GetAppEntitlementProxyResponse

The response message for getting a specific entitlement proxy binding.

## Example Usage

```typescript
import { GetAppEntitlementProxyResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GetAppEntitlementProxyResponse = {};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `appEntitlementProxyView`                                                                                               | [shared.AppEntitlementProxyView](../../../sdk/models/shared/appentitlementproxyview.md)                                 | :heavy_minus_sign:                                                                                                      | The AppEntitlementProxyView message.                                                                                    |
| `expanded`                                                                                                              | [shared.GetAppEntitlementProxyResponseExpanded](../../../sdk/models/shared/getappentitlementproxyresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                      | List of serialized related objects.                                                                                     |