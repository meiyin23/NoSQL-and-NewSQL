db.tracks.aggregate([
  {
    $group: {
      _id: "$playlist_genre",
      avgPopularity: { $avg: "$track_popularity" }
    }
  },
  {
    $sort: { avgPopularity: -1 }
  }
]);
