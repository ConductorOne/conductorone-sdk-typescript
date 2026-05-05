# ListStepUpProvidersResponse

The ListStepUpProvidersResponse message.

## Example Usage

```typescript
import { ListStepUpProvidersResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ListStepUpProvidersResponse = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `list`                                                                               | [shared.StepUpProvider](../../../sdk/models/shared/stepupprovider.md)[]              | :heavy_minus_sign:                                                                   | The list of step-up authentication providers.                                        |
| `nextPageToken`                                                                      | *string*                                                                             | :heavy_minus_sign:                                                                   | A token to retrieve the next page of results, or empty if there are no more results. |