# PersonalClient

### Available Operations

* [create](#create) - Create

## create

Create creates a new PersonalClient object for the current User.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiIamV1PersonalClientServiceCreateResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.personalClient.create({
  allowSourceCidr: [
    "minima",
  ],
  displayName: "nisi",
  expires: "fugit",
  scopedRoles: [
    "sapiente",
  ],
}).then((res: C1ApiIamV1PersonalClientServiceCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [shared.PersonalClientServiceCreateRequest](../../models/shared/personalclientservicecreaterequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.C1ApiIamV1PersonalClientServiceCreateResponse](../../models/operations/c1apiiamv1personalclientservicecreateresponse.md)>**

