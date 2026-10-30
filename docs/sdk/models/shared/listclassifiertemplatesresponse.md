# ListClassifierTemplatesResponse

The ListClassifierTemplatesResponse message.

## Example Usage

```typescript
import { ListClassifierTemplatesResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ListClassifierTemplatesResponse = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `nextPageToken`                                                                 | *string*                                                                        | :heavy_minus_sign:                                                              | The nextPageToken field.                                                        |
| `templates`                                                                     | [shared.ClassifierTemplate](../../../sdk/models/shared/classifiertemplate.md)[] | :heavy_minus_sign:                                                              | The templates field.                                                            |