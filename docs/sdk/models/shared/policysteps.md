# PolicySteps

A named sequence of steps that execute in order within a policy.

## Example Usage

```typescript
import { PolicySteps } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PolicySteps = {};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `steps`                                                                                                              | [shared.PolicyStep](../../../sdk/models/shared/policystep.md)[]                                                      | :heavy_minus_sign:                                                                                                   | Ordered array of steps. Each step is a oneof -- exactly one step type is<br/> set per entry. Steps execute sequentially. |