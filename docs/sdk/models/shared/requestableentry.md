# RequestableEntry

A requestable entry in a catalog

## Example Usage

```typescript
import { RequestableEntry } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RequestableEntry = {};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `appId`                                         | *string*                                        | :heavy_minus_sign:                              | The ID of the app that contains the entitlement |
| `catalogId`                                     | *string*                                        | :heavy_minus_sign:                              | The ID of the access profile (catalog)          |
| `entitlementId`                                 | *string*                                        | :heavy_minus_sign:                              | The ID of the entitlement                       |