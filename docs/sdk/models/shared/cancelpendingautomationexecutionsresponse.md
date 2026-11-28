# CancelPendingAutomationExecutionsResponse

The bulk action started to cancel the automation's queued runs.

## Example Usage

```typescript
import { CancelPendingAutomationExecutionsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CancelPendingAutomationExecutionsResponse = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `bulkActionId`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | The bulk action ID created to cancel the queued runs. Track progress via<br/> the BulkAction API. |