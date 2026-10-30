# C1ApiAiGovernanceV1MCPAccessProfileServiceSearchRequestableConnectorsRequest

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPAccessProfileServiceSearchRequestableConnectorsRequest } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiAiGovernanceV1MCPAccessProfileServiceSearchRequestableConnectorsRequest =
    {
      userId: "<id>",
    };
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `userId`                                                                                                                            | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `grantEnrollmentStatus`                                                                                                             | [operations.GrantEnrollmentStatus](../../../sdk/models/operations/grantenrollmentstatus.md)                                         | :heavy_minus_sign:                                                                                                                  | Filters by whether the user already holds the connector's tools.<br/> UNSPECIFIED = all, FULLY_GRANTED = held, NOT_GRANTED = available. |
| `pageSize`                                                                                                                          | *number*                                                                                                                            | :heavy_minus_sign:                                                                                                                  | N/A                                                                                                                                 |
| `pageToken`                                                                                                                         | *string*                                                                                                                            | :heavy_minus_sign:                                                                                                                  | N/A                                                                                                                                 |
| `query`                                                                                                                             | *string*                                                                                                                            | :heavy_minus_sign:                                                                                                                  | N/A                                                                                                                                 |