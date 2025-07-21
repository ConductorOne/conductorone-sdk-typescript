# UnenrollFromAllAccessProfiles

The UnenrollFromAllAccessProfiles message.

## Example Usage

```typescript
import { UnenrollFromAllAccessProfiles } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UnenrollFromAllAccessProfiles = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `catalogIds`                                                                          | *string*[]                                                                            | :heavy_minus_sign:                                                                    | Optional list of catalog IDs to unenroll from. If empty, unenroll from all catalogs.  |
| `catalogIdsCel`                                                                       | *string*                                                                              | :heavy_minus_sign:                                                                    | CEL expression to dynamically select catalog IDs. If provided, overrides catalog_ids. |
| `useSubjectUser`                                                                      | *boolean*                                                                             | :heavy_minus_sign:                                                                    | If true, the step will use the subject user of the automation as the subject.         |
| `userIdsCel`                                                                          | *string*                                                                              | :heavy_minus_sign:                                                                    | The userIdsCel field.                                                                 |
| `userRefs`                                                                            | [shared.UserRef](../../../sdk/models/shared/userref.md)[]                             | :heavy_minus_sign:                                                                    | The userRefs field.                                                                   |