(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0b23b8"],{"22df":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{staticClass:"row column justify-between"},[s("div",[s("TitleHelp",[e._v("\n      Qual seu objetivo?\n    ")]),s("p",[e._v("\n      Nós queremos saber qual o seu objetivo ao investir :)\n      Assim nós conseguimos indicar os melhores fundos sem dor de cabeça :D\n    ")]),s("div",{staticClass:"q-mt-xl"},[s("q-select",{staticClass:"text-primary",attrs:{options:[{label:"Comprar imóvel",value:"imóvel"},{label:"Comprar apartamento",value:"apartamento"}],filled:""},model:{value:e.objective,callback:function(t){e.objective=t},expression:"objective"}})],1)],1),s("q-btn",{staticClass:"bg-primary text-white full-width",attrs:{label:"Próximo",flat:"",size:"lg",disable:!e.objective},on:{click:e.nextRoute}})],1)},i=[],o={data:function(){return{objective:""}},methods:{nextRoute:function(){this.$store.dispatch("SET_OBJECTIVE",this.objective),this.$router.push({name:"infos"})}}},l=o,n=s("2877"),r=Object(n["a"])(l,a,i,!1,null,null,null);t["default"]=r.exports}}]);