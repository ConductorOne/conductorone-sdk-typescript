# UpdatePolicyResponse

The UpdatePolicyResponse message contains the updated policy object.

## Example Usage

```typescript
import { UpdatePolicyResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdatePolicyResponse = {};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `policy`                                                                                                                                                              | [shared.Policy](../../../sdk/models/shared/policy.md)                                                                                                                 | :heavy_minus_sign:                                                                                                                                                    | A policy describes the behavior of the ConductorOne system when processing a task. You can describe the type, approvers, fallback behavior, and escalation processes. |