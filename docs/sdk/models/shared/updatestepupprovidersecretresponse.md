# UpdateStepUpProviderSecretResponse

The UpdateStepUpProviderSecretResponse message.

## Example Usage

```typescript
import { UpdateStepUpProviderSecretResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdateStepUpProviderSecretResponse = {};
```

## Fields

| Field                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `stepUpProvider`                                                                                                                                                                                                                             | [shared.StepUpProvider](../../../sdk/models/shared/stepupprovider.md)                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                           | StepUpProvider represents a configured step-up authentication integration (e.g., Duo, custom OIDC).<br/><br/>This message contains a oneof named settings. Only a single field of the following list may be set at a time:<br/>  - oauth2<br/>  - microsoft<br/> |