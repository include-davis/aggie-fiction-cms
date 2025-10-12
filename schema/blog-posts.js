const { ContentType, FieldType } = require('@include/hearth');

const blogPosts = new ContentType({
  name: 'blog-posts',
  singularDisplayName: 'Blog Post',
  pluralDisplayName: 'Blog Posts',
});

blogPosts
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
    name: 'title',
    displayName: 'Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'author',
    displayName: 'Author Name',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'date',
    displayName: 'Date (MM/DD/YYYY)',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'description',
    displayName: 'Description',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'post_content',
    displayName: 'Post Content',
    type: FieldType.LONG_TEXT,
    required: true,
  })
  .createField({
    name: 'categories',
    displayName: 'Categories (separate with commas) (optional)',
    type: FieldType.SHORT_TEXT,
    required: false,
  });

module.exports = blogPosts;
