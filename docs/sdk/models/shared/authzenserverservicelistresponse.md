# AuthzenServerServiceListResponse

AuthzenServerServiceListResponse lists AuthZEN servers for an app.

## Example Usage

```typescript
import { AuthzenServerServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AuthzenServerServiceListResponse = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `list`                                                                | [shared.AuthzenServer](../../../sdk/models/shared/authzenserver.md)[] | :heavy_minus_sign:                                                    | The list field.                                                       |
| `nextPageToken`                                                       | *string*                                                              | :heavy_minus_sign:                                                    | Token for next page.                                                  |