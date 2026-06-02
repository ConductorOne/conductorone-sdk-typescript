# HistoryAnnotation

HistoryAnnotation is a single operator-provided key/value rendered with
 per-key display metadata. Annotations are minted from the
 Tx.*WithHistoryAnnotations / db.WithHistoryAnnotations call options.

## Example Usage

```typescript
import { HistoryAnnotation } from "conductorone-sdk-typescript/sdk/models/shared";

let value: HistoryAnnotation = {};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `displayLabel`                                                                                  | *string*                                                                                        | :heavy_minus_sign:                                                                              | Server-rendered label, e.g. "Ticket".                                                           |
| `displayUrl`                                                                                    | *string*                                                                                        | :heavy_minus_sign:                                                                              | Resolved from tenant config; "" if none. Frontend applies its own<br/> scheme allowlist.        |
| `displayValue`                                                                                  | *string*                                                                                        | :heavy_minus_sign:                                                                              | UI-friendly rendering (truncated / reshaped from raw_value).                                    |
| `key`                                                                                           | *string*                                                                                        | :heavy_minus_sign:                                                                              | Storage-side key. Bounds: ^[a-z][a-z0-9_.-]{0,63}$.                                             |
| `kind`                                                                                          | [shared.HistoryAnnotationKind](../../../sdk/models/shared/historyannotationkind.md)             | :heavy_minus_sign:                                                                              | The kind field.                                                                                 |
| `rawValue`                                                                                      | *string*                                                                                        | :heavy_minus_sign:                                                                              | Raw value as stored in ObjectHistory.annotations; storage-side values<br/> are capped at 512 bytes. |