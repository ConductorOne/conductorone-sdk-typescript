# EncodedContentGuardConfig

EncodedContentGuardConfig detects encoded/obfuscated smuggling in tool input:
 long base64 blobs, long hex runs, and invisible/zero-width unicode.

## Example Usage

```typescript
import { EncodedContentGuardConfig } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EncodedContentGuardConfig = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `flagOnly`                                                                 | *boolean*                                                                  | :heavy_minus_sign:                                                         | When true, detection records the finding but does not deny (observe-only). |
| `minBase64Run`                                                             | *number*                                                                   | :heavy_minus_sign:                                                         | Minimum contiguous base64 run length to flag. <= 0 = default (256).        |
| `minHexRun`                                                                | *number*                                                                   | :heavy_minus_sign:                                                         | Minimum contiguous hex run length to flag. <= 0 = default (128).           |