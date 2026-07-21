const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Route utama
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Jalankan server lokal
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Apple.GO Server running on http://localhost:${PORT}`);
    });
}

// Export module wajib Vercel
module.exports = app;
