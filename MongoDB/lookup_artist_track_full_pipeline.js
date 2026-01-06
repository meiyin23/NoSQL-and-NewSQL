db.tracks.aggregate([
  {
    $lookup: {
      from: "tracks",
      localField: "track_artist",
      foreignField: "track_artist",
      as: "related_tracks"
    }
  },
  {
    $unwind: {
      path: "$related_tracks"
    }
  },
  {
    $match: {
      $expr: {
        $and: [
          { $gt: ["$track_popularity", 70] },
          { $ne: ["$track_id", "$related_tracks.track_id"] }
        ]
      }
    }
  },
  {
    $project: {
      track_artist: 1,
      track_1: "$track_name",
      track_2: "$related_tracks.track_name",
      track_popularity: 1
    }
  },
  {
    $sort: {
      track_popularity: -1
    }
  },
  {
    $limit: 50
  }
]);
