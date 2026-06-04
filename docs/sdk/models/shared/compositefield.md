# CompositeField

CompositeField names one component of a composite import ID.

## Example Usage

```typescript
import { CompositeField } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CompositeField = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `c1Field`                                                                         | *string*                                                                          | :heavy_minus_sign:                                                                | The C1 API field whose value supplies this component.                             |
| `tfType`                                                                          | [shared.CompositeFieldTfType](../../../sdk/models/shared/compositefieldtftype.md) | :heavy_minus_sign:                                                                | The TF attribute type of the component value.                                     |