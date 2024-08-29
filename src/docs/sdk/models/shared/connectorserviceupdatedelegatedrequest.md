# ConnectorServiceUpdateDelegatedRequest

The ConnectorServiceUpdateDelegatedRequest message contains the fields required to update a connector.


## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `connector`                                                                     | [shared.ConnectorInput](../../../sdk/models/shared/connectorinput.md)           | :heavy_minus_sign:                                                              | A Connector is used to sync objects into Apps                                   |
| `connectorExpandMask`                                                           | [shared.ConnectorExpandMask](../../../sdk/models/shared/connectorexpandmask.md) | :heavy_minus_sign:                                                              | The ConnectorExpandMask is used to expand related objects on a connector.       |
| `updateMask`                                                                    | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |