# TriggerAutomationDispatcher

TriggerAutomationDispatcher runs a C1 automation by id (the "Run now" path).

## Example Usage

```typescript
import { TriggerAutomationDispatcher } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TriggerAutomationDispatcher = {};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `automationId`                                                                                                | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | ID of the C1 automation/workflow to run.                                                                      |
| `inputMapping`                                                                                                | Record<string, *string*>                                                                                      | :heavy_minus_sign:                                                                                            | Inputs passed to the automation, keyed by input name (v0: verbatim values;<br/> CEL evaluation is a later phase). |