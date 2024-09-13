# DeniedAction

The denied action indicates that the c1.api.policy.v1.ApprovalInstance had an outcome of denied.

## Example Usage

```typescript
import { DeniedAction } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DeniedAction = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `deniedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UserID that denied this step.                                                             |