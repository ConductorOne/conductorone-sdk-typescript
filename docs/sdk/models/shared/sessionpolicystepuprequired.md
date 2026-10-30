# SessionPolicyStepUpRequired

StepUpRequired demands a stronger re-authentication before the session may
 continue.

## Example Usage

```typescript
import { SessionPolicyStepUpRequired } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SessionPolicyStepUpRequired = {};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `level`                                                                                                     | [shared.Level](../../../sdk/models/shared/level.md)                                                         | :heavy_minus_sign:                                                                                          | The level field.                                                                                            |
| `maxAgeSeconds`                                                                                             | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | How fresh the step-up must be, in seconds.                                                                  |
| `types`                                                                                                     | [shared.SessionPolicyStepUpRequiredTypes](../../../sdk/models/shared/sessionpolicystepuprequiredtypes.md)[] | :heavy_minus_sign:                                                                                          | The types field.                                                                                            |