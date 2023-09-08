# userSearch

### Available Operations

* [search](#search) - Search

## search

Search users based on filters specified in the request body.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiUserV1UserSearchSearchResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";
import { SearchUsersRequestUserStatuses } from "conductorone-sdk-typescript/dist/sdk/models/shared";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.userSearch.search({
  userExpandMask: {
    paths: [
      "officia",
    ],
  },
  email: "Green.Bahringer@yahoo.com",
  excludeIds: [
    "iste",
  ],
  ids: [
    "id",
  ],
  pageSize: 700.42,
  pageToken: "error",
  query: "possimus",
  refs: [
    {
      id: "eaab5851-d6c6-445b-88b6-1891baa0fe1a",
    },
  ],
  roleIds: [
    "pariatur",
  ],
  userStatuses: [
    SearchUsersRequestUserStatuses.Deleted,
  ],
}).then((res: C1ApiUserV1UserSearchSearchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [shared.SearchUsersRequest](../../models/shared/searchusersrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.C1ApiUserV1UserSearchSearchResponse](../../models/operations/c1apiuserv1usersearchsearchresponse.md)>**

