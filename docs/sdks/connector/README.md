# connector

### Available Operations

* [createDelegated](#createdelegated) - Create Delegated
* [delete](#delete) - Delete
* [get](#get) - Get
* [getCredentials](#getcredentials) - Get Credentials
* [list](#list) - List
* [revokeCredential](#revokecredential) - Revoke Credential
* [rotateCredential](#rotatecredential) - Rotate Credential
* [update](#update) - Update
* [updateDelegated](#updatedelegated) - Update Delegated

## createDelegated

Invokes the c1.api.app.v1.ConnectorService.CreateDelegated method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1ConnectorServiceCreateDelegatedResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.connector.createDelegated({
  connectorServiceCreateDelegatedRequest: {
    connectorExpandMask: {
      paths: [
        "atque",
      ],
    },
    catalogId: "sit",
    description: "fugiat",
    displayName: "ab",
    userIds: [
      "dolorum",
      "iusto",
      "voluptate",
    ],
  },
  appId: "dolorum",
}).then((res: C1ApiAppV1ConnectorServiceCreateDelegatedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.C1ApiAppV1ConnectorServiceCreateDelegatedRequest](../../models/operations/c1apiappv1connectorservicecreatedelegatedrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.C1ApiAppV1ConnectorServiceCreateDelegatedResponse](../../models/operations/c1apiappv1connectorservicecreatedelegatedresponse.md)>**


## delete

Invokes the c1.api.app.v1.ConnectorService.Delete method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1ConnectorServiceDeleteResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.connector.delete({
  connectorServiceDeleteRequest: {},
  appId: "deleniti",
  id: "9ebf737a-e420-43ce-9e6a-95d8a0d446ce",
}).then((res: C1ApiAppV1ConnectorServiceDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.C1ApiAppV1ConnectorServiceDeleteRequest](../../models/operations/c1apiappv1connectorservicedeleterequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.C1ApiAppV1ConnectorServiceDeleteResponse](../../models/operations/c1apiappv1connectorservicedeleteresponse.md)>**


## get

Invokes the c1.api.app.v1.ConnectorService.Get method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1ConnectorServiceGetResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.connector.get({
  appId: "qui",
  id: "af7a73cf-3be4-453f-870b-326b5a73429c",
}).then((res: C1ApiAppV1ConnectorServiceGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.C1ApiAppV1ConnectorServiceGetRequest](../../models/operations/c1apiappv1connectorservicegetrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.C1ApiAppV1ConnectorServiceGetResponse](../../models/operations/c1apiappv1connectorservicegetresponse.md)>**


## getCredentials

Invokes the c1.api.app.v1.ConnectorService.GetCredentials method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1ConnectorServiceGetCredentialsResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.connector.getCredentials({
  appId: "pariatur",
  connectorId: "soluta",
  id: "1a8422bb-679d-4232-a715-bf0cbb1e31b8",
}).then((res: C1ApiAppV1ConnectorServiceGetCredentialsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.C1ApiAppV1ConnectorServiceGetCredentialsRequest](../../models/operations/c1apiappv1connectorservicegetcredentialsrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.C1ApiAppV1ConnectorServiceGetCredentialsResponse](../../models/operations/c1apiappv1connectorservicegetcredentialsresponse.md)>**


## list

Invokes the c1.api.app.v1.ConnectorService.List method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1ConnectorServiceListResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.connector.list({
  appId: "tempore",
}).then((res: C1ApiAppV1ConnectorServiceListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.C1ApiAppV1ConnectorServiceListRequest](../../models/operations/c1apiappv1connectorservicelistrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.C1ApiAppV1ConnectorServiceListResponse](../../models/operations/c1apiappv1connectorservicelistresponse.md)>**


## revokeCredential

Invokes the c1.api.app.v1.ConnectorService.RevokeCredential method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1ConnectorServiceRevokeCredentialResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.connector.revokeCredential({
  connectorServiceRevokeCredentialRequest: {},
  appId: "cupiditate",
  connectorId: "aperiam",
  id: "f3443a11-08e0-4adc-b4b9-21879fce953f",
}).then((res: C1ApiAppV1ConnectorServiceRevokeCredentialResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.C1ApiAppV1ConnectorServiceRevokeCredentialRequest](../../models/operations/c1apiappv1connectorservicerevokecredentialrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.C1ApiAppV1ConnectorServiceRevokeCredentialResponse](../../models/operations/c1apiappv1connectorservicerevokecredentialresponse.md)>**


## rotateCredential

Invokes the c1.api.app.v1.ConnectorService.RotateCredential method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1ConnectorServiceRotateCredentialResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.connector.rotateCredential({
  connectorServiceRotateCredentialRequest: {},
  appId: "voluptate",
  connectorId: "consectetur",
}).then((res: C1ApiAppV1ConnectorServiceRotateCredentialResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.C1ApiAppV1ConnectorServiceRotateCredentialRequest](../../models/operations/c1apiappv1connectorservicerotatecredentialrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.C1ApiAppV1ConnectorServiceRotateCredentialResponse](../../models/operations/c1apiappv1connectorservicerotatecredentialresponse.md)>**


## update

Invokes the c1.api.app.v1.ConnectorService.Update method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1ConnectorServiceUpdateResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";
import { ConnectorStatusStatus } from "conductorone-sdk-typescript/dist/sdk/models/shared";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.connector.update({
  connectorServiceUpdateRequestInput: {
    connector: {
      connectorStatus: {
        completedAt: new Date("2020-02-26T11:54:04.858Z"),
        lastError: "dignissimos",
        startedAt: new Date("2020-11-08T11:03:10.206Z"),
        status: ConnectorStatusStatus.SyncStatusError,
        updatedAt: new Date("2022-05-15T21:16:33.535Z"),
      },
      oAuth2AuthorizedAs: {
        authEmail: "facilis",
        authorizedAt: new Date("2021-07-04T12:52:28.765Z"),
      },
      appId: "dolore",
      catalogId: "quibusdam",
      config: {
        "sequi": "natus",
        "impedit": "aut",
        "voluptatibus": "exercitationem",
        "nulla": "fugit",
      },
      description: "porro",
      displayName: "maiores",
      downloadUrl: "doloribus",
      id: "7c70a456-26d4-4368-93f1-6d9f5fce6c55",
      userIds: [
        "inventore",
        "magnam",
      ],
    },
    connectorExpandMask: {
      paths: [
        "quo",
        "consectetur",
      ],
    },
    updateMask: "recusandae",
  },
  appId: "aspernatur",
  id: "50fb008c-42e1-441a-ac36-6c8dd6b14429",
}).then((res: C1ApiAppV1ConnectorServiceUpdateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.C1ApiAppV1ConnectorServiceUpdateRequest](../../models/operations/c1apiappv1connectorserviceupdaterequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.C1ApiAppV1ConnectorServiceUpdateResponse](../../models/operations/c1apiappv1connectorserviceupdateresponse.md)>**


## updateDelegated

Invokes the c1.api.app.v1.ConnectorService.UpdateDelegated method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1ConnectorServiceUpdateDelegatedResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";
import { ConnectorStatusStatus } from "conductorone-sdk-typescript/dist/sdk/models/shared";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.connector.updateDelegated({
  connectorServiceUpdateDelegatedRequestInput: {
    connector: {
      connectorStatus: {
        completedAt: new Date("2022-07-11T02:03:34.375Z"),
        lastError: "magnam",
        startedAt: new Date("2022-09-27T07:50:41.350Z"),
        status: ConnectorStatusStatus.SyncStatusRunning,
        updatedAt: new Date("2022-06-23T12:34:06.790Z"),
      },
      oAuth2AuthorizedAs: {
        authEmail: "fuga",
        authorizedAt: new Date("2022-04-22T02:19:15.622Z"),
      },
      appId: "fugiat",
      catalogId: "ut",
      config: {
        "suscipit": "assumenda",
        "eos": "praesentium",
      },
      description: "quisquam",
      displayName: "veritatis",
      downloadUrl: "ipsa",
      id: "ab3cdca4-2519-404e-923c-7e0bc7178e47",
      userIds: [
        "commodi",
        "sapiente",
        "dolores",
      ],
    },
    connectorExpandMask: {
      paths: [
        "molestiae",
        "accusantium",
        "porro",
      ],
    },
    updateMask: "eum",
  },
  connectorAppId: "quas",
  connectorId: "praesentium",
}).then((res: C1ApiAppV1ConnectorServiceUpdateDelegatedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.C1ApiAppV1ConnectorServiceUpdateDelegatedRequest](../../models/operations/c1apiappv1connectorserviceupdatedelegatedrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.C1ApiAppV1ConnectorServiceUpdateDelegatedResponse](../../models/operations/c1apiappv1connectorserviceupdatedelegatedresponse.md)>**

