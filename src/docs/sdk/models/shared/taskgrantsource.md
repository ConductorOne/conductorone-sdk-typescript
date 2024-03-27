# TaskGrantSource

The TaskGrantSource message tracks which external URL was the source of the specificed grant ticket.


## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `externalUrl`                                                 | *string*                                                      | :heavy_minus_sign:                                            | The external url source of the grant ticket.                  |
| `integrationId`                                               | *string*                                                      | :heavy_minus_sign:                                            | The integration id for the source of tickets.                 |
| `requestId`                                                   | *string*                                                      | :heavy_minus_sign:                                            | the request id for the grant ticket if the source is external |