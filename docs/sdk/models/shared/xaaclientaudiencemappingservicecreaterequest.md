# XAAClientAudienceMappingServiceCreateRequest

XAAClientAudienceMappingServiceCreateRequest creates a new mapping.

## Example Usage

```typescript
import { XAAClientAudienceMappingServiceCreateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: XAAClientAudienceMappingServiceCreateRequest = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `audienceClientId`                                                    | *string*                                                              | :heavy_minus_sign:                                                    | The client's identifier at the resource authorization server.         |
| `clientKey`                                                           | *string*                                                              | :heavy_minus_sign:                                                    | Stable client registration key.                                       |
| `disabled`                                                            | *boolean*                                                             | :heavy_minus_sign:                                                    | When true, the mapping is created but exchange requests are rejected. |