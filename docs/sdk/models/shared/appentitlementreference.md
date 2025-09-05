# AppEntitlementReference

This object references an app entitlement's ID and AppID.

## Example Usage

```typescript
import { AppEntitlementReference } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppEntitlementReference = {};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `appEntitlementId`                             | *string*                                       | :heavy_minus_sign:                             | The ID of the Entitlement.                     |
| `appId`                                        | *string*                                       | :heavy_minus_sign:                             | The ID of the App this entitlement belongs to. |