# A2UIServiceCreateSurfaceFeedbackRequest

A2UIServiceCreateSurfaceFeedbackRequest creates feedback for a surface.

## Example Usage

```typescript
import { A2UIServiceCreateSurfaceFeedbackRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: A2UIServiceCreateSurfaceFeedbackRequest = {};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `conversationId`                                                                                                                          | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | The conversationId field.                                                                                                                 |
| `sentiment`                                                                                                                               | [shared.A2UIServiceCreateSurfaceFeedbackRequestSentiment](../../../sdk/models/shared/a2uiservicecreatesurfacefeedbackrequestsentiment.md) | :heavy_minus_sign:                                                                                                                        | The sentiment field.                                                                                                                      |
| `text`                                                                                                                                    | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | The text field.                                                                                                                           |