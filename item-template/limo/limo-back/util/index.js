var path = require('path');
/**
 * [获取绝对路径]
 * @param {String} relativePath [相对于根目录的路径]
 */
function relativePath(relativePath){
    return path.join(__dirname,'../',relativePath);
}

module.exports = {
    relativePath:relativePath
}