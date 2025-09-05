# CreateStepUpProviderRequest

The CreateStepUpProviderRequest message.

This message contains a oneof named settings. Only a single field of the following list may be set at a time:
  - oauth2
  - microsoft


## Example Usage

```typescript
import { CreateStepUpProviderRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CreateStepUpProviderRequest = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `clientId`                                                                              | *string*                                                                                | :heavy_minus_sign:                                                                      | The clientId field.                                                                     |
| `clientSecret`                                                                          | *string*                                                                                | :heavy_minus_sign:                                                                      | The clientSecret field.                                                                 |
| `displayName`                                                                           | *string*                                                                                | :heavy_minus_sign:                                                                      | The displayName field.                                                                  |
| `issuerUrl`                                                                             | *string*                                                                                | :heavy_minus_sign:                                                                      | The issuerUrl field.                                                                    |
| `microsoft`                                                                             | [shared.StepUpMicrosoftSettings](../../../sdk/models/shared/stepupmicrosoftsettings.md) | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `oauth2`                                                                                | [shared.StepUpOAuth2Settings](../../../sdk/models/shared/stepupoauth2settings.md)       | :heavy_minus_sign:                                                                      | N/A                                                                                     |