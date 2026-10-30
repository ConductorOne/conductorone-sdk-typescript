# SessionPolicyPolicyOutcome

PolicyOutcome is the effect of a matched rule. Exactly one kind is set. For
 session continuous-evaluation, the meaningful kinds are Allow (continue),
 Deny (terminate), and StepUpRequired.

This message contains a oneof named kind. Only a single field of the following list may be set at a time:
  - allow
  - deny
  - stepUpRequired
  - challengeRequired
  - enrollmentRequired


## Example Usage

```typescript
import { SessionPolicyPolicyOutcome } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SessionPolicyPolicyOutcome = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `allow`                                                                                                 | [shared.SessionPolicyAllow](../../../sdk/models/shared/sessionpolicyallow.md)                           | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `challengeRequired`                                                                                     | [shared.SessionPolicyChallengeRequired](../../../sdk/models/shared/sessionpolicychallengerequired.md)   | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `deny`                                                                                                  | [shared.SessionPolicyDeny](../../../sdk/models/shared/sessionpolicydeny.md)                             | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `enrollmentRequired`                                                                                    | [shared.SessionPolicyEnrollmentRequired](../../../sdk/models/shared/sessionpolicyenrollmentrequired.md) | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `stepUpRequired`                                                                                        | [shared.SessionPolicyStepUpRequired](../../../sdk/models/shared/sessionpolicystepuprequired.md)         | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |