# SearchRequestableCredentialOfferingsResponse

The SearchRequestableCredentialOfferingsResponse message.

## Example Usage

```typescript
import { SearchRequestableCredentialOfferingsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchRequestableCredentialOfferingsResponse = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `list`                                                                                  | [shared.CredentialOfferingView](../../../sdk/models/shared/credentialofferingview.md)[] | :heavy_minus_sign:                                                                      | The list field.                                                                         |
| `nextPageToken`                                                                         | *string*                                                                                | :heavy_minus_sign:                                                                      | The nextPageToken field.                                                                |