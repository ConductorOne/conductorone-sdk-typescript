# EdgeCapabilitySummary

EdgeCapabilitySummary describes the capability reports of a tenant's connected Edge processes.

## Example Usage

```typescript
import { EdgeCapabilitySummary } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeCapabilitySummary = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `lastReportedAt`                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `reportingProcesses`                                                                          | *number*                                                                                      | :heavy_minus_sign:                                                                            | Edge processes with a live report.                                                            |