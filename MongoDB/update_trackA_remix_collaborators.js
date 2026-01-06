let startA = new Date();

let resultA = db.tracks.updateOne(
  { track_id: "test321" },
  {
    $set: {
      remix: "Acoustic Version",
      collaborators: ["Artist B", "Artist C"]
    }
  }
);

let endA = new Date();
print("Track A update time (ms):", endA - startA);
printjson(resultA);
