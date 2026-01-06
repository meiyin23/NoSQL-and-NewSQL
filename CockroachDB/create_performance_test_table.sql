CREATE TABLE performance_test_table (
  test_id SERIAL PRIMARY KEY,
  track_id VARCHAR(22),
  track_name VARCHAR(144),
  track_popularity INTEGER,
  insert_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
