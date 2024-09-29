const redis = require('redis');
const client = redis.createClient({ host: 'redis-service', port: 6379 });

// Cache query results for faster access
client.get('myKey', (err, data) => {
    if (data) {
        console.log('Cached data:', data);
    } else {
        // Query the database and cache the result
        const result = db.query('SELECT * FROM table');
        client.setex('myKey', 3600, JSON.stringify(result));
    }
});
