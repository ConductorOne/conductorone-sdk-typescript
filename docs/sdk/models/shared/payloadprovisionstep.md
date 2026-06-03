# PayloadProvisionStep

The PayloadProvisionStep message.

## Example Usage

```typescript
import { PayloadProvisionStep } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PayloadProvisionStep = {};
```

## Fields

| Field                                                                                                                                                                                            | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `expanded`                                                                                                                                                                                       | [shared.PayloadProvisionStepExpanded](../../../sdk/models/shared/payloadprovisionstepexpanded.md)[]                                                                                              | :heavy_minus_sign:                                                                                                                                                                               | List of serialized related objects.                                                                                                                                                              |
| `taskView`                                                                                                                                                                                       | [shared.TaskView](../../../sdk/models/shared/taskview.md)                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                               | Contains a task and JSONPATH expressions that describe where in the expanded array related objects are located. This view can be used to display a fully-detailed dashboard of task information. |