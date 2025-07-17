const { ContentType, FieldType } = require('@include/hearth');

const boardMembers = new ContentType({
  name: 'board-members',
  singularDisplayName: 'Board Member',
  pluralDisplayName: 'Board Members',
});

boardMembers
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
    name: 'position',
    displayName: 'Position',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'majors',
    displayName: 'Major(s) (separate with commas)',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'minors',
    displayName: 'Minor(s) (separate with commas) (optional)',
    type: FieldType.SHORT_TEXT,
    required: false,
  })
  .createField({
    name: 'grade',
    displayName: 'Grade',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = boardMembers;
