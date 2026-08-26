const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

// Storage config
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadDir),
    filename: (req, file, cb) => {
        const unique = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, unique + path.extname(file.originalname));
    }
});

const upload = multer({
    storage,
    limits: { fileSize: 1 * 1024 * 1024 * 1024 }, // 1 GB
});

// Serve frontend
app.use(express.static(__dirname + '/public'));

// Upload endpoint
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    const link = `${req.protocol}://${req.get('host')}/files/${req.file.filename}`;
    res.json({ link });
});

// Serve files
app.use('/files', express.static(uploadDir));

app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ NICLOS server running on http://localhost:${PORT}`);
});
