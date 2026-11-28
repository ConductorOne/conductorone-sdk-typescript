# EdgeInferenceVertexChatConfig

EdgeInferenceVertexChatConfig selects the Google Cloud project and location for Vertex AI MaaS Chat.

## Example Usage

```typescript
import { EdgeInferenceVertexChatConfig } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeInferenceVertexChatConfig = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `location`                                                                      | *string*                                                                        | :heavy_minus_sign:                                                              | Serving location. Only global is currently supported.                           |
| `projectId`                                                                     | *string*                                                                        | :heavy_minus_sign:                                                              | ID of the serving project, which may differ from the service account's project. |