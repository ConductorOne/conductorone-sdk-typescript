# StepUpRequired

StepUpRequired demands a stronger re-authentication before access is granted.

## Example Usage

```typescript
import { StepUpRequired } from "conductorone-sdk-typescript/sdk/models/shared";

let value: StepUpRequired = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `level`                                                                           | [shared.StepUpRequiredLevel](../../../sdk/models/shared/stepuprequiredlevel.md)   | :heavy_minus_sign:                                                                | The assurance level the step-up must reach.                                       |
| `maxAgeSeconds`                                                                   | *number*                                                                          | :heavy_minus_sign:                                                                | How fresh the step-up must be, in seconds.                                        |
| `types`                                                                           | [shared.StepUpRequiredTypes](../../../sdk/models/shared/stepuprequiredtypes.md)[] | :heavy_minus_sign:                                                                | The credential types that may satisfy the step-up.                                |