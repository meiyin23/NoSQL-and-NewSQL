db.tracks.find(
  {
    track_popularity: { $gte: 80 },
    danceability: { $gte: 0.7, $lte: 1.0 },
    energy: { $gte: 0.8, $lte: 1.0 },
    playlist_genre: "pop"
  },
  {
    track_id: 1,
    track_name: 1,
    track_artist: 1,
    track_popularity: 1,
    _id: 0
  }
)
.sort({ track_popularity: -1 })
.limit(50)
.maxTimeMS(60000);
