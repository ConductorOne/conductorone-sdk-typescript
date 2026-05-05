# OrgDomain

OrgDomain represents a verified email domain associated with the tenant.

## Example Usage

```typescript
import { OrgDomain } from "conductorone-sdk-typescript/sdk/models/shared";

let value: OrgDomain = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `domain`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The verified domain name (e.g., "example.com").                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The unique identifier of the domain record.                                                   |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |