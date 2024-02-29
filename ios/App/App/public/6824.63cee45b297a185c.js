"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6824],{6824:(ke,Q,p)=>{p.r(Q),p.d(Q,{ion_modal:()=>ge});var D=p(1528),h=p(2992),M=p(2816),H=p(495),u=p(6384),ne=p(3464),$=p(2032),b=p(1008),l=p(3816),E=p(5256),z=p(6256),L=p(8523),U=p(8888),f=p(388),de=p(6944),le=p(2528),X=p(4829),F=(p(2784),p(56),p(6560),function(e){return e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT",e}(F||{}));const V={getEngine(){const e=(0,b.g)();if(null!=e&&e.isPluginAvailable("StatusBar"))return e.Plugins.StatusBar},supportsDefaultStatusBarStyle(){const e=(0,b.g)();return!(null==e||!e.PluginHeaders)},setStyle(e){const t=this.getEngine();t&&t.setStyle(e)},getStyle:(e=(0,D.c)(function*(){const t=this.getEngine();if(!t)return F.Default;const{style:n}=yield t.getInfo();return n}),function(){return e.apply(this,arguments)})},oe=(e,t)=>{if(1===t)return 0;const n=1/(1-t);return e*n+-t*n},ce=()=>{!X.w||X.w.innerWidth>=768||!V.supportsDefaultStatusBarStyle()||V.setStyle({style:F.Dark})},re=(e=F.Default)=>{!X.w||X.w.innerWidth>=768||!V.supportsDefaultStatusBarStyle()||V.setStyle({style:e})},pe=function(){var e=(0,D.c)(function*(t,n){"function"!=typeof t.canDismiss||!(yield t.canDismiss(void 0,l.G))||(n.isRunning()?n.onFinish(()=>{t.dismiss(void 0,"handler")},{oneTimeCallback:!0}):t.dismiss(void 0,"handler"))});return function(n,o){return e.apply(this,arguments)}}(),ie=e=>.00255275*2.71828**(-14.9619*e)-1.00255*2.71828**(-.0380968*e)+1,he=(e,t)=>(0,u.l)(400,e/Math.abs(1.1*t),500),fe=e=>{const{currentBreakpoint:t,backdropBreakpoint:n}=e,o=void 0===n||n<t,i=o?`calc(var(--backdrop-opacity) * ${t})`:"0",r=(0,f.c)("backdropAnimation").fromTo("opacity",0,i);return o&&r.beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),{wrapperAnimation:(0,f.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(100%)"},{offset:1,opacity:1,transform:`translateY(${100-100*t}%)`}]),backdropAnimation:r}},ue=e=>{const{currentBreakpoint:t,backdropBreakpoint:n}=e,o=`calc(var(--backdrop-opacity) * ${oe(t,n)})`,i=[{offset:0,opacity:o},{offset:1,opacity:0}],r=[{offset:0,opacity:o},{offset:n,opacity:0},{offset:1,opacity:0}],s=(0,f.c)("backdropAnimation").keyframes(0!==n?r:i);return{wrapperAnimation:(0,f.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:`translateY(${100-100*t}%)`},{offset:1,opacity:1,transform:"translateY(100%)"}]),backdropAnimation:s}},me=(e,t)=>{const{presentingEl:n,currentBreakpoint:o}=t,i=(0,u.g)(e),{wrapperAnimation:r,backdropAnimation:s}=void 0!==o?fe(t):{backdropAnimation:(0,f.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,f.c)().fromTo("transform","translateY(100vh)","translateY(0vh)")};s.addElement(i.querySelector("ion-backdrop")),r.addElement(i.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const a=(0,f.c)("entering-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(r);if(n){const d=window.innerWidth<768,v="ION-MODAL"===n.tagName&&void 0!==n.presentingElement,k=(0,u.g)(n),A=(0,f.c)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),x=document.body;if(d){const _=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",w=`translateY(${v?"-10px":_}) scale(0.93)`;A.afterStyles({transform:w}).beforeAddWrite(()=>x.style.setProperty("background-color","black")).addElement(n).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:w,borderRadius:"10px 10px 0 0"}]),a.addAnimation(A)}else if(a.addAnimation(s),v){const y=`translateY(-10px) scale(${v?.93:1})`;A.afterStyles({transform:y}).addElement(k.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:y}]);const c=(0,f.c)().afterStyles({transform:y}).addElement(k.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:y}]);a.addAnimation([A,c])}else r.fromTo("opacity","0","1")}else a.addAnimation(s);return a},be=(e,t,n=500)=>{const{presentingEl:o,currentBreakpoint:i}=t,r=(0,u.g)(e),{wrapperAnimation:s,backdropAnimation:a}=void 0!==i?ue(t):{backdropAnimation:(0,f.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,f.c)().fromTo("transform","translateY(0vh)","translateY(100vh)")};a.addElement(r.querySelector("ion-backdrop")),s.addElement(r.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const d=(0,f.c)("leaving-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(n).addAnimation(s);if(o){const v=window.innerWidth<768,k="ION-MODAL"===o.tagName&&void 0!==o.presentingElement,A=(0,u.g)(o),x=(0,f.c)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(y=>{1===y&&(o.style.setProperty("overflow",""),Array.from(_.querySelectorAll("ion-modal:not(.overlay-hidden)")).filter(w=>void 0!==w.presentingElement).length<=1&&_.style.setProperty("background-color",""))}),_=document.body;if(v){const y=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",j=`translateY(${k?"-10px":y}) scale(0.93)`;x.addElement(o).keyframes([{offset:0,filter:"contrast(0.85)",transform:j,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),d.addAnimation(x)}else if(d.addAnimation(a),k){const c=`translateY(-10px) scale(${k?.93:1})`;x.addElement(A.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:c},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const w=(0,f.c)().addElement(A.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:c},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);d.addAnimation([x,w])}else s.fromTo("opacity","1","0")}else d.addAnimation(a);return d},Ee=(e,t)=>{const{currentBreakpoint:n}=t,o=(0,u.g)(e),{wrapperAnimation:i,backdropAnimation:r}=void 0!==n?fe(t):{backdropAnimation:(0,f.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,f.c)().keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}])};return r.addElement(o.querySelector("ion-backdrop")),i.addElement(o.querySelector(".modal-wrapper")),(0,f.c)().addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([r,i])},De=(e,t)=>{const{currentBreakpoint:n}=t,o=(0,u.g)(e),{wrapperAnimation:i,backdropAnimation:r}=void 0!==n?ue(t):{backdropAnimation:(0,f.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,f.c)().keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}])};return r.addElement(o.querySelector("ion-backdrop")),i.addElement(o.querySelector(".modal-wrapper")),(0,f.c)().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([r,i])},ge=class{constructor(e){(0,h.r)(this,e),this.didPresent=(0,h.d)(this,"ionModalDidPresent",7),this.willPresent=(0,h.d)(this,"ionModalWillPresent",7),this.willDismiss=(0,h.d)(this,"ionModalWillDismiss",7),this.didDismiss=(0,h.d)(this,"ionModalDidDismiss",7),this.ionBreakpointDidChange=(0,h.d)(this,"ionBreakpointDidChange",7),this.didPresentShorthand=(0,h.d)(this,"didPresent",7),this.willPresentShorthand=(0,h.d)(this,"willPresent",7),this.willDismissShorthand=(0,h.d)(this,"willDismiss",7),this.didDismissShorthand=(0,h.d)(this,"didDismiss",7),this.ionMount=(0,h.d)(this,"ionMount",7),this.lockController=(0,ne.c)(),this.triggerController=(0,l.e)(),this.coreDelegate=(0,H.C)(),this.isSheetModal=!1,this.inheritedAttributes={},this.inline=!1,this.gestureAnimationDismissing=!1,this.onHandleClick=()=>{const{sheetTransition:t,handleBehavior:n}=this;"cycle"!==n||void 0!==t||this.moveToNextBreakpoint()},this.onBackdropTap=()=>{const{sheetTransition:t}=this;void 0===t&&this.dismiss(void 0,l.B)},this.onLifecycle=t=>{const n=this.usersElement,o=Me[t.type];if(n&&o){const i=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:t.detail});n.dispatchEvent(i)}},this.presented=!1,this.hasController=!1,this.overlayIndex=void 0,this.delegate=void 0,this.keyboardClose=!0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.breakpoints=void 0,this.initialBreakpoint=void 0,this.backdropBreakpoint=0,this.handle=void 0,this.handleBehavior="none",this.component=void 0,this.componentProps=void 0,this.cssClass=void 0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.presentingElement=void 0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0,this.keepContentsMounted=!1,this.canDismiss=!0}onIsOpenChange(e,t){!0===e&&!1===t?this.present():!1===e&&!0===t&&this.dismiss()}triggerChanged(){const{trigger:e,el:t,triggerController:n}=this;e&&n.addClickListener(t,e)}breakpointsChanged(e){void 0!==e&&(this.sortedBreakpoints=e.sort((t,n)=>t-n))}connectedCallback(){const{el:e}=this;(0,l.j)(e),this.triggerChanged()}disconnectedCallback(){this.triggerController.removeClickListener()}componentWillLoad(){const{breakpoints:e,initialBreakpoint:t,el:n}=this,o=this.isSheetModal=void 0!==e&&void 0!==t;this.inheritedAttributes=(0,u.k)(n,["aria-label","role"]),o&&(this.currentBreakpoint=this.initialBreakpoint),void 0!==e&&void 0!==t&&!e.includes(t)&&(0,$.p)("Your breakpoints array must include the initialBreakpoint value."),(0,l.k)(n)}componentDidLoad(){!0===this.isOpen&&(0,u.r)(()=>this.present()),this.breakpointsChanged(this.breakpoints),this.triggerChanged()}getDelegate(e=!1){if(this.workingDelegate&&!e)return{delegate:this.workingDelegate,inline:this.inline};const n=this.inline=null!==this.el.parentNode&&!this.hasController;return{inline:n,delegate:this.workingDelegate=n?this.delegate||this.coreDelegate:this.delegate}}checkCanDismiss(e,t){var n=this;return(0,D.c)(function*(){const{canDismiss:o}=n;return"function"==typeof o?o(e,t):o})()}present(){var e=this;return(0,D.c)(function*(){const t=yield e.lockController.lock();if(e.presented)return void t();const{presentingElement:n,el:o}=e;e.currentBreakpoint=e.initialBreakpoint;const{inline:i,delegate:r}=e.getDelegate(!0);e.ionMount.emit(),e.usersElement=yield(0,H.a)(r,o,e.component,["ion-page"],e.componentProps,i),(0,u.m)(o)?yield(0,z.e)(e.usersElement):e.keepContentsMounted||(yield(0,z.w)()),(0,h.w)(()=>e.el.classList.add("show-modal"));const s=void 0!==n;s&&"ios"===(0,L.b)(e)&&(e.statusBarStyle=yield V.getStyle(),ce()),yield(0,l.f)(e,"modalEnter",me,Ee,{presentingEl:n,currentBreakpoint:e.initialBreakpoint,backdropBreakpoint:e.backdropBreakpoint}),typeof window<"u"&&(e.keyboardOpenCallback=()=>{e.gesture&&(e.gesture.enable(!1),(0,u.r)(()=>{e.gesture&&e.gesture.enable(!0)}))},window.addEventListener(U.KEYBOARD_DID_OPEN,e.keyboardOpenCallback)),e.isSheetModal?e.initSheetGesture():s&&e.initSwipeToClose(),t()})()}initSwipeToClose(){var t,e=this;if("ios"!==(0,L.b)(this))return;const{el:n}=this,o=this.leaveAnimation||L.c.get("modalLeave",be),i=this.animation=o(n,{presentingEl:this.presentingElement});if(!(0,M.a)(n))return void(0,M.p)(n);const s=null!==(t=this.statusBarStyle)&&void 0!==t?t:F.Default;this.gesture=((e,t,n,o)=>{const r=e.offsetHeight;let s=!1,a=!1,d=null,v=null,A=!0,x=0;const Z=(0,le.createGesture)({el:e,gestureName:"modalSwipeToClose",gesturePriority:l.O,direction:"y",threshold:10,canStart:g=>{const m=g.event.target;return null===m||!m.closest||(d=(0,M.f)(m),d?(v=(0,M.i)(d)?(0,u.g)(d).querySelector(".inner-scroll"):d,!d.querySelector("ion-refresher")&&0===v.scrollTop):null===m.closest("ion-footer"))},onStart:g=>{const{deltaY:m}=g;A=!d||!(0,M.i)(d)||d.scrollY,a=void 0!==e.canDismiss&&!0!==e.canDismiss,m>0&&d&&(0,M.d)(d),t.progressStart(!0,s?1:0)},onMove:g=>{const{deltaY:m}=g;m>0&&d&&(0,M.d)(d);const B=g.deltaY/r,P=B>=0&&a,O=P?.2:.9999,N=P?ie(B/O):B,C=(0,u.l)(1e-4,N,O);t.progressStep(C),C>=.5&&x<.5?re(n):C<.5&&x>=.5&&ce(),x=C},onEnd:g=>{const m=g.velocityY,B=g.deltaY/r,P=B>=0&&a,O=P?.2:.9999,N=P?ie(B/O):B,C=(0,u.l)(1e-4,N,O),R=!P&&(g.deltaY+1e3*m)/r>=.5;let J=R?-.001:.001;R?(t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),J+=(0,de.g)([0,0],[.32,.72],[0,1],[1,1],C)[0]):(t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),J+=(0,de.g)([0,0],[1,0],[.68,.28],[1,1],C)[0]);const ee=he(R?B*r:(1-C)*r,m);s=R,Z.enable(!1),d&&(0,M.r)(d,A),t.onFinish(()=>{R||Z.enable(!0)}).progressEnd(R?1:0,J,ee),P&&C>O/4?pe(e,t):R&&o()}});return Z})(n,i,s,()=>{this.gestureAnimationDismissing=!0,re(this.statusBarStyle),this.animation.onFinish((0,D.c)(function*(){yield e.dismiss(void 0,l.G),e.gestureAnimationDismissing=!1}))}),this.gesture.enable(!0)}initSheetGesture(){const{wrapperEl:e,initialBreakpoint:t,backdropBreakpoint:n}=this;if(!e||void 0===t)return;const o=this.enterAnimation||L.c.get("modalEnter",me),i=this.animation=o(this.el,{presentingEl:this.presentingElement,currentBreakpoint:t,backdropBreakpoint:n});i.progressStart(!0,1);const{gesture:r,moveSheetToBreakpoint:s}=((e,t,n,o,i,r,s=[],a,d,v)=>{const x={WRAPPER_KEYFRAMES:[{offset:0,transform:"translateY(0%)"},{offset:1,transform:"translateY(100%)"}],BACKDROP_KEYFRAMES:0!==i?[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1-i,opacity:0},{offset:1,opacity:0}]:[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1,opacity:.01}]},_=e.querySelector("ion-content"),y=n.clientHeight;let c=o,w=0,j=!1;const g=r.childAnimations.find(S=>"wrapperAnimation"===S.id),m=r.childAnimations.find(S=>"backdropAnimation"===S.id),B=s[s.length-1],P=s[0],O=()=>{e.style.setProperty("pointer-events","auto"),t.style.setProperty("pointer-events","auto"),e.classList.remove("ion-disable-focus-trap")},N=()=>{e.style.setProperty("pointer-events","none"),t.style.setProperty("pointer-events","none"),e.classList.add("ion-disable-focus-trap")};g&&m&&(g.keyframes([...x.WRAPPER_KEYFRAMES]),m.keyframes([...x.BACKDROP_KEYFRAMES]),r.progressStart(!0,1-c),c>i?O():N()),_&&c!==B&&(_.scrollY=!1);const ee=S=>{const{breakpoint:W,canDismiss:T,breakpointOffset:Y,animated:G}=S,K=T&&0===W,I=K?c:W,ye=0!==I;return c=0,g&&m&&(g.keyframes([{offset:0,transform:`translateY(${100*Y}%)`},{offset:1,transform:`translateY(${100*(1-I)}%)`}]),m.keyframes([{offset:0,opacity:`calc(var(--backdrop-opacity) * ${oe(1-Y,i)})`},{offset:1,opacity:`calc(var(--backdrop-opacity) * ${oe(I,i)})`}]),r.progressStep(0)),te.enable(!1),K?pe(e,r):ye||d(),new Promise(ae=>{r.onFinish(()=>{ye?g&&m?(0,u.r)(()=>{g.keyframes([...x.WRAPPER_KEYFRAMES]),m.keyframes([...x.BACKDROP_KEYFRAMES]),r.progressStart(!0,1-I),c=I,v(c),_&&c===s[s.length-1]&&(_.scrollY=!0),c>i?O():N(),te.enable(!0),ae()}):(te.enable(!0),ae()):ae()},{oneTimeCallback:!0}).progressEnd(1,0,G?500:0)})},te=(0,le.createGesture)({el:n,gestureName:"modalSheet",gesturePriority:40,direction:"y",threshold:10,canStart:S=>{const W=S.event.target.closest("ion-content");return c=a(),!(1===c&&W)},onStart:()=>{j=void 0!==e.canDismiss&&!0!==e.canDismiss&&0===P,_&&(_.scrollY=!1),(0,u.r)(()=>{e.focus()}),r.progressStart(!0,1-c)},onMove:S=>{const T=s.length>1?1-s[1]:void 0,Y=1-c+S.deltaY/y,G=void 0!==T&&Y>=T&&j,K=G?.95:.9999,I=G&&void 0!==T?T+ie((Y-T)/(K-T)):Y;w=(0,u.l)(1e-4,I,K),r.progressStep(w)},onEnd:S=>{const Y=c-(S.deltaY+350*S.velocityY)/y,G=s.reduce((K,I)=>Math.abs(I-Y)<Math.abs(K-Y)?I:K);ee({breakpoint:G,breakpointOffset:w,canDismiss:j,animated:!0})}});return{gesture:te,moveSheetToBreakpoint:ee}})(this.el,this.backdropEl,e,t,n,i,this.sortedBreakpoints,()=>{var a;return null!==(a=this.currentBreakpoint)&&void 0!==a?a:0},()=>this.sheetOnDismiss(),a=>{this.currentBreakpoint!==a&&(this.currentBreakpoint=a,this.ionBreakpointDidChange.emit({breakpoint:a}))});this.gesture=r,this.moveSheetToBreakpoint=s,this.gesture.enable(!0)}sheetOnDismiss(){var e=this;this.gestureAnimationDismissing=!0,this.animation.onFinish((0,D.c)(function*(){e.currentBreakpoint=0,e.ionBreakpointDidChange.emit({breakpoint:e.currentBreakpoint}),yield e.dismiss(void 0,l.G),e.gestureAnimationDismissing=!1}))}dismiss(e,t){var n=this;return(0,D.c)(function*(){var o;if(n.gestureAnimationDismissing&&t!==l.G)return!1;const i=yield n.lockController.lock();if("handler"!==t&&!(yield n.checkCanDismiss(e,t)))return i(),!1;const{presentingElement:r}=n;void 0!==r&&"ios"===(0,L.b)(n)&&re(n.statusBarStyle),typeof window<"u"&&n.keyboardOpenCallback&&(window.removeEventListener(U.KEYBOARD_DID_OPEN,n.keyboardOpenCallback),n.keyboardOpenCallback=void 0);const a=yield(0,l.g)(n,e,t,"modalLeave",be,De,{presentingEl:r,currentBreakpoint:null!==(o=n.currentBreakpoint)&&void 0!==o?o:n.initialBreakpoint,backdropBreakpoint:n.backdropBreakpoint});if(a){const{delegate:d}=n.getDelegate();yield(0,H.d)(d,n.usersElement),(0,h.w)(()=>n.el.classList.remove("show-modal")),n.animation&&n.animation.destroy(),n.gesture&&n.gesture.destroy()}return n.currentBreakpoint=void 0,n.animation=void 0,i(),a})()}onDidDismiss(){return(0,l.h)(this.el,"ionModalDidDismiss")}onWillDismiss(){return(0,l.h)(this.el,"ionModalWillDismiss")}setCurrentBreakpoint(e){var t=this;return(0,D.c)(function*(){if(!t.isSheetModal)return void(0,$.p)("setCurrentBreakpoint is only supported on sheet modals.");if(!t.breakpoints.includes(e))return void(0,$.p)(`Attempted to set invalid breakpoint value ${e}. Please double check that the breakpoint value is part of your defined breakpoints.`);const{currentBreakpoint:n,moveSheetToBreakpoint:o,canDismiss:i,breakpoints:r,animated:s}=t;n!==e&&o&&(t.sheetTransition=o({breakpoint:e,breakpointOffset:1-n,canDismiss:void 0!==i&&!0!==i&&0===r[0],animated:s}),yield t.sheetTransition,t.sheetTransition=void 0)})()}getCurrentBreakpoint(){var e=this;return(0,D.c)(function*(){return e.currentBreakpoint})()}moveToNextBreakpoint(){var e=this;return(0,D.c)(function*(){const{breakpoints:t,currentBreakpoint:n}=e;if(!t||null==n)return!1;const o=t.filter(a=>0!==a),r=(o.indexOf(n)+1)%o.length,s=o[r];return yield e.setCurrentBreakpoint(s),!0})()}render(){const{handle:e,isSheetModal:t,presentingElement:n,htmlAttributes:o,handleBehavior:i,inheritedAttributes:r}=this,s=!1!==e&&t,a=(0,L.b)(this),d=void 0!==n&&"ios"===a,v="cycle"===i;return(0,h.h)(h.H,Object.assign({key:"0c2c4369ab2df4ef4660addea5e927c6a0232864","no-router":!0,tabindex:"-1"},o,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign({[a]:!0,"modal-default":!d&&!t,"modal-card":d,"modal-sheet":t,"overlay-hidden":!0},(0,E.g)(this.cssClass)),onIonBackdropTap:this.onBackdropTap,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),(0,h.h)("ion-backdrop",{key:"d044383a776c2ee1703f996caedaedca47f2948f",ref:k=>this.backdropEl=k,visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),"ios"===a&&(0,h.h)("div",{class:"modal-shadow"}),(0,h.h)("div",Object.assign({key:"8d23b6a3cc9069e4d46fa0645cde9db3e6f89507",role:"dialog"},r,{"aria-modal":"true",class:"modal-wrapper ion-overlay-wrapper",part:"content",ref:k=>this.wrapperEl=k}),s&&(0,h.h)("button",{class:"modal-handle",tabIndex:v?0:-1,"aria-label":"Activate to adjust the size of the dialog overlaying the screen",onClick:v?this.onHandleClick:void 0,part:"handle"}),(0,h.h)("slot",{key:"3fbb689e4bf5575fbb26ad1000f6ac5993f3bf8f"})))}get el(){return(0,h.f)(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}},Me={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};var e;ge.style={ios:':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-card) .modal-wrapper,:host-context([dir=rtl]).modal-card .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}@supports selector(:dir(rtl)){:host(.modal-card:dir(rtl)) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-sheet) .modal-wrapper,:host-context([dir=rtl]).modal-sheet .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}@supports selector(:dir(rtl)){:host(.modal-sheet:dir(rtl)) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}}',md:':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}'}},5256:(ke,Q,p)=>{p.d(Q,{c:()=>M,g:()=>u,h:()=>h,o:()=>$});var D=p(1528);const h=(b,l)=>null!==l.closest(b),M=(b,l)=>"string"==typeof b&&b.length>0?Object.assign({"ion-color":!0,[`ion-color-${b}`]:!0},l):l,u=b=>{const l={};return(b=>void 0!==b?(Array.isArray(b)?b:b.split(" ")).filter(E=>null!=E).map(E=>E.trim()).filter(E=>""!==E):[])(b).forEach(E=>l[E]=!0),l},ne=/^[a-z][a-z0-9+\-.]*:/,$=function(){var b=(0,D.c)(function*(l,E,z,L){if(null!=l&&"#"!==l[0]&&!ne.test(l)){const U=document.querySelector("ion-router");if(U)return null!=E&&E.preventDefault(),U.push(l,z,L)}return!1});return function(E,z,L,U){return b.apply(this,arguments)}}()}}]);