# API: Create Business

**Main endpoint**
`https://apiv4.ordering.co/v400/en/swyfttsolutions/business`

## Example Request

### Required fields
- `name`
- `email`
- `slug` (auto-generated from `name` in the UI)
- `minimum` (default `0`, not shown in UI)
- `tax_type` (default `2`, not shown in UI)
- `tax` (default `0.16`, not shown in UI)
- `delivery_price` (default `2500`, not shown in UI)
- `service_fee` (default `0`, not shown in UI)
- `schedule`

### Optional fields
- `enabled` (default `0`, not shown in UI)
- `location` (shown in UI via map picker)
- `timezone` (defaults to `America/Guyana`)
- `address`
- `phone`
- `header`
- `logo`
- `description`

```json
{
  "name": "Form Generated Store",
  "email": "test@example.com",
  "slug": "DSCS",
  "minimum": 0,
  "tax_type": "2",
  "tax": 0.16,
  "delivery_price": 2500,
  "service_fee": 1500,
  "schedule": "[{\"enabled\":true,\"lapses\":[{\"open\":{\"hour\":0,\"minute\":0},\"close\":{\"hour\":23,\"minute\":59}}]},{\"enabled\":true,\"lapses\":[{\"open\":{\"hour\":0,\"minute\":0},\"close\":{\"hour\":23,\"minute\":59}}]},{\"enabled\":true,\"lapses\":[{\"open\":{\"hour\":0,\"minute\":0},\"close\":{\"hour\":23,\"minute\":59}}]},{\"enabled\":true,\"lapses\":[{\"open\":{\"hour\":0,\"minute\":0},\"close\":{\"hour\":23,\"minute\":59}}]},{\"enabled\":true,\"lapses\":[{\"open\":{\"hour\":0,\"minute\":0},\"close\":{\"hour\":23,\"minute\":59}}]},{\"enabled\":true,\"lapses\":[{\"open\":{\"hour\":0,\"minute\":0},\"close\":{\"hour\":23,\"minute\":59}}]},{\"enabled\":true,\"lapses\":[{\"open\":{\"hour\":0,\"minute\":0},\"close\":{\"hour\":23,\"minute\":59}}]}]",
  "enabled": 0,
  "location": "{\"lat\": 6.808410, \"lng\": -58.161381}",
  "timezone": "America/Guyana",
  "address": "123 Main St, Georgetown, Guyana",
  "phone": "592-22222222",
  "header": "https://fieldsandrudd.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNnRhRWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--e1c6729b9f26552c46e6f5f7eb4b2c34e0a5d08e/banner-default.jpg",
  "logo": "https://restaurant2.shopespot.com/uploads/default/content_images/default-logo.png",
  "description": "This is a test store for form generation."
}
```

## Example Response

```json
{
  "error": false,
  "result": {
    "name": "Form Generated Store",
    "email": "test@example.com",
    "slug": "DSCS1",
    "minimum": 100,
    "tax_type": "2",
    "tax": 0.16,
    "delivery_price": 2500,
    "service_fee": 1500,
    "schedule": [
      {
        "enabled": true,
        "lapses": [
          {
            "open": { "hour": 0, "minute": 0 },
            "close": { "hour": 23, "minute": 59 }
          }
        ]
      },
      {
        "enabled": true,
        "lapses": [
          {
            "open": { "hour": 0, "minute": 0 },
            "close": { "hour": 23, "minute": 59 }
          }
        ]
      },
      {
        "enabled": true,
        "lapses": [
          {
            "open": { "hour": 0, "minute": 0 },
            "close": { "hour": 23, "minute": 59 }
          }
        ]
      },
      {
        "enabled": true,
        "lapses": [
          {
            "open": { "hour": 0, "minute": 0 },
            "close": { "hour": 23, "minute": 59 }
          }
        ]
      },
      {
        "enabled": true,
        "lapses": [
          {
            "open": { "hour": 0, "minute": 0 },
            "close": { "hour": 23, "minute": 59 }
          }
        ]
      },
      {
        "enabled": true,
        "lapses": [
          {
            "open": { "hour": 0, "minute": 0 },
            "close": { "hour": 23, "minute": 59 }
          }
        ]
      },
      {
        "enabled": true,
        "lapses": [
          {
            "open": { "hour": 0, "minute": 0 },
            "close": { "hour": 23, "minute": 59 }
          }
        ]
      }
    ],
    "enabled": false,
    "location": { "lat": 6.80841, "lng": -58.161381 },
    "timezone": "America/Guyana",
    "phone": "592-22222222",
    "header": "https://fieldsandrudd.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNnRhRWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--e1c6729b9f26552c46e6f5f7eb4b2c34e0a5d08e/banner-default.jpg",
    "logo": "https://restaurant2.shopespot.com/uploads/default/content_images/default-logo.png",
    "description": "This is a test store for form generation.",
    "address": "123 Test St, Test City, Test Country",
    "percentage_usage_fee": 0,
    "fixed_usage_fee": 0,
    "schedule_ranges": {},
    "updated_at": "2026-02-26 20:27:07",
    "created_at": "2026-02-26 20:27:07",
    "id": 312,
    "ribbon": null
  }
}
```

