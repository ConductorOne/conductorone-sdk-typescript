# CreateClassifierBindingRequest

The CreateClassifierBindingRequest message.

## Example Usage

```typescript
import { CreateClassifierBindingRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CreateClassifierBindingRequest = {
  binding: {
    classifierId: "<id>",
    surface: "CLASSIFIER_TYPE_BOTH",
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `binding`                                                                   | [shared.ClassifierBinding](../../../sdk/models/shared/classifierbinding.md) | :heavy_check_mark:                                                          | N/A                                                                         |