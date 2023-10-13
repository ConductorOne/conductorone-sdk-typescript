# PolicySearch
(*policySearch*)

### Available Operations

* [search](#search) - Search

## search

Search policies based on filters specified in the request body.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiPolicyV1PolicySearchSearchResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";
import { SearchPoliciesRequestPolicyTypes } from "conductorone-sdk-typescript/dist/sdk/models/shared";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.policySearch.search({
  displayName: "voluptas",
  pageSize: 9903.45,
  pageToken: "aperiam",
  policyTypes: [
    SearchPoliciesRequestPolicyTypes.PolicyTypeRevoke,
  ],
  query: "quaerat",
  refs: [
    {
      id: "2dac7af5-15cc-4413-aa63-aae8d67864db",
    },
  ],
}).then((res: C1ApiPolicyV1PolicySearchSearchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [shared.SearchPoliciesRequest](../../models/shared/searchpoliciesrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.C1ApiPolicyV1PolicySearchSearchResponse](../../models/operations/c1apipolicyv1policysearchsearchresponse.md)>**

