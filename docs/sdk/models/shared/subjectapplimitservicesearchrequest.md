# SubjectAppLimitServiceSearchRequest

The SubjectAppLimitServiceSearchRequest message.

## Example Usage

```typescript
import { SubjectAppLimitServiceSearchRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SubjectAppLimitServiceSearchRequest = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `appIds`                                                                                      | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Restrict to these apps; empty returns every app.                                              |
| `pageSize`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | The pageSize field.                                                                           |
| `pageToken`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The pageToken field.                                                                          |
| `states`                                                                                      | [shared.SubjectAppLimitStateFilter](../../../sdk/models/shared/subjectapplimitstatefilter.md) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `userIds`                                                                                     | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Restrict to these subjects; empty returns every row in the tenant.                            |