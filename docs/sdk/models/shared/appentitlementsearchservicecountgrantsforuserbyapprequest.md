# AppEntitlementSearchServiceCountGrantsForUserByAppRequest

CountGrantsForUserByApp request.

## Example Usage

```typescript
import { AppEntitlementSearchServiceCountGrantsForUserByAppRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppEntitlementSearchServiceCountGrantsForUserByAppRequest = {};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `appIds`                                                                                                       | *string*[]                                                                                                     | :heavy_minus_sign:                                                                                             | Restrict the count to these applications. Empty counts grants across all<br/> applications the user has access to. |
| `userId`                                                                                                       | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | The user whose grants to count.                                                                                |