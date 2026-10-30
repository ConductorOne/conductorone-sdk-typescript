# UserAttributeManagementServiceListResponse

The UserAttributeManagementServiceListResponse message.

## Example Usage

```typescript
import { UserAttributeManagementServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UserAttributeManagementServiceListResponse = {};
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `expanded`                                                                                                                                      | [shared.UserAttributeManagementServiceListResponseExpanded](../../../sdk/models/shared/userattributemanagementservicelistresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                                              | The expanded field.                                                                                                                             |
| `list`                                                                                                                                          | [shared.UserAttributeMappingView](../../../sdk/models/shared/userattributemappingview.md)[]                                                     | :heavy_minus_sign:                                                                                                                              | The list field.                                                                                                                                 |
| `nextPageToken`                                                                                                                                 | *string*                                                                                                                                        | :heavy_minus_sign:                                                                                                                              | The nextPageToken field.                                                                                                                        |