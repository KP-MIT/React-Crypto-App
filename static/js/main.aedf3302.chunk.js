(this["webpackJsonpcrypto-api-v1"]=this["webpackJsonpcrypto-api-v1"]||[]).push([[0],{129:function(e,t,a){e.exports=a(257)},150:function(e,t,a){},151:function(e,t,a){},257:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),l=a.n(r),o=a(50),i=a.n(o),s=a(64),m=a(32),u=a(65),p=a.n(u),d=(a(150),a(151),a(44)),v=a.n(d),E=a(37),f=a(262),g=function(e){var t=e.coinId,a=e.name,n=e.price,r=e.symbol,l=e.marketcap,o=e.volume,i=e.image,s=e.priceChange;if(e.loading){return c.a.createElement(v.a,{type:"Circles",style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},color:"#00BFFF",height:"100%",width:"100%"})}return c.a.createElement("div",{className:"coin-container"},c.a.createElement("div",{className:"coin-row"},c.a.createElement("div",{className:"coin"},c.a.createElement("img",{src:i,alt:"crypto"}),c.a.createElement("h1",null,a),c.a.createElement("p",{className:"coin-symbol"},r)),c.a.createElement("div",{className:"coin-data"},c.a.createElement("p",{className:"coin-price"},"$",n),c.a.createElement("p",{className:"coin-volume"},"$",o.toLocaleString()),s<0?c.a.createElement("p",{className:"coin-percent red"},s.toFixed(2),"%"):c.a.createElement("p",{className:"coin-percent green"},s.toFixed(2),"%"),c.a.createElement("p",{className:"coin-marketcap"},"Mkt Cap: $",l.toLocaleString()),c.a.createElement(f.b,null,c.a.createElement(E.b,{key:t,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},to:"/cryptodetails/".concat(t)}," Show more ")))))},h=function(e){for(var t=e.postsPerPage,a=e.totalPosts,n=e.paginate,r=[],l=1;l<=Math.ceil(a/t);l++)r.push(l);return c.a.createElement("nav",null,c.a.createElement("ul",{className:"pagination"},r.map((function(e){return c.a.createElement("li",{key:e,className:"page-item"},c.a.createElement("a",{onClick:function(){return n(e)},href:"/React-Crypto-App/",className:"page-link"},e))}))))},y=a(14),b=a(259),k=a(261),_=a(263),N=a(260),j=b.a.Title,C=function(){var e=Object(y.e)().coinId,t=Object(n.useState)([]),a=Object(m.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(!1),u=Object(m.a)(o,2),d=u[0],g=u[1];if(Object(n.useEffect)((function(){(function(){var t=Object(s.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return g(!0),t.next=3,p.a.get("https://api.coingecko.com/api/v3/coins/".concat(e,"?localization=false&tickers=false&community_data=false&developer_data=false"));case 3:a=t.sent,l(null===a||void 0===a?void 0:a.data),console.log(a.data),g(!1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),d){return c.a.createElement(v.a,{type:"Circles",style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},color:"#00BFFF",height:"100%",width:"100%"})}var h=r,b={display:"flex",flexDirection:"column",width:"100%",alignItems:"center",justifyContent:"space-evenly",textAlign:"center",marginBottom:"3%"};return c.a.createElement("div",{style:b},c.a.createElement(j,{level:2,className:"heading"},null===h||void 0===h?void 0:h.name),c.a.createElement(k.a,{style:b,gutter:[12,12]},c.a.createElement(_.a,{span:12},c.a.createElement("p",null," Genesis Date : ",c.a.createElement(N.a,{value:null===h||void 0===h?void 0:h.genesis_date})," ")),c.a.createElement(_.a,{span:12},c.a.createElement("p",null," Market Cap Rank : ",c.a.createElement(N.a,{value:h.market_cap_rank})," ")),c.a.createElement(_.a,{span:12},c.a.createElement("p",null," Coingecko Rank : ",c.a.createElement(N.a,{value:null===h||void 0===h?void 0:h.coingecko_rank})," ")),c.a.createElement(_.a,{span:12},c.a.createElement("p",null," Community Score :",c.a.createElement(N.a,{value:null===h||void 0===h?void 0:h.community_score}))),c.a.createElement(_.a,{span:12},c.a.createElement("p",null," Categories :",c.a.createElement(N.a,{value:null===h||void 0===h?void 0:h.categories}))),c.a.createElement(_.a,{span:12},c.a.createElement("p",null," Sentiment Up % :",c.a.createElement(N.a,{value:null===h||void 0===h?void 0:h.sentiment_votes_up_percentage})))),c.a.createElement(f.b,null,c.a.createElement(E.b,{to:"/React-Crypto-App/"}," Show less ")))},O=(a(256),function(){var e=function(e){return new Promise((function(t){return setTimeout(t,e)}))},t=Object(n.useState)([{current_price:0,id:"No id",image:"No img",market_cap:0xfb35e42fa8,name:"No Match Found",price_change_percentage_24h:0,symbol:"NA",total_volume:0}]),a=Object(m.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(""),u=Object(m.a)(o,2),d=u[0],E=u[1],f=Object(n.useState)(!1),k=Object(m.a)(f,2),_=k[0],N=k[1],j=Object(n.useState)(1),O=Object(m.a)(j,2),w=O[0],x=O[1],S=Object(n.useState)(10),F=Object(m.a)(S,1)[0],I=Object(n.useState)(!1),P=Object(m.a)(I,2),R=P[0],A=P[1];Object(n.useEffect)((function(){(function(){var t=Object(s.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return N(!0),t.next=3,p.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");case 3:return a=t.sent,l(null===a||void 0===a?void 0:a.data),console.log(a.data),t.next=8,e(200);case 8:N(!1);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);R&&(x(1),A(!1));var B=w*F,L=B-F,M=r.filter((function(e){return e.name.toLowerCase().includes(d.toLowerCase())})).slice(L,B);if(_){return c.a.createElement(v.a,{type:"Circles",style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},color:"#00BFFF",height:"100%",width:"100%"})}return c.a.createElement("div",{className:"coin-app"},c.a.createElement(y.a,{exact:!0,path:"/cryptodetails/:coinId",render:function(){return c.a.createElement(C,null)}}),c.a.createElement("div",{className:"coin-search"},c.a.createElement("h1",{className:"coin-text"}," Crypto Scout "),c.a.createElement("form",null,c.a.createElement("input",{className:"coin-input",type:"text",onChange:function(e){E(e.target.value),A(!0)},placeholder:"Enter Currency Name"}))),null===M||void 0===M?void 0:M.map((function(e){return c.a.createElement("div",null,c.a.createElement(g,{key:e.id,coinId:e.id,name:e.name,price:e.current_price,symbol:e.symbol,marketcap:e.total_volume,volume:e.market_cap,image:e.image,priceChange:e.price_change_percentage_24h,loading:_}))})),c.a.createElement(h,{postsPerPage:F,totalPosts:r.length,paginate:function(e){return x(e)}}),c.a.createElement("div",{className:"footer"},c.a.createElement(b.a.Title,{level:5},"All Rights Reserved @Cryptoscout Inc.")))});l.a.render(c.a.createElement(E.a,null,c.a.createElement(O,null)),document.getElementById("root"))}},[[129,1,2]]]);
//# sourceMappingURL=main.aedf3302.chunk.js.map