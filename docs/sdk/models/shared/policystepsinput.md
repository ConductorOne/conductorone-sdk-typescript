# PolicyStepsInput

A named sequence of steps that execute in order within a policy.

## Example Usage

```typescript
import { PolicyStepsInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PolicyStepsInput = {};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `steps`                                                                                                              | [shared.PolicyStepInput](../../../sdk/models/shared/policystepinput.md)[]                                            | :heavy_minus_sign:                                                                                                   | Ordered array of steps. Each step is a oneof -- exactly one step type is<br/> set per entry. Steps execute sequentially. |