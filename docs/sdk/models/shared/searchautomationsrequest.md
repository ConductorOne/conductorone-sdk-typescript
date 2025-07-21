# SearchAutomationsRequest

The SearchAutomationsRequest message.

## Example Usage

```typescript
import { SearchAutomationsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchAutomationsRequest = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `appId`                                                                               | *string*                                                                              | :heavy_minus_sign:                                                                    | The appId field.                                                                      |
| `pageSize`                                                                            | *number*                                                                              | :heavy_minus_sign:                                                                    | The pageSize field.                                                                   |
| `pageToken`                                                                           | *string*                                                                              | :heavy_minus_sign:                                                                    | The pageToken field.                                                                  |
| `query`                                                                               | *string*                                                                              | :heavy_minus_sign:                                                                    | The query field.                                                                      |
| `refs`                                                                                | [shared.AutomationTemplateRef](../../../sdk/models/shared/automationtemplateref.md)[] | :heavy_minus_sign:                                                                    | The refs field.                                                                       |
| `triggerTypes`                                                                        | [shared.TriggerTypes](../../../sdk/models/shared/triggertypes.md)[]                   | :heavy_minus_sign:                                                                    | The triggerTypes field.                                                               |