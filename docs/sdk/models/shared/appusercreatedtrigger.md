# AppUserCreatedTrigger

The AppUserCreatedTrigger message.

This message contains a oneof named app_identifier. Only a single field of the following list may be set at a time:
  - appId
  - appIdCel


## Example Usage

```typescript
import { AppUserCreatedTrigger } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppUserCreatedTrigger = {};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `appId`                                                                                                                                                         | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | The appId field.<br/>This field is part of the `app_identifier` oneof.<br/>See the documentation for `c1.api.automations.v1.AppUserCreatedTrigger` for more details. |
| `appIdCel`                                                                                                                                                      | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | The appIdCel field.<br/>This field is part of the `app_identifier` oneof.<br/>See the documentation for `c1.api.automations.v1.AppUserCreatedTrigger` for more details. |
| `condition`                                                                                                                                                     | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | The condition field.                                                                                                                                            |