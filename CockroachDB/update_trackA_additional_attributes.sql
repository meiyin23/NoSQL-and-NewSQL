UPDATE mytable
SET additional_attributes = jsonb_build_object(
  'remix_info', 'Special Edition',
  'explicit_content', false,
  'language', 'English',
  'collaborators', jsonb_build_array('Featured Artist 1', 'Featured Artist 2')
)
WHERE track_id = 'test123';
