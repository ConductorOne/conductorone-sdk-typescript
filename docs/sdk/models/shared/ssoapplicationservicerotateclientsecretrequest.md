# SSOApplicationServiceRotateClientSecretRequest

SSOApplicationServiceRotateClientSecretRequest rotates one confidential
 App-owned client's secret.

## Example Usage

```typescript
import { SSOApplicationServiceRotateClientSecretRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSOApplicationServiceRotateClientSecretRequest = {
  clientId: "<id>",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `clientId`                                        | *string*                                          | :heavy_check_mark:                                | Generated client ID whose secret will be rotated. |