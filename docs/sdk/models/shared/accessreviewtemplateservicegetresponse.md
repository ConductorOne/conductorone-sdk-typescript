# AccessReviewTemplateServiceGetResponse

The AccessReviewTemplateServiceGetResponse message.

## Example Usage

```typescript
import { AccessReviewTemplateServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewTemplateServiceGetResponse = {};
```

## Fields

| Field                                                                                                                                                                           | Type                                                                                                                                                                            | Required                                                                                                                                                                        | Description                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accessReviewTemplate`                                                                                                                                                          | [shared.AccessReviewTemplate](../../../sdk/models/shared/accessreviewtemplate.md)                                                                                               | :heavy_minus_sign:                                                                                                                                                              | The AccessReviewTemplate message.<br/><br/>This message contains a oneof named slack_channel_details. Only a single field of the following list may be set at a time:<br/>  - slackChannel<br/> |