const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
 HEAD:public/app.js
const port = process.env.PORT || 3000;
 d73568ba1bfbaee3ac7116064965898759af0f48:app.js
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});