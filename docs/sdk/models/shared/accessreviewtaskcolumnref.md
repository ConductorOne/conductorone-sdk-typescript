# AccessReviewTaskColumnRef

One column in the reviewer task list: a built-in column, or an app user
 profile attribute. An attribute only renders for apps whose
 reviewer_attribute_config permits it — that config is the authorization,
 this is the view preference.

This message contains a oneof named column. Only a single field of the following list may be set at a time:
  - builtin
  - appUserAttributeKey


## Example Usage

```typescript
import { AccessReviewTaskColumnRef } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewTaskColumnRef = {};
```

## Fields

| Field                                                                                                                                                                   | Type                                                                                                                                                                    | Required                                                                                                                                                                | Description                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `appUserAttributeKey`                                                                                                                                                   | *string*                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                      | The appUserAttributeKey field.<br/>This field is part of the `column` oneof.<br/>See the documentation for `c1.api.accessreview.v1.AccessReviewTaskColumnRef` for more details. |
| `builtin`                                                                                                                                                               | [shared.Builtin](../../../sdk/models/shared/builtin.md)                                                                                                                 | :heavy_minus_sign:                                                                                                                                                      | The builtin field.<br/>This field is part of the `column` oneof.<br/>See the documentation for `c1.api.accessreview.v1.AccessReviewTaskColumnRef` for more details.     |