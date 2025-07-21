# ListOrgDomainsResponse

The ListOrgDomainsResponse message.

## Example Usage

```typescript
import { ListOrgDomainsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ListOrgDomainsResponse = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `list`                                                        | [shared.OrgDomain](../../../sdk/models/shared/orgdomain.md)[] | :heavy_minus_sign:                                            | The list field.                                               |
| `nextPageToken`                                               | *string*                                                      | :heavy_minus_sign:                                            | The nextPageToken field.                                      |