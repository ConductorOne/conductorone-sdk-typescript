# CreateAutomationResponseInput

The CreateAutomationResponse message.

## Example Usage

```typescript
import { CreateAutomationResponseInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CreateAutomationResponseInput = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `automation`                                                                    | [shared.Automation](../../../sdk/models/shared/automation.md)                   | :heavy_minus_sign:                                                              | N/A                                                                             |
| `webhookHmacSecret`                                                             | *string*                                                                        | :heavy_minus_sign:                                                              | If we create a new trigger with an HMAC secret we return the HMAC on this field |