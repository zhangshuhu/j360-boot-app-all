webpackJsonp([3],{323:function(n,t,e){function a(n){e(360)}var i=e(15)(e(332),e(377),a,null,null);n.exports=i.exports},332:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(186),i=e(185),r=e(365),o=e.n(r);t.default={components:{vDetail:o.a},data:function(){return{filters:{pid:"",name:""},total:0,page:1,tableHeight:"100%",tableLoading:!1,tableList:[],isShowForm:!1,data:{},zipLoading:!1}},methods:{handleCurrentChange:function(n){this.page=n,this.fetchList()},fetchList:function(){var n=this;n.tableHeight=document.getElementById("container").clientHeight-77-42-15;var t={pid:n.filters.pid,offset:0,size:10,name:n.filters.name};t.offset=(n.page-1)*t.size,n.tableLoading=!0,e.i(i.a)("proPreList",t,n,function(t){n.tableLoading=!1;try{var i=(t.error,t.status,t.data);n.total=i.totalElements,n.tableList=i.content.map(function(n){return n.startTimeFormat=e.i(a.b)(new Date(Number(n.startTime)),"yyyy-MM-dd hh:mm:ss"),n.endTimeFormat=e.i(a.b)(new Date(Number(n.endTime)),"yyyy-MM-dd hh:mm:ss"),n.status=n.status+"",n})}catch(n){a.a.jsErrNotify(n)}})},resetSearch:function(){this.filters={pid:"",name:""},this.fetchList()},showForm:function(n){this.isShowForm=!0,this.data=n},handlePosition:function(n,t){var r=this,o=new Object;o.id=n.id,o.type=t,e.i(i.b)("proPreMove",o,r,function(n){try{r.$message.success("操作成功"),r.fetchList()}catch(n){a.a.jsErrNotify(n)}})},handleStatus:function(n){var t=this;console.log(Number(n.status));var r=0==Number(n.status)?1:0,o=new Object;o.id=n.id,o.type=r,e.i(i.b)("proPreOffLine",o,t,function(n){try{t.$message.success("操作成功"),t.fetchList()}catch(n){a.a.jsErrNotify(n)}})},handleDel:function(n){var t=this;if(0==n.status)return void t.$message.error("请先下架");t.$confirm("此操作将删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.tableLoading=!0;var r=new Object;r.id=n.id,e.i(i.b)("proPreDelete",r,t,function(n){try{t.$message.success("删除成功"),t.fetchList()}catch(n){a.a.jsErrNotify(n)}})}).catch(function(){})},handleTop:function(n){var t=this,r=new Object;r.id=n.id,r.type=1,e.i(i.b)("proPreTop",r,t,function(n){try{n.error,n.status,n.data;t.$message.success("操作成功"),t.fetchList()}catch(n){a.a.jsErrNotify(n)}})}},mounted:function(){this.fetchList()}}},333:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(186),i=e(185);t.default={name:"vDetail",props:["value","data"],data:function(){return{visible:!1,showLoading:!1,formTitle:"新增预售",formLoading:!1,formRules:{pid:[{validator:function(n,t,e){0==t?e(new Error("请输入商品ID")):e()},trigger:"blur"}]},formData:{id:"",pid:0,startTime:"",endTime:""},inputVisible:!1,inputValue:"",avatarLoading:!1}},computed:{detail:function(){var n=this;if(!n.value)return!1;n.data.id&&n.visible&&(n.formTitle="编辑预售",n.formData=n.data,n.data.startTime>0?n.formData.startTime=new Date(Number(n.data.startTime)):n.formData.startTime="",n.data.endTime>0?n.formData.endTime=new Date(Number(n.data.endTime)):n.formData.endTime="")}},methods:{formSubmit:function(){var n=this;if(!n.formData.startTime||!n.formData.endTime)return void n.$message.error("有效时间不能为空");var t=new Object;t.id=n.formData.id,t.pid=n.formData.pid,t.startTime=e.i(a.b)(n.formData.startTime,"yyyy-MM-dd hh:mm:ss"),t.endTime=e.i(a.b)(n.formData.endTime,"yyyy-MM-dd hh:mm:ss"),n.$refs.formData.validate(function(r){r&&(n.formLoading=!0,e.i(i.b)("proPreSave",t,n,function(t){n.formLoading=!1;try{n.$message.success("提交成功"),n.resetFormData(),n.visible=!1,n.$emit("refresh")}catch(n){a.a.jsErrNotify(n)}}))})},resetFormData:function(){var n=this;n.formTitle="新增预售",n.formData={id:"",pid:"",startTime:"",endTime:""},n.data={}}},watch:{detail:function(n){},value:function(n){this.visible=n},visible:function(n){this.$emit("input",n)}},mounted:function(){this.value&&(this.visible=!0)}}},353:function(n,t,e){t=n.exports=e(316)(!0),t.push([n.i,".table-expand label{width:90px;color:#99a9bf}.table-expand .el-form-item{margin-right:0;margin-bottom:0;width:100%}","",{version:3,sources:["/Users/joeysin/IdeaWorkSpace/IdeaWorkSpaces/ZJ_store_admin/src/components/page/shelf/presale.vue"],names:[],mappings:"AAkPA,oBACI,WAAY,AACZ,aAAe,CAClB,AACD,4BACI,eAAgB,AAChB,gBAAiB,AACjB,UAAY,CACf",file:"presale.vue",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*\n    表格展开部分样式\n*/\n.table-expand label {\n    width: 90px;\n    color: #99a9bf;\n}\n.table-expand .el-form-item {\n    margin-right: 0;\n    margin-bottom: 0;\n    width: 100%;\n}\n\n"],sourceRoot:""}])},360:function(n,t,e){var a=e(353);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e(317)("20be4d9e",a,!0)},365:function(n,t,e){var a=e(15)(e(333),e(372),null,null,null);n.exports=a.exports},372:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("el-dialog",{attrs:{title:n.formTitle,value:n.value},on:{close:n.resetFormData},model:{value:n.visible,callback:function(t){n.visible=t},expression:"visible"}},[e("el-form",{ref:"formData",attrs:{model:n.formData,"label-width":"120px",rules:n.formRules}},[e("el-form-item",{attrs:{label:"商品ID",prop:"pid",required:""}},[""!=n.formData.id?e("el-input",{attrs:{"auto-complete":"off",disabled:!0},model:{value:n.formData.pid,callback:function(t){n.formData.pid=n._n("string"==typeof t?t.trim():t)},expression:"formData.pid"}}):e("el-input",{attrs:{"auto-complete":"off"},model:{value:n.formData.pid,callback:function(t){n.formData.pid=n._n("string"==typeof t?t.trim():t)},expression:"formData.pid"}})],1),n._v(" "),e("el-form-item",{attrs:{label:"有效时间",required:""}},[e("el-date-picker",{attrs:{type:"datetime",format:"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期时间"},model:{value:n.formData.startTime,callback:function(t){n.formData.startTime=t},expression:"formData.startTime"}}),n._v("\n            至\n            "),e("el-date-picker",{attrs:{format:"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:"选择日期时间"},model:{value:n.formData.endTime,callback:function(t){n.formData.endTime=t},expression:"formData.endTime"}})],1)],1),n._v(" "),e("div",{staticClass:"dialog-footer",slot:"footer"},[e("el-button",{attrs:{size:"small"},on:{click:function(t){n.visible=!1}}},[n._v("取消")]),n._v(" "),e("el-button",{attrs:{size:"small",type:"primary",loading:n.formLoading},nativeOn:{click:function(t){n.formSubmit(t)}}},[n._v("提交")])],1)],1)},staticRenderFns:[]}},377:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",[e("el-col",{staticClass:"toolbar",attrs:{span:24}},[e("el-form",{attrs:{inline:!0,model:n.filters}},[e("el-form-item",[e("el-input",{attrs:{placeholder:"请输入商品ID",icon:"circle-close","on-icon-click":n.resetSearch},nativeOn:{keyup:function(t){if(!("button"in t)&&n._k(t.keyCode,"enter",13))return null;n.fetchList(t)}},model:{value:n.filters.pid,callback:function(t){n.filters.pid=t},expression:"filters.pid"}})],1),n._v(" "),e("el-form-item",[e("el-input",{attrs:{placeholder:"请输入商品名称",icon:"circle-close","on-icon-click":n.resetSearch},nativeOn:{keyup:function(t){if(!("button"in t)&&n._k(t.keyCode,"enter",13))return null;n.fetchList(t)}},model:{value:n.filters.name,callback:function(t){n.filters.name=t},expression:"filters.name"}})],1),n._v(" "),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:function(t){n.fetchList()}}},[n._v("查询")])],1),n._v(" "),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:function(t){n.showForm("-1")}}},[n._v("新增")])],1)],1)],1),n._v(" "),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:n.tableLoading,expression:"tableLoading"}],staticClass:"table-expand",staticStyle:{width:"100%"},attrs:{data:n.tableList,stripe:"",border:"","max-height":n.tableHeight}},[e("el-table-column",{attrs:{prop:"id",label:"id",width:"100"}}),n._v(" "),e("el-table-column",{attrs:{prop:"url",label:"商品封面图",width:"200"},scopedSlots:n._u([{key:"default",fn:function(t){return[""!=t.row.coverUrl?e("img",{staticStyle:{width:"100%","vertical-align":"middle",margin:"10px auto"},attrs:{src:t.row.coverUrl,alt:""}}):n._e()]}}])}),n._v(" "),e("el-table-column",{attrs:{prop:"name",label:"商品名称"}}),n._v(" "),e("el-table-column",{attrs:{prop:"authorName",label:"商家"}}),n._v(" "),e("el-table-column",{attrs:{prop:"pid",label:"商品ID"}}),n._v(" "),e("el-table-column",{attrs:{label:"有效时间",width:"100",width:"350"},scopedSlots:n._u([{key:"default",fn:function(t){return[n._v("\n                "+n._s(t.row.startTimeFormat)+" - "+n._s(t.row.endTimeFormat)+"\n            ")]}}])}),n._v(" "),e("el-table-column",{attrs:{label:"操作",width:"290"},scopedSlots:n._u([{key:"default",fn:function(t){return[e("el-button-group",{staticClass:"mt-10"},[e("el-button",{attrs:{size:"small"},on:{click:function(e){n.handlePosition(t.row,1)}}},[n._v("上移")]),n._v(" "),e("el-button",{attrs:{size:"small"},on:{click:function(e){n.handlePosition(t.row,0)}}},[n._v("下移")]),n._v(" "),e("el-button",{attrs:{size:"small"},on:{click:function(e){n.showForm(t.row)}}},[n._v("编辑")])],1),n._v(" "),e("el-button-group",{staticClass:"mt-10 mb-10"},[e("el-button",{attrs:{type:"success",size:"small"},on:{click:function(e){n.handleTop(t.row)}}},[n._v("置顶")]),n._v(" "),e("el-button",{attrs:{type:1==t.row.status?"success":"danger",size:"small"},on:{click:function(e){n.handleStatus(t.row)}}},[n._v("\n                        "+n._s(1==t.row.status?"上架":"下架")+"\n                    ")]),n._v(" "),e("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(e){n.handleDel(t.row)}}},[n._v("\n                        "+n._s(1==t.row.isDel?"恢复":"删除")+"\n                    ")])],1)]}}])})],1),n._v(" "),e("el-col",{staticClass:"mt-10",attrs:{span:24}},[e("el-pagination",{staticStyle:{float:"right"},attrs:{"page-size":10,"current-page":n.page,layout:"total, prev, pager, next, jumper",total:n.total},on:{"current-change":n.handleCurrentChange}})],1),n._v(" "),e("v-detail",{attrs:{data:n.data},on:{refresh:n.fetchList},model:{value:n.isShowForm,callback:function(t){n.isShowForm=t},expression:"isShowForm"}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=3.8dee00b30ce8d8ababb7.js.map