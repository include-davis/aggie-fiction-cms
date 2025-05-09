const { ContentType, FieldType } = require('@include/hearth');

const alumniCards = new ContentType({
  name: 'alumni-cards',
  singularDisplayName: 'Alumni Card',
  pluralDisplayName: 'Alumni Cards',
});

alumniCards
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
    name: 'position_1',
    displayName: 'First Listed Position',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'position_2',
    displayName: 'Second Listed Position (Optional)',
    type: FieldType.SHORT_TEXT,
    required: false,
  })
  .createField({
    name: 'position_3',
    displayName: 'Third Listed Position (Optional)',
    type: FieldType.SHORT_TEXT,
    required: false,
  })
  .createField({
    name: 'description',
    displayName: 'Description',
    type: FieldType.LONG_TEXT,
    required: true,
  })
  .createField({
    name: 'instagram_username',
    displayName: 'Instagram Username (Optional)',
    type: FieldType.SHORT_TEXT,
    required: false,
  })
  .createField({
    name: 'linkedin_username',
    displayName: 'LinkedIn Username (Optional)',
    type: FieldType.SHORT_TEXT,
    required: false,
  });

module.exports = alumniCards;
