{
  $unwind: {
    path: "$related_tracks"
  }
}
