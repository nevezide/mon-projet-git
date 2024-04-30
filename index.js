const fs = require('fs');
const path = require('path');

const STUDENTS_FILES_PATH = 'students';

<<<<<<< HEAD
const studentsFiles = ['Janel'
=======
const studentsFiles = [
    'marie-E',
    "maksym",
    'phuong',
    'Nafion',
    'nicolas',
    'laure',
    'benjamin',
    'marionSlay',
   "daniel"
>>>>>>> 5515a0027d7f889bfe83ddce28cd1e785ee759f6
];

if (studentsFiles.length === 0) {
    console.log('No student file provided');
    process.exit(0);
}

for (let i = 0 ; i < studentsFiles.length ; i++) {
    const fileName = studentsFiles[i];
    
    try {
        const fileContent = fs.readFileSync(
            path.join(STUDENTS_FILES_PATH, fileName),
            'utf-8'
        );

        console.log(`---- Student file ${fileName} content ----`);
        console.log(fileContent);

    } catch (err) {
        console.error(`Error when reading file ${fileName}`);
        console.error(err);
    }
}
