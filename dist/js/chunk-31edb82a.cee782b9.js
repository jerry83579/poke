(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31edb82a"],{1815:function(t,e,s){t.exports=s.p+"img/home.168d16a8.png"},"716b":function(t,e,s){},"94d3":function(t,e,s){t.exports=s.p+"img/pokemon_store.7524e985.png"},a068:function(t,e,s){"use strict";var a=s("716b"),n=s.n(a);n.a},ac9e:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"signin"},[t.isLoading?a("loading"):t._e(),a("div",{staticClass:"box"},[a("img",{attrs:{src:s("94d3"),alt:""}}),t._m(0),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],attrs:{type:"text",placeholder:"abc@gmail.com",autocomplete:"true"},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password",placeholder:"******",autocomplete:"true"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),a("button",{on:{click:t.signin}},[t._v("登入")]),a("router-link",{attrs:{to:"back"}},[a("button",{staticClass:"back"},[t._v("返回")])])],1)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"anibox"},[a("div",{staticClass:"home"},[a("img",{attrs:{src:s("1815"),alt:""}})]),a("div",{staticClass:"truck"},[a("img",{attrs:{src:s("ec2d"),alt:""}})])])}],i=(s("cadf"),s("551c"),s("097d"),s("1157"),s("c428")),o={name:"signin",components:{loading:i["a"]},data:function(){return{user:{username:"",password:""},isLoading:!1}},methods:{signin:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/admin/signin");t.isLoading=!0,this.$http.post(e,t.user).then(function(e){e.data.success?(t.$router.push("/"),t.isLoading=!1):(alert("資料錯誤"),t.isLoading=!1)})}}},r=o,u=(s("a068"),s("2877")),c=Object(u["a"])(r,a,n,!1,null,"7803ff9a",null);c.options.__file="signin.vue";e["default"]=c.exports},ec2d:function(t,e,s){t.exports=s.p+"img/truck.52c2bb1f.png"}}]);
//# sourceMappingURL=chunk-31edb82a.cee782b9.js.map