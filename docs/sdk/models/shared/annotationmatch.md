# AnnotationMatch

Matches entitlements whose annotations contain `key` with exactly `value`.

## Example Usage

```typescript
import { AnnotationMatch } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AnnotationMatch = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `key`                                                                                       | *string*                                                                                    | :heavy_minus_sign:                                                                          | The key field.                                                                              |
| `value`                                                                                     | *string*                                                                                    | :heavy_minus_sign:                                                                          | The full value pattern is enforced server-side by pkg/annotations where criteria are saved. |