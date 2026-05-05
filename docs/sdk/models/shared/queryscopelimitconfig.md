# QueryScopeLimitConfig

QueryScopeLimitConfig caps numeric fields (e.g. limit, page_size) in tool
 input so callers cannot request unbounded data.

## Example Usage

```typescript
import { QueryScopeLimitConfig } from "conductorone-sdk-typescript/sdk/models/shared";

let value: QueryScopeLimitConfig = {};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `fields`            | *string*[]          | :heavy_minus_sign:  | The fields field.   |
| `maxLimit`          | *number*            | :heavy_minus_sign:  | The maxLimit field. |