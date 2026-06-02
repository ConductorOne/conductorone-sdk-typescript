# GetRequestSettingsResponse

The GetRequestSettingsResponse message.

## Example Usage

```typescript
import { GetRequestSettingsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GetRequestSettingsResponse = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `requestSettings`                                                            | [shared.RequestSettings](../../../sdk/models/shared/requestsettings.md)      | :heavy_minus_sign:                                                           | RequestSettings holds tenant-wide configuration for the access-request flow. |