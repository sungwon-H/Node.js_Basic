const dep2 = require('./Dep2');
console.log('require dep2', dep2);
module.exports = () => {
    console.log('dep2',dep2);
};
