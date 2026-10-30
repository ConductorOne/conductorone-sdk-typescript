# EnrollmentRequired

EnrollmentRequired tells the user to enroll a credential before continuing.

## Example Usage

```typescript
import { EnrollmentRequired } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EnrollmentRequired = {};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `credentialTypes`                                                                                             | [shared.EnrollmentRequiredCredentialTypes](../../../sdk/models/shared/enrollmentrequiredcredentialtypes.md)[] | :heavy_minus_sign:                                                                                            | The credential types the user may enroll. Empty means "complete identity<br/> verification first".            |