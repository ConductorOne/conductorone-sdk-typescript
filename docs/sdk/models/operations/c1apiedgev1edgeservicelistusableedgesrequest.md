# C1ApiEdgeV1EdgeServiceListUsableEdgesRequest

## Example Usage

```typescript
import { C1ApiEdgeV1EdgeServiceListUsableEdgesRequest } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiEdgeV1EdgeServiceListUsableEdgesRequest = {};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                                                | [operations.Kind](../../../sdk/models/operations/kind.md)                                                                             | :heavy_minus_sign:                                                                                                                    | Restrict resources and scopes to this capability. UNSPECIFIED returns all<br/> authorized capabilities; unknown enum values are rejected. |
| `pageSize`                                                                                                                            | *number*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   |
| `pageToken`                                                                                                                           | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   |