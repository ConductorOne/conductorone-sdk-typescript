# PolicyOutcome

PolicyOutcome is the effect of a matched rule. Exactly one kind is set.

This message contains a oneof named kind. Only a single field of the following list may be set at a time:
  - allow
  - deny
  - stepUpRequired
  - challengeRequired
  - enrollmentRequired


## Example Usage

```typescript
import { PolicyOutcome } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PolicyOutcome = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `allow`                                                                       | [shared.Allow](../../../sdk/models/shared/allow.md)                           | :heavy_minus_sign:                                                            | N/A                                                                           |
| `challengeRequired`                                                           | [shared.ChallengeRequired](../../../sdk/models/shared/challengerequired.md)   | :heavy_minus_sign:                                                            | N/A                                                                           |
| `deny`                                                                        | [shared.Deny](../../../sdk/models/shared/deny.md)                             | :heavy_minus_sign:                                                            | N/A                                                                           |
| `enrollmentRequired`                                                          | [shared.EnrollmentRequired](../../../sdk/models/shared/enrollmentrequired.md) | :heavy_minus_sign:                                                            | N/A                                                                           |
| `stepUpRequired`                                                              | [shared.StepUpRequired](../../../sdk/models/shared/stepuprequired.md)         | :heavy_minus_sign:                                                            | N/A                                                                           |