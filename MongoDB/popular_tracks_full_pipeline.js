db.tracks.aggregate([
  {
    $match: {
      track_popularity: { $gt: 70 },
      danceability: { $gt: 0.7 },
      energy: { $gt: 0.8 },
      track_album_release_date: { $gte: "2019" }
    }
  },
  {
    $sort: { track_popularity: -1 }
  },
  {
    $limit: 20
  },
  {
    $project: {
      _id: 0,
      track_name: 1,
      track_artist: 1,
      track_popularity: 1,
      danceability: 1,
      energy: 1,
      playlist_genre: 1
    }
  }
]);
