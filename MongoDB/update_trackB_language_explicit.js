let startB = new Date();

let resultB = db.tracks.updateOne(
  { track_id: "test321" },
  {
    $set: {
      language: "en",
      explicit: true
    }
  }
);

let endB = new Date();
print("Track B update time (ms):", endB - startB);
printjson(resultB);
