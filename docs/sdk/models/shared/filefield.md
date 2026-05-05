# FileField

The FileField message.

This message contains a oneof named view. Only a single field of the following list may be set at a time:
  - fileInputField


## Example Usage

```typescript
import { FileField } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FileField = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `acceptedFileTypes`                                                   | *string*[]                                                            | :heavy_minus_sign:                                                    | The acceptedFileTypes field.                                          |
| `fileInputField`                                                      | [shared.FileInputField](../../../sdk/models/shared/fileinputfield.md) | :heavy_minus_sign:                                                    | N/A                                                                   |
| `maxFileSize`                                                         | *number*                                                              | :heavy_minus_sign:                                                    | The maxFileSize field.                                                |