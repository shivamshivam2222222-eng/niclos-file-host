# 🚀 NICLOS - Premium File Hosting

A modern, fast, and secure file hosting service built with Node.js and Express.

## Features

✨ **Premium UI** - Glassmorphism design with smooth animations  
📤 **Drag & Drop** - Easy file uploading  
🔗 **Shareable Links** - Get instant download links  
📁 **Large Files** - Support up to 1 GB  
🤖 **AI Compatible** - Perfect for sharing with AI tools  
🔒 **Self-Hosted** - Full control over your data  

## Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Run server
npm start
```

Open `http://localhost:3000` in your browser.

### Deploy to Cloud

**Railway.app** (Recommended):
1. Go to [railway.app](https://railway.app)
2. Create new project from GitHub
3. Select this repository
4. Deploy! 🎉

**Render.com**:
1. Go to [render.com](https://render.com)
2. Create new Web Service
3. Connect GitHub repo
4. Start command: `npm start`
5. Deploy! 🎉

**Heroku**:
```bash
heroku create your-app-name
git push heroku main
```

## API

### Upload File
```
POST /upload
Content-Type: multipart/form-data

Body: form-data with 'file' field

Response:
{
  "link": "https://your-domain.com/files/unique-filename"
}
```

## Technologies

- **Backend**: Node.js + Express
- **File Upload**: Multer
- **Frontend**: Vanilla JS + CSS3
- **Styling**: Glassmorphism design

## License

MIT
