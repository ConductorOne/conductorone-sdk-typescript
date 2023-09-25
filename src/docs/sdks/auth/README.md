# Auth

### Available Operations

* [introspect](#introspect) - Introspect

## introspect

Introspect returns the current user's principle_id, user_id and a list of roles, permissions, and enabled features.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAuthV1AuthIntrospectResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.auth.introspect().then((res: C1ApiAuthV1AuthIntrospectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.C1ApiAuthV1AuthIntrospectResponse](../../models/operations/c1apiauthv1authintrospectresponse.md)>**

