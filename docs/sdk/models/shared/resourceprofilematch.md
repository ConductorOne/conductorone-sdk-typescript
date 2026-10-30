# ResourceProfileMatch

Matches a top-level resource profile key. Scalar text matches an equal scalar or list member;
 JSON numbers and booleans match their typed equivalents; JSON arrays require the stored list
 to contain every element.

## Example Usage

```typescript
import { ResourceProfileMatch } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ResourceProfileMatch = {};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `key`              | *string*           | :heavy_minus_sign: | The key field.     |
| `value`            | *string*           | :heavy_minus_sign: | The value field.   |