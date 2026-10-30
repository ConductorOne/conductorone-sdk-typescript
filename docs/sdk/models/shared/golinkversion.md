# GoLinkVersion

GoLinkVersion represents a point-in-time snapshot of a GoLink.

## Example Usage

```typescript
import { GoLinkVersion } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GoLinkVersion = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `changedByUserId`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | The changedByUserId field.                                                                    |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `golinkId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The golinkId field.                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The id field.                                                                                 |
| `snapshot`                                                                                    | [shared.GoLink](../../../sdk/models/shared/golink.md)                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `version`                                                                                     | *number*                                                                                      | :heavy_minus_sign:                                                                            | The version field.                                                                            |