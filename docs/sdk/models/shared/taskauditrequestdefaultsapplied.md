# TaskAuditRequestDefaultsApplied

TaskAuditRequestDefaultsApplied records which tier of the request-settings
 precedence chain supplied the defaults for a grant request. The rule ID, not
 its name, is stored; consumers resolve the current display name via
 (app_id, routing_rule_id).

## Example Usage

```typescript
import { TaskAuditRequestDefaultsApplied } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskAuditRequestDefaultsApplied = {};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `appId`                                                                                                             | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The appId field.                                                                                                    |
| `routingRuleId`                                                                                                     | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The routingRuleId field.                                                                                            |
| `source`                                                                                                            | [shared.TaskAuditRequestDefaultsAppliedSource](../../../sdk/models/shared/taskauditrequestdefaultsappliedsource.md) | :heavy_minus_sign:                                                                                                  | The source field.                                                                                                   |