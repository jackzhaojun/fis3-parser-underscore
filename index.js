/**
 * @file   编译underscore模板文件
 * @author 赵军 zhaojunbest@126.com
 * @date 15/12/31  21:49
 */
"use strict";
var _ = require('underscore');
module.exports = function (content) {
    _.templateSettings = {
        evaluate: /\{%([\s\S]+?)\%\}/g,
        interpolate: /\{%=([\s\S]+?)\%\}/g,
        escape: /\{%-([\s\S]+?)%\}/g
    };
    var fn = 'module.exports = ' + _.template(content).source;
    return fn;
}