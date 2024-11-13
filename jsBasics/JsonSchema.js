class JsonSchema{
    static schemaOfPost = {
        //"$schema": "http://json-schema.org/draft-04/schema#",
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "userId": {
              "type": "number"
            },
            "id": {
              "type": "number"
            },
            "title": {
              "type": "string"
            },
            "body": {
              "type": "string"
            }
          },
          "required": [
            "userId",
            "id",
            "title",
            "body"
          ]
        }
    };

    static schemaOfUser = {
      //"$schema": "http://json-schema.org/draft-04/schema#",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number"
          },
          "name": {
            "type": "string"
          },
          "username": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "address": {
            "type": "object",
            "properties": {
              "street": {
                "type": "string"
              },
              "suite": {
                "type": "string"
              },
              "city": {
                "type": "string"
              },
              "zipcode": {
                "type": "string"
              },
              "geo": {
                "type": "object",
                "properties": {
                  "lat": {
                    "type": "string"
                  },
                  "lng": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "phone": {
            "type": "string"
          },
          "website": {
            "type": "string"
          },
          "company": {
            "type": "object",
            "properties": {
              "name": {
                "type": "string"
              },
              "catchPhrase": {
                "type": "string"
              },
              "bs": {
                "type": "string"
              }
            }
          }
        },
        "required": [
          "id",
          "name",
          "username",
          "email",
          "address",
          "phone",
          "website",
          "company"
        ]
      }
    };
}
module.exports = JsonSchema;