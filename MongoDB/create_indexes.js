// Single-field index on popularity
db.tracks.createIndex({ track_popularity: 1 });

// Compound index on danceability and energy
db.tracks.createIndex({ danceability: 1, energy: 1 });

// Single-field index on playlist genre
db.tracks.createIndex({ playlist_genre: 1 });
