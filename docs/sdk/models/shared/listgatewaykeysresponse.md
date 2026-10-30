# ListGatewayKeysResponse

The ListGatewayKeysResponse message.

## Example Usage

```typescript
import { ListGatewayKeysResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ListGatewayKeysResponse = {};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `list`                                                          | [shared.GatewayKey](../../../sdk/models/shared/gatewaykey.md)[] | :heavy_minus_sign:                                              | The list field.                                                 |
| `nextPageToken`                                                 | *string*                                                        | :heavy_minus_sign:                                              | The nextPageToken field.                                        |