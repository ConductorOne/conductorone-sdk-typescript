# Screenshot

The Screenshot message.

## Example Usage

```typescript
import { Screenshot } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Screenshot = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `contentType`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | The contentType field.                                                 |
| `data`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | The data field.                                                        |
| `kind`                                                                 | [shared.ScreenshotKind](../../../sdk/models/shared/screenshotkind.md)  | :heavy_minus_sign:                                                     | The kind field.                                                        |
| `route`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | Parameterized route the shot was taken on — never a raw URL. Optional. |