# CreateFeedbackResponse

The CreateFeedbackResponse message.

## Example Usage

```typescript
import { CreateFeedbackResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CreateFeedbackResponse = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The stored feedback ID.                                                                                    |
| `ticketUrl`                                                                                                | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | URL of the task created for this feedback. Empty while task delivery is<br/> unavailable or has not succeeded. |