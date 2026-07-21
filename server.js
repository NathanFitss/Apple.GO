const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Mengatur folder static
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Rute utama
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Server berjalan
app.listen(PORT, () => {
    console.log(`Apple.GO Server is running on http://localhost:${PORT}`);
    console.log(`Tekan Ctrl+C untuk menghentikan server.`);
});
  
