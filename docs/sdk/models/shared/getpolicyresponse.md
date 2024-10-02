# GetPolicyResponse

The GetPolicyResponse message contains the policy object.

## Example Usage

```typescript
import { GetPolicyResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GetPolicyResponse = {};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `policy`                                                                                                                                                              | [shared.Policy](../../../sdk/models/shared/policy.md)                                                                                                                 | :heavy_minus_sign:                                                                                                                                                    | A policy describes the behavior of the ConductorOne system when processing a task. You can describe the type, approvers, fallback behavior, and escalation processes. |