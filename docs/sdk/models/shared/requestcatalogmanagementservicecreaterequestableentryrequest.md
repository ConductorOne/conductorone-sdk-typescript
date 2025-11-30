# RequestCatalogManagementServiceCreateRequestableEntryRequest

Create a single requestable entry

## Example Usage

```typescript
import { RequestCatalogManagementServiceCreateRequestableEntryRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RequestCatalogManagementServiceCreateRequestableEntryRequest = {};
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `createRequests`                                                                                                                                | *boolean*                                                                                                                                       | :heavy_minus_sign:                                                                                                                              | Whether or not to create requests for newly added entitlement for users in the catalog.<br/> By default, this is false and no requests are created. |