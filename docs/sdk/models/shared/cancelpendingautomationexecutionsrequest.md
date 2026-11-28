# CancelPendingAutomationExecutionsRequest

The automation whose queued runs to cancel.

## Example Usage

```typescript
import { CancelPendingAutomationExecutionsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CancelPendingAutomationExecutionsRequest = {};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `reason`                                                                                            | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Optional human-readable reason for the cancellation, recorded in the<br/> system log. Up to 1024 bytes. |