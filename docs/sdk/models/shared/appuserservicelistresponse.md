# AppUserServiceListResponse

The AppUserServiceListResponse message.

## Example Usage

```typescript
import { AppUserServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppUserServiceListResponse = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `expanded`                                                        | [shared.Expanded](../../../sdk/models/shared/expanded.md)[]       | :heavy_minus_sign:                                                | The expanded field.                                               |
| `list`                                                            | [shared.AppUserView](../../../sdk/models/shared/appuserview.md)[] | :heavy_minus_sign:                                                | The list field.                                                   |
| `nextPageToken`                                                   | *string*                                                          | :heavy_minus_sign:                                                | The nextPageToken field.                                          |