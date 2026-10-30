# SSOSettingsServiceUpdateRequest

SSOSettingsServiceUpdateRequest updates the tenant's SSO provider settings.

## Example Usage

```typescript
import { SSOSettingsServiceUpdateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSOSettingsServiceUpdateRequest = {
  settings: {},
  updateMask: "<value>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `settings`                                                      | [shared.SSOSettings](../../../sdk/models/shared/ssosettings.md) | :heavy_check_mark:                                              | N/A                                                             |
| `updateMask`                                                    | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |