(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1530:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=(n(0),n(362),n(55)),i=n(457),l=n(47),c=n(549),s=(n(597),n(33)),u=n(441),m=n(350),p=n(455),d=n(130),f=n(71),g=(n(6),n(1515)),h=n(1516),y=n(1517),b=n(446),w=n(914),E=n.n(w),k=n(640),v=n.n(k),S=n(686),C=n.n(S);Object(u.a)((function(e){return{root:{minWidth:550,maxWidth:550,maxHeight:200,justifyContent:"center",alignItems:"center"},marginAutoItem:{margin:"auto"}}}));var z=n(1504),x=n(85),O=n(535),j=n(156),N=n(157),P=(n(766),n(546)),G=n(1455),T=n(1457),A=n(1456),I=n(1453),W=n(503),q=n(139),Z=n(767),J=n(1518),U=n(449),_=n(450),D=n(507),R=n(505),F=n(504),B=n(915),H=n.n(B),M=n(916),V=n.n(M),$=n(166),K=n(561),L=n(772);function Q(e){return(Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function X(e){return function(e){if(Array.isArray(e))return Y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Y(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function ee(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function te(e,t){return(te=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ne(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=oe(e);if(t){var r=oe(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return ae(this,n)}}function ae(e,t){return!t||"object"!==Q(t)&&"function"!=typeof t?re(e):t}function re(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oe(e){return(oe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function le(){return(le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}Object(u.a)((function(e){return{root:{maxHeight:200,minWidth:575,maxWidth:575},marginAutoItem:{margin:"auto"}}}));var ce=Object(u.a)((function(e){return{arrow:{color:e.palette.common.grey},tooltip:{backgroundColor:e.palette.grey}}}));function se(e){var t=ce();return r.a.createElement(z.a,le({arrow:!0,classes:t},e))}var ue={paperContainer:{backgroundImage:"url(".concat(P.a,")"),minHeight:1e3,maxWidth:1885},examCardContainer:{width:700,backgroundColor:"#FEFEFA"},cardTitle:{textAlign:"center"}},me=(Object(u.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&te(e,t)}(w,e);var t,n,a,u=ne(w);function w(e){var t,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,w),ie(re(n=u.call(this,e)),"updateExams",(function(){n.setState({exams:null}),o.b.get("/user/tests/").then((function(e){console.log("UE update response",e,"exams",e.data),n.setState({exams:e.data})})).catch((function(e){console.log("UE update error response",e)}))})),ie(re(n),"addExam",(function(e){n.setState((function(t){return t.exams=[e].concat(t.exams),t}))})),ie(re(n),"createExamCopy",(function(e){o.b.post("/user/maketest/",{name:e.name+"-kopia",tasks:e.tasks}).then((function(e){n.addExam(e.data[0])}))})),ie(re(n),"removeExam",(function(e){o.b.post("/user/deletetest/",{id:e.id}).then((function(e){console.log("usunięto"),n.updateExams()}))})),ie(re(n),"handleToggle",(function(e,t,a){return function(){n.setState({autoGenSkills:n.state.autoGenSkills.concat(e)});var r=n.state.checked.indexOf(e),o=X(n.state.checked);if(-1===r){o.push(e);var i=+t+ +n.state.otwCount,l=+a+ +n.state.zamkCount;n.setState({otwCount:i,zamkCount:l})}else{o.splice(r,1);var c=+n.state.otwCount-+t,s=+n.state.zamkCount-+a;n.setState({otwCount:c,zamkCount:s})}n.setState({checked:o})}})),ie(re(n),"hideSection",(function(e){return function(){n.state.checked.indexOf(e.id);var t=X(n.state.checked);t.push(value),n.setState({hiddenSections:t})}})),ie(re(n),"handleToggleAll",(function(e){return function(){n.setState({autoGenSkills:n.state.autoGenSkills.concat(value)});var e=n.state.checked.indexOf(value),t=X(n.state.checked);if(-1===e){t.push(value);var a=+otw+ +n.state.otwCount,r=+zamk+ +n.state.zamkCount;n.setState({otwCount:a,zamkCount:r})}else{t.splice(e,1);var o=+n.state.otwCount-+otw,i=+n.state.zamkCount-+zamk;n.setState({otwCount:o,zamkCount:i})}n.setState({checked:t})}})),n.state=(ie(t={exams:null,open:!1,listExpand:{},generatedId:null,generatedName:null,sections:null,groups:null,ileotw:"",ilezamk:"",level:"",skills:""},"groups",""),ie(t,"autoGenSkills",[]),ie(t,"checked",[]),ie(t,"hiddenSections",[]),ie(t,"otwCount",null),ie(t,"zamkCount",null),ie(t,"autoGeneStep","1"),ie(t,"isGathering",!1),ie(t,"isGenerating",!1),t),n.handleToggle=n.handleToggle.bind(re(n)),n.handleToggleAll=n.handleToggleAll.bind(re(n)),n.hideSection=n.hideSection.bind(re(n)),n}return t=w,(n=[{key:"componentDidMount",value:function(){this.updateExams()}},{key:"render",value:function(){var e=this,t=(this.props.classes,this.state.exams),n=this.state.sections;return t?r.a.createElement("div",null,r.a.createElement(m.a,{style:ue.paperContainer},r.a.createElement(i.a,{p:12},r.a.createElement(p.a,{alignItems:"center",justify:"center",container:!0,direction:"column"},r.a.createElement(g.a,{style:ue.examCardContainer,justify:"center",alignItems:"center"},r.a.createElement(h.a,{style:ue.cardTitle,title:"Dodaj sprawdzian"}),r.a.createElement(O.a,null,r.a.createElement(l.c,{initialValues:{name:""},validationSchema:c.b().shape({name:c.d().min(2,"Nazwa za krotka").max(50,"Nazwa za dluga").required("Pole wymagane")}),onSubmit:function(t,n){setTimeout((function(){n.setSubmitting(!0),o.b.post("/user/maketest/",{name:t.name,tasks:""}).then((function(t){console.log("UE create response",t),e.addExam(t.data[0]),e.props.enqueueSnackbar("Utworzyłeś nowy sprawdzian",{variant:"success"}),n.setSubmitting(!1)})).catch((function(t){t.response,n.setSubmitting(!1),e.props.enqueueSnackbar("Nazwa zajęta",{variant:"error"}),n.setTouched({name:!1},!1)}))}),400)}},(function(t){var n=t.values,a=t.errors,o=t.touched,i=t.handleChange,c=t.handleBlur,s=t.handleSubmit,u=t.isSubmitting;return r.a.createElement(l.b,{onSubmit:s},r.a.createElement("div",{className:"grey-text"},r.a.createElement(j.a,{labelText:"Nazwa sprawdzianu",id:"name",error:!!a.name,success:o.name&&!a.name,formControlProps:{fullWidth:!0},helperProps:{children:a.name,error:!0},inputProps:{type:"text",name:"name",onChange:i,onBlur:c,value:n.name}}),!!a.general&&r.a.createElement("div",{className:"invalid-feedback d-block pb-4"},a.general)),r.a.createElement(y.a,{style:{justifyContent:"center"}},r.a.createElement(f.a,{variant:"contained",color:"primary",size:"lg",type:"submit",disabled:u},"Zapisz sprawdzian"),u&&r.a.createElement(K.a,null),r.a.createElement(f.a,{variant:"contained",color:"primary",size:"lg",onClick:function(){return e.setState({open:!e.state.open})}},"Generuj sprawdzian")))})))))),r.a.createElement("p",null),t.map((function(t){return r.a.createElement(p.a,{alignItems:"center",justify:"center",container:!0,spacing:3,direction:"column"},r.a.createElement(g.a,{style:ue.examCardContainer,justify:"center"},r.a.createElement(h.a,{title:t.name}),r.a.createElement(y.a,{disableSpacing:!0},r.a.createElement(s.b,{to:"/editor/"+t.id},r.a.createElement(se,{title:"Edytuj sprawdzian"},r.a.createElement(b.a,null,r.a.createElement(C.a,null)))),r.a.createElement(se,{title:"Skopiuj sprawdzian"},r.a.createElement(b.a,{onClick:function(){e.createExamCopy(t)}},r.a.createElement(E.a,null))),r.a.createElement(se,{title:"Usuń sprawdzian"},r.a.createElement(b.a,{onClick:function(){e.removeExam(t)}},r.a.createElement(v.a,null))))),r.a.createElement("p",null))}))),"1"==this.state.autoGeneStep?r.a.createElement(G.a,{fullWidth:!0,titlestyle:{textAlign:"center"},open:this.state.open,onClose:function(){return e.setState({open:!e.state.open,checked:[],autoGeneStep:"1",otwCount:null,zamkCount:null})}},r.a.createElement(I.a,{id:"form-dialog-title"},r.a.createElement(d.a,{variant:"h5",align:"center"},"Wygeneruj sprawdzian automatycznie")),r.a.createElement(A.a,null,r.a.createElement(i.a,{p:1},r.a.createElement(J.a,{fullWidth:!0,id:"level",select:!0,label:"Stopień zaawansowania",value:this.state.level,onChange:function(t){return e.setState({level:t.target.value})},helperText:"Wybierz stopień zaawansowania"},r.a.createElement(W.a,{key:"level1",value:"1"},"Podstawowy"),r.a.createElement(W.a,{key:"level2",value:"2"},"Rozszerzony")))),r.a.createElement(T.a,null,r.a.createElement(f.a,{disabled:this.state.isGathering,color:"primary",onClick:function(){e.setState({isGathering:!0}),o.b.post("/user/sections3/",{level:e.state.level}).then((function(t){var n=t.data.map((function(e){return e.skill=e.skilll,e}));e.setState({sections:n}),e.setState({autoGeneStep:"2"}),e.setState({isGathering:!1})})).catch((function(t){e.setState({isGathering:!1}),e.props.enqueueSnackbar("Wybierz poziom",{variant:"error"}),console.log(t)}))}},"Dalej"),this.state.isGathering&&r.a.createElement(K.a,null))):r.a.createElement(r.a.Fragment,null),"2"==this.state.autoGeneStep?r.a.createElement(l.c,{initialValues:{examName:"",ileOtw:"0",groups:"",ileZamk:"0"},validationSchema:c.b().shape({examName:c.d().min(2,"Nazwa za krotka").max(50,"Nazwa za dluga").required("Pole wymagane"),groups:c.d().required("Pole wymagane"),ileOtw:c.d().required("Pole wymagane"),ileZamk:c.d().required("Pole wymagane")}),onSubmit:function(t,n){setTimeout((function(){n.setSubmitting(!0),o.b.post("/user/maketest/",{examName:t.examName,tasks:""}).then((function(t){console.log("UE create response",t),e.addExam(t.data[0]),e.props.enqueueSnackbar("Utworzyłeś nowy sprawdzian",{variant:"success"}),n.setSubmitting(!1)})).catch((function(t){t.response,n.setSubmitting(!1),e.props.enqueueSnackbar("Nazwa zajęta",{variant:"error"}),n.setTouched({examName:!1},!1)}))}),400)}},(function(t){var a=t.values,c=(t.errors,t.touched,t.handleChange,t.handleBlur,t.handleSubmit);return t.isSubmitting,r.a.createElement(l.b,{onSubmit:c},r.a.createElement(G.a,{fullWidth:!0,titlestyle:{textAlign:"center"},open:e.state.open,onClose:function(){return e.setState({open:!e.state.open,checked:[],autoGeneStep:"1",otwCount:null,zamkCount:null})}},r.a.createElement(I.a,{id:"form-dialog-title"},r.a.createElement(d.a,{variant:"h5",align:"center"},"Wygeneruj sprawdzian automatycznie")),r.a.createElement(A.a,null,r.a.createElement(l.a,{component:x.a,name:"examName",formControlProps:{fullWidth:!0},labelText:"Nazwa sprawdzianu"}),r.a.createElement(l.a,{component:x.a,name:"groups",formControlProps:{fullWidth:!0},labelText:"Ilość grup"}),r.a.createElement(l.a,{component:x.a,name:"ileOtw",formControlProps:{fullWidth:!0},labelText:"Ile zadań otwartych",inputProps:{endAdornment:r.a.createElement(L.a,{position:"end"},"/",e.state.otwCount)}}),r.a.createElement(l.a,{component:x.a,name:"ileZamk",formControlProps:{fullWidth:!0},labelText:"Ile zadań zamkniętych",inputProps:{endAdornment:r.a.createElement(L.a,{position:"end"},"/",e.state.zamkCount)}}),r.a.createElement(i.a,{p:1},r.a.createElement(U.a,null,n.map((function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{button:!0,onClick:e.hideSection(t)},r.a.createElement(R.a,{primary:r.a.createElement("h3",null,t.Section),secondary:"Dostępnych zadań: "+t.sectionTaskCount}),-1!==e.state.hiddenSections.indexOf(t.id)?r.a.createElement(H.a,null):r.a.createElement(V.a,null),r.a.createElement(F.a,null)),r.a.createElement(U.a,{component:"div",disablePadding:!0},t.skill.map((function(t){return r.a.createElement(_.a,{button:!0,key:t.id,onClick:e.handleToggle(t.id,t.taskCountOtw,t.taskCountZamk)},r.a.createElement(D.a,null,r.a.createElement(q.a,{edge:"start",checked:-1!==e.state.checked.indexOf(t.id),tabIndex:-1})),r.a.createElement(R.a,{primary:t.Skill,secondary:"Zadań otwartych: "+t.taskCountOtw+" Zadań zamkniętych: "+t.taskCountZamk}))}))))}))))),r.a.createElement(T.a,null,r.a.createElement(f.a,{color:"primary",disabled:e.state.isGenerating,onClick:function(){e.setState({isGenerating:!0}),o.b.post("/user/getrandomtasks/",{ileotw:a.ileOtw,ilezamk:a.ileZamk,level:e.state.level,skills:e.state.checked.join(", "),groups:a.groups}).then((function(t){var n=0;t.data.map((function(t){var a=JSON.stringify(Object(Z.a)(t));++n,o.b.post("/user/maketest/",{name:e.state.generatedName+" Grupa "+n,tasks:a}).then((function(t){console.log(a),e.setState({isGenerating:!1}),e.props.history.go(0)})).catch((function(t){e.setState({isGenerating:!1}),e.props.enqueueSnackbar("Coś poszło nie tak, spróbuj ponownie",{variant:"error"})}))}))})).catch((function(t){e.setState({isGenerating:!1}),e.props.enqueueSnackbar("Coś poszło nie tak, spróbuj ponownie",{variant:"error"}),console.log("chngpass error",t.response)}))}},"Generuj"),e.state.isGenerating&&r.a.createElement(K.a,null))))})):r.a.createElement(r.a.Fragment,null)):r.a.createElement($.a,{message:"Ładowanie kolekcji sprawdzianów"})}}])&&ee(t.prototype,n),a&&ee(t,a),w}(a.Component));me.propTypes={};t.default=Object(N.c)(me)},535:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(1),r=n.n(a),o=n(3),i=n.n(o),l=n(0),c=n.n(l),s=n(441),u=n(543);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f=Object(s.a)(u.default);function g(e){var t,n=f(),a=e.className,o=e.children,l=d(e,["className","children"]),c=i()((p(t={},n.cardBody,!0),p(t,a,void 0!==a),t));return r.a.createElement("div",m({className:c},l),o)}g.propTypes={className:c.a.string,children:c.a.node}},543:function(e,t,n){"use strict";n.r(t);t.default={cardBody:{padding:"0.9375rem 1.875rem",flex:"1 1 auto"}}},546:function(e,t,n){"use strict";t.a=n.p+"29a2f630b088eabfaa8f98afec0658ab.png"},561:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(1),r=n.n(a),o=n(441),i=n(451),l=Object(o.a)((function(e){return{root:{display:"flex",alignItems:"center"},wrapper:{margin:e.spacing(1),position:"relative"}}}));function c(){var e=l();return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.wrapper},r.a.createElement(i.a,{size:20,className:e.buttonProgress,style:{color:"purple"}})))}},597:function(e,t,n){"use strict";n(1)},766:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(1),r=n.n(a),o=n(1531),i=n(1523);function l(e){var t=e.notification;e.setNotification;return r.a.createElement(o.a,{open:t.isOpen,autoHideDuration:30},r.a.createElement(i.a,{severity:t.type},t.message))}},767:function(e,t,n){"use strict";var a=function(e){console.log("taskparser",e);var t=JSON.parse(JSON.stringify(e));if(t.answers={},t.correctans=JSON.parse(t.correctans.replace(/'/g,'"')),t.wronganswers=JSON.parse(t.wronganswers.replace(/'/g,'"')),t.answers={correctans:t.correctans,wronganswers:t.wronganswers},"2"==e.type){var n=function(e){for(var t,n,a=e.length;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t;return e}([{index:1,isCorrect:!1},{index:0,isCorrect:!0},{index:2,isCorrect:!1},{index:0,isCorrect:!1}]);t.currentAnswers={correctans:t.correctans,wronganswers:t.wronganswers,answersIndexes:n}}else"1"==e.type&&(t.currentAnswers={correctans:t.correctans,wronganswers:t.wronganswers,answersIndexes:[{}]});return t.maxPoints=JSON.parse(t.points),console.log("taskparser nn",t),t};t.a=function(e){return e.map(a)}}}]);