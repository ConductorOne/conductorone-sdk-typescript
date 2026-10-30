# SSOApplicationServiceCreateClientRequest

SSOApplicationServiceCreateClientRequest mints an additional App-owned
 client. The caller supplies configuration, never a client ID.

## Example Usage

```typescript
import { SSOApplicationServiceCreateClientRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSOApplicationServiceCreateClientRequest = {
  client: null,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `client`                                                                                              | [shared.SSOApplicationOIDCClientConfig](../../../sdk/models/shared/ssoapplicationoidcclientconfig.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |