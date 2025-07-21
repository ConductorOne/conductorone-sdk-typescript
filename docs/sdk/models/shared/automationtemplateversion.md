# AutomationTemplateVersion

The AutomationTemplateVersion message.

## Example Usage

```typescript
import { AutomationTemplateVersion } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AutomationTemplateVersion = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `automationSteps`                                                                             | [shared.AutomationStep](../../../sdk/models/shared/automationstep.md)[]                       | :heavy_minus_sign:                                                                            | The automationSteps field.                                                                    |
| `automationTemplateId`                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The automationTemplateId field.                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `triggers`                                                                                    | [shared.AutomationTrigger](../../../sdk/models/shared/automationtrigger.md)[]                 | :heavy_minus_sign:                                                                            | The triggers field.                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `version`                                                                                     | *number*                                                                                      | :heavy_minus_sign:                                                                            | The version field.                                                                            |