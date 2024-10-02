# PolicyStepsInput

The PolicySteps message.

## Example Usage

```typescript
import { PolicyStepsInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PolicyStepsInput = {};
```

## Fields

| Field                                                                                                                                                         | Type                                                                                                                                                          | Required                                                                                                                                                      | Description                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `steps`                                                                                                                                                       | [shared.PolicyStep](../../../sdk/models/shared/policystep.md)[]                                                                                               | :heavy_minus_sign:                                                                                                                                            | An array of policy steps indicating the processing flow of a policy. These steps are oneOfs, and only one property may be set for each array index at a time. |