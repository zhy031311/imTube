webpackJsonp([15],{"0e7n":function(n,r,e){"use strict";function o(n){e("ehnh")}Object.defineProperty(r,"__esModule",{value:!0});var t=e("NPwF"),i=(t.c,t.d,t.b,t.h,t.i,e("kNDc")),a=e("LgOF"),s=e("rGqP"),A=e("UIMx"),l=e("dgEa"),c={components:{Grid:i.a,GridItem:a.a,Divider:s.a,Tabbar:A.a,TabbarItem:l.a},data:function(){return{}}},d=function(){var n=this,r=n.$createElement,o=n._self._c||r;return o("div",{attrs:{id:"downGames"}},[o("div",{staticClass:"topNotice"},[n._v("选择下载")]),n._v(" "),o("divider",[n._v(n._s("点击下载APP"))]),n._v(" "),o("grid",[o("grid-item",{attrs:{link:"/"}},[o("img",{attrs:{slot:"icon",src:e("hP/u")},slot:"icon"}),n._v(" "),o("span",{attrs:{slot:"label"},slot:"label"},[n._v(n._s("369互娱麻将"))])]),n._v(" "),o("grid-item",{attrs:{link:{path:"/"}}},[o("img",{attrs:{slot:"icon",src:e("v6Wa")},slot:"icon"}),n._v(" "),o("span",{attrs:{slot:"label"},slot:"label"},[n._v(n._s("369互娱三张"))])]),n._v(" "),o("grid-item",{attrs:{link:"/"}},[o("img",{attrs:{slot:"icon",src:e("hP/u")},slot:"icon"}),n._v(" "),o("span",{attrs:{slot:"label"},slot:"label"},[n._v(n._s("369互娱斗地主"))])])],1),n._v(" "),o("tabbar",{staticClass:"vux-demo-tabbar",attrs:{"icon-class":"vux-center"}},[o("tabbar-item",[o("span",{attrs:{slot:"label"},slot:"label"},[o("span",{staticClass:"vux-demo-tabbar-component"},[n._v(n._s("敬请期待更多精品游戏"))])])])],1)],1)},C=[],p={render:d,staticRenderFns:C},u=p,b=e("VU/8"),f=o,v=b(c,u,!1,f,null,null);r.default=v.exports},EhlT:function(n,r,e){r=n.exports=e("FZ+f")(!0),r.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/* @import '~vux/src/styles/1px.less'; */\n.divider, .topNotice{\r\n  background-color: #377299;\r\n  color: #fff;\n}\n.topNotice{\r\n  text-align:center;\r\n  color:#fff;\r\n  padding-top:10px;\r\n  font-family: Microsoft YaHei;\r\n  font-size:28px;\n}\n.grid-center {\r\n  display: block;\r\n  text-align: center;\r\n  color: #666;\n}\n#downGames .vux-divider{\r\n  background-color: #377299;\r\n  color:#f5f8fc;\r\n  height:16px;\n}\n#downGames .vux-divider:after, #downGames .vux-divider:before{\r\n  top:0\n}\n#downGames .weui-grid:before{\r\n  border:none\n}\n.weui-grids .weui-grid__icon{\r\n  width:88px;\r\n  height:88px\n}\n.weui-grid span{\r\n  color: #686868;\n}\n#downGames .vux-tabbar-simple{\r\n  background-color:#223e51;\n}\n#downGames .weui-tabbar__label{\r\n  color: #67c1f5;\n}\r\n","",{version:3,sources:["E:/subline items/projectPath/src/page/downGames/gameList.vue"],names:[],mappings:";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA+CA,yCAAyC;AACzC;EACE,0BAA0B;EAC1B,YAAY;CACb;AACD;EACE,kBAAkB;EAClB,WAAW;EACX,iBAAiB;EACjB,6BAA6B;EAC7B,eAAe;CAChB;AACD;EACE,eAAe;EACf,mBAAmB;EACnB,YAAY;CACb;AACD;EACE,0BAA0B;EAC1B,cAAc;EACd,YAAY;CACb;AACD;EACE,KAAK;CACN;AACD;EACE,WAAW;CACZ;AACD;EACE,WAAW;EACX,WAAW;CACZ;AACD;EACE,eAAe;CAChB;AACD;EACE,yBAAyB;CAC1B;AACD;EACE,eAAe;CAChB",file:"gameList.vue",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/* @import '~vux/src/styles/1px.less'; */\n.divider, .topNotice{\r\n  background-color: #377299;\r\n  color: #fff;\n}\n.topNotice{\r\n  text-align:center;\r\n  color:#fff;\r\n  padding-top:10px;\r\n  font-family: Microsoft YaHei;\r\n  font-size:28px;\n}\n.grid-center {\r\n  display: block;\r\n  text-align: center;\r\n  color: #666;\n}\n#downGames .vux-divider{\r\n  background-color: #377299;\r\n  color:#f5f8fc;\r\n  height:16px;\n}\n#downGames .vux-divider:after, #downGames .vux-divider:before{\r\n  top:0\n}\n#downGames .weui-grid:before{\r\n  border:none\n}\n.weui-grids .weui-grid__icon{\r\n  width:88px;\r\n  height:88px\n}\n.weui-grid span{\r\n  color: #686868;\n}\n#downGames .vux-tabbar-simple{\r\n  background-color:#223e51;\n}\n#downGames .weui-tabbar__label{\r\n  color: #67c1f5;\n}\r\n"],sourceRoot:""}])},ehnh:function(n,r,e){var o=e("EhlT");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);e("rjj0")("f45b22f0",o,!0)},"hP/u":function(n,r,e){n.exports=e.p+"static/img/majiangicon.e01aa7f.png"}});
//# sourceMappingURL=15.e60465396141a12c3315.js.map