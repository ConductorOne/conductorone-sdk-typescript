# StepUpProvider

StepUpProvider represents a configured step-up authentication integration (e.g., Duo, custom OIDC).

This message contains a oneof named settings. Only a single field of the following list may be set at a time:
  - oauth2
  - microsoft


## Example Usage

```typescript
import { StepUpProvider } from "conductorone-sdk-typescript/sdk/models/shared";

let value: StepUpProvider = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `clientId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The OAuth2 client ID used to authenticate with the step-up provider.                          |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The human-readable name of the step-up provider.                                              |
| `enabled`                                                                                     | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Whether the step-up provider is active and available for use.                                 |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The unique identifier of the step-up provider.                                                |
| `issuerUrl`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The OIDC issuer URL for the step-up provider.                                                 |
| `lastTestedAt`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `microsoft`                                                                                   | [shared.StepUpMicrosoftSettings](../../../sdk/models/shared/stepupmicrosoftsettings.md)       | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `oauth2`                                                                                      | [shared.StepUpOAuth2Settings](../../../sdk/models/shared/stepupoauth2settings.md)             | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |