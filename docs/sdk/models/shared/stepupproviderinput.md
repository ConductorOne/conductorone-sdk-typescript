# StepUpProviderInput

The StepUpProvider message.

This message contains a oneof named settings. Only a single field of the following list may be set at a time:
  - oauth2
  - microsoft


## Example Usage

```typescript
import { StepUpProviderInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: StepUpProviderInput = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `clientId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The clientId field.                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The displayName field.                                                                        |
| `enabled`                                                                                     | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | The enabled field.                                                                            |
| `issuerUrl`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The issuerUrl field.                                                                          |
| `lastTestedAt`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `microsoft`                                                                                   | [shared.StepUpMicrosoftSettings](../../../sdk/models/shared/stepupmicrosoftsettings.md)       | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `oauth2`                                                                                      | [shared.StepUpOAuth2Settings](../../../sdk/models/shared/stepupoauth2settings.md)             | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |