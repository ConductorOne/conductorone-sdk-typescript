# ListClassifierBindingsResponse

The ListClassifierBindingsResponse message.

## Example Usage

```typescript
import { ListClassifierBindingsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ListClassifierBindingsResponse = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `bindings`                                                                    | [shared.ClassifierBinding](../../../sdk/models/shared/classifierbinding.md)[] | :heavy_minus_sign:                                                            | The bindings field.                                                           |
| `nextPageToken`                                                               | *string*                                                                      | :heavy_minus_sign:                                                            | The nextPageToken field.                                                      |