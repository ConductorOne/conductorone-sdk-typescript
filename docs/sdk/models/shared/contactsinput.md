# ContactsInput

Contacts represents the contact configuration for an organization.

## Example Usage

```typescript
import { ContactsInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ContactsInput = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `billingEmails`                                               | *string*[]                                                    | :heavy_minus_sign:                                            | Email addresses of billing contacts for this organization.    |
| `operationsEmails`                                            | *string*[]                                                    | :heavy_minus_sign:                                            | Email addresses of operations contacts for this organization. |
| `securityEmails`                                              | *string*[]                                                    | :heavy_minus_sign:                                            | Email addresses of security contacts for this organization.   |