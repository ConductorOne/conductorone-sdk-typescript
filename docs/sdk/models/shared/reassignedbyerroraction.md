# ReassignedByErrorAction

The ReassignedByErrorAction object describes the outcome of a policy step that has been reassigned because it had an error provisioning.

## Example Usage

```typescript
import { ReassignedByErrorAction } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ReassignedByErrorAction = {};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `description`                                                                                             | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The description of the error with more details on why this was reassigned.                                |
| `errorCode`                                                                                               | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Additional information about the error, like http status codes or error messages from SDKs.               |
| `errorUserId`                                                                                             | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The UserID of the user who reassigned this due to an error. This will exclusively be the System's UserID. |
| `erroredAt`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)             | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `newPolicyStepId`                                                                                         | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The ID of the policy step that was created by this reassignment.                                          |
| `reassignedAt`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)             | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |