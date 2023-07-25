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
    oauth: "",
  },
});

sdk.userSearch.search({
  userExpandMask: {
    paths: [
      "corporis",
      "magnam",
    ],
  },
  email: "Wiley72@hotmail.com",
  excludeIds: [
    "labore",
  ],
  ids: [
    "occaecati",
    "voluptas",
    "quo",
  ],
  pageSize: 2420.99,
  pageToken: "minus",
  query: "fuga",
  refs: [
    {
      id: "acfbe2fd-5707-4577-9291-77deac646ecb",
    },
    {
      id: "573409e3-eb1e-45a2-b12e-b07f116db995",
    },
  ],
  roleIds: [
    "nostrum",
    "doloribus",
  ],
  userStatuses: [
    SearchUsersRequestUserStatuses.Disabled,
    SearchUsersRequestUserStatuses.Enabled,
    SearchUsersRequestUserStatuses.Deleted,
    SearchUsersRequestUserStatuses.Disabled,
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

