# ListAppEntitlementRoutingRulesResponse

The ListAppEntitlementRoutingRulesResponse message.

## Example Usage

```typescript
import { ListAppEntitlementRoutingRulesResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ListAppEntitlementRoutingRulesResponse = {};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `list`                                                                                                         | [shared.AppEntitlementRoutingRule](../../../sdk/models/shared/appentitlementroutingrule.md)[]                  | :heavy_minus_sign:                                                                                             | The list field.                                                                                                |
| `maxRulesPerApp`                                                                                               | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | The maximum number of routing rules this app may hold. Creating a rule<br/> fails once the app reaches this limit. |
| `nextPageToken`                                                                                                | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | The nextPageToken field.                                                                                       |