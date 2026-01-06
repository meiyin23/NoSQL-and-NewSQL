EXPLAIN ANALYZE
SELECT
  t1.track_artist,
  t1.track_name AS track_1,
  t2.track_name AS track_2,
  t1.track_popularity
FROM mytable t1
JOIN mytable t2
  ON t1.track_artist = t2.track_artist
  AND t1.track_id <> t2.track_id
WHERE t1.track_popularity > 70
ORDER BY t1.track_popularity DESC
LIMIT 50;
