{
  $match: {
    $expr: {
      $and: [
        { $gt: ["$track_popularity", 70] },
        { $ne: ["$track_id", "$related_tracks.track_id"] }
      ]
    }
  }
}
