"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8064],{8064:(M,l,n)=>{n.r(l),n.d(l,{HomePageModule:()=>f});var g=n(1368),a=n(2112),d=n(4716),h=n(8244);const u=(0,n(6400).C_)("App",{web:()=>n.e(4736).then(n.bind(n,4736)).then(o=>new o.AppWeb)});var t=n(4496),r=n(5696);const P=[{path:"",component:(()=>{var o;class s{constructor(e,m){this.auth=e,this.ngZone=m}ngOnInit(){}ionViewWillEnter(){u.addListener("appStateChange",e=>{e.isActive&&this.ngZone.run(()=>{this.auth.checkAndRequestPermissions()})}),this.auth.checkAndRequestPermissions()}}return(o=s).\u0275fac=function(e){return new(e||o)(t.GI1(r.o),t.GI1(t.WW2))},o.\u0275cmp=t.In1({type:o,selectors:[["app-home"]],decls:14,vars:0,consts:[["slot","bottom"],["tab","profile","href","/home/profile"],["src","assets/icon/profile.svg"],["tab","sos","href","/home/sos",1,"SosButton_small"],["src","assets/icon/SosButton_small.svg"],["tab","settings","href","/home/settings"],["src","assets/icon/settings.svg"]],template:function(e,m){1&e&&(t.I0R(0,"ion-tabs")(1,"ion-tab-bar",0)(2,"ion-tab-button",1),t.wR5(3,"ion-icon",2),t.I0R(4,"ion-label"),t.OEk(5,"Protocol"),t.C$Y()(),t.I0R(6,"ion-tab-button",3),t.wR5(7,"ion-icon",4),t.I0R(8,"ion-label"),t.OEk(9,"Home"),t.C$Y()(),t.I0R(10,"ion-tab-button",5),t.wR5(11,"ion-icon",6),t.I0R(12,"ion-label"),t.OEk(13,"Profile"),t.C$Y()()()())},dependencies:[a.Ko,a.QR,a.mx,a.ej,a.CE],styles:["ion-label[_ngcontent-%COMP%]{font-size:medium;position:absolute;bottom:11px}ion-icon[_ngcontent-%COMP%]{position:absolute;bottom:35px}.SosButton_small[_ngcontent-%COMP%]{height:200%;position:relative;background-color:transparent}.SosButton_small[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{height:60%;width:60%;position:absolute;top:0}.SosButton_small[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{position:absolute;bottom:50px;color:#ff7e7e;font-size:medium}ion-tab-bar[_ngcontent-%COMP%]{contain:unset;height:80px;--background: #FFFFFF;--border: 0;box-shadow:0 -5px 15px -3px #0000001f}"]}),s})(),children:[{path:"sos",loadChildren:()=>n.e(3808).then(n.bind(n,3808)).then(o=>o.SosPageModule)},{path:"profile",loadChildren:()=>n.e(6200).then(n.bind(n,6200)).then(o=>o.ProfilePageModule)},{path:"settings",loadChildren:()=>n.e(2616).then(n.bind(n,2616)).then(o=>o.SettingsPageModule)},{path:"",redirectTo:"/home/sos",pathMatch:"full"}]}];let p=(()=>{var o;class s{}return(o=s).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.a4G({type:o}),o.\u0275inj=t.s3X({imports:[h.qQ.forChild(P),h.qQ]}),s})(),f=(()=>{var o;class s{}return(o=s).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.a4G({type:o}),o.\u0275inj=t.s3X({imports:[g.MD,d.y,a.wZ,p]}),s})()}}]);