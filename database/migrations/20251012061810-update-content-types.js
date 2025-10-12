
  module.exports = {
    async up(db, client) {
      // delete step 

      // update step 
      await db.command({
        collMod: "blog-authors",
        validator: {
          "$jsonSchema": {
            "bsonType": "object",
            "required": [
              "_name",
              "image",
              "image_alt_text",
              "name",
              "description"
            ],
            "properties": {
              "_id": {
                "bsonType": "objectId"
              },
              "_name": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "_published": {
                "bsonType": "bool"
              },
              "_created_at": {
                "bsonType": "string",
                "description": "must be a string and match the ISO 8601 format",
                "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"
              },
              "_last_modified": {
                "bsonType": "string",
                "description": "must be a string and match the ISO 8601 format",
                "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"
              },
              "image": {
                "bsonType": "array",
                "items": {
                  "bsonType": "objectId"
                }
              },
              "image_alt_text": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "name": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "description": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              }
            }
          }
        }
      });

      // create step 
    },
    async down(db, client) {
      // delete step 

      // update step 
      await db.command({
        collMod: "blog-authors",
        validator: {
          "$jsonSchema": {
            "bsonType": "object",
            "required": [
              "_name",
              "image",
              "image_alt_text",
              "name",
              "Description"
            ],
            "properties": {
              "_id": {
                "bsonType": "objectId"
              },
              "_name": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "_published": {
                "bsonType": "bool"
              },
              "_created_at": {
                "bsonType": "string",
                "description": "must be a string and match the ISO 8601 format",
                "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"
              },
              "_last_modified": {
                "bsonType": "string",
                "description": "must be a string and match the ISO 8601 format",
                "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"
              },
              "image": {
                "bsonType": "array",
                "items": {
                  "bsonType": "objectId"
                }
              },
              "image_alt_text": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "name": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "Description": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              }
            }
          }
        }
      });
      
      // create step     
    }
  };
  