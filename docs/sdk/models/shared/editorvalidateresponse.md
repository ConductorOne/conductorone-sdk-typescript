# EditorValidateResponse

The EditorValidateResponse message contains validation results.

## Example Usage

```typescript
import { EditorValidateResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EditorValidateResponse = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `markers`                                                           | [shared.EditorMarker](../../../sdk/models/shared/editormarker.md)[] | :heavy_minus_sign:                                                  | The list of diagnostic markers found during validation.             |