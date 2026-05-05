# UpdateSuggestionStateRequest

The UpdateSuggestionStateRequest message.

## Example Usage

```typescript
import { UpdateSuggestionStateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdateSuggestionStateRequest = {};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `createdCatalogId`                                                                                          | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | The ID of the access profile created from this suggestion, set when accepting.                              |
| `state`                                                                                                     | [shared.UpdateSuggestionStateRequestState](../../../sdk/models/shared/updatesuggestionstaterequeststate.md) | :heavy_minus_sign:                                                                                          | The new state to transition the suggestion to.                                                              |