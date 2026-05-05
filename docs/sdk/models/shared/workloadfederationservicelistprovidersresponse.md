# WorkloadFederationServiceListProvidersResponse

The WorkloadFederationServiceListProvidersResponse message.

## Example Usage

```typescript
import { WorkloadFederationServiceListProvidersResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WorkloadFederationServiceListProvidersResponse = {};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `list`                                                                                          | [shared.WorkloadFederationProvider](../../../sdk/models/shared/workloadfederationprovider.md)[] | :heavy_minus_sign:                                                                              | The list field.                                                                                 |
| `nextPageToken`                                                                                 | *string*                                                                                        | :heavy_minus_sign:                                                                              | The nextPageToken field.                                                                        |