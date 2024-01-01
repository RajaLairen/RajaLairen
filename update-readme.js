const fs = require('fs');

const currentDate = new Date().toUTCString();
const readmePath = 'README.md';

fs.readFile(readmePath, 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading README.md:', err);
    process.exit(1);
  }

  const updatedContent = data.replace(/<!-- last-update -->/,'Hello World');
  
  fs.writeFile(readmePath, updatedContent, 'utf-8', (writeErr) => {
    if (writeErr) {
      console.error('Error updating README.md:', writeErr);
      process.exit(1);
    }

    console.log('README.md updated successfully!');
  });
});
