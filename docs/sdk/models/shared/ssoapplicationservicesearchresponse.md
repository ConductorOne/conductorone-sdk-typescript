# SSOApplicationServiceSearchResponse

SSOApplicationServiceSearchResponse returns matching SSO applications.

## Example Usage

```typescript
import { SSOApplicationServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSOApplicationServiceSearchResponse = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `list`                                                                  | [shared.SSOApplication](../../../sdk/models/shared/ssoapplication.md)[] | :heavy_minus_sign:                                                      | Matching SSO applications.                                              |
| `nextPageToken`                                                         | *string*                                                                | :heavy_minus_sign:                                                      | Token for the next page.                                                |