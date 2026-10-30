# EdgeServiceListUsableEdgesResponse

EdgeServiceListUsableEdgesResponse contains currently authorized connection targets.

## Example Usage

```typescript
import { EdgeServiceListUsableEdgesResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeServiceListUsableEdgesResponse = {};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `edges`                                                                                                                                        | [shared.UsableEdge](../../../sdk/models/shared/usableedge.md)[]                                                                                | :heavy_minus_sign:                                                                                                                             | Usable Edges ordered by application identifier, then Edge identifier.                                                                          |
| `nextPageToken`                                                                                                                                | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | Continue until this token is empty, including after an empty page.<br/> Grants and configuration are evaluated live on each page, not snapshotted. |