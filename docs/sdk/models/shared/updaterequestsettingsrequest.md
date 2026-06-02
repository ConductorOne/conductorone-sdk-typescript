# UpdateRequestSettingsRequest

The UpdateRequestSettingsRequest message.

## Example Usage

```typescript
import { UpdateRequestSettingsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdateRequestSettingsRequest = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `requestSettings`                                                            | [shared.RequestSettings](../../../sdk/models/shared/requestsettings.md)      | :heavy_minus_sign:                                                           | RequestSettings holds tenant-wide configuration for the access-request flow. |
| `updateMask`                                                                 | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |