const fs = require('fs');
const csv = require('csv-parser');

const inputFile = 'input_countries.csv';
const canadaFile = 'canada.txt';
const usaFile = 'usa.txt';

if (fs.existsSync(canadaFile)) fs.unlinkSync(canadaFile);
if (fs.existsSync(usaFile)) fs.unlinkSync(usaFile);

fs.createReadStream(inputFile)
  .pipe(csv())
  .on('data', (row) => {
    
    if (row.country === 'Canada') {
      fs.appendFileSync(canadaFile, `${row.country},${row.year},${row.population}\n`);
    }
    
    if (row.country === 'United States') {
      fs.appendFileSync(usaFile, `${row.country},${row.year},${row.population}\n`);
    }
  })
  .on('end', () => {
    console.log('CSV file successfully processed.');
  });
