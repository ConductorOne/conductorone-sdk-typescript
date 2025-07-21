# CreateAutomationRequest

The CreateAutomationRequest message.

## Example Usage

```typescript
import { CreateAutomationRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CreateAutomationRequest = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `appId`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | the app id this workflow_template belongs to                                  |
| `automationSteps`                                                             | [shared.AutomationStep](../../../sdk/models/shared/automationstep.md)[]       | :heavy_minus_sign:                                                            | The automationSteps field.                                                    |
| `automationContext`                                                           | [shared.AutomationContext](../../../sdk/models/shared/automationcontext.md)   | :heavy_minus_sign:                                                            | The AutomationContext message.                                                |
| `description`                                                                 | *string*                                                                      | :heavy_minus_sign:                                                            | The description field.                                                        |
| `displayName`                                                                 | *string*                                                                      | :heavy_minus_sign:                                                            | The displayName field.                                                        |
| `draftAutomationSteps`                                                        | [shared.AutomationStep](../../../sdk/models/shared/automationstep.md)[]       | :heavy_minus_sign:                                                            | The draftAutomationSteps field.                                               |
| `draftTriggers`                                                               | [shared.AutomationTrigger](../../../sdk/models/shared/automationtrigger.md)[] | :heavy_minus_sign:                                                            | The draftTriggers field.                                                      |
| `enabled`                                                                     | *boolean*                                                                     | :heavy_minus_sign:                                                            | The enabled field.                                                            |
| `isDraft`                                                                     | *boolean*                                                                     | :heavy_minus_sign:                                                            | The isDraft field.                                                            |
| `triggers`                                                                    | [shared.AutomationTrigger](../../../sdk/models/shared/automationtrigger.md)[] | :heavy_minus_sign:                                                            | The triggers field.                                                           |