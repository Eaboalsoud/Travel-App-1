var Client=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t),n.d(t,"performAction",(function(){return o}));city,document.getElementById("results"),city;function o(e){e.preventDefault();let t=(new Date).getTime();console.log("today is:"+t);let n=document.getElementById("city").value;console.log("city:"+n);let o=document.getElementById("departing").value;console.log("departing:"+o);let c=document.getElementById("returning").value;console.log("returning:"+c),r("http://api.geonames.org/searchJSON?name="+n+"&maxRows=1&username=eaboalsoud").then((function(e){postData("http://localhost:8083/travelApp",{latitude:e[0],longitude:e[1],country:e[2]}),l("http://api.weatherbit.io/v2.0/forecast/daily?key=e5b4e4c828c5457fb6bfbfc11fb569f0&lat="+e[0]+"&lon="+e[1]+"&start_date="+o+"&end_date="+c).then((function(e){postData("http://localhost:8083/travelApp",{"Maximum temp":e[0],"Minimum temp":e[1],Description:e[2]}),updateUI(e)}))}))}document.getElementById("generate").addEventListener("click",o);const r=async e=>{const t=await fetch(e);try{let e=await t.json();console.log(e.geonames);const n=e.geonames[0].lat;console.log("lat:"+n);const o=e.geonames[0].lng;console.log("lng:"+o);const r=e.geonames[0].countryName;console.log("country:"+r);const l=[n,o,r];return console.log("geoResult:"+l),l}catch(e){console.log(" Error:",e)}},l=async e=>{const t=await fetch(e);try{let e=await t.json();const n=e.data[0].max_temp;console.log("max temp:"+n);const o=e.data[0].low_temp;console.log("min temp:"+o);const r=e.data[0].description;console.log("description:"+r);const l=[n,o,r];return console.log(l),l}catch(e){console.log("Retrieval Error:",e)}};n(0),n(1)}]);