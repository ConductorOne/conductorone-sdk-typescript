# AppEntitlementSearchServiceSearchResponse

The AppEntitlementSearchServiceSearchResponse message.


## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `facets`                                                          | [Facets](../../models/shared/facets.md)                           | :heavy_minus_sign:                                                | The Facets message.                                               |
| `expanded`                                                        | Record<string, *any*>[]                                           | :heavy_minus_sign:                                                | The expanded field.                                               |
| `list`                                                            | [AppEntitlementView](../../models/shared/appentitlementview.md)[] | :heavy_minus_sign:                                                | The list field.                                                   |
| `nextPageToken`                                                   | *string*                                                          | :heavy_minus_sign:                                                | The nextPageToken field.                                          |