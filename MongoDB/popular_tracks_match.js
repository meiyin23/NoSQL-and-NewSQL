{
  track_popularity: { $gt: 70 },
  danceability: { $gt: 0.7 },
  energy: { $gt: 0.8 },
  track_album_release_date: { $gte: "2019" }
}
