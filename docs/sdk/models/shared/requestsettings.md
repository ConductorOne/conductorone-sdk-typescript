# RequestSettings

RequestSettings holds tenant-wide configuration for the access-request flow.

## Example Usage

```typescript
import { RequestSettings } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RequestSettings = {};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `skipJustification`                                                                                      | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | When true, request surfaces (webapp, Slack, MS Teams) skip prompting the<br/> requester for a justification. |