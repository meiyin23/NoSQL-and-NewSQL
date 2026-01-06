EXPLAIN
INSERT INTO performance_test_table (track_id, track_name, track_popularity)
SELECT
  'test_' || generate_series(1, 1000),
  'Test Track ' || generate_series(1, 1000),
  (random() * 100)::INTEGER
FROM generate_series(1, 1000);
