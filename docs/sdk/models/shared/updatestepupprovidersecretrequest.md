# UpdateStepUpProviderSecretRequest

The UpdateStepUpProviderSecretRequest message.

## Example Usage

```typescript
import { UpdateStepUpProviderSecretRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdateStepUpProviderSecretRequest = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `clientSecret`                                                         | *string*                                                               | :heavy_minus_sign:                                                     | The new OAuth2 client secret. Write-only; never returned in responses. |