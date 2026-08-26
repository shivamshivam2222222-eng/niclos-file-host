const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// ============================================================
// 🔑 CLOUDINARY CONFIG — TERA SAHI CLOUD NAME
// ============================================================
cloudinary.config({
    cloud_name: 'hmburijb',  // ✅ Ab sahi hai
    api_key: '491437136384661',
    api_secret: 'WWgWP_wegZMb4ZMtbF9Eo8YHDmk'
});

const upload = multer({
    dest: 'uploads/',
    limits: { fileSize: 1 * 1024 * 1024 * 1024 }
});

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/upload', upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    try {
        const result = await cloudinary.uploader.upload(req.file.path, {
            public_id: 'niclos_file',
            overwrite: true,
            invalidate: true,
            resource_type: 'auto'
        });

        fs.unlinkSync(req.file.path);

        res.json({
            success: true,
            link: result.secure_url,
            public_id: result.public_id,
            originalName: req.file.originalname
        });

    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({
            error: error.message,
            details: error.stack
        });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ NICLOS running on http://localhost:${PORT}`);
});
