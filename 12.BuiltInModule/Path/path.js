const path = require('path');

const string = __filename;

console.log('path.sep:',path.sep);
console.log('path.delimiter:',path.delimiter);
console.log('----------------------------------');
console.log('path.dirname():', path.dirname(string));
console.log('path.extname():',path.extname(string));
console.log('path.basename():',path.basename(string));
console.log('path.basename - extname:', path.basename(string, path.extname(string)));
console.log('------------------------------------------------------------');
console.log('path.parse():',path.parse(string));
console.log('path.format():', path.format({
    dir: 'D:\Node.js_Basic\12.BuiltInModule\Path\path.js',
    name: 'path',
    ext: '.js',
}));
console.log('path.normalize():', path.normalize('D://Node.js_Basic\\\\12.BuiltInModule\\\Path\\\path.js'));
console.log('-------------------------------------------------------');
console.log('path.isAbsolute(D:\\)',path.isAbsolute('D:\\'));
console.log('path.isAbsolute(./home)',path.isAbsolute('./home'));
console.log('---------------------------------');
console.log('path.relative():', path.relative('D:\\Node.js_Basic\\12.BuiltInModule\\Path\\path.js', 'D:\\'));
console.log('path.join():',path.join(__dirname,'..','..','/users','.','/path'));
console.log('path.resolve():',path.resolve(__dirname,'..','users','.','/path'));