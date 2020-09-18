/*
 * @Author: Xiaochun 
 * @Date: 2020-09-18 14:35:08 
 * @Last Modified by: Xiaochun
 * @Last Modified time: 2020-09-18 14:45:30
 */

'use strict'
require('./index.css')
require('page/common/nav-simple/index.js');

var _mm = require('util/mm.js');

/*传入参数进行不同的结果页面显示*/
$(function(){
  var type = _mm.getUrlParam('type') || 'default',
      $element = $('.'+type+'-success');
  //显示对应的提示元素
  $element.show();
})
