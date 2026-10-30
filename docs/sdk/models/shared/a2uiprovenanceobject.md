# A2UIProvenanceObject

A2UIProvenanceObject names one record a step referred to by id.

## Example Usage

```typescript
import { A2UIProvenanceObject } from "conductorone-sdk-typescript/sdk/models/shared";

let value: A2UIProvenanceObject = {};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `displayName`                                                                                                                                  | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | Empty when the record's type has no name to resolve, or the record is<br/> gone. The id then stands alone rather than the whole row being dropped. |
| `id`                                                                                                                                           | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | The id field.                                                                                                                                  |
| `recordType`                                                                                                                                   | [shared.RecordType](../../../sdk/models/shared/recordtype.md)                                                                                  | :heavy_minus_sign:                                                                                                                             | Not always the step's own type: a step over grants can be narrowed to one<br/> app, and the app is the record worth naming.                    |