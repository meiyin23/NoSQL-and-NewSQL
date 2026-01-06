UPDATE mytable
SET additional_attributes = jsonb_build_object(
  'language', 'en',
  'explicit', true
)
WHERE track_id = 'test124';
