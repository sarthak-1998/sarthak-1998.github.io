const fs = require('fs');
const sass = require('sass');

const filesToCopy = ['index.html', 'main.js', '404.html', 'script.js'];
const sourceDir = './src';
const assetsDir = 'assets';
const targetDir = './';

filesToCopy.forEach(f => {
  fs.copyFileSync(`${sourceDir}/${f}`, `${targetDir}/${f}`);
});

fs.readdir(`${sourceDir}/${assetsDir}`, (err, files) => {
  if (err) {
    console.log(`ERROR reading assets directory: ${err}`);
    return;
  }

  files.forEach(f => {
    fs.copyFileSync(
      `${sourceDir}/${assetsDir}/${f}`,
      `${targetDir}/${assetsDir}/${f}`
    );
  });
});

try {
  const result = sass.compile(`${sourceDir}/style.scss`, {
    style: 'compressed'
  });

  fs.writeFileSync(`${targetDir}/style.css`, result.css);
  console.log('SUCCESS: style.css file generated!');
} catch (err) {
  console.log(`ERROR: During style.css file generation- ${err}`);
}

console.log('SUCCESS: Website Compiled !!');