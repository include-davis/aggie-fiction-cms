const { ContentType, FieldType } = require('@include/hearth');

const blogAuthors = new ContentType({
  name: 'blog-authors',
  singularDisplayName: 'Blog Author',
  pluralDisplayName: 'Blog Authors',
});

blogAuthors
  .createField({
    name: 'image',
    displayName: 'Image',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: 'image_alt_text',
    displayName: 'Image Alt Text',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'name',
    displayName: 'Name',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'description',
    displayName: 'Description',
    type: FieldType.LONG_TEXT,
    required: true,
  });

module.exports = blogAuthors;
