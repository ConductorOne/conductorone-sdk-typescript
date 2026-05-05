# ConnectorScheduleCron

A cron-based schedule definition for connector syncs.

## Example Usage

```typescript
import { ConnectorScheduleCron } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ConnectorScheduleCron = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `cronSpec`                                                                  | *string*                                                                    | :heavy_minus_sign:                                                          | The cron expression defining the sync schedule.                             |
| `timezone`                                                                  | *string*                                                                    | :heavy_minus_sign:                                                          | The IANA timezone name for the cron schedule (e.g., "America/Los_Angeles"). |