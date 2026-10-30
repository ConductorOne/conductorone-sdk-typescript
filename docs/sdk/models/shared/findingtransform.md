# FindingTransform

FindingTransform is a single mutation applied to a finding by a matched
 transformation rule. Structured ops are the authoring surface; a future
 raw-CEL arm continues numbering at 104.

This message contains a oneof named kind. Only a single field of the following list may be set at a time:
  - setSeverity
  - setTags
  - removeTags
  - setAssignee


## Example Usage

```typescript
import { FindingTransform } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FindingTransform = {};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `removeTags`                                                    | [shared.RemoveTags](../../../sdk/models/shared/removetags.md)   | :heavy_minus_sign:                                              | N/A                                                             |
| `setAssignee`                                                   | [shared.SetAssignee](../../../sdk/models/shared/setassignee.md) | :heavy_minus_sign:                                              | N/A                                                             |
| `setSeverity`                                                   | [shared.SetSeverity](../../../sdk/models/shared/setseverity.md) | :heavy_minus_sign:                                              | N/A                                                             |
| `setTags`                                                       | [shared.SetTags](../../../sdk/models/shared/settags.md)         | :heavy_minus_sign:                                              | N/A                                                             |