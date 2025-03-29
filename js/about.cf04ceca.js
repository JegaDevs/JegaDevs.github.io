(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0981":function(e,t,a){"use strict";var i=a("f54f"),n=a.n(i);n.a},"1ba2":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Resume")]),a("div",{staticClass:"paragraph"},[e._v(" I am a Software developer with 5+ years of professional coding experience, having spent the last 3+ years specializing in Game Development. "),a("br"),e._v(" "),a("br"),e._v("I started my journey as a programmer in the game industry at 19 years old, and since then I've been passionate about creating elegant and efficient systems with solid code architecture. "),a("br"),e._v(" "),a("br"),e._v(" I'm particularly interested in network implementations for multiplayer projects, as well as its backend systems. And I've had the opportunity to develop real-time, physics driven multiplayer games using tools like Photon Quantum, Photon Fusion, Playfab, and Firebase. "),a("br"),e._v(" You can download my Resume in the button below "),a("div",{staticStyle:{"margin-top":"20px","margin-bottom":"20px"}},[a("a",{staticClass:"download-link",attrs:{href:"d/Resume.pdf",target:"_blank"}},[a("i",{staticClass:"fa fa-download fa-lg fa-fw"}),e._v(" Download as PDF 🇬🇧")]),a("div",{staticStyle:{clear:"both"}})])]),a("div",{staticClass:"photo"},[a("img",{attrs:{src:"img/resume-photo.png",alt:"Photo of Otavio"}})]),a("div",{staticStyle:{clear:"both"}})])}],o=a("2b0e"),r=o["a"].extend({name:"Resume"}),s=r,l=(a("eac7"),a("2877")),c=Object(l["a"])(s,i,n,!1,null,"2a8e596c",null);t["default"]=c.exports},"1e66":function(e,t,a){"use strict";var i=a("dec8"),n=a.n(i);n.a},"28ad":function(e,t,a){"use strict";var i=a("adac"),n=a.n(i);n.a},"38a3":function(e,t,a){},"3ded":function(e,t){},"3fa5":function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return n}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"margin-bottom":"80px"}},[a("h1",[e._v("Welcome!")]),e._m(0),a("div",{staticClass:"paragraph"},[e._m(1),a("div",{staticStyle:{"margin-top":"20px"}},[e._v("In this portfolio you will see "),a("router-link",{attrs:{to:"/game-projects"}},[e._v("my projects")]),e._v(", and my "),a("router-link",{attrs:{to:"/resume"}},[e._v("professional experience")])],1),a("div",{staticStyle:{"margin-top":"40px"}},[e._v("I'm currently "),a("strong",[e._v("looking for a job")]),e._v(", and I want to work for a studio that shows passion and care for it's games and that has an environment that supports knowledge sharing and growth within employees. You can reach me at "),a("a",{attrs:{href:"mailto:otavio080302@gmail.com"}},[e._v("otavio080302@gmail.com")]),e._v(" or "),a("router-link",{attrs:{to:"/contact"}},[e._v("through here")]),e._v(".")],1)]),a("div",{staticStyle:{clear:"both"}})])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"photo"},[a("img",{attrs:{src:"img/avatar.png",alt:"Avatar of Otavio"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v(" I'm "),a("strong",[e._v("Otavio Ludwig")]),e._v(", a unity game developer with 3.5 years of experience in the industry, but 5 I've been coding games for 5 years."),a("br"),a("br"),e._v(" I'm particularly interested in network implementations for multiplayer projects, as well as its backend systems. And I've had the opportunity to develop real-time, physics driven multiplayer games using tools like Photon Quantum, Photon Fusion, Mirror, Playfab, and Firebase. ")])}]},"4d97":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Portfolio")]),a("div",{staticStyle:{"margin-bottom":"30px"}},[e._v(" These are some of the projects I've worked on. ")]),a("ProjectsList",{attrs:{projects:e.projects}})],1)},n=[],o=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"projects-list"},[e._l(e.projects,(function(t){return[a("div",{key:t.id,staticClass:"project-item",class:{wide:t.isWide,high:t.isHigh},on:{click:function(a){return e.showDetails(t)}}},[a("div",{staticClass:"project-item-image",style:{"background-image":"url("+t.iconUrl+")"}}),a("div",{staticClass:"title-bar",style:{"background-color":t.accentColor+"DD"}},[a("div",{staticClass:"title-text"},[e._v(" "+e._s(t.name)+" ")])])])]}))],2),a("ProjectDetailsOverlay",{attrs:{visible:e.showPopup,title:e.popupTitle,htmlContent:e.popupContent,color:e.popupColor},on:{close:function(t){e.showPopup=!1}}})],1)},s=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[e.visible?a("div",[a("div",{staticClass:"overlay"}),a("div",{staticClass:"dialog",style:{"background-color":e.color}},[a("h1",{staticClass:"dialog-title"},[e._v(e._s(e.title))]),a("div",{staticClass:"dialog-close",on:{click:function(t){return e.$emit("close")}}},[a("i",{staticClass:"fa fa-times fa-lg fa-fw"})]),a("div",{staticClass:"dialog-content"},[a("div",{domProps:{innerHTML:e._s(e.htmlContent)}}),a("div",{staticClass:"dialog-bottom"},[a("a",{staticClass:"dialog-close-button",on:{click:function(t){return e.$emit("close")}}},[e._v("Close")])])])])]):e._e()])},c=[],d=o["a"].extend({name:"ProjectDetailsOverlay",props:{visible:Boolean,color:String,title:String,htmlContent:String},methods:{getImage:function(e){console.log("fetching image "+e)}}}),u=d,p=(a("1e66"),a("2877")),m=Object(p["a"])(u,l,c,!1,null,"e66acff8",null),v=m.exports,f=o["a"].extend({name:"ProjectsList",components:{ProjectDetailsOverlay:v},props:{projects:Array},data:function(){return{showPopup:!1,popupTitle:"",popupColor:"",popupContent:""}},methods:{showDetails:function(e){this.popupTitle=e.name,this.popupColor=e.accentColor,this.popupContent=e.htmlDescription,this.showPopup=!0,window.scrollTo(0,0)}}}),g=f,h=(a("28ad"),Object(p["a"])(g,r,s,!1,null,"44048e98",null)),b=h.exports,y=function(){function e(e,t,a,i,n,o,r){void 0===n&&(n="#000000"),void 0===o&&(o=!1),void 0===r&&(r=!1),this.id=e,this.name=t,this.htmlDescription=i,this.iconUrl=a,this.isHigh=o,this.isWide=r,this.accentColor=n}return e}(),w=y,_=[new w("project-1","Wheelstars","img/projects/project-1-icon.png",'\n    <div class="paragraph">\n     <strong>Wheelstars</strong> is a real-time multiplayer, physics driven, vehicle battle royale game. It uses Photon Quantum plugin as it\'s multiplayer solution, and firebase to handle cloud management. \n     <br/> I was the main programmer involved during the entire development, and we\'ve handled builds for Android, WebGL and PC.\n    </div>\n    <div class="paragraph center">\n        <iframe class="youtube" src="https://video.fastly.steamstatic.com/store_trailers/256920970/movie480_vp9.webm?t=1683759628" frameborder="0" allowfullscreen></iframe>\n    </div>\n    <div class="paragraph center">\n        <a href="https://www.crazygames.com/game/wheelstars" target="_blank"><img src="img/projects/play-store-logo.png" alt="Play Store badge" /></a>\n    </div>\n    ',"#23bd69",!1),new w("project-2","Rune Legacy Idle","img/projects/project-2-icon.png",'\n    <div class="paragraph">\n        <strong>Rune Legacy Idle</strong> is an RPG fantasy title with idle mechanics.\n    </div>\n    <div class="paragraph center">\n        <iframe class="youtube" src="https://video.fastly.steamstatic.com/store_trailers/257061835/movie480_vp9.webm?t=1728056534" frameborder="0" allowfullscreen></iframe>\n    </div>\n\n    <div class="paragraph">\n        Main features :\n        <ul>\n        <li>Sophisticated and complex UI system</li>\n        <li>Item production/economy</li>\n        <li>Online multiplayer (coop and pvp)</li>\n        <li>Cloud integration (login, save, databank, etc.)</li>\n        <li>Steam sdk integrated achievements</li>\n        </ul>\n    </div>\n     <div class="paragraph center">\n        <a href="https://store.steampowered.com/app/3098820/Rune_Legacy_Idle/" target="_blank"><img src="img/projects/play-store-logo.png" alt="Play Store badge" /></a>\n    </div>\n    ',"#5a78af"),new w("project-3","Cool coding stuff :)","img/projects/gif0.gif",'\n    <div class="paragraph">\n        <h2>Here\'s a few interesting coding features I\'ve implemented</h2>\n        <br/><br/>\n        <h3>Alien tentacle movement:</h3>\n        This tentacle procedural animation is entirely handled via code, I\'ve used a mix of lerping between joints, vector manipulation and bezier curves to achieve this "wiggle" effect in all 3 axis\n    </div>\n    <div class="paragraph center">\n        <iframe class="youtube2" src="img/projects/movie3.mp4" frameborder="0" allowfullscreen></iframe>\n        <iframe class="youtube3" src="img/projects/movie2.mp4" frameborder="0" allowfullscreen></iframe>\n    </div>\n\n    <div class="paragraph">\n        <h3>Boat buoyancy system:</h3>\n        I\'ve coded a vector manipulation system that takes into account the current wave below the boat, making it move and rotate accordingly.\n        <br/>It controls position and rotation on all 3 axis.\n    </div>\n    <div class="paragraph center">\n        <iframe class="youtube4" src="img/projects/movie4.mp4" frameborder="0" allowfullscreen></iframe>\n        </br>\n        <iframe class="youtube5" src="img/projects/gif0.gif" frameborder="0" allowfullscreen align="center" i></iframe>\n    </div>\n    \n    <div class="paragraph">\n        <h3>Pool auto gameplay:</h3>\n        In this project we needed a pool game that would play by itself. So I\'ve developed an auto gameplay system where game designer specifies desired outcome, and the logic scans and plays viable solution.\n    </div>\n    <div class="paragraph center">\n        <iframe class="youtube2" src="img/projects/movie0.webm" frameborder="0" allowfullscreen></iframe>\n        \n        <iframe class="youtube2" src="img/projects/movie1.webm" frameborder="0" allowfullscreen></iframe>\n    </div>\n    ',"#383838"),new w("project-4","Maze Discover","img/projects/project-4-icon.png",'\n    <div class="paragraph">\n     <strong>Maze Discover</strong> is an exploration arcade idle game where you play as an explorer who needs to dig up paths in ancient ruins.\n        </br>\n        In this project, I developed a rather elegant level design tool that could vastly simplify game designers\' level creations. By painting a small picture file, the system would automatically create complex mazes based on game designer expectations.\n    </div>\n    <div class="paragraph center">\n        <iframe class="youtube" src="img/projects/movie5.mp4" frameborder="0" allowfullscreen></iframe>\n    </div>\n    <div class="paragraph center">\n        <a href="https://www.crazygames.com.br/jogos/maze-discover" target="_blank"><img src="img/projects/play-store-logo.png" alt="Play Store badge" /></a>\n    </div>\n    ',"#23bd69",!1)],j=o["a"].extend({name:"GameProjects",components:{ProjectsList:b},data:function(){return{projects:_}}}),C=j,k=Object(p["a"])(C,i,n,!1,null,null,null);t["default"]=k.exports},"67f3":function(e,t,a){"use strict";var i=a("ee3f"),n=a.n(i);n.a},"8cdb":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"http-404"},[e._v("404 🙈")])},n=[],o=(a("67f3"),a("2877")),r={},s=Object(o["a"])(r,i,n,!1,null,"c64612d2",null);t["default"]=s.exports},"976a":function(e,t,a){"use strict";a.r(t);var i=a("3ded"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},adac:function(e,t,a){},af53:function(e,t,a){"use strict";var i=a("38a3"),n=a.n(i);n.a},b8fa:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Let's get in touch")]),a("div",{staticStyle:{"margin-bottom":"40px"}},[a("br"),e._v("Feel free to contact me about any opportunity, or just to chat about Persona, My Chemical Romance or anything else.")]),a("ul",[a("li",[a("i",{staticClass:"fa fa-envelope-o fa-lg fa-fw"}),a("a",{attrs:{href:"mailto:otavio080302@gmail.com",target:"_blank"}},[e._v("otavio080302@gmail.com")])]),a("li",[a("i",{staticClass:"fa fa-linkedin fa-lg fa-fw",staticStyle:{"vertical-align":"-5%"}}),a("a",{attrs:{href:"linkedin.com/in/otavio-fidelix-ludwig",target:"_blank"}},[e._v("linkedin.com/in/otavio-fidelix-ludwig")])]),a("li",[a("i",{staticClass:"fa fa-github fa-lg fa-fw"}),a("a",{attrs:{href:"https://github.com/JegaDevs",target:"_blank"}},[e._v("github.com/JegaDevs")])])])])}],o=(a("0981"),a("2877")),r={},s=Object(o["a"])(r,i,n,!1,null,"5a618a63",null);t["default"]=s.exports},dec8:function(e,t,a){},eac7:function(e,t,a){"use strict";var i=a("eb76"),n=a.n(i);n.a},eb76:function(e,t,a){},ee3f:function(e,t,a){},f54f:function(e,t,a){},f820:function(e,t,a){"use strict";a.r(t);var i=a("3fa5"),n=a("976a");for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("af53");var r=a("2877"),s=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"89579652",null);t["default"]=s.exports}}]);
//# sourceMappingURL=about.cf04ceca.js.map