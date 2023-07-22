const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');

const getImagePaths = () => {
  const imageFiles = fs.readdirSync(imagesDir).filter(file => file.match(/\.(png|jpe?g|svg)$/i));
  return imageFiles.map(file => `/images/${file}`);
};

const imagePaths = getImagePaths();
console.log(imagePaths);
