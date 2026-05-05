# UpdateContactsRequest

The UpdateContactsRequest message.

## Example Usage

```typescript
import { UpdateContactsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdateContactsRequest = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `contacts`                                                          | [shared.ContactsInput](../../../sdk/models/shared/contactsinput.md) | :heavy_minus_sign:                                                  | Contacts represents the contact configuration for an organization.  |
| `updateMask`                                                        | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |