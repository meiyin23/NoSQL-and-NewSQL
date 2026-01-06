let start = Date.now();

db.performance_test_collection.insertMany(bulkData);

let end = Date.now();
print("Bulk insertion time (ms): " + (end - start));
