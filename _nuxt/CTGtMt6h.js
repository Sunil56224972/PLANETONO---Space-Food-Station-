import{a6 as v,a7 as G,a8 as z,a9 as $e,aa as Be,ab as A,ac as Ue,ad as ht,ae as ut,af as mt,ag as pt,ah as gt,ai as ft,aj as bt,ak as yt,al as Ye,am as B,an as _t,ao as je,ap as vt,aq as ce,ar as R,as as pe,at as Q,au as Xe,av as J,aw as ge,ax as ae,ay as Et,az as wt,aA as xt,aB as St,aC as Ct,aD as Pt,aE as At,aF as Mt,aG as Ot,aH as Lt,aI as kt,aJ as Gt,aK as zt,aL as Tt,aM as Dt,aN as Ft,aO as $t,aP as Bt,aQ as jt,v as fe,n as be,p as Ht,aR as Nt,_ as Rt,q as It,x as Vt,E as se,s as Ut,I as Yt,y as He,c as Xt,o as Wt,a as K,B as Ne,i as q}from"#entry";let oe=null;class We{constructor(){if(oe)return oe;oe=this,this.debug=!1,this.glassColor=34047}}var U=function(a,e){e===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),e===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=a,this.domElement=e,this.enabled=!0,this.target=new v,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={LEFT:G.ROTATE,MIDDLE:G.DOLLY,RIGHT:G.PAN},this.touches={ONE:z.ROTATE,TWO:z.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.saveState=function(){t.target0.copy(t.target),t.position0.copy(t.object.position),t.zoom0=t.object.zoom},this.reset=function(){t.target.copy(t.target0),t.object.position.copy(t.position0),t.object.zoom=t.zoom0,t.object.updateProjectionMatrix(),t.dispatchEvent(i),t.update(),l=r.NONE},this.update=(function(){var n=new v,p=new Be().setFromUnitVectors(a.up,new v(0,1,0)),y=p.clone().invert(),x=new v,$=new Be,N=2*Math.PI;return function(){var Fe=t.object.position;n.copy(Fe).sub(t.target),n.applyQuaternion(p),c.setFromVector3(n),t.autoRotate&&l===r.NONE&&H(te()),t.enableDamping?(c.theta+=m.theta*t.dampingFactor,c.phi+=m.phi*t.dampingFactor):(c.theta+=m.theta,c.phi+=m.phi);var L=t.minAzimuthAngle,k=t.maxAzimuthAngle;return isFinite(L)&&isFinite(k)&&(L<-Math.PI?L+=N:L>Math.PI&&(L-=N),k<-Math.PI?k+=N:k>Math.PI&&(k-=N),L<=k?c.theta=Math.max(L,Math.min(k,c.theta)):c.theta=c.theta>(L+k)/2?Math.max(L,c.theta):Math.min(k,c.theta)),c.phi=Math.max(t.minPolarAngle,Math.min(t.maxPolarAngle,c.phi)),c.makeSafe(),c.radius*=g,c.radius=Math.max(t.minDistance,Math.min(t.maxDistance,c.radius)),t.enableDamping===!0?t.target.addScaledVector(b,t.dampingFactor):t.target.add(b),n.setFromSpherical(c),n.applyQuaternion(y),Fe.copy(t.target).add(n),t.object.lookAt(t.target),t.enableDamping===!0?(m.theta*=1-t.dampingFactor,m.phi*=1-t.dampingFactor,b.multiplyScalar(1-t.dampingFactor)):(m.set(0,0,0),b.set(0,0,0)),g=1,P||x.distanceToSquared(t.object.position)>u||8*(1-$.dot(t.object.quaternion))>u?(t.dispatchEvent(i),x.copy(t.object.position),$.copy(t.object.quaternion),P=!1,!0):!1}})(),this.dispose=function(){t.domElement.removeEventListener("contextmenu",De,!1),t.domElement.removeEventListener("pointerdown",Oe,!1),t.domElement.removeEventListener("wheel",Le,!1),t.domElement.removeEventListener("touchstart",Ge,!1),t.domElement.removeEventListener("touchend",Te,!1),t.domElement.removeEventListener("touchmove",ze,!1),t.domElement.ownerDocument.removeEventListener("pointermove",ie,!1),t.domElement.ownerDocument.removeEventListener("pointerup",ne,!1),t.domElement.removeEventListener("keydown",ke,!1)};var t=this,i={type:"change"},s={type:"start"},o={type:"end"},r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},l=r.NONE,u=1e-6,c=new $e,m=new $e,g=1,b=new v,P=!1,_=new A,E=new A,w=new A,h=new A,d=new A,f=new A,C=new A,S=new A,D=new A;function te(){return 2*Math.PI/60/60*t.autoRotateSpeed}function j(){return Math.pow(.95,t.zoomSpeed)}function H(n){m.theta-=n}function V(n){m.phi-=n}var X=(function(){var n=new v;return function(y,x){n.setFromMatrixColumn(x,0),n.multiplyScalar(-y),b.add(n)}})(),W=(function(){var n=new v;return function(y,x){t.screenSpacePanning===!0?n.setFromMatrixColumn(x,1):(n.setFromMatrixColumn(x,0),n.crossVectors(t.object.up,n)),n.multiplyScalar(y),b.add(n)}})(),O=(function(){var n=new v;return function(y,x){var $=t.domElement;if(t.object.isPerspectiveCamera){var N=t.object.position;n.copy(N).sub(t.target);var Z=n.length();Z*=Math.tan(t.object.fov/2*Math.PI/180),X(2*y*Z/$.clientHeight,t.object.matrix),W(2*x*Z/$.clientHeight,t.object.matrix)}else t.object.isOrthographicCamera?(X(y*(t.object.right-t.object.left)/t.object.zoom/$.clientWidth,t.object.matrix),W(x*(t.object.top-t.object.bottom)/t.object.zoom/$.clientHeight,t.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),t.enablePan=!1)}})();function F(n){t.object.isPerspectiveCamera?g/=n:t.object.isOrthographicCamera?(t.object.zoom=Math.max(t.minZoom,Math.min(t.maxZoom,t.object.zoom*n)),t.object.updateProjectionMatrix(),P=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),t.enableZoom=!1)}function ve(n){t.object.isPerspectiveCamera?g*=n:t.object.isOrthographicCamera?(t.object.zoom=Math.max(t.minZoom,Math.min(t.maxZoom,t.object.zoom/n)),t.object.updateProjectionMatrix(),P=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),t.enableZoom=!1)}function Ee(n){_.set(n.clientX,n.clientY)}function Qe(n){C.set(n.clientX,n.clientY)}function we(n){h.set(n.clientX,n.clientY)}function Je(n){E.set(n.clientX,n.clientY),w.subVectors(E,_).multiplyScalar(t.rotateSpeed);var p=t.domElement;H(2*Math.PI*w.x/p.clientHeight),V(2*Math.PI*w.y/p.clientHeight),_.copy(E),t.update()}function et(n){S.set(n.clientX,n.clientY),D.subVectors(S,C),D.y>0?F(j()):D.y<0&&ve(j()),C.copy(S),t.update()}function tt(n){d.set(n.clientX,n.clientY),f.subVectors(d,h).multiplyScalar(t.panSpeed),O(f.x,f.y),h.copy(d),t.update()}function it(n){n.deltaY<0?ve(j()):n.deltaY>0&&F(j()),t.update()}function nt(n){var p=!1;switch(n.keyCode){case t.keys.UP:O(0,t.keyPanSpeed),p=!0;break;case t.keys.BOTTOM:O(0,-t.keyPanSpeed),p=!0;break;case t.keys.LEFT:O(t.keyPanSpeed,0),p=!0;break;case t.keys.RIGHT:O(-t.keyPanSpeed,0),p=!0;break}p&&(n.preventDefault(),t.update())}function xe(n){if(n.touches.length==1)_.set(n.touches[0].pageX,n.touches[0].pageY);else{var p=.5*(n.touches[0].pageX+n.touches[1].pageX),y=.5*(n.touches[0].pageY+n.touches[1].pageY);_.set(p,y)}}function Se(n){if(n.touches.length==1)h.set(n.touches[0].pageX,n.touches[0].pageY);else{var p=.5*(n.touches[0].pageX+n.touches[1].pageX),y=.5*(n.touches[0].pageY+n.touches[1].pageY);h.set(p,y)}}function Ce(n){var p=n.touches[0].pageX-n.touches[1].pageX,y=n.touches[0].pageY-n.touches[1].pageY,x=Math.sqrt(p*p+y*y);C.set(0,x)}function at(n){t.enableZoom&&Ce(n),t.enablePan&&Se(n)}function st(n){t.enableZoom&&Ce(n),t.enableRotate&&xe(n)}function Pe(n){if(n.touches.length==1)E.set(n.touches[0].pageX,n.touches[0].pageY);else{var p=.5*(n.touches[0].pageX+n.touches[1].pageX),y=.5*(n.touches[0].pageY+n.touches[1].pageY);E.set(p,y)}w.subVectors(E,_).multiplyScalar(t.rotateSpeed);var x=t.domElement;H(2*Math.PI*w.x/x.clientHeight),V(2*Math.PI*w.y/x.clientHeight),_.copy(E)}function Ae(n){if(n.touches.length==1)d.set(n.touches[0].pageX,n.touches[0].pageY);else{var p=.5*(n.touches[0].pageX+n.touches[1].pageX),y=.5*(n.touches[0].pageY+n.touches[1].pageY);d.set(p,y)}f.subVectors(d,h).multiplyScalar(t.panSpeed),O(f.x,f.y),h.copy(d)}function Me(n){var p=n.touches[0].pageX-n.touches[1].pageX,y=n.touches[0].pageY-n.touches[1].pageY,x=Math.sqrt(p*p+y*y);S.set(0,x),D.set(0,Math.pow(S.y/C.y,t.zoomSpeed)),F(D.y),C.copy(S)}function ot(n){t.enableZoom&&Me(n),t.enablePan&&Ae(n)}function rt(n){t.enableZoom&&Me(n),t.enableRotate&&Pe(n)}function Oe(n){if(t.enabled!==!1)switch(n.pointerType){case"mouse":case"pen":lt(n);break}}function ie(n){if(t.enabled!==!1)switch(n.pointerType){case"mouse":case"pen":dt(n);break}}function ne(n){switch(n.pointerType){case"mouse":case"pen":ct();break}}function lt(n){n.preventDefault(),t.domElement.focus?t.domElement.focus():window.focus();var p;switch(n.button){case 0:p=t.mouseButtons.LEFT;break;case 1:p=t.mouseButtons.MIDDLE;break;case 2:p=t.mouseButtons.RIGHT;break;default:p=-1}switch(p){case G.DOLLY:if(t.enableZoom===!1)return;Qe(n),l=r.DOLLY;break;case G.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(t.enablePan===!1)return;we(n),l=r.PAN}else{if(t.enableRotate===!1)return;Ee(n),l=r.ROTATE}break;case G.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(t.enableRotate===!1)return;Ee(n),l=r.ROTATE}else{if(t.enablePan===!1)return;we(n),l=r.PAN}break;default:l=r.NONE}l!==r.NONE&&(t.domElement.ownerDocument.addEventListener("pointermove",ie,!1),t.domElement.ownerDocument.addEventListener("pointerup",ne,!1),t.dispatchEvent(s))}function dt(n){if(t.enabled!==!1)switch(n.preventDefault(),l){case r.ROTATE:if(t.enableRotate===!1)return;Je(n);break;case r.DOLLY:if(t.enableZoom===!1)return;et(n);break;case r.PAN:if(t.enablePan===!1)return;tt(n);break}}function ct(n){t.domElement.ownerDocument.removeEventListener("pointermove",ie,!1),t.domElement.ownerDocument.removeEventListener("pointerup",ne,!1),t.enabled!==!1&&(t.dispatchEvent(o),l=r.NONE)}function Le(n){t.enabled===!1||t.enableZoom===!1||l!==r.NONE&&l!==r.ROTATE||(n.preventDefault(),n.stopPropagation(),t.dispatchEvent(s),it(n),t.dispatchEvent(o))}function ke(n){t.enabled===!1||t.enableKeys===!1||t.enablePan===!1||nt(n)}function Ge(n){if(t.enabled!==!1){switch(n.preventDefault(),n.touches.length){case 1:switch(t.touches.ONE){case z.ROTATE:if(t.enableRotate===!1)return;xe(n),l=r.TOUCH_ROTATE;break;case z.PAN:if(t.enablePan===!1)return;Se(n),l=r.TOUCH_PAN;break;default:l=r.NONE}break;case 2:switch(t.touches.TWO){case z.DOLLY_PAN:if(t.enableZoom===!1&&t.enablePan===!1)return;at(n),l=r.TOUCH_DOLLY_PAN;break;case z.DOLLY_ROTATE:if(t.enableZoom===!1&&t.enableRotate===!1)return;st(n),l=r.TOUCH_DOLLY_ROTATE;break;default:l=r.NONE}break;default:l=r.NONE}l!==r.NONE&&t.dispatchEvent(s)}}function ze(n){if(t.enabled!==!1)switch(n.preventDefault(),n.stopPropagation(),l){case r.TOUCH_ROTATE:if(t.enableRotate===!1)return;Pe(n),t.update();break;case r.TOUCH_PAN:if(t.enablePan===!1)return;Ae(n),t.update();break;case r.TOUCH_DOLLY_PAN:if(t.enableZoom===!1&&t.enablePan===!1)return;ot(n),t.update();break;case r.TOUCH_DOLLY_ROTATE:if(t.enableZoom===!1&&t.enableRotate===!1)return;rt(n),t.update();break;default:l=r.NONE}}function Te(n){t.enabled!==!1&&(t.dispatchEvent(o),l=r.NONE)}function De(n){t.enabled!==!1&&n.preventDefault()}t.domElement.addEventListener("contextmenu",De,!1),t.domElement.addEventListener("pointerdown",Oe,!1),t.domElement.addEventListener("wheel",Le,!1),t.domElement.addEventListener("touchstart",Ge,!1),t.domElement.addEventListener("touchend",Te,!1),t.domElement.addEventListener("touchmove",ze,!1),t.domElement.addEventListener("keydown",ke,!1),this.update()};U.prototype=Object.create(Ue.prototype);U.prototype.constructor=U;var he=function(a,e){U.call(this,a,e),this.screenSpacePanning=!1,this.mouseButtons.LEFT=G.PAN,this.mouseButtons.RIGHT=G.ROTATE,this.touches.ONE=z.PAN,this.touches.TWO=z.DOLLY_ROTATE};he.prototype=Object.create(Ue.prototype);he.prototype.constructor=he;class Ze{constructor(e,t,i,s){this.scene=e,this.animations=t,this.callback=s,this.duration=i,this.mixer=null,this.actions=[],this.setAnimations()}setAnimations(){this.mixer=new ht(this.scene),this.animations&&this.animations.length&&this.animations.forEach(e=>{const t=this.mixer.clipAction(e);this.actions.push(t),t.reset().play().paused=!0})}updateOnTime(e){}updateOnScroll(e){this.mixer&&(this.mixer.update(e),this.actions.forEach(t=>{t.time=e*this.duration}),this.callback&&typeof this.callback=="function"&&this.callback())}playAction(e){const t=this.actions.find(i=>i.getClip().name===e);t&&(t.reset().play().paused=!1)}pauseAll(){this.actions.forEach(e=>e.setEffectiveWeight(0))}}class Zt{constructor(){this.portal=new T,this.sizes=this.portal.sizes,this.scene=this.portal.scene,this.canvas=this.portal.canvas,this.resources=this.portal.resources,this.time=this.portal.time,this.mobileBreakpoint=768,this.setups={},this.setups.slider=this.createCameraSetup("slider",75,"sliderCamera"),this.setups.scrollDesktop=this.createCameraSetup("scrollDesktop",40,"scrollCamera"),this.setups.scrollMobile=this.createCameraSetup("scrollMobile",40,"scrollCameraMobile"),this.setups.scroll=this.isMobile()?this.setups.scrollMobile:this.setups.scrollDesktop,this.activeCamera=this.setups.slider.camera}isMobile(){return this.sizes.width<=this.mobileBreakpoint}createCameraSetup(e,t,i){const s={};return s.camera=this.createCamera(t),s.controls=this.createControls(s.camera),this.setupPlaces(s,i),s}createCamera(e){const t=this.sizes.width/this.sizes.height,i=new ut(e*t/-2,e*t/2,e/2,e/-2,-500,500);return i.position.set(10,10,50),i.zoom=1,i.userData.frustumHeight=e,this.scene.add(i),i}createControls(e){const t=new U(e,this.canvas);return t.enableDamping=!0,t.autoRotate=!1,t.update(),t}setupPlaces(e,t){this.resources.on("ready",()=>{const i=this.resources.items[t];if(!i){console.warn(`Resource "${t}" not found.`);return}const{scene:s,animations:o}=i;e.targetPlace=s.getObjectByName("Camera_Target"),e.cameraPlace=s.getObjectByName("Camera_Move"),e.cameraPlace&&e.targetPlace&&(e.camera.position.copy(e.cameraPlace.position),e.controls.target.copy(e.targetPlace.position)),e.animations=new Ze(s,o,16.666,r=>{this.activeCamera===e.camera&&(e.camera.zoom=e.cameraPlace.scale.x,e.camera.updateProjectionMatrix(),this.update())})})}resize(){const e=this.sizes.width/this.sizes.height;this.isMobile()?this.setups.scroll=this.setups.scrollMobile:this.setups.scroll=this.setups.scrollDesktop;for(const t in this.setups){const s=this.setups[t].camera,o=s.userData.frustumHeight;s.left=o*e/-2,s.right=o*e/2,s.top=o/2,s.bottom=o/-2,s.updateProjectionMatrix()}}update(){for(const e in this.setups)this.updateSetup(this.setups[e])}updateSetup(e){const{camera:t,controls:i,cameraPlace:s,targetPlace:o}=e;s&&o&&(t.position.copy(s.position),i.target.copy(o.position),i.update())}}class Kt{constructor(){this.portal=new T,this.canvas=this.portal.canvas,this.sizes=this.portal.sizes,this.scene=this.portal.scene,this.camera=this.portal.camera,this.setInstance()}setInstance(){this.instance=new mt({canvas:this.canvas,antialias:!0,alpha:!0}),this.instance.outputEncoding=pt,this.instance.toneMapping=gt,this.instance.shadowMap.enabled=!0,this.instance.shadowMap.type=ft,this.instance.setClearColor(0,0),this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio)}resize(){this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio)}update(){this.instance.render(this.scene,this.camera.activeCamera)}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.21.0
 * @author George Michael Brower
 * @license MIT
 */class M{constructor(e,t,i,s,o="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(o),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),M.nextNameID=M.nextNameID||0,this.$name.id=`lil-gui-name-${++M.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",r=>r.stopPropagation()),this.domElement.addEventListener("keyup",r=>r.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class qt extends M{constructor(e,t,i){super(e,t,i,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function ue(a){let e,t;return(e=a.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=a.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=a.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const Qt={isPrimitive:!0,match:a=>typeof a=="string",fromHexString:ue,toHexString:ue},Y={isPrimitive:!0,match:a=>typeof a=="number",fromHexString:a=>parseInt(a.substring(1),16),toHexString:a=>"#"+a.toString(16).padStart(6,0)},Jt={isPrimitive:!1,match:a=>Array.isArray(a)||ArrayBuffer.isView(a),fromHexString(a,e,t=1){const i=Y.fromHexString(a);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([a,e,t],i=1){i=255/i;const s=a*i<<16^e*i<<8^t*i<<0;return Y.toHexString(s)}},ei={isPrimitive:!1,match:a=>Object(a)===a,fromHexString(a,e,t=1){const i=Y.fromHexString(a);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:a,g:e,b:t},i=1){i=255/i;const s=a*i<<16^e*i<<8^t*i<<0;return Y.toHexString(s)}},ti=[Qt,Y,Jt,ei];function ii(a){return ti.find(e=>e.match(a))}class ni extends M{constructor(e,t,i,s){super(e,t,i,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=ii(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const o=ue(this.$text.value);o&&this._setValueFromHexString(o)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class re extends M{constructor(e,t,i){super(e,t,i,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class ai extends M{constructor(e,t,i,s,o,r){super(e,t,i,"lil-number"),this._initInput(),this.min(s),this.max(o);const l=r!==void 0;this.step(l?r:this._getImplicitStep(),l),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let d=parseFloat(this.$input.value);isNaN(d)||(this._stepExplicit&&(d=this._snap(d)),this.setValue(this._clamp(d)))},i=d=>{const f=parseFloat(this.$input.value);isNaN(f)||(this._snapClampSetValue(f+d),this.$input.value=this.getValue())},s=d=>{d.key==="Enter"&&this.$input.blur(),d.code==="ArrowUp"&&(d.preventDefault(),i(this._step*this._arrowKeyMultiplier(d))),d.code==="ArrowDown"&&(d.preventDefault(),i(this._step*this._arrowKeyMultiplier(d)*-1))},o=d=>{this._inputFocused&&(d.preventDefault(),i(this._step*this._normalizeMouseWheel(d)))};let r=!1,l,u,c,m,g;const b=5,P=d=>{l=d.clientX,u=c=d.clientY,r=!0,m=this.getValue(),g=0,window.addEventListener("mousemove",_),window.addEventListener("mouseup",E)},_=d=>{if(r){const f=d.clientX-l,C=d.clientY-u;Math.abs(C)>b?(d.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(f)>b&&E()}if(!r){const f=d.clientY-c;g-=f*this._step*this._arrowKeyMultiplier(d),m+g>this._max?g=this._max-m:m+g<this._min&&(g=this._min-m),this._snapClampSetValue(m+g)}c=d.clientY},E=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",E)},w=()=>{this._inputFocused=!0},h=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",o,{passive:!1}),this.$input.addEventListener("mousedown",P),this.$input.addEventListener("focus",w),this.$input.addEventListener("blur",h)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const e=(h,d,f,C,S)=>(h-d)/(f-d)*(S-C)+C,t=h=>{const d=this.$slider.getBoundingClientRect();let f=e(h,d.left,d.right,this._min,this._max);this._snapClampSetValue(f)},i=h=>{this._setDraggingStyle(!0),t(h.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",o)},s=h=>{t(h.clientX)},o=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",o)};let r=!1,l,u;const c=h=>{h.preventDefault(),this._setDraggingStyle(!0),t(h.touches[0].clientX),r=!1},m=h=>{h.touches.length>1||(this._hasScrollBar?(l=h.touches[0].clientX,u=h.touches[0].clientY,r=!0):c(h),window.addEventListener("touchmove",g,{passive:!1}),window.addEventListener("touchend",b))},g=h=>{if(r){const d=h.touches[0].clientX-l,f=h.touches[0].clientY-u;Math.abs(d)>Math.abs(f)?c(h):(window.removeEventListener("touchmove",g),window.removeEventListener("touchend",b))}else h.preventDefault(),t(h.touches[0].clientX)},b=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",g),window.removeEventListener("touchend",b)},P=this._callOnFinishChange.bind(this),_=400;let E;const w=h=>{if(Math.abs(h.deltaX)<Math.abs(h.deltaY)&&this._hasScrollBar)return;h.preventDefault();const f=this._normalizeMouseWheel(h)*this._step;this._snapClampSetValue(this.getValue()+f),this.$input.value=this.getValue(),clearTimeout(E),E=setTimeout(P,_)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",m,{passive:!1}),this.$slider.addEventListener("wheel",w,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class si extends M{constructor(e,t,i,s){super(e,t,i,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class oi extends M{constructor(e,t,i){super(e,t,i,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var ri=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function li(a){const e=document.createElement("style");e.innerHTML=a;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Re=!1;class ye{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:s,title:o="Controls",closeFolders:r=!1,injectStyles:l=!0,touchStyles:u=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(o),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),u&&this.domElement.classList.add("lil-allow-touch-styles"),!Re&&l&&(li(ri),Re=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=r}add(e,t,i,s,o){if(Object(i)===i)return new si(this,e,t,i);const r=e[t];switch(typeof r){case"number":return new ai(this,e,t,i,s,o);case"boolean":return new qt(this,e,t);case"string":return new oi(this,e,t);case"function":return new re(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,r)}addColor(e,t,i=1){return new ni(this,e,t,i)}addFolder(e){const t=new ye({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof re||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof re)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");const i=o=>{o.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}class di{constructor(){this.isGeometryDisabled=window.location.hash==="#geometry-disabled",this.active=window.location.hash==="#debug",this.active&&(this.gui=new ye)}}class _e{constructor(){this.callbacks={},this.callbacks.base={}}on(e,t){return typeof e>"u"||e===""?(console.warn("wrong names"),!1):typeof t>"u"?(console.warn("wrong callback"),!1):(this.resolveNames(e).forEach(s=>{const o=this.resolveName(s);this.callbacks[o.namespace]instanceof Object||(this.callbacks[o.namespace]={}),this.callbacks[o.namespace][o.value]instanceof Array||(this.callbacks[o.namespace][o.value]=[]),this.callbacks[o.namespace][o.value].push(t)}),this)}off(e){return typeof e>"u"||e===""?(console.warn("wrong name"),!1):(this.resolveNames(e).forEach(i=>{const s=this.resolveName(i);if(s.namespace!=="base"&&s.value==="")delete this.callbacks[s.namespace];else if(s.namespace==="base")for(const o in this.callbacks)this.callbacks[o]instanceof Object&&this.callbacks[o][s.value]instanceof Array&&(delete this.callbacks[o][s.value],Object.keys(this.callbacks[o]).length===0&&delete this.callbacks[o]);else this.callbacks[s.namespace]instanceof Object&&this.callbacks[s.namespace][s.value]instanceof Array&&(delete this.callbacks[s.namespace][s.value],Object.keys(this.callbacks[s.namespace]).length===0&&delete this.callbacks[s.namespace])}),this)}trigger(e,t){if(typeof e>"u"||e==="")return console.warn("wrong name"),!1;let i=null;const s=t instanceof Array?t:[];let o=this.resolveNames(e);if(o=this.resolveName(o[0]),o.namespace==="base")for(const r in this.callbacks)this.callbacks[r]instanceof Object&&this.callbacks[r][o.value]instanceof Array&&this.callbacks[r][o.value].forEach(function(l){l.apply(this,s)});else if(this.callbacks[o.namespace]instanceof Object){if(o.value==="")return console.warn("wrong name"),this;this.callbacks[o.namespace][o.value].forEach(function(r){r.apply(this,s)})}return i}resolveNames(e){let t=e;return t=t.replace(/[^a-zA-Z0-9 ,/.]/g,""),t=t.replace(/[,/]+/g," "),t=t.split(" "),t}resolveName(e){const t={},i=e.split(".");return t.original=e,t.value=i[0],t.namespace="base",i.length>1&&i[1]!==""&&(t.namespace=i[1]),t}}class ci extends _e{constructor(e){super(),this.canvas=e,this.canvasParent=this.canvas?.parentElement,this.width=0,this.height=0,this.pixelRatio=1,this.getSizes(),this.setResizeObserver(),this.startResizeObserver(),this.off=this.stopResizeObserver}getSizes(){this.width=this.canvasParent?.clientWidth,this.height=this.canvasParent?.clientHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2)}setResizeObserver(){this.observer=new ResizeObserver(e=>{for(let t of e)this.getSizes(),this.trigger("resize")})}startResizeObserver(){this.observer.observe(this.canvasParent)}stopResizeObserver(){this.observer.disconnect(),this.sizes.off("resize")}}class hi extends _e{constructor(){super(),this.start=Date.now(),this.current=this.start,this.elapsed=0,this.delta=16,window.requestAnimationFrame(()=>{this.tick()})}tick(){const e=Date.now();this.delta=e-this.current,this.current=e,this.elapsed=this.current-this.start,this.trigger("tick"),window.requestAnimationFrame(()=>{this.tick()})}}class ui{constructor(){this.portal=new T,this.scene=this.portal.scene,this.debug=this.portal.debug,this.debug.active&&(this.debugFolder=this.debug.gui.addFolder("environment")),this.setSunLight(),this.setEnvironmentMap()}setSunLight(){if(this.sunLight=new bt("#ffffff",2.5),this.sunLight.shadow.camera.far=100,this.sunLight.shadow.mapSize.set(1024,1024),this.sunLight.shadow.normalBias=.05,this.sunLight.position.set(-55,49,-6),this.scene.add(this.sunLight),this.debug.active){this.debugFolder.addColor(this.sunLight,"color"),this.debugFolder.add(this.sunLight,"intensity").name("sunLightIntensity").min(0).max(10).step(.001),this.debugFolder.add(this.sunLight.position,"x").name("sunLightX").min(-200).max(200).step(1),this.debugFolder.add(this.sunLight.position,"y").name("sunLightY").min(-200).max(200).step(1),this.debugFolder.add(this.sunLight.position,"z").name("sunLightZ").min(-200).max(200).step(1);const e=new yt(this.sunLight);this.scene.add(e)}}setEnvironmentMap(){}}var ee=function(){Ye.call(this),this.type="LineSegmentsGeometry";var a=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],t=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(t),this.setAttribute("position",new B(a,3)),this.setAttribute("uv",new B(e,2))};ee.prototype=Object.assign(Object.create(Ye.prototype),{constructor:ee,isLineSegmentsGeometry:!0,applyMatrix4:function(a){var e=this.attributes.instanceStart,t=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(a),t.applyMatrix4(a),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},setPositions:function(a){var e;a instanceof Float32Array?e=a:Array.isArray(a)&&(e=new Float32Array(a));var t=new ce(e,6,1);return this.setAttribute("instanceStart",new R(t,3,0)),this.setAttribute("instanceEnd",new R(t,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this},setColors:function(a){var e;a instanceof Float32Array?e=a:Array.isArray(a)&&(e=new Float32Array(a));var t=new ce(e,6,1);return this.setAttribute("instanceColorStart",new R(t,3,0)),this.setAttribute("instanceColorEnd",new R(t,3,3)),this},fromWireframeGeometry:function(a){return this.setPositions(a.attributes.position.array),this},fromEdgesGeometry:function(a){return this.setPositions(a.attributes.position.array),this},fromMesh:function(a){return this.fromWireframeGeometry(new vt(a.geometry)),this},fromLineSegments:function(a){var e=a.geometry;return e.isGeometry?this.setPositions(e.vertices):e.isBufferGeometry&&this.setPositions(e.attributes.position.array),this},computeBoundingBox:(function(){var a=new je;return function(){this.boundingBox===null&&(this.boundingBox=new je);var t=this.attributes.instanceStart,i=this.attributes.instanceEnd;t!==void 0&&i!==void 0&&(this.boundingBox.setFromBufferAttribute(t),a.setFromBufferAttribute(i),this.boundingBox.union(a))}})(),computeBoundingSphere:(function(){var a=new v;return function(){this.boundingSphere===null&&(this.boundingSphere=new _t),this.boundingBox===null&&this.computeBoundingBox();var t=this.attributes.instanceStart,i=this.attributes.instanceEnd;if(t!==void 0&&i!==void 0){var s=this.boundingSphere.center;this.boundingBox.getCenter(s);for(var o=0,r=0,l=t.count;r<l;r++)a.fromBufferAttribute(t,r),o=Math.max(o,s.distanceToSquared(a)),a.fromBufferAttribute(i,r),o=Math.max(o,s.distanceToSquared(a));this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}})(),toJSON:function(){},applyMatrix:function(a){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(a)}});J.line={linewidth:{value:1},resolution:{value:new A(1,1)},dashScale:{value:1},dashSize:{value:1},dashOffset:{value:0},gapSize:{value:1},opacity:{value:1}};Q.line={uniforms:Xe.merge([J.common,J.fog,J.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		varying vec2 vUv;

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			vUv = uv;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec2 ndcStart = clipStart.xy / clipStart.w;
			vec2 ndcEnd = clipEnd.xy / clipEnd.w;

			// direction
			vec2 dir = ndcEnd - ndcStart;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			// perpendicular to dir
			vec2 offset = vec2( dir.y, - dir.x );

			// undo aspect ratio adjustment
			dir.x /= aspect;
			offset.x /= aspect;

			// sign flip
			if ( position.x < 0.0 ) offset *= - 1.0;

			// endcaps
			if ( position.y < 0.0 ) {

				offset += - dir;

			} else if ( position.y > 1.0 ) {

				offset += dir;

			}

			// adjust for linewidth
			offset *= linewidth;

			// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
			offset /= resolution.y;

			// select end
			vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

			// back to clip space
			offset *= clip.w;

			clip.xy += offset;

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;

		#ifdef USE_DASH

			uniform float dashSize;
			uniform float dashOffset;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		varying vec2 vUv;

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			if ( abs( vUv.y ) > 1.0 ) {

				float a = vUv.x;
				float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
				float len2 = a * a + b * b;

				if ( len2 > 1.0 ) discard;

			}

			vec4 diffuseColor = vec4( diffuse, opacity );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, diffuseColor.a );

			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var I=function(a){pe.call(this,{type:"LineMaterial",uniforms:Xe.clone(Q.line.uniforms),vertexShader:Q.line.vertexShader,fragmentShader:Q.line.fragmentShader,clipping:!0}),this.dashed=!1,Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}}}),this.setValues(a)};I.prototype=Object.create(pe.prototype);I.prototype.constructor=I;I.prototype.isLineMaterial=!0;var me=function(a,e){a===void 0&&(a=new ee),e===void 0&&(e=new I({color:Math.random()*16777215})),ge.call(this,a,e),this.type="LineSegments2"};me.prototype=Object.assign(Object.create(ge.prototype),{constructor:me,isLineSegments2:!0,computeLineDistances:(function(){var a=new v,e=new v;return function(){for(var i=this.geometry,s=i.attributes.instanceStart,o=i.attributes.instanceEnd,r=new Float32Array(2*s.data.count),l=0,u=0,c=s.data.count;l<c;l++,u+=2)a.fromBufferAttribute(s,l),e.fromBufferAttribute(o,l),r[u]=u===0?0:r[u-1],r[u+1]=r[u]+a.distanceTo(e);var m=new ce(r,2,1);return i.setAttribute("instanceDistanceStart",new R(m,1,0)),i.setAttribute("instanceDistanceEnd",new R(m,1,1)),this}})(),raycast:(function(){var a=new ae,e=new ae,t=new ae,i=new v,s=new Et,o=new wt,r=new v;return function(u,c){u.camera===null&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2.');var m=u.params.Line2!==void 0&&u.params.Line2.threshold||0,g=u.ray,b=u.camera,P=b.projectionMatrix,_=this.geometry,E=this.material,w=E.resolution,h=E.linewidth+m,d=_.attributes.instanceStart,f=_.attributes.instanceEnd;g.at(1,t),t.w=1,t.applyMatrix4(b.matrixWorldInverse),t.applyMatrix4(P),t.multiplyScalar(1/t.w),t.x*=w.x/2,t.y*=w.y/2,t.z=0,i.copy(t);var C=this.matrixWorld;s.multiplyMatrices(b.matrixWorldInverse,C);for(var S=0,D=d.count;S<D;S++){a.fromBufferAttribute(d,S),e.fromBufferAttribute(f,S),a.w=1,e.w=1,a.applyMatrix4(s),e.applyMatrix4(s),a.applyMatrix4(P),e.applyMatrix4(P),a.multiplyScalar(1/a.w),e.multiplyScalar(1/e.w);var te=a.z<-1&&e.z<-1,j=a.z>1&&e.z>1;if(!(te||j)){a.x*=w.x/2,a.y*=w.y/2,e.x*=w.x/2,e.y*=w.y/2,o.start.copy(a),o.start.z=0,o.end.copy(e),o.end.z=0;var H=o.closestPointToPointParameter(i,!0);o.at(H,r);var V=xt.lerp(a.z,e.z,H),X=V>=-1&&V<=1,W=i.distanceTo(r)<h*.5;if(X&&W){o.start.fromBufferAttribute(d,S),o.end.fromBufferAttribute(f,S),o.start.applyMatrix4(C),o.end.applyMatrix4(C);var O=new v,F=new v;g.distanceSqToSegment(o.start,o.end,F,O),c.push({point:F,pointOnLine:O,distance:g.origin.distanceTo(F),object:this,face:null,faceIndex:S,uv:null,uv2:null})}}}}})()});class mi{constructor(e){this.name=e,this.cache={},this.loaded=!1,this.portal=new T,this.debug=this.portal.debug,this.debug.active&&this.debug.gui.add(this,"download").name(`Download ${e}.json`)}async load(){try{const e=await fetch(`/three/cache/${this.name}.json`);if(!e.ok)throw new Error("Cache not found");this.cache=await e.json(),this.loaded=!0,console.log(`[GeometryCache] Loaded ${Object.keys(this.cache).length} cached items.`)}catch{console.warn("[GeometryCache] No cache file found. Switching to runtime generation."),this.loaded=!1}}has(e){return this.loaded&&!!this.cache[e]}get(e){return this.has(e)?new Float32Array(this.cache[e]):null}set(e,t){this.cache[e]=Array.from(t)}download(){const e="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(this.cache)),t=document.createElement("a");t.setAttribute("href",e),t.setAttribute("download",`${this.name}.json`),document.body.appendChild(t),t.click(),t.remove()}}class pi{constructor(){this.worker=null,this.callbacks=new Map,this.runningParams=[],this.pendingPromises=[],typeof window<"u"&&this.init()}init(){this.worker=new Worker(new URL(""+new URL("conditional.worker-CjhnXHD9.js",import.meta.url).href,import.meta.url),{type:"module"}),this.worker.onerror=e=>{console.error("❌ Worker Initialization Error:",e.message,e.filename,e.lineno)},this.worker.onmessage=e=>{const{id:t,data:i}=e.data;this.callbacks.has(t)&&(this.callbacks.get(t)(i),this.callbacks.delete(t))}}generate(e,t){const i=new Promise((s,o)=>{if(!this.worker&&(this.init(),!this.worker)){o("Worker not supported");return}const r=Math.random().toString(36).substr(2,9);this.callbacks.set(r,s);const l=e.attributes.position,u=e.attributes.normal,c=e.index,m=l.array.slice(0),g=u?u.array.slice(0):null,b=c?c.array.slice(0):null,P={id:r,position:m,normal:g,index:b,thresholdAngle:t},_=new Set;m&&m.buffer&&_.add(m.buffer),g&&g.buffer&&_.add(g.buffer),b&&b.buffer&&_.add(b.buffer);try{this.worker.postMessage(P,Array.from(_))}catch(E){o(E);return}});return this.pendingPromises.push(i),i}finish(){const e=Promise.all(this.pendingPromises);return this.pendingPromises=[],e}}const Ie=new pi;function gi(a){const e=a.material.color||0,t=new Uint8Array([64,64,64,255,128,128,128,255,128,128,128,255]),i=new St(t,3,1,Ct);i.minFilter=i.magFilter=Pt,i.generateMipmaps=!1,a.material=new At({color:e,gradientMap:i})}function fi(a){const e=new Mt;e.name=a.name+"_Interaction";const t=a.children.slice();for(const i of t)a.remove(i),e.add(i);return a.add(e),e}var bi=`attribute vec3 control0;
attribute vec3 control1;
attribute vec3 direction;
attribute float collapse;
attribute vec3 instPos;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

const float LENGTH_EPSILON_SQ = 1e-20;

const float DOT_PRODUCT_EPSILON = 3e-2;

void main() {
    #include <color_vertex>

    
    vec4 c0_clip = projectionMatrix * modelViewMatrix * vec4( control0 + instPos, 1.0 );
    vec4 c1_clip = projectionMatrix * modelViewMatrix * vec4( control1 + instPos, 1.0 );
    vec4 p0_clip = projectionMatrix * modelViewMatrix * vec4( position + instPos, 1.0 );
    vec4 p1_clip = projectionMatrix * modelViewMatrix * vec4( position + instPos + direction, 1.0 );

    
    
    
    if (p0_clip.w <= 0.0 || p1_clip.w <= 0.0 || c0_clip.w <= 0.0 || c1_clip.w <= 0.0) {
        
        
        
        gl_Position = vec4(0.0, 0.0, 0.0, 1.0); 
        return;
    }

    vec2 p0_ndc = p0_clip.xy / p0_clip.w;
    vec2 p1_ndc = p1_clip.xy / p1_clip.w;
    vec2 c0_ndc = c0_clip.xy / c0_clip.w;
    vec2 c1_ndc = c1_clip.xy / c1_clip.w;

    
    vec2 dir_ndc = p1_ndc - p0_ndc;
    vec2 norm_ndc = vec2( -dir_ndc.y, dir_ndc.x );

    
    vec2 c0_dir_from_p1_ndc = c0_ndc - p1_ndc;
    vec2 c1_dir_from_p1_ndc = c1_ndc - p1_ndc;

    float discardFlag = 1.0; 

    float dir_len_sq = dot(dir_ndc, dir_ndc);
    float c0_dir_len_sq = dot(c0_dir_from_p1_ndc, c0_dir_from_p1_ndc);
    float c1_dir_len_sq = dot(c1_dir_from_p1_ndc, c1_dir_from_p1_ndc);

    
    if (dir_len_sq > LENGTH_EPSILON_SQ && \\
        c0_dir_len_sq > LENGTH_EPSILON_SQ && \\
        c1_dir_len_sq > LENGTH_EPSILON_SQ) {

        vec2 norm_normalized = normalize(norm_ndc); 
        vec2 c0dir_normalized = normalize(c0_dir_from_p1_ndc); 
        vec2 c1dir_normalized = normalize(c1_dir_from_p1_ndc); 

        float d0 = dot(norm_normalized, c0dir_normalized);
        float d1 = dot(norm_normalized, c1dir_normalized);

        
        float stable_sign_d0 = (abs(d0) < DOT_PRODUCT_EPSILON) ? 0.0 : sign(d0);
        float stable_sign_d1 = (abs(d1) < DOT_PRODUCT_EPSILON) ? 0.0 : sign(d1);

        
        
        if (stable_sign_d0 * stable_sign_d1 < -0.5) { 
                                                      discardFlag = 1.0;
        } else {
            discardFlag = 0.0;
        }

    } else {
        
        
    }

    
    
    vec3 p_world = position + instPos + ((discardFlag > 0.5) ? direction * collapse : vec3(0.0));
    vec4 mvPosition = modelViewMatrix * vec4( p_world, 1.0 );
    gl_Position = projectionMatrix * mvPosition;

    #include <logdepthbuf_vertex>
    #include <clipping_planes_vertex>
    #include <fog_vertex>
}`,yi=`uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {
    #include <clipping_planes_fragment>
    vec3 outgoingLight = vec3( 0.0 );
    vec4 diffuseColor = vec4( diffuse, opacity );
    #include <logdepthbuf_fragment>
    #include <color_fragment>
    outgoingLight = diffuseColor.rgb; 
    gl_FragColor = vec4( outgoingLight, diffuseColor.a );
    #include <tonemapping_fragment>
    #include <encodings_fragment>
    #include <fog_fragment>
    #include <premultiplied_alpha_fragment>
}`;let le=null;class Ke{constructor(){if(le)return le;le=this,this.portal=new T,this.debug=this.portal.debug,this.debug.active&&(this.debugFolder=this.debug.gui.addFolder("materials")),this.config=new We,this.edges=null,this.conditionalEdges=null,this.glass=null,this.setMaterials()}setMaterials(){this.edges=new I({color:0,linewidth:1,resolution:new A(window.innerWidth,window.innerHeight)}),this.conditionalEdges=new pe({vertexShader:bi,fragmentShader:yi,uniforms:{diffuse:{value:new Lt(0)},opacity:{value:1}},side:Ot,transparent:!1}),this.glassBack=new kt({color:16777215,transparent:!0,opacity:.05,side:Gt}),this.glassFront=new zt({color:16777215,metalness:0,roughness:1,clearcoat:.01,clearcoatRoughness:.5,transmission:.85,opacity:.9,reflectivity:0,transparent:!0,side:Tt}),this.debug.active&&(this.debugFolder.addColor(this.glassFront,"color"),this.debugFolder.add(this.glassFront,"metalness").min(0).max(1).step(.01),this.debugFolder.add(this.glassFront,"roughness").min(0).max(1).step(.01),this.debugFolder.add(this.glassFront,"clearcoat").min(0).max(1).step(.01),this.debugFolder.add(this.glassFront,"clearcoatRoughness").min(0).max(1).step(.01),this.debugFolder.add(this.glassFront,"transmission").min(0).max(1).step(.01),this.debugFolder.add(this.glassFront,"opacity").min(0).max(1).step(.01),this.debugFolder.add(this.glassFront,"reflectivity").min(0).max(1).step(.01))}resize(){this.edges.resolution=new A(window.innerWidth,window.innerHeight)}}class qe{constructor(e){this.portal=new T,this.materials=new Ke,this.scene=this.portal.scene,this.resources=this.portal.resources,this.sizes=this.portal.sizes,this.debug=this.portal.debug,this.isGeometryDisabled=this.debug.isGeometryDisabled,this.instance=null,this.animations=null,this.params=null,this.geometryCache=new mi(e),this.conditionalGeometryCount=-1,this.conditionalGeometryLoaded=0,this.spinObjects=[],this.spinConfig=[],this.magneticObjects=[],this.raycaster=new Dt,this.interactionPlane=new Ft(new v(0,0,1),0),this.mouse3D=new v,this.mouse=new A(999,999),this._initMouseTracking(),this.rotationSpeedMultiplier=25e-5,this.animationFps=null}update(){if(!this.spinObjects.length)return;const e=this.portal.time.delta;this.spinObjects.length&&this.spinObjects.forEach(t=>{this._rotateObject(t,e)}),this.magneticObjects.length&&this._updateMagneticEffect()}show(){this.instance&&(this.instance.scene.visible=!0)}hide(){this.instance&&(this.instance.scene.visible=!1)}_initModel(e){const t=new Promise(i=>{this.resources.loaded===this.resources.toLoad?i():this.resources.on("ready",()=>i())});Promise.all([this.geometryCache.load(),t]).then(()=>{this.instance=this.resources.items[e],this.instance.scene.traverse(i=>{this._processChild(i)}),this.scene.add(this.instance.scene),this.animations=new Ze(this.instance.scene,this.instance.animations,this.animationFps),this._initSpinObjects(),this._onModelLoaded()})}_onModelLoaded(){}_onConditionalGeometryLoaded(){}_initMouseTracking(){window.addEventListener("mousemove",e=>{this.mouse.x=e.clientX/this.sizes.width*2-1,this.mouse.y=-(e.clientY/this.sizes.height)*2+1})}_initSpinObjects(){this.spinObjects=[],this.spinConfig&&this.spinConfig.forEach(e=>{const t=this.instance.scene.getObjectByName(e.name);t&&this.spinObjects.push({object:t,axis:e.axis,direction:e.direction,speed:e.speed!==void 0?e.speed:Math.random()+.5})})}_processChild(e){if(!this.params)return;const t=this.params.get(e.name);if(t.isHelmet&&this._setupHelmet(e),t.geometryEnabled&&!this.isGeometryDisabled&&this._applyToMeshOrGroup(e,i=>{i.type==="LineSegments2"||i.type==="LineSegments"||this._addEdgesGeometry(i,t.geometryAngle)}),t.conditionalGeometryEnabled&&!this.isGeometryDisabled&&this._applyToMeshOrGroup(e,i=>{i.type==="LineSegments2"||i.type==="LineSegments"||this._addConditionalGeometry(i,t.conditionalGeometryAngle)}),t.toonShadingEnabled&&this._applyToMeshOrGroup(e,i=>{gi(i)}),t.sesameSeedsEnabled&&this._applyToMeshOrGroup(e,i=>{this._addSesameTexture(i)}),t.regroup&&fi(e),e.material&&(e.material.polygonOffset=!0,e.material.polygonOffsetFactor=1,e.material.polygonOffsetUnits=1),t.interactive&&t.regroup){const i=e.children[0];this.magneticObjects.push({object:i,originalPosition:i.position.clone(),strength:t.magneticStrength,radius:t.magneticRadius,lerpFactor:t.magneticLerp,worldPosition:new v,targetPosition:new v})}}_setupHelmet(e){e.material=this.materials.glassBack,e.name=`${e.name}_Glass`;const t=e.clone();t.material=this.materials.glassFront,t.name=e.name.replace("_Glass","_Duplicate"),e.parent.add(t)}_addEdgesGeometry(e,t){if(!e.isMesh)return;let i;if(this.geometryCache.has(e.name)?i=this.geometryCache.get(e.name):(i=new $t(e.geometry,t).attributes.position.array,this.geometryCache.set(e.name,i)),i){const s=new ee;s.setPositions(i),e.add(new me(s,this.materials.edges))}}_addConditionalGeometry(e,t){e.isMesh&&(Ie.generate(e.geometry,t).then(i=>{const s=new Bt;s.setAttribute("position",new B(i.position,3)),s.setAttribute("control0",new B(i.control0,3)),s.setAttribute("control1",new B(i.control1,3)),s.setAttribute("direction",new B(i.direction,3)),s.setAttribute("collapse",new B(i.collapse,1));const o=new jt(s,this.materials.conditionalEdges);e.add(o)}).catch(i=>{console.warn(`Worker failed for ${e.name}:`,i)}),Ie.finish().then(i=>{this.conditionalGeometryLoaded+=1,this.conditionalGeometryLoaded>=this.conditionalGeometryCount&&this._onConditionalGeometryLoaded()}))}_addSesameTexture(e){e.material.polygonOffset=!1,e.material.transparent=!0,e.material.alphaMap=this.resources.items.sesameTexture}_rotateObject(e,t){const{object:i,axis:s,direction:o,speed:r}=e;i.rotation[s]-=t*this.rotationSpeedMultiplier*o*r}_applyToMeshOrGroup(e,t){e.type!=="Group"?t(e):e.children&&e.children.forEach(i=>t(i))}_updateMagneticEffect(){this.raycaster.setFromCamera(this.mouse,this.portal.camera.activeCamera),this.raycaster.ray.intersectPlane(this.interactionPlane,this.mouse3D)&&this.magneticObjects.forEach(e=>{const{object:t,originalPosition:i,strength:s,radius:o,lerpFactor:r}=e;t.getWorldPosition(e.worldPosition);const l=e.worldPosition.distanceTo(this.mouse3D);if(e.targetPosition.copy(i),l<o){const u=new v().subVectors(e.worldPosition,this.mouse3D).normalize(),c=1-l/o;e.targetPosition.x=i.x+u.x*c*s,e.targetPosition.y=i.y+u.y*c*s}t.position.lerp(e.targetPosition,r)})}}let _i=class{constructor(){this.defaultParams={geometryEnabled:!1,geometryAngle:45,conditionalGeometryEnabled:!1,conditionalGeometryAngle:.01,toonShadingEnabled:!1,regroup:!1,spin:!1,interactive:!1,isHelmet:!1,sesameSeedsEnabled:!1},this.params={Cat_Helmet:{isHelmet:!0,conditionalGeometryEnabled:!0},Chick_Helmet:{isHelmet:!0,conditionalGeometryEnabled:!0},Koala_Helmet:{isHelmet:!0,conditionalGeometryEnabled:!0},Grand:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Grand_Hot_Dog:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Pizza_Grand:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Plat_1:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Plat_2:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Plat_3:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Plat_4:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Plat_5:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Plat_6:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Plane_0:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Plane_1:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Plane_2:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Plane_3:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Plane_4:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Plane_5:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Pizza_Triangulate_1:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Pizza_Triangulate_2:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Pizza_Triangulate_3:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Pizza_Triangulate_4:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Pizza_Triangulate_5:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Burger_Bun_Bottom:{toonShadingEnabled:!0,geometryEnabled:!0,conditionalGeometryEnabled:!0},Burger_Mayonnaise_Bottom:{toonShadingEnabled:!0,conditionalGeometryEnabled:!0},Burger_Patty:{toonShadingEnabled:!0,conditionalGeometryEnabled:!0},Burger_Cheese:{toonShadingEnabled:!0,geometryEnabled:!0},Burger_Onions_Bottom:{toonShadingEnabled:!0,geometryEnabled:!0,conditionalGeometryEnabled:!0},Burger_Tomato:{toonShadingEnabled:!0,geometryEnabled:!0,conditionalGeometryEnabled:!0},Burger_Mayonnaise_Top:{toonShadingEnabled:!0,geometryEnabled:!0,conditionalGeometryEnabled:!0},Burger_Onions_Top:{toonShadingEnabled:!0,geometryEnabled:!0,conditionalGeometryEnabled:!0},Burger_Salad:{toonShadingEnabled:!0,geometryEnabled:!0,conditionalGeometryEnabled:!0},Burger_Bun_Top:{toonShadingEnabled:!0,geometryEnabled:!0,conditionalGeometryEnabled:!0},Burger_Bun_Sesame:{sesameSeedsEnabled:!0},Donut_Bun:{toonShadingEnabled:!0,geometryEnabled:!0,conditionalGeometryEnabled:!0},Donut_Topping:{toonShadingEnabled:!0,geometryEnabled:!0,conditionalGeometryEnabled:!0},Donut_Syrup:{toonShadingEnabled:!0,geometryEnabled:!0,conditionalGeometryEnabled:!0},French_Fries_Cartoon:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},French_Fries_Potato:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Cat_Ass:{toonShadingEnabled:!0,conditionalGeometryEnabled:!0},Cat_Body:{toonShadingEnabled:!0,conditionalGeometryEnabled:!0},Cat_Body_2:{toonShadingEnabled:!0,conditionalGeometryEnabled:!0},Cat_Collar:{toonShadingEnabled:!0,conditionalGeometryEnabled:!0},Cat_Body_Tail:{toonShadingEnabled:!0,conditionalGeometryEnabled:!0},Cat_Body_Hands:{toonShadingEnabled:!0,conditionalGeometryEnabled:!0},Cat_Costume_Part_1:{toonShadingEnabled:!0,conditionalGeometryEnabled:!0},Cat_Head:{toonShadingEnabled:!0,conditionalGeometryEnabled:!0},Cat_Nose:{toonShadingEnabled:!0,geometryEnabled:!0,conditionalGeometryEnabled:!0},Cat_Mouth:{toonShadingEnabled:!0,geometryEnabled:!0,conditionalGeometryEnabled:!0},French_Fries_Cartoon002:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},French_Fries_Potato002:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Chick_Body:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Chick_Body_Pants:{geometryEnabled:!0,conditionalGeometryEnabled:!0},Chick_Hair:{conditionalGeometryEnabled:!0},Chick_Hands:{geometryEnabled:!0,conditionalGeometryEnabled:!0},Chick_Legs:{geometryEnabled:!0,conditionalGeometryEnabled:!0},Chick_Legs_Pants:{geometryEnabled:!0,conditionalGeometryEnabled:!0},Chick_Neck:{geometryEnabled:!0,conditionalGeometryEnabled:!0},Hot_Dog_Buns:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Hot_Dog_Buns_Sesame:{sesameSeedsEnabled:!0},Hot_Dog_Sosage:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Hot_Dog_Mustard:{toonShadingEnabled:!0,geometryEnabled:!0,geometryAngle:80,conditionalGeometryEnabled:!0},Ice_Cream002:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Ice_Cream_Cone:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},French_Fries_Cartoon003:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},French_Fries_Potato003:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Pizza001:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Pizza_Cheese:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Pizza_Mashrooms:{geometryEnabled:!0,conditionalGeometryEnabled:!0},Pizza_Olives:{conditionalGeometryEnabled:!0},Pizza_Sausage:{conditionalGeometryEnabled:!0},Pizza_Sause:{conditionalGeometryEnabled:!0},Pizza_Salami_1:{geometryEnabled:!0,geometryAngle:80,conditionalGeometryEnabled:!0},Pizza_Salami_2:{geometryEnabled:!0,geometryAngle:80,conditionalGeometryEnabled:!0},Pizza_Salami_3:{geometryEnabled:!0,geometryAngle:80,conditionalGeometryEnabled:!0},Coffee_Cup:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Coffee_Cream:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Coffee_Topping:{geometryEnabled:!0,geometryAngle:80,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Coffee_Cookie:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Coffee_Straw:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Koala_Helmet_Part:{geometryEnabled:!0,conditionalGeometryEnabled:!0},Koala_Neck:{geometryEnabled:!0,conditionalGeometryEnabled:!0},Koala_Body:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Koala_Body_2:{geometryEnabled:!0,conditionalGeometryEnabled:!0},Koala_Body_Hands:{geometryEnabled:!0,conditionalGeometryEnabled:!0},Koala_Costume_Part_1:{geometryEnabled:!0,conditionalGeometryEnabled:!0},Koala_Head:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0},Koala_Ear:{geometryEnabled:!0,conditionalGeometryEnabled:!0,toonShadingEnabled:!0}}}get(e){const t=this.params[e];return{...this.defaultParams,...t||{}}}};const{$gsap:Ve}=be(),vi=fe(),Ei=[{name:"Astro_Cat",axis:"y",direction:1},{name:"Burger",axis:"y",direction:-1},{name:"French_Fries",axis:"y",direction:-1},{name:"Donut",axis:"y",direction:1},{name:"Astro_Chik",axis:"y",direction:1},{name:"Hot_Dog",axis:"z",direction:-1},{name:"French_Fries001",axis:"y",direction:-1},{name:"Ice_Cream",axis:"z",direction:1},{name:"Astro_Koala",axis:"y",direction:1},{name:"Pizza",axis:"z",direction:-1},{name:"Pizza_French_Fries",axis:"y",direction:-1},{name:"Coffee",axis:"z",direction:1}],wi=[{menu:"Burger_Menu_Empty",grand:"Grand",items:["Plat_5","Plat_3","Donut","Plat_1","Astro_Cat","Plat_4","French_Fries","Plat_2","Burger","Plat_6"]},{menu:"Hotdog_Menu_Empty",grand:"Grand_Hot_Dog",items:["Plane_0","Astro_Chik","Plane_4","Plane_1","Hot_Dog","Plane_3","Ice_Cream","Plane_2","French_Fries001","Plane_5"]},{menu:"Pizza_Menu_Empty",grand:"Pizza_Grand",items:["Pizza_Triangulate_4","Pizza_Triangulate_3","Pizza_French_Fries","Pizza_Triangulate_2","Pizza","Pizza_Triangulate_5","Coffee","Pizza_Triangulate_1","Astro_Koala"]}];class xi extends qe{constructor(){super("slider_geometry_cache"),this.params=new _i,this.spinConfig=Ei,this.swipeObjects=[],this.swipePositions=[],this.swipeGrandPositions=[],this.conditionalGeometryCount=100,this._initModel("sliderModel")}_onModelLoaded(){this._initSwipeData()}_onConditionalGeometryLoaded(){vi.setThreeSliderLoaded(!0)}slide(e,t,i=1){if(!this.swipeObjects.length)return;let s,o;t>=0&&(s=i>0?[this.swipeGrandPositions[t],this.swipePositions[t]]:[this.swipePositions[t],this.swipeGrandPositions[t]]),e>=0&&(o=i>0?[this.swipeGrandPositions[e],this.swipePositions[e]]:[this.swipePositions[e],this.swipeGrandPositions[e]]),s&&Ve.to(s,{x:-130*i,duration:.7,ease:"power2.out",overwrite:"auto",onStart:()=>{this.swipeObjects[t]&&(this.swipeObjects[t].position.x=0)},onComplete:()=>{this.swipeObjects[t]&&(this.swipeObjects[t].visible=!1)}}),o&&Ve.fromTo(o,{x:130*i},{x:0,duration:1.5,stagger:.006*i,ease:"elastic.out(0.8, 0.8)",overwrite:"auto",onStart:()=>{this.swipeObjects[e]&&(this.swipeObjects[e].position.x=0,this.swipeObjects[e].visible=!0)}})}_initSwipeData(){this.swipeObjects=[],this.swipeGrandPositions=[],this.swipePositions=[],wi.forEach(e=>{const t=this.instance.scene.getObjectByName(e.menu);this.swipeObjects.push(t);const i=this.instance.scene.getObjectByName(e.grand);this.swipeGrandPositions.push(i?i.position:null);const s=[];e.items.forEach(o=>{const r=this.instance.scene.getObjectByName(o);r&&s.push(r.position)}),this.swipePositions.push(s)})}}class Si{constructor(){this.defaultParams={geometryEnabled:!1,geometryAngle:45,conditionalGeometryEnabled:!1,conditionalGeometryAngle:.01,toonShadingEnabled:!1,regroup:!1,spin:!1,interactive:!1,magneticStrength:-.01,magneticRadius:300,magneticLerp:.1},this.params={Star:{toonShadingEnabled:!0,conditionalGeometryEnabled:!0},Star_2:{toonShadingEnabled:!0,conditionalGeometryEnabled:!0},Meteor:{toonShadingEnabled:!0,geometryEnabled:!0,geometryAngle:30,conditionalGeometryEnabled:!0},Planet_A_Body:{toonShadingEnabled:!0,geometryEnabled:!0,conditionalGeometryEnabled:!0},Planet_A_Ring:{toonShadingEnabled:!0,geometryEnabled:!0,conditionalGeometryEnabled:!0},Planet_H_Land:{toonShadingEnabled:!0,geometryEnabled:!0,conditionalGeometryEnabled:!0},Planet_H_Water:{toonShadingEnabled:!0,geometryEnabled:!0,conditionalGeometryEnabled:!0},Cat_Helmet:{isHelmet:!0,geometryEnabled:!1,conditionalGeometryEnabled:!0},French_Fries_Potato:{toonShadingEnabled:!0,geometryEnabled:!0,conditionalGeometryEnabled:!0},French_Fries_Cartoon:{toonShadingEnabled:!0,geometryEnabled:!0,conditionalGeometryEnabled:!0},Donut_Bun:{toonShadingEnabled:!0,geometryEnabled:!0,conditionalGeometryEnabled:!0},Donut_Syrup:{toonShadingEnabled:!0,geometryEnabled:!0,conditionalGeometryEnabled:!0},Donut_Topping:{toonShadingEnabled:!0,geometryEnabled:!0,conditionalGeometryEnabled:!0},Cat_Ass:{toonShadingEnabled:!0,conditionalGeometryEnabled:!0},Cat_Body:{toonShadingEnabled:!0,conditionalGeometryEnabled:!0},Cat_Body_2:{toonShadingEnabled:!0,conditionalGeometryEnabled:!0},Cat_Collar:{toonShadingEnabled:!0,conditionalGeometryEnabled:!0},Cat_Body_Tail:{toonShadingEnabled:!0,conditionalGeometryEnabled:!0},Cat_Body_Hands:{toonShadingEnabled:!0,conditionalGeometryEnabled:!0},Cat_Costume_Part_1:{toonShadingEnabled:!0,conditionalGeometryEnabled:!0},Cat_Head:{toonShadingEnabled:!0,conditionalGeometryEnabled:!0},Cat_Nose:{toonShadingEnabled:!0,geometryEnabled:!0,conditionalGeometryEnabled:!0},Cat_Mouth:{toonShadingEnabled:!0,geometryEnabled:!0,conditionalGeometryEnabled:!0},Burger_Bun_Bottom:{toonShadingEnabled:!0,geometryEnabled:!0,conditionalGeometryEnabled:!0},Burger_Mayonnaise_Bottom:{toonShadingEnabled:!0,conditionalGeometryEnabled:!0},Burger_Patty:{toonShadingEnabled:!0,conditionalGeometryEnabled:!0},Burger_Cheese:{toonShadingEnabled:!0,geometryEnabled:!0},Burger_Onions_Bottom:{toonShadingEnabled:!0,geometryEnabled:!0,conditionalGeometryEnabled:!0},Burger_Tomato:{toonShadingEnabled:!0,geometryEnabled:!0,conditionalGeometryEnabled:!0},Burger_Mayonnaise_Top:{toonShadingEnabled:!0,geometryEnabled:!0,conditionalGeometryEnabled:!0},Burger_Onions_Top:{toonShadingEnabled:!0,geometryEnabled:!0,conditionalGeometryEnabled:!0},Burger_Salad:{toonShadingEnabled:!0,geometryEnabled:!0,conditionalGeometryEnabled:!0},Burger_Bun_Top:{toonShadingEnabled:!0,geometryEnabled:!0,conditionalGeometryEnabled:!0},Burger_Bun_Sesame:{sesameSeedsEnabled:!0},Box_Bottom_Part:{geometryEnabled:!0},Box_Upper_Part:{geometryEnabled:!0},Planet_Empty:{regroup:!0,spin:!0,interactive:!0},Planet_H_Empty:{regroup:!0,spin:!0,interactive:!0},Meteor_Empty:{regroup:!0,spin:!0,interactive:!0},Star_Empty:{regroup:!0,spin:!0,interactive:!0},Star_2_Empty:{regroup:!0,spin:!0,interactive:!0},Astro_Cat:{regroup:!0,spin:!0,interactive:!0},Burger:{regroup:!0,spin:!0,interactive:!0},French_Fries:{regroup:!0,spin:!0,interactive:!0},Donut:{regroup:!0,spin:!0,interactive:!0}}}get(e){const t=this.params[e];return{...this.defaultParams,...t||{}}}}const Ci=fe(),Pi=[{name:"Star_Empty_Interaction",axis:"y",direction:1,speed:.25},{name:"Star_2_Empty_Interaction",axis:"y",direction:1,speed:.25},{name:"Meteor_Empty_Interaction",axis:"y",direction:-1,speed:.25},{name:"Planet_Empty_Interaction",axis:"z",direction:-1,speed:1},{name:"Planet_H_Empty_Interaction",axis:"z",direction:-1,speed:1},{name:"Astro_Cat_Interaction",axis:"y",direction:1,speed:2},{name:"Burger_Interaction",axis:"y",direction:1,speed:1},{name:"French_Fries_Interaction",axis:"y",direction:1,speed:1},{name:"Donut_Interaction",axis:"y",direction:-1,speed:1}];class Ai extends qe{constructor(){super("scroll_geometry_cache"),this.params=new Si,this.spinConfig=Pi,this.rotationSpeedMultiplier=1e-4,this.animationFps=17,this.conditionalGeometryCount=30,this.route=Ht(),this._initModel("scrollModel")}_onModelLoaded(){this.hide(),Number(this.route.query.cleanBurger)>=1&&this._hideObjects()}_hideObjects(){this.instance.scene.children.forEach(e=>{e.name.includes("Burger")||(e.visible=!1)})}_onConditionalGeometryLoaded(){Ci.setThreeScrollLoaded(!0)}}class Mi{constructor(){this.portal=new T,this.environment=new ui,this.slider=new xi,this.scroll=new Ai,this.setWorld()}setWorld(){}update(){this.slider.update(),this.scroll.update()}}const Oi=[{name:"sliderCamera",loader:"gltfLoader",path:"/three/slider_camera.glb"},{name:"scrollCamera",loader:"gltfLoader",path:"/three/scroll_camera.glb"},{name:"scrollCameraMobile",loader:"gltfLoader",path:"/three/scroll_camera_mobile.glb"},{name:"sliderModel",loader:"gltfLoader",path:"/three/slider_model.glb"},{name:"scrollModel",loader:"gltfLoader",path:"/three/scroll_model.glb"},{name:"toonGradient",loader:"textureLoader",path:"/three/textures/threeTone.jpg"},{name:"sesameTexture",loader:"textureLoader",path:"/three/textures/sesame.png"}];class Li extends _e{constructor(){super();const{$loadingManager:e,$gltfLoader:t,$dracoLoader:i,$textureLoader:s}=be();this.loaders={loadingManager:e,gltfLoader:t,dracoLoader:i,textureLoader:s},this.sources=Oi,this.items={},this.toLoad=this.sources.length,this.loaded=0,this.startLoading()}startLoading(){for(const e of this.sources)this.loaders[e.loader].load(e.path,t=>{this.sourceLoaded(e,t)})}sourceLoaded(e,t){this.items[e.name]=t,this.loaded++,this.loaded===this.toLoad&&this.trigger("ready")}}let de=null;class T{constructor(e){if(de)return de;de=this,window.portal=this,this.canvas=e,this.config=new We,this.debug=new di,this.sizes=new ci(this.canvas),this.time=new hi,this.resources=new Li,this.materials=new Ke,this.scene=new Nt,this.camera=new Zt,this.renderer=new Kt,this.world=new Mi,this.sizes.on("resize",()=>{this.resize()}),this.time.on("tick",()=>{this.updateOnTick()})}resize(){this.camera.resize(),this.renderer.resize(),this.materials.resize()}updateOnTick(){this.camera.update(),this.world.update(),this.renderer.update()}updateOnScroll(e){this.camera.setups.scroll.animations?.updateOnScroll(e),this.world.scroll.animations?.updateOnScroll(e)}switchToScrollScene(){this.camera.activeCamera=this.camera.setups.scroll.camera,this.world.scroll.show(),this.world.slider.hide()}switchToSliderScene(){this.camera.activeCamera=this.camera.setups.slider.camera,this.world.slider.show(),this.world.scroll.hide()}destroy(){this.sizes.off(),this.time.off("tick"),this.scene.traverse(e=>{if(e instanceof ge){e.geometry.dispose();for(const t in e.material){const i=e.material[t];i&&typeof i.dispose=="function"&&i.dispose()}}}),this.debug.active&&this.debug.gui.destroy()}}const ki={ref:"canvas"},Gi={__name:"Three",setup(a){const e=fe(),{$scrollTrigger:t}=be(),i=It("canvas"),s=Vt(()=>e.sliderActiveIndex);let o;const r=se(!0),l=se(!1),u=se(!1);return Ut(()=>{o=new T(i.value),t.create({trigger:".section-process__scroll-offset",start:"top 20%",end:"bottom bottom",onUpdate:({progress:c})=>{o.updateOnScroll(c),c<=0?(r.value=!0,l.value=!1,u.value=!1):c>=1?(r.value=!1,l.value=!1,u.value=!0):(r.value=!1,l.value=!0,u.value=!1)}})}),Yt(()=>{o.destroy()}),He(()=>e.sliderActiveIndex,(c,m)=>{o?.world?.slider?.slide(c,m,e.sliderSwipeDirection)}),He(()=>l.value||u.value,c=>{c?o.switchToScrollScene():o.switchToSliderScene()}),(c,m)=>(Wt(),Xt("div",{class:Ne(["canvas",{"is-view-hero":q(r),"is-view-process":q(l),"is-view-location":q(u)}])},[K("canvas",ki,null,512),K("div",{class:Ne(["canvas__ellipse",`--color-${q(s)}`])},null,2),m[0]||(m[0]=K("div",{class:"canvas__ellipse-border --left"},null,-1)),m[1]||(m[1]=K("div",{class:"canvas__ellipse-border --right"},null,-1))],2))}},Di=Rt(Gi,[["__scopeId","data-v-cf2d6355"]]);export{Di as default};
