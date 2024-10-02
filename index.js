const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const app = express();
const   
 port = 3000;

// Middleware for parsing JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the 'public' directory
app.use(express.static('public')); 


// Configure Multer for file uploads
const upload = multer({
  dest: 'uploads/',
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'audio/wav' || file.mimetype === 'audio/mpeg') {
      cb(null, true);
    } else {
      cb(new Error('Invalid file format. Only WAV and MPEG audio files are allowed.'));
    }
  }
});

// Get route for the main page
app.get('/', (req, res) => {
  res.render('index.ejs'); // Assuming you have an 'index.ejs' template
});

// Post route for handling audio uploads
app.post('/upload', upload.single('audio'), async (req, res) => {
  try {
    const originalname = req.file.originalname;
    const filename = req.file.filename;
    const filepath = path.join(__dirname, 'uploads', filename);

    // Process the uploaded audio file (e.g., save to database, analyze content)
    console.log(`File '${originalname}' saved as '${filepath}'`);

    res.json({ message: 'File uploaded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error processing the file' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});