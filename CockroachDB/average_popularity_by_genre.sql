SELECT
    playlist_genre,
    COUNT(track_id) AS total_tracks,
    AVG(track_popularity) AS avg_popularity,
    MIN(track_popularity) AS min_popularity,
    MAX(track_popularity) AS max_popularity,
    STDDEV(track_popularity) AS popularity_stddev
FROM mytable
GROUP BY playlist_genre
ORDER BY avg_popularity DESC;