# SSOApplicationServiceBatchDeleteSubjectCompatibilityResponse

SSOApplicationServiceBatchDeleteSubjectCompatibilityResponse reports bounded
 recovery progress.

## Example Usage

```typescript
import { SSOApplicationServiceBatchDeleteSubjectCompatibilityResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSOApplicationServiceBatchDeleteSubjectCompatibilityResponse = {};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `deletedRows`                                                                                                   | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | The deletedRows field.                                                                                          |
| `issues`                                                                                                        | [shared.SSOSubjectCompatibilityDeleteIssue](../../../sdk/models/shared/ssosubjectcompatibilitydeleteissue.md)[] | :heavy_minus_sign:                                                                                              | The issues field.                                                                                               |