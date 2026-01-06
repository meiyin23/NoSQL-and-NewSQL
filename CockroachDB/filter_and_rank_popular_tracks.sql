SELECT
    track_name,
    track_artist,
    track_popularity,
    danceability,
    energy,
    RANK() OVER (ORDER BY track_popularity DESC) AS popularity_rank,
    DENSE_RANK() OVER (
        PARTITION BY playlist_genre
        ORDER BY track_popularity DESC
    ) AS genre_popularity_rank
FROM mytable
WHERE track_popularity > 70
  AND danceability > 0.7
  AND energy > 0.8
  AND CAST(LEFT(track_album_release_date, 4) AS INT) >= 2019
ORDER BY track_popularity DESC
LIMIT 20;
