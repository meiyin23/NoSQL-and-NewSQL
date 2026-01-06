{
  _id: {
    artist: "$track_artist",
    album: "$track_album_name"
  },
  tracks: {
    $push: {
      track_name: "$track_name",
      popularity: "$track_popularity",
      duration: "$duration_ms"
    }
  }
}
