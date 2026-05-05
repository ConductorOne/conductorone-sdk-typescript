# BulkAssignOwnerAction

The BulkAssignOwnerAction message.

## Example Usage

```typescript
import { BulkAssignOwnerAction } from "conductorone-sdk-typescript/sdk/models/shared";

let value: BulkAssignOwnerAction = {};
```

## Fields

| Field                                                                                                                                                                                                            | Type                                                                                                                                                                                                             | Required                                                                                                                                                                                                         | Description                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `findingOwnerRef`                                                                                                                                                                                                | [shared.FindingOwnerRef](../../../sdk/models/shared/findingownerref.md)                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                               | The FindingOwnerRef message.<br/><br/>This message contains a oneof named owner. Only a single field of the following list may be set at a time:<br/>  - identityUserId<br/>  - appOwnerAppId<br/>  - managerOfUserId<br/>  - userSetId<br/> |