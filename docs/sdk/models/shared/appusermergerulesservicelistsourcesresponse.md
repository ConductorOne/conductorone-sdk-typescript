# AppUserMergeRulesServiceListSourcesResponse

The AppUserMergeRulesServiceListSourcesResponse message contains the records that make up an account.

## Example Usage

```typescript
import { AppUserMergeRulesServiceListSourcesResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppUserMergeRulesServiceListSourcesResponse = {};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `sources`                                                                                                     | [shared.AppUserSource](../../../sdk/models/shared/appusersource.md)[]                                         | :heavy_minus_sign:                                                                                            | The account's records: records from the application's connectors first, then records from other applications. |