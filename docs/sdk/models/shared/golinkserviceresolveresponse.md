# GoLinkServiceResolveResponse

The GoLinkServiceResolveResponse message.

## Example Usage

```typescript
import { GoLinkServiceResolveResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GoLinkServiceResolveResponse = {};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `actionId`                                                                                                      | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Set when outcome is ACTION. The action ID to trigger.                                                           |
| `chooserOptions`                                                                                                | [shared.GoLinkChooserOptionInput](../../../sdk/models/shared/golinkchooseroptioninput.md)[]                     | :heavy_minus_sign:                                                                                              | Set when outcome is CHOOSER. The chooser options to present to the user.                                        |
| `golink`                                                                                                        | [shared.GoLink](../../../sdk/models/shared/golink.md)                                                           | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |
| `outcome`                                                                                                       | [shared.GoLinkServiceResolveResponseOutcome](../../../sdk/models/shared/golinkserviceresolveresponseoutcome.md) | :heavy_minus_sign:                                                                                              | The outcome field.                                                                                              |
| `prerequisite`                                                                                                  | [shared.GoLinkPrerequisite](../../../sdk/models/shared/golinkprerequisite.md)                                   | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |
| `redirectUrl`                                                                                                   | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Set when outcome is REDIRECT. The fully resolved URL to redirect to.                                            |
| `suggestions`                                                                                                   | [shared.GoLinkView](../../../sdk/models/shared/golinkview.md)[]                                                 | :heavy_minus_sign:                                                                                              | Set when outcome is NOT_FOUND. Suggested GoLinks that might match the path.                                     |