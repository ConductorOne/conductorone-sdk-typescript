# SimilarUsernameMatchEvidence

The SimilarUsernameMatchEvidence message.

## Example Usage

```typescript
import { SimilarUsernameMatchEvidence } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SimilarUsernameMatchEvidence = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `appUsername`                                                     | *string*                                                          | :heavy_minus_sign:                                                | The username on the app user account at detection time.           |
| `identityUsername`                                                | *string*                                                          | :heavy_minus_sign:                                                | The username on the identity user that matched at detection time. |
| `similarityScore`                                                 | *number*                                                          | :heavy_minus_sign:                                                | Similarity score [0.0, 1.0] at detection time.                    |