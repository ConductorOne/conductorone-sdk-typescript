# GetPolicyResponse

The GetPolicyResponse message contains the policy object.

## Example Usage

```typescript
import { GetPolicyResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GetPolicyResponse = {};
```

## Fields

| Field                                                                                                                                                                                                                                             | Type                                                                                                                                                                                                                                              | Required                                                                                                                                                                                                                                          | Description                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `policy`                                                                                                                                                                                                                                          | [shared.Policy](../../../sdk/models/shared/policy.md)                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                | A policy defines a workflow (sequence of steps) that runs when processing<br/> access requests, reviews, or revocations. Policies support conditional<br/> routing: different conditions can trigger different step sequences, with a<br/> baseline fallback. |