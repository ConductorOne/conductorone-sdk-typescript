# userSearch

### Available Operations

* [search](#search) - Search

## search

Invokes the c1.api.user.v1.UserSearch.Search method.

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
      "minus",
      "esse",
    ],
  },
  email: "Al.Price@gmail.com",
  excludeIds: [
    "repellat",
    "velit",
  ],
  ids: [
    "provident",
    "consectetur",
    "eligendi",
    "dignissimos",
  ],
  pageSize: 2358.34,
  pageToken: "soluta",
  query: "natus",
  refs: [
    {
      id: "a3f2ceda-7e23-4f22-9741-1faf4b7544e4",
    },
    {
      id: "72e80285-7a5b-4404-a3a7-d575f1400e76",
    },
    {
      id: "4ad7334e-c1b7-481b-b6a0-8088d100efad",
    },
    {
      id: "a200ef04-22eb-4216-8cf9-ab8366c723ff",
    },
  ],
  roleIds: [
    "laborum",
    "natus",
    "accusamus",
    "doloremque",
  ],
  userStatuses: [
    SearchUsersRequestUserStatuses.Disabled,
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

