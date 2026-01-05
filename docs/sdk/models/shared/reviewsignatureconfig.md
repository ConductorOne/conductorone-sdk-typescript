# ReviewSignatureConfig

Signature configuration for access review submissions

## Example Usage

```typescript
import { ReviewSignatureConfig } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ReviewSignatureConfig = {};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `meaningOfSignature`          | *string*                      | :heavy_minus_sign:            | The meaningOfSignature field. |
| `requireSignature`            | *boolean*                     | :heavy_minus_sign:            | The requireSignature field.   |
| `stepUpProviderId`            | *string*                      | :heavy_minus_sign:            | The stepUpProviderId field.   |
| `tspUrl`                      | *string*                      | :heavy_minus_sign:            | The tspUrl field.             |