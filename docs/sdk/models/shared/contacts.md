# Contacts

Contacts represents the contact configuration for an organization.

## Example Usage

```typescript
import { Contacts } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Contacts = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `billingEmails`                                                                               | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Email addresses of billing contacts for this organization.                                    |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `operationsEmails`                                                                            | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Email addresses of operations contacts for this organization.                                 |
| `securityEmails`                                                                              | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Email addresses of security contacts for this organization.                                   |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |