# EditorMarker

The EditorMarker message.

## Example Usage

```typescript
import { EditorMarker } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EditorMarker = {};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `endColumn`                                               | *number*                                                  | :heavy_minus_sign:                                        | The endColumn field.                                      |
| `endLineNumber`                                           | *number*                                                  | :heavy_minus_sign:                                        | The endLineNumber field.                                  |
| `message`                                                 | *string*                                                  | :heavy_minus_sign:                                        | The message field.                                        |
| `severity`                                                | [shared.Severity](../../../sdk/models/shared/severity.md) | :heavy_minus_sign:                                        | The severity field.                                       |
| `startColumn`                                             | *number*                                                  | :heavy_minus_sign:                                        | The startColumn field.                                    |
| `startLineNumber`                                         | *number*                                                  | :heavy_minus_sign:                                        | The startLineNumber field.                                |