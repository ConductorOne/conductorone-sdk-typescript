# FundsSubjectAppScope

SubjectAppScope identifies one user's account for an application.

## Example Usage

```typescript
import { FundsSubjectAppScope } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FundsSubjectAppScope = {};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `appId`                        | *string*                       | :heavy_minus_sign:             | Application ID of the account. |
| `userId`                       | *string*                       | :heavy_minus_sign:             | User ID of the account owner.  |