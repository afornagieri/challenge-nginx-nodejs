## Running

```yaml
docker-compose up -d
```

***

## Endpoints

### Home page
### GET localhost:8080/index

### GET localhost:8080/api/names
#### Response example:
```JSON
{ "id": "1", "name": "Maria"}
```

### POST localhost:8080/api/name
#### Request body example
```JSON
{ "name": "João" }
```
