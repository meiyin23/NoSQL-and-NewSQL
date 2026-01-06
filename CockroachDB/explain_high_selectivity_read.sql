EXPLAIN ANALYZE
SELECT
  track_id,
  track_name,
  track_artist,
  track_popularity
FROM mytable
WHERE track_popularity >= 80
  AND danceability BETWEEN 0.7 AND 0.9
  AND energy BETWEEN 0.8 AND 1.0
  AND playlist_genre = 'pop'
ORDER BY track_popularity DESC
LIMIT 50;
