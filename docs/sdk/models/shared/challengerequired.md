# ChallengeRequired

ChallengeRequired asks for an additional factor before the sign-in completes.

## Example Usage

```typescript
import { ChallengeRequired } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ChallengeRequired = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `types`                                                                                 | [shared.ChallengeRequiredTypes](../../../sdk/models/shared/challengerequiredtypes.md)[] | :heavy_minus_sign:                                                                      | The credential types that may satisfy the challenge.                                    |