# TunnelCredentialsServiceCreateBridgeCredentialResponse

The TunnelCredentialsServiceCreateBridgeCredentialResponse message.

## Example Usage

```typescript
import { TunnelCredentialsServiceCreateBridgeCredentialResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TunnelCredentialsServiceCreateBridgeCredentialResponse = {};
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tunnelCredential`                                                                                                                                                | [shared.TunnelCredential](../../../sdk/models/shared/tunnelcredential.md)                                                                                         | :heavy_minus_sign:                                                                                                                                                | TunnelCredential is the API view of one OAuth credential within a bridge.<br/> The plaintext client_secret is only populated on the CreateBridgeCredential<br/> response. |