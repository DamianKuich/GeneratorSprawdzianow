(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1001:function(e,t,a){"use strict";var n=a(34),r=a(104);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a(1)),i=(0,n(a(105)).default)(o.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"}),"FileCopy");t.default=i},1002:function(e,t,a){"use strict";var n=a(34),r=a(104);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a(1)),i=(0,n(a(105)).default)(o.createElement("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");t.default=i},1003:function(e,t,a){"use strict";var n=a(34),r=a(104);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a(1)),i=(0,n(a(105)).default)(o.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=i},1668:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=(a(0),a(375),a(61)),i=a(473),l=a(41),s=a(65),c=(a(602),a(37)),u=a(456),d=a(169),m=a(470),p=a(103),f=a(51),h=a(6),b=a(2),g=a(4),v=a(7),y=n.forwardRef((function(e,t){var a=e.classes,r=e.className,o=e.raised,i=void 0!==o&&o,l=Object(g.a)(e,["classes","className","raised"]);return n.createElement(d.a,Object(b.a)({className:Object(h.a)(a.root,r),elevation:i?8:1,ref:t},l))})),E=Object(v.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(y),w=n.forwardRef((function(e,t){var a=e.action,r=e.avatar,o=e.classes,i=e.className,l=e.component,s=void 0===l?"div":l,c=e.disableTypography,u=void 0!==c&&c,d=e.subheader,m=e.subheaderTypographyProps,f=e.title,v=e.titleTypographyProps,y=Object(g.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),E=f;null==E||E.type===p.a||u||(E=n.createElement(p.a,Object(b.a)({variant:r?"body2":"h5",className:o.title,component:"span",display:"block"},v),E));var w=d;return null==w||w.type===p.a||u||(w=n.createElement(p.a,Object(b.a)({variant:r?"body2":"body1",className:o.subheader,color:"textSecondary",component:"span",display:"block"},m),w)),n.createElement(s,Object(b.a)({className:Object(h.a)(o.root,i),ref:t},y),r&&n.createElement("div",{className:o.avatar},r),n.createElement("div",{className:o.content},E,w),a&&n.createElement("div",{className:o.action},a))})),k=Object(v.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(w),S=n.forwardRef((function(e,t){var a=e.disableSpacing,r=void 0!==a&&a,o=e.classes,i=e.className,l=Object(g.a)(e,["disableSpacing","classes","className"]);return n.createElement("div",Object(b.a)({className:Object(h.a)(o.root,i,!r&&o.spacing),ref:t},l))})),x=Object(v.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(S),C=a(461),O=a(1001),j=a.n(O),z=a(613),N=a.n(z),P=a(151),T=a.n(P);Object(u.a)((function(e){return{root:{minWidth:550,maxWidth:550,maxHeight:200,justifyContent:"center",alignItems:"center"},marginAutoItem:{margin:"auto"}}}));var G=a(638),I=a(84),A=a(554),M=a(181),W=a(180),F=(a(823),a(571)),q=a(521),R=a(523),_=a(522),H=a(520),L=a(519),V=a(158);var Z=function(e){console.log("taskparser",e);var t=JSON.parse(JSON.stringify(e));if(t.answers={},t.correctans=JSON.parse(t.correctans.replace(/'/g,'"')),t.wronganswers=JSON.parse(t.wronganswers.replace(/'/g,'"')),t.answers={correctans:t.correctans,wronganswers:t.wronganswers},"2"==e.type){var a=function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e}([{index:1,isCorrect:!1},{index:0,isCorrect:!0},{index:2,isCorrect:!1},{index:0,isCorrect:!1}]);t.currentAnswers={correctans:t.correctans,wronganswers:t.wronganswers,answersIndexes:a}}else"1"==e.type&&(t.currentAnswers={correctans:[{}],wronganswers:[{}],answersIndexes:[]});return t.maxPoints=JSON.parse(t.points),console.log("taskparser nn",t),t},B=function(e){return e.map(Z)},D=a(468),J=a(529),U=a(531),$=a(472),K=a(467),Q=a(469),X=a(530),Y={standard:D.a,filled:J.a,outlined:U.a},ee=n.forwardRef((function(e,t){var a=e.autoComplete,r=e.autoFocus,o=void 0!==r&&r,i=e.children,l=e.classes,s=e.className,c=e.color,u=void 0===c?"primary":c,d=e.defaultValue,m=e.disabled,p=void 0!==m&&m,f=e.error,v=void 0!==f&&f,y=e.FormHelperTextProps,E=e.fullWidth,w=void 0!==E&&E,k=e.helperText,S=e.hiddenLabel,x=e.id,C=e.InputLabelProps,O=e.inputProps,j=e.InputProps,z=e.inputRef,N=e.label,P=e.multiline,T=void 0!==P&&P,G=e.name,I=e.onBlur,A=e.onChange,M=e.onFocus,W=e.placeholder,F=e.required,q=void 0!==F&&F,R=e.rows,_=e.rowsMax,H=e.select,L=void 0!==H&&H,V=e.SelectProps,Z=e.type,B=e.value,D=e.variant,J=void 0===D?"standard":D,U=Object(g.a)(e,["autoComplete","autoFocus","children","classes","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","hiddenLabel","id","InputLabelProps","inputProps","InputProps","inputRef","label","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","rowsMax","select","SelectProps","type","value","variant"]);var ee={};if("outlined"===J&&(C&&void 0!==C.shrink&&(ee.notched=C.shrink),N)){var te,ae=null!==(te=null==C?void 0:C.required)&&void 0!==te?te:q;ee.label=n.createElement(n.Fragment,null,N,ae&&" *")}L&&(V&&V.native||(ee.id=void 0),ee["aria-describedby"]=void 0);var ne=k&&x?"".concat(x,"-helper-text"):void 0,re=N&&x?"".concat(x,"-label"):void 0,oe=Y[J],ie=n.createElement(oe,Object(b.a)({"aria-describedby":ne,autoComplete:a,autoFocus:o,defaultValue:d,fullWidth:w,multiline:T,name:G,rows:R,rowsMax:_,type:Z,value:B,id:x,inputRef:z,onBlur:I,onChange:A,onFocus:M,placeholder:W,inputProps:O},ee,j));return n.createElement(K.a,Object(b.a)({className:Object(h.a)(l.root,s),disabled:p,error:v,fullWidth:w,hiddenLabel:S,ref:t,required:q,color:u,variant:J},U),N&&n.createElement($.a,Object(b.a)({htmlFor:x,id:re},C),N),L?n.createElement(X.a,Object(b.a)({"aria-describedby":ne,id:x,labelId:re,value:B,input:ie},V),i):ie,k&&n.createElement(Q.a,Object(b.a)({id:ne},y),k))})),te=Object(v.a)({root:{}},{name:"MuiTextField"})(ee),ae=a(464),ne=a(465),re=a(527),oe=a(525),ie=a(524),le=a(526),se=a(1002),ce=a.n(se),ue=a(1003),de=a.n(ue),me=a(186),pe=a(595),fe=a(528);function he(e){return(he="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function be(e){return function(e){if(Array.isArray(e))return ge(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return ge(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return ge(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ge(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function ve(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ye(e,t){return(ye=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ee(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Se(e);if(t){var r=Se(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return we(this,a)}}function we(e,t){return!t||"object"!==he(t)&&"function"!=typeof t?ke(e):t}function ke(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Se(e){return(Se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function xe(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Ce(){return(Ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}Object(u.a)((function(e){return{root:{maxHeight:200,minWidth:575,maxWidth:575},marginAutoItem:{margin:"auto"}}}));var Oe=Object(u.a)((function(e){return{arrow:{color:e.palette.common.grey},tooltip:{backgroundColor:e.palette.grey}}}));function je(e){var t=Oe();return r.a.createElement(G.a,Ce({arrow:!0,classes:t},e))}var ze={paperContainer:{backgroundImage:"url(".concat(F.a,")"),minHeight:1e3},examCardContainer:{width:700,backgroundColor:"#FEFEFA"},cardTitle:{textAlign:"center"}},Ne=(Object(u.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ye(e,t)}(h,e);var t,a,n,u=Ee(h);function h(e){var t,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h),xe(ke(a=u.call(this,e)),"updateExams",(function(){a.setState({exams:null}),o.b.get("/user/tests/").then((function(e){console.log("UE update response",e,"exams",e.data),a.setState({exams:e.data})})).catch((function(e){console.log("UE update error response",e)}))})),xe(ke(a),"addExam",(function(e){a.setState((function(t){return t.exams=[e].concat(t.exams),t}))})),xe(ke(a),"createExamCopy",(function(e){o.b.post("/user/maketest/",{name:e.name+"-kopia",tasks:e.tasks}).then((function(e){a.addExam(e.data[0])}))})),xe(ke(a),"removeExam",(function(e){o.b.post("/user/deletetest/",{id:e.id}).then((function(e){console.log("usunięto"),a.updateExams()}))})),xe(ke(a),"handleToggle",(function(e,t,n){return function(){a.setState({autoGenSkills:a.state.autoGenSkills.concat(e)});var r=a.state.checked.indexOf(e),o=be(a.state.checked);if(-1===r){o.push(e);var i=+t+ +a.state.otwCount,l=+n+ +a.state.zamkCount;a.setState({otwCount:i,zamkCount:l})}else{o.splice(r,1);var s=+a.state.otwCount-+t,c=+a.state.zamkCount-+n;a.setState({otwCount:s,zamkCount:c})}a.setState({checked:o})}})),xe(ke(a),"hideSection",(function(e){return function(){if(a.state.hiddenSections.includes(e.id)){var t=a.state.hiddenSections.indexOf(e.id),n=be(a.state.hiddenSections);n.splice(t),a.setState({hiddenSections:n})}else{var r=e.id,o=be(a.state.hiddenSections);o.push(r),a.setState({hiddenSections:o})}}})),xe(ke(a),"handleToggleAll",(function(e){return function(){a.setState({autoGenSkills:a.state.autoGenSkills.concat(value)});var e=a.state.checked.indexOf(value),t=be(a.state.checked);if(-1===e){t.push(value);var n=+otw+ +a.state.otwCount,r=+zamk+ +a.state.zamkCount;a.setState({otwCount:n,zamkCount:r})}else{t.splice(e,1);var o=+a.state.otwCount-+otw,i=+a.state.zamkCount-+zamk;a.setState({otwCount:o,zamkCount:i})}a.setState({checked:t})}})),a.state=(xe(t={exams:null,open:!1,listExpand:{},generatedId:null,generatedName:null,sections:null,groups:null,ileotw:"",ilezamk:"",level:"",skills:""},"groups",""),xe(t,"autoGenSkills",[]),xe(t,"checked",[]),xe(t,"hiddenSections",[]),xe(t,"otwCount",null),xe(t,"zamkCount",null),xe(t,"autoGeneStep","1"),xe(t,"isGathering",!1),xe(t,"isGenerating",!1),t),a.handleToggle=a.handleToggle.bind(ke(a)),a.handleToggleAll=a.handleToggleAll.bind(ke(a)),a.hideSection=a.hideSection.bind(ke(a)),a}return t=h,(a=[{key:"componentDidMount",value:function(){this.updateExams()}},{key:"render",value:function(){var e=this,t=(this.props.classes,this.state.exams),a=this.state.sections;return t?r.a.createElement("div",null,r.a.createElement(d.a,{style:ze.paperContainer},r.a.createElement(i.a,{p:18},r.a.createElement(m.a,{alignItems:"center",justify:"center",container:!0,direction:"column"},r.a.createElement(E,{style:ze.examCardContainer,justify:"center",alignItems:"center"},r.a.createElement(k,{style:ze.cardTitle,title:"Dodaj sprawdzian"}),r.a.createElement(A.a,null,r.a.createElement(l.c,{initialValues:{name:""},validationSchema:s.d().shape({name:s.f().min(2,"Nazwa za krotka").max(50,"Nazwa za dluga").required("Pole wymagane")}),onSubmit:function(t,a){setTimeout((function(){a.setSubmitting(!0),o.b.post("/user/maketest/",{name:t.name,tasks:""}).then((function(t){console.log("UE create response",t),e.addExam(t.data[0]),e.props.enqueueSnackbar("Utworzyłeś nowy sprawdzian",{variant:"success"}),a.setSubmitting(!1)})).catch((function(t){t.response,a.setSubmitting(!1),e.props.enqueueSnackbar("Nazwa zajęta",{variant:"error"}),a.setTouched({name:!1},!1)}))}),400)}},(function(t){var a=t.values,n=t.errors,o=t.touched,i=t.handleChange,s=t.handleBlur,c=t.handleSubmit,u=t.isSubmitting;return r.a.createElement(l.b,{onSubmit:c},r.a.createElement("div",{className:"grey-text"},r.a.createElement(M.a,{labelText:"Nazwa sprawdzianu",id:"name",error:!!n.name,success:o.name&&!n.name,formControlProps:{fullWidth:!0},helperProps:{children:n.name,error:!0},inputProps:{type:"text",name:"name",onChange:i,onBlur:s,value:a.name}}),!!n.general&&r.a.createElement("div",{className:"invalid-feedback d-block pb-4"},n.general)),r.a.createElement(x,{style:{justifyContent:"center"}},r.a.createElement(f.a,{variant:"contained",color:"primary",size:"lg",type:"submit",disabled:u},"Zapisz sprawdzian"),u&&r.a.createElement(pe.a,null),r.a.createElement(f.a,{variant:"contained",color:"primary",size:"lg",onClick:function(){return e.setState({open:!e.state.open})}},"Generuj sprawdzian")))})))))),t.map((function(t){return r.a.createElement(m.a,{alignItems:"center",justify:"center",container:!0,direction:"column"},r.a.createElement(E,{style:ze.examCardContainer,justify:"center"},r.a.createElement(k,{title:t.name}),r.a.createElement(x,{disableSpacing:!0},r.a.createElement(c.b,{to:"/editor/"+t.id},r.a.createElement(je,{title:"Edytuj sprawdzian"},r.a.createElement(C.a,null,r.a.createElement(T.a,null)))),r.a.createElement(je,{title:"Skopiuj sprawdzian"},r.a.createElement(C.a,{onClick:function(){e.createExamCopy(t)}},r.a.createElement(j.a,null))),r.a.createElement(je,{title:"Usuń sprawdzian"},r.a.createElement(C.a,{onClick:function(){e.removeExam(t)}},r.a.createElement(N.a,null))))),r.a.createElement("p",null))}))),"1"==this.state.autoGeneStep?r.a.createElement(q.a,{fullWidth:!0,titlestyle:{textAlign:"center"},open:this.state.open,onClose:function(){return e.setState({open:!e.state.open,checked:[],autoGeneStep:"1",otwCount:null,zamkCount:null})}},r.a.createElement(H.a,{id:"form-dialog-title"},r.a.createElement(p.a,{variant:"h5",align:"center"},"Wygeneruj sprawdzian automatycznie")),r.a.createElement(_.a,null,r.a.createElement(i.a,{p:1},r.a.createElement(te,{fullWidth:!0,id:"level",select:!0,label:"Stopień zaawansowania",value:this.state.level,onChange:function(t){return e.setState({level:t.target.value})},helperText:"Wybierz stopień zaawansowania"},r.a.createElement(L.a,{key:"level1",value:"1"},"Podstawowy"),r.a.createElement(L.a,{key:"level2",value:"2"},"Rozszerzony")))),r.a.createElement(R.a,null,r.a.createElement(f.a,{disabled:this.state.isGathering,color:"primary",onClick:function(){e.setState({isGathering:!0}),o.b.post("/user/sections3/",{level:e.state.level}).then((function(t){var a=t.data.map((function(e){return e.skill=e.skilll,e}));e.setState({sections:a}),e.setState({autoGeneStep:"2"}),e.setState({isGathering:!1})})).catch((function(t){e.setState({isGathering:!1}),e.props.enqueueSnackbar("Wybierz poziom",{variant:"error"}),console.log(t)}))}},"Dalej"),this.state.isGathering&&r.a.createElement(pe.a,null))):r.a.createElement(r.a.Fragment,null),"2"==this.state.autoGeneStep?r.a.createElement(l.c,{initialValues:{examName:"",ileOtw:"0",groups:"",ileZamk:"0"},validationSchema:s.d().shape({examName:s.f().min(2,"Nazwa za krotka").max(50,"Nazwa za dluga").required("Pole wymagane"),groups:s.f().required("Pole wymagane"),ileOtw:s.f().required("Pole wymagane"),ileZamk:s.f().required("Pole wymagane")}),onSubmit:function(t,a){setTimeout((function(){a.setSubmitting(!0),o.b.post("/user/maketest/",{examName:t.examName,tasks:""}).then((function(t){console.log("UE create response",t),e.addExam(t.data[0]),e.props.enqueueSnackbar("Utworzyłeś nowy sprawdzian",{variant:"success"}),a.setSubmitting(!1)})).catch((function(t){t.response,a.setSubmitting(!1),e.props.enqueueSnackbar("Nazwa zajęta",{variant:"error"}),a.setTouched({examName:!1},!1)}))}),400)}},(function(t){var n=t.values,s=(t.errors,t.touched,t.handleChange,t.handleBlur,t.handleSubmit);return t.isSubmitting,r.a.createElement(l.b,{onSubmit:s},r.a.createElement(q.a,{fullWidth:!0,titlestyle:{textAlign:"center"},open:e.state.open,onClose:function(){return e.setState({open:!e.state.open,checked:[],autoGeneStep:"1",otwCount:null,zamkCount:null})}},r.a.createElement(H.a,{id:"form-dialog-title"},r.a.createElement(p.a,{variant:"h5",align:"center"},"Wygeneruj sprawdzian automatycznie")),r.a.createElement(_.a,null,r.a.createElement(l.a,{component:I.a,name:"examName",formControlProps:{fullWidth:!0},labelText:"Nazwa sprawdzianu"}),r.a.createElement(l.a,{component:I.a,name:"groups",formControlProps:{fullWidth:!0},labelText:"Ilość grup"}),r.a.createElement(l.a,{component:I.a,name:"ileOtw",formControlProps:{fullWidth:!0},labelText:"Ile zadań otwartych",inputProps:{endAdornment:r.a.createElement(fe.a,{position:"end"},"/",e.state.otwCount)}}),r.a.createElement(l.a,{component:I.a,name:"ileZamk",formControlProps:{fullWidth:!0},labelText:"Ile zadań zamkniętych",inputProps:{endAdornment:r.a.createElement(fe.a,{position:"end"},"/",e.state.zamkCount)}}),r.a.createElement(i.a,{p:1},r.a.createElement(ae.a,null,a.map((function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne.a,{button:!0,onClick:e.hideSection(t)},r.a.createElement(oe.a,{primary:r.a.createElement("h3",null,t.Section),secondary:"Dostępnych zadań: "+t.sectionTaskCount}),-1!==e.state.hiddenSections.indexOf(t.id)?r.a.createElement(ce.a,null):r.a.createElement(de.a,null),r.a.createElement(ie.a,null)),r.a.createElement(le.a,{in:e.state.hiddenSections.includes(t.id),timeout:"auto",unmountOnExit:!0},r.a.createElement(ae.a,{component:"div",disablePadding:!0},t.skill.map((function(t){return r.a.createElement(ne.a,{button:!0,key:t.id,onClick:e.handleToggle(t.id,t.taskCountOtw,t.taskCountZamk)},r.a.createElement(re.a,null,r.a.createElement(V.a,{edge:"start",checked:-1!==e.state.checked.indexOf(t.id),tabIndex:-1})),r.a.createElement(oe.a,{primary:t.Skill,secondary:"Zadań otwartych: "+t.taskCountOtw+" Zadań zamkniętych: "+t.taskCountZamk}))})))))}))))),r.a.createElement(R.a,null,r.a.createElement(f.a,{color:"primary",disabled:e.state.isGenerating,onClick:function(){e.setState({isGenerating:!0}),o.b.post("/user/getrandomtasks/",{ileotw:n.ileOtw,ilezamk:n.ileZamk,level:e.state.level,skills:e.state.checked.join(", "),groups:n.groups}).then((function(t){var a=0;t.data.map((function(t){var r=JSON.stringify(B(t));++a,o.b.post("/user/maketest/",{name:n.examName+" Grupa "+a,tasks:r}).then((function(t){console.log(r),e.setState({isGenerating:!1}),e.props.history.go(0)})).catch((function(t){e.setState({isGenerating:!1}),e.props.enqueueSnackbar("Coś poszło nie tak, spróbuj ponownie",{variant:"error"})}))}))})).catch((function(t){e.setState({isGenerating:!1}),e.props.enqueueSnackbar("Coś poszło nie tak, spróbuj ponownie",{variant:"error"}),console.log("chngpass error",t.response)}))}},"Generuj"),e.state.isGenerating&&r.a.createElement(pe.a,null))))})):r.a.createElement(r.a.Fragment,null)):r.a.createElement(me.a,{message:"Ładowanie kolekcji sprawdzianów"})}}])&&ve(t.prototype,a),n&&ve(t,n),h}(n.Component));Ne.propTypes={};t.default=Object(W.c)(Ne)},548:function(e,t,a){"use strict";a.r(t);t.default={cardBody:{padding:"0.9375rem 1.875rem",flex:"1 1 auto"}}},554:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(1),r=a.n(n),o=a(3),i=a.n(o),l=a(0),s=a.n(l),c=a(456),u=a(548);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var f=Object(c.a)(u.default);function h(e){var t,a=f(),n=e.className,o=e.children,l=p(e,["className","children"]),s=i()((m(t={},a.cardBody,!0),m(t,n,void 0!==n),t));return r.a.createElement("div",d({className:s},l),o)}h.propTypes={className:s.a.string,children:s.a.node}},571:function(e,t,a){"use strict";t.a=a.p+"29a2f630b088eabfaa8f98afec0658ab.png"},595:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(1),r=a.n(n),o=a(456),i=a(466),l=Object(o.a)((function(e){return{root:{display:"flex",alignItems:"center"},wrapper:{margin:e.spacing(1),position:"relative"}}}));function s(){var e=l();return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.wrapper},r.a.createElement(i.a,{size:20,className:e.buttonProgress,style:{color:"purple"}})))}},602:function(e,t,a){"use strict";a(1)},613:function(e,t,a){"use strict";var n=a(34),r=a(104);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a(1)),i=(0,n(a(105)).default)(o.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=i},823:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(1),r=a.n(n),o=a(1675),i=a(1669);function l(e){var t=e.notification;e.setNotification;return r.a.createElement(o.a,{open:t.isOpen,autoHideDuration:30},r.a.createElement(i.a,{severity:t.type},t.message))}}}]);