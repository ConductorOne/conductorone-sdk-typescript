# CreateAutomationRequestInput

The CreateAutomationRequest message.

## Example Usage

```typescript
import { CreateAutomationRequestInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CreateAutomationRequestInput = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `appId`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | the app id this workflow_template belongs to                                  |
| `automationSteps`                                                             | [shared.AutomationStep](../../../sdk/models/shared/automationstep.md)[]       | :heavy_minus_sign:                                                            | The automationSteps field.                                                    |
| `context`                                                                     | [shared.AutomationContext](../../../sdk/models/shared/automationcontext.md)   | :heavy_minus_sign:                                                            | N/A                                                                           |
| `description`                                                                 | *string*                                                                      | :heavy_minus_sign:                                                            | The description field.                                                        |
| `displayName`                                                                 | *string*                                                                      | :heavy_minus_sign:                                                            | The displayName field.                                                        |
| `draftAutomationSteps`                                                        | [shared.AutomationStep](../../../sdk/models/shared/automationstep.md)[]       | :heavy_minus_sign:                                                            | The draftAutomationSteps field.                                               |
| `draftTriggers`                                                               | [shared.AutomationTrigger](../../../sdk/models/shared/automationtrigger.md)[] | :heavy_minus_sign:                                                            | The draftTriggers field.                                                      |
| `enabled`                                                                     | *boolean*                                                                     | :heavy_minus_sign:                                                            | The enabled field.                                                            |
| `isDraft`                                                                     | *boolean*                                                                     | :heavy_minus_sign:                                                            | The isDraft field.                                                            |
| `triggers`                                                                    | [shared.AutomationTrigger](../../../sdk/models/shared/automationtrigger.md)[] | :heavy_minus_sign:                                                            | The triggers field.                                                           |