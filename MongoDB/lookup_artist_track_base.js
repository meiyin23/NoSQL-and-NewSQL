{
  $lookup: {
    from: "tracks",
    localField: "track_artist",
    foreignField: "track_artist",
    as: "related_tracks"
  }
}
