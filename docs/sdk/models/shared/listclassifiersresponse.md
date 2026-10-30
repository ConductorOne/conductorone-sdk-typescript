# ListClassifiersResponse

The ListClassifiersResponse message.

## Example Usage

```typescript
import { ListClassifiersResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ListClassifiersResponse = {};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `classifiers`                                                   | [shared.Classifier](../../../sdk/models/shared/classifier.md)[] | :heavy_minus_sign:                                              | The classifiers field.                                          |
| `nextPageToken`                                                 | *string*                                                        | :heavy_minus_sign:                                              | The nextPageToken field.                                        |