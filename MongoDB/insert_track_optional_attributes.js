const start = new Date();

db.tracks.insertOne({
  track_id: "test321",
  track_name: "Test Song",
  track_artist: "Test Artist",
  track_popularity: 50,
  track_album_id: "album123",
  track_album_name: "Test Album",
  track_album_release_date: "2024-01-01",
  playlist_name: "Test Playlist",
  playlist_id: "playlist123",
  playlist_genre: "pop",
  playlist_subgenre: "dance pop",
  danceability: 0.75,
  energy: 0.85,
  key: 5,
  loudness: -4.5,
  mode: 1,
  speechiness: "0.5",
  acousticness: "0.1",
  instrumentalness: "0.001",
  liveness: "0.2",
  valence: 0.6,
  tempo: 120.0,
  duration_ms: 180000
});

const end = new Date();
print("Insertion time (ms):", end - start);
