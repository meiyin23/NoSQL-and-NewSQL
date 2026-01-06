SELECT
  track_id,
  track_name,
  additional_attributes->>'remix' AS remix,
  additional_attributes->>'language' AS language,
  additional_attributes->>'mood' AS mood,
  COALESCE((additional_attributes->>'explicit')::BOOL, false) AS explicit_flag
FROM mytable
WHERE additional_attributes IS NOT NULL
ORDER BY track_id;
