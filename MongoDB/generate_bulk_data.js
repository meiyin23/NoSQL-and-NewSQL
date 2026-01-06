let bulkData = [];

for (let i = 1; i <= 1000; i++) {
  bulkData.push({
    track_id: "test" + i,
    track_name: "Test Track " + i,
    track_popularity: Math.floor(Math.random() * 100),
    insert_time: new Date()
  });
}
