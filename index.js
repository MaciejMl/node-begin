const os = require('os');
const userInfo = os.userInfo();
console.log('Platform: ', os.platform());
console.log('Arch: ', os.arch());
console.log('UsrInfo: ', os.userInfo());
console.log('UsrLogin: ', userInfo.username);
console.log('UsrHomedir: ', userInfo.homedir);
