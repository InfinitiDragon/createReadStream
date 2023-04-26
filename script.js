const fs = require('fs');

function countWordsInFile(filePath) {
  let wordCount = 0;
  
  const readStream = fs.createReadStream(filePath, { encoding: 'utf-8' });
  
  readStream.on('data', (chunk) => {
    const words = chunk.toString().split(' ');
    words.forEach((word) => {
      if (word.trim() !== '' && !word.includes('\n')) {
        wordCount++;
      }
    });
  });
  
  readStream.on('end', () => {
    console.log(`The file ${filePath} contains ${wordCount} words.`);
  });
}

countWordsInFile('Book.txt');
