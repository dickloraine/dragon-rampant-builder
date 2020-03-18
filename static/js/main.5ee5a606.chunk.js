(this["webpackJsonpdragon-rampant-builder"]=this["webpackJsonpdragon-rampant-builder"]||[]).push([[0],{137:function(e){e.exports=JSON.parse('{"Unit":{"name":"Unit","points":0,"stats":{"attack":0,"move":0,"shoot":0,"courage":0,"armour":0,"attackValue":0,"defenceValue":0,"shootValue":0,"shootRange":"-","movement":0,"strengthPoints":0},"rules":{},"options":{},"fantasticalRules":[]},"Elite Riders":{"name":"Elite Riders","type":"mounted","points":6,"stats":{"attack":5,"move":7,"shoot":0,"courage":3,"armour":4,"attackValue":3,"defenceValue":5,"shootValue":0,"shootRange":0,"movement":10,"strengthPoints":6},"rules":["Wild Charge","Counter-charge"],"options":{"Mounted missiles":{"points":2,"remove":["Wild Charge","Counter-charge"],"setStats":{"shoot":6,"shootValue":5,"shootRange":12}},"Level Headed":{"points":2,"remove":["Wild Charge"],"setStats":{"move":5}}},"fantasticalRules":["any"]},"Heavy Riders":{"name":"Heavy Riders","type":"mounted","points":4,"stats":{"attack":5,"move":5,"shoot":0,"courage":4,"armour":3,"attackValue":4,"defenceValue":5,"shootValue":0,"shootRange":0,"movement":10,"strengthPoints":6},"rules":["Counter-charge"],"options":{"Mounted missiles":{"points":1,"setStats":{"shoot":6,"shootValue":5,"shootRange":12}},"Chariots":{"points":2,"add":["May not enter rough terrain"],"setStats":{"armour":4}}},"fantasticalRules":["any"]},"Light Riders":{"name":"Light Riders","type":"mounted","points":4,"stats":{"attack":7,"move":5,"shoot":6,"courage":5,"armour":3,"attackValue":5,"defenceValue":6,"shootValue":5,"shootRange":12,"movement":12,"strengthPoints":6},"rules":["Skirmish","Evade"],"options":{"Short range missiles":{"points":-1,"setStats":{"shootRange":6}}},"fantasticalRules":["exclude","Spellcaster","Wizardlings","Summoner","Cleric","Slayer"]},"Greater Warbeasts":{"name":"Greater Warbeasts","type":"mounted","points":6,"stats":{"attack":5,"move":6,"shoot":0,"courage":3,"armour":4,"attackValue":3,"defenceValue":6,"shootValue":0,"shootRange":0,"movement":10,"strengthPoints":6},"rules":["Ranger","Wild Charge"],"options":{"Flame or Spore Attack":{"points":2,"setStats":{"shoot":6,"shootValue":5,"shootRange":12},"remove":["Wild Charge"]},"Ponderous":{"points":1,"remove":["Wild Charge"]},"Cunning":{"points":2,"setStats":{"defenceValue":5}}},"fantasticalRules":["exclude","Spellcaster","Wizardlings","Summoner","Cleric","Slayer"]},"Lesser Warbeasts":{"name":"Lesser Warbeasts","type":"mounted","points":4,"stats":{"attack":5,"move":6,"shoot":0,"courage":4,"armour":3,"attackValue":4,"defenceValue":6,"shootValue":0,"shootRange":0,"movement":12,"strengthPoints":6},"rules":["Ranger","Wild Charge","Fleet Footed"],"options":{"Flame or Spore Attack":{"points":2,"setStats":{"shoot":6,"shootValue":5,"shootRange":12},"remove":["Wild Charge"]},"Cunning":{"points":2,"setStats":{"defenceValue":5}}},"fantasticalRules":["exclude","Spellcaster","Wizardlings","Summoner","Cleric","Slayer"]},"Elite Foot":{"name":"Elite Foot","type":"foot","points":6,"stats":{"attack":5,"move":5,"shoot":0,"courage":3,"armour":4,"attackValue":3,"defenceValue":4,"shootValue":0,"shootRange":0,"movement":6,"strengthPoints":6},"rules":["Ranger"],"options":{"Missiles":{"points":2,"setStats":{"shoot":6,"shootValue":5,"shootRange":18}}},"fantasticalRules":["any"]},"Heavy Foot":{"name":"Heavy Foot","type":"foot","points":4,"stats":{"attack":6,"move":5,"shoot":0,"courage":4,"armour":3,"attackValue":5,"defenceValue":4,"shootValue":0,"shootRange":0,"movement":6,"strengthPoints":12},"rules":["Wall of Spears"],"options":{"Offensive":{"points":2,"setStats":{"attackValue":4},"remove":["Wall of Spears"]}},"fantasticalRules":["any"]},"Light Foot":{"name":"Light Foot","type":"foot","points":3,"stats":{"attack":6,"move":5,"shoot":0,"courage":4,"armour":2,"attackValue":5,"defenceValue":4,"shootValue":0,"shootRange":0,"movement":8,"strengthPoints":12},"rules":["Wall of Spears"],"options":{"Offensive":{"points":2,"setStats":{"attackValue":4},"remove":["Wall of Spears"]},"Short range missiles":{"points":1,"setStats":{"shoot":6,"shootValue":5,"shootRange":6}},"Mixed Weapons":{"points":2,"setStats":{"shoot":6,"shootValue":5,"shootRange":12},"remove":["Wall of Spears"]}},"fantasticalRules":["any"]},"Bellicose Foot":{"name":"Bellicose Foot","type":"foot","points":4,"stats":{"attack":5,"move":6,"shoot":0,"courage":4,"armour":2,"attackValue":3,"defenceValue":6,"shootValue":0,"shootRange":0,"movement":8,"strengthPoints":12},"rules":["Ranger","Wild Charge","Counter-charge vs. foot","Fleet Footed"],"options":{"Terrifically Shiny Armour":{"points":2,"setStats":{"armour":3}}},"fantasticalRules":["exclude","Spellcaster","Wizardlings","Summoner","Cleric","Slayer"]},"Heavy Missiles":{"name":"Heavy Missiles","type":"foot","points":4,"stats":{"attack":7,"move":6,"shoot":7,"courage":4,"armour":2,"attackValue":6,"defenceValue":5,"shootValue":4,"shootRange":18,"movement":6,"strengthPoints":12},"rules":[],"options":{"Weighty Projectiles":{"points":-1,"setStats":{"shootRange":12}}},"fantasticalRules":["exclude","Spellcaster","Wizardlings","Cleric","Slayer"]},"Light Missiles":{"name":"Light Missiles","type":"foot","points":4,"stats":{"attack":7,"move":6,"shoot":6,"courage":4,"armour":2,"attackValue":6,"defenceValue":5,"shootValue":5,"shootRange":18,"movement":6,"strengthPoints":12},"rules":[],"options":{"Sharpshooter":{"points":2,"setStats":{"shootValue":4}}},"fantasticalRules":["exclude","Spellcaster","Wizardlings","Cleric","Slayer"]},"Scouts":{"name":"Scouts","type":"foot","points":2,"stats":{"attack":7,"move":5,"shoot":7,"courage":5,"armour":1,"attackValue":6,"defenceValue":6,"shootValue":5,"shootRange":12,"movement":8,"strengthPoints":6},"rules":["Hard to target","Skirmish","Evade","Fleet Footed"],"options":{},"fantasticalRules":["exclude","Spellcaster","Wizardlings","Summoner","Exploder","Cleric","Slayer"]},"Ravenous Hordes":{"name":"Ravenous Hordes","type":"foot","points":1,"stats":{"attack":7,"move":6,"shoot":0,"courage":5,"armour":1,"attackValue":6,"defenceValue":6,"shootValue":0,"shootRange":0,"movement":6,"strengthPoints":12},"rules":[],"options":{},"fantasticalRules":["No Feelings","Venomous","Hatred","Fear"]}}')},206:function(e){e.exports=JSON.parse('{"Cleric":{"name":"Cleric","points":4},"Slayer":{"name":"Slayer","points":4},"Exploder":{"name":"Exploder","points":2},"Fear":{"name":"Fear","points":2},"Fearful":{"name":"Fearful","points":-2},"Flying":{"name":"Flying","points":2},"Burrowing":{"name":"Burrowing","points":2},"Hatred":{"name":"Hatred","points":1},"Invisibility":{"name":"Invisibility","points":3},"Enchanted Weapons":{"name":"Enchanted Weapons","points":1},"Blessed Weapons":{"name":"Blessed Weapons","points":2},"Mystical Armour":{"name":"Mystical Armour","points":2},"Spellcaster":{"name":"Spellcaster","points":4},"Wizardlings":{"name":"Wizardlings","points":2},"Summoner":{"name":"Summoner","points":3},"No Feelings":{"name":"No Feelings","points":0},"Unstoppable March of the Dead":{"name":"Unstoppable March of the Dead","points":0},"Venomous":{"name":"Venomous","points":2}}')},264:function(e,t,a){e.exports=a(455)},455:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),l=a(14),r=a.n(l),s=a(28),i=a(27),c=a(17),u=a(199),m=a(200),p=a(226),d=a(201),f=a(227),h=a(225),E=a.n(h),v=a(526),g=a(535),y=a(79),b=a(534),k=a(19),S=a(527),C=a(530),O=a(205),R=a.n(O),V=a(528),j=a(529),w=a(105),x=a.n(w),D=a(541),F=a(512),W=a(457),U=a(511),L=a(506);function P(e){var t=e.onClose,a=e.selectedValue,n=e.open,l=e.options,r=e.title;return o.a.createElement(L.a,{onClose:function(){return t(a)},open:n},o.a.createElement(U.a,null,r),o.a.createElement(F.a,null,l.map((function(e){return o.a.createElement(W.a,{button:!0,onClick:function(){return function(e){return t(e)}(e)},key:e},e)}))))}function M(e){var t=e.name,a=e.options,n=e.points,l=e.onClose,r=o.a.useState(!1),s=Object(k.a)(r,2),i=s[0],c=s[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,{variant:"h5",onClick:function(){return c(!0)}},o.a.createElement(D.a,{label:n,color:"primary"}),"\xa0\xa0",t,o.a.createElement(x.a,null)),o.a.createElement(P,{selectedValue:t,open:i,onClose:function(e){c(!1),e!==t&&l(e)},options:a,title:"Choose unit type"}))}var A=a(514),I=a(513),B=a(515),T=a(516),z=a(538);function H(e){var t=e.unit,a=e.optionsData,n=e.onChange;if(!a||!Object.keys(a).length)return o.a.createElement("div",null);var l=function(e){return function(a){var o=Object(c.a)({},t);a.target.checked?o.options=[].concat(Object(s.a)(o.options),[e]):o.options=o.options.filter((function(t){return t!==e})),n(o)}};return o.a.createElement(I.a,{component:"fieldset",style:{marginTop:10}},o.a.createElement(A.a,{component:"legend"},"Options"),o.a.createElement(B.a,null,Object.keys(a).map((function(e){return o.a.createElement(T.a,{control:o.a.createElement(z.a,{onChange:l(e),checked:t.options.includes(e)}),label:o.a.createElement(y.a,null,e," ",o.a.createElement(y.a,{color:"secondary",component:"span"},"@",a[e].points)),key:e})}))))}var N=a(518),K=a(536),G=a(520);var J=function(e){var t=e.unitData,a=e.onChange,n=e.fantasticalRulesData,l=e.unit,r=o.a.useState(!1),i=Object(k.a)(r,2),u=i[0],m=i[1],p=t.fantasticalRules;if(!p||!p.length)return o.a.createElement("div",null);if("any"===p[0]&&(p=Object.keys(n)),"exclude"===p[0]){var d=p.slice(1);p=Object.keys(n);var f=!0,h=!1,E=void 0;try{for(var v,b=function(){var e=v.value;p=p.filter((function(t){return t!==e}))},S=d[Symbol.iterator]();!(f=(v=S.next()).done);f=!0)b()}catch(O){h=!0,E=O}finally{try{f||null==S.return||S.return()}finally{if(h)throw E}}}var C=function(){return m(!0)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(A.a,{onClick:C,component:"legend"},"Fantastical Rules ",o.a.createElement(x.a,null)),l.fantasticalRules&&l.fantasticalRules.length>0&&l.fantasticalRules.map((function(e){return o.a.createElement("div",{key:e},o.a.createElement(T.a,{control:o.a.createElement(z.a,{checked:!0,onClick:function(){return a(Object(c.a)({},l,{fantasticalRules:Object(s.a)(l.fantasticalRules.filter((function(t){return t!==e})))}))}}),label:o.a.createElement(y.a,null,e," ",o.a.createElement(y.a,{color:"secondary",component:"span"},"@",n[e].points,"}")),key:e}))})),o.a.createElement(I.a,{style:{marginTop:10,width:0,height:0}},o.a.createElement(K.a,{open:u,onClose:function(){return m(!1)},onOpen:C,IconComponent:function(){return o.a.createElement(g.a,null)},multiple:!0,value:l.fantasticalRules,onChange:function(e){return a(Object(c.a)({},l,{fantasticalRules:Object(s.a)(e.target.value)}))},input:o.a.createElement(N.a,null),renderValue:function(){return" "}},p.map((function(e){return o.a.createElement(G.a,{key:e,value:e},l.fantasticalRules.indexOf(e)<0&&o.a.createElement(y.a,null,e," ",o.a.createElement(y.a,{color:"secondary",component:"span"},"@",n[e].points)),l.fantasticalRules.indexOf(e)>-1&&o.a.createElement(y.a,{color:"primary"},e," ",o.a.createElement(y.a,{color:"secondary",component:"span"},"@",n[e].points)))})))))},Y=a(522),$=a(523),q=a(525),Q=a(521),X=a(524),Z=a(539);function _(e){var t=e.stats,a=t.shoot?"".concat(t.shoot,"+"):"-",n=t.shoot?"".concat(t.shootValue,"+/").concat(t.shootRange,'"'):"-";return o.a.createElement(Q.a,null,o.a.createElement(Y.a,{size:"small"},o.a.createElement(Z.a,{xsDown:!0},o.a.createElement($.a,null,o.a.createElement(X.a,null,o.a.createElement(q.a,null,"Attack"),o.a.createElement(q.a,null,t.attack,"+"),o.a.createElement(q.a,null,"Attack Value"),o.a.createElement(q.a,null,t.attackValue,"+")),o.a.createElement(X.a,null,o.a.createElement(q.a,null,"Move"),o.a.createElement(q.a,null,t.move,"+"),o.a.createElement(q.a,null,"Defence Value"),o.a.createElement(q.a,null,t.defenceValue,"+")),o.a.createElement(X.a,null,o.a.createElement(q.a,null,"Shoot"),o.a.createElement(q.a,null,a),o.a.createElement(q.a,null,"Shoot Value"),o.a.createElement(q.a,null,n)),o.a.createElement(X.a,null,o.a.createElement(q.a,null,"Courage"),o.a.createElement(q.a,null,t.courage,"+"),o.a.createElement(q.a,null,"Movement"),o.a.createElement(q.a,null,t.movement,'"')),o.a.createElement(X.a,null,o.a.createElement(q.a,null,"Armour"),o.a.createElement(q.a,null,t.armour),o.a.createElement(q.a,null,"Strength Points"),o.a.createElement(q.a,null,t.strengthPoints)))),o.a.createElement(Z.a,{smUp:!0},o.a.createElement($.a,null,o.a.createElement(X.a,null,o.a.createElement(q.a,null,"A"),o.a.createElement(q.a,null,t.attack,"+"),o.a.createElement(q.a,null,"AV"),o.a.createElement(q.a,null,t.attackValue,"+")),o.a.createElement(X.a,null,o.a.createElement(q.a,null,"M"),o.a.createElement(q.a,null,t.move,"+"),o.a.createElement(q.a,null,"DV"),o.a.createElement(q.a,null,t.defenceValue,"+")),o.a.createElement(X.a,null,o.a.createElement(q.a,null,"S"),o.a.createElement(q.a,null,a),o.a.createElement(q.a,null,"SV"),o.a.createElement(q.a,null,n)),o.a.createElement(X.a,null,o.a.createElement(q.a,null,"C"),o.a.createElement(q.a,null,t.courage,"+"),o.a.createElement(q.a,null,"MR"),o.a.createElement(q.a,null,t.movement,'"')),o.a.createElement(X.a,null,o.a.createElement(q.a,null,"Ar"),o.a.createElement(q.a,null,t.armour),o.a.createElement(q.a,null,"SP"),o.a.createElement(q.a,null,t.strengthPoints))))))}function ee(e){var t=e.rules;return t&&t.length?o.a.createElement(v.a,null,o.a.createElement(y.a,{variant:"h6",style:{marginTop:10}},"Special Rules"),o.a.createElement(F.a,null,t.map((function(e){return o.a.createElement(W.a,{key:e},e)})))):o.a.createElement(o.a.Fragment,null)}var te=function(e){var t=e.id,a=e.unit,n=e.updateUnit,l=e.updateArmyCost,r=e.data,u=e.setUnit,m=e.removeUnit,p=e.ui,d=function(e){var a=r.unitData[e.name],o=e.points;e=Object(c.a)({},a,{options:Object(s.a)(e.options),fantasticalRules:Object(s.a)(e.fantasticalRules)});var u=a.points,m=!0,p=!1,d=void 0;try{for(var f,h=e.options[Symbol.iterator]();!(m=(f=h.next()).done);m=!0){var E=f.value;if(u+=(E=a.options[E]).points,E.setStats)for(var v=0,g=Object.entries(E.setStats);v<g.length;v++){var y=Object(k.a)(g[v],2),b=y[0],S=y[1];e=Object(c.a)({},e,{stats:Object(c.a)({},e.stats,Object(i.a)({},b,S))})}if(E.add){var C=!0,O=!1,R=void 0;try{for(var V,j=E.add[Symbol.iterator]();!(C=(V=j.next()).done);C=!0){var w=V.value;e.rules=[].concat(Object(s.a)(e.rules),[w])}}catch(z){O=!0,R=z}finally{try{C||null==j.return||j.return()}finally{if(O)throw R}}}if(E.remove){var x=!0,D=!1,F=void 0;try{for(var W,U=function(){var t=W.value;e.rules=e.rules.filter((function(e){return e!==t}))},L=E.remove[Symbol.iterator]();!(x=(W=L.next()).done);x=!0)U()}catch(z){D=!0,F=z}finally{try{x||null==L.return||L.return()}finally{if(D)throw F}}}}}catch(z){p=!0,d=z}finally{try{m||null==h.return||h.return()}finally{if(p)throw d}}var P=!0,M=!1,A=void 0;try{for(var I,B=e.fantasticalRules[Symbol.iterator]();!(P=(I=B.next()).done);P=!0){var T=I.value;u+=(T=r.fantasticalRulesData[T]).points,e.rules=[].concat(Object(s.a)(e.rules),[T.name])}}catch(z){M=!0,A=z}finally{try{P||null==B.return||B.return()}finally{if(M)throw A}}e=Object(c.a)({},e,{points:u}),l(u-o),n(t,Object(c.a)({},e))};return o.a.createElement(S.a,{variant:"outlined",style:{marginBottom:25,width:400}},o.a.createElement(V.a,{title:o.a.createElement(M,{name:a.name,onClose:function(e){!function(e){var o=a.points;n(t,{points:e}),l(e-o)}(r.unitData[e].points),u(t,e)},options:r.unitNames,points:a.points}),action:o.a.createElement(j.a,{onClick:function(){return m(t)}},o.a.createElement(R.a,null))}),o.a.createElement(C.a,null,!p.editMode&&o.a.createElement(o.a.Fragment,null,o.a.createElement(_,{stats:a.stats}),o.a.createElement(ee,{rules:a.rules})),!p.viewMode&&o.a.createElement(o.a.Fragment,null,o.a.createElement(H,{onChange:d,optionsData:r.unitData[a.name].options,unit:a}),o.a.createElement(g.a,null,o.a.createElement(J,{onChange:d,unitData:r.unitData[a.name],fantasticalRulesData:r.fantasticalRulesData,unit:a})))))},ae=a(137),ne=a(206),oe=a(531),le=a(532),re=a(533),se=a(212),ie=a.n(se),ce=a(213),ue=a.n(ce),me=a(542),pe=a(517),de=a(42),fe=a.n(de),he=a(208),Ee=a.n(he);function ve(e){var t=e.onClick,a=e.showText,n=void 0!==a&&a,l=o.a.useState(!1),r=Object(k.a)(l,2),s=r[0],i=r[1],c=function(){return i(!0)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(me.a,{title:"Load"},o.a.createElement(pe.a,{color:"inherit",onClick:c},o.a.createElement(Ee.a,null))),n&&o.a.createElement(y.a,{onClick:c},"Load"),o.a.createElement(P,{open:s,onClose:function(e){i(!1),e&&t(e)},options:function(){var e=[];return fe.a.each((function(t,a){return e.push(a)})),e}(),title:"Choose List to load"}))}var ge=a(209),ye=a.n(ge),be=a(540),ke=a(537);function Se(e){return o.a.createElement(ke.a,Object.assign({elevation:6,variant:"filled"},e))}function Ce(e){var t=e.open,a=e.setOpen,n=e.message,l=function(e,t){"clickaway"!==t&&a(!1)};return o.a.createElement(be.a,{open:t,autoHideDuration:6e3,onClose:l},o.a.createElement(Se,{onClose:l,severity:"error"},n))}function Oe(e){var t=e.open,a=e.setOpen,n=e.message,l=function(e,t){"clickaway"!==t&&a(!1)};return o.a.createElement(be.a,{open:t,autoHideDuration:6e3,onClose:l},o.a.createElement(Se,{onClose:l,severity:"success"},n))}function Re(e){var t=e.onClick,a=e.showText,n=void 0!==a&&a,l=o.a.useState(!1),r=Object(k.a)(l,2),s=r[0],i=r[1],c=o.a.useState(!1),u=Object(k.a)(c,2),m=u[0],p=u[1],d=function(){t()?i(!0):p(!0)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(me.a,{title:"Save"},o.a.createElement(pe.a,{color:"inherit",onClick:d},o.a.createElement(ye.a,null))),n&&o.a.createElement(y.a,{onClick:d},"Save"),o.a.createElement(Oe,{message:"Saved!",open:s,setOpen:function(e){return i(e)}}),o.a.createElement(Ce,{message:"You have to give the list a name!",open:m,setOpen:function(e){return p(e)}}))}var Ve=a(210),je=a.n(Ve);function we(e){var t=e.onClick,a=e.showText,n=void 0!==a&&a,l=o.a.useState(!1),r=Object(k.a)(l,2),s=r[0],i=r[1],c=o.a.useState(!1),u=Object(k.a)(c,2),m=u[0],p=u[1],d=function(){return i(!0)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(me.a,{title:"Delete List"},o.a.createElement(pe.a,{color:"inherit",onClick:d},o.a.createElement(je.a,null))),n&&o.a.createElement(y.a,{onClick:d},"Delete"),o.a.createElement(P,{open:s,onClose:function(e){i(!1),t(e),e&&p(!0)},options:function(){var e=[];return fe.a.each((function(t,a){return e.push(a)})),e.push("Delete all"),e}(),title:"Choose List to delete"}),o.a.createElement(Oe,{message:"Deleted!",open:m,setOpen:function(e){return p(e)}}))}var xe=a(543),De=a(211),Fe=a.n(De);function We(e){var t=e.loadList,a=e.saveList,n=e.removeList,l=o.a.useState(!1),r=Object(k.a)(l,2),s=r[0],i=r[1],c=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&i(e)}},u=function(e){return function(){e.apply(void 0,arguments),i(!1)}};return o.a.createElement(o.a.Fragment,null,o.a.createElement(Fe.a,{onClick:c(!0)}),o.a.createElement(xe.a,{open:s,onClose:c(!1)},o.a.createElement(o.a.Fragment,null,o.a.createElement(F.a,null,o.a.createElement(W.a,{button:!0,key:"Save"},o.a.createElement(Re,{onClick:u(a),showText:!0})),o.a.createElement(W.a,{button:!0,key:"Load"},o.a.createElement(ve,{onClick:u(t),showText:!0})),o.a.createElement(W.a,{button:!0,key:"Delete"},o.a.createElement(we,{onClick:u(n),showText:!0}))))))}var Ue=Object(oe.a)((function(e){return{root:{marginBottom:25},flexing:{display:"flex",flexGrow:1,alignItems:"center"},flexingend:{display:"flex",flexGrow:1,justifyContent:"flex-end",alignItems:"center"}}}));function Le(e){var t=e.ui,a=e.setUIOption,n=e.setUIOptions,l=e.armyCost,r=e.saveList,s=e.loadList,u=e.removeList,m=Ue(),p=function(e,t){var a="viewMode"===e?"editMode":"viewMode",o=Object(i.a)({},e,t);t&&(o=Object(c.a)({},o,Object(i.a)({},a,!1))),n(o)},d=function(e){var n=e.option,l=e.Icon,r=e.title,s=e.onClick,i=void 0===s?a:s;return o.a.createElement(me.a,{title:r},o.a.createElement(pe.a,{color:"inherit",onClick:function(){i(n,!t[n])}},o.a.createElement(l,{fontSize:"small",color:t[n]?"inherit":"disabled"})))};return o.a.createElement("div",{className:m.root},o.a.createElement(le.a,{position:"fixed"},o.a.createElement(re.a,null,o.a.createElement("div",{className:m.flexing},o.a.createElement(We,{loadList:s,saveList:r,removeList:u}),o.a.createElement(Z.a,{smDown:!0},o.a.createElement(y.a,{variant:"h5"},"\xa0\xa0Dragon Rampant Army Builder\xa0\xa0"),o.a.createElement(Re,{onClick:r}),o.a.createElement(ve,{onClick:s}),o.a.createElement(we,{onClick:u})),o.a.createElement(Z.a,{mdUp:!0},o.a.createElement(y.a,{variant:"h5",className:m.flexing},"\xa0\xa0DRAB"))),o.a.createElement("div",{className:m.flexingend},o.a.createElement(d,{option:"viewMode",Icon:ie.a,title:"View mode",onClick:p}),o.a.createElement(d,{option:"editMode",Icon:ue.a,title:"Edit mode",onClick:p}),o.a.createElement(Z.a,{smDown:!0},o.a.createElement(y.a,{variant:"h6"},"\xa0\xa0\xa0\xa0Total Points\xa0\xa0",o.a.createElement(b.a,{color:"secondary",size:"small"},o.a.createElement(y.a,{variant:"h6"},l)))),o.a.createElement(Z.a,{mdUp:!0},o.a.createElement(y.a,{variant:"h6"},"\xa0\xa0\xa0\xa0",o.a.createElement(b.a,{color:"secondary",size:"small"},o.a.createElement(y.a,{variant:"h6"},l))))))),o.a.createElement(re.a,null))}var Pe=a(23),Me=function(e,t){var a={};for(var n in e)t(e[n],n)&&(a=Object(c.a)({},a,Object(i.a)({},n,e[n])));return a},Ae=function(e,t,a){return Object.entries(e).reduce((function(e,a){var n=Object(k.a)(a,2),o=n[0],l=n[1];return t(e,l,o)}),a)};function Ie(e){var t=e.armyCost,a=e.units,n=e.unitData,l=e.fantasticalRulesData,r=Ae(a,(function(e,t){return t.options.reduce((function(e,a){return e+n[t.name].options[a].points}),e)}),0),s=Ae(a,(function(e,t){return t.fantasticalRules.reduce((function(e,t){return e+l[t].points}),e)}),0),i=["#8884d8","#82ca9d","#FF8042"],c=t,u=Object.keys(a).length,m=Me(a,(function(e){return"mounted"===e.type})),p=Me(a,(function(e){return"foot"===e.type})),d=Me(a,(function(e){return e.stats.shoot>0})),f=Ae(a,(function(e,t){return e+n[t.name].points}),0),h=[{name:"Mounted",Units:Object.keys(m).length,Points:Ae(m,(function(e,t){return e+t.points}),0)},{name:"Foot",Units:Object.keys(p).length,Points:Ae(p,(function(e,t){return e+t.points}),0)},{name:"Ranged",Units:Object.keys(d).length,Points:Ae(d,(function(e,t){return e+t.points}),0)}],E=[{name:"Units",value:f},{name:"Options",value:r<0?0:r},{name:"Fantastical Rules",value:s}];return o.a.createElement(S.a,{variant:"outlined",style:{marginTop:25,marginBottom:25}},o.a.createElement(V.a,{title:"Statistics"}),o.a.createElement(C.a,null,o.a.createElement(D.a,{label:c+" Points",color:"primary",style:{marginRight:25,marginBottom:25}}),o.a.createElement(D.a,{label:u+" Units",color:"primary",style:{marginRight:25,marginBottom:25}}),o.a.createElement(D.a,{label:(c/(u||1)).toPrecision(3)+" Points per unit",color:"primary",style:{marginRight:25,marginBottom:25}}),o.a.createElement(Z.a,{xsDown:!0},o.a.createElement(y.a,{variant:"h6",style:{marginTop:25}},"Unit Distribution"),o.a.createElement(Pe.b,{width:500,height:300,data:h,margin:{top:20,right:30,left:20,bottom:5}},o.a.createElement(Pe.c,{strokeDasharray:"3 3"}),o.a.createElement(Pe.j,{dataKey:"name"}),o.a.createElement(Pe.k,null),o.a.createElement(Pe.i,null),o.a.createElement(Pe.f,null),o.a.createElement(Pe.a,{dataKey:"Units",fill:i[0],minPointSize:3},o.a.createElement(Pe.e,{dataKey:"Units",position:"top"})),o.a.createElement(Pe.a,{dataKey:"Points",fill:i[1],minPointSize:3},o.a.createElement(Pe.e,{dataKey:"Points",position:"top"}))),f>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,{variant:"h6",style:{marginTop:25}},"Point Distribution"),o.a.createElement(Pe.h,{width:800,height:400},o.a.createElement(Pe.g,{data:E,dataKey:"value",label:Te,labelLine:!1,outerRadius:80},E.map((function(e,t){return o.a.createElement(Pe.d,{key:e,fill:i[t]})}))),o.a.createElement(Pe.i,null),o.a.createElement(Pe.f,null))))))}var Be=Math.PI/180,Te=function(e){var t=e.cx,a=e.cy,n=e.midAngle,l=e.innerRadius,r=e.outerRadius,s=e.percent,i=l+.5*(r-l),c=t+i*Math.cos(-n*Be),u=a+i*Math.sin(-n*Be);return o.a.createElement("text",{x:c,y:u,fill:"black",textAnchor:c>t?"start":"end",dominantBaseline:"central"},"".concat((100*s).toFixed(0),"%"))},ze=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).addUnit=function(){var e=a.state.nextID;a.setState({nextID:e+1,units:Object(c.a)({},a.state.units,Object(i.a)({},e,Object(c.a)({},a.state.data.unitData.Unit,{options:[],fantasticalRules:[]}))),unitOrder:[].concat(Object(s.a)(a.state.unitOrder),[e])})},a.setUnit=function(e,t){a.setState({units:Object(c.a)({},a.state.units,Object(i.a)({},e,Object(c.a)({},a.state.data.unitData[t],{options:[],fantasticalRules:[]})))})},a.removeUnit=function(e){var t=Object(c.a)({},a.state.units),n=t[e].points;delete t[e],a.updateArmyCost(-n),a.setState({units:Object(c.a)({},t),unitOrder:a.state.unitOrder.filter((function(t){return t!==e}))})},a.updateUnit=function(e,t){a.setState({units:Object(c.a)({},a.state.units,Object(i.a)({},e,Object(c.a)({},a.state.units[e],{},t)))})},a.updateArmyCost=function(e){a.setState({armyCost:a.state.armyCost+e})},a.setUIOption=function(e,t){a.setState({ui:Object(c.a)({},a.state.ui,Object(i.a)({},e,t))})},a.setUIOptions=function(e){a.setState({ui:Object(c.a)({},a.state.ui,{},e)})},a.saveList=function(){return"New List"!==a.state.name&&(fe.a.set(a.state.name,a.state),!0)},a.loadList=function(e){var t=fe.a.get(e);t=Object(c.a)({},t,{ui:a.state.ui}),a.setState(t)},a.removeList=function(e){"Delete all"===e?fe.a.clearAll():fe.a.remove(e)},a.state={name:"New List",armyCost:0,nextID:0,units:{},unitOrder:[],data:{unitData:ae,unitNames:Object.keys(ae).slice(1),fantasticalRulesData:ne},ui:{viewMode:!1,editMode:!1}},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(v.a,null,o.a.createElement(Le,{setUIOption:this.setUIOption,setUIOptions:this.setUIOptions,ui:this.state.ui,armyCost:this.state.armyCost,saveList:this.saveList,loadList:this.loadList,removeList:this.removeList}),o.a.createElement(g.a,null,o.a.createElement(I.a,null,o.a.createElement(y.a,{style:{border:0,marginBottom:25},variant:"h4",component:"Input",id:"component-simple",value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})}})),!Object.keys(this.state.units).length&&o.a.createElement(y.a,{variant:"h6",style:{marginBottom:25}},"Click the button to add your first unit!"),o.a.createElement(g.a,{display:"flex",flexDirection:"row",flexWrap:"wrap"},this.state.unitOrder.map((function(t){return o.a.createElement(te,{id:t,key:t,unit:e.state.units[t],updateUnit:e.updateUnit,updateArmyCost:e.updateArmyCost,removeUnit:e.removeUnit,setUnit:e.setUnit,data:e.state.data,ui:e.state.ui})})),o.a.createElement(b.a,{color:"secondary",style:{marginLeft:25,marginBottom:25},onClick:this.addUnit},o.a.createElement(E.a,null))),o.a.createElement(Ie,{armyCost:this.state.armyCost,units:this.state.units,unitData:this.state.data.unitData,fantasticalRulesData:this.state.data.fantasticalRulesData})))}}]),t}(o.a.Component),He=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ne(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(o.a.createElement(ze,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/dragon-rampant-builder",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/dragon-rampant-builder","/service-worker.js");He?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ne(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ne(t,e)}))}}()}},[[264,1,2]]]);
//# sourceMappingURL=main.5ee5a606.chunk.js.map