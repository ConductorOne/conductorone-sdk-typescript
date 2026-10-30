# SSOSubjectCompatibilityImportEntry

SSOSubjectCompatibilityImportEntry is one client-parsed source row.

## Example Usage

```typescript
import { SSOSubjectCompatibilityImportEntry } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSOSubjectCompatibilityImportEntry = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `row`                                                                  | *number*                                                               | :heavy_minus_sign:                                                     | One-based row number in the source file, including its header.         |
| `subject`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | Exact legacy subject. C1 preserves these UTF-8 bytes without trimming. |
| `userId`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | ConductorOne user ID resolved by the client before this batch is sent. |