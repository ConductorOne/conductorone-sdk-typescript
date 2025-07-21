# SearchAutomationTemplateVersionsResponse

The SearchAutomationTemplateVersionsResponse message.

## Example Usage

```typescript
import { SearchAutomationTemplateVersionsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchAutomationTemplateVersionsResponse = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `list`                                                                                        | [shared.AutomationTemplateVersion](../../../sdk/models/shared/automationtemplateversion.md)[] | :heavy_minus_sign:                                                                            | The list field.                                                                               |
| `nextPageToken`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | The nextPageToken field.                                                                      |