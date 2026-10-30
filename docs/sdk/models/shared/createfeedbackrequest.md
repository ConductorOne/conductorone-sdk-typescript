# CreateFeedbackRequest

The CreateFeedbackRequest message.

## Example Usage

```typescript
import { CreateFeedbackRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CreateFeedbackRequest = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `clientContext`                                                       | [shared.ClientContext](../../../sdk/models/shared/clientcontext.md)   | :heavy_minus_sign:                                                    | N/A                                                                   |
| `datadogContext`                                                      | [shared.DatadogContext](../../../sdk/models/shared/datadogcontext.md) | :heavy_minus_sign:                                                    | N/A                                                                   |
| `description`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | The description field.                                                |
| `screenshots`                                                         | [shared.Screenshot](../../../sdk/models/shared/screenshot.md)[]       | :heavy_minus_sign:                                                    | The screenshots field.                                                |