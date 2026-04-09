# FindingOwnerRef

The FindingOwnerRef message.

This message contains a oneof named owner. Only a single field of the following list may be set at a time:
  - identityUserId
  - appOwnerAppId
  - managerOfUserId
  - userSetId


## Example Usage

```typescript
import { FindingOwnerRef } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FindingOwnerRef = {};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `appOwnerAppId`                                                                                                                                        | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | The appOwnerAppId field.<br/>This field is part of the `owner` oneof.<br/>See the documentation for `c1.models.finding.v1.FindingOwnerRef` for more details. |
| `identityUserId`                                                                                                                                       | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | The identityUserId field.<br/>This field is part of the `owner` oneof.<br/>See the documentation for `c1.models.finding.v1.FindingOwnerRef` for more details. |
| `managerOfUserId`                                                                                                                                      | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | The managerOfUserId field.<br/>This field is part of the `owner` oneof.<br/>See the documentation for `c1.models.finding.v1.FindingOwnerRef` for more details. |
| `userSetId`                                                                                                                                            | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | The userSetId field.<br/>This field is part of the `owner` oneof.<br/>See the documentation for `c1.models.finding.v1.FindingOwnerRef` for more details. |