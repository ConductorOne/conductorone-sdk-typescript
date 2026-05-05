# A2UISurfaceFeedback

A2UISurfaceFeedback represents user feedback for a surface.

## Example Usage

```typescript
import { A2UISurfaceFeedback } from "conductorone-sdk-typescript/sdk/models/shared";

let value: A2UISurfaceFeedback = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `actionName`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | The actionName field.                                                                         |
| `componentsSnapshot`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The componentsSnapshot field.                                                                 |
| `conversationId`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | The conversationId field.                                                                     |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `dataModelSnapshot`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | The dataModelSnapshot field.                                                                  |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The id field.                                                                                 |
| `schemaVersion`                                                                               | *number*                                                                                      | :heavy_minus_sign:                                                                            | The schemaVersion field.                                                                      |
| `sentiment`                                                                                   | [shared.Sentiment](../../../sdk/models/shared/sentiment.md)                                   | :heavy_minus_sign:                                                                            | The sentiment field.                                                                          |
| `surfaceId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The surfaceId field.                                                                          |
| `text`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The text field.                                                                               |