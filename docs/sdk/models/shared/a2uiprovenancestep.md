# A2UIProvenanceStep

A2UIProvenanceStep is one thing the report's program did. Steps are returned
 in the order the program performs them.

## Example Usage

```typescript
import { A2UIProvenanceStep } from "conductorone-sdk-typescript/sdk/models/shared";

let value: A2UIProvenanceStep = {};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `objects`                                                                                                                         | [shared.A2UIProvenanceObject](../../../sdk/models/shared/a2uiprovenanceobject.md)[]                                               | :heavy_minus_sign:                                                                                                                | The specific records this step named. Empty when the step names none, and<br/> withheld wholesale when step_objects_visible is false. |
| `operation`                                                                                                                       | [shared.Operation](../../../sdk/models/shared/operation.md)                                                                       | :heavy_minus_sign:                                                                                                                | The operation field.                                                                                                              |
| `recordType`                                                                                                                      | [shared.A2UIProvenanceStepRecordType](../../../sdk/models/shared/a2uiprovenancesteprecordtype.md)                                 | :heavy_minus_sign:                                                                                                                | The recordType field.                                                                                                             |