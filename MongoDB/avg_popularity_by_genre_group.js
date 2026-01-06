{
  $group: {
    _id: "$playlist_genre",
    avgPopularity: { $avg: "$track_popularity" }
  }
}
