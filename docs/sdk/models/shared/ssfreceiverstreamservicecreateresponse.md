# SSFReceiverStreamServiceCreateResponse

SSFReceiverStreamServiceCreateResponse returns the created stream and the push auth token in plaintext.

## Example Usage

```typescript
import { SSFReceiverStreamServiceCreateResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSFReceiverStreamServiceCreateResponse = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `pushAuthTokenPlaintext`                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | Push auth token returned in plaintext ONLY on create.                       |
| `ssfReceiverStream`                                                         | [shared.SSFReceiverStream](../../../sdk/models/shared/ssfreceiverstream.md) | :heavy_minus_sign:                                                          | N/A                                                                         |