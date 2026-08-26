# NICLOS - Premium File Hosting

🚀 **Fast, secure, and beautiful file hosting service**

## Features

✅ Drag & drop file uploads  
✅ Up to 1 GB file size  
✅ Instant shareable links  
✅ Beautiful glass-morphism UI  
✅ Progress tracking  
✅ Copy to clipboard  
✅ Any file type supported  

## Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start server
npm start
```

Server runs on `http://localhost:3000`

## Deployment

### Railway.app (Recommended)
1. Go to [railway.app](https://railway.app)
2. Create new project → Import from GitHub
3. Connect this repo
4. Auto-deploys on push
5. Get live URL instantly

### Render.com
1. Create new Web Service
2. Connect GitHub repo
3. Build: `npm install`
4. Start: `node server.js`

### Heroku
```bash
heroku login
heroku create your-app-name
git push heroku main
```

## Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JS
- **Backend**: Express.js
- **File Storage**: Multer
- **Styling**: Modern glassmorphism design

## API Endpoints

### POST `/upload`
Upload a file and get a shareable link.

**Request:**
- multipart/form-data with `file` field

**Response:**
```json
{
  "link": "http://yourdomain.com/files/1234567890-987654321.jpg"
}
```

### GET `/files/:filename`
Download an uploaded file.

## Environment Variables

- `PORT` - Server port (default: 3000)

## License

MIT
