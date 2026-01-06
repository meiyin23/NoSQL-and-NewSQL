SELECT DISTINCT
    track_artist,
    track_album_name,
    track_name
FROM mytable
WHERE track_artist = 'Ed Sheeran'
ORDER BY track_album_name, track_name;