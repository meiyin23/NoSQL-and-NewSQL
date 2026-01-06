{
  $project: {
    track_artist: 1,
    track_1: "$track_name",
    track_2: "$related_tracks.track_name",
    track_popularity: 1
  }
}
