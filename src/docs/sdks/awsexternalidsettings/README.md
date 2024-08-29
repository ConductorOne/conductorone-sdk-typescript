# AWSExternalIDSettings
(*awsExternalIDSettings*)

### Available Operations

* [get](#get) - Get

## get

Invokes the c1.api.settings.v1.AWSExternalIDSettings.Get method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

async function run() {
  const sdk = new ConductoroneSDKTypescript({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
      oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const result = await sdk.awsExternalIDSettings.get();

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.C1ApiSettingsV1AWSExternalIDSettingsGetResponse](../../sdk/models/operations/c1apisettingsv1awsexternalidsettingsgetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
