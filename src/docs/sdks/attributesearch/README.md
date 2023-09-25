# AttributeSearch

### Available Operations

* [searchAttributeValues](#searchattributevalues) - Search Attribute Values

## searchAttributeValues

Search attributes based on filters specified in the request body.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAttributeV1AttributeSearchSearchAttributeValuesResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.attributeSearch.searchAttributeValues({
  attributeTypeIds: [
    "perspiciatis",
  ],
  excludeIds: [
    "voluptatem",
  ],
  ids: [
    "porro",
  ],
  pageSize: 1646.94,
  pageToken: "blanditiis",
  query: "error",
  value: "eaque",
}).then((res: C1ApiAttributeV1AttributeSearchSearchAttributeValuesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [shared.SearchAttributeValuesRequest](../../models/shared/searchattributevaluesrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.C1ApiAttributeV1AttributeSearchSearchAttributeValuesResponse](../../models/operations/c1apiattributev1attributesearchsearchattributevaluesresponse.md)>**

