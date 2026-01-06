const result = db.tracks.aggregate([
  {
    $match: {
      $or: [
        { remix: { $exists: true } },
        { language: { $exists: true } },
        { mood: { $exists: true } }
      ]
    }
  },
  {
    $project: {
      track_id: 1,
      track_name: 1,
      remix: { $ifNull: ["$remix", "N/A"] },
      language: { $ifNull: ["$language", "N/A"] },
      explicit: { $ifNull: ["$explicit", false] },
      mood: { $ifNull: ["$mood", "Unknown"] }
    }
  },
  {
    $sort: { track_id: 1 }
  }
]).toArray(); // convert cursor to array to force execution
