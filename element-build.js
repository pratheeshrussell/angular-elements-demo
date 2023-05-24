const fs = require('fs-extra');
const path = require('path');
const concat = require('concat');


const buildFolder = './dist/hello-world/';//end with /
const outputFile = 'hello-world.js';

(async function build() {
    
    // Get file list
    fs.readdir(buildFolder,  async (err, fileList)=> {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        let files = [];
        fileList.filter((file)=> {  
            return file.trim().endsWith(".js");
        }).forEach((file)=> {
            files.push((path.join(buildFolder,file)).trim());
        });

        files = sortArray(files);
        
        await fs.ensureDir('elements-dist');
        await concat(files, `elements-dist/${outputFile}`);
        await fs.copyFile(`${buildFolder}styles.css`, 'elements-dist/styles.css');
    //  await fs.copy(`${buildFolder}/assets/`, 'elements-dist/assets/' );
        console.log('Element built and can be found in folder "elements-dist"');
    }); 
})()

function sortArray(arr) {
    const runtimeIndex = arr.findIndex(item => item.endsWith('runtime.js'));
    const mainIndex = arr.findIndex(item => item.endsWith('main.js'));
  
    if (runtimeIndex !== -1 && mainIndex !== -1) {
      const runtime = arr.splice(runtimeIndex, 1)[0];
      const main = arr.splice(mainIndex, 1)[0];
      arr.push(main);
      arr.unshift(runtime);
    }
  
    return arr;
  }