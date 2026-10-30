# EdgeInferenceCredentialFailurePolicy

The EdgeInferenceCredentialFailurePolicy message.

## Example Usage

```typescript
import { EdgeInferenceCredentialFailurePolicy } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeInferenceCredentialFailurePolicy = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `notApplicable`                                                                   | [shared.NotApplicable](../../../sdk/models/shared/notapplicable.md)               | :heavy_minus_sign:                                                                | The notApplicable field.                                                          |
| `rejected401`                                                                     | [shared.Rejected401](../../../sdk/models/shared/rejected401.md)                   | :heavy_minus_sign:                                                                | The rejected401 field.                                                            |
| `unavailableOrExpired`                                                            | [shared.UnavailableOrExpired](../../../sdk/models/shared/unavailableorexpired.md) | :heavy_minus_sign:                                                                | The unavailableOrExpired field.                                                   |