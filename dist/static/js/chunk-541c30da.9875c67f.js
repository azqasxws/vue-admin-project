(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-541c30da"],{5437:function(t,e,a){"use strict";a.r(e),a("a481");var s={data:function(){return{activeList:[]}},mounted:function(){this.getBreadcrumb()},watch:{$route:function(t,e){var a=t.fullPath.replace("/","");this.getBreadcrumb(a)}},methods:{getBreadcrumb:function(t){this.activeList=[],this.activeList.push(this.$store.state.breadList[0]);var e=this.$store.state.breadList;"home"!==t?"home"!==e[e.length-1]&&this.activeList.push(e[e.length-1]):this.$store.commit("SET_BREAD",this.activeList)}}},i=(a("b9f1"),a("2877")),r=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"breadcrumb"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("transition-group",{attrs:{name:"fade-transform",mode:"out-in"}},[t._l(t.$store.state.breadList,(function(e,s){return[a("el-breadcrumb-item",{key:s,attrs:{to:-1==t.activeList.indexOf(e)?"":{path:"/"+e}}},[t._v(t._s(t.$t("route."+e)))])]}))],2)],1)],1)}),[],!1,null,"37d12530",null);e.default=r.exports},a7cc:function(t,e,a){},b9f1:function(t,e,a){"use strict";a("a7cc")}}]);