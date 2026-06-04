# TunnelCredentialsServiceUpdateBridgeRequest

The TunnelCredentialsServiceUpdateBridgeRequest message.

## Example Usage

```typescript
import { TunnelCredentialsServiceUpdateBridgeRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TunnelCredentialsServiceUpdateBridgeRequest = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `description`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | New description. Applied only when "description" is in update_mask.<br/> Empty clears the description. |
| `displayName`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | New display name. Applied only when "display_name" is in update_mask.<br/> Must be non-empty when applied. |
| `updateMask`                                                                                           | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |