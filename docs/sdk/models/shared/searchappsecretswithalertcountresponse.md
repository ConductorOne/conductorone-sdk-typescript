# SearchAppSecretsWithAlertCountResponse

The SearchAppSecretsWithAlertCountResponse message.

## Example Usage

```typescript
import { SearchAppSecretsWithAlertCountResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchAppSecretsWithAlertCountResponse = {};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `expanded`                                                                                                                              | [shared.SearchAppSecretsWithAlertCountResponseExpanded](../../../sdk/models/shared/searchappsecretswithalertcountresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                                      | The expanded field.                                                                                                                     |
| `list`                                                                                                                                  | [shared.AppSecretResourceView](../../../sdk/models/shared/appsecretresourceview.md)[]                                                   | :heavy_minus_sign:                                                                                                                      | The list field.                                                                                                                         |
| `nextPageToken`                                                                                                                         | *string*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | The nextPageToken field.                                                                                                                |