(function(){"use strict";const Gs="300 es";function Ne(){}Object.assign(Ne.prototype,{addEventListener:function(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)},hasEventListener:function(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1},removeEventListener:function(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}},dispatchEvent:function(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,t)}}});const Zt=[];for(let t=0;t<256;t++)Zt[t]=(t<16?"0":"")+t.toString(16);let Ui=1234567;const yt={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[t&255]+Zt[t>>8&255]+Zt[t>>16&255]+Zt[t>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[n&63|128]+Zt[n>>8&255]+"-"+Zt[n>>16&255]+Zt[n>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toUpperCase()},clamp:function(t,e,n){return Math.max(e,Math.min(n,t))},euclideanModulo:function(t,e){return(t%e+e)%e},mapLinear:function(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)},lerp:function(t,e,n){return(1-n)*t+n*e},smoothstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))},smootherstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))},randInt:function(t,e){return t+Math.floor(Math.random()*(e-t+1))},randFloat:function(t,e){return t+Math.random()*(e-t)},randFloatSpread:function(t){return t*(.5-Math.random())},seededRandom:function(t){return t!==void 0&&(Ui=t%2147483647),Ui=Ui*16807%2147483647,(Ui-1)/2147483646},degToRad:function(t){return t*yt.DEG2RAD},radToDeg:function(t){return t*yt.RAD2DEG},isPowerOfTwo:function(t){return(t&t-1)===0&&t!==0},ceilPowerOfTwo:function(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))},floorPowerOfTwo:function(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))},setQuaternionFromProperEuler:function(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),c=o(n/2),l=s((e+i)/2),f=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),u=s((i-e)/2),p=o((i-e)/2);switch(r){case"XYX":t.set(a*f,c*h,c*d,a*l);break;case"YZY":t.set(c*d,a*f,c*h,a*l);break;case"ZXZ":t.set(c*h,c*d,a*f,a*l);break;case"XZX":t.set(a*f,c*p,c*u,a*l);break;case"YXY":t.set(c*u,a*f,c*p,a*l);break;case"ZYZ":t.set(c*p,c*u,a*f,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}};class H{constructor(e=0,n=0){Object.defineProperty(this,"isVector2",{value:!0}),this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}class ie{constructor(){Object.defineProperty(this,"isMatrix3",{value:!0}),this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,n,i,r,s,o,a,c,l){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=c,f[6]=i,f[7]=o,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}clone(){return new this.constructor().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],f=i[4],h=i[7],d=i[2],u=i[5],p=i[8],y=r[0],v=r[3],g=r[6],m=r[1],T=r[4],E=r[7],w=r[2],x=r[5],A=r[8];return s[0]=o*y+a*m+c*w,s[3]=o*v+a*T+c*x,s[6]=o*g+a*E+c*A,s[1]=l*y+f*m+h*w,s[4]=l*v+f*T+h*x,s[7]=l*g+f*E+h*A,s[2]=d*y+u*m+p*w,s[5]=d*v+u*T+p*x,s[8]=d*g+u*E+p*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8];return n*o*f-n*a*l-i*s*f+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8],h=f*o-a*l,d=a*c-f*s,u=l*s-o*c,p=n*h+i*d+r*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/p;return e[0]=h*y,e[1]=(r*l-f*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(f*n-r*c)*y,e[5]=(r*s-a*n)*y,e[6]=u*y,e[7]=(i*c-l*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).copy(this).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+n,0,0,1),this}scale(e,n){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=n,i[4]*=n,i[7]*=n,this}rotate(e){const n=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],c=r[1],l=r[4],f=r[7];return r[0]=n*s+i*c,r[3]=n*o+i*l,r[6]=n*a+i*f,r[1]=-i*s+n*c,r[4]=-i*o+n*l,r[7]=-i*a+n*f,this}translate(e,n){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=n*i[2],i[4]+=n*i[5],i[7]+=n*i[8],this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}}let Tn;const En={getDataURL:function(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Tn===void 0&&(Tn=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Tn.width=t.width,Tn.height=t.height;const n=Tn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Tn}return e.width>2048||e.height>2048?e.toDataURL("image/jpeg",.6):e.toDataURL("image/png")}};let za=0;function Bt(t=Bt.DEFAULT_IMAGE,e=Bt.DEFAULT_MAPPING,n=1001,i=1001,r=1006,s=1008,o=1023,a=1009,c=1,l=3e3){Object.defineProperty(this,"id",{value:za++}),this.uuid=yt.generateUUID(),this.name="",this.image=t,this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=a,this.offset=new H(0,0),this.repeat=new H(1,1),this.center=new H(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=l,this.version=0,this.onUpdate=null}Bt.DEFAULT_IMAGE=void 0,Bt.DEFAULT_MAPPING=300,Bt.prototype=Object.assign(Object.create(Ne.prototype),{constructor:Bt,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.name=t.name,this.image=t.image,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this},toJSON:function(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=yt.generateUUID()),!e&&t.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(Rr(i[s].image)):r.push(Rr(i[s]))}else r=Rr(i);t.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return e||(t.textures[this.uuid]=n),n},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}}),Object.defineProperty(Bt.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});function Rr(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?En.getDataURL(t):t.data?{data:Array.prototype.slice.call(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class Nt{constructor(e=0,n=0,i=0,r=1){Object.defineProperty(this,"isVector4",{value:!0}),this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,l=c[0],f=c[4],h=c[8],d=c[1],u=c[5],p=c[9],y=c[2],v=c[6],g=c[10];if(Math.abs(f-d)<.01&&Math.abs(h-y)<.01&&Math.abs(p-v)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+y)<.1&&Math.abs(p+v)<.1&&Math.abs(l+u+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(l+1)/2,E=(u+1)/2,w=(g+1)/2,x=(f+d)/4,A=(h+y)/4,O=(p+v)/4;return T>E&&T>w?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=x/i,s=A/i):E>w?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=x/r,s=O/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=A/s,r=O/s),this.set(i,r,s,n),this}let m=Math.sqrt((v-p)*(v-p)+(h-y)*(h-y)+(d-f)*(d-f));return Math.abs(m)<.001&&(m=1),this.x=(v-p)/m,this.y=(h-y)/m,this.z=(d-f)/m,this.w=Math.acos((l+u+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}function xe(t,e,n){this.width=t,this.height=e,this.scissor=new Nt(0,0,t,e),this.scissorTest=!1,this.viewport=new Nt(0,0,t,e),n=n||{},this.texture=new Bt(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=t,this.texture.image.height=e,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:1006,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}xe.prototype=Object.assign(Object.create(Ne.prototype),{constructor:xe,isWebGLRenderTarget:!0,setSize:function(t,e){(this.width!==t||this.height!==e)&&(this.width=t,this.height=e,this.texture.image.width=t,this.texture.image.height=e,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.width=t.width,this.height=t.height,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});function Hs(t,e,n){xe.call(this,t,e,n),this.samples=4}Hs.prototype=Object.assign(Object.create(xe.prototype),{constructor:Hs,isWebGLMultisampleRenderTarget:!0,copy:function(t){return xe.prototype.copy.call(this,t),this.samples=t.samples,this}});class ae{constructor(e=0,n=0,i=0,r=1){Object.defineProperty(this,"isQuaternion",{value:!0}),this._x=e,this._y=n,this._z=i,this._w=r}static slerp(e,n,i,r){return i.copy(e).slerp(n,r)}static slerpFlat(e,n,i,r,s,o,a){let c=i[r+0],l=i[r+1],f=i[r+2],h=i[r+3];const d=s[o+0],u=s[o+1],p=s[o+2],y=s[o+3];if(h!==y||c!==d||l!==u||f!==p){let v=1-a;const g=c*d+l*u+f*p+h*y,m=g>=0?1:-1,T=1-g*g;if(T>Number.EPSILON){const w=Math.sqrt(T),x=Math.atan2(w,g*m);v=Math.sin(v*x)/w,a=Math.sin(a*x)/w}const E=a*m;if(c=c*v+d*E,l=l*v+u*E,f=f*v+p*E,h=h*v+y*E,v===1-a){const w=1/Math.sqrt(c*c+l*l+f*f+h*h);c*=w,l*=w,f*=w,h*=w}}e[n]=c,e[n+1]=l,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],f=i[r+3],h=s[o],d=s[o+1],u=s[o+2],p=s[o+3];return e[n]=a*p+f*h+c*u-l*d,e[n+1]=c*p+f*d+l*h-a*u,e[n+2]=l*p+f*u+a*d-c*h,e[n+3]=f*p-a*h-c*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),f=a(r/2),h=a(s/2),d=c(i/2),u=c(r/2),p=c(s/2);switch(o){case"XYZ":this._x=d*f*h+l*u*p,this._y=l*u*h-d*f*p,this._z=l*f*p+d*u*h,this._w=l*f*h-d*u*p;break;case"YXZ":this._x=d*f*h+l*u*p,this._y=l*u*h-d*f*p,this._z=l*f*p-d*u*h,this._w=l*f*h+d*u*p;break;case"ZXY":this._x=d*f*h-l*u*p,this._y=l*u*h+d*f*p,this._z=l*f*p+d*u*h,this._w=l*f*h-d*u*p;break;case"ZYX":this._x=d*f*h-l*u*p,this._y=l*u*h+d*f*p,this._z=l*f*p-d*u*h,this._w=l*f*h+d*u*p;break;case"YZX":this._x=d*f*h+l*u*p,this._y=l*u*h+d*f*p,this._z=l*f*p-d*u*h,this._w=l*f*h-d*u*p;break;case"XZY":this._x=d*f*h-l*u*p,this._y=l*u*h-d*f*p,this._z=l*f*p+d*u*h,this._w=l*f*h+d*u*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],c=n[9],l=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(f-c)*u,this._y=(s-l)*u,this._z=(o-r)*u}else if(i>a&&i>h){const u=2*Math.sqrt(1+i-a-h);this._w=(f-c)/u,this._x=.25*u,this._y=(r+o)/u,this._z=(s+l)/u}else if(a>h){const u=2*Math.sqrt(1+a-i-h);this._w=(s-l)/u,this._x=(r+o)/u,this._y=.25*u,this._z=(c+f)/u}else{const u=2*Math.sqrt(1+h-i-a);this._w=(o-r)/u,this._x=(s+l)/u,this._y=(c+f)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-6?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt.clamp(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,n){return n!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,n)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,c=n._y,l=n._z,f=n._w;return this._x=i*f+o*a+r*l-s*c,this._y=r*f+o*c+s*a-i*l,this._z=s*f+o*l+i*c-r*a,this._w=o*f-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const u=1-n;return this._w=u*o+n*this._w,this._x=u*i+n*this._x,this._y=u*r+n*this._y,this._z=u*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),f=Math.atan2(l,a),h=Math.sin((1-n)*f)/l,d=Math.sin(n*f)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}class S{constructor(e=0,n=0,i=0){Object.defineProperty(this,"isVector3",{value:!0}),this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e,n){return n!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,n)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Vs.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Vs.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*n+o*r-a*i,f=c*i+a*n-s*r,h=c*r+s*i-o*n,d=-s*n-o*i-a*r;return this.x=l*c+d*-s+f*-a-h*-o,this.y=f*c+d*-o+h*-s-l*-a,this.z=h*c+d*-a+l*-o-f*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e,n){return n!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,n)):this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,c=n.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pr.copy(this).projectOnVector(e),this.sub(Pr)}reflect(e){return this.sub(Pr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(yt.clamp(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}const Pr=new S,Vs=new ae;class Ye{constructor(e,n){Object.defineProperty(this,"isBox3",{value:!0}),this.min=e!==void 0?e:new S(1/0,1/0,1/0),this.max=n!==void 0?n:new S(-1/0,-1/0,-1/0)}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const f=e[c],h=e[c+1],d=e[c+2];f<n&&(n=f),h<i&&(i=h),d<r&&(r=d),f>s&&(s=f),h>o&&(o=h),d>a&&(a=d)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const f=e.getX(c),h=e.getY(c),d=e.getZ(c);f<n&&(n=f),h<i&&(i=h),d<r&&(r=d),f>s&&(s=f),h>o&&(o=h),d>a&&(a=d)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ai.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new S),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new S),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const n=e.geometry;n!==void 0&&(n.boundingBox===null&&n.computeBoundingBox(),Dr.copy(n.boundingBox),Dr.applyMatrix4(e.matrixWorld),this.union(Dr));const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),n=new S),n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ci),zi.subVectors(this.max,ci),An.subVectors(e.a,ci),Ln.subVectors(e.b,ci),Cn.subVectors(e.c,ci),Ze.subVectors(Ln,An),Je.subVectors(Cn,Ln),un.subVectors(An,Cn);let n=[0,-Ze.z,Ze.y,0,-Je.z,Je.y,0,-un.z,un.y,Ze.z,0,-Ze.x,Je.z,0,-Je.x,un.z,0,-un.x,-Ze.y,Ze.x,0,-Je.y,Je.x,0,-un.y,un.x,0];return!Ir(n,An,Ln,Cn,zi)||(n=[1,0,0,0,1,0,0,0,1],!Ir(n,An,Ln,Cn,zi))?!1:(Gi.crossVectors(Ze,Je),n=[Gi.x,Gi.y,Gi.z],Ir(n,An,Ln,Cn,zi))}clampPoint(e,n){return n===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),n=new S),n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ai.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fe),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}function Ir(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){fn.fromArray(t,s);const a=r.x*Math.abs(fn.x)+r.y*Math.abs(fn.y)+r.z*Math.abs(fn.z),c=e.dot(fn),l=n.dot(fn),f=i.dot(fn);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>a)return!1}return!0}const Fe=[new S,new S,new S,new S,new S,new S,new S,new S],ai=new S,Dr=new Ye,An=new S,Ln=new S,Cn=new S,Ze=new S,Je=new S,un=new S,ci=new S,zi=new S,Gi=new S,fn=new S,Ga=new Ye;class Qe{constructor(e,n){this.center=e!==void 0?e:new S,this.radius=n!==void 0?n:-1}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Ga.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),n=new S),n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new Ye),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}}const Be=new S,Nr=new S,Hi=new S,$e=new S,Fr=new S,Vi=new S,Br=new S;class li{constructor(e,n){this.origin=e!==void 0?e:new S,this.direction=n!==void 0?n:new S(0,0,-1)}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n===void 0&&(console.warn("THREE.Ray: .at() target is now required"),n=new S),n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Be)),this}closestPointToPoint(e,n){n===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),n=new S),n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Be.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Be.copy(this.direction).multiplyScalar(n).add(this.origin),Be.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Nr.copy(e).add(n).multiplyScalar(.5),Hi.copy(n).sub(e).normalize(),$e.copy(this.origin).sub(Nr);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Hi),a=$e.dot(this.direction),c=-$e.dot(Hi),l=$e.lengthSq(),f=Math.abs(1-o*o);let h,d,u,p;if(f>0)if(h=o*c-a,d=o*a-c,p=s*f,h>=0)if(d>=-p)if(d<=p){const y=1/f;h*=y,d*=y,u=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),u=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),u=-h*h+d*(d+2*c)+l;else d<=-p?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),u=-h*h+d*(d+2*c)+l):d<=p?(h=0,d=Math.min(Math.max(-s,-c),s),u=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),u=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),u=-h*h+d*(d+2*c)+l;return i&&i.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(Hi).multiplyScalar(d).add(Nr),u}intersectSphere(e,n){Be.subVectors(e.center,this.origin);const i=Be.dot(this.direction),r=Be.dot(Be)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return a<0&&c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,c;const l=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Be)!==null}intersectTriangle(e,n,i,r,s){Fr.subVectors(n,e),Vi.subVectors(i,e),Br.crossVectors(Fr,Vi);let o=this.direction.dot(Br),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$e.subVectors(this.origin,e);const c=a*this.direction.dot(Vi.crossVectors($e,Vi));if(c<0)return null;const l=a*this.direction.dot(Fr.cross($e));if(l<0||c+l>o)return null;const f=-a*$e.dot(Br);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}}class Mt{constructor(){Object.defineProperty(this,"isMatrix4",{value:!0}),this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,n,i,r,s,o,a,c,l,f,h,d,u,p,y,v){const g=this.elements;return g[0]=e,g[4]=n,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=f,g[10]=h,g[14]=d,g[3]=u,g[7]=p,g[11]=y,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Rn.setFromMatrixColumn(e,0).length(),s=1/Rn.setFromMatrixColumn(e,1).length(),o=1/Rn.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,u=o*h,p=a*f,y=a*h;n[0]=c*f,n[4]=-c*h,n[8]=l,n[1]=u+p*l,n[5]=d-y*l,n[9]=-a*c,n[2]=y-d*l,n[6]=p+u*l,n[10]=o*c}else if(e.order==="YXZ"){const d=c*f,u=c*h,p=l*f,y=l*h;n[0]=d+y*a,n[4]=p*a-u,n[8]=o*l,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=u*a-p,n[6]=y+d*a,n[10]=o*c}else if(e.order==="ZXY"){const d=c*f,u=c*h,p=l*f,y=l*h;n[0]=d-y*a,n[4]=-o*h,n[8]=p+u*a,n[1]=u+p*a,n[5]=o*f,n[9]=y-d*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(e.order==="ZYX"){const d=o*f,u=o*h,p=a*f,y=a*h;n[0]=c*f,n[4]=p*l-u,n[8]=d*l+y,n[1]=c*h,n[5]=y*l+d,n[9]=u*l-p,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(e.order==="YZX"){const d=o*c,u=o*l,p=a*c,y=a*l;n[0]=c*f,n[4]=y-d*h,n[8]=p*h+u,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-l*f,n[6]=u*h+p,n[10]=d-y*h}else if(e.order==="XZY"){const d=o*c,u=o*l,p=a*c,y=a*l;n[0]=c*f,n[4]=-h,n[8]=l*f,n[1]=d*h+y,n[5]=o*f,n[9]=u*h-p,n[2]=p*h-u,n[6]=a*f,n[10]=y*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ha,e,Va)}lookAt(e,n,i){const r=this.elements;return ce.subVectors(e,n),ce.lengthSq()===0&&(ce.z=1),ce.normalize(),Ke.crossVectors(i,ce),Ke.lengthSq()===0&&(Math.abs(i.z)===1?ce.x+=1e-4:ce.z+=1e-4,ce.normalize(),Ke.crossVectors(i,ce)),Ke.normalize(),ki.crossVectors(ce,Ke),r[0]=Ke.x,r[4]=ki.x,r[8]=ce.x,r[1]=Ke.y,r[5]=ki.y,r[9]=ce.y,r[2]=Ke.z,r[6]=ki.z,r[10]=ce.z,this}multiply(e,n){return n!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,n)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],f=i[1],h=i[5],d=i[9],u=i[13],p=i[2],y=i[6],v=i[10],g=i[14],m=i[3],T=i[7],E=i[11],w=i[15],x=r[0],A=r[4],O=r[8],I=r[12],et=r[1],P=r[5],U=r[9],N=r[13],R=r[2],C=r[6],B=r[10],k=r[14],X=r[3],K=r[7],rt=r[11],it=r[15];return s[0]=o*x+a*et+c*R+l*X,s[4]=o*A+a*P+c*C+l*K,s[8]=o*O+a*U+c*B+l*rt,s[12]=o*I+a*N+c*k+l*it,s[1]=f*x+h*et+d*R+u*X,s[5]=f*A+h*P+d*C+u*K,s[9]=f*O+h*U+d*B+u*rt,s[13]=f*I+h*N+d*k+u*it,s[2]=p*x+y*et+v*R+g*X,s[6]=p*A+y*P+v*C+g*K,s[10]=p*O+y*U+v*B+g*rt,s[14]=p*I+y*N+v*k+g*it,s[3]=m*x+T*et+E*R+w*X,s[7]=m*A+T*P+E*C+w*K,s[11]=m*O+T*U+E*B+w*rt,s[15]=m*I+T*N+E*k+w*it,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],f=e[2],h=e[6],d=e[10],u=e[14],p=e[3],y=e[7],v=e[11],g=e[15];return p*(+s*c*h-r*l*h-s*a*d+i*l*d+r*a*u-i*c*u)+y*(+n*c*u-n*l*d+s*o*d-r*o*u+r*l*f-s*c*f)+v*(+n*l*h-n*a*u-s*o*h+i*o*u+s*a*f-i*l*f)+g*(-r*a*f-n*c*h+n*a*d+r*o*h-i*o*d+i*c*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8],h=e[9],d=e[10],u=e[11],p=e[12],y=e[13],v=e[14],g=e[15],m=h*v*l-y*d*l+y*c*u-a*v*u-h*c*g+a*d*g,T=p*d*l-f*v*l-p*c*u+o*v*u+f*c*g-o*d*g,E=f*y*l-p*h*l+p*a*u-o*y*u-f*a*g+o*h*g,w=p*h*c-f*y*c-p*a*d+o*y*d+f*a*v-o*h*v,x=n*m+i*T+r*E+s*w;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/x;return e[0]=m*A,e[1]=(y*d*s-h*v*s-y*r*u+i*v*u+h*r*g-i*d*g)*A,e[2]=(a*v*s-y*c*s+y*r*l-i*v*l-a*r*g+i*c*g)*A,e[3]=(h*c*s-a*d*s-h*r*l+i*d*l+a*r*u-i*c*u)*A,e[4]=T*A,e[5]=(f*v*s-p*d*s+p*r*u-n*v*u-f*r*g+n*d*g)*A,e[6]=(p*c*s-o*v*s-p*r*l+n*v*l+o*r*g-n*c*g)*A,e[7]=(o*d*s-f*c*s+f*r*l-n*d*l-o*r*u+n*c*u)*A,e[8]=E*A,e[9]=(p*h*s-f*y*s-p*i*u+n*y*u+f*i*g-n*h*g)*A,e[10]=(o*y*s-p*a*s+p*i*l-n*y*l-o*i*g+n*a*g)*A,e[11]=(f*a*s-o*h*s-f*i*l+n*h*l+o*i*u-n*a*u)*A,e[12]=w*A,e[13]=(f*y*r-p*h*r+p*i*d-n*y*d-f*i*v+n*h*v)*A,e[14]=(p*a*r-o*y*r-p*i*c+n*y*c+o*i*v-n*a*v)*A,e[15]=(o*h*r-f*a*r+f*i*c-n*h*c-o*i*d+n*a*d)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,f=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,f*a+i,f*c-r*o,0,l*c-r*a,f*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i){return this.set(1,n,i,0,e,1,i,0,e,n,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,c=n._w,l=s+s,f=o+o,h=a+a,d=s*l,u=s*f,p=s*h,y=o*f,v=o*h,g=a*h,m=c*l,T=c*f,E=c*h,w=i.x,x=i.y,A=i.z;return r[0]=(1-(y+g))*w,r[1]=(u+E)*w,r[2]=(p-T)*w,r[3]=0,r[4]=(u-E)*x,r[5]=(1-(d+g))*x,r[6]=(v+m)*x,r[7]=0,r[8]=(p+T)*A,r[9]=(v-m)*A,r[10]=(1-(d+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Rn.set(r[0],r[1],r[2]).length();const o=Rn.set(r[4],r[5],r[6]).length(),a=Rn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],_e.copy(this);const l=1/s,f=1/o,h=1/a;return _e.elements[0]*=l,_e.elements[1]*=l,_e.elements[2]*=l,_e.elements[4]*=f,_e.elements[5]*=f,_e.elements[6]*=f,_e.elements[8]*=h,_e.elements[9]*=h,_e.elements[10]*=h,n.setFromRotationMatrix(_e),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,c=2*s/(n-e),l=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r),d=-(o+s)/(o-s),u=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=f,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=u,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){const a=this.elements,c=1/(n-e),l=1/(i-r),f=1/(o-s),h=(n+e)*c,d=(i+r)*l,u=(o+s)*f;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*f,a[14]=-u,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Rn=new S,_e=new Mt,Ha=new S(0,0,0),Va=new S(1,1,1),Ke=new S,ki=new S,ce=new S;class hi{constructor(e=0,n=0,i=0,r=hi.DefaultOrder){Object.defineProperty(this,"isEuler",{value:!0}),this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._order=r||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n,i){const r=yt.clamp,s=e.elements,o=s[0],a=s[4],c=s[8],l=s[1],f=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(n=n||this._order,n){case"XYZ":this._y=Math.asin(r(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(u,f),this._z=0);break;case"YXZ":this._x=Math.asin(-r(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(c,p),this._z=Math.atan2(l,f)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(r(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,f)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-r(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,f));break;case"YZX":this._z=Math.asin(r(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,f),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(c,p));break;case"XZY":this._z=Math.asin(-r(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,f),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ks.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ks,n,i)}setFromVector3(e,n){return this.set(e.x,e.y,e.z,n||this._order)}reorder(e){return Ws.setFromEuler(this),this.setFromQuaternion(Ws,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new S(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}hi.DefaultOrder="XYZ",hi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];const ks=new Mt,Ws=new ae;class js{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}}let ka=0;const qs=new S,Pn=new ae,Oe=new Mt,Wi=new S,ui=new S,Wa=new S,ja=new ae,Xs=new S(1,0,0),Ys=new S(0,1,0),Zs=new S(0,0,1),qa={type:"added"},Js={type:"removed"};function ft(){Object.defineProperty(this,"id",{value:ka++}),this.uuid=yt.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DefaultUp.clone();const t=new S,e=new hi,n=new ae,i=new S(1,1,1);function r(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Mt},normalMatrix:{value:new ie}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=ft.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}ft.DefaultUp=new S(0,1,0),ft.DefaultMatrixAutoUpdate=!0,ft.prototype=Object.assign(Object.create(Ne.prototype),{constructor:ft,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(t){return this.quaternion.premultiply(t),this},setRotationFromAxisAngle:function(t,e){this.quaternion.setFromAxisAngle(t,e)},setRotationFromEuler:function(t){this.quaternion.setFromEuler(t,!0)},setRotationFromMatrix:function(t){this.quaternion.setFromRotationMatrix(t)},setRotationFromQuaternion:function(t){this.quaternion.copy(t)},rotateOnAxis:function(t,e){return Pn.setFromAxisAngle(t,e),this.quaternion.multiply(Pn),this},rotateOnWorldAxis:function(t,e){return Pn.setFromAxisAngle(t,e),this.quaternion.premultiply(Pn),this},rotateX:function(t){return this.rotateOnAxis(Xs,t)},rotateY:function(t){return this.rotateOnAxis(Ys,t)},rotateZ:function(t){return this.rotateOnAxis(Zs,t)},translateOnAxis:function(t,e){return qs.copy(t).applyQuaternion(this.quaternion),this.position.add(qs.multiplyScalar(e)),this},translateX:function(t){return this.translateOnAxis(Xs,t)},translateY:function(t){return this.translateOnAxis(Ys,t)},translateZ:function(t){return this.translateOnAxis(Zs,t)},localToWorld:function(t){return t.applyMatrix4(this.matrixWorld)},worldToLocal:function(t){return t.applyMatrix4(Oe.copy(this.matrixWorld).invert())},lookAt:function(t,e,n){t.isVector3?Wi.copy(t):Wi.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ui.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oe.lookAt(ui,Wi,this.up):Oe.lookAt(Wi,ui,this.up),this.quaternion.setFromRotationMatrix(Oe),i&&(Oe.extractRotation(i.matrixWorld),Pn.setFromRotationMatrix(Oe),this.quaternion.premultiply(Pn.invert()))},add:function(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(qa)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)},remove:function(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Js)),this},clear:function(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Js)}return this.children.length=0,this},attach:function(t){return this.updateWorldMatrix(!0,!1),Oe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Oe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Oe),t.updateWorldMatrix(!1,!1),this.add(t),this},getObjectById:function(t){return this.getObjectByProperty("id",t)},getObjectByName:function(t){return this.getObjectByProperty("name",t)},getObjectByProperty:function(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}},getWorldPosition:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),t=new S),this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),t=new ae),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ui,t,Wa),t},getWorldScale:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),t=new S),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ui,ja,t),t},getWorldDirection:function(t){t===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),t=new S),this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()},raycast:function(){},traverse:function(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)},traverseVisible:function(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)},traverseAncestors:function(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)},updateWorldMatrix:function(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}},toJSON:function(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON());function r(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(t)),a.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const a=o.shapes;if(Array.isArray(a))for(let c=0,l=a.length;c<l;c++){const f=a[c];r(t.shapes,f)}else r(t.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let a=0,c=this.material.length;a<c;a++)o.push(r(t.materials,this.material[a]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const a=this.animations[o];i.animations.push(r(t.animations,a))}}if(e){const o=s(t.geometries),a=s(t.materials),c=s(t.textures),l=s(t.images),f=s(t.shapes),h=s(t.skeletons),d=s(t.animations);o.length>0&&(n.geometries=o),a.length>0&&(n.materials=a),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d)}return n.object=i,n;function s(o){const a=[];for(const c in o){const l=o[c];delete l.metadata,a.push(l)}return a}},clone:function(t){return new this.constructor().copy(this,t)},copy:function(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}});const Or=new S,Xa=new S,Ya=new ie;class Ue{constructor(e,n){Object.defineProperty(this,"isPlane",{value:!0}),this.normal=e!==void 0?e:new S(1,0,0),this.constant=n!==void 0?n:0}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Or.subVectors(i,n).cross(Xa.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}clone(){return new this.constructor().copy(this)}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),n=new S),n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){n===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),n=new S);const i=e.delta(Or),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):void 0;const s=-(e.start.dot(this.normal)+this.constant)/r;if(!(s<0||s>1))return n.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new S),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Ya.getNormalMatrix(e),r=this.coplanarPoint(Or).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}}const be=new S,ze=new S,Ur=new S,Ge=new S,In=new S,Dn=new S,Qs=new S,zr=new S,Gr=new S,Hr=new S;class Qt{constructor(e,n,i){this.a=e!==void 0?e:new S,this.b=n!==void 0?n:new S,this.c=i!==void 0?i:new S}static getNormal(e,n,i,r){r===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),r=new S),r.subVectors(i,n),be.subVectors(e,n),r.cross(be);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){be.subVectors(r,n),ze.subVectors(i,n),Ur.subVectors(e,n);const o=be.dot(be),a=be.dot(ze),c=be.dot(Ur),l=ze.dot(ze),f=ze.dot(Ur),h=o*l-a*a;if(s===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),s=new S),h===0)return s.set(-2,-1,-1);const d=1/h,u=(l*c-a*f)*d,p=(o*f-a*c)*d;return s.set(1-u-p,p,u)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ge),Ge.x>=0&&Ge.y>=0&&Ge.x+Ge.y<=1}static getUV(e,n,i,r,s,o,a,c){return this.getBarycoord(e,n,i,r,Ge),c.set(0,0),c.addScaledVector(s,Ge.x),c.addScaledVector(o,Ge.y),c.addScaledVector(a,Ge.z),c}static isFrontFacing(e,n,i,r){return be.subVectors(i,n),ze.subVectors(e,n),be.cross(ze).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return be.subVectors(this.c,this.b),ze.subVectors(this.a,this.b),be.cross(ze).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new S),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new Ue),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Qt.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Qt.getUV(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){n===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),n=new S);const i=this.a,r=this.b,s=this.c;let o,a;In.subVectors(r,i),Dn.subVectors(s,i),zr.subVectors(e,i);const c=In.dot(zr),l=Dn.dot(zr);if(c<=0&&l<=0)return n.copy(i);Gr.subVectors(e,r);const f=In.dot(Gr),h=Dn.dot(Gr);if(f>=0&&h<=f)return n.copy(r);const d=c*h-f*l;if(d<=0&&c>=0&&f<=0)return o=c/(c-f),n.copy(i).addScaledVector(In,o);Hr.subVectors(e,s);const u=In.dot(Hr),p=Dn.dot(Hr);if(p>=0&&u<=p)return n.copy(s);const y=u*l-c*p;if(y<=0&&l>=0&&p<=0)return a=l/(l-p),n.copy(i).addScaledVector(Dn,a);const v=f*p-u*h;if(v<=0&&h-f>=0&&u-p>=0)return Qs.subVectors(s,r),a=(h-f)/(h-f+(u-p)),n.copy(r).addScaledVector(Qs,a);const g=1/(v+y+d);return o=y*g,a=d*g,n.copy(i).addScaledVector(In,o).addScaledVector(Dn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $s={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Me={h:0,s:0,l:0},ji={h:0,s:0,l:0};function Vr(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function kr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Wr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}class ct{constructor(e,n,i){return Object.defineProperty(this,"isColor",{value:!0}),n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,n,i){return this.r=e,this.g=n,this.b=i,this}setHSL(e,n,i){if(e=yt.euclideanModulo(e,1),n=yt.clamp(n,0,1),i=yt.clamp(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=Vr(s,r,e+1/3),this.g=Vr(s,r,e),this.b=Vr(s,r,e-1/3)}return this}setStyle(e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)){let r;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,n(r[4]),this;if(r=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,n(r[4]),this;break;case"hsl":case"hsla":if(r=/^(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,l=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(a,c,l)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const n=$s[e];return n!==void 0?this.setHex(n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,n=2){return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}copyLinearToGamma(e,n=2){const i=n>0?1/n:1;return this.r=Math.pow(e.r,i),this.g=Math.pow(e.g,i),this.b=Math.pow(e.b,i),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=kr(e.r),this.g=kr(e.g),this.b=kr(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});const n=this.r,i=this.g,r=this.b,s=Math.max(n,i,r),o=Math.min(n,i,r);let a,c;const l=(o+s)/2;if(o===s)a=0,c=0;else{const f=s-o;switch(c=l<=.5?f/(s+o):f/(2-s-o),s){case n:a=(i-r)/f+(i<r?6:0);break;case i:a=(r-n)/f+2;break;case r:a=(n-i)/f+4;break}a/=6}return e.h=a,e.s=c,e.l=l,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,n,i){return this.getHSL(Me),Me.h+=e,Me.s+=n,Me.l+=i,this.setHSL(Me.h,Me.s,Me.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpHSL(e,n){this.getHSL(Me),e.getHSL(ji);const i=yt.lerp(Me.h,ji.h,n),r=yt.lerp(Me.s,ji.s,n),s=yt.lerp(Me.l,ji.l,n);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}ct.NAMES=$s,ct.prototype.r=1,ct.prototype.g=1,ct.prototype.b=1;class jr{constructor(e,n,i,r,s,o=0){this.a=e,this.b=n,this.c=i,this.normal=r&&r.isVector3?r:new S,this.vertexNormals=Array.isArray(r)?r:[],this.color=s&&s.isColor?s:new ct,this.vertexColors=Array.isArray(s)?s:[],this.materialIndex=o}clone(){return new this.constructor().copy(this)}copy(e){this.a=e.a,this.b=e.b,this.c=e.c,this.normal.copy(e.normal),this.color.copy(e.color),this.materialIndex=e.materialIndex;for(let n=0,i=e.vertexNormals.length;n<i;n++)this.vertexNormals[n]=e.vertexNormals[n].clone();for(let n=0,i=e.vertexColors.length;n<i;n++)this.vertexColors[n]=e.vertexColors[n].clone();return this}}let Za=0;function pt(){Object.defineProperty(this,"id",{value:Za++}),this.uuid=yt.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=1,this.side=0,this.flatShading=!1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}pt.prototype=Object.assign(Object.create(Ne.prototype),{constructor:pt,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===1;continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}},toJSON:function(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(n.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,n.reflectivity=this.reflectivity,n.refractionRatio=this.refractionRatio,this.combine!==void 0&&(n.combine=this.combine),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.flatShading===!0&&(n.flatShading=this.flatShading),this.side!==0&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(n.morphTargets=!0),this.morphNormals===!0&&(n.morphNormals=!0),this.skinning===!0&&(n.skinning=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const s=[];for(const o in r){const a=r[o];delete a.metadata,s.push(a)}return s}if(e){const r=i(t.textures),s=i(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n},clone:function(){return new this.constructor().copy(this)},copy:function(t){this.name=t.name,this.fog=t.fog,this.blending=t.blending,this.side=t.side,this.flatShading=t.flatShading,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}}),Object.defineProperty(pt.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});function dn(t){pt.call(this),this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(t)}dn.prototype=Object.create(pt.prototype),dn.prototype.constructor=dn,dn.prototype.isMeshBasicMaterial=!0,dn.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this};const Ot=new S,qi=new H;function gt(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0}Object.defineProperty(gt.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}}),Object.assign(gt.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(t){return this.usage=t,this},copy:function(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this},copyAt:function(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this},copyArray:function(t){return this.array.set(t),this},copyColorsArray:function(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),s=new ct),e[n++]=s.r,e[n++]=s.g,e[n++]=s.b}return this},copyVector2sArray:function(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),s=new H),e[n++]=s.x,e[n++]=s.y}return this},copyVector3sArray:function(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),s=new S),e[n++]=s.x,e[n++]=s.y,e[n++]=s.z}return this},copyVector4sArray:function(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),s=new Nt),e[n++]=s.x,e[n++]=s.y,e[n++]=s.z,e[n++]=s.w}return this},applyMatrix3:function(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qi.fromBufferAttribute(this,e),qi.applyMatrix3(t),this.setXY(e,qi.x,qi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ot.fromBufferAttribute(this,e),Ot.applyMatrix3(t),this.setXYZ(e,Ot.x,Ot.y,Ot.z);return this},applyMatrix4:function(t){for(let e=0,n=this.count;e<n;e++)Ot.x=this.getX(e),Ot.y=this.getY(e),Ot.z=this.getZ(e),Ot.applyMatrix4(t),this.setXYZ(e,Ot.x,Ot.y,Ot.z);return this},applyNormalMatrix:function(t){for(let e=0,n=this.count;e<n;e++)Ot.x=this.getX(e),Ot.y=this.getY(e),Ot.z=this.getZ(e),Ot.applyNormalMatrix(t),this.setXYZ(e,Ot.x,Ot.y,Ot.z);return this},transformDirection:function(t){for(let e=0,n=this.count;e<n;e++)Ot.x=this.getX(e),Ot.y=this.getY(e),Ot.z=this.getZ(e),Ot.transformDirection(t),this.setXYZ(e,Ot.x,Ot.y,Ot.z);return this},set:function(t,e=0){return this.array.set(t,e),this},getX:function(t){return this.array[t*this.itemSize]},setX:function(t,e){return this.array[t*this.itemSize]=e,this},getY:function(t){return this.array[t*this.itemSize+1]},setY:function(t,e){return this.array[t*this.itemSize+1]=e,this},getZ:function(t){return this.array[t*this.itemSize+2]},setZ:function(t,e){return this.array[t*this.itemSize+2]=e,this},getW:function(t){return this.array[t*this.itemSize+3]},setW:function(t,e){return this.array[t*this.itemSize+3]=e,this},setXY:function(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this},setXYZ:function(t,e,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this},setXYZW:function(t,e,n,i,r){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this},onUpload:function(t){return this.onUploadCallback=t,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}});function qr(t,e,n){gt.call(this,new Int8Array(t),e,n)}qr.prototype=Object.create(gt.prototype),qr.prototype.constructor=qr;function Xr(t,e,n){gt.call(this,new Uint8Array(t),e,n)}Xr.prototype=Object.create(gt.prototype),Xr.prototype.constructor=Xr;function Yr(t,e,n){gt.call(this,new Uint8ClampedArray(t),e,n)}Yr.prototype=Object.create(gt.prototype),Yr.prototype.constructor=Yr;function Zr(t,e,n){gt.call(this,new Int16Array(t),e,n)}Zr.prototype=Object.create(gt.prototype),Zr.prototype.constructor=Zr;function fi(t,e,n){gt.call(this,new Uint16Array(t),e,n)}fi.prototype=Object.create(gt.prototype),fi.prototype.constructor=fi;function Jr(t,e,n){gt.call(this,new Int32Array(t),e,n)}Jr.prototype=Object.create(gt.prototype),Jr.prototype.constructor=Jr;function di(t,e,n){gt.call(this,new Uint32Array(t),e,n)}di.prototype=Object.create(gt.prototype),di.prototype.constructor=di;function Xi(t,e,n){gt.call(this,new Uint16Array(t),e,n)}Xi.prototype=Object.create(gt.prototype),Xi.prototype.constructor=Xi,Xi.prototype.isFloat16BufferAttribute=!0;function Pt(t,e,n){gt.call(this,new Float32Array(t),e,n)}Pt.prototype=Object.create(gt.prototype),Pt.prototype.constructor=Pt;function Qr(t,e,n){gt.call(this,new Float64Array(t),e,n)}Qr.prototype=Object.create(gt.prototype),Qr.prototype.constructor=Qr;class Ja{constructor(){this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],this.boundingBox=null,this.boundingSphere=null,this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1}computeGroups(e){const n=[];let i,r,s;const o=e.faces;for(r=0;r<o.length;r++){const a=o[r];a.materialIndex!==s&&(s=a.materialIndex,i!==void 0&&(i.count=r*3-i.start,n.push(i)),i={start:r*3,materialIndex:s})}i!==void 0&&(i.count=r*3-i.start,n.push(i)),this.groups=n}fromGeometry(e){const n=e.faces,i=e.vertices,r=e.faceVertexUvs,s=r[0]&&r[0].length>0,o=r[1]&&r[1].length>0,a=e.morphTargets,c=a.length;let l;if(c>0){l=[];for(let g=0;g<c;g++)l[g]={name:a[g].name,data:[]};this.morphTargets.position=l}const f=e.morphNormals,h=f.length;let d;if(h>0){d=[];for(let g=0;g<h;g++)d[g]={name:f[g].name,data:[]};this.morphTargets.normal=d}const u=e.skinIndices,p=e.skinWeights,y=u.length===i.length,v=p.length===i.length;i.length>0&&n.length===0&&console.error("THREE.DirectGeometry: Faceless geometries are not supported.");for(let g=0;g<n.length;g++){const m=n[g];this.vertices.push(i[m.a],i[m.b],i[m.c]);const T=m.vertexNormals;if(T.length===3)this.normals.push(T[0],T[1],T[2]);else{const w=m.normal;this.normals.push(w,w,w)}const E=m.vertexColors;if(E.length===3)this.colors.push(E[0],E[1],E[2]);else{const w=m.color;this.colors.push(w,w,w)}if(s===!0){const w=r[0][g];w!==void 0?this.uvs.push(w[0],w[1],w[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",g),this.uvs.push(new H,new H,new H))}if(o===!0){const w=r[1][g];w!==void 0?this.uvs2.push(w[0],w[1],w[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",g),this.uvs2.push(new H,new H,new H))}for(let w=0;w<c;w++){const x=a[w].vertices;l[w].data.push(x[m.a],x[m.b],x[m.c])}for(let w=0;w<h;w++){const x=f[w].vertexNormals[g];d[w].data.push(x.a,x.b,x.c)}y&&this.skinIndices.push(u[m.a],u[m.b],u[m.c]),v&&this.skinWeights.push(p[m.a],p[m.b],p[m.c])}return this.computeGroups(e),this.verticesNeedUpdate=e.verticesNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),this}}function Ks(t){if(t.length===0)return-1/0;let e=t[0];for(let n=1,i=t.length;n<i;++n)t[n]>e&&(e=t[n]);return e}const Qa={Int8Array,Uint8Array,Uint8ClampedArray:typeof Uint8ClampedArray<"u"?Uint8ClampedArray:Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Yi(t,e){return new Qa[t](e)}let $a=1;const Te=new Mt,$r=new ft,Nn=new S,le=new Ye,pi=new Ye,Xt=new S;function Dt(){Object.defineProperty(this,"id",{value:$a+=2}),this.uuid=yt.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}Dt.prototype=Object.assign(Object.create(Ne.prototype),{constructor:Dt,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(t){return Array.isArray(t)?this.index=new(Ks(t)>65535?di:fi)(t,1):this.index=t,this},getAttribute:function(t){return this.attributes[t]},setAttribute:function(t,e){return this.attributes[t]=e,this},deleteAttribute:function(t){return delete this.attributes[t],this},hasAttribute:function(t){return this.attributes[t]!==void 0},addGroup:function(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})},clearGroups:function(){this.groups=[]},setDrawRange:function(t,e){this.drawRange.start=t,this.drawRange.count=e},applyMatrix4:function(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ie().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(t){return Te.makeRotationX(t),this.applyMatrix4(Te),this},rotateY:function(t){return Te.makeRotationY(t),this.applyMatrix4(Te),this},rotateZ:function(t){return Te.makeRotationZ(t),this.applyMatrix4(Te),this},translate:function(t,e,n){return Te.makeTranslation(t,e,n),this.applyMatrix4(Te),this},scale:function(t,e,n){return Te.makeScale(t,e,n),this.applyMatrix4(Te),this},lookAt:function(t){return $r.lookAt(t),$r.updateMatrix(),this.applyMatrix4($r.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nn).negate(),this.translate(Nn.x,Nn.y,Nn.z),this},setFromObject:function(t){const e=t.geometry;if(t.isPoints||t.isLine){const n=new Pt(e.vertices.length*3,3),i=new Pt(e.colors.length*3,3);if(this.setAttribute("position",n.copyVector3sArray(e.vertices)),this.setAttribute("color",i.copyColorsArray(e.colors)),e.lineDistances&&e.lineDistances.length===e.vertices.length){const r=new Pt(e.lineDistances.length,1);this.setAttribute("lineDistance",r.copyArray(e.lineDistances))}e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone())}else t.isMesh&&e&&e.isGeometry&&this.fromGeometry(e);return this},setFromPoints:function(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Pt(e,3)),this},updateFromObject:function(t){let e=t.geometry;if(t.isMesh){let n=e.__directGeometry;if(e.elementsNeedUpdate===!0&&(n=void 0,e.elementsNeedUpdate=!1),n===void 0)return this.fromGeometry(e);n.verticesNeedUpdate=e.verticesNeedUpdate,n.normalsNeedUpdate=e.normalsNeedUpdate,n.colorsNeedUpdate=e.colorsNeedUpdate,n.uvsNeedUpdate=e.uvsNeedUpdate,n.groupsNeedUpdate=e.groupsNeedUpdate,e.verticesNeedUpdate=!1,e.normalsNeedUpdate=!1,e.colorsNeedUpdate=!1,e.uvsNeedUpdate=!1,e.groupsNeedUpdate=!1,e=n}if(e.verticesNeedUpdate===!0){const n=this.attributes.position;n!==void 0&&(n.copyVector3sArray(e.vertices),n.needsUpdate=!0),e.verticesNeedUpdate=!1}if(e.normalsNeedUpdate===!0){const n=this.attributes.normal;n!==void 0&&(n.copyVector3sArray(e.normals),n.needsUpdate=!0),e.normalsNeedUpdate=!1}if(e.colorsNeedUpdate===!0){const n=this.attributes.color;n!==void 0&&(n.copyColorsArray(e.colors),n.needsUpdate=!0),e.colorsNeedUpdate=!1}if(e.uvsNeedUpdate){const n=this.attributes.uv;n!==void 0&&(n.copyVector2sArray(e.uvs),n.needsUpdate=!0),e.uvsNeedUpdate=!1}if(e.lineDistancesNeedUpdate){const n=this.attributes.lineDistance;n!==void 0&&(n.copyArray(e.lineDistances),n.needsUpdate=!0),e.lineDistancesNeedUpdate=!1}return e.groupsNeedUpdate&&(e.computeGroups(t.geometry),this.groups=e.groups,e.groupsNeedUpdate=!1),this},fromGeometry:function(t){return t.__directGeometry=new Ja().fromGeometry(t),this.fromDirectGeometry(t.__directGeometry)},fromDirectGeometry:function(t){const e=new Float32Array(t.vertices.length*3);if(this.setAttribute("position",new gt(e,3).copyVector3sArray(t.vertices)),t.normals.length>0){const n=new Float32Array(t.normals.length*3);this.setAttribute("normal",new gt(n,3).copyVector3sArray(t.normals))}if(t.colors.length>0){const n=new Float32Array(t.colors.length*3);this.setAttribute("color",new gt(n,3).copyColorsArray(t.colors))}if(t.uvs.length>0){const n=new Float32Array(t.uvs.length*2);this.setAttribute("uv",new gt(n,2).copyVector2sArray(t.uvs))}if(t.uvs2.length>0){const n=new Float32Array(t.uvs2.length*2);this.setAttribute("uv2",new gt(n,2).copyVector2sArray(t.uvs2))}this.groups=t.groups;for(const n in t.morphTargets){const i=[],r=t.morphTargets[n];for(let s=0,o=r.length;s<o;s++){const a=r[s],c=new Pt(a.data.length*3,3);c.name=a.name,i.push(c.copyVector3sArray(a.data))}this.morphAttributes[n]=i}if(t.skinIndices.length>0){const n=new Pt(t.skinIndices.length*4,4);this.setAttribute("skinIndex",n.copyVector4sArray(t.skinIndices))}if(t.skinWeights.length>0){const n=new Pt(t.skinWeights.length*4,4);this.setAttribute("skinWeight",n.copyVector4sArray(t.skinWeights))}return t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new Ye);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];le.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,le.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,le.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(le.min),this.boundingBox.expandByPoint(le.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new Qe);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new S,1/0);return}if(t){const n=this.boundingSphere.center;if(le.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){const o=e[r];pi.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(le.min,pi.min),le.expandByPoint(Xt),Xt.addVectors(le.max,pi.max),le.expandByPoint(Xt)):(le.expandByPoint(pi.min),le.expandByPoint(pi.max))}le.getCenter(n);let i=0;for(let r=0,s=t.count;r<s;r++)Xt.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Xt));if(e)for(let r=0,s=e.length;r<s;r++){const o=e[r],a=this.morphTargetsRelative;for(let c=0,l=o.count;c<l;c++)Xt.fromBufferAttribute(o,c),a&&(Nn.fromBufferAttribute(t,c),Xt.add(Nn)),i=Math.max(i,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeVertexNormals:function(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new S,r=new S,s=new S,o=new S,a=new S,c=new S,l=new S,f=new S;if(t)for(let h=0,d=t.count;h<d;h+=3){const u=t.getX(h+0),p=t.getX(h+1),y=t.getX(h+2);i.fromBufferAttribute(e,u),r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,y),l.subVectors(s,r),f.subVectors(i,r),l.cross(f),o.fromBufferAttribute(n,u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,y),o.add(l),a.add(l),c.add(l),n.setXYZ(u,o.x,o.y,o.z),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),s.fromBufferAttribute(e,h+2),l.subVectors(s,r),f.subVectors(i,r),l.cross(f),n.setXYZ(h+0,l.x,l.y,l.z),n.setXYZ(h+1,l.x,l.y,l.z),n.setXYZ(h+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}},merge:function(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(t.attributes[i]===void 0)continue;const s=n[i].array,o=t.attributes[i],a=o.array,c=o.itemSize*e,l=Math.min(a.length,s.length-c);for(let f=0,h=c;f<l;f++,h++)s[h]=a[f]}return this},normalizeNormals:function(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xt.fromBufferAttribute(t,e),Xt.normalize(),t.setXYZ(e,Xt.x,Xt.y,Xt.z)},toNonIndexed:function(){function t(o,a){const c=o.array,l=o.itemSize,f=o.normalized,h=new c.constructor(a.length*l);let d=0,u=0;for(let p=0,y=a.length;p<y;p++){d=a[p]*l;for(let v=0;v<l;v++)h[u++]=c[d++]}return new gt(h,l,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;const e=new Dt,n=this.index.array,i=this.attributes;for(const o in i){const a=i[o],c=t(a,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const a=[],c=r[o];for(let l=0,f=c.length;l<f;l++){const h=c[l],d=t(h,n);a.push(d)}e.morphAttributes[o]=a}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,a=s.length;o<a;o++){const c=s[o];e.addGroup(c.start,c.count,c.materialIndex)}return e},toJSON:function(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const c in a)a[c]!==void 0&&(t[c]=a[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const a in n){const c=n[a],l=c.toJSON(t.data);c.name!==""&&(l.name=c.name),t.data.attributes[a]=l}const i={};let r=!1;for(const a in this.morphAttributes){const c=this.morphAttributes[a],l=[];for(let f=0,h=c.length;f<h;f++){const d=c[f],u=d.toJSON(t.data);d.name!==""&&(u.name=d.name),l.push(u)}l.length>0&&(i[a]=l,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t},clone:function(){return new Dt().copy(this)},copy:function(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const l=i[c];this.setAttribute(c,l.clone(e))}const r=t.morphAttributes;for(const c in r){const l=[],f=r[c];for(let h=0,d=f.length;h<d;h++)l.push(f[h].clone(e));this.morphAttributes[c]=l}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let c=0,l=s.length;c<l;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const a=t.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});const to=new Mt,pn=new li,Kr=new Qe,tn=new S,en=new S,nn=new S,ts=new S,es=new S,ns=new S,Zi=new S,Ji=new S,Qi=new S,Fn=new H,Bn=new H,On=new H,mi=new S,$i=new S;function $t(t=new Dt,e=new dn){ft.call(this),this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}$t.prototype=Object.assign(Object.create(ft.prototype),{constructor:$t,isMesh:!0,copy:function(t){return ft.prototype.copy.call(this,t),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this},updateMorphTargets:function(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(r),t.ray.intersectsSphere(Kr)===!1)||(to.copy(r).invert(),pn.copy(t.ray).applyMatrix4(to),n.boundingBox!==null&&pn.intersectsBox(n.boundingBox)===!1))return;let s;if(n.isBufferGeometry){const o=n.index,a=n.attributes.position,c=n.morphAttributes.position,l=n.morphTargetsRelative,f=n.attributes.uv,h=n.attributes.uv2,d=n.groups,u=n.drawRange;if(o!==null)if(Array.isArray(i))for(let p=0,y=d.length;p<y;p++){const v=d[p],g=i[v.materialIndex],m=Math.max(v.start,u.start),T=Math.min(v.start+v.count,u.start+u.count);for(let E=m,w=T;E<w;E+=3){const x=o.getX(E),A=o.getX(E+1),O=o.getX(E+2);s=Ki(this,g,t,pn,a,c,l,f,h,x,A,O),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=v.materialIndex,e.push(s))}}else{const p=Math.max(0,u.start),y=Math.min(o.count,u.start+u.count);for(let v=p,g=y;v<g;v+=3){const m=o.getX(v),T=o.getX(v+1),E=o.getX(v+2);s=Ki(this,i,t,pn,a,c,l,f,h,m,T,E),s&&(s.faceIndex=Math.floor(v/3),e.push(s))}}else if(a!==void 0)if(Array.isArray(i))for(let p=0,y=d.length;p<y;p++){const v=d[p],g=i[v.materialIndex],m=Math.max(v.start,u.start),T=Math.min(v.start+v.count,u.start+u.count);for(let E=m,w=T;E<w;E+=3){const x=E,A=E+1,O=E+2;s=Ki(this,g,t,pn,a,c,l,f,h,x,A,O),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=v.materialIndex,e.push(s))}}else{const p=Math.max(0,u.start),y=Math.min(a.count,u.start+u.count);for(let v=p,g=y;v<g;v+=3){const m=v,T=v+1,E=v+2;s=Ki(this,i,t,pn,a,c,l,f,h,m,T,E),s&&(s.faceIndex=Math.floor(v/3),e.push(s))}}}else if(n.isGeometry){const o=Array.isArray(i),a=n.vertices,c=n.faces;let l;const f=n.faceVertexUvs[0];f.length>0&&(l=f);for(let h=0,d=c.length;h<d;h++){const u=c[h],p=o?i[u.materialIndex]:i;if(p===void 0)continue;const y=a[u.a],v=a[u.b],g=a[u.c];if(s=eo(this,p,t,pn,y,v,g,mi),s){if(l&&l[h]){const m=l[h];Fn.copy(m[0]),Bn.copy(m[1]),On.copy(m[2]),s.uv=Qt.getUV(mi,y,v,g,Fn,Bn,On,new H)}s.face=u,s.faceIndex=h,e.push(s)}}}}});function eo(t,e,n,i,r,s,o,a){let c;if(e.side===1?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side!==2,a),c===null)return null;$i.copy(a),$i.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo($i);return l<n.near||l>n.far?null:{distance:l,point:$i.clone(),object:t}}function Ki(t,e,n,i,r,s,o,a,c,l,f,h){tn.fromBufferAttribute(r,l),en.fromBufferAttribute(r,f),nn.fromBufferAttribute(r,h);const d=t.morphTargetInfluences;if(e.morphTargets&&s&&d){Zi.set(0,0,0),Ji.set(0,0,0),Qi.set(0,0,0);for(let p=0,y=s.length;p<y;p++){const v=d[p],g=s[p];v!==0&&(ts.fromBufferAttribute(g,l),es.fromBufferAttribute(g,f),ns.fromBufferAttribute(g,h),o?(Zi.addScaledVector(ts,v),Ji.addScaledVector(es,v),Qi.addScaledVector(ns,v)):(Zi.addScaledVector(ts.sub(tn),v),Ji.addScaledVector(es.sub(en),v),Qi.addScaledVector(ns.sub(nn),v)))}tn.add(Zi),en.add(Ji),nn.add(Qi)}t.isSkinnedMesh&&(t.boneTransform(l,tn),t.boneTransform(f,en),t.boneTransform(h,nn));const u=eo(t,e,n,i,tn,en,nn,mi);if(u){a&&(Fn.fromBufferAttribute(a,l),Bn.fromBufferAttribute(a,f),On.fromBufferAttribute(a,h),u.uv=Qt.getUV(mi,tn,en,nn,Fn,Bn,On,new H)),c&&(Fn.fromBufferAttribute(c,l),Bn.fromBufferAttribute(c,f),On.fromBufferAttribute(c,h),u.uv2=Qt.getUV(mi,tn,en,nn,Fn,Bn,On,new H));const p=new jr(l,f,h);Qt.getNormal(tn,en,nn,p.normal),u.face=p}return u}class no extends Dt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxBufferGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],f=[],h=[];let d=0,u=0;p("z","y","x",-1,-1,i,n,e,o,s,0),p("z","y","x",1,-1,i,n,-e,o,s,1),p("x","z","y",1,1,e,i,n,r,o,2),p("x","z","y",1,-1,e,i,-n,r,o,3),p("x","y","z",1,-1,e,n,i,r,s,4),p("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(f,3)),this.setAttribute("uv",new Pt(h,2));function p(y,v,g,m,T,E,w,x,A,O,I){const et=E/A,P=w/O,U=E/2,N=w/2,R=x/2,C=A+1,B=O+1;let k=0,X=0;const K=new S;for(let rt=0;rt<B;rt++){const it=rt*P-N;for(let vt=0;vt<C;vt++){const wt=vt*et-U;K[y]=wt*m,K[v]=it*T,K[g]=R,l.push(K.x,K.y,K.z),K[y]=0,K[v]=0,K[g]=x>0?1:-1,f.push(K.x,K.y,K.z),h.push(vt/A),h.push(1-rt/O),k+=1}}for(let rt=0;rt<O;rt++)for(let it=0;it<A;it++){const vt=d+it+C*rt,wt=d+it+C*(rt+1),kt=d+(it+1)+C*(rt+1),G=d+(it+1)+C*rt;c.push(vt,wt,G),c.push(wt,kt,G),X+=6}a.addGroup(u,X,I),u+=X,d+=k}}}function Un(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Kt(t){const e={};for(let n=0;n<t.length;n++){const i=Un(t[n]);for(const r in i)e[r]=i[r]}return e}const Ka={clone:Un,merge:Kt};var tc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ec=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;function re(t){pt.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=tc,this.fragmentShader=ec,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}re.prototype=Object.create(pt.prototype),re.prototype.constructor=re,re.prototype.isShaderMaterial=!0,re.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Un(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.lights=t.lights,this.clipping=t.clipping,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this},re.prototype.toJSON=function(t){const e=pt.prototype.toJSON.call(this,t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?e.uniforms[i]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[i]={type:"m4",value:s.toArray()}:e.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e};function rn(){ft.call(this),this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt}rn.prototype=Object.assign(Object.create(ft.prototype),{constructor:rn,isCamera:!0,copy:function(t,e){return ft.prototype.copy.call(this,t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this},getWorldDirection:function(t){t===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),t=new S),this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()},updateMatrixWorld:function(t){ft.prototype.updateMatrixWorld.call(this,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()},updateWorldMatrix:function(t,e){ft.prototype.updateWorldMatrix.call(this,t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()},clone:function(){return new this.constructor().copy(this)}});function Jt(t=50,e=1,n=.1,i=2e3){rn.call(this),this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}Jt.prototype=Object.assign(Object.create(rn.prototype),{constructor:Jt,isPerspectiveCamera:!0,copy:function(t,e){return rn.prototype.copy.call(this,t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this},setFocalLength:function(t){const e=.5*this.getFilmHeight()/t;this.fov=yt.RAD2DEG*2*Math.atan(e),this.updateProjectionMatrix()},getFocalLength:function(){const t=Math.tan(yt.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/t},getEffectiveFOV:function(){return yt.RAD2DEG*2*Math.atan(Math.tan(yt.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(t,e,n,i,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){const t=this.near;let e=t*Math.tan(yt.DEG2RAD*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const a=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/a,e-=s.offsetY*n/c,i*=s.width/a,n*=s.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()},toJSON:function(t){const e=ft.prototype.toJSON.call(this,t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}});const zn=90,Gn=1;function Hn(t,e,n){if(ft.call(this),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Jt(zn,Gn,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new S(1,0,0)),this.add(i);const r=new Jt(zn,Gn,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new S(-1,0,0)),this.add(r);const s=new Jt(zn,Gn,t,e);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new S(0,1,0)),this.add(s);const o=new Jt(zn,Gn,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new S(0,-1,0)),this.add(o);const a=new Jt(zn,Gn,t,e);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new S(0,0,1)),this.add(a);const c=new Jt(zn,Gn,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new S(0,0,-1)),this.add(c),this.update=function(l,f){this.parent===null&&this.updateMatrixWorld();const h=l.xr.enabled,d=l.getRenderTarget();l.xr.enabled=!1;const u=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,l.setRenderTarget(n,0),l.render(f,i),l.setRenderTarget(n,1),l.render(f,r),l.setRenderTarget(n,2),l.render(f,s),l.setRenderTarget(n,3),l.render(f,o),l.setRenderTarget(n,4),l.render(f,a),n.texture.generateMipmaps=u,l.setRenderTarget(n,5),l.render(f,c),l.setRenderTarget(d),l.xr.enabled=h}}Hn.prototype=Object.create(ft.prototype),Hn.prototype.constructor=Hn;function sn(t,e,n,i,r,s,o,a,c,l){t=t!==void 0?t:[],e=e!==void 0?e:301,o=o!==void 0?o:1022,Bt.call(this,t,e,n,i,r,s,o,a,c,l),this.flipY=!1,this._needsFlipEnvMap=!0}sn.prototype=Object.create(Bt.prototype),sn.prototype.constructor=sn,sn.prototype.isCubeTexture=!0,Object.defineProperty(sn.prototype,"images",{get:function(){return this.image},set:function(t){this.image=t}});function mn(t,e,n){Number.isInteger(e)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),e=n),xe.call(this,t,t,e),e=e||{},this.texture=new sn(void 0,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture._needsFlipEnvMap=!1}mn.prototype=Object.create(xe.prototype),mn.prototype.constructor=mn,mn.prototype.isWebGLCubeRenderTarget=!0,mn.prototype.fromEquirectangularTexture=function(t,e){this.texture.type=e.type,this.texture.format=1023,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

			varying vec3 vWorldDirection;

			vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

				return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

			}

			void main() {

				vWorldDirection = transformDirection( position, modelMatrix );

				#include <begin_vertex>
				#include <project_vertex>

			}
		`,fragmentShader:`

			uniform sampler2D tEquirect;

			varying vec3 vWorldDirection;

			#include <common>

			void main() {

				vec3 direction = normalize( vWorldDirection );

				vec2 sampleUV = equirectUv( direction );

				gl_FragColor = texture2D( tEquirect, sampleUV );

			}
		`},i=new no(5,5,5),r=new re({name:"CubemapFromEquirect",uniforms:Un(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const s=new $t(i,r),o=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new Hn(1,10,this).update(t,s),e.minFilter=o,s.geometry.dispose(),s.material.dispose(),this},mn.prototype.clear=function(t,e,n,i){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,i);t.setRenderTarget(r)};function Vn(t,e,n,i,r,s,o,a,c,l,f,h){Bt.call(this,null,s,o,a,c,l,i,r,f,h),this.image={data:t||null,width:e||1,height:n||1},this.magFilter=c!==void 0?c:1003,this.minFilter=l!==void 0?l:1003,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}Vn.prototype=Object.create(Bt.prototype),Vn.prototype.constructor=Vn,Vn.prototype.isDataTexture=!0;const kn=new Qe,tr=new S;class er{constructor(e,n,i,r,s,o){this.planes=[e!==void 0?e:new Ue,n!==void 0?n:new Ue,i!==void 0?i:new Ue,r!==void 0?r:new Ue,s!==void 0?s:new Ue,o!==void 0?o:new Ue]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}clone(){return new this.constructor().copy(this)}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],l=i[5],f=i[6],h=i[7],d=i[8],u=i[9],p=i[10],y=i[11],v=i[12],g=i[13],m=i[14],T=i[15];return n[0].setComponents(a-r,h-c,y-d,T-v).normalize(),n[1].setComponents(a+r,h+c,y+d,T+v).normalize(),n[2].setComponents(a+s,h+l,y+u,T+g).normalize(),n[3].setComponents(a-s,h-l,y-u,T-g).normalize(),n[4].setComponents(a-o,h-f,y-p,T-m).normalize(),n[5].setComponents(a+o,h+f,y+p,T+m).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),kn.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(kn)}intersectsSprite(e){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(tr.x=r.normal.x>0?e.max.x:e.min.x,tr.y=r.normal.y>0?e.max.y:e.min.y,tr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(tr)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}}function io(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function nc(t,e){const n=e.isWebGL2,i=new WeakMap;function r(l,f){const h=l.array,d=l.usage,u=t.createBuffer();t.bindBuffer(f,u),t.bufferData(f,h,d),l.onUploadCallback();let p=5126;return h instanceof Float32Array?p=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?l.isFloat16BufferAttribute?n?p=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):p=5123:h instanceof Int16Array?p=5122:h instanceof Uint32Array?p=5125:h instanceof Int32Array?p=5124:h instanceof Int8Array?p=5120:h instanceof Uint8Array&&(p=5121),{buffer:u,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,f,h){const d=f.array,u=f.updateRange;t.bindBuffer(h,l),u.count===-1?t.bufferSubData(h,0,d):(n?t.bufferSubData(h,u.offset*d.BYTES_PER_ELEMENT,d,u.offset,u.count):t.bufferSubData(h,u.offset*d.BYTES_PER_ELEMENT,d.subarray(u.offset,u.offset+u.count)),u.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);f&&(t.deleteBuffer(f.buffer),i.delete(l))}function c(l,f){if(l.isGLBufferAttribute){const d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h===void 0?i.set(l,r(l,f)):h.version<l.version&&(s(h.buffer,l,f),h.version=l.version)}return{get:o,remove:a,update:c}}class ic extends Dt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneBufferGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),c=Math.floor(r),l=a+1,f=c+1,h=e/a,d=n/c,u=[],p=[],y=[],v=[];for(let g=0;g<f;g++){const m=g*d-o;for(let T=0;T<l;T++){const E=T*h-s;p.push(E,-m,0),y.push(0,0,1),v.push(T/a),v.push(1-g/c)}}for(let g=0;g<c;g++)for(let m=0;m<a;m++){const T=m+l*g,E=m+l*(g+1),w=m+1+l*(g+1),x=m+1+l*g;u.push(T,E,x),u.push(E,w,x)}this.setIndex(u),this.setAttribute("position",new Pt(p,3)),this.setAttribute("normal",new Pt(y,3)),this.setAttribute("uv",new Pt(v,2))}}var rc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,sc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oc=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,ac=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,cc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lc="vec3 transformed = vec3( position );",hc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uc=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,fc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 );
		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,pc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yc=`#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`,vc=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,xc=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_c=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor.xyz *= color.xyz;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,bc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Mc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wc=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ec=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ac=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cc=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,Rc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ic=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fc=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,Bc=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,Oc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Gc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,Hc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vc=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,kc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,Wc=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,jc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qc=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Xc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yc=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Zc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,Jc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qc=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$c=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,Kc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,tl=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,el=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nl=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,il=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rl=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,sl=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ol=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,al=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cl=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ll=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hl=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,ul=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,fl=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,dl=`#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
			bitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,pl=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );
#endif`,ml=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		float scale = sign( st1.t * st0.s - st0.t * st1.s );
		vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
		vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
		vec3 N = normalize( surf_norm );
		mat3 tsn = mat3( S, T, N );
		mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		return normalize( tsn * mapN );
	}
#endif`,gl=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,yl=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );
	#endif
#endif`,vl=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,xl=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,_l=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bl=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ml=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wl=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sl=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tl=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,El=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Al=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ll=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Cl=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rl=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pl=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Il=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dl=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Nl=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fl=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bl=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ol=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ul=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,zl=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,Gl=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Hl=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Vl=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,kl=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Wl=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,jl=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,ql=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xl=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yl=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zl=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Jl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ql=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,$l=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kl=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,th=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,nh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ih=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
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
}`,rh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oh=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ah=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ch=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hh=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fh=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ph=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mh=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gh=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,vh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_h=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Mh=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Sh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`;const At={alphamap_fragment:rc,alphamap_pars_fragment:sc,alphatest_fragment:oc,aomap_fragment:ac,aomap_pars_fragment:cc,begin_vertex:lc,beginnormal_vertex:hc,bsdfs:uc,bumpmap_pars_fragment:fc,clipping_planes_fragment:dc,clipping_planes_pars_fragment:pc,clipping_planes_pars_vertex:mc,clipping_planes_vertex:gc,color_fragment:yc,color_pars_fragment:vc,color_pars_vertex:xc,color_vertex:_c,common:bc,cube_uv_reflection_fragment:Mc,defaultnormal_vertex:wc,displacementmap_pars_vertex:Sc,displacementmap_vertex:Tc,emissivemap_fragment:Ec,emissivemap_pars_fragment:Ac,encodings_fragment:Lc,encodings_pars_fragment:Cc,envmap_fragment:Rc,envmap_common_pars_fragment:Pc,envmap_pars_fragment:Ic,envmap_pars_vertex:Dc,envmap_physical_pars_fragment:Wc,envmap_vertex:Nc,fog_vertex:Fc,fog_pars_vertex:Bc,fog_fragment:Oc,fog_pars_fragment:Uc,gradientmap_pars_fragment:zc,lightmap_fragment:Gc,lightmap_pars_fragment:Hc,lights_lambert_vertex:Vc,lights_pars_begin:kc,lights_toon_fragment:jc,lights_toon_pars_fragment:qc,lights_phong_fragment:Xc,lights_phong_pars_fragment:Yc,lights_physical_fragment:Zc,lights_physical_pars_fragment:Jc,lights_fragment_begin:Qc,lights_fragment_maps:$c,lights_fragment_end:Kc,logdepthbuf_fragment:tl,logdepthbuf_pars_fragment:el,logdepthbuf_pars_vertex:nl,logdepthbuf_vertex:il,map_fragment:rl,map_pars_fragment:sl,map_particle_fragment:ol,map_particle_pars_fragment:al,metalnessmap_fragment:cl,metalnessmap_pars_fragment:ll,morphnormal_vertex:hl,morphtarget_pars_vertex:ul,morphtarget_vertex:fl,normal_fragment_begin:dl,normal_fragment_maps:pl,normalmap_pars_fragment:ml,clearcoat_normal_fragment_begin:gl,clearcoat_normal_fragment_maps:yl,clearcoat_pars_fragment:vl,packing:xl,premultiplied_alpha_fragment:_l,project_vertex:bl,dithering_fragment:Ml,dithering_pars_fragment:wl,roughnessmap_fragment:Sl,roughnessmap_pars_fragment:Tl,shadowmap_pars_fragment:El,shadowmap_pars_vertex:Al,shadowmap_vertex:Ll,shadowmask_pars_fragment:Cl,skinbase_vertex:Rl,skinning_pars_vertex:Pl,skinning_vertex:Il,skinnormal_vertex:Dl,specularmap_fragment:Nl,specularmap_pars_fragment:Fl,tonemapping_fragment:Bl,tonemapping_pars_fragment:Ol,transmissionmap_fragment:Ul,transmissionmap_pars_fragment:zl,uv_pars_fragment:Gl,uv_pars_vertex:Hl,uv_vertex:Vl,uv2_pars_fragment:kl,uv2_pars_vertex:Wl,uv2_vertex:jl,worldpos_vertex:ql,background_frag:Xl,background_vert:Yl,cube_frag:Zl,cube_vert:Jl,depth_frag:Ql,depth_vert:$l,distanceRGBA_frag:Kl,distanceRGBA_vert:th,equirect_frag:eh,equirect_vert:nh,linedashed_frag:ih,linedashed_vert:rh,meshbasic_frag:sh,meshbasic_vert:oh,meshlambert_frag:ah,meshlambert_vert:ch,meshmatcap_frag:lh,meshmatcap_vert:hh,meshtoon_frag:uh,meshtoon_vert:fh,meshphong_frag:dh,meshphong_vert:ph,meshphysical_frag:mh,meshphysical_vert:gh,normal_frag:yh,normal_vert:vh,points_frag:xh,points_vert:_h,shadow_frag:bh,shadow_vert:Mh,sprite_frag:wh,sprite_vert:Sh},Z={common:{diffuse:{value:new ct(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new ie},uv2Transform:{value:new ie},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new H(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new ie}},sprite:{diffuse:{value:new ct(15658734)},opacity:{value:1},center:{value:new H(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new ie}}},Ee={basic:{uniforms:Kt([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:Kt([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.fog,Z.lights,{emissive:{value:new ct(0)}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:Kt([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:Kt([Z.common,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.roughnessmap,Z.metalnessmap,Z.fog,Z.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:Kt([Z.common,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.gradientmap,Z.fog,Z.lights,{emissive:{value:new ct(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:Kt([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:Kt([Z.points,Z.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:Kt([Z.common,Z.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:Kt([Z.common,Z.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:Kt([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,{opacity:{value:1}}]),vertexShader:At.normal_vert,fragmentShader:At.normal_frag},sprite:{uniforms:Kt([Z.sprite,Z.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null}},vertexShader:At.background_vert,fragmentShader:At.background_frag},cube:{uniforms:Kt([Z.envmap,{opacity:{value:1}}]),vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distanceRGBA:{uniforms:Kt([Z.common,Z.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distanceRGBA_vert,fragmentShader:At.distanceRGBA_frag},shadow:{uniforms:Kt([Z.lights,Z.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};Ee.physical={uniforms:Kt([Ee.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new H(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new ct(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};function Th(t,e,n,i,r){const s=new ct(0);let o=0,a,c,l=null,f=0,h=null;function d(p,y,v,g){let m=y.isScene===!0?y.background:null;m&&m.isTexture&&(m=e.get(m));const T=t.xr,E=T.getSession&&T.getSession();E&&E.environmentBlendMode==="additive"&&(m=null),m===null?u(s,o):m&&m.isColor&&(u(m,1),g=!0),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),m&&(m.isCubeTexture||m.isWebGLCubeRenderTarget||m.mapping===306)?(c===void 0&&(c=new $t(new no(1,1,1),new re({name:"BackgroundCubeMaterial",uniforms:Un(Ee.cube.uniforms),vertexShader:Ee.cube.vertexShader,fragmentShader:Ee.cube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,x,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),m.isWebGLCubeRenderTarget&&(m=m.texture),c.material.uniforms.envMap.value=m,c.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m._needsFlipEnvMap?-1:1,(l!==m||f!==m.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,l=m,f=m.version,h=t.toneMapping),p.unshift(c,c.geometry,c.material,0,0,null)):m&&m.isTexture&&(a===void 0&&(a=new $t(new ic(2,2),new re({name:"BackgroundMaterial",uniforms:Un(Ee.background.uniforms),vertexShader:Ee.background.vertexShader,fragmentShader:Ee.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(a)),a.material.uniforms.t2D.value=m,m.matrixAutoUpdate===!0&&m.updateMatrix(),a.material.uniforms.uvTransform.value.copy(m.matrix),(l!==m||f!==m.version||h!==t.toneMapping)&&(a.material.needsUpdate=!0,l=m,f=m.version,h=t.toneMapping),p.unshift(a,a.geometry,a.material,0,0,null))}function u(p,y){n.buffers.color.setClear(p.r,p.g,p.b,y,r)}return{getClearColor:function(){return s},setClearColor:function(p,y=1){s.set(p),o=y,u(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,u(s,o)},render:d}}function Eh(t,e,n,i){const r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=y(null);let l=c;function f(N,R,C,B,k){let X=!1;if(o){const K=p(B,C,R);l!==K&&(l=K,d(l.object)),X=v(B,k),X&&g(B,k)}else{const K=R.wireframe===!0;(l.geometry!==B.id||l.program!==C.id||l.wireframe!==K)&&(l.geometry=B.id,l.program=C.id,l.wireframe=K,X=!0)}N.isInstancedMesh===!0&&(X=!0),k!==null&&n.update(k,34963),X&&(A(N,R,C,B),k!==null&&t.bindBuffer(34963,n.get(k).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function d(N){return i.isWebGL2?t.bindVertexArray(N):s.bindVertexArrayOES(N)}function u(N){return i.isWebGL2?t.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function p(N,R,C){const B=C.wireframe===!0;let k=a[N.id];k===void 0&&(k={},a[N.id]=k);let X=k[R.id];X===void 0&&(X={},k[R.id]=X);let K=X[B];return K===void 0&&(K=y(h()),X[B]=K),K}function y(N){const R=[],C=[],B=[];for(let k=0;k<r;k++)R[k]=0,C[k]=0,B[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:C,attributeDivisors:B,object:N,attributes:{},index:null}}function v(N,R){const C=l.attributes,B=N.attributes;let k=0;for(const X in B){const K=C[X],rt=B[X];if(K===void 0||K.attribute!==rt||K.data!==rt.data)return!0;k++}return l.attributesNum!==k||l.index!==R}function g(N,R){const C={},B=N.attributes;let k=0;for(const X in B){const K=B[X],rt={};rt.attribute=K,K.data&&(rt.data=K.data),C[X]=rt,k++}l.attributes=C,l.attributesNum=k,l.index=R}function m(){const N=l.newAttributes;for(let R=0,C=N.length;R<C;R++)N[R]=0}function T(N){E(N,0)}function E(N,R){const C=l.newAttributes,B=l.enabledAttributes,k=l.attributeDivisors;C[N]=1,B[N]===0&&(t.enableVertexAttribArray(N),B[N]=1),k[N]!==R&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,R),k[N]=R)}function w(){const N=l.newAttributes,R=l.enabledAttributes;for(let C=0,B=R.length;C<B;C++)R[C]!==N[C]&&(t.disableVertexAttribArray(C),R[C]=0)}function x(N,R,C,B,k,X){i.isWebGL2===!0&&(C===5124||C===5125)?t.vertexAttribIPointer(N,R,C,k,X):t.vertexAttribPointer(N,R,C,B,k,X)}function A(N,R,C,B){if(i.isWebGL2===!1&&(N.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const k=B.attributes,X=C.getAttributes(),K=R.defaultAttributeValues;for(const rt in X){const it=X[rt];if(it>=0){const vt=k[rt];if(vt!==void 0){const wt=vt.normalized,kt=vt.itemSize,G=n.get(vt);if(G===void 0)continue;const ee=G.buffer,dt=G.type,Rt=G.bytesPerElement;if(vt.isInterleavedBufferAttribute){const xt=vt.data,It=xt.stride,Et=vt.offset;xt&&xt.isInstancedInterleavedBuffer?(E(it,xt.meshPerAttribute),B._maxInstanceCount===void 0&&(B._maxInstanceCount=xt.meshPerAttribute*xt.count)):T(it),t.bindBuffer(34962,ee),x(it,kt,dt,wt,It*Rt,Et*Rt)}else vt.isInstancedBufferAttribute?(E(it,vt.meshPerAttribute),B._maxInstanceCount===void 0&&(B._maxInstanceCount=vt.meshPerAttribute*vt.count)):T(it),t.bindBuffer(34962,ee),x(it,kt,dt,wt,0,0)}else if(rt==="instanceMatrix"){const wt=n.get(N.instanceMatrix);if(wt===void 0)continue;const kt=wt.buffer,G=wt.type;E(it+0,1),E(it+1,1),E(it+2,1),E(it+3,1),t.bindBuffer(34962,kt),t.vertexAttribPointer(it+0,4,G,!1,64,0),t.vertexAttribPointer(it+1,4,G,!1,64,16),t.vertexAttribPointer(it+2,4,G,!1,64,32),t.vertexAttribPointer(it+3,4,G,!1,64,48)}else if(rt==="instanceColor"){const wt=n.get(N.instanceColor);if(wt===void 0)continue;const kt=wt.buffer,G=wt.type;E(it,1),t.bindBuffer(34962,kt),t.vertexAttribPointer(it,3,G,!1,12,0)}else if(K!==void 0){const wt=K[rt];if(wt!==void 0)switch(wt.length){case 2:t.vertexAttrib2fv(it,wt);break;case 3:t.vertexAttrib3fv(it,wt);break;case 4:t.vertexAttrib4fv(it,wt);break;default:t.vertexAttrib1fv(it,wt)}}}}w()}function O(){P();for(const N in a){const R=a[N];for(const C in R){const B=R[C];for(const k in B)u(B[k].object),delete B[k];delete R[C]}delete a[N]}}function I(N){if(a[N.id]===void 0)return;const R=a[N.id];for(const C in R){const B=R[C];for(const k in B)u(B[k].object),delete B[k];delete R[C]}delete a[N.id]}function et(N){for(const R in a){const C=a[R];if(C[N.id]===void 0)continue;const B=C[N.id];for(const k in B)u(B[k].object),delete B[k];delete C[N.id]}}function P(){U(),l!==c&&(l=c,d(l.object))}function U(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:P,resetDefaultState:U,dispose:O,releaseStatesOfGeometry:I,releaseStatesOfProgram:et,initAttributes:m,enableAttribute:T,disableUnusedAttributes:w}}function Ah(t,e,n,i){const r=i.isWebGL2;let s;function o(l){s=l}function a(l,f){t.drawArrays(s,l,f),n.update(f,s,1)}function c(l,f,h){if(h===0)return;let d,u;if(r)d=t,u="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),u="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[u](s,l,f,h),n.update(f,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function Lh(t,e,n){let i;function r(){if(i!==void 0)return i;const x=e.get("EXT_texture_filter_anisotropic");return x!==null?i=t.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT):i=0,i}function s(x){if(x==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";x="mediump"}return x==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&t instanceof WebGL2ComputeRenderingContext;let a=n.precision!==void 0?n.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=n.logarithmicDepthBuffer===!0,f=t.getParameter(34930),h=t.getParameter(35660),d=t.getParameter(3379),u=t.getParameter(34076),p=t.getParameter(34921),y=t.getParameter(36347),v=t.getParameter(36348),g=t.getParameter(36349),m=h>0,T=o||!!e.get("OES_texture_float"),E=m&&T,w=o?t.getParameter(36183):0;return{isWebGL2:o,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:u,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:g,vertexTextures:m,floatFragmentTextures:T,floatVertexTextures:E,maxSamples:w}}function Ch(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ue,a=new ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,u){const p=h.length!==0||d||i!==0||r;return r=d,n=f(h,u,0),i=h.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1,l()},this.setState=function(h,d,u){const p=h.clippingPlanes,y=h.clipIntersection,v=h.clipShadows,g=t.get(h);if(!r||p===null||p.length===0||s&&!v)s?f(null):l();else{const m=s?0:i,T=m*4;let E=g.clippingState||null;c.value=E,E=f(p,d,T,u);for(let w=0;w!==T;++w)E[w]=n[w];g.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,u,p){const y=h!==null?h.length:0;let v=null;if(y!==0){if(v=c.value,p!==!0||v===null){const g=u+y*4,m=d.matrixWorldInverse;a.getNormalMatrix(m),(v===null||v.length<g)&&(v=new Float32Array(g));for(let T=0,E=u;T!==y;++T,E+=4)o.copy(h[T]).applyMatrix4(m,a),o.normal.toArray(v,E),v[E+3]=o.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,v}}function Rh(t){let e=new WeakMap;function n(o,a){return a===303?o.mapping=301:a===304&&(o.mapping=302),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===303||a===304)if(e.has(o)){const c=e.get(o).texture;return n(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=t.getRenderList(),f=t.getRenderTarget(),h=new mn(c.height/2);return h.fromEquirectangularTexture(t,o),e.set(o,h),t.setRenderTarget(f),t.setRenderList(l),o.addEventListener("dispose",r),n(h.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}function Ph(t){const e={};return{has:function(n){if(e[n]!==void 0)return e[n]!==null;let i;switch(n){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(n)}return e[n]=i,i!==null},get:function(n){return this.has(n)||console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),e[n]}}}function Ih(t,e,n,i){const r=new WeakMap,s=new WeakMap;function o(h){const d=h.target,u=r.get(d);u.index!==null&&e.remove(u.index);for(const y in u.attributes)e.remove(u.attributes[y]);d.removeEventListener("dispose",o),r.delete(d);const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){let u=r.get(d);return u||(d.addEventListener("dispose",o),d.isBufferGeometry?u=d:d.isGeometry&&(d._bufferGeometry===void 0&&(d._bufferGeometry=new Dt().setFromObject(h)),u=d._bufferGeometry),r.set(d,u),n.memory.geometries++,u)}function c(h){const d=h.attributes;for(const p in d)e.update(d[p],34962);const u=h.morphAttributes;for(const p in u){const y=u[p];for(let v=0,g=y.length;v<g;v++)e.update(y[v],34962)}}function l(h){const d=[],u=h.index,p=h.attributes.position;let y=0;if(u!==null){const m=u.array;y=u.version;for(let T=0,E=m.length;T<E;T+=3){const w=m[T+0],x=m[T+1],A=m[T+2];d.push(w,x,x,A,A,w)}}else{const m=p.array;y=p.version;for(let T=0,E=m.length/3-1;T<E;T+=3){const w=T+0,x=T+1,A=T+2;d.push(w,x,x,A,A,w)}}const v=new(Ks(d)>65535?di:fi)(d,1);v.version=y;const g=s.get(h);g&&e.remove(g),s.set(h,v)}function f(h){const d=s.get(h);if(d){const u=h.index;u!==null&&d.version<u.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:f}}function Dh(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function f(d,u){t.drawElements(s,u,a,d*c),n.update(u,s,1)}function h(d,u,p){if(p===0)return;let y,v;if(r)y=t,v="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[v](s,u,a,d*c,p),n.update(u,s,p)}this.setMode=o,this.setIndex=l,this.render=f,this.renderInstances=h}function Nh(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Fh(t,e){return t[0]-e[0]}function Bh(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Oh(t){const e={},n=new Float32Array(8),i=[];for(let s=0;s<8;s++)i[s]=[s,0];function r(s,o,a,c){const l=s.morphTargetInfluences,f=l===void 0?0:l.length;let h=e[o.id];if(h===void 0){h=[];for(let v=0;v<f;v++)h[v]=[v,0];e[o.id]=h}for(let v=0;v<f;v++){const g=h[v];g[0]=v,g[1]=l[v]}h.sort(Bh);for(let v=0;v<8;v++)v<f&&h[v][1]?(i[v][0]=h[v][0],i[v][1]=h[v][1]):(i[v][0]=Number.MAX_SAFE_INTEGER,i[v][1]=0);i.sort(Fh);const d=a.morphTargets&&o.morphAttributes.position,u=a.morphNormals&&o.morphAttributes.normal;let p=0;for(let v=0;v<8;v++){const g=i[v],m=g[0],T=g[1];m!==Number.MAX_SAFE_INTEGER&&T?(d&&o.getAttribute("morphTarget"+v)!==d[m]&&o.setAttribute("morphTarget"+v,d[m]),u&&o.getAttribute("morphNormal"+v)!==u[m]&&o.setAttribute("morphNormal"+v,u[m]),n[v]=T,p+=T):(d&&o.hasAttribute("morphTarget"+v)===!0&&o.deleteAttribute("morphTarget"+v),u&&o.hasAttribute("morphNormal"+v)===!0&&o.deleteAttribute("morphNormal"+v),n[v]=0)}const y=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(t,"morphTargetBaseInfluence",y),c.getUniforms().setValue(t,"morphTargetInfluences",n)}return{update:r}}function Uh(t,e,n,i){let r=new WeakMap;function s(c){const l=i.render.frame,f=c.geometry,h=e.get(c,f);return r.get(h)!==l&&(f.isGeometry&&h.updateFromObject(c),e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),n.update(c.instanceMatrix,34962),c.instanceColor!==null&&n.update(c.instanceColor,34962)),h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:s,dispose:o}}function gi(t=null,e=1,n=1,i=1){Bt.call(this,null),this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}gi.prototype=Object.create(Bt.prototype),gi.prototype.constructor=gi,gi.prototype.isDataTexture2DArray=!0;function yi(t=null,e=1,n=1,i=1){Bt.call(this,null),this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}yi.prototype=Object.create(Bt.prototype),yi.prototype.constructor=yi,yi.prototype.isDataTexture3D=!0;const ro=new Bt,zh=new gi,Gh=new yi,so=new sn,oo=[],ao=[],co=new Float32Array(16),lo=new Float32Array(9),ho=new Float32Array(4);function Wn(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=oo[r];if(s===void 0&&(s=new Float32Array(r),oo[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function de(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function he(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function uo(t,e){let n=ao[e];n===void 0&&(n=new Int32Array(e),ao[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Hh(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Vh(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(de(n,e))return;t.uniform2fv(this.addr,e),he(n,e)}}function kh(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(de(n,e))return;t.uniform3fv(this.addr,e),he(n,e)}}function Wh(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(de(n,e))return;t.uniform4fv(this.addr,e),he(n,e)}}function jh(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(de(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),he(n,e)}else{if(de(n,i))return;ho.set(i),t.uniformMatrix2fv(this.addr,!1,ho),he(n,i)}}function qh(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(de(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),he(n,e)}else{if(de(n,i))return;lo.set(i),t.uniformMatrix3fv(this.addr,!1,lo),he(n,i)}}function Xh(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(de(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),he(n,e)}else{if(de(n,i))return;co.set(i),t.uniformMatrix4fv(this.addr,!1,co),he(n,i)}}function Yh(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.safeSetTexture2D(e||ro,r)}function Zh(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||zh,r)}function Jh(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Gh,r)}function Qh(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.safeSetTextureCube(e||so,r)}function $h(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Kh(t,e){const n=this.cache;de(n,e)||(t.uniform2iv(this.addr,e),he(n,e))}function tu(t,e){const n=this.cache;de(n,e)||(t.uniform3iv(this.addr,e),he(n,e))}function eu(t,e){const n=this.cache;de(n,e)||(t.uniform4iv(this.addr,e),he(n,e))}function nu(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function iu(t){switch(t){case 5126:return Hh;case 35664:return Vh;case 35665:return kh;case 35666:return Wh;case 35674:return jh;case 35675:return qh;case 35676:return Xh;case 5124:case 35670:return $h;case 35667:case 35671:return Kh;case 35668:case 35672:return tu;case 35669:case 35673:return eu;case 5125:return nu;case 35678:case 36198:case 36298:case 36306:case 35682:return Yh;case 35679:case 36299:case 36307:return Jh;case 35680:case 36300:case 36308:case 36293:return Qh;case 36289:case 36303:case 36311:case 36292:return Zh}}function ru(t,e){t.uniform1fv(this.addr,e)}function su(t,e){t.uniform1iv(this.addr,e)}function ou(t,e){t.uniform2iv(this.addr,e)}function au(t,e){t.uniform3iv(this.addr,e)}function cu(t,e){t.uniform4iv(this.addr,e)}function lu(t,e){const n=Wn(e,this.size,2);t.uniform2fv(this.addr,n)}function hu(t,e){const n=Wn(e,this.size,3);t.uniform3fv(this.addr,n)}function uu(t,e){const n=Wn(e,this.size,4);t.uniform4fv(this.addr,n)}function fu(t,e){const n=Wn(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function du(t,e){const n=Wn(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function pu(t,e){const n=Wn(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function mu(t,e,n){const i=e.length,r=uo(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.safeSetTexture2D(e[s]||ro,r[s])}function gu(t,e,n){const i=e.length,r=uo(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.safeSetTextureCube(e[s]||so,r[s])}function yu(t){switch(t){case 5126:return ru;case 35664:return lu;case 35665:return hu;case 35666:return uu;case 35674:return fu;case 35675:return du;case 35676:return pu;case 5124:case 35670:return su;case 35667:case 35671:return ou;case 35668:case 35672:return au;case 35669:case 35673:return cu;case 35678:case 36198:case 36298:case 36306:case 35682:return mu;case 35680:case 36300:case 36308:case 36293:return gu}}function vu(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=iu(e.type)}function fo(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=yu(e.type)}fo.prototype.updateCache=function(t){const e=this.cache;t instanceof Float32Array&&e.length!==t.length&&(this.cache=new Float32Array(t.length)),he(e,t)};function po(t){this.id=t,this.seq=[],this.map={}}po.prototype.setValue=function(t,e,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(t,e[o.id],n)}};const is=/(\w+)(\])?(\[|\.)?/g;function mo(t,e){t.seq.push(e),t.map[e.id]=e}function xu(t,e,n){const i=t.name,r=i.length;for(is.lastIndex=0;;){const s=is.exec(i),o=is.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){mo(n,l===void 0?new vu(a,t,e):new fo(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new po(a),mo(n,h)),n=h}}}function on(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),s=t.getUniformLocation(e,r.name);xu(r,s,this)}}on.prototype.setValue=function(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)},on.prototype.setOptional=function(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)},on.upload=function(t,e,n,i){for(let r=0,s=e.length;r!==s;++r){const o=e[r],a=n[o.id];a.needsUpdate!==!1&&o.setValue(t,a.value,i)}},on.seqWithValue=function(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.id in e&&n.push(s)}return n};function go(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let _u=0;function bu(t){const e=t.split(`
`);for(let n=0;n<e.length;n++)e[n]=n+1+": "+e[n];return e.join(`
`)}function yo(t){switch(t){case 3e3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];case 3002:return["RGBE","( value )"];case 3004:return["RGBM","( value, 7.0 )"];case 3005:return["RGBM","( value, 16.0 )"];case 3006:return["RGBD","( value, 256.0 )"];case 3007:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case 3003:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function vo(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=t.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+n+`
`+r+bu(s)}function vi(t,e){const n=yo(e);return"vec4 "+t+"( vec4 value ) { return "+n[0]+"ToLinear"+n[1]+"; }"}function Mu(t,e){const n=yo(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function wu(t,e){let n;switch(e){case 1:n="Linear";break;case 2:n="Reinhard";break;case 3:n="OptimizedCineon";break;case 4:n="ACESFilmic";break;case 5:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Su(t){return[t.extensionDerivatives||t.envMapCubeUV||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xi).join(`
`)}function Tu(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Eu(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r).name;n[o]=t.getAttribLocation(e,o)}return n}function xi(t){return t!==""}function xo(t,e){return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _o(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Au=/^[ \t]*#include +<([\w\d./]+)>/gm;function rs(t){return t.replace(Au,Lu)}function Lu(t,e){const n=At[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return rs(n)}const Cu=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Ru=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bo(t){return t.replace(Ru,Mo).replace(Cu,Pu)}function Pu(t,e,n,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Mo(t,e,n,i)}function Mo(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wo(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Iu(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function Du(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:case 307:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Nu(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case 302:case 307:e="ENVMAP_MODE_REFRACTION";break}return e}function Fu(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function Bu(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const c=Iu(n),l=Du(n),f=Nu(n),h=Fu(n),d=t.gammaFactor>0?t.gammaFactor:1,u=n.isWebGL2?"":Su(n),p=Tu(s),y=r.createProgram();let v,g,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=[p].filter(xi).join(`
`),v.length>0&&(v+=`
`),g=[u,p].filter(xi).join(`
`),g.length>0&&(g+=`
`)):(v=[wo(n),"#define SHADER_NAME "+n.shaderName,p,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+n.maxBones,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.useVertexTexture?"#define BONE_TEXTURE":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#ifdef USE_COLOR","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xi).join(`
`),g=[u,wo(n),"#define SHADER_NAME "+n.shaderName,p,n.alphaTest?"#define ALPHATEST "+n.alphaTest+(n.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+d,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.sheen?"#define USE_SHEEN":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==0?"#define TONE_MAPPING":"",n.toneMapping!==0?At.tonemapping_pars_fragment:"",n.toneMapping!==0?wu("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",At.encodings_pars_fragment,n.map?vi("mapTexelToLinear",n.mapEncoding):"",n.matcap?vi("matcapTexelToLinear",n.matcapEncoding):"",n.envMap?vi("envMapTexelToLinear",n.envMapEncoding):"",n.emissiveMap?vi("emissiveMapTexelToLinear",n.emissiveMapEncoding):"",n.lightMap?vi("lightMapTexelToLinear",n.lightMapEncoding):"",Mu("linearToOutputTexel",n.outputEncoding),n.depthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(xi).join(`
`)),o=rs(o),o=xo(o,n),o=_o(o,n),a=rs(a),a=xo(a,n),a=_o(a,n),o=bo(o),a=bo(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",n.glslVersion===Gs?"":"out highp vec4 pc_fragColor;",n.glslVersion===Gs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const T=m+v+o,E=m+g+a,w=go(r,35633,T),x=go(r,35632,E);if(r.attachShader(y,w),r.attachShader(y,x),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),t.debug.checkShaderErrors){const I=r.getProgramInfoLog(y).trim(),et=r.getShaderInfoLog(w).trim(),P=r.getShaderInfoLog(x).trim();let U=!0,N=!0;if(r.getProgramParameter(y,35714)===!1){U=!1;const R=vo(r,w,"vertex"),C=vo(r,x,"fragment");console.error("THREE.WebGLProgram: shader error: ",r.getError(),"35715",r.getProgramParameter(y,35715),"gl.getProgramInfoLog",I,R,C)}else I!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",I):(et===""||P==="")&&(N=!1);N&&(this.diagnostics={runnable:U,programLog:I,vertexShader:{log:et,prefix:v},fragmentShader:{log:P,prefix:g}})}r.deleteShader(w),r.deleteShader(x);let A;this.getUniforms=function(){return A===void 0&&(A=new on(r,y)),A};let O;return this.getAttributes=function(){return O===void 0&&(O=Eu(r,y)),O},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.name=n.shaderName,this.id=_u++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=x,this}function Ou(t,e,n,i,r,s){const o=[],a=i.isWebGL2,c=i.logarithmicDepthBuffer,l=i.floatVertexTextures,f=i.maxVertexUniforms,h=i.vertexTextures;let d=i.precision;const u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},p=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function y(x){const O=x.skeleton.bones;if(l)return 1024;{const et=Math.floor((f-20)/4),P=Math.min(et,O.length);return P<O.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+O.length+" bones. This GPU supports "+P+"."),0):P}}function v(x){let A;return x&&x.isTexture?A=x.encoding:x&&x.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),A=x.texture.encoding):A=3e3,A}function g(x,A,O,I,et){const P=I.fog,U=x.isMeshStandardMaterial?I.environment:null,N=e.get(x.envMap||U),R=u[x.type],C=et.isSkinnedMesh?y(et):0;x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let B,k;if(R){const rt=Ee[R];B=rt.vertexShader,k=rt.fragmentShader}else B=x.vertexShader,k=x.fragmentShader;const X=t.getRenderTarget();return{isWebGL2:a,shaderID:R,shaderName:x.type,vertexShader:B,fragmentShader:k,defines:x.defines,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,instancing:et.isInstancedMesh===!0,instancingColor:et.isInstancedMesh===!0&&et.instanceColor!==null,supportsVertexTextures:h,outputEncoding:X!==null?v(X.texture):t.outputEncoding,map:!!x.map,mapEncoding:v(x.map),matcap:!!x.matcap,matcapEncoding:v(x.matcap),envMap:!!N,envMapMode:N&&N.mapping,envMapEncoding:v(N),envMapCubeUV:!!N&&(N.mapping===306||N.mapping===307),lightMap:!!x.lightMap,lightMapEncoding:v(x.lightMap),aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,emissiveMapEncoding:v(x.emissiveMap),bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===1,tangentSpaceNormalMap:x.normalMapType===0,clearcoatMap:!!x.clearcoatMap,clearcoatRoughnessMap:!!x.clearcoatRoughnessMap,clearcoatNormalMap:!!x.clearcoatNormalMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,alphaMap:!!x.alphaMap,gradientMap:!!x.gradientMap,sheen:!!x.sheen,transmissionMap:!!x.transmissionMap,combine:x.combine,vertexTangents:x.normalMap&&x.vertexTangents,vertexColors:x.vertexColors,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.displacementMap||!!x.transmissionMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.transmissionMap)&&!!x.displacementMap,fog:!!P,useFog:x.fog,fogExp2:P&&P.isFogExp2,flatShading:x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:c,skinning:x.skinning&&C>0,maxBones:C,useVertexTexture:l,morphTargets:x.morphTargets,morphNormals:x.morphNormals,maxMorphTargets:t.maxMorphTargets,maxMorphNormals:t.maxMorphNormals,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&O.length>0,shadowMapType:t.shadowMap.type,toneMapping:x.toneMapped?t.toneMapping:0,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,alphaTest:x.alphaTest,doubleSided:x.side===2,flipSided:x.side===1,depthPacking:x.depthPacking!==void 0?x.depthPacking:!1,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:a||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function m(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.fragmentShader),A.push(x.vertexShader)),x.defines!==void 0)for(const O in x.defines)A.push(O),A.push(x.defines[O]);if(x.isRawShaderMaterial===!1){for(let O=0;O<p.length;O++)A.push(x[p[O]]);A.push(t.outputEncoding),A.push(t.gammaFactor)}return A.push(x.customProgramCacheKey),A.join()}function T(x){const A=u[x.type];let O;if(A){const I=Ee[A];O=Ka.clone(I.uniforms)}else O=x.uniforms;return O}function E(x,A){let O;for(let I=0,et=o.length;I<et;I++){const P=o[I];if(P.cacheKey===A){O=P,++O.usedTimes;break}}return O===void 0&&(O=new Bu(t,A,x,r),o.push(O)),O}function w(x){if(--x.usedTimes===0){const A=o.indexOf(x);o[A]=o[o.length-1],o.pop(),x.destroy()}}return{getParameters:g,getProgramCacheKey:m,getUniforms:T,acquireProgram:E,releaseProgram:w,programs:o}}function Uu(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function zu(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.program!==e.program?t.program.id-e.program.id:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Gu(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function So(t){const e=[];let n=0;const i=[],r=[],s={id:-1};function o(){n=0,i.length=0,r.length=0}function a(d,u,p,y,v,g){let m=e[n];const T=t.get(p);return m===void 0?(m={id:d.id,object:d,geometry:u,material:p,program:T.program||s,groupOrder:y,renderOrder:d.renderOrder,z:v,group:g},e[n]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=p,m.program=T.program||s,m.groupOrder=y,m.renderOrder=d.renderOrder,m.z=v,m.group=g),n++,m}function c(d,u,p,y,v,g){const m=a(d,u,p,y,v,g);(p.transparent===!0?r:i).push(m)}function l(d,u,p,y,v,g){const m=a(d,u,p,y,v,g);(p.transparent===!0?r:i).unshift(m)}function f(d,u){i.length>1&&i.sort(d||zu),r.length>1&&r.sort(u||Gu)}function h(){for(let d=n,u=e.length;d<u;d++){const p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.program=null,p.group=null}}return{opaque:i,transparent:r,init:o,push:c,unshift:l,finish:h,sort:f}}function Hu(t){let e=new WeakMap;function n(r,s){const o=e.get(r);let a;return o===void 0?(a=new So(t),e.set(r,new WeakMap),e.get(r).set(s,a)):(a=o.get(s),a===void 0&&(a=new So(t),o.set(s,a))),a}function i(){e=new WeakMap}return{get:n,dispose:i}}function Vu(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new S,color:new ct};break;case"SpotLight":n={position:new S,direction:new S,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new S,color:new ct,distance:0,decay:0};break;case"HemisphereLight":n={direction:new S,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":n={color:new ct,position:new S,halfWidth:new S,halfHeight:new S};break}return t[e.id]=n,n}}}function ku(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Wu=0;function ju(t,e){return(e.castShadow?1:0)-(t.castShadow?1:0)}function qu(t,e){const n=new Vu,i=ku(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let f=0;f<9;f++)r.probe.push(new S);const s=new S,o=new Mt,a=new Mt;function c(f){let h=0,d=0,u=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let p=0,y=0,v=0,g=0,m=0,T=0,E=0,w=0;f.sort(ju);for(let A=0,O=f.length;A<O;A++){const I=f[A],et=I.color,P=I.intensity,U=I.distance,N=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=et.r*P,d+=et.g*P,u+=et.b*P;else if(I.isLightProbe)for(let R=0;R<9;R++)r.probe[R].addScaledVector(I.sh.coefficients[R],P);else if(I.isDirectionalLight){const R=n.get(I);if(R.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const C=I.shadow,B=i.get(I);B.shadowBias=C.bias,B.shadowNormalBias=C.normalBias,B.shadowRadius=C.radius,B.shadowMapSize=C.mapSize,r.directionalShadow[p]=B,r.directionalShadowMap[p]=N,r.directionalShadowMatrix[p]=I.shadow.matrix,T++}r.directional[p]=R,p++}else if(I.isSpotLight){const R=n.get(I);if(R.position.setFromMatrixPosition(I.matrixWorld),R.color.copy(et).multiplyScalar(P),R.distance=U,R.coneCos=Math.cos(I.angle),R.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),R.decay=I.decay,I.castShadow){const C=I.shadow,B=i.get(I);B.shadowBias=C.bias,B.shadowNormalBias=C.normalBias,B.shadowRadius=C.radius,B.shadowMapSize=C.mapSize,r.spotShadow[v]=B,r.spotShadowMap[v]=N,r.spotShadowMatrix[v]=I.shadow.matrix,w++}r.spot[v]=R,v++}else if(I.isRectAreaLight){const R=n.get(I);R.color.copy(et).multiplyScalar(P),R.halfWidth.set(I.width*.5,0,0),R.halfHeight.set(0,I.height*.5,0),r.rectArea[g]=R,g++}else if(I.isPointLight){const R=n.get(I);if(R.color.copy(I.color).multiplyScalar(I.intensity),R.distance=I.distance,R.decay=I.decay,I.castShadow){const C=I.shadow,B=i.get(I);B.shadowBias=C.bias,B.shadowNormalBias=C.normalBias,B.shadowRadius=C.radius,B.shadowMapSize=C.mapSize,B.shadowCameraNear=C.camera.near,B.shadowCameraFar=C.camera.far,r.pointShadow[y]=B,r.pointShadowMap[y]=N,r.pointShadowMatrix[y]=I.shadow.matrix,E++}r.point[y]=R,y++}else if(I.isHemisphereLight){const R=n.get(I);R.skyColor.copy(I.color).multiplyScalar(P),R.groundColor.copy(I.groundColor).multiplyScalar(P),r.hemi[m]=R,m++}}g>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Z.LTC_FLOAT_1,r.rectAreaLTC2=Z.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Z.LTC_HALF_1,r.rectAreaLTC2=Z.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=u;const x=r.hash;(x.directionalLength!==p||x.pointLength!==y||x.spotLength!==v||x.rectAreaLength!==g||x.hemiLength!==m||x.numDirectionalShadows!==T||x.numPointShadows!==E||x.numSpotShadows!==w)&&(r.directional.length=p,r.spot.length=v,r.rectArea.length=g,r.point.length=y,r.hemi.length=m,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=E,r.spotShadowMatrix.length=w,x.directionalLength=p,x.pointLength=y,x.spotLength=v,x.rectAreaLength=g,x.hemiLength=m,x.numDirectionalShadows=T,x.numPointShadows=E,x.numSpotShadows=w,r.version=Wu++)}function l(f,h){let d=0,u=0,p=0,y=0,v=0;const g=h.matrixWorldInverse;for(let m=0,T=f.length;m<T;m++){const E=f[m];if(E.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),d++}else if(E.isSpotLight){const w=r.spot[p];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),p++}else if(E.isRectAreaLight){const w=r.rectArea[y];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(g),a.identity(),o.copy(E.matrixWorld),o.premultiply(g),a.extractRotation(o),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(E.isPointLight){const w=r.point[u];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(g),u++}else if(E.isHemisphereLight){const w=r.hemi[v];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(g),w.direction.normalize(),v++}}}return{setup:c,setupView:l,state:r}}function To(t,e){const n=new qu(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function c(){n.setup(i)}function l(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Xu(t,e){let n=new WeakMap;function i(s,o=0){let a;return n.has(s)===!1?(a=new To(t,e),n.set(s,[]),n.get(s).push(a)):o>=n.get(s).length?(a=new To(t,e),n.get(s).push(a)):a=n.get(s)[o],a}function r(){n=new WeakMap}return{get:i,dispose:r}}function gn(t){pt.call(this),this.type="MeshDepthMaterial",this.depthPacking=3200,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(t)}gn.prototype=Object.create(pt.prototype),gn.prototype.constructor=gn,gn.prototype.isMeshDepthMaterial=!0,gn.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.depthPacking=t.depthPacking,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this};function yn(t){pt.call(this),this.type="MeshDistanceMaterial",this.referencePosition=new S,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(t)}yn.prototype=Object.create(pt.prototype),yn.prototype.constructor=yn,yn.prototype.isMeshDistanceMaterial=!0,yn.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this};var Yu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,Zu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function Eo(t,e,n){let i=new er;const r=new H,s=new H,o=new Nt,a=[],c=[],l={},f={0:1,1:0,2:2},h=new re({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new H},radius:{value:4}},vertexShader:Zu,fragmentShader:Yu}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const u=new Dt;u.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new $t(u,h),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(w,x,A){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||w.length===0)return;const O=t.getRenderTarget(),I=t.getActiveCubeFace(),et=t.getActiveMipmapLevel(),P=t.state;P.setBlending(0),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let U=0,N=w.length;U<N;U++){const R=w[U],C=R.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;r.copy(C.mapSize);const B=C.getFrameExtents();if(r.multiply(B),s.copy(C.mapSize),(r.x>n||r.y>n)&&(r.x>n&&(s.x=Math.floor(n/B.x),r.x=s.x*B.x,C.mapSize.x=s.x),r.y>n&&(s.y=Math.floor(n/B.y),r.y=s.y*B.y,C.mapSize.y=s.y)),C.map===null&&!C.isPointLightShadow&&this.type===3){const X={minFilter:1006,magFilter:1006,format:1023};C.map=new xe(r.x,r.y,X),C.map.texture.name=R.name+".shadowMap",C.mapPass=new xe(r.x,r.y,X),C.camera.updateProjectionMatrix()}if(C.map===null){const X={minFilter:1003,magFilter:1003,format:1023};C.map=new xe(r.x,r.y,X),C.map.texture.name=R.name+".shadowMap",C.camera.updateProjectionMatrix()}t.setRenderTarget(C.map),t.clear();const k=C.getViewportCount();for(let X=0;X<k;X++){const K=C.getViewport(X);o.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),P.viewport(o),C.updateMatrices(R,X),i=C.getFrustum(),E(x,A,C.camera,R,this.type)}!C.isPointLightShadow&&this.type===3&&v(C,A),C.needsUpdate=!1}y.needsUpdate=!1,t.setRenderTarget(O,I,et)};function v(w,x){const A=e.update(p);h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(x,null,A,h,p,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(x,null,A,d,p,null)}function g(w,x,A){const O=w<<0|x<<1|A<<2;let I=a[O];return I===void 0&&(I=new gn({depthPacking:3201,morphTargets:w,skinning:x}),a[O]=I),I}function m(w,x,A){const O=w<<0|x<<1|A<<2;let I=c[O];return I===void 0&&(I=new yn({morphTargets:w,skinning:x}),c[O]=I),I}function T(w,x,A,O,I,et,P){let U=null,N=g,R=w.customDepthMaterial;if(O.isPointLight===!0&&(N=m,R=w.customDistanceMaterial),R===void 0){let C=!1;A.morphTargets===!0&&(C=x.morphAttributes&&x.morphAttributes.position&&x.morphAttributes.position.length>0);let B=!1;w.isSkinnedMesh===!0&&(A.skinning===!0?B=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",w));const k=w.isInstancedMesh===!0;U=N(C,B,k)}else U=R;if(t.localClippingEnabled&&A.clipShadows===!0&&A.clippingPlanes.length!==0){const C=U.uuid,B=A.uuid;let k=l[C];k===void 0&&(k={},l[C]=k);let X=k[B];X===void 0&&(X=U.clone(),k[B]=X),U=X}return U.visible=A.visible,U.wireframe=A.wireframe,P===3?U.side=A.shadowSide!==null?A.shadowSide:A.side:U.side=A.shadowSide!==null?A.shadowSide:f[A.side],U.clipShadows=A.clipShadows,U.clippingPlanes=A.clippingPlanes,U.clipIntersection=A.clipIntersection,U.wireframeLinewidth=A.wireframeLinewidth,U.linewidth=A.linewidth,O.isPointLight===!0&&U.isMeshDistanceMaterial===!0&&(U.referencePosition.setFromMatrixPosition(O.matrixWorld),U.nearDistance=I,U.farDistance=et),U}function E(w,x,A,O,I){if(w.visible===!1)return;if(w.layers.test(x.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&I===3)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const U=e.update(w),N=w.material;if(Array.isArray(N)){const R=U.groups;for(let C=0,B=R.length;C<B;C++){const k=R[C],X=N[k.materialIndex];if(X&&X.visible){const K=T(w,U,X,O,A.near,A.far,I);t.renderBufferDirect(A,null,U,K,w,k)}}}else if(N.visible){const R=T(w,U,N,O,A.near,A.far,I);t.renderBufferDirect(A,null,U,R,w,null)}}const P=w.children;for(let U=0,N=P.length;U<N;U++)E(P[U],x,A,O,I)}}function Ju(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const q=new Nt;let tt=null;const at=new Nt(0,0,0,0);return{setMask:function(J){tt!==J&&!L&&(t.colorMask(J,J,J,J),tt=J)},setLocked:function(J){L=J},setClear:function(J,ot,ut,_t,st){st===!0&&(J*=_t,ot*=_t,ut*=_t),q.set(J,ot,ut,_t),at.equals(q)===!1&&(t.clearColor(J,ot,ut,_t),at.copy(q))},reset:function(){L=!1,tt=null,at.set(-1,0,0,0)}}}function s(){let L=!1,q=null,tt=null,at=null;return{setTest:function(J){J?rt(2929):it(2929)},setMask:function(J){q!==J&&!L&&(t.depthMask(J),q=J)},setFunc:function(J){if(tt!==J){if(J)switch(J){case 0:t.depthFunc(512);break;case 1:t.depthFunc(519);break;case 2:t.depthFunc(513);break;case 3:t.depthFunc(515);break;case 4:t.depthFunc(514);break;case 5:t.depthFunc(518);break;case 6:t.depthFunc(516);break;case 7:t.depthFunc(517);break;default:t.depthFunc(515)}else t.depthFunc(515);tt=J}},setLocked:function(J){L=J},setClear:function(J){at!==J&&(t.clearDepth(J),at=J)},reset:function(){L=!1,q=null,tt=null,at=null}}}function o(){let L=!1,q=null,tt=null,at=null,J=null,ot=null,ut=null,_t=null,st=null;return{setTest:function(mt){L||(mt?rt(2960):it(2960))},setMask:function(mt){q!==mt&&!L&&(t.stencilMask(mt),q=mt)},setFunc:function(mt,Wt,se){(tt!==mt||at!==Wt||J!==se)&&(t.stencilFunc(mt,Wt,se),tt=mt,at=Wt,J=se)},setOp:function(mt,Wt,se){(ot!==mt||ut!==Wt||_t!==se)&&(t.stencilOp(mt,Wt,se),ot=mt,ut=Wt,_t=se)},setLocked:function(mt){L=mt},setClear:function(mt){st!==mt&&(t.clearStencil(mt),st=mt)},reset:function(){L=!1,q=null,tt=null,at=null,J=null,ot=null,ut=null,_t=null,st=null}}}const a=new r,c=new s,l=new o;let f={},h=null,d=null,u=null,p=null,y=null,v=null,g=null,m=null,T=null,E=!1,w=null,x=null,A=null,O=null,I=null;const et=t.getParameter(35661);let P=!1,U=0;const N=t.getParameter(7938);N.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(N)[1]),P=U>=1):N.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),P=U>=2);let R=null,C={};const B=new Nt,k=new Nt;function X(L,q,tt){const at=new Uint8Array(4),J=t.createTexture();t.bindTexture(L,J),t.texParameteri(L,10241,9728),t.texParameteri(L,10240,9728);for(let ot=0;ot<tt;ot++)t.texImage2D(q+ot,0,6408,1,1,0,6408,5121,at);return J}const K={};K[3553]=X(3553,3553,1),K[34067]=X(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),rt(2929),c.setFunc(3),dt(!1),Rt(1),rt(2884),G(0);function rt(L){f[L]!==!0&&(t.enable(L),f[L]=!0)}function it(L){f[L]!==!1&&(t.disable(L),f[L]=!1)}function vt(L){return h!==L?(t.useProgram(L),h=L,!0):!1}const wt={100:32774,101:32778,102:32779};if(i)wt[103]=32775,wt[104]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(wt[103]=L.MIN_EXT,wt[104]=L.MAX_EXT)}const kt={200:0,201:1,202:768,204:770,210:776,208:774,206:772,203:769,205:771,209:775,207:773};function G(L,q,tt,at,J,ot,ut,_t){if(L===0){d&&(it(3042),d=!1);return}if(d||(rt(3042),d=!0),L!==5){if(L!==u||_t!==E){if((p!==100||g!==100)&&(t.blendEquation(32774),p=100,g=100),_t)switch(L){case 1:t.blendFuncSeparate(1,771,1,771);break;case 2:t.blendFunc(1,1);break;case 3:t.blendFuncSeparate(0,0,769,771);break;case 4:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case 1:t.blendFuncSeparate(770,771,1,771);break;case 2:t.blendFunc(770,1);break;case 3:t.blendFunc(0,769);break;case 4:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,v=null,m=null,T=null,u=L,E=_t}return}J=J||q,ot=ot||tt,ut=ut||at,(q!==p||J!==g)&&(t.blendEquationSeparate(wt[q],wt[J]),p=q,g=J),(tt!==y||at!==v||ot!==m||ut!==T)&&(t.blendFuncSeparate(kt[tt],kt[at],kt[ot],kt[ut]),y=tt,v=at,m=ot,T=ut),u=L,E=null}function ee(L,q){L.side===2?it(2884):rt(2884);let tt=L.side===1;q&&(tt=!tt),dt(tt),L.blending===1&&L.transparent===!1?G(0):G(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);const at=L.stencilWrite;l.setTest(at),at&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),It(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits)}function dt(L){w!==L&&(L?t.frontFace(2304):t.frontFace(2305),w=L)}function Rt(L){L!==0?(rt(2884),L!==x&&(L===1?t.cullFace(1029):L===2?t.cullFace(1028):t.cullFace(1032))):it(2884),x=L}function xt(L){L!==A&&(P&&t.lineWidth(L),A=L)}function It(L,q,tt){L?(rt(32823),(O!==q||I!==tt)&&(t.polygonOffset(q,tt),O=q,I=tt)):it(32823)}function Et(L){L?rt(3089):it(3089)}function W(L){L===void 0&&(L=33984+et-1),R!==L&&(t.activeTexture(L),R=L)}function Y(L,q){R===null&&W();let tt=C[R];tt===void 0&&(tt={type:void 0,texture:void 0},C[R]=tt),(tt.type!==L||tt.texture!==q)&&(t.bindTexture(L,q||K[L]),tt.type=L,tt.texture=q)}function Q(){const L=C[R];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ht(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function M(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function b(L){B.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),B.copy(L))}function j(L){k.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),k.copy(L))}function V(){f={},R=null,C={},h=null,d=null,u=null,p=null,y=null,v=null,g=null,m=null,T=null,E=!1,w=null,x=null,A=null,O=null,I=null,a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:rt,disable:it,useProgram:vt,setBlending:G,setMaterial:ee,setFlipSided:dt,setCullFace:Rt,setLineWidth:xt,setPolygonOffset:It,setScissorTest:Et,activeTexture:W,bindTexture:Y,unbindTexture:Q,compressedTexImage2D:ht,texImage2D:nt,texImage3D:M,scissor:b,viewport:j,reset:V}}function Qu(t,e,n,i,r,s,o){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,f=r.maxTextureSize,h=r.maxSamples,d=new WeakMap;let u,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(M,b){return p?new OffscreenCanvas(M,b):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function v(M,b,j,V){let L=1;if((M.width>V||M.height>V)&&(L=V/Math.max(M.width,M.height)),L<1||b===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const q=b?yt.floorPowerOfTwo:Math.floor,tt=q(L*M.width),at=q(L*M.height);u===void 0&&(u=y(tt,at));const J=j?y(tt,at):u;return J.width=tt,J.height=at,J.getContext("2d").drawImage(M,0,0,tt,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+tt+"x"+at+")."),J}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function g(M){return yt.isPowerOfTwo(M.width)&&yt.isPowerOfTwo(M.height)}function m(M){return a?!1:M.wrapS!==1001||M.wrapT!==1001||M.minFilter!==1003&&M.minFilter!==1006}function T(M,b){return M.generateMipmaps&&b&&M.minFilter!==1003&&M.minFilter!==1006}function E(M,b,j,V){t.generateMipmap(M);const L=i.get(b);L.__maxMipLevel=Math.log(Math.max(j,V))*Math.LOG2E}function w(M,b,j){if(a===!1)return b;if(M!==null){if(t[M]!==void 0)return t[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let V=b;return b===6403&&(j===5126&&(V=33326),j===5131&&(V=33325),j===5121&&(V=33321)),b===6407&&(j===5126&&(V=34837),j===5131&&(V=34843),j===5121&&(V=32849)),b===6408&&(j===5126&&(V=34836),j===5131&&(V=34842),j===5121&&(V=32856)),(V===33325||V===33326||V===34842||V===34836)&&e.get("EXT_color_buffer_float"),V}function x(M){return M===1003||M===1004||M===1005?9728:9729}function A(M){const b=M.target;b.removeEventListener("dispose",A),I(b),b.isVideoTexture&&d.delete(b),o.memory.textures--}function O(M){const b=M.target;b.removeEventListener("dispose",O),et(b),o.memory.textures--}function I(M){const b=i.get(M);b.__webglInit!==void 0&&(t.deleteTexture(b.__webglTexture),i.remove(M))}function et(M){const b=i.get(M),j=i.get(M.texture);if(M){if(j.__webglTexture!==void 0&&t.deleteTexture(j.__webglTexture),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let V=0;V<6;V++)t.deleteFramebuffer(b.__webglFramebuffer[V]),b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[V]);else t.deleteFramebuffer(b.__webglFramebuffer),b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer&&t.deleteRenderbuffer(b.__webglColorRenderbuffer),b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer);i.remove(M.texture),i.remove(M)}}let P=0;function U(){P=0}function N(){const M=P;return M>=c&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+c),P+=1,M}function R(M,b){const j=i.get(M);if(M.isVideoTexture&&W(M),M.version>0&&j.__version!==M.version){const V=M.image;if(V===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{vt(j,M,b);return}}n.activeTexture(33984+b),n.bindTexture(3553,j.__webglTexture)}function C(M,b){const j=i.get(M);if(M.version>0&&j.__version!==M.version){vt(j,M,b);return}n.activeTexture(33984+b),n.bindTexture(35866,j.__webglTexture)}function B(M,b){const j=i.get(M);if(M.version>0&&j.__version!==M.version){vt(j,M,b);return}n.activeTexture(33984+b),n.bindTexture(32879,j.__webglTexture)}function k(M,b){const j=i.get(M);if(M.version>0&&j.__version!==M.version){wt(j,M,b);return}n.activeTexture(33984+b),n.bindTexture(34067,j.__webglTexture)}const X={1e3:10497,1001:33071,1002:33648},K={1003:9728,1004:9984,1005:9986,1006:9729,1007:9985,1008:9987};function rt(M,b,j){j?(t.texParameteri(M,10242,X[b.wrapS]),t.texParameteri(M,10243,X[b.wrapT]),(M===32879||M===35866)&&t.texParameteri(M,32882,X[b.wrapR]),t.texParameteri(M,10240,K[b.magFilter]),t.texParameteri(M,10241,K[b.minFilter])):(t.texParameteri(M,10242,33071),t.texParameteri(M,10243,33071),(M===32879||M===35866)&&t.texParameteri(M,32882,33071),(b.wrapS!==1001||b.wrapT!==1001)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(M,10240,x(b.magFilter)),t.texParameteri(M,10241,x(b.minFilter)),b.minFilter!==1003&&b.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));const V=e.get("EXT_texture_filter_anisotropic");if(V){if(b.type===1015&&e.get("OES_texture_float_linear")===null||b.type===1016&&(a||e.get("OES_texture_half_float_linear"))===null)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(t.texParameterf(M,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function it(M,b){M.__webglInit===void 0&&(M.__webglInit=!0,b.addEventListener("dispose",A),M.__webglTexture=t.createTexture(),o.memory.textures++)}function vt(M,b,j){let V=3553;b.isDataTexture2DArray&&(V=35866),b.isDataTexture3D&&(V=32879),it(M,b),n.activeTexture(33984+j),n.bindTexture(V,M.__webglTexture),t.pixelStorei(37440,b.flipY),t.pixelStorei(37441,b.premultiplyAlpha),t.pixelStorei(3317,b.unpackAlignment);const L=m(b)&&g(b.image)===!1,q=v(b.image,L,!1,f),tt=g(q)||a,at=s.convert(b.format);let J=s.convert(b.type),ot=w(b.internalFormat,at,J);rt(V,b,tt);let ut;const _t=b.mipmaps;if(b.isDepthTexture)ot=6402,a?b.type===1015?ot=36012:b.type===1014?ot=33190:b.type===1020?ot=35056:ot=33189:b.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===1026&&ot===6402&&b.type!==1012&&b.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=1012,J=s.convert(b.type)),b.format===1027&&ot===6402&&(ot=34041,b.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=1020,J=s.convert(b.type))),n.texImage2D(3553,0,ot,q.width,q.height,0,at,J,null);else if(b.isDataTexture)if(_t.length>0&&tt){for(let st=0,mt=_t.length;st<mt;st++)ut=_t[st],n.texImage2D(3553,st,ot,ut.width,ut.height,0,at,J,ut.data);b.generateMipmaps=!1,M.__maxMipLevel=_t.length-1}else n.texImage2D(3553,0,ot,q.width,q.height,0,at,J,q.data),M.__maxMipLevel=0;else if(b.isCompressedTexture){for(let st=0,mt=_t.length;st<mt;st++)ut=_t[st],b.format!==1023&&b.format!==1022?at!==null?n.compressedTexImage2D(3553,st,ot,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):n.texImage2D(3553,st,ot,ut.width,ut.height,0,at,J,ut.data);M.__maxMipLevel=_t.length-1}else if(b.isDataTexture2DArray)n.texImage3D(35866,0,ot,q.width,q.height,q.depth,0,at,J,q.data),M.__maxMipLevel=0;else if(b.isDataTexture3D)n.texImage3D(32879,0,ot,q.width,q.height,q.depth,0,at,J,q.data),M.__maxMipLevel=0;else if(_t.length>0&&tt){for(let st=0,mt=_t.length;st<mt;st++)ut=_t[st],n.texImage2D(3553,st,ot,at,J,ut);b.generateMipmaps=!1,M.__maxMipLevel=_t.length-1}else n.texImage2D(3553,0,ot,at,J,q),M.__maxMipLevel=0;T(b,tt)&&E(V,b,q.width,q.height),M.__version=b.version,b.onUpdate&&b.onUpdate(b)}function wt(M,b,j){if(b.image.length!==6)return;it(M,b),n.activeTexture(33984+j),n.bindTexture(34067,M.__webglTexture),t.pixelStorei(37440,b.flipY);const V=b&&(b.isCompressedTexture||b.image[0].isCompressedTexture),L=b.image[0]&&b.image[0].isDataTexture,q=[];for(let st=0;st<6;st++)!V&&!L?q[st]=v(b.image[st],!1,!0,l):q[st]=L?b.image[st].image:b.image[st];const tt=q[0],at=g(tt)||a,J=s.convert(b.format),ot=s.convert(b.type),ut=w(b.internalFormat,J,ot);rt(34067,b,at);let _t;if(V){for(let st=0;st<6;st++){_t=q[st].mipmaps;for(let mt=0;mt<_t.length;mt++){const Wt=_t[mt];b.format!==1023&&b.format!==1022?J!==null?n.compressedTexImage2D(34069+st,mt,ut,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):n.texImage2D(34069+st,mt,ut,Wt.width,Wt.height,0,J,ot,Wt.data)}}M.__maxMipLevel=_t.length-1}else{_t=b.mipmaps;for(let st=0;st<6;st++)if(L){n.texImage2D(34069+st,0,ut,q[st].width,q[st].height,0,J,ot,q[st].data);for(let mt=0;mt<_t.length;mt++){const se=_t[mt].image[st].image;n.texImage2D(34069+st,mt+1,ut,se.width,se.height,0,J,ot,se.data)}}else{n.texImage2D(34069+st,0,ut,J,ot,q[st]);for(let mt=0;mt<_t.length;mt++){const Wt=_t[mt];n.texImage2D(34069+st,mt+1,ut,J,ot,Wt.image[st])}}M.__maxMipLevel=_t.length}T(b,at)&&E(34067,b,tt.width,tt.height),M.__version=b.version,b.onUpdate&&b.onUpdate(b)}function kt(M,b,j,V){const L=s.convert(b.texture.format),q=s.convert(b.texture.type),tt=w(b.texture.internalFormat,L,q);n.texImage2D(V,0,tt,b.width,b.height,0,L,q,null),t.bindFramebuffer(36160,M),t.framebufferTexture2D(36160,j,V,i.get(b.texture).__webglTexture,0),t.bindFramebuffer(36160,null)}function G(M,b,j){if(t.bindRenderbuffer(36161,M),b.depthBuffer&&!b.stencilBuffer){let V=33189;if(j){const L=b.depthTexture;L&&L.isDepthTexture&&(L.type===1015?V=36012:L.type===1014&&(V=33190));const q=Et(b);t.renderbufferStorageMultisample(36161,q,V,b.width,b.height)}else t.renderbufferStorage(36161,V,b.width,b.height);t.framebufferRenderbuffer(36160,36096,36161,M)}else if(b.depthBuffer&&b.stencilBuffer){if(j){const V=Et(b);t.renderbufferStorageMultisample(36161,V,35056,b.width,b.height)}else t.renderbufferStorage(36161,34041,b.width,b.height);t.framebufferRenderbuffer(36160,33306,36161,M)}else{const V=s.convert(b.texture.format),L=s.convert(b.texture.type),q=w(b.texture.internalFormat,V,L);if(j){const tt=Et(b);t.renderbufferStorageMultisample(36161,tt,q,b.width,b.height)}else t.renderbufferStorage(36161,q,b.width,b.height)}t.bindRenderbuffer(36161,null)}function ee(M,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,M),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),R(b.depthTexture,0);const V=i.get(b.depthTexture).__webglTexture;if(b.depthTexture.format===1026)t.framebufferTexture2D(36160,36096,3553,V,0);else if(b.depthTexture.format===1027)t.framebufferTexture2D(36160,33306,3553,V,0);else throw new Error("Unknown depthTexture format")}function dt(M){const b=i.get(M),j=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture){if(j)throw new Error("target.depthTexture not supported in Cube render targets");ee(b.__webglFramebuffer,M)}else if(j){b.__webglDepthbuffer=[];for(let V=0;V<6;V++)t.bindFramebuffer(36160,b.__webglFramebuffer[V]),b.__webglDepthbuffer[V]=t.createRenderbuffer(),G(b.__webglDepthbuffer[V],M,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=t.createRenderbuffer(),G(b.__webglDepthbuffer,M,!1);t.bindFramebuffer(36160,null)}function Rt(M){const b=i.get(M),j=i.get(M.texture);M.addEventListener("dispose",O),j.__webglTexture=t.createTexture(),o.memory.textures++;const V=M.isWebGLCubeRenderTarget===!0,L=M.isWebGLMultisampleRenderTarget===!0,q=g(M)||a;if(a&&M.texture.format===1022&&(M.texture.type===1015||M.texture.type===1016)&&(M.texture.format=1023,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),V){b.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)b.__webglFramebuffer[tt]=t.createFramebuffer()}else if(b.__webglFramebuffer=t.createFramebuffer(),L)if(a){b.__webglMultisampledFramebuffer=t.createFramebuffer(),b.__webglColorRenderbuffer=t.createRenderbuffer(),t.bindRenderbuffer(36161,b.__webglColorRenderbuffer);const tt=s.convert(M.texture.format),at=s.convert(M.texture.type),J=w(M.texture.internalFormat,tt,at),ot=Et(M);t.renderbufferStorageMultisample(36161,ot,J,M.width,M.height),t.bindFramebuffer(36160,b.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064,36161,b.__webglColorRenderbuffer),t.bindRenderbuffer(36161,null),M.depthBuffer&&(b.__webglDepthRenderbuffer=t.createRenderbuffer(),G(b.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(V){n.bindTexture(34067,j.__webglTexture),rt(34067,M.texture,q);for(let tt=0;tt<6;tt++)kt(b.__webglFramebuffer[tt],M,36064,34069+tt);T(M.texture,q)&&E(34067,M.texture,M.width,M.height),n.bindTexture(34067,null)}else n.bindTexture(3553,j.__webglTexture),rt(3553,M.texture,q),kt(b.__webglFramebuffer,M,36064,3553),T(M.texture,q)&&E(3553,M.texture,M.width,M.height),n.bindTexture(3553,null);M.depthBuffer&&dt(M)}function xt(M){const b=M.texture,j=g(M)||a;if(T(b,j)){const V=M.isWebGLCubeRenderTarget?34067:3553,L=i.get(b).__webglTexture;n.bindTexture(V,L),E(V,b,M.width,M.height),n.bindTexture(V,null)}}function It(M){if(M.isWebGLMultisampleRenderTarget)if(a){const b=i.get(M);t.bindFramebuffer(36008,b.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,b.__webglFramebuffer);const j=M.width,V=M.height;let L=16384;M.depthBuffer&&(L|=256),M.stencilBuffer&&(L|=1024),t.blitFramebuffer(0,0,j,V,0,0,j,V,L,9728),t.bindFramebuffer(36160,b.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Et(M){return a&&M.isWebGLMultisampleRenderTarget?Math.min(h,M.samples):0}function W(M){const b=o.render.frame;d.get(M)!==b&&(d.set(M,b),M.update())}let Y=!1,Q=!1;function ht(M,b){M&&M.isWebGLRenderTarget&&(Y===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Y=!0),M=M.texture),R(M,b)}function nt(M,b){M&&M.isWebGLCubeRenderTarget&&(Q===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),Q=!0),M=M.texture),k(M,b)}this.allocateTextureUnit=N,this.resetTextureUnits=U,this.setTexture2D=R,this.setTexture2DArray=C,this.setTexture3D=B,this.setTextureCube=k,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=It,this.safeSetTexture2D=ht,this.safeSetTextureCube=nt}function $u(t,e,n){const i=n.isWebGL2;function r(s){let o;if(s===1009)return 5121;if(s===1017)return 32819;if(s===1018)return 32820;if(s===1019)return 33635;if(s===1010)return 5120;if(s===1011)return 5122;if(s===1012)return 5123;if(s===1013)return 5124;if(s===1014)return 5125;if(s===1015)return 5126;if(s===1016)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===1021)return 6406;if(s===1022)return 6407;if(s===1023)return 6408;if(s===1024)return 6409;if(s===1025)return 6410;if(s===1026)return 6402;if(s===1027)return 34041;if(s===1028)return 6403;if(s===1029)return 36244;if(s===1030)return 33319;if(s===1031)return 33320;if(s===1032)return 36248;if(s===1033)return 36249;if(s===33776||s===33777||s===33778||s===33779)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===33776)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===33777)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===33778)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===33779)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===35840||s===35841||s===35842||s===35843)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===35840)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===35841)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===35842)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===35843)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===36196)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===37492||s===37496)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===37492)return o.COMPRESSED_RGB8_ETC2;if(s===37496)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===37808||s===37809||s===37810||s===37811||s===37812||s===37813||s===37814||s===37815||s===37816||s===37817||s===37818||s===37819||s===37820||s===37821||s===37840||s===37841||s===37842||s===37843||s===37844||s===37845||s===37846||s===37847||s===37848||s===37849||s===37850||s===37851||s===37852||s===37853)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===36492)return o=e.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===1020)return i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}function ss(t=[]){Jt.call(this),this.cameras=t}ss.prototype=Object.assign(Object.create(Jt.prototype),{constructor:ss,isArrayCamera:!0});function jn(){ft.call(this),this.type="Group"}jn.prototype=Object.assign(Object.create(ft.prototype),{constructor:jn,isGroup:!0});function _i(){this._targetRay=null,this._grip=null,this._hand=null}Object.assign(_i.prototype,{constructor:_i,getHandSpace:function(){if(this._hand===null&&(this._hand=new jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints=[],this._hand.inputState={pinching:!1},window.XRHand))for(let t=0;t<=window.XRHand.LITTLE_PHALANX_TIP;t++){const e=new jn;e.matrixAutoUpdate=!1,e.visible=!1,this._hand.joints.push(e),this._hand.add(e)}return this._hand},getTargetRaySpace:function(){return this._targetRay===null&&(this._targetRay=new jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return this._grip===null&&(this._grip=new jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this},disconnect:function(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this},update:function(t,e,n){let i=null,r=null,s=null;const o=this._targetRay,a=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred")if(c&&t.hand){s=!0;for(let l=0;l<=window.XRHand.LITTLE_PHALANX_TIP;l++)if(t.hand[l]){const f=e.getJointPose(t.hand[l],n),h=c.joints[l];f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.jointRadius=f.radius),h.visible=f!==null;const d=c.joints[window.XRHand.INDEX_PHALANX_TIP],u=c.joints[window.XRHand.THUMB_PHALANX_TIP],p=d.position.distanceTo(u.position),y=.02,v=.005;c.inputState.pinching&&p>y+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=y-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}}else o!==null&&(i=e.getPose(t.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale))),a!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale)));return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),this}});function Ao(t,e){const n=this;let i=null,r=1,s=null,o="local-floor",a=null;const c=[],l=new Map,f=new Jt;f.layers.enable(1),f.viewport=new Nt;const h=new Jt;h.layers.enable(2),h.viewport=new Nt;const d=[f,h],u=new ss;u.layers.enable(1),u.layers.enable(2);let p=null,y=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let U=c[P];return U===void 0&&(U=new _i,c[P]=U),U.getTargetRaySpace()},this.getControllerGrip=function(P){let U=c[P];return U===void 0&&(U=new _i,c[P]=U),U.getGripSpace()},this.getHand=function(P){let U=c[P];return U===void 0&&(U=new _i,c[P]=U),U.getHandSpace()};function v(P){const U=l.get(P.inputSource);U&&U.dispatchEvent({type:P.type,data:P.inputSource})}function g(){l.forEach(function(P,U){P.disconnect(U)}),l.clear(),t.setFramebuffer(null),t.setRenderTarget(t.getRenderTarget()),et.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}function m(P){s=P,et.setContext(i),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}this.setFramebufferScaleFactor=function(P){r=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){o=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return s},this.getSession=function(){return i},this.setSession=function(P){if(i=P,i!==null){i.addEventListener("select",v),i.addEventListener("selectstart",v),i.addEventListener("selectend",v),i.addEventListener("squeeze",v),i.addEventListener("squeezestart",v),i.addEventListener("squeezeend",v),i.addEventListener("end",g);const U=e.getContextAttributes();U.xrCompatible!==!0&&e.makeXRCompatible();const N={antialias:U.antialias,alpha:U.alpha,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:r},R=new XRWebGLLayer(i,e,N);i.updateRenderState({baseLayer:R}),i.requestReferenceSpace(o).then(m),i.addEventListener("inputsourceschange",T)}};function T(P){const U=i.inputSources;for(let N=0;N<c.length;N++)l.set(U[N],c[N]);for(let N=0;N<P.removed.length;N++){const R=P.removed[N],C=l.get(R);C&&(C.dispatchEvent({type:"disconnected",data:R}),l.delete(R))}for(let N=0;N<P.added.length;N++){const R=P.added[N],C=l.get(R);C&&C.dispatchEvent({type:"connected",data:R})}}const E=new S,w=new S;function x(P,U,N){E.setFromMatrixPosition(U.matrixWorld),w.setFromMatrixPosition(N.matrixWorld);const R=E.distanceTo(w),C=U.projectionMatrix.elements,B=N.projectionMatrix.elements,k=C[14]/(C[10]-1),X=C[14]/(C[10]+1),K=(C[9]+1)/C[5],rt=(C[9]-1)/C[5],it=(C[8]-1)/C[0],vt=(B[8]+1)/B[0],wt=k*it,kt=k*vt,G=R/(-it+vt),ee=G*-it;U.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(ee),P.translateZ(G),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert();const dt=k+G,Rt=X+G,xt=wt-ee,It=kt+(R-ee),Et=K*X/Rt*dt,W=rt*X/Rt*dt;P.projectionMatrix.makePerspective(xt,It,Et,W,dt,Rt)}function A(P,U){U===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(U.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.getCamera=function(P){u.near=h.near=f.near=P.near,u.far=h.far=f.far=P.far,(p!==u.near||y!==u.far)&&(i.updateRenderState({depthNear:u.near,depthFar:u.far}),p=u.near,y=u.far);const U=P.parent,N=u.cameras;A(u,U);for(let C=0;C<N.length;C++)A(N[C],U);P.matrixWorld.copy(u.matrixWorld);const R=P.children;for(let C=0,B=R.length;C<B;C++)R[C].updateMatrixWorld(!0);return N.length===2?x(u,f,h):u.projectionMatrix.copy(f.projectionMatrix),u};let O=null;function I(P,U){if(a=U.getViewerPose(s),a!==null){const R=a.views,C=i.renderState.baseLayer;t.setFramebuffer(C.framebuffer);let B=!1;R.length!==u.cameras.length&&(u.cameras.length=0,B=!0);for(let k=0;k<R.length;k++){const X=R[k],K=C.getViewport(X),rt=d[k];rt.matrix.fromArray(X.transform.matrix),rt.projectionMatrix.fromArray(X.projectionMatrix),rt.viewport.set(K.x,K.y,K.width,K.height),k===0&&u.matrix.copy(rt.matrix),B===!0&&u.cameras.push(rt)}}const N=i.inputSources;for(let R=0;R<c.length;R++){const C=c[R],B=N[R];C.update(B,U,s)}O&&O(P,U)}const et=new io;et.setAnimationLoop(I),this.setAnimationLoop=function(P){O=P},this.dispose=function(){}}Object.assign(Ao.prototype,Ne.prototype);function Ku(t){function e(g,m){g.fogColor.value.copy(m.color),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,T,E){m.isMeshBasicMaterial?i(g,m):m.isMeshLambertMaterial?(i(g,m),c(g,m)):m.isMeshToonMaterial?(i(g,m),f(g,m)):m.isMeshPhongMaterial?(i(g,m),l(g,m)):m.isMeshStandardMaterial?(i(g,m),m.isMeshPhysicalMaterial?d(g,m):h(g,m)):m.isMeshMatcapMaterial?(i(g,m),u(g,m)):m.isMeshDepthMaterial?(i(g,m),p(g,m)):m.isMeshDistanceMaterial?(i(g,m),y(g,m)):m.isMeshNormalMaterial?(i(g,m),v(g,m)):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&s(g,m)):m.isPointsMaterial?o(g,m,T,E):m.isSpriteMaterial?a(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap),m.specularMap&&(g.specularMap.value=m.specularMap);const T=t.get(m).envMap;if(T){g.envMap.value=T,g.flipEnvMap.value=T.isCubeTexture&&T._needsFlipEnvMap?-1:1,g.reflectivity.value=m.reflectivity,g.refractionRatio.value=m.refractionRatio;const x=t.get(T).__maxMipLevel;x!==void 0&&(g.maxMipLevel.value=x)}m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity);let E;m.map?E=m.map:m.specularMap?E=m.specularMap:m.displacementMap?E=m.displacementMap:m.normalMap?E=m.normalMap:m.bumpMap?E=m.bumpMap:m.roughnessMap?E=m.roughnessMap:m.metalnessMap?E=m.metalnessMap:m.alphaMap?E=m.alphaMap:m.emissiveMap?E=m.emissiveMap:m.clearcoatMap?E=m.clearcoatMap:m.clearcoatNormalMap?E=m.clearcoatNormalMap:m.clearcoatRoughnessMap&&(E=m.clearcoatRoughnessMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),g.uvTransform.value.copy(E.matrix));let w;m.aoMap?w=m.aoMap:m.lightMap&&(w=m.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),g.uv2Transform.value.copy(w.matrix))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity}function s(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function o(g,m,T,E){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*T,g.scale.value=E*.5,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap);let w;m.map?w=m.map:m.alphaMap&&(w=m.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),g.uvTransform.value.copy(w.matrix))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap);let T;m.map?T=m.map:m.alphaMap&&(T=m.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),g.uvTransform.value.copy(T.matrix))}function c(g,m){m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap)}function l(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===1&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===1&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===1&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===1&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function h(g,m){g.roughness.value=m.roughness,g.metalness.value=m.metalness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===1&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===1&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),t.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m){h(g,m),g.reflectivity.value=m.reflectivity,g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.sheen&&g.sheen.value.copy(m.sheen),m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),g.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===1&&g.clearcoatNormalScale.value.negate()),g.transmission.value=m.transmission,m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap)}function u(g,m){m.matcap&&(g.matcap.value=m.matcap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===1&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===1&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function p(g,m){m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function y(g,m){m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),g.referencePosition.value.copy(m.referencePosition),g.nearDistance.value=m.nearDistance,g.farDistance.value=m.farDistance}function v(g,m){m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===1&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===1&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function tf(){const t=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return t.style.display="block",t}function nr(t){t=t||{};const e=t.canvas!==void 0?t.canvas:tf(),n=t.context!==void 0?t.context:null,i=t.alpha!==void 0?t.alpha:!1,r=t.depth!==void 0?t.depth:!0,s=t.stencil!==void 0?t.stencil:!0,o=t.antialias!==void 0?t.antialias:!1,a=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,c=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",f=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let h=null,d=null;const u=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=3e3,this.physicallyCorrectLights=!1,this.toneMapping=0,this.toneMappingExposure=1,this.maxMorphTargets=8,this.maxMorphNormals=4;const p=this;let y=!1,v=null,g=0,m=0,T=null,E=null,w=-1,x=null;const A=new Nt,O=new Nt;let I=null,et=e.width,P=e.height,U=1,N=null,R=null;const C=new Nt(0,0,et,P),B=new Nt(0,0,et,P);let k=!1;const X=new er;let K=!1,rt=!1;const it=new Mt,vt=new S,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function kt(){return T===null?U:1}let G=n;function ee(_,F){for(let D=0;D<_.length;D++){const z=_[D],$=e.getContext(z,F);if($!==null)return $}return null}try{const _={alpha:i,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:f};if(e.addEventListener("webglcontextlost",Wt,!1),e.addEventListener("webglcontextrestored",se,!1),G===null){const F=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&F.shift(),G=ee(F,_),G===null)throw ee(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let dt,Rt,xt,It,Et,W,Y,Q,ht,nt,M,b,j,V,L,q,tt,at,J,ot,ut;function _t(){dt=new Ph(G),Rt=new Lh(G,dt,t),Rt.isWebGL2===!1&&(dt.get("WEBGL_depth_texture"),dt.get("OES_texture_float"),dt.get("OES_texture_half_float"),dt.get("OES_texture_half_float_linear"),dt.get("OES_standard_derivatives"),dt.get("OES_element_index_uint"),dt.get("OES_vertex_array_object"),dt.get("ANGLE_instanced_arrays")),dt.get("OES_texture_float_linear"),ot=new $u(G,dt,Rt),xt=new Ju(G,dt,Rt),xt.scissor(O.copy(B).multiplyScalar(U).floor()),xt.viewport(A.copy(C).multiplyScalar(U).floor()),It=new Nh,Et=new Uu,W=new Qu(G,dt,xt,Et,Rt,ot,It),Y=new Rh(p),Q=new nc(G,Rt),ut=new Eh(G,dt,Q,Rt),ht=new Ih(G,Q,It,ut),nt=new Uh(G,ht,Q,It),tt=new Oh(G),L=new Ch(Et),M=new Ou(p,Y,dt,Rt,ut,L),b=new Ku(Et),j=new Hu(Et),V=new Xu(dt,Rt),q=new Th(p,Y,xt,nt,a),at=new Ah(G,dt,It,Rt),J=new Dh(G,dt,It,Rt),It.programs=M.programs,p.capabilities=Rt,p.extensions=dt,p.properties=Et,p.renderLists=j,p.state=xt,p.info=It}_t();const st=new Ao(p,G);this.xr=st;const mt=new Eo(p,nt,Rt.maxTextureSize);this.shadowMap=mt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const _=dt.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=dt.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(_){_!==void 0&&(U=_,this.setSize(et,P,!1))},this.getSize=function(_){return _===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),_=new H),_.set(et,P)},this.setSize=function(_,F,D){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}et=_,P=F,e.width=Math.floor(_*U),e.height=Math.floor(F*U),D!==!1&&(e.style.width=_+"px",e.style.height=F+"px"),this.setViewport(0,0,_,F)},this.getDrawingBufferSize=function(_){return _===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),_=new H),_.set(et*U,P*U).floor()},this.setDrawingBufferSize=function(_,F,D){et=_,P=F,U=D,e.width=Math.floor(_*D),e.height=Math.floor(F*D),this.setViewport(0,0,_,F)},this.getCurrentViewport=function(_){return _===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),_=new Nt),_.copy(A)},this.getViewport=function(_){return _.copy(C)},this.setViewport=function(_,F,D,z){_.isVector4?C.set(_.x,_.y,_.z,_.w):C.set(_,F,D,z),xt.viewport(A.copy(C).multiplyScalar(U).floor())},this.getScissor=function(_){return _.copy(B)},this.setScissor=function(_,F,D,z){_.isVector4?B.set(_.x,_.y,_.z,_.w):B.set(_,F,D,z),xt.scissor(O.copy(B).multiplyScalar(U).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(_){xt.setScissorTest(k=_)},this.setOpaqueSort=function(_){N=_},this.setTransparentSort=function(_){R=_},this.getClearColor=function(_){return _===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),_=new ct),_.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(_,F,D){let z=0;(_===void 0||_)&&(z|=16384),(F===void 0||F)&&(z|=256),(D===void 0||D)&&(z|=1024),G.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Wt,!1),e.removeEventListener("webglcontextrestored",se,!1),j.dispose(),V.dispose(),Et.dispose(),Y.dispose(),nt.dispose(),ut.dispose(),st.dispose(),Fi.stop()};function Wt(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1,_t()}function Da(_){const F=_.target;F.removeEventListener("dispose",Da),ud(F)}function ud(_){Na(_),Et.remove(_)}function Na(_){const F=Et.get(_).program;F!==void 0&&M.releaseProgram(F)}function fd(_,F){_.render(function(D){p.renderBufferImmediate(D,F)})}this.renderBufferImmediate=function(_,F){ut.initAttributes();const D=Et.get(_);_.hasPositions&&!D.position&&(D.position=G.createBuffer()),_.hasNormals&&!D.normal&&(D.normal=G.createBuffer()),_.hasUvs&&!D.uv&&(D.uv=G.createBuffer()),_.hasColors&&!D.color&&(D.color=G.createBuffer());const z=F.getAttributes();_.hasPositions&&(G.bindBuffer(34962,D.position),G.bufferData(34962,_.positionArray,35048),ut.enableAttribute(z.position),G.vertexAttribPointer(z.position,3,5126,!1,0,0)),_.hasNormals&&(G.bindBuffer(34962,D.normal),G.bufferData(34962,_.normalArray,35048),ut.enableAttribute(z.normal),G.vertexAttribPointer(z.normal,3,5126,!1,0,0)),_.hasUvs&&(G.bindBuffer(34962,D.uv),G.bufferData(34962,_.uvArray,35048),ut.enableAttribute(z.uv),G.vertexAttribPointer(z.uv,2,5126,!1,0,0)),_.hasColors&&(G.bindBuffer(34962,D.color),G.bufferData(34962,_.colorArray,35048),ut.enableAttribute(z.color),G.vertexAttribPointer(z.color,3,5126,!1,0,0)),ut.disableUnusedAttributes(),G.drawArrays(4,0,_.count),_.count=0},this.renderBufferDirect=function(_,F,D,z,$,Lt){F===null&&(F=wt);const St=$.isMesh&&$.matrixWorld.determinant()<0,Ct=Ua(_,F,z,$);xt.setMaterial(z,St);let Tt=D.index;const qt=D.attributes.position;if(Tt===null){if(qt===void 0||qt.count===0)return}else if(Tt.count===0)return;let jt=1;z.wireframe===!0&&(Tt=ht.getWireframeAttribute(D),jt=2),(z.morphTargets||z.morphNormals)&&tt.update($,D,z,Ct),ut.setup($,z,Ct,D,Tt);let bt,Ut=at;Tt!==null&&(bt=Q.get(Tt),Ut=J,Ut.setIndex(bt));const Xe=Tt!==null?Tt.count:qt.count,zt=D.drawRange.start*jt,Sn=D.drawRange.count*jt,Yt=Lt!==null?Lt.start*jt:0,zs=Lt!==null?Lt.count*jt:1/0,oe=Math.max(zt,Yt),Bi=Math.min(Xe,zt+Sn,Yt+zs)-1,oi=Math.max(0,Bi-oe+1);if(oi!==0){if($.isMesh)z.wireframe===!0?(xt.setLineWidth(z.wireframeLinewidth*kt()),Ut.setMode(1)):Ut.setMode(4);else if($.isLine){let Oi=z.linewidth;Oi===void 0&&(Oi=1),xt.setLineWidth(Oi*kt()),$.isLineSegments?Ut.setMode(1):$.isLineLoop?Ut.setMode(2):Ut.setMode(3)}else $.isPoints?Ut.setMode(0):$.isSprite&&Ut.setMode(4);if($.isInstancedMesh)Ut.renderInstances(oe,oi,$.count);else if(D.isInstancedBufferGeometry){const Oi=Math.min(D.instanceCount,D._maxInstanceCount);Ut.renderInstances(oe,oi,Oi)}else Ut.render(oe,oi)}},this.compile=function(_,F){d=V.get(_),d.init(),_.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights();const D=new WeakMap;_.traverse(function(z){const $=z.material;if($)if(Array.isArray($))for(let Lt=0;Lt<$.length;Lt++){const St=$[Lt];D.has(St)===!1&&(qe(St,_,z),D.set(St))}else D.has($)===!1&&(qe($,_,z),D.set($))})};let Us=null;function dd(_){st.isPresenting||Us&&Us(_)}const Fi=new io;Fi.setAnimationLoop(dd),typeof window<"u"&&Fi.setContext(window),this.setAnimationLoop=function(_){Us=_,st.setAnimationLoop(_),_===null?Fi.stop():Fi.start()},this.render=function(_,F){let D,z;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),D=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),z=arguments[3]),F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;ut.resetDefaultState(),w=-1,x=null,_.autoUpdate===!0&&_.updateMatrixWorld(),F.parent===null&&F.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(F=st.getCamera(F)),_.isScene===!0&&_.onBeforeRender(p,_,F,D||T),d=V.get(_,u.length),d.init(),u.push(d),it.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),X.setFromProjectionMatrix(it),rt=this.localClippingEnabled,K=L.init(this.clippingPlanes,rt,F),h=j.get(_,F),h.init(),Fa(_,F,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(N,R),K===!0&&L.beginShadows();const $=d.state.shadowsArray;mt.render($,_,F),d.setupLights(),d.setupLightsView(F),K===!0&&L.endShadows(),this.info.autoReset===!0&&this.info.reset(),D!==void 0&&this.setRenderTarget(D),q.render(h,_,F,z);const Lt=h.opaque,St=h.transparent;Lt.length>0&&Ba(Lt,_,F),St.length>0&&Ba(St,_,F),_.isScene===!0&&_.onAfterRender(p,_,F),T!==null&&(W.updateRenderTargetMipmap(T),W.updateMultisampleRenderTarget(T)),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1),u.pop(),u.length>0?d=u[u.length-1]:d=null,h=null};function Fa(_,F,D,z){if(_.visible===!1)return;if(_.layers.test(F.layers)){if(_.isGroup)D=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(F);else if(_.isLight)d.pushLight(_),_.castShadow&&d.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||X.intersectsSprite(_)){z&&vt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(it);const St=nt.update(_),Ct=_.material;Ct.visible&&h.push(_,St,Ct,D,vt.z,null)}}else if(_.isImmediateRenderObject)z&&vt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(it),h.push(_,null,_.material,D,vt.z,null);else if((_.isMesh||_.isLine||_.isPoints)&&(_.isSkinnedMesh&&_.skeleton.frame!==It.render.frame&&(_.skeleton.update(),_.skeleton.frame=It.render.frame),!_.frustumCulled||X.intersectsObject(_))){z&&vt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(it);const St=nt.update(_),Ct=_.material;if(Array.isArray(Ct)){const Tt=St.groups;for(let qt=0,jt=Tt.length;qt<jt;qt++){const bt=Tt[qt],Ut=Ct[bt.materialIndex];Ut&&Ut.visible&&h.push(_,St,Ut,D,vt.z,bt)}}else Ct.visible&&h.push(_,St,Ct,D,vt.z,null)}}const Lt=_.children;for(let St=0,Ct=Lt.length;St<Ct;St++)Fa(Lt[St],F,D,z)}function Ba(_,F,D){const z=F.isScene===!0?F.overrideMaterial:null;for(let $=0,Lt=_.length;$<Lt;$++){const St=_[$],Ct=St.object,Tt=St.geometry,qt=z===null?St.material:z,jt=St.group;if(D.isArrayCamera){const bt=D.cameras;for(let Ut=0,Xe=bt.length;Ut<Xe;Ut++){const zt=bt[Ut];Ct.layers.test(zt.layers)&&(xt.viewport(A.copy(zt.viewport)),d.setupLightsView(zt),Oa(Ct,F,zt,Tt,qt,jt))}}else Oa(Ct,F,D,Tt,qt,jt)}}function Oa(_,F,D,z,$,Lt){if(_.onBeforeRender(p,F,D,z,$,Lt),_.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),_.isImmediateRenderObject){const St=Ua(D,F,$,_);xt.setMaterial($),ut.reset(),fd(_,St)}else p.renderBufferDirect(D,F,z,$,_,Lt);_.onAfterRender(p,F,D,z,$,Lt)}function qe(_,F,D){F.isScene!==!0&&(F=wt);const z=Et.get(_),$=d.state.lights,Lt=d.state.shadowsArray,St=$.state.version,Ct=M.getParameters(_,$.state,Lt,F,D),Tt=M.getProgramCacheKey(Ct);let qt=z.program,jt=!0;if(qt===void 0)_.addEventListener("dispose",Da);else if(qt.cacheKey!==Tt)Na(_);else if(z.lightsStateVersion!==St)jt=!1;else if(Ct.shaderID!==void 0){const zt=_.isMeshStandardMaterial?F.environment:null;z.envMap=Y.get(_.envMap||zt);return}else jt=!1;jt&&(Ct.uniforms=M.getUniforms(_),_.onBeforeCompile(Ct,p),qt=M.acquireProgram(Ct,Tt),z.program=qt,z.uniforms=Ct.uniforms,z.outputEncoding=Ct.outputEncoding);const bt=z.uniforms;(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(z.numClippingPlanes=L.numPlanes,z.numIntersection=L.numIntersection,bt.clippingPlanes=L.uniform),z.environment=_.isMeshStandardMaterial?F.environment:null,z.fog=F.fog,z.envMap=Y.get(_.envMap||z.environment),z.needsLights=md(_),z.lightsStateVersion=St,z.needsLights&&(bt.ambientLightColor.value=$.state.ambient,bt.lightProbe.value=$.state.probe,bt.directionalLights.value=$.state.directional,bt.directionalLightShadows.value=$.state.directionalShadow,bt.spotLights.value=$.state.spot,bt.spotLightShadows.value=$.state.spotShadow,bt.rectAreaLights.value=$.state.rectArea,bt.ltc_1.value=$.state.rectAreaLTC1,bt.ltc_2.value=$.state.rectAreaLTC2,bt.pointLights.value=$.state.point,bt.pointLightShadows.value=$.state.pointShadow,bt.hemisphereLights.value=$.state.hemi,bt.directionalShadowMap.value=$.state.directionalShadowMap,bt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,bt.spotShadowMap.value=$.state.spotShadowMap,bt.spotShadowMatrix.value=$.state.spotShadowMatrix,bt.pointShadowMap.value=$.state.pointShadowMap,bt.pointShadowMatrix.value=$.state.pointShadowMatrix);const Ut=z.program.getUniforms(),Xe=on.seqWithValue(Ut.seq,bt);z.uniformsList=Xe}function Ua(_,F,D,z){F.isScene!==!0&&(F=wt),W.resetTextureUnits();const $=F.fog,Lt=D.isMeshStandardMaterial?F.environment:null,St=T===null?p.outputEncoding:T.texture.encoding,Ct=Y.get(D.envMap||Lt),Tt=Et.get(D),qt=d.state.lights;if(K===!0&&(rt===!0||_!==x)){const Yt=_===x&&D.id===w;L.setState(D,_,Yt)}D.version===Tt.__version?(D.fog&&Tt.fog!==$||Tt.environment!==Lt||Tt.needsLights&&Tt.lightsStateVersion!==qt.state.version||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==L.numPlanes||Tt.numIntersection!==L.numIntersection)||Tt.outputEncoding!==St||Tt.envMap!==Ct)&&qe(D,F,z):(qe(D,F,z),Tt.__version=D.version);let jt=!1,bt=!1,Ut=!1;const Xe=Tt.program,zt=Xe.getUniforms(),Sn=Tt.uniforms;if(xt.useProgram(Xe.program)&&(jt=!0,bt=!0,Ut=!0),D.id!==w&&(w=D.id,bt=!0),jt||x!==_){if(zt.setValue(G,"projectionMatrix",_.projectionMatrix),Rt.logarithmicDepthBuffer&&zt.setValue(G,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),x!==_&&(x=_,bt=!0,Ut=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const Yt=zt.map.cameraPosition;Yt!==void 0&&Yt.setValue(G,vt.setFromMatrixPosition(_.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&zt.setValue(G,"isOrthographic",_.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||D.skinning)&&zt.setValue(G,"viewMatrix",_.matrixWorldInverse)}if(D.skinning){zt.setOptional(G,z,"bindMatrix"),zt.setOptional(G,z,"bindMatrixInverse");const Yt=z.skeleton;if(Yt){const zs=Yt.bones;if(Rt.floatVertexTextures){if(Yt.boneTexture===null){let oe=Math.sqrt(zs.length*4);oe=yt.ceilPowerOfTwo(oe),oe=Math.max(oe,4);const Bi=new Float32Array(oe*oe*4);Bi.set(Yt.boneMatrices);const oi=new Vn(Bi,oe,oe,1023,1015);Yt.boneMatrices=Bi,Yt.boneTexture=oi,Yt.boneTextureSize=oe}zt.setValue(G,"boneTexture",Yt.boneTexture,W),zt.setValue(G,"boneTextureSize",Yt.boneTextureSize)}else zt.setOptional(G,Yt,"boneMatrices")}}return(bt||Tt.receiveShadow!==z.receiveShadow)&&(Tt.receiveShadow=z.receiveShadow,zt.setValue(G,"receiveShadow",z.receiveShadow)),bt&&(zt.setValue(G,"toneMappingExposure",p.toneMappingExposure),Tt.needsLights&&pd(Sn,Ut),$&&D.fog&&b.refreshFogUniforms(Sn,$),b.refreshMaterialUniforms(Sn,D,U,P),on.upload(G,Tt.uniformsList,Sn,W)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(on.upload(G,Tt.uniformsList,Sn,W),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&zt.setValue(G,"center",z.center),zt.setValue(G,"modelViewMatrix",z.modelViewMatrix),zt.setValue(G,"normalMatrix",z.normalMatrix),zt.setValue(G,"modelMatrix",z.matrixWorld),Xe}function pd(_,F){_.ambientLightColor.needsUpdate=F,_.lightProbe.needsUpdate=F,_.directionalLights.needsUpdate=F,_.directionalLightShadows.needsUpdate=F,_.pointLights.needsUpdate=F,_.pointLightShadows.needsUpdate=F,_.spotLights.needsUpdate=F,_.spotLightShadows.needsUpdate=F,_.rectAreaLights.needsUpdate=F,_.hemisphereLights.needsUpdate=F}function md(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.setFramebuffer=function(_){v!==_&&T===null&&G.bindFramebuffer(36160,_),v=_},this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return m},this.getRenderList=function(){return h},this.setRenderList=function(_){h=_},this.getRenderTarget=function(){return T},this.setRenderTarget=function(_,F=0,D=0){T=_,g=F,m=D,_&&Et.get(_).__webglFramebuffer===void 0&&W.setupRenderTarget(_);let z=v,$=!1;if(_){const Lt=Et.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(z=Lt[F],$=!0):_.isWebGLMultisampleRenderTarget?z=Et.get(_).__webglMultisampledFramebuffer:z=Lt,A.copy(_.viewport),O.copy(_.scissor),I=_.scissorTest}else A.copy(C).multiplyScalar(U).floor(),O.copy(B).multiplyScalar(U).floor(),I=k;if(E!==z&&(G.bindFramebuffer(36160,z),E=z),xt.viewport(A),xt.scissor(O),xt.setScissorTest(I),$){const Lt=Et.get(_.texture);G.framebufferTexture2D(36160,36064,34069+F,Lt.__webglTexture,D)}},this.readRenderTargetPixels=function(_,F,D,z,$,Lt,St){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Et.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&St!==void 0&&(Ct=Ct[St]),Ct){let Tt=!1;Ct!==E&&(G.bindFramebuffer(36160,Ct),Tt=!0);try{const qt=_.texture,jt=qt.format,bt=qt.type;if(jt!==1023&&ot.convert(jt)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(bt!==1009&&ot.convert(bt)!==G.getParameter(35738)&&!(bt===1015&&(Rt.isWebGL2||dt.get("OES_texture_float")||dt.get("WEBGL_color_buffer_float")))&&!(bt===1016&&(Rt.isWebGL2?dt.get("EXT_color_buffer_float"):dt.get("EXT_color_buffer_half_float")))){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G.checkFramebufferStatus(36160)===36053?F>=0&&F<=_.width-z&&D>=0&&D<=_.height-$&&G.readPixels(F,D,z,$,ot.convert(jt),ot.convert(bt),Lt):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{Tt&&G.bindFramebuffer(36160,E)}}},this.copyFramebufferToTexture=function(_,F,D=0){const z=Math.pow(2,-D),$=Math.floor(F.image.width*z),Lt=Math.floor(F.image.height*z),St=ot.convert(F.format);W.setTexture2D(F,0),G.copyTexImage2D(3553,D,St,_.x,_.y,$,Lt,0),xt.unbindTexture()},this.copyTextureToTexture=function(_,F,D,z=0){const $=F.image.width,Lt=F.image.height,St=ot.convert(D.format),Ct=ot.convert(D.type);W.setTexture2D(D,0),G.pixelStorei(37440,D.flipY),G.pixelStorei(37441,D.premultiplyAlpha),G.pixelStorei(3317,D.unpackAlignment),F.isDataTexture?G.texSubImage2D(3553,z,_.x,_.y,$,Lt,St,Ct,F.image.data):F.isCompressedTexture?G.compressedTexSubImage2D(3553,z,_.x,_.y,F.mipmaps[0].width,F.mipmaps[0].height,St,F.mipmaps[0].data):G.texSubImage2D(3553,z,_.x,_.y,St,Ct,F.image),z===0&&D.generateMipmaps&&G.generateMipmap(3553),xt.unbindTexture()},this.initTexture=function(_){W.setTexture2D(_,0),xt.unbindTexture()},this.resetState=function(){xt.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function Lo(t){nr.call(this,t)}Lo.prototype=Object.assign(Object.create(nr.prototype),{constructor:Lo,isWebGL1Renderer:!0});class ef extends ft{constructor(){super(),Object.defineProperty(this,"isScene",{value:!0}),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.background!==null&&(n.object.background=this.background.toJSON(e)),this.environment!==null&&(n.object.environment=this.environment.toJSON(e)),this.fog!==null&&(n.object.fog=this.fog.toJSON()),n}}function pe(t,e){this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=yt.generateUUID()}Object.defineProperty(pe.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}}),Object.assign(pe.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(t){return this.usage=t,this},copy:function(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this},copyAt:function(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this},set:function(t,e=0){return this.array.set(t,e),this},clone:function(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yt.generateUUID()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new pe(e,this.stride);return n.setUsage(this.usage),n},onUpload:function(t){return this.onUploadCallback=t,this},toJSON:function(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yt.generateUUID()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});const vn=new S;function xn(t,e,n,i){this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i===!0}Object.defineProperties(xn.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}},needsUpdate:{set:function(t){this.data.needsUpdate=t}}}),Object.assign(xn.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(t){for(let e=0,n=this.data.count;e<n;e++)vn.x=this.getX(e),vn.y=this.getY(e),vn.z=this.getZ(e),vn.applyMatrix4(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this},setX:function(t,e){return this.data.array[t*this.data.stride+this.offset]=e,this},setY:function(t,e){return this.data.array[t*this.data.stride+this.offset+1]=e,this},setZ:function(t,e){return this.data.array[t*this.data.stride+this.offset+2]=e,this},setW:function(t,e){return this.data.array[t*this.data.stride+this.offset+3]=e,this},getX:function(t){return this.data.array[t*this.data.stride+this.offset]},getY:function(t){return this.data.array[t*this.data.stride+this.offset+1]},getZ:function(t){return this.data.array[t*this.data.stride+this.offset+2]},getW:function(t){return this.data.array[t*this.data.stride+this.offset+3]},setXY:function(t,e,n){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this},setXYZ:function(t,e,n,i){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this},setXYZW:function(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this},clone:function(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new gt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new xn(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}});function _n(t){pt.call(this),this.type="SpriteMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(t)}_n.prototype=Object.create(pt.prototype),_n.prototype.constructor=_n,_n.prototype.isSpriteMaterial=!0,_n.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this};let qn;const bi=new S,Xn=new S,Yn=new S,Zn=new H,Mi=new H,Co=new Mt,ir=new S,wi=new S,rr=new S,Ro=new H,os=new H,Po=new H;function Io(t){if(ft.call(this),this.type="Sprite",qn===void 0){qn=new Dt;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new pe(e,5);qn.setIndex([0,1,2,0,2,3]),qn.setAttribute("position",new xn(n,3,0,!1)),qn.setAttribute("uv",new xn(n,2,3,!1))}this.geometry=qn,this.material=t!==void 0?t:new _n,this.center=new H(.5,.5)}Io.prototype=Object.assign(Object.create(ft.prototype),{constructor:Io,isSprite:!0,raycast:function(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xn.setFromMatrixScale(this.matrixWorld),Co.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Yn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xn.multiplyScalar(-Yn.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const s=this.center;sr(ir.set(-.5,-.5,0),Yn,s,Xn,i,r),sr(wi.set(.5,-.5,0),Yn,s,Xn,i,r),sr(rr.set(.5,.5,0),Yn,s,Xn,i,r),Ro.set(0,0),os.set(1,0),Po.set(1,1);let o=t.ray.intersectTriangle(ir,wi,rr,!1,bi);if(o===null&&(sr(wi.set(-.5,.5,0),Yn,s,Xn,i,r),os.set(0,1),o=t.ray.intersectTriangle(ir,rr,wi,!1,bi),o===null))return;const a=t.ray.origin.distanceTo(bi);a<t.near||a>t.far||e.push({distance:a,point:bi.clone(),uv:Qt.getUV(bi,ir,wi,rr,Ro,os,Po,new H),face:null,object:this})},copy:function(t){return ft.prototype.copy.call(this,t),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}});function sr(t,e,n,i,r,s){Zn.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Mi.x=s*Zn.x-r*Zn.y,Mi.y=r*Zn.x+s*Zn.y):Mi.copy(Zn),t.copy(e),t.x+=Mi.x,t.y+=Mi.y,t.applyMatrix4(Co)}const or=new S,Do=new S;function as(){ft.call(this),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}as.prototype=Object.assign(Object.create(ft.prototype),{constructor:as,isLOD:!0,copy:function(t){ft.prototype.copy.call(this,t,!1);const e=t.levels;for(let n=0,i=e.length;n<i;n++){const r=e[n];this.addLevel(r.object.clone(),r.distance)}return this.autoUpdate=t.autoUpdate,this},addLevel:function(t,e=0){e=Math.abs(e);const n=this.levels;let i;for(i=0;i<n.length&&!(e<n[i].distance);i++);return n.splice(i,0,{distance:e,object:t}),this.add(t),this},getCurrentLevel:function(){return this._currentLevel},getObjectForDistance:function(t){const e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i&&!(t<e[n].distance);n++);return e[n-1].object}return null},raycast:function(t,e){if(this.levels.length>0){or.setFromMatrixPosition(this.matrixWorld);const i=t.ray.origin.distanceTo(or);this.getObjectForDistance(i).raycast(t,e)}},update:function(t){const e=this.levels;if(e.length>1){or.setFromMatrixPosition(t.matrixWorld),Do.setFromMatrixPosition(this.matrixWorld);const n=or.distanceTo(Do)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r&&n>=e[i].distance;i++)e[i-1].object.visible=!1,e[i].object.visible=!0;for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}},toJSON:function(t){const e=ft.prototype.toJSON.call(this,t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const s=n[i];e.object.levels.push({object:s.object.uuid,distance:s.distance})}return e}});const No=new S,Fo=new Nt,Bo=new Nt,nf=new S,Oo=new Mt;function cs(t,e){t&&t.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."),$t.call(this,t,e),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Mt,this.bindMatrixInverse=new Mt}cs.prototype=Object.assign(Object.create($t.prototype),{constructor:cs,isSkinnedMesh:!0,copy:function(t){return $t.prototype.copy.call(this,t),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this},bind:function(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){const t=new Nt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.x=e.getX(n),t.y=e.getY(n),t.z=e.getZ(n),t.w=e.getW(n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}},updateMatrixWorld:function(t){$t.prototype.updateMatrixWorld.call(this,t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},boneTransform:function(t,e){const n=this.skeleton,i=this.geometry;Fo.fromBufferAttribute(i.attributes.skinIndex,t),Bo.fromBufferAttribute(i.attributes.skinWeight,t),No.fromBufferAttribute(i.attributes.position,t).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const s=Bo.getComponent(r);if(s!==0){const o=Fo.getComponent(r);Oo.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(nf.copy(No).applyMatrix4(Oo),s)}}return e.applyMatrix4(this.bindMatrixInverse)}});function ls(){ft.call(this),this.type="Bone"}ls.prototype=Object.assign(Object.create(ft.prototype),{constructor:ls,isBone:!0});const Uo=new Mt,rf=new Mt;function hs(t=[],e=[]){this.uuid=yt.generateUUID(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}Object.assign(hs.prototype,{init:function(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Mt)}},calculateInverses:function(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Mt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}},pose:function(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}},update:function(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=t.length;r<s;r++){const o=t[r]?t[r].matrixWorld:rf;Uo.multiplyMatrices(o,e[r]),Uo.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)},clone:function(){return new hs(this.bones,this.boneInverses)},getBoneByName:function(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}},dispose:function(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)},fromJSON:function(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let s=e[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new ls),this.bones.push(s),this.boneInverses.push(new Mt().fromArray(t.boneInverses[n]))}return this.init(),this},toJSON:function(){const t={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const s=e[i];t.bones.push(s.uuid);const o=n[i];t.boneInverses.push(o.toArray())}return t}});const zo=new Mt,Go=new Mt,ar=[],Si=new $t;function Ho(t,e,n){$t.call(this,t,e),this.instanceMatrix=new gt(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}Ho.prototype=Object.assign(Object.create($t.prototype),{constructor:Ho,isInstancedMesh:!0,copy:function(t){return $t.prototype.copy.call(this,t),this.instanceMatrix.copy(t.instanceMatrix),this.count=t.count,this},getColorAt:function(t,e){e.fromArray(this.instanceColor.array,t*3)},getMatrixAt:function(t,e){e.fromArray(this.instanceMatrix.array,t*16)},raycast:function(t,e){const n=this.matrixWorld,i=this.count;if(Si.geometry=this.geometry,Si.material=this.material,Si.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,zo),Go.multiplyMatrices(n,zo),Si.matrixWorld=Go,Si.raycast(t,ar);for(let s=0,o=ar.length;s<o;s++){const a=ar[s];a.instanceId=r,a.object=this,e.push(a)}ar.length=0}},setColorAt:function(t,e){this.instanceColor===null&&(this.instanceColor=new gt(new Float32Array(this.count*3),3)),e.toArray(this.instanceColor.array,t*3)},setMatrixAt:function(t,e){e.toArray(this.instanceMatrix.array,t*16)},updateMorphTargets:function(){},dispose:function(){this.dispatchEvent({type:"dispose"})}});function me(t){pt.call(this),this.type="LineBasicMaterial",this.color=new ct(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(t)}me.prototype=Object.create(pt.prototype),me.prototype.constructor=me,me.prototype.isLineBasicMaterial=!0,me.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.morphTargets=t.morphTargets,this};const Vo=new S,ko=new S,Wo=new Mt,cr=new li,lr=new Qe;function Jn(t=new Dt,e=new me){ft.call(this),this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}Jn.prototype=Object.assign(Object.create(ft.prototype),{constructor:Jn,isLine:!0,copy:function(t){return ft.prototype.copy.call(this,t),this.material=t.material,this.geometry=t.geometry,this},computeLineDistances:function(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Vo.fromBufferAttribute(e,i-1),ko.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Vo.distanceTo(ko);t.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(t.isGeometry){const e=t.vertices,n=t.lineDistances;n[0]=0;for(let i=1,r=e.length;i<r;i++)n[i]=n[i-1],n[i]+=e[i-1].distanceTo(e[i])}return this},raycast:function(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(i),lr.radius+=r,t.ray.intersectsSphere(lr)===!1)return;Wo.copy(i).invert(),cr.copy(t.ray).applyMatrix4(Wo);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,a=new S,c=new S,l=new S,f=new S,h=this.isLineSegments?2:1;if(n.isBufferGeometry){const d=n.index,p=n.attributes.position;if(d!==null){const y=d.array;for(let v=0,g=y.length-1;v<g;v+=h){const m=y[v],T=y[v+1];if(a.fromBufferAttribute(p,m),c.fromBufferAttribute(p,T),cr.distanceSqToSegment(a,c,f,l)>o)continue;f.applyMatrix4(this.matrixWorld);const w=t.ray.origin.distanceTo(f);w<t.near||w>t.far||e.push({distance:w,point:l.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else for(let y=0,v=p.count-1;y<v;y+=h){if(a.fromBufferAttribute(p,y),c.fromBufferAttribute(p,y+1),cr.distanceSqToSegment(a,c,f,l)>o)continue;f.applyMatrix4(this.matrixWorld);const m=t.ray.origin.distanceTo(f);m<t.near||m>t.far||e.push({distance:m,point:l.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else if(n.isGeometry){const d=n.vertices,u=d.length;for(let p=0;p<u-1;p+=h){if(cr.distanceSqToSegment(d[p],d[p+1],f,l)>o)continue;f.applyMatrix4(this.matrixWorld);const v=t.ray.origin.distanceTo(f);v<t.near||v>t.far||e.push({distance:v,point:l.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}}},updateMorphTargets:function(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});const hr=new S,ur=new S;function fr(t,e){Jn.call(this,t,e),this.type="LineSegments"}fr.prototype=Object.assign(Object.create(Jn.prototype),{constructor:fr,isLineSegments:!0,computeLineDistances:function(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)hr.fromBufferAttribute(e,i),ur.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+hr.distanceTo(ur);t.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(t.isGeometry){const e=t.vertices,n=t.lineDistances;for(let i=0,r=e.length;i<r;i+=2)hr.copy(e[i]),ur.copy(e[i+1]),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+hr.distanceTo(ur)}return this}});function jo(t,e){Jn.call(this,t,e),this.type="LineLoop"}jo.prototype=Object.assign(Object.create(Jn.prototype),{constructor:jo,isLineLoop:!0});function bn(t){pt.call(this),this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(t)}bn.prototype=Object.create(pt.prototype),bn.prototype.constructor=bn,bn.prototype.isPointsMaterial=!0,bn.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.morphTargets=t.morphTargets,this};const qo=new Mt,us=new li,dr=new Qe,pr=new S;function Xo(t=new Dt,e=new bn){ft.call(this),this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}Xo.prototype=Object.assign(Object.create(ft.prototype),{constructor:Xo,isPoints:!0,copy:function(t){return ft.prototype.copy.call(this,t),this.material=t.material,this.geometry=t.geometry,this},raycast:function(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(i),dr.radius+=r,t.ray.intersectsSphere(dr)===!1)return;qo.copy(i).invert(),us.copy(t.ray).applyMatrix4(qo);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position;if(a!==null){const f=a.array;for(let h=0,d=f.length;h<d;h++){const u=f[h];pr.fromBufferAttribute(l,u),fs(pr,u,o,i,t,e,this)}}else for(let f=0,h=l.count;f<h;f++)pr.fromBufferAttribute(l,f),fs(pr,f,o,i,t,e,this)}else{const a=n.vertices;for(let c=0,l=a.length;c<l;c++)fs(a[c],c,o,i,t,e,this)}},updateMorphTargets:function(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});function fs(t,e,n,i,r,s,o){const a=us.distanceSqToPoint(t);if(a<n){const c=new S;us.closestPointToPoint(t,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}function Yo(t,e,n,i,r,s,o,a,c){Bt.call(this,t,e,n,i,r,s,o,a,c),this.format=o!==void 0?o:1022,this.minFilter=s!==void 0?s:1006,this.magFilter=r!==void 0?r:1006,this.generateMipmaps=!1;const l=this;function f(){l.needsUpdate=!0,t.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(f)}Yo.prototype=Object.assign(Object.create(Bt.prototype),{constructor:Yo,clone:function(){return new this.constructor(this.image).copy(this)},isVideoTexture:!0,update:function(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}});function Ti(t,e,n,i,r,s,o,a,c,l,f,h){Bt.call(this,null,s,o,a,c,l,i,r,f,h),this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}Ti.prototype=Object.create(Bt.prototype),Ti.prototype.constructor=Ti,Ti.prototype.isCompressedTexture=!0;function mr(t,e,n,i,r,s,o,a,c){Bt.call(this,t,e,n,i,r,s,o,a,c),this.needsUpdate=!0}mr.prototype=Object.create(Bt.prototype),mr.prototype.constructor=mr,mr.prototype.isCanvasTexture=!0;function gr(t,e,n,i,r,s,o,a,c,l){if(l=l!==void 0?l:1026,l!==1026&&l!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===1026&&(n=1012),n===void 0&&l===1027&&(n=1020),Bt.call(this,null,i,r,s,o,a,l,n,c),this.image={width:t,height:e},this.magFilter=o!==void 0?o:1003,this.minFilter=a!==void 0?a:1003,this.flipY=!1,this.generateMipmaps=!1}gr.prototype=Object.create(Bt.prototype),gr.prototype.constructor=gr,gr.prototype.isDepthTexture=!0;let sf=0;const Ae=new Mt,ds=new ft,yr=new S;function ge(){Object.defineProperty(this,"id",{value:sf+=2}),this.uuid=yt.generateUUID(),this.name="",this.type="Geometry",this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.elementsNeedUpdate=!1,this.verticesNeedUpdate=!1,this.uvsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.lineDistancesNeedUpdate=!1,this.groupsNeedUpdate=!1}ge.prototype=Object.assign(Object.create(Ne.prototype),{constructor:ge,isGeometry:!0,applyMatrix4:function(t){const e=new ie().getNormalMatrix(t);for(let n=0,i=this.vertices.length;n<i;n++)this.vertices[n].applyMatrix4(t);for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n];r.normal.applyMatrix3(e).normalize();for(let s=0,o=r.vertexNormals.length;s<o;s++)r.vertexNormals[s].applyMatrix3(e).normalize()}return this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this},rotateX:function(t){return Ae.makeRotationX(t),this.applyMatrix4(Ae),this},rotateY:function(t){return Ae.makeRotationY(t),this.applyMatrix4(Ae),this},rotateZ:function(t){return Ae.makeRotationZ(t),this.applyMatrix4(Ae),this},translate:function(t,e,n){return Ae.makeTranslation(t,e,n),this.applyMatrix4(Ae),this},scale:function(t,e,n){return Ae.makeScale(t,e,n),this.applyMatrix4(Ae),this},lookAt:function(t){return ds.lookAt(t),ds.updateMatrix(),this.applyMatrix4(ds.matrix),this},fromBufferGeometry:function(t){const e=this,n=t.index!==null?t.index:void 0,i=t.attributes;if(i.position===void 0)return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."),this;const r=i.position,s=i.normal,o=i.color,a=i.uv,c=i.uv2;c!==void 0&&(this.faceVertexUvs[1]=[]);for(let h=0;h<r.count;h++)e.vertices.push(new S().fromBufferAttribute(r,h)),o!==void 0&&e.colors.push(new ct().fromBufferAttribute(o,h));function l(h,d,u,p){const y=o===void 0?[]:[e.colors[h].clone(),e.colors[d].clone(),e.colors[u].clone()],v=s===void 0?[]:[new S().fromBufferAttribute(s,h),new S().fromBufferAttribute(s,d),new S().fromBufferAttribute(s,u)],g=new jr(h,d,u,v,y,p);e.faces.push(g),a!==void 0&&e.faceVertexUvs[0].push([new H().fromBufferAttribute(a,h),new H().fromBufferAttribute(a,d),new H().fromBufferAttribute(a,u)]),c!==void 0&&e.faceVertexUvs[1].push([new H().fromBufferAttribute(c,h),new H().fromBufferAttribute(c,d),new H().fromBufferAttribute(c,u)])}const f=t.groups;if(f.length>0)for(let h=0;h<f.length;h++){const d=f[h],u=d.start,p=d.count;for(let y=u,v=u+p;y<v;y+=3)n!==void 0?l(n.getX(y),n.getX(y+1),n.getX(y+2),d.materialIndex):l(y,y+1,y+2,d.materialIndex)}else if(n!==void 0)for(let h=0;h<n.count;h+=3)l(n.getX(h),n.getX(h+1),n.getX(h+2));else for(let h=0;h<r.count;h+=3)l(h,h+1,h+2);return this.computeFaceNormals(),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this},normalize:function(){this.computeBoundingSphere();const t=this.boundingSphere.center,e=this.boundingSphere.radius,n=e===0?1:1/e,i=new Mt;return i.set(n,0,0,-n*t.x,0,n,0,-n*t.y,0,0,n,-n*t.z,0,0,0,1),this.applyMatrix4(i),this},computeFaceNormals:function(){const t=new S,e=new S;for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n],s=this.vertices[r.a],o=this.vertices[r.b],a=this.vertices[r.c];t.subVectors(a,o),e.subVectors(s,o),t.cross(e),t.normalize(),r.normal.copy(t)}},computeVertexNormals:function(t=!0){const e=new Array(this.vertices.length);for(let n=0,i=this.vertices.length;n<i;n++)e[n]=new S;if(t){const n=new S,i=new S;for(let r=0,s=this.faces.length;r<s;r++){const o=this.faces[r],a=this.vertices[o.a],c=this.vertices[o.b],l=this.vertices[o.c];n.subVectors(l,c),i.subVectors(a,c),n.cross(i),e[o.a].add(n),e[o.b].add(n),e[o.c].add(n)}}else{this.computeFaceNormals();for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n];e[r.a].add(r.normal),e[r.b].add(r.normal),e[r.c].add(r.normal)}}for(let n=0,i=this.vertices.length;n<i;n++)e[n].normalize();for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n],s=r.vertexNormals;s.length===3?(s[0].copy(e[r.a]),s[1].copy(e[r.b]),s[2].copy(e[r.c])):(s[0]=e[r.a].clone(),s[1]=e[r.b].clone(),s[2]=e[r.c].clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){this.computeFaceNormals();for(let t=0,e=this.faces.length;t<e;t++){const n=this.faces[t],i=n.vertexNormals;i.length===3?(i[0].copy(n.normal),i[1].copy(n.normal),i[2].copy(n.normal)):(i[0]=n.normal.clone(),i[1]=n.normal.clone(),i[2]=n.normal.clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){for(let e=0,n=this.faces.length;e<n;e++){const i=this.faces[e];i.__originalFaceNormal?i.__originalFaceNormal.copy(i.normal):i.__originalFaceNormal=i.normal.clone(),i.__originalVertexNormals||(i.__originalVertexNormals=[]);for(let r=0,s=i.vertexNormals.length;r<s;r++)i.__originalVertexNormals[r]?i.__originalVertexNormals[r].copy(i.vertexNormals[r]):i.__originalVertexNormals[r]=i.vertexNormals[r].clone()}const t=new ge;t.faces=this.faces;for(let e=0,n=this.morphTargets.length;e<n;e++){if(!this.morphNormals[e]){this.morphNormals[e]={},this.morphNormals[e].faceNormals=[],this.morphNormals[e].vertexNormals=[];const r=this.morphNormals[e].faceNormals,s=this.morphNormals[e].vertexNormals;for(let o=0,a=this.faces.length;o<a;o++){const c=new S,l={a:new S,b:new S,c:new S};r.push(c),s.push(l)}}const i=this.morphNormals[e];t.vertices=this.morphTargets[e].vertices,t.computeFaceNormals(),t.computeVertexNormals();for(let r=0,s=this.faces.length;r<s;r++){const o=this.faces[r],a=i.faceNormals[r],c=i.vertexNormals[r];a.copy(o.normal),c.a.copy(o.vertexNormals[0]),c.b.copy(o.vertexNormals[1]),c.c.copy(o.vertexNormals[2])}}for(let e=0,n=this.faces.length;e<n;e++){const i=this.faces[e];i.normal=i.__originalFaceNormal,i.vertexNormals=i.__originalVertexNormals}},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new Ye),this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new Qe),this.boundingSphere.setFromPoints(this.vertices)},merge:function(t,e,n=0){if(!(t&&t.isGeometry)){console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",t);return}let i;const r=this.vertices.length,s=this.vertices,o=t.vertices,a=this.faces,c=t.faces,l=this.colors,f=t.colors;e!==void 0&&(i=new ie().getNormalMatrix(e));for(let h=0,d=o.length;h<d;h++){const p=o[h].clone();e!==void 0&&p.applyMatrix4(e),s.push(p)}for(let h=0,d=f.length;h<d;h++)l.push(f[h].clone());for(let h=0,d=c.length;h<d;h++){const u=c[h];let p,y;const v=u.vertexNormals,g=u.vertexColors,m=new jr(u.a+r,u.b+r,u.c+r);m.normal.copy(u.normal),i!==void 0&&m.normal.applyMatrix3(i).normalize();for(let T=0,E=v.length;T<E;T++)p=v[T].clone(),i!==void 0&&p.applyMatrix3(i).normalize(),m.vertexNormals.push(p);m.color.copy(u.color);for(let T=0,E=g.length;T<E;T++)y=g[T],m.vertexColors.push(y.clone());m.materialIndex=u.materialIndex+n,a.push(m)}for(let h=0,d=t.faceVertexUvs.length;h<d;h++){const u=t.faceVertexUvs[h];this.faceVertexUvs[h]===void 0&&(this.faceVertexUvs[h]=[]);for(let p=0,y=u.length;p<y;p++){const v=u[p],g=[];for(let m=0,T=v.length;m<T;m++)g.push(v[m].clone());this.faceVertexUvs[h].push(g)}}},mergeMesh:function(t){if(!(t&&t.isMesh)){console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",t);return}t.matrixAutoUpdate&&t.updateMatrix(),this.merge(t.geometry,t.matrix)},mergeVertices:function(t=4){const e={},n=[],i=[],r=Math.pow(10,t);for(let a=0,c=this.vertices.length;a<c;a++){const l=this.vertices[a],f=Math.round(l.x*r)+"_"+Math.round(l.y*r)+"_"+Math.round(l.z*r);e[f]===void 0?(e[f]=a,n.push(this.vertices[a]),i[a]=n.length-1):i[a]=i[e[f]]}const s=[];for(let a=0,c=this.faces.length;a<c;a++){const l=this.faces[a];l.a=i[l.a],l.b=i[l.b],l.c=i[l.c];const f=[l.a,l.b,l.c];for(let h=0;h<3;h++)if(f[h]===f[(h+1)%3]){s.push(a);break}}for(let a=s.length-1;a>=0;a--){const c=s[a];this.faces.splice(c,1);for(let l=0,f=this.faceVertexUvs.length;l<f;l++)this.faceVertexUvs[l].splice(c,1)}const o=this.vertices.length-n.length;return this.vertices=n,o},setFromPoints:function(t){this.vertices=[];for(let e=0,n=t.length;e<n;e++){const i=t[e];this.vertices.push(new S(i.x,i.y,i.z||0))}return this},sortFacesByMaterialIndex:function(){const t=this.faces,e=t.length;for(let a=0;a<e;a++)t[a]._id=a;function n(a,c){return a.materialIndex-c.materialIndex}t.sort(n);const i=this.faceVertexUvs[0],r=this.faceVertexUvs[1];let s,o;i&&i.length===e&&(s=[]),r&&r.length===e&&(o=[]);for(let a=0;a<e;a++){const c=t[a]._id;s&&s.push(i[c]),o&&o.push(r[c])}s&&(this.faceVertexUvs[0]=s),o&&(this.faceVertexUvs[1]=o)},toJSON:function(){const t={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.parameters!==void 0){const u=this.parameters;for(const p in u)u[p]!==void 0&&(t[p]=u[p]);return t}const e=[];for(let u=0;u<this.vertices.length;u++){const p=this.vertices[u];e.push(p.x,p.y,p.z)}const n=[],i=[],r={},s=[],o={},a=[],c={};for(let u=0;u<this.faces.length;u++){const p=this.faces[u],y=!0,v=!1,g=this.faceVertexUvs[0][u]!==void 0,m=p.normal.length()>0,T=p.vertexNormals.length>0,E=p.color.r!==1||p.color.g!==1||p.color.b!==1,w=p.vertexColors.length>0;let x=0;if(x=l(x,0,0),x=l(x,1,y),x=l(x,2,v),x=l(x,3,g),x=l(x,4,m),x=l(x,5,T),x=l(x,6,E),x=l(x,7,w),n.push(x),n.push(p.a,p.b,p.c),n.push(p.materialIndex),g){const A=this.faceVertexUvs[0][u];n.push(d(A[0]),d(A[1]),d(A[2]))}if(m&&n.push(f(p.normal)),T){const A=p.vertexNormals;n.push(f(A[0]),f(A[1]),f(A[2]))}if(E&&n.push(h(p.color)),w){const A=p.vertexColors;n.push(h(A[0]),h(A[1]),h(A[2]))}}function l(u,p,y){return y?u|1<<p:u&~(1<<p)}function f(u){const p=u.x.toString()+u.y.toString()+u.z.toString();return r[p]!==void 0||(r[p]=i.length/3,i.push(u.x,u.y,u.z)),r[p]}function h(u){const p=u.r.toString()+u.g.toString()+u.b.toString();return o[p]!==void 0||(o[p]=s.length,s.push(u.getHex())),o[p]}function d(u){const p=u.x.toString()+u.y.toString();return c[p]!==void 0||(c[p]=a.length/2,a.push(u.x,u.y)),c[p]}return t.data={},t.data.vertices=e,t.data.normals=i,s.length>0&&(t.data.colors=s),a.length>0&&(t.data.uvs=[a]),t.data.faces=n,t},clone:function(){return new ge().copy(this)},copy:function(t){this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.name=t.name;const e=t.vertices;for(let h=0,d=e.length;h<d;h++)this.vertices.push(e[h].clone());const n=t.colors;for(let h=0,d=n.length;h<d;h++)this.colors.push(n[h].clone());const i=t.faces;for(let h=0,d=i.length;h<d;h++)this.faces.push(i[h].clone());for(let h=0,d=t.faceVertexUvs.length;h<d;h++){const u=t.faceVertexUvs[h];this.faceVertexUvs[h]===void 0&&(this.faceVertexUvs[h]=[]);for(let p=0,y=u.length;p<y;p++){const v=u[p],g=[];for(let m=0,T=v.length;m<T;m++){const E=v[m];g.push(E.clone())}this.faceVertexUvs[h].push(g)}}const r=t.morphTargets;for(let h=0,d=r.length;h<d;h++){const u={};if(u.name=r[h].name,r[h].vertices!==void 0){u.vertices=[];for(let p=0,y=r[h].vertices.length;p<y;p++)u.vertices.push(r[h].vertices[p].clone())}if(r[h].normals!==void 0){u.normals=[];for(let p=0,y=r[h].normals.length;p<y;p++)u.normals.push(r[h].normals[p].clone())}this.morphTargets.push(u)}const s=t.morphNormals;for(let h=0,d=s.length;h<d;h++){const u={};if(s[h].vertexNormals!==void 0){u.vertexNormals=[];for(let p=0,y=s[h].vertexNormals.length;p<y;p++){const v=s[h].vertexNormals[p],g={};g.a=v.a.clone(),g.b=v.b.clone(),g.c=v.c.clone(),u.vertexNormals.push(g)}}if(s[h].faceNormals!==void 0){u.faceNormals=[];for(let p=0,y=s[h].faceNormals.length;p<y;p++)u.faceNormals.push(s[h].faceNormals[p].clone())}this.morphNormals.push(u)}const o=t.skinWeights;for(let h=0,d=o.length;h<d;h++)this.skinWeights.push(o[h].clone());const a=t.skinIndices;for(let h=0,d=a.length;h<d;h++)this.skinIndices.push(a[h].clone());const c=t.lineDistances;for(let h=0,d=c.length;h<d;h++)this.lineDistances.push(c[h]);const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const f=t.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.elementsNeedUpdate=t.elementsNeedUpdate,this.verticesNeedUpdate=t.verticesNeedUpdate,this.uvsNeedUpdate=t.uvsNeedUpdate,this.normalsNeedUpdate=t.normalsNeedUpdate,this.colorsNeedUpdate=t.colorsNeedUpdate,this.lineDistancesNeedUpdate=t.lineDistancesNeedUpdate,this.groupsNeedUpdate=t.groupsNeedUpdate,this},dispose:function(){this.dispatchEvent({type:"dispose"})}}),new S,new S,new S,new Qt;const of={triangulate:function(t,e,n){n=n||2;const i=e&&e.length,r=i?e[0]*n:t.length;let s=Zo(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,f,h,d,u;if(i&&(s=uf(t,e,s,n)),t.length>80*n){a=l=t[0],c=f=t[1];for(let p=n;p<r;p+=n)h=t[p],d=t[p+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>f&&(f=d);u=Math.max(l-a,f-c),u=u!==0?1/u:0}return Ei(s,o,n,a,c,u),o}};function Zo(t,e,n,i,r){let s,o;if(r===Mf(t,e,n,i)>0)for(s=e;s<n;s+=i)o=$o(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=$o(s,t[s],t[s+1],o);return o&&vr(o,o.next)&&(Li(o),o=o.next),o}function an(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(vr(n,n.next)||Vt(n.prev,n,n.next)===0)){if(Li(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Ei(t,e,n,i,r,s,o){if(!t)return;!o&&s&&gf(t,i,r,s);let a=t,c,l;for(;t.prev!==t.next;){if(c=t.prev,l=t.next,s?cf(t,i,r,s):af(t)){e.push(c.i/n),e.push(t.i/n),e.push(l.i/n),Li(t),t=l.next,a=l.next;continue}if(t=l,t===a){o?o===1?(t=lf(an(t),e,n),Ei(t,e,n,i,r,s,2)):o===2&&hf(t,e,n,i,r,s):Ei(an(t),e,n,i,r,s,1);break}}}function af(t){const e=t.prev,n=t,i=t.next;if(Vt(e,n,i)>=0)return!1;let r=t.next.next;for(;r!==t.prev;){if(Qn(e.x,e.y,n.x,n.y,i.x,i.y,r.x,r.y)&&Vt(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function cf(t,e,n,i){const r=t.prev,s=t,o=t.next;if(Vt(r,s,o)>=0)return!1;const a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,c=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,l=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,f=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,h=ps(a,c,e,n,i),d=ps(l,f,e,n,i);let u=t.prevZ,p=t.nextZ;for(;u&&u.z>=h&&p&&p.z<=d;){if(u!==t.prev&&u!==t.next&&Qn(r.x,r.y,s.x,s.y,o.x,o.y,u.x,u.y)&&Vt(u.prev,u,u.next)>=0||(u=u.prevZ,p!==t.prev&&p!==t.next&&Qn(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&Vt(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;u&&u.z>=h;){if(u!==t.prev&&u!==t.next&&Qn(r.x,r.y,s.x,s.y,o.x,o.y,u.x,u.y)&&Vt(u.prev,u,u.next)>=0)return!1;u=u.prevZ}for(;p&&p.z<=d;){if(p!==t.prev&&p!==t.next&&Qn(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&Vt(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function lf(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!vr(r,s)&&Jo(r,i,i.next,s)&&Ai(r,s)&&Ai(s,r)&&(e.push(r.i/n),e.push(i.i/n),e.push(s.i/n),Li(i),Li(i.next),i=t=s),i=i.next}while(i!==t);return an(i)}function hf(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&xf(o,a)){let c=Qo(o,a);o=an(o,o.next),c=an(c,c.next),Ei(o,e,n,i,r,s),Ei(c,e,n,i,r,s);return}a=a.next}o=o.next}while(o!==t)}function uf(t,e,n,i){const r=[];let s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*i,c=s<o-1?e[s+1]*i:t.length,l=Zo(t,a,c,i,!1),l===l.next&&(l.steiner=!0),r.push(vf(l));for(r.sort(ff),s=0;s<r.length;s++)df(r[s],n),n=an(n,n.next);return n}function ff(t,e){return t.x-e.x}function df(t,e){if(e=pf(t,e),e){const n=Qo(e,t);an(e,e.next),an(n,n.next)}}function pf(t,e){let n=e;const i=t.x,r=t.y;let s=-1/0,o;do{if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){const d=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=i&&d>s){if(s=d,d===i){if(r===n.y)return n;if(r===n.next.y)return n.next}o=n.x<n.next.x?n:n.next}}n=n.next}while(n!==e);if(!o)return null;if(i===s)return o;const a=o,c=o.x,l=o.y;let f=1/0,h;n=o;do i>=n.x&&n.x>=c&&i!==n.x&&Qn(r<l?i:s,r,c,l,r<l?s:i,r,n.x,n.y)&&(h=Math.abs(r-n.y)/(i-n.x),Ai(n,t)&&(h<f||h===f&&(n.x>o.x||n.x===o.x&&mf(o,n)))&&(o=n,f=h)),n=n.next;while(n!==a);return o}function mf(t,e){return Vt(t.prev,t,e.prev)<0&&Vt(e.next,t,t.next)<0}function gf(t,e,n,i){let r=t;do r.z===null&&(r.z=ps(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,yf(r)}function yf(t){let e,n,i,r,s,o,a,c,l=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,c--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,l*=2}while(o>1);return t}function ps(t,e,n,i,r){return t=32767*(t-n)*r,e=32767*(e-i)*r,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function vf(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Qn(t,e,n,i,r,s,o,a){return(r-o)*(e-a)-(t-o)*(s-a)>=0&&(t-o)*(i-a)-(n-o)*(e-a)>=0&&(n-o)*(s-a)-(r-o)*(i-a)>=0}function xf(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!_f(t,e)&&(Ai(t,e)&&Ai(e,t)&&bf(t,e)&&(Vt(t.prev,t,e.prev)||Vt(t,e.prev,e))||vr(t,e)&&Vt(t.prev,t,t.next)>0&&Vt(e.prev,e,e.next)>0)}function Vt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function vr(t,e){return t.x===e.x&&t.y===e.y}function Jo(t,e,n,i){const r=_r(Vt(t,e,n)),s=_r(Vt(t,e,i)),o=_r(Vt(n,i,t)),a=_r(Vt(n,i,e));return!!(r!==s&&o!==a||r===0&&xr(t,n,e)||s===0&&xr(t,i,e)||o===0&&xr(n,t,i)||a===0&&xr(n,e,i))}function xr(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function _r(t){return t>0?1:t<0?-1:0}function _f(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Jo(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Ai(t,e){return Vt(t.prev,t,t.next)<0?Vt(t,e,t.next)>=0&&Vt(t,t.prev,e)>=0:Vt(t,e,t.prev)<0||Vt(t,t.next,e)<0}function bf(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Qo(t,e){const n=new ms(t.i,t.x,t.y),i=new ms(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function $o(t,e,n,i){const r=new ms(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Li(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function ms(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Mf(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}const cn={area:function(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5},isClockWise:function(t){return cn.area(t)<0},triangulateShape:function(t,e){const n=[],i=[],r=[];Ko(t),ta(n,t);let s=t.length;e.forEach(Ko);for(let a=0;a<e.length;a++)i.push(s),s+=e[a].length,ta(n,e[a]);const o=of.triangulate(n,i);for(let a=0;a<o.length;a+=3)r.push(o.slice(a,a+3));return r}};function Ko(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function ta(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class ea extends Dt{constructor(e,n){super(),this.type="ExtrudeBufferGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Pt(r,3)),this.setAttribute("uv",new Pt(s,2)),this.computeVertexNormals();function o(a){const c=[],l=n.curveSegments!==void 0?n.curveSegments:12,f=n.steps!==void 0?n.steps:1;let h=n.depth!==void 0?n.depth:100,d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,u=n.bevelThickness!==void 0?n.bevelThickness:6,p=n.bevelSize!==void 0?n.bevelSize:u-2,y=n.bevelOffset!==void 0?n.bevelOffset:0,v=n.bevelSegments!==void 0?n.bevelSegments:3;const g=n.extrudePath,m=n.UVGenerator!==void 0?n.UVGenerator:wf;n.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=n.amount);let T,E=!1,w,x,A,O;g&&(T=g.getSpacedPoints(f),E=!0,d=!1,w=g.computeFrenetFrames(f,!1),x=new S,A=new S,O=new S),d||(v=0,u=0,p=0,y=0);const I=a.extractPoints(l);let et=I.shape;const P=I.holes;if(!cn.isClockWise(et)){et=et.reverse();for(let W=0,Y=P.length;W<Y;W++){const Q=P[W];cn.isClockWise(Q)&&(P[W]=Q.reverse())}}const N=cn.triangulateShape(et,P),R=et;for(let W=0,Y=P.length;W<Y;W++){const Q=P[W];et=et.concat(Q)}function C(W,Y,Q){return Y||console.error("THREE.ExtrudeGeometry: vec does not exist"),Y.clone().multiplyScalar(Q).add(W)}const B=et.length,k=N.length;function X(W,Y,Q){let ht,nt,M;const b=W.x-Y.x,j=W.y-Y.y,V=Q.x-W.x,L=Q.y-W.y,q=b*b+j*j,tt=b*L-j*V;if(Math.abs(tt)>Number.EPSILON){const at=Math.sqrt(q),J=Math.sqrt(V*V+L*L),ot=Y.x-j/at,ut=Y.y+b/at,_t=Q.x-L/J,st=Q.y+V/J,mt=((_t-ot)*L-(st-ut)*V)/(b*L-j*V);ht=ot+b*mt-W.x,nt=ut+j*mt-W.y;const Wt=ht*ht+nt*nt;if(Wt<=2)return new H(ht,nt);M=Math.sqrt(Wt/2)}else{let at=!1;b>Number.EPSILON?V>Number.EPSILON&&(at=!0):b<-Number.EPSILON?V<-Number.EPSILON&&(at=!0):Math.sign(j)===Math.sign(L)&&(at=!0),at?(ht=-j,nt=b,M=Math.sqrt(q)):(ht=b,nt=j,M=Math.sqrt(q/2))}return new H(ht/M,nt/M)}const K=[];for(let W=0,Y=R.length,Q=Y-1,ht=W+1;W<Y;W++,Q++,ht++)Q===Y&&(Q=0),ht===Y&&(ht=0),K[W]=X(R[W],R[Q],R[ht]);const rt=[];let it,vt=K.concat();for(let W=0,Y=P.length;W<Y;W++){const Q=P[W];it=[];for(let ht=0,nt=Q.length,M=nt-1,b=ht+1;ht<nt;ht++,M++,b++)M===nt&&(M=0),b===nt&&(b=0),it[ht]=X(Q[ht],Q[M],Q[b]);rt.push(it),vt=vt.concat(it)}for(let W=0;W<v;W++){const Y=W/v,Q=u*Math.cos(Y*Math.PI/2),ht=p*Math.sin(Y*Math.PI/2)+y;for(let nt=0,M=R.length;nt<M;nt++){const b=C(R[nt],K[nt],ht);dt(b.x,b.y,-Q)}for(let nt=0,M=P.length;nt<M;nt++){const b=P[nt];it=rt[nt];for(let j=0,V=b.length;j<V;j++){const L=C(b[j],it[j],ht);dt(L.x,L.y,-Q)}}}const wt=p+y;for(let W=0;W<B;W++){const Y=d?C(et[W],vt[W],wt):et[W];E?(A.copy(w.normals[0]).multiplyScalar(Y.x),x.copy(w.binormals[0]).multiplyScalar(Y.y),O.copy(T[0]).add(A).add(x),dt(O.x,O.y,O.z)):dt(Y.x,Y.y,0)}for(let W=1;W<=f;W++)for(let Y=0;Y<B;Y++){const Q=d?C(et[Y],vt[Y],wt):et[Y];E?(A.copy(w.normals[W]).multiplyScalar(Q.x),x.copy(w.binormals[W]).multiplyScalar(Q.y),O.copy(T[W]).add(A).add(x),dt(O.x,O.y,O.z)):dt(Q.x,Q.y,h/f*W)}for(let W=v-1;W>=0;W--){const Y=W/v,Q=u*Math.cos(Y*Math.PI/2),ht=p*Math.sin(Y*Math.PI/2)+y;for(let nt=0,M=R.length;nt<M;nt++){const b=C(R[nt],K[nt],ht);dt(b.x,b.y,h+Q)}for(let nt=0,M=P.length;nt<M;nt++){const b=P[nt];it=rt[nt];for(let j=0,V=b.length;j<V;j++){const L=C(b[j],it[j],ht);E?dt(L.x,L.y+T[f-1].y,T[f-1].x+Q):dt(L.x,L.y,h+Q)}}}kt(),G();function kt(){const W=r.length/3;if(d){let Y=0,Q=B*Y;for(let ht=0;ht<k;ht++){const nt=N[ht];Rt(nt[2]+Q,nt[1]+Q,nt[0]+Q)}Y=f+v*2,Q=B*Y;for(let ht=0;ht<k;ht++){const nt=N[ht];Rt(nt[0]+Q,nt[1]+Q,nt[2]+Q)}}else{for(let Y=0;Y<k;Y++){const Q=N[Y];Rt(Q[2],Q[1],Q[0])}for(let Y=0;Y<k;Y++){const Q=N[Y];Rt(Q[0]+B*f,Q[1]+B*f,Q[2]+B*f)}}i.addGroup(W,r.length/3-W,0)}function G(){const W=r.length/3;let Y=0;ee(R,Y),Y+=R.length;for(let Q=0,ht=P.length;Q<ht;Q++){const nt=P[Q];ee(nt,Y),Y+=nt.length}i.addGroup(W,r.length/3-W,1)}function ee(W,Y){let Q=W.length;for(;--Q>=0;){const ht=Q;let nt=Q-1;nt<0&&(nt=W.length-1);for(let M=0,b=f+v*2;M<b;M++){const j=B*M,V=B*(M+1),L=Y+ht+j,q=Y+nt+j,tt=Y+nt+V,at=Y+ht+V;xt(L,q,tt,at)}}}function dt(W,Y,Q){c.push(W),c.push(Y),c.push(Q)}function Rt(W,Y,Q){It(W),It(Y),It(Q);const ht=r.length/3,nt=m.generateTopUV(i,r,ht-3,ht-2,ht-1);Et(nt[0]),Et(nt[1]),Et(nt[2])}function xt(W,Y,Q,ht){It(W),It(Y),It(ht),It(Y),It(Q),It(ht);const nt=r.length/3,M=m.generateSideWallUV(i,r,nt-6,nt-3,nt-2,nt-1);Et(M[0]),Et(M[1]),Et(M[3]),Et(M[1]),Et(M[2]),Et(M[3])}function It(W){r.push(c[W*3+0]),r.push(c[W*3+1]),r.push(c[W*3+2])}function Et(W){s.push(W.x),s.push(W.y)}}}toJSON(){const e=Dt.prototype.toJSON.call(this),n=this.parameters.shapes,i=this.parameters.options;return Sf(n,i,e)}}const wf={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],f=e[r*3+1];return[new H(s,o),new H(a,c),new H(l,f)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],c=e[n*3+2],l=e[i*3],f=e[i*3+1],h=e[i*3+2],d=e[r*3],u=e[r*3+1],p=e[r*3+2],y=e[s*3],v=e[s*3+1],g=e[s*3+2];return Math.abs(a-f)<.01?[new H(o,1-c),new H(l,1-h),new H(d,1-p),new H(y,1-g)]:[new H(a,1-c),new H(f,1-h),new H(u,1-p),new H(v,1-g)]}};function Sf(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class Tf extends ge{constructor(e,n){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},this.fromBufferGeometry(new ea(e,n)),this.mergeVertices()}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return Ef(n,i,e)}}function Ef(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}function br(t,e,n){Dt.call(this),this.type="ParametricBufferGeometry",this.parameters={func:t,slices:e,stacks:n};const i=[],r=[],s=[],o=[],a=1e-5,c=new S,l=new S,f=new S,h=new S,d=new S;t.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");const u=e+1;for(let p=0;p<=n;p++){const y=p/n;for(let v=0;v<=e;v++){const g=v/e;t(g,y,l),r.push(l.x,l.y,l.z),g-a>=0?(t(g-a,y,f),h.subVectors(l,f)):(t(g+a,y,f),h.subVectors(f,l)),y-a>=0?(t(g,y-a,f),d.subVectors(l,f)):(t(g,y+a,f),d.subVectors(f,l)),c.crossVectors(h,d).normalize(),s.push(c.x,c.y,c.z),o.push(g,y)}}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const v=p*u+y,g=p*u+y+1,m=(p+1)*u+y+1,T=(p+1)*u+y;i.push(v,g,T),i.push(g,m,T)}this.setIndex(i),this.setAttribute("position",new Pt(r,3)),this.setAttribute("normal",new Pt(s,3)),this.setAttribute("uv",new Pt(o,2))}br.prototype=Object.create(Dt.prototype),br.prototype.constructor=br;function gs(t,e,n){ge.call(this),this.type="ParametricGeometry",this.parameters={func:t,slices:e,stacks:n},this.fromBufferGeometry(new br(t,e,n)),this.mergeVertices()}gs.prototype=Object.create(ge.prototype),gs.prototype.constructor=gs;class Af extends Dt{constructor(e,n=12){super(),this.type="ShapeBufferGeometry",this.parameters={shapes:e,curveSegments:n};const i=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let f=0;f<e.length;f++)l(e[f]),this.addGroup(a,c,f),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Pt(r,3)),this.setAttribute("normal",new Pt(s,3)),this.setAttribute("uv",new Pt(o,2));function l(f){const h=r.length/3,d=f.extractPoints(n);let u=d.shape;const p=d.holes;cn.isClockWise(u)===!1&&(u=u.reverse());for(let v=0,g=p.length;v<g;v++){const m=p[v];cn.isClockWise(m)===!0&&(p[v]=m.reverse())}const y=cn.triangulateShape(u,p);for(let v=0,g=p.length;v<g;v++){const m=p[v];u=u.concat(m)}for(let v=0,g=u.length;v<g;v++){const m=u[v];r.push(m.x,m.y,0),s.push(0,0,1),o.push(m.x,m.y)}for(let v=0,g=y.length;v<g;v++){const m=y[v],T=m[0]+h,E=m[1]+h,w=m[2]+h;i.push(T,E,w),c+=3}}}toJSON(){const e=Dt.prototype.toJSON.call(this),n=this.parameters.shapes;return Lf(n,e)}}function Lf(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}class Cf extends ge{constructor(e,n){super(),this.type="ShapeGeometry",typeof n=="object"&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),n=n.curveSegments),this.parameters={shapes:e,curveSegments:n},this.fromBufferGeometry(new Af(e,n)),this.mergeVertices()}toJSON(){const e=ge.prototype.toJSON.call(this),n=this.parameters.shapes;return Rf(n,e)}}function Rf(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}function $n(t){pt.call(this),this.type="ShadowMaterial",this.color=new ct(0),this.transparent=!0,this.setValues(t)}$n.prototype=Object.create(pt.prototype),$n.prototype.constructor=$n,$n.prototype.isShadowMaterial=!0,$n.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.color.copy(t.color),this};function Ci(t){re.call(this,t),this.type="RawShaderMaterial"}Ci.prototype=Object.create(re.prototype),Ci.prototype.constructor=Ci,Ci.prototype.isRawShaderMaterial=!0;function He(t){pt.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.vertexTangents=!1,this.setValues(t)}He.prototype=Object.create(pt.prototype),He.prototype.constructor=He,He.prototype.isMeshStandardMaterial=!0,He.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.vertexTangents=t.vertexTangents,this};function Mn(t){He.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new H(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(e){this.reflectivity=yt.clamp(2.5*(e-1)/(e+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(t)}Mn.prototype=Object.create(He.prototype),Mn.prototype.constructor=Mn,Mn.prototype.isMeshPhysicalMaterial=!0,Mn.prototype.copy=function(t){return He.prototype.copy.call(this,t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.reflectivity=t.reflectivity,t.sheen?this.sheen=(this.sheen||new ct).copy(t.sheen):this.sheen=null,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this};function wn(t){pt.call(this),this.type="MeshPhongMaterial",this.color=new ct(16777215),this.specular=new ct(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}wn.prototype=Object.create(pt.prototype),wn.prototype.constructor=wn,wn.prototype.isMeshPhongMaterial=!0,wn.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function Kn(t){pt.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ct(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}Kn.prototype=Object.create(pt.prototype),Kn.prototype.constructor=Kn,Kn.prototype.isMeshToonMaterial=!0,Kn.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function ti(t){pt.call(this),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}ti.prototype=Object.create(pt.prototype),ti.prototype.constructor=ti,ti.prototype.isMeshNormalMaterial=!0,ti.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function ei(t){pt.call(this),this.type="MeshLambertMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}ei.prototype=Object.create(pt.prototype),ei.prototype.constructor=ei,ei.prototype.isMeshLambertMaterial=!0,ei.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function ni(t){pt.call(this),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ct(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}ni.prototype=Object.create(pt.prototype),ni.prototype.constructor=ni,ni.prototype.isMeshMatcapMaterial=!0,ni.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function ii(t){me.call(this),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}ii.prototype=Object.create(me.prototype),ii.prototype.constructor=ii,ii.prototype.isLineDashedMaterial=!0,ii.prototype.copy=function(t){return me.prototype.copy.call(this,t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this};var Pf=Object.freeze({__proto__:null,ShadowMaterial:$n,SpriteMaterial:_n,RawShaderMaterial:Ci,ShaderMaterial:re,PointsMaterial:bn,MeshPhysicalMaterial:Mn,MeshStandardMaterial:He,MeshPhongMaterial:wn,MeshToonMaterial:Kn,MeshNormalMaterial:ti,MeshLambertMaterial:ei,MeshDepthMaterial:gn,MeshDistanceMaterial:yn,MeshBasicMaterial:dn,MeshMatcapMaterial:ni,LineDashedMaterial:ii,LineBasicMaterial:me,Material:pt});const Ht={arraySlice:function(t,e,n){return Ht.isTypedArray(t)?new t.constructor(t.subarray(e,n!==void 0?n:t.length)):t.slice(e,n)},convertArray:function(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)},isTypedArray:function(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)},getKeyframeOrder:function(t){function e(r,s){return t[r]-t[s]}const n=t.length,i=new Array(n);for(let r=0;r!==n;++r)i[r]=r;return i.sort(e),i},sortedArray:function(t,e,n){const i=t.length,r=new t.constructor(i);for(let s=0,o=0;o!==i;++s){const a=n[s]*e;for(let c=0;c!==e;++c)r[o++]=t[a+c]}return r},flattenJSON:function(t,e,n,i){let r=1,s=t[0];for(;s!==void 0&&s[i]===void 0;)s=t[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),n.push.apply(n,o)),s=t[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(n,n.length)),s=t[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),n.push(o)),s=t[r++];while(s!==void 0)},subclip:function(t,e,n,i,r=30){const s=t.clone();s.name=e;const o=[];for(let c=0;c<s.tracks.length;++c){const l=s.tracks[c],f=l.getValueSize(),h=[],d=[];for(let u=0;u<l.times.length;++u){const p=l.times[u]*r;if(!(p<n||p>=i)){h.push(l.times[u]);for(let y=0;y<f;++y)d.push(l.values[u*f+y])}}h.length!==0&&(l.times=Ht.convertArray(h,l.times.constructor),l.values=Ht.convertArray(d,l.values.constructor),o.push(l))}s.tracks=o;let a=1/0;for(let c=0;c<s.tracks.length;++c)a>s.tracks[c].times[0]&&(a=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(t,e=0,n=t,i=30){i<=0&&(i=30);const r=n.tracks.length,s=e/i;for(let o=0;o<r;++o){const a=n.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=t.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===c});if(l===void 0)continue;let f=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=h/3);let d=0;const u=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=u/3);const p=a.times.length-1;let y;if(s<=a.times[0]){const g=f,m=h-f;y=Ht.arraySlice(a.values,g,m)}else if(s>=a.times[p]){const g=p*h+f,m=g+h-f;y=Ht.arraySlice(a.values,g,m)}else{const g=a.createInterpolant(),m=f,T=h-f;g.evaluate(s),y=Ht.arraySlice(g.resultBuffer,m,T)}c==="quaternion"&&new ae().fromArray(y).normalize().conjugate().toArray(y);const v=l.times.length;for(let g=0;g<v;++g){const m=g*u+d;if(c==="quaternion")ae.multiplyQuaternionsFlat(l.values,m,y,0,l.values,m);else{const T=u-d*2;for(let E=0;E<T;++E)l.values[m+E]-=y[E]}}}return t.blendMode=2501,t}};function ye(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n}Object.assign(ye.prototype,{evaluate:function(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let s;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,t,r)}if(n===o)break;if(r=i,i=e[++n],t<i)break e}s=e.length;break n}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let a=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(n===a)break;if(i=r,r=e[--n-1],t>=r)break e}s=n,n=0;break n}break t}for(;n<s;){const o=n+s>>>1;t<e[o]?s=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(i===void 0)return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,r,t)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let s=0;s!==i;++s)e[s]=n[r+s];return e},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}}),Object.assign(ye.prototype,{beforeStart_:ye.prototype.copySampleValue_,afterEnd_:ye.prototype.copySampleValue_});function ys(t,e,n,i){ye.call(this,t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}ys.prototype=Object.assign(Object.create(ye.prototype),{constructor:ys,DefaultSettings_:{endingStart:2400,endingEnd:2400},intervalChanged_:function(t,e,n){const i=this.parameterPositions;let r=t-2,s=t+1,o=i[r],a=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case 2401:r=t,o=2*e-n;break;case 2402:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(a===void 0)switch(this.getSettings_().endingEnd){case 2401:s=t,a=2*n-e;break;case 2402:s=1,a=n+i[1]-i[0];break;default:s=t-1,a=e}const c=(n-e)*.5,l=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(a-n),this._offsetPrev=r*l,this._offsetNext=s*l},interpolate_:function(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=t*o,c=a-o,l=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,u=(n-e)/(i-e),p=u*u,y=p*u,v=-h*y+2*h*p-h*u,g=(1+h)*y+(-1.5-2*h)*p+(-.5+h)*u+1,m=(-1-d)*y+(1.5+d)*p+.5*u,T=d*y-d*p;for(let E=0;E!==o;++E)r[E]=v*s[l+E]+g*s[c+E]+m*s[a+E]+T*s[f+E];return r}});function Mr(t,e,n,i){ye.call(this,t,e,n,i)}Mr.prototype=Object.assign(Object.create(ye.prototype),{constructor:Mr,interpolate_:function(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=t*o,c=a-o,l=(n-e)/(i-e),f=1-l;for(let h=0;h!==o;++h)r[h]=s[c+h]*f+s[a+h]*l;return r}});function vs(t,e,n,i){ye.call(this,t,e,n,i)}vs.prototype=Object.assign(Object.create(ye.prototype),{constructor:vs,interpolate_:function(t){return this.copySampleValue_(t-1)}});function te(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ht.convertArray(e,this.TimeBufferType),this.values=Ht.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}Object.assign(te,{toJSON:function(t){const e=t.constructor;let n;if(e.toJSON!==void 0)n=e.toJSON(t);else{n={name:t.name,times:Ht.convertArray(t.times,Array),values:Ht.convertArray(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}}),Object.assign(te.prototype,{constructor:te,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:2301,InterpolantFactoryMethodDiscrete:function(t){return new vs(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodLinear:function(t){return new Mr(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:function(t){return new ys(this.times,this.values,this.getValueSize(),t)},setInterpolation:function(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}},getValueSize:function(){return this.values.length/this.times.length},shift:function(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this},scale:function(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this},trim:function(t,e){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<t;)++r;for(;s!==-1&&n[s]>e;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const o=this.getValueSize();this.times=Ht.arraySlice(n,r,s),this.values=Ht.arraySlice(this.values,r*o,s*o)}return this},validate:function(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let o=0;o!==r;o++){const a=n[o];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,a),t=!1;break}if(s!==null&&s>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,a,s),t=!1;break}s=a}if(i!==void 0&&Ht.isTypedArray(i))for(let o=0,a=i.length;o!==a;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t},optimize:function(){const t=Ht.arraySlice(this.times),e=Ht.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===2302,r=t.length-1;let s=1;for(let o=1;o<r;++o){let a=!1;const c=t[o],l=t[o+1];if(c!==l&&(o!==1||c!==c[0]))if(i)a=!0;else{const f=o*n,h=f-n,d=f+n;for(let u=0;u!==n;++u){const p=e[f+u];if(p!==e[h+u]||p!==e[d+u]){a=!0;break}}}if(a){if(o!==s){t[s]=t[o];const f=o*n,h=s*n;for(let d=0;d!==n;++d)e[h+d]=e[f+d]}++s}}if(r>0){t[s]=t[r];for(let o=r*n,a=s*n,c=0;c!==n;++c)e[a+c]=e[o+c];++s}return s!==t.length?(this.times=Ht.arraySlice(t,0,s),this.values=Ht.arraySlice(e,0,s*n)):(this.times=t,this.values=e),this},clone:function(){const t=Ht.arraySlice(this.times,0),e=Ht.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}});function xs(t,e,n){te.call(this,t,e,n)}xs.prototype=Object.assign(Object.create(te.prototype),{constructor:xs,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function _s(t,e,n,i){te.call(this,t,e,n,i)}_s.prototype=Object.assign(Object.create(te.prototype),{constructor:_s,ValueTypeName:"color"});function Ri(t,e,n,i){te.call(this,t,e,n,i)}Ri.prototype=Object.assign(Object.create(te.prototype),{constructor:Ri,ValueTypeName:"number"});function bs(t,e,n,i){ye.call(this,t,e,n,i)}bs.prototype=Object.assign(Object.create(ye.prototype),{constructor:bs,interpolate_:function(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(n-e)/(i-e);let c=t*o;for(let l=c+o;c!==l;c+=4)ae.slerpFlat(r,0,s,c-o,s,c,a);return r}});function wr(t,e,n,i){te.call(this,t,e,n,i)}wr.prototype=Object.assign(Object.create(te.prototype),{constructor:wr,ValueTypeName:"quaternion",DefaultInterpolation:2301,InterpolantFactoryMethodLinear:function(t){return new bs(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:void 0});function Ms(t,e,n,i){te.call(this,t,e,n,i)}Ms.prototype=Object.assign(Object.create(te.prototype),{constructor:Ms,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function Pi(t,e,n,i){te.call(this,t,e,n,i)}Pi.prototype=Object.assign(Object.create(te.prototype),{constructor:Pi,ValueTypeName:"vector"});function we(t,e=-1,n,i=2500){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=yt.generateUUID(),this.duration<0&&this.resetDuration()}function If(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ri;case"vector":case"vector2":case"vector3":case"vector4":return Pi;case"color":return _s;case"quaternion":return wr;case"bool":case"boolean":return xs;case"string":return Ms}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}function Df(t){if(t.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=If(t.type);if(t.times===void 0){const n=[],i=[];Ht.flattenJSON(t.keys,n,i,"value"),t.times=n,t.values=i}return e.parse!==void 0?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}Object.assign(we,{parse:function(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let s=0,o=n.length;s!==o;++s)e.push(Df(n[s]).scale(i));const r=new we(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r},toJSON:function(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,s=n.length;r!==s;++r)e.push(te.toJSON(n[r]));return i},CreateFromMorphTargetSequence:function(t,e,n,i){const r=e.length,s=[];for(let o=0;o<r;o++){let a=[],c=[];a.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const l=Ht.getKeyframeOrder(a);a=Ht.sortedArray(a,1,l),c=Ht.sortedArray(c,1,l),!i&&a[0]===0&&(a.push(r),c.push(c[0])),s.push(new Ri(".morphTargetInfluences["+e[o].name+"]",a,c).scale(1/n))}return new we(t,-1,s)},findByName:function(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null},CreateClipsFromMorphTargetSequences:function(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,a=t.length;o<a;o++){const c=t[o],l=c.name.match(r);if(l&&l.length>1){const f=l[1];let h=i[f];h||(i[f]=h=[]),h.push(c)}}const s=[];for(const o in i)s.push(we.CreateFromMorphTargetSequence(o,i[o],e,n));return s},parseAnimation:function(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,d,u,p){if(d.length!==0){const y=[],v=[];Ht.flattenJSON(d,y,v,u),y.length!==0&&p.push(new f(h,y,v))}},i=[],r=t.name||"default",s=t.fps||30,o=t.blendMode;let a=t.length||-1;const c=t.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let u;for(u=0;u<h.length;u++)if(h[u].morphTargets)for(let p=0;p<h[u].morphTargets.length;p++)d[h[u].morphTargets[p]]=-1;for(const p in d){const y=[],v=[];for(let g=0;g!==h[u].morphTargets.length;++g){const m=h[u];y.push(m.time),v.push(m.morphTarget===p?1:0)}i.push(new Ri(".morphTargetInfluence["+p+"]",y,v))}a=d.length*s}else{const d=".bones["+e[f].name+"]";n(Pi,d+".position",h,"pos",i),n(wr,d+".quaternion",h,"rot",i),n(Pi,d+".scale",h,"scl",i)}}return i.length===0?null:new we(r,a,i,o)}}),Object.assign(we.prototype,{resetDuration:function(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this},trim:function(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this},validate:function(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t},optimize:function(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this},clone:function(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new we(this.name,this.duration,t,this.blendMode)},toJSON:function(){return we.toJSON(this)}});const ri={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function Nf(t,e,n){const i=this;let r=!1,s=0,o=0,a;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(l){o++,r===!1&&i.onStart!==void 0&&i.onStart(l,s,o),r=!0},this.itemEnd=function(l){s++,i.onProgress!==void 0&&i.onProgress(l,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return a?a(l):l},this.setURLModifier=function(l){return a=l,this},this.addHandler=function(l,f){return c.push(l,f),this},this.removeHandler=function(l){const f=c.indexOf(l);return f!==-1&&c.splice(f,2),this},this.getHandler=function(l){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],u=c[f+1];if(d.global&&(d.lastIndex=0),d.test(l))return u}return null}}const Ff=new Nf;function Ft(t){this.manager=t!==void 0?t:Ff,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}Object.assign(Ft.prototype,{load:function(){},loadAsync:function(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})},parse:function(){},setCrossOrigin:function(t){return this.crossOrigin=t,this},setWithCredentials:function(t){return this.withCredentials=t,this},setPath:function(t){return this.path=t,this},setResourcePath:function(t){return this.resourcePath=t,this},setRequestHeader:function(t){return this.requestHeader=t,this}});const Se={};function Ve(t){Ft.call(this,t)}Ve.prototype=Object.assign(Object.create(Ft.prototype),{constructor:Ve,load:function(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=ri.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;if(Se[t]!==void 0){Se[t].push({onLoad:e,onProgress:n,onError:i});return}const o=/^data:(.*?)(;base64)?,(.*)$/,a=t.match(o);let c;if(a){const l=a[1],f=!!a[2];let h=a[3];h=decodeURIComponent(h),f&&(h=atob(h));try{let d;const u=(this.responseType||"").toLowerCase();switch(u){case"arraybuffer":case"blob":const p=new Uint8Array(h.length);for(let v=0;v<h.length;v++)p[v]=h.charCodeAt(v);u==="blob"?d=new Blob([p.buffer],{type:l}):d=p.buffer;break;case"document":d=new DOMParser().parseFromString(h,l);break;case"json":d=JSON.parse(h);break;default:d=h;break}setTimeout(function(){e&&e(d),r.manager.itemEnd(t)},0)}catch(d){setTimeout(function(){i&&i(d),r.manager.itemError(t),r.manager.itemEnd(t)},0)}}else{Se[t]=[],Se[t].push({onLoad:e,onProgress:n,onError:i}),c=new XMLHttpRequest,c.open("GET",t,!0),c.addEventListener("load",function(l){const f=this.response,h=Se[t];if(delete Se[t],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),ri.add(t,f);for(let d=0,u=h.length;d<u;d++){const p=h[d];p.onLoad&&p.onLoad(f)}r.manager.itemEnd(t)}else{for(let d=0,u=h.length;d<u;d++){const p=h[d];p.onError&&p.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)}},!1),c.addEventListener("progress",function(l){const f=Se[t];for(let h=0,d=f.length;h<d;h++){const u=f[h];u.onProgress&&u.onProgress(l)}},!1),c.addEventListener("error",function(l){const f=Se[t];delete Se[t];for(let h=0,d=f.length;h<d;h++){const u=f[h];u.onError&&u.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)},!1),c.addEventListener("abort",function(l){const f=Se[t];delete Se[t];for(let h=0,d=f.length;h<d;h++){const u=f[h];u.onError&&u.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const l in this.requestHeader)c.setRequestHeader(l,this.requestHeader[l]);c.send(null)}return r.manager.itemStart(t),c},setResponseType:function(t){return this.responseType=t,this},setMimeType:function(t){return this.mimeType=t,this}});function na(t){Ft.call(this,t)}na.prototype=Object.assign(Object.create(Ft.prototype),{constructor:na,load:function(t,e,n,i){const r=this,s=new Ve(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)},parse:function(t){const e=[];for(let n=0;n<t.length;n++){const i=we.parse(t[n]);e.push(i)}return e}});function ia(t){Ft.call(this,t)}ia.prototype=Object.assign(Object.create(Ft.prototype),{constructor:ia,load:function(t,e,n,i){const r=this,s=[],o=new Ti,a=new Ve(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(r.withCredentials);let c=0;function l(f){a.load(t[f],function(h){const d=r.parse(h,!0);s[f]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},c+=1,c===6&&(d.mipmapCount===1&&(o.minFilter=1006),o.image=s,o.format=d.format,o.needsUpdate=!0,e&&e(o))},n,i)}if(Array.isArray(t))for(let f=0,h=t.length;f<h;++f)l(f);else a.load(t,function(f){const h=r.parse(f,!0);if(h.isCubemap){const d=h.mipmaps.length/h.mipmapCount;for(let u=0;u<d;u++){s[u]={mipmaps:[]};for(let p=0;p<h.mipmapCount;p++)s[u].mipmaps.push(h.mipmaps[u*h.mipmapCount+p]),s[u].format=h.format,s[u].width=h.width,s[u].height=h.height}o.image=s}else o.image.width=h.width,o.image.height=h.height,o.mipmaps=h.mipmaps;h.mipmapCount===1&&(o.minFilter=1006),o.format=h.format,o.needsUpdate=!0,e&&e(o)},n,i);return o}});function Sr(t){Ft.call(this,t)}Sr.prototype=Object.assign(Object.create(Ft.prototype),{constructor:Sr,load:function(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=ri.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;const o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function a(){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1),ri.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(l){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1),i&&i(l),r.manager.itemError(t),r.manager.itemEnd(t)}return o.addEventListener("load",a,!1),o.addEventListener("error",c,!1),t.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}});function ws(t){Ft.call(this,t)}ws.prototype=Object.assign(Object.create(Ft.prototype),{constructor:ws,load:function(t,e,n,i){const r=new sn,s=new Sr(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function a(c){s.load(t[c],function(l){r.images[c]=l,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)a(c);return r}});function ra(t){Ft.call(this,t)}ra.prototype=Object.assign(Object.create(Ft.prototype),{constructor:ra,load:function(t,e,n,i){const r=this,s=new Vn,o=new Ve(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,function(a){const c=r.parse(a);c&&(c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:1001,s.wrapT=c.wrapT!==void 0?c.wrapT:1001,s.magFilter=c.magFilter!==void 0?c.magFilter:1006,s.minFilter=c.minFilter!==void 0?c.minFilter:1006,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=1008),c.mipmapCount===1&&(s.minFilter=1006),s.needsUpdate=!0,e&&e(s,c))},n,i),s}});function Ss(t){Ft.call(this,t)}Ss.prototype=Object.assign(Object.create(Ft.prototype),{constructor:Ss,load:function(t,e,n,i){const r=new Bt,s=new Sr(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(o){r.image=o;const a=t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0;r.format=a?1022:1023,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}});function lt(){this.type="Curve",this.arcLengthDivisions=200}Object.assign(lt.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)},getPoints:function(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e},getSpacedPoints:function(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e},getLength:function(){const t=this.getLengths();return t[t.length-1]},getLengths:function(t){if(t===void 0&&(t=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let s=1;s<=t;s++)n=this.getPoint(s/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(t,e){const n=this.getLengths();let i=0;const r=n.length;let s;e?s=e:s=t*n[r-1];let o=0,a=r-1,c;for(;o<=a;)if(i=Math.floor(o+(a-o)/2),c=n[i]-s,c<0)o=i+1;else if(c>0)a=i-1;else{a=i;break}if(i=a,n[i]===s)return i/(r-1);const l=n[i],h=n[i+1]-l,d=(s-l)/h;return(i+d)/(r-1)},getTangent:function(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),o=this.getPoint(r),a=e||(s.isVector2?new H:new S);return a.copy(o).sub(s).normalize(),a},getTangentAt:function(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)},computeFrenetFrames:function(t,e){const n=new S,i=[],r=[],s=[],o=new S,a=new Mt;for(let d=0;d<=t;d++){const u=d/t;i[d]=this.getTangentAt(u,new S),i[d].normalize()}r[0]=new S,s[0]=new S;let c=Number.MAX_VALUE;const l=Math.abs(i[0].x),f=Math.abs(i[0].y),h=Math.abs(i[0].z);l<=c&&(c=l,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),s[d]=s[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const u=Math.acos(yt.clamp(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(a.makeRotationAxis(o,u))}s[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(yt.clamp(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let u=1;u<=t;u++)r[u].applyMatrix4(a.makeRotationAxis(i[u],d*u)),s[u].crossVectors(i[u],r[u])}return{tangents:i,normals:r,binormals:s}},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this},toJSON:function(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t},fromJSON:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}});function ve(t,e,n,i,r,s,o,a){lt.call(this),this.type="EllipseCurve",this.aX=t||0,this.aY=e||0,this.xRadius=n||1,this.yRadius=i||1,this.aStartAngle=r||0,this.aEndAngle=s||2*Math.PI,this.aClockwise=o||!1,this.aRotation=a||0}ve.prototype=Object.create(lt.prototype),ve.prototype.constructor=ve,ve.prototype.isEllipseCurve=!0,ve.prototype.getPoint=function(t,e){const n=e||new H,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let a=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const l=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=a-this.aX,d=c-this.aY;a=h*l-d*f+this.aX,c=h*f+d*l+this.aY}return n.set(a,c)},ve.prototype.copy=function(t){return lt.prototype.copy.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this},ve.prototype.toJSON=function(){const t=lt.prototype.toJSON.call(this);return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t},ve.prototype.fromJSON=function(t){return lt.prototype.fromJSON.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this};function Ii(t,e,n,i,r,s){ve.call(this,t,e,n,n,i,r,s),this.type="ArcCurve"}Ii.prototype=Object.create(ve.prototype),Ii.prototype.constructor=Ii,Ii.prototype.isArcCurve=!0;function Ts(){let t=0,e=0,n=0,i=0;function r(s,o,a,c){t=s,e=a,n=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,f,h){let d=(o-s)/l-(a-s)/(l+f)+(a-o)/f,u=(a-o)/f-(c-o)/(f+h)+(c-a)/h;d*=f,u*=f,r(o,a,d,u)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Tr=new S,Es=new Ts,As=new Ts,Ls=new Ts;function ue(t=[],e=!1,n="centripetal",i=.5){lt.call(this),this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}ue.prototype=Object.create(lt.prototype),ue.prototype.constructor=ue,ue.prototype.isCatmullRomCurve3=!0,ue.prototype.getPoint=function(t,e=new S){const n=e,i=this.points,r=i.length,s=(r-(this.closed?0:1))*t;let o=Math.floor(s),a=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:a===0&&o===r-1&&(o=r-2,a=1);let c,l;this.closed||o>0?c=i[(o-1)%r]:(Tr.subVectors(i[0],i[1]).add(i[0]),c=Tr);const f=i[o%r],h=i[(o+1)%r];if(this.closed||o+2<r?l=i[(o+2)%r]:(Tr.subVectors(i[r-1],i[r-2]).add(i[r-1]),l=Tr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let u=Math.pow(c.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d),y=Math.pow(h.distanceToSquared(l),d);p<1e-4&&(p=1),u<1e-4&&(u=p),y<1e-4&&(y=p),Es.initNonuniformCatmullRom(c.x,f.x,h.x,l.x,u,p,y),As.initNonuniformCatmullRom(c.y,f.y,h.y,l.y,u,p,y),Ls.initNonuniformCatmullRom(c.z,f.z,h.z,l.z,u,p,y)}else this.curveType==="catmullrom"&&(Es.initCatmullRom(c.x,f.x,h.x,l.x,this.tension),As.initCatmullRom(c.y,f.y,h.y,l.y,this.tension),Ls.initCatmullRom(c.z,f.z,h.z,l.z,this.tension));return n.set(Es.calc(a),As.calc(a),Ls.calc(a)),n},ue.prototype.copy=function(t){lt.prototype.copy.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this},ue.prototype.toJSON=function(){const t=lt.prototype.toJSON.call(this);t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t},ue.prototype.fromJSON=function(t){lt.prototype.fromJSON.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new S().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this};function sa(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,c=t*a;return(2*n-2*i+s+o)*c+(-3*n+3*i-2*s-o)*a+s*t+n}function Bf(t,e){const n=1-t;return n*n*e}function Of(t,e){return 2*(1-t)*t*e}function Uf(t,e){return t*t*e}function Di(t,e,n,i){return Bf(t,e)+Of(t,n)+Uf(t,i)}function zf(t,e){const n=1-t;return n*n*n*e}function Gf(t,e){const n=1-t;return 3*n*n*t*e}function Hf(t,e){return 3*(1-t)*t*t*e}function Vf(t,e){return t*t*t*e}function Ni(t,e,n,i,r){return zf(t,e)+Gf(t,n)+Hf(t,i)+Vf(t,r)}function Le(t=new H,e=new H,n=new H,i=new H){lt.call(this),this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}Le.prototype=Object.create(lt.prototype),Le.prototype.constructor=Le,Le.prototype.isCubicBezierCurve=!0,Le.prototype.getPoint=function(t,e=new H){const n=e,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(Ni(t,i.x,r.x,s.x,o.x),Ni(t,i.y,r.y,s.y,o.y)),n},Le.prototype.copy=function(t){return lt.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this},Le.prototype.toJSON=function(){const t=lt.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t},Le.prototype.fromJSON=function(t){return lt.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this};function ke(t=new S,e=new S,n=new S,i=new S){lt.call(this),this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}ke.prototype=Object.create(lt.prototype),ke.prototype.constructor=ke,ke.prototype.isCubicBezierCurve3=!0,ke.prototype.getPoint=function(t,e=new S){const n=e,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(Ni(t,i.x,r.x,s.x,o.x),Ni(t,i.y,r.y,s.y,o.y),Ni(t,i.z,r.z,s.z,o.z)),n},ke.prototype.copy=function(t){return lt.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this},ke.prototype.toJSON=function(){const t=lt.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t},ke.prototype.fromJSON=function(t){return lt.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this};function fe(t=new H,e=new H){lt.call(this),this.type="LineCurve",this.v1=t,this.v2=e}fe.prototype=Object.create(lt.prototype),fe.prototype.constructor=fe,fe.prototype.isLineCurve=!0,fe.prototype.getPoint=function(t,e=new H){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n},fe.prototype.getPointAt=function(t,e){return this.getPoint(t,e)},fe.prototype.getTangent=function(t,e){const n=e||new H;return n.copy(this.v2).sub(this.v1).normalize(),n},fe.prototype.copy=function(t){return lt.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this},fe.prototype.toJSON=function(){const t=lt.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},fe.prototype.fromJSON=function(t){return lt.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function Ce(t=new S,e=new S){lt.call(this),this.type="LineCurve3",this.v1=t,this.v2=e}Ce.prototype=Object.create(lt.prototype),Ce.prototype.constructor=Ce,Ce.prototype.isLineCurve3=!0,Ce.prototype.getPoint=function(t,e=new S){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n},Ce.prototype.getPointAt=function(t,e){return this.getPoint(t,e)},Ce.prototype.copy=function(t){return lt.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this},Ce.prototype.toJSON=function(){const t=lt.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},Ce.prototype.fromJSON=function(t){return lt.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function Re(t=new H,e=new H,n=new H){lt.call(this),this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}Re.prototype=Object.create(lt.prototype),Re.prototype.constructor=Re,Re.prototype.isQuadraticBezierCurve=!0,Re.prototype.getPoint=function(t,e=new H){const n=e,i=this.v0,r=this.v1,s=this.v2;return n.set(Di(t,i.x,r.x,s.x),Di(t,i.y,r.y,s.y)),n},Re.prototype.copy=function(t){return lt.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this},Re.prototype.toJSON=function(){const t=lt.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},Re.prototype.fromJSON=function(t){return lt.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function We(t=new S,e=new S,n=new S){lt.call(this),this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}We.prototype=Object.create(lt.prototype),We.prototype.constructor=We,We.prototype.isQuadraticBezierCurve3=!0,We.prototype.getPoint=function(t,e=new S){const n=e,i=this.v0,r=this.v1,s=this.v2;return n.set(Di(t,i.x,r.x,s.x),Di(t,i.y,r.y,s.y),Di(t,i.z,r.z,s.z)),n},We.prototype.copy=function(t){return lt.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this},We.prototype.toJSON=function(){const t=lt.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},We.prototype.fromJSON=function(t){return lt.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function Pe(t=[]){lt.call(this),this.type="SplineCurve",this.points=t}Pe.prototype=Object.create(lt.prototype),Pe.prototype.constructor=Pe,Pe.prototype.isSplineCurve=!0,Pe.prototype.getPoint=function(t,e=new H){const n=e,i=this.points,r=(i.length-1)*t,s=Math.floor(r),o=r-s,a=i[s===0?s:s-1],c=i[s],l=i[s>i.length-2?i.length-1:s+1],f=i[s>i.length-3?i.length-1:s+2];return n.set(sa(o,a.x,c.x,l.x,f.x),sa(o,a.y,c.y,l.y,f.y)),n},Pe.prototype.copy=function(t){lt.prototype.copy.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this},Pe.prototype.toJSON=function(){const t=lt.prototype.toJSON.call(this);t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t},Pe.prototype.fromJSON=function(t){lt.prototype.fromJSON.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new H().fromArray(i))}return this};var kf=Object.freeze({__proto__:null,ArcCurve:Ii,CatmullRomCurve3:ue,CubicBezierCurve:Le,CubicBezierCurve3:ke,EllipseCurve:ve,LineCurve:fe,LineCurve3:Ce,QuadraticBezierCurve:Re,QuadraticBezierCurve3:We,SplineCurve:Pe});function ln(){lt.call(this),this.type="CurvePath",this.curves=[],this.autoClose=!1}ln.prototype=Object.assign(Object.create(lt.prototype),{constructor:ln,add:function(t){this.curves.push(t)},closePath:function(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new fe(e,t))},getPoint:function(t){const e=t*this.getLength(),n=this.getCurveLengths();let i=0;for(;i<n.length;){if(n[i]>=e){const r=n[i]-e,s=this.curves[i],o=s.getLength(),a=o===0?0:1-r/o;return s.getPointAt(a)}i++}return null},getLength:function(){const t=this.getCurveLengths();return t[t.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t},getSpacedPoints:function(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e},getPoints:function(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const s=r[i],o=s&&s.isEllipseCurve?t*2:s&&(s.isLineCurve||s.isLineCurve3)?1:s&&s.isSplineCurve?t*s.points.length:t,a=s.getPoints(o);for(let c=0;c<a.length;c++){const l=a[c];n&&n.equals(l)||(e.push(l),n=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e},copy:function(t){lt.prototype.copy.call(this,t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this},toJSON:function(){const t=lt.prototype.toJSON.call(this);t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t},fromJSON:function(t){lt.prototype.fromJSON.call(this,t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new kf[i.type]().fromJSON(i))}return this}});function Ie(t){ln.call(this),this.type="Path",this.currentPoint=new H,t&&this.setFromPoints(t)}Ie.prototype=Object.assign(Object.create(ln.prototype),{constructor:Ie,setFromPoints:function(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this},moveTo:function(t,e){return this.currentPoint.set(t,e),this},lineTo:function(t,e){const n=new fe(this.currentPoint.clone(),new H(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this},quadraticCurveTo:function(t,e,n,i){const r=new Re(this.currentPoint.clone(),new H(t,e),new H(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this},bezierCurveTo:function(t,e,n,i,r,s){const o=new Le(this.currentPoint.clone(),new H(t,e),new H(n,i),new H(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this},splineThru:function(t){const e=[this.currentPoint.clone()].concat(t),n=new Pe(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this},arc:function(t,e,n,i,r,s){const o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(t+o,e+a,n,i,r,s),this},absarc:function(t,e,n,i,r,s){return this.absellipse(t,e,n,n,i,r,s),this},ellipse:function(t,e,n,i,r,s,o,a){const c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(t+c,e+l,n,i,r,s,o,a),this},absellipse:function(t,e,n,i,r,s,o,a){const c=new ve(t,e,n,i,r,s,o,a);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const l=c.getPoint(1);return this.currentPoint.copy(l),this},copy:function(t){return ln.prototype.copy.call(this,t),this.currentPoint.copy(t.currentPoint),this},toJSON:function(){const t=ln.prototype.toJSON.call(this);return t.currentPoint=this.currentPoint.toArray(),t},fromJSON:function(t){return ln.prototype.fromJSON.call(this,t),this.currentPoint.fromArray(t.currentPoint),this}});function si(t){Ie.call(this,t),this.uuid=yt.generateUUID(),this.type="Shape",this.holes=[]}si.prototype=Object.assign(Object.create(Ie.prototype),{constructor:si,getPointsHoles:function(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e},extractPoints:function(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}},copy:function(t){Ie.prototype.copy.call(this,t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this},toJSON:function(){const t=Ie.prototype.toJSON.call(this);t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t},fromJSON:function(t){Ie.prototype.fromJSON.call(this,t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Ie().fromJSON(i))}return this}});function Gt(t,e=1){ft.call(this),this.type="Light",this.color=new ct(t),this.intensity=e}Gt.prototype=Object.assign(Object.create(ft.prototype),{constructor:Gt,isLight:!0,copy:function(t){return ft.prototype.copy.call(this,t),this.color.copy(t.color),this.intensity=t.intensity,this},toJSON:function(t){const e=ft.prototype.toJSON.call(this,t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}});function oa(t,e,n){Gt.call(this,t,n),this.type="HemisphereLight",this.position.copy(ft.DefaultUp),this.updateMatrix(),this.groundColor=new ct(e)}oa.prototype=Object.assign(Object.create(Gt.prototype),{constructor:oa,isHemisphereLight:!0,copy:function(t){return Gt.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}});function je(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new H(512,512),this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new er,this._frameExtents=new H(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}Object.assign(je.prototype,{_projScreenMatrix:new Mt,_lightPositionWorld:new S,_lookTarget:new S,getViewportCount:function(){return this._viewportCount},getFrustum:function(){return this._frustum},updateMatrices:function(t){const e=this.camera,n=this.matrix,i=this._projScreenMatrix,r=this._lookTarget,s=this._lightPositionWorld;s.setFromMatrixPosition(t.matrixWorld),e.position.copy(s),r.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(r),e.updateMatrixWorld(),i.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(i),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)},getViewport:function(t){return this._viewports[t]},getFrameExtents:function(){return this._frameExtents},copy:function(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}});function Cs(){je.call(this,new Jt(50,1,.5,500)),this.focus=1}Cs.prototype=Object.assign(Object.create(je.prototype),{constructor:Cs,isSpotLightShadow:!0,updateMatrices:function(t){const e=this.camera,n=yt.RAD2DEG*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),je.prototype.updateMatrices.call(this,t)}});function aa(t,e,n,i,r,s){Gt.call(this,t,e),this.type="SpotLight",this.position.copy(ft.DefaultUp),this.updateMatrix(),this.target=new ft,Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(o){this.intensity=o/Math.PI}}),this.distance=n!==void 0?n:0,this.angle=i!==void 0?i:Math.PI/3,this.penumbra=r!==void 0?r:0,this.decay=s!==void 0?s:1,this.shadow=new Cs}aa.prototype=Object.assign(Object.create(Gt.prototype),{constructor:aa,isSpotLight:!0,copy:function(t){return Gt.prototype.copy.call(this,t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}});function Rs(){je.call(this,new Jt(90,1,.5,500)),this._frameExtents=new H(4,2),this._viewportCount=6,this._viewports=[new Nt(2,1,1,1),new Nt(0,1,1,1),new Nt(3,1,1,1),new Nt(1,1,1,1),new Nt(3,0,1,1),new Nt(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}Rs.prototype=Object.assign(Object.create(je.prototype),{constructor:Rs,isPointLightShadow:!0,updateMatrices:function(t,e=0){const n=this.camera,i=this.matrix,r=this._lightPositionWorld,s=this._lookTarget,o=this._projScreenMatrix;r.setFromMatrixPosition(t.matrixWorld),n.position.copy(r),s.copy(n.position),s.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(s),n.updateMatrixWorld(),i.makeTranslation(-r.x,-r.y,-r.z),o.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(o)}});function ca(t,e,n,i){Gt.call(this,t,e),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){return this.intensity*4*Math.PI},set:function(r){this.intensity=r/(4*Math.PI)}}),this.distance=n!==void 0?n:0,this.decay=i!==void 0?i:1,this.shadow=new Rs}ca.prototype=Object.assign(Object.create(Gt.prototype),{constructor:ca,isPointLight:!0,copy:function(t){return Gt.prototype.copy.call(this,t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}});function Ps(t=-1,e=1,n=1,i=-1,r=.1,s=2e3){rn.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}Ps.prototype=Object.assign(Object.create(rn.prototype),{constructor:Ps,isOrthographicCamera:!0,copy:function(t,e){return rn.prototype.copy.call(this,t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this},setViewOffset:function(t,e,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,s=n+t,o=i+e,a=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=l*this.view.offsetY,a=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,a,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()},toJSON:function(t){const e=ft.prototype.toJSON.call(this,t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}});function Is(){je.call(this,new Ps(-5,5,5,-5,.5,500))}Is.prototype=Object.assign(Object.create(je.prototype),{constructor:Is,isDirectionalLightShadow:!0,updateMatrices:function(t){je.prototype.updateMatrices.call(this,t)}});function la(t,e){Gt.call(this,t,e),this.type="DirectionalLight",this.position.copy(ft.DefaultUp),this.updateMatrix(),this.target=new ft,this.shadow=new Is}la.prototype=Object.assign(Object.create(Gt.prototype),{constructor:la,isDirectionalLight:!0,copy:function(t){return Gt.prototype.copy.call(this,t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}});function ha(t,e){Gt.call(this,t,e),this.type="AmbientLight"}ha.prototype=Object.assign(Object.create(Gt.prototype),{constructor:ha,isAmbientLight:!0});function ua(t,e,n,i){Gt.call(this,t,e),this.type="RectAreaLight",this.width=n!==void 0?n:10,this.height=i!==void 0?i:10}ua.prototype=Object.assign(Object.create(Gt.prototype),{constructor:ua,isRectAreaLight:!0,copy:function(t){return Gt.prototype.copy.call(this,t),this.width=t.width,this.height=t.height,this},toJSON:function(t){const e=Gt.prototype.toJSON.call(this,t);return e.object.width=this.width,e.object.height=this.height,e}});class Wf{constructor(){Object.defineProperty(this,"isSphericalHarmonics3",{value:!0}),this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new S)}set(e){for(let n=0;n<9;n++)this.coefficients[n].copy(e[n]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,n){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.282095),n.addScaledVector(o[1],.488603*r),n.addScaledVector(o[2],.488603*s),n.addScaledVector(o[3],.488603*i),n.addScaledVector(o[4],1.092548*(i*r)),n.addScaledVector(o[5],1.092548*(r*s)),n.addScaledVector(o[6],.315392*(3*s*s-1)),n.addScaledVector(o[7],1.092548*(i*s)),n.addScaledVector(o[8],.546274*(i*i-r*r)),n}getIrradianceAt(e,n){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.886227),n.addScaledVector(o[1],2*.511664*r),n.addScaledVector(o[2],2*.511664*s),n.addScaledVector(o[3],2*.511664*i),n.addScaledVector(o[4],2*.429043*i*r),n.addScaledVector(o[5],2*.429043*r*s),n.addScaledVector(o[6],.743125*s*s-.247708),n.addScaledVector(o[7],2*.429043*i*s),n.addScaledVector(o[8],.429043*(i*i-r*r)),n}add(e){for(let n=0;n<9;n++)this.coefficients[n].add(e.coefficients[n]);return this}addScaledSH(e,n){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],n);return this}scale(e){for(let n=0;n<9;n++)this.coefficients[n].multiplyScalar(e);return this}lerp(e,n){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],n);return this}equals(e){for(let n=0;n<9;n++)if(!this.coefficients[n].equals(e.coefficients[n]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,n=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,n+r*3);return this}toArray(e=[],n=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,n+r*3);return e}static getBasisAt(e,n){const i=e.x,r=e.y,s=e.z;n[0]=.282095,n[1]=.488603*r,n[2]=.488603*s,n[3]=.488603*i,n[4]=1.092548*i*r,n[5]=1.092548*r*s,n[6]=.315392*(3*s*s-1),n[7]=1.092548*i*s,n[8]=.546274*(i*i-r*r)}}function De(t,e){Gt.call(this,void 0,e),this.type="LightProbe",this.sh=t!==void 0?t:new Wf}De.prototype=Object.assign(Object.create(Gt.prototype),{constructor:De,isLightProbe:!0,copy:function(t){return Gt.prototype.copy.call(this,t),this.sh.copy(t.sh),this},fromJSON:function(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this},toJSON:function(t){const e=Gt.prototype.toJSON.call(this,t);return e.object.sh=this.sh.toArray(),e}});function fa(t){Ft.call(this,t),this.textures={}}fa.prototype=Object.assign(Object.create(Ft.prototype),{constructor:fa,load:function(t,e,n,i){const r=this,s=new Ve(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)},parse:function(t){const e=this.textures;function n(r){return e[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),e[r]}const i=new Pf[t.type];if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.sheen!==void 0&&(i.sheen=new ct().setHex(t.sheen)),t.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(t.specular),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearcoat!==void 0&&(i.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=t.clearcoatRoughness),t.fog!==void 0&&(i.fog=t.fog),t.flatShading!==void 0&&(i.flatShading=t.flatShading),t.blending!==void 0&&(i.blending=t.blending),t.combine!==void 0&&(i.combine=t.combine),t.side!==void 0&&(i.side=t.side),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.stencilWrite!==void 0&&(i.stencilWrite=t.stencilWrite),t.stencilWriteMask!==void 0&&(i.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(i.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(i.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(i.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(i.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(i.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(i.stencilZPass=t.stencilZPass),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(i.rotation=t.rotation),t.linewidth!==1&&(i.linewidth=t.linewidth),t.dashSize!==void 0&&(i.dashSize=t.dashSize),t.gapSize!==void 0&&(i.gapSize=t.gapSize),t.scale!==void 0&&(i.scale=t.scale),t.polygonOffset!==void 0&&(i.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=t.polygonOffsetUnits),t.skinning!==void 0&&(i.skinning=t.skinning),t.morphTargets!==void 0&&(i.morphTargets=t.morphTargets),t.morphNormals!==void 0&&(i.morphNormals=t.morphNormals),t.dithering!==void 0&&(i.dithering=t.dithering),t.vertexTangents!==void 0&&(i.vertexTangents=t.vertexTangents),t.visible!==void 0&&(i.visible=t.visible),t.toneMapped!==void 0&&(i.toneMapped=t.toneMapped),t.userData!==void 0&&(i.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),t.uniforms!==void 0)for(const r in t.uniforms){const s=t.uniforms[r];switch(i.uniforms[r]={},s.type){case"t":i.uniforms[r].value=n(s.value);break;case"c":i.uniforms[r].value=new ct().setHex(s.value);break;case"v2":i.uniforms[r].value=new H().fromArray(s.value);break;case"v3":i.uniforms[r].value=new S().fromArray(s.value);break;case"v4":i.uniforms[r].value=new Nt().fromArray(s.value);break;case"m3":i.uniforms[r].value=new ie().fromArray(s.value);break;case"m4":i.uniforms[r].value=new Mt().fromArray(s.value);break;default:i.uniforms[r].value=s.value}}if(t.defines!==void 0&&(i.defines=t.defines),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.extensions!==void 0)for(const r in t.extensions)i.extensions[r]=t.extensions[r];if(t.shading!==void 0&&(i.flatShading=t.shading===1),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=n(t.map)),t.matcap!==void 0&&(i.matcap=n(t.matcap)),t.alphaMap!==void 0&&(i.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(i.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(i.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new H().fromArray(r)}return t.displacementMap!==void 0&&(i.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=n(t.specularMap)),t.envMap!==void 0&&(i.envMap=n(t.envMap)),t.envMapIntensity!==void 0&&(i.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(i.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(i.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(i.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new H().fromArray(t.clearcoatNormalScale)),t.transmission!==void 0&&(i.transmission=t.transmission),t.transmissionMap!==void 0&&(i.transmissionMap=n(t.transmissionMap)),i},setTextures:function(t){return this.textures=t,this}});const jf={decodeText:function(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}},extractUrlBase:function(t){const e=t.lastIndexOf("/");return e===-1?"./":t.substr(0,e+1)}};function Er(){Dt.call(this),this.type="InstancedBufferGeometry",this.instanceCount=1/0}Er.prototype=Object.assign(Object.create(Dt.prototype),{constructor:Er,isInstancedBufferGeometry:!0,copy:function(t){return Dt.prototype.copy.call(this,t),this.instanceCount=t.instanceCount,this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){const t=Dt.prototype.toJSON.call(this);return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}});function Ds(t,e,n,i){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),gt.call(this,t,e,n),this.meshPerAttribute=i||1}Ds.prototype=Object.assign(Object.create(gt.prototype),{constructor:Ds,isInstancedBufferAttribute:!0,copy:function(t){return gt.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this},toJSON:function(){const t=gt.prototype.toJSON.call(this);return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}});function da(t){Ft.call(this,t)}da.prototype=Object.assign(Object.create(Ft.prototype),{constructor:da,load:function(t,e,n,i){const r=this,s=new Ve(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)},parse:function(t){const e={},n={};function i(d,u){if(e[u]!==void 0)return e[u];const y=d.interleavedBuffers[u],v=r(d,y.buffer),g=Yi(y.type,v),m=new pe(g,y.stride);return m.uuid=y.uuid,e[u]=m,m}function r(d,u){if(n[u]!==void 0)return n[u];const y=d.arrayBuffers[u],v=new Uint32Array(y).buffer;return n[u]=v,v}const s=t.isInstancedBufferGeometry?new Er:new Dt,o=t.data.index;if(o!==void 0){const d=Yi(o.type,o.array);s.setIndex(new gt(d,1))}const a=t.data.attributes;for(const d in a){const u=a[d];let p;if(u.isInterleavedBufferAttribute){const y=i(t.data,u.data);p=new xn(y,u.itemSize,u.offset,u.normalized)}else{const y=Yi(u.type,u.array),v=u.isInstancedBufferAttribute?Ds:gt;p=new v(y,u.itemSize,u.normalized)}u.name!==void 0&&(p.name=u.name),s.setAttribute(d,p)}const c=t.data.morphAttributes;if(c)for(const d in c){const u=c[d],p=[];for(let y=0,v=u.length;y<v;y++){const g=u[y];let m;if(g.isInterleavedBufferAttribute){const T=i(t.data,g.data);m=new xn(T,g.itemSize,g.offset,g.normalized)}else{const T=Yi(g.type,g.array);m=new gt(T,g.itemSize,g.normalized)}g.name!==void 0&&(m.name=g.name),p.push(m)}s.morphAttributes[d]=p}t.data.morphTargetsRelative&&(s.morphTargetsRelative=!0);const f=t.data.groups||t.data.drawcalls||t.data.offsets;if(f!==void 0)for(let d=0,u=f.length;d!==u;++d){const p=f[d];s.addGroup(p.start,p.count,p.materialIndex)}const h=t.data.boundingSphere;if(h!==void 0){const d=new S;h.center!==void 0&&d.fromArray(h.center),s.boundingSphere=new Qe(d,h.radius)}return t.name&&(s.name=t.name),t.userData&&(s.userData=t.userData),s}});function pa(t){typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),Ft.call(this,t),this.options={premultiplyAlpha:"none"}}pa.prototype=Object.assign(Object.create(Ft.prototype),{constructor:pa,isImageBitmapLoader:!0,setOptions:function(e){return this.options=e,this},load:function(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=ri.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",fetch(t,o).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,r.options)}).then(function(a){ri.add(t,a),e&&e(a),r.manager.itemEnd(t)}).catch(function(a){i&&i(a),r.manager.itemError(t),r.manager.itemEnd(t)}),r.manager.itemStart(t)}});function ma(){this.type="ShapePath",this.color=new ct,this.subPaths=[],this.currentPath=null}Object.assign(ma.prototype,{moveTo:function(t,e){return this.currentPath=new Ie,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this},lineTo:function(t,e){return this.currentPath.lineTo(t,e),this},quadraticCurveTo:function(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this},bezierCurveTo:function(t,e,n,i,r,s){return this.currentPath.bezierCurveTo(t,e,n,i,r,s),this},splineThru:function(t){return this.currentPath.splineThru(t),this},toShapes:function(t,e){function n(g){const m=[];for(let T=0,E=g.length;T<E;T++){const w=g[T],x=new si;x.curves=w.curves,m.push(x)}return m}function i(g,m){const T=m.length;let E=!1;for(let w=T-1,x=0;x<T;w=x++){let A=m[w],O=m[x],I=O.x-A.x,et=O.y-A.y;if(Math.abs(et)>Number.EPSILON){if(et<0&&(A=m[x],I=-I,O=m[w],et=-et),g.y<A.y||g.y>O.y)continue;if(g.y===A.y){if(g.x===A.x)return!0}else{const P=et*(g.x-A.x)-I*(g.y-A.y);if(P===0)return!0;if(P<0)continue;E=!E}}else{if(g.y!==A.y)continue;if(O.x<=g.x&&g.x<=A.x||A.x<=g.x&&g.x<=O.x)return!0}}return E}const r=cn.isClockWise,s=this.subPaths;if(s.length===0)return[];if(e===!0)return n(s);let o,a,c;const l=[];if(s.length===1)return a=s[0],c=new si,c.curves=a.curves,l.push(c),l;let f=!r(s[0].getPoints());f=t?!f:f;const h=[],d=[];let u=[],p=0,y;d[p]=void 0,u[p]=[];for(let g=0,m=s.length;g<m;g++)a=s[g],y=a.getPoints(),o=r(y),o=t?!o:o,o?(!f&&d[p]&&p++,d[p]={s:new si,p:y},d[p].s.curves=a.curves,f&&p++,u[p]=[]):u[p].push({h:a,p:y[0]});if(!d[0])return n(s);if(d.length>1){let g=!1;const m=[];for(let T=0,E=d.length;T<E;T++)h[T]=[];for(let T=0,E=d.length;T<E;T++){const w=u[T];for(let x=0;x<w.length;x++){const A=w[x];let O=!0;for(let I=0;I<d.length;I++)i(A.p,d[I].p)&&(T!==I&&m.push({froms:T,tos:I,hole:x}),O?(O=!1,h[I].push(A)):g=!0);O&&h[T].push(A)}}m.length>0&&(g||(u=h))}let v;for(let g=0,m=d.length;g<m;g++){c=d[g].s,l.push(c),v=u[g];for(let T=0,E=v.length;T<E;T++)c.holes.push(v[T].h)}return l}});function ga(t){this.type="Font",this.data=t}Object.assign(ga.prototype,{isFont:!0,generateShapes:function(t,e=100){const n=[],i=qf(t,e,this.data);for(let r=0,s=i.length;r<s;r++)Array.prototype.push.apply(n,i[r].toShapes());return n}});function qf(t,e,n){const i=Array.from?Array.from(t):String(t).split(""),r=e/n.resolution,s=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*r,o=[];let a=0,c=0;for(let l=0;l<i.length;l++){const f=i[l];if(f===`
`)a=0,c-=s;else{const h=Xf(f,r,a,c,n);a+=h.offsetX,o.push(h.path)}}return o}function Xf(t,e,n,i,r){const s=r.glyphs[t]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+t+'" does not exists in font family '+r.familyName+".");return}const o=new ma;let a,c,l,f,h,d,u,p;if(s.o){const y=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let v=0,g=y.length;v<g;)switch(y[v++]){case"m":a=y[v++]*e+n,c=y[v++]*e+i,o.moveTo(a,c);break;case"l":a=y[v++]*e+n,c=y[v++]*e+i,o.lineTo(a,c);break;case"q":l=y[v++]*e+n,f=y[v++]*e+i,h=y[v++]*e+n,d=y[v++]*e+i,o.quadraticCurveTo(h,d,l,f);break;case"b":l=y[v++]*e+n,f=y[v++]*e+i,h=y[v++]*e+n,d=y[v++]*e+i,u=y[v++]*e+n,p=y[v++]*e+i,o.bezierCurveTo(h,d,u,p,l,f);break}}return{offsetX:s.ha*e,path:o}}function ya(t){Ft.call(this,t)}ya.prototype=Object.assign(Object.create(Ft.prototype),{constructor:ya,load:function(t,e,n,i){const r=this,s=new Ve(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){let a;try{a=JSON.parse(o)}catch{console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),a=JSON.parse(o.substring(65,o.length-2))}const c=r.parse(a);e&&e(c)},n,i)},parse:function(t){return new ga(t)}});let Ar;const Yf={getContext:function(){return Ar===void 0&&(Ar=new(window.AudioContext||window.webkitAudioContext)),Ar},setContext:function(t){Ar=t}};function va(t){Ft.call(this,t)}va.prototype=Object.assign(Object.create(Ft.prototype),{constructor:va,load:function(t,e,n,i){const r=this,s=new Ve(r.manager);s.setResponseType("arraybuffer"),s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{const a=o.slice(0);Yf.getContext().decodeAudioData(a,function(l){e(l)})}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)}});function xa(t,e,n){De.call(this,void 0,n);const i=new ct().set(t),r=new ct().set(e),s=new S(i.r,i.g,i.b),o=new S(r.r,r.g,r.b),a=Math.sqrt(Math.PI),c=a*Math.sqrt(.75);this.sh.coefficients[0].copy(s).add(o).multiplyScalar(a),this.sh.coefficients[1].copy(s).sub(o).multiplyScalar(c)}xa.prototype=Object.assign(Object.create(De.prototype),{constructor:xa,isHemisphereLightProbe:!0,copy:function(t){return De.prototype.copy.call(this,t),this},toJSON:function(t){return De.prototype.toJSON.call(this,t)}});function _a(t,e){De.call(this,void 0,e);const n=new ct().set(t);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}_a.prototype=Object.assign(Object.create(De.prototype),{constructor:_a,isAmbientLightProbe:!0,copy:function(t){return De.prototype.copy.call(this,t),this},toJSON:function(t){return De.prototype.toJSON.call(this,t)}});const ba=new Mt,Ma=new Mt;function Zf(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Jt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Jt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}Object.assign(Zf.prototype,{update:function(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep;const i=t.projectionMatrix.clone(),r=e.eyeSep/2,s=r*e.near/e.focus,o=e.near*Math.tan(yt.DEG2RAD*e.fov*.5)/e.zoom;let a,c;Ma.elements[12]=-r,ba.elements[12]=r,a=-o*e.aspect+s,c=o*e.aspect+s,i.elements[0]=2*e.near/(c-a),i.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(i),a=-o*e.aspect-s,c=o*e.aspect-s,i.elements[0]=2*e.near/(c-a),i.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(i)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Ma),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(ba)}});function wa(t,e,n){this.binding=t,this.valueSize=n;let i,r,s;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}Object.assign(wa.prototype,{accumulate:function(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let s=this.cumulativeWeight;if(s===0){for(let o=0;o!==i;++o)n[r+o]=n[o];s=e}else{s+=e;const o=e/s;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=s},accumulateAdditive:function(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t},apply:function(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const a=e*this._origIndex;this._mixBufferRegion(n,i,a,1-r,e)}s>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let a=e,c=e+e;a!==c;++a)if(n[a]!==n[a+e]){o.setValue(n,i);break}},saveOriginalState:function(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,s=i;r!==s;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0},restoreOriginalState:function(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)},_setAdditiveIdentityNumeric:function(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0},_setAdditiveIdentityQuaternion:function(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1},_setAdditiveIdentityOther:function(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]},_select:function(t,e,n,i,r){if(i>=.5)for(let s=0;s!==r;++s)t[e+s]=t[n+s]},_slerp:function(t,e,n,i){ae.slerpFlat(t,e,t,e,t,n,i)},_slerpAdditive:function(t,e,n,i,r){const s=this._workIndex*r;ae.multiplyQuaternionsFlat(t,s,t,e,t,n),ae.slerpFlat(t,e,t,e,t,s,i)},_lerp:function(t,e,n,i,r){const s=1-i;for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]*s+t[n+o]*i}},_lerpAdditive:function(t,e,n,i,r){for(let s=0;s!==r;++s){const o=e+s;t[o]=t[o]+t[n+s]*i}}});const Ns="\\[\\]\\.:\\/",Jf=new RegExp("["+Ns+"]","g"),Fs="[^"+Ns+"]",Qf="[^"+Ns.replace("\\.","")+"]",$f=/((?:WC+[\/:])*)/.source.replace("WC",Fs),Kf=/(WCOD+)?/.source.replace("WCOD",Qf),td=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fs),ed=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fs),nd=new RegExp("^"+$f+Kf+td+ed+"$"),id=["material","materials","bones"];function Sa(t,e,n){const i=n||ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}Object.assign(Sa.prototype,{getValue:function(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)},setValue:function(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)},bind:function(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()},unbind:function(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}});function ne(t,e,n){this.path=e,this.parsedPath=n||ne.parseTrackName(e),this.node=ne.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t}Object.assign(ne,{Composite:Sa,create:function(t,e,n){return t&&t.isAnimationObjectGroup?new ne.Composite(t,e,n):new ne(t,e,n)},sanitizeNodeName:function(t){return t.replace(/\s/g,"_").replace(Jf,"")},parseTrackName:function(t){const e=nd.exec(t);if(!e)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);id.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n},findNode:function(t,e){if(!e||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let s=0;s<r.length;s++){const o=r[s];if(o.name===e||o.uuid===e)return o;const a=n(o.children);if(a)return a}return null},i=n(t.children);if(i)return i}return null}}),Object.assign(ne.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(e,n){e[n]=this.node[this.propertyName]},function(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]},function(e,n){e[n]=this.resolvedProperty[this.propertyIndex]},function(e,n){this.resolvedProperty.toArray(e,n)}],SetterByBindingTypeAndVersioning:[[function(e,n){this.targetObject[this.propertyName]=e[n]},function(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0},function(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]},function(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0},function(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){this.resolvedProperty[this.propertyIndex]=e[n]},function(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0},function(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){this.resolvedProperty.fromArray(e,n)},function(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0},function(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(e,n){this.bind(),this.getValue(e,n)},setValue:function(e,n){this.bind(),this.setValue(e,n)},bind:function(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=ne.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===c){c=l;break}break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const s=t[i];if(s===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(t.geometry.isBufferGeometry){if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(a=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}),Object.assign(ne.prototype,{_getValue_unbound:ne.prototype.getValue,_setValue_unbound:ne.prototype.setValue});function rd(){this.uuid=yt.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}Object.assign(rd.prototype,{isAnimationObjectGroup:!0,add:function(){const t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,s=r.length;let o,a=t.length,c=this.nCachedObjects_;for(let l=0,f=arguments.length;l!==f;++l){const h=arguments[l],d=h.uuid;let u=e[d];if(u===void 0){u=a++,e[d]=u,t.push(h);for(let p=0,y=s;p!==y;++p)r[p].push(new ne(h,n[p],i[p]))}else if(u<c){o=t[u];const p=--c,y=t[p];e[y.uuid]=u,t[u]=y,e[d]=p,t[p]=h;for(let v=0,g=s;v!==g;++v){const m=r[v],T=m[p];let E=m[u];m[u]=T,E===void 0&&(E=new ne(h,n[v],i[v])),m[p]=E}}else t[u]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c},remove:function(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let s=0,o=arguments.length;s!==o;++s){const a=arguments[s],c=a.uuid,l=e[c];if(l!==void 0&&l>=r){const f=r++,h=t[f];e[h.uuid]=l,t[l]=h,e[c]=f,t[f]=a;for(let d=0,u=i;d!==u;++d){const p=n[d],y=p[f],v=p[l];p[l]=y,p[f]=v}}}this.nCachedObjects_=r},uncache:function(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,s=t.length;for(let o=0,a=arguments.length;o!==a;++o){const c=arguments[o],l=c.uuid,f=e[l];if(f!==void 0)if(delete e[l],f<r){const h=--r,d=t[h],u=--s,p=t[u];e[d.uuid]=f,t[f]=d,e[p.uuid]=h,t[h]=p,t.pop();for(let y=0,v=i;y!==v;++y){const g=n[y],m=g[h],T=g[u];g[f]=m,g[h]=T,g.pop()}}else{const h=--s,d=t[h];h>0&&(e[d.uuid]=f),t[f]=d,t.pop();for(let u=0,p=i;u!==p;++u){const y=n[u];y[f]=y[h],y.pop()}}}this.nCachedObjects_=r},subscribe_:function(t,e){const n=this._bindingsIndicesByPath;let i=n[t];const r=this._bindings;if(i!==void 0)return r[i];const s=this._paths,o=this._parsedPaths,a=this._objects,c=a.length,l=this.nCachedObjects_,f=new Array(c);i=r.length,n[t]=i,s.push(t),o.push(e),r.push(f);for(let h=l,d=a.length;h!==d;++h){const u=a[h];f[h]=new ne(u,t,e)}return f},unsubscribe_:function(t){const e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){const i=this._paths,r=this._parsedPaths,s=this._bindings,o=s.length-1,a=s[o],c=t[o];e[c]=n,s[n]=a,s.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}});class sd{constructor(e,n,i=null,r=n.blendMode){this._mixer=e,this._clip=n,this._localRoot=i,this.blendMode=r;const s=n.tracks,o=s.length,a=new Array(o),c={endingStart:2400,endingEnd:2400};for(let l=0;l!==o;++l){const f=s[l].createInterpolant(null);a[l]=f,f.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,n){return this.loop=e,this.repetitions=n,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,n,i){if(e.fadeOut(n),this.fadeIn(n),i){const r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,n),this.warp(a,1,n)}return this}crossFadeTo(e,n,i){return e.crossFadeFrom(this,n,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,n,i){const r=this._mixer,s=r.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+i,l[0]=e/o,l[1]=n/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,n,i,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*i;if(c<0||i===0)return;this._startTime=null,n=i*c}n*=this._updateTimeScale(e);const o=this._updateTime(n),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case 2501:for(let f=0,h=c.length;f!==h;++f)c[f].evaluate(o),l[f].accumulateAdditive(a);break;case 2500:default:for(let f=0,h=c.length;f!==h;++f)c[f].evaluate(o),l[f].accumulate(r,a)}}}_updateWeight(e){let n=0;if(this.enabled){n=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(e)[0];n*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=n,n}_updateTimeScale(e){let n=0;if(!this.paused){n=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const r=i.evaluate(e)[0];n*=r,e>i.parameterPositions[1]&&(this.stopWarping(),n===0?this.paused=!0:this.timeScale=n)}}return this._effectiveTimeScale=n,n}_updateTime(e){const n=this._clip.duration,i=this.loop;let r=this.time+e,s=this._loopCount;const o=i===2202;if(e===0)return s===-1?r:o&&(s&1)===1?n-r:r;if(i===2200){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(r>=n)r=n;else if(r<0)r=0;else{this.time=r;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=n||r<0){const a=Math.floor(r/n);r-=n*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?n:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)===1)return n-r}return r}_setEndings(e,n,i){const r=this._interpolantSettings;i?(r.endingStart=2401,r.endingEnd=2401):(e?r.endingStart=this.zeroSlopeAtStart?2401:2400:r.endingStart=2402,n?r.endingEnd=this.zeroSlopeAtEnd?2401:2400:r.endingEnd=2402)}_scheduleFading(e,n,i){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=n,a[1]=s+e,c[1]=i,this}}function Ta(t){this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}Ta.prototype=Object.assign(Object.create(Ne.prototype),{constructor:Ta,_bindAction:function(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,s=t._propertyBindings,o=t._interpolants,a=n.uuid,c=this._bindingsByRootAndName;let l=c[a];l===void 0&&(l={},c[a]=l);for(let f=0;f!==r;++f){const h=i[f],d=h.name;let u=l[d];if(u!==void 0)s[f]=u;else{if(u=s[f],u!==void 0){u._cacheIndex===null&&(++u.referenceCount,this._addInactiveBinding(u,a,d));continue}const p=e&&e._propertyBindings[f].binding.parsedPath;u=new wa(ne.create(n,d,p),h.ValueTypeName,h.getValueSize()),++u.referenceCount,this._addInactiveBinding(u,a,d),s[f]=u}o[f].resultBuffer=u.buffer}},_activateAction:function(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}},_deactivateAction:function(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}},_initMemoryManager:function(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}},_isActiveAction:function(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions},_addInactiveAction:function(t,e,n){const i=this._actions,r=this._actionsByClip;let s=r[e];if(s===void 0)s={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=s;else{const o=s.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),s.actionByRoot[n]=t},_removeInactiveAction:function(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,s=this._actionsByClip,o=s[r],a=o.knownActions,c=a[a.length-1],l=t._byClipCacheIndex;c._byClipCacheIndex=l,a[l]=c,a.pop(),t._byClipCacheIndex=null;const f=o.actionByRoot,h=(t._localRoot||this._root).uuid;delete f[h],a.length===0&&delete s[r],this._removeInactiveBindingsForAction(t)},_removeInactiveBindingsForAction:function(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}},_lendAction:function(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_takeBackAction:function(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_addInactiveBinding:function(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let s=i[e];s===void 0&&(s={},i[e]=s),s[n]=t,t._cacheIndex=r.length,r.push(t)},_removeInactiveBinding:function(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,s=this._bindingsByRootAndName,o=s[i],a=e[e.length-1],c=t._cacheIndex;a._cacheIndex=c,e[c]=a,e.pop(),delete o[r],Object.keys(o).length===0&&delete s[i]},_lendBinding:function(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_takeBackBinding:function(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_lendControlInterpolant:function(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Mr(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=e,t[e]=n),n},_takeBackControlInterpolant:function(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(t,e,n){const i=e||this._root,r=i.uuid;let s=typeof t=="string"?we.findByName(i,t):t;const o=s!==null?s.uuid:t,a=this._actionsByClip[o];let c=null;if(n===void 0&&(s!==null?n=s.blendMode:n=2500),a!==void 0){const f=a.actionByRoot[r];if(f!==void 0&&f.blendMode===n)return f;c=a.knownActions[0],s===null&&(s=c._clip)}if(s===null)return null;const l=new sd(this,s,e,n);return this._bindAction(l,c),this._addInactiveAction(l,o,r),l},existingAction:function(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?we.findByName(n,t):t,s=r?r.uuid:t,o=this._actionsByClip[s];return o!==void 0&&o.actionByRoot[i]||null},stopAllAction:function(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this},update:function(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),s=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,s);const o=this._bindings,a=this._nActiveBindings;for(let c=0;c!==a;++c)o[c].apply(s);return this},setTime:function(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)},getRoot:function(){return this._root},uncacheClip:function(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const s=r.knownActions;for(let o=0,a=s.length;o!==a;++o){const c=s[o];this._deactivateAction(c);const l=c._cacheIndex,f=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,f._cacheIndex=l,e[l]=f,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}},uncacheRoot:function(t){const e=t.uuid,n=this._actionsByClip;for(const s in n){const o=n[s].actionByRoot,a=o[e];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const s in r){const o=r[s];o.restoreOriginalState(),this._removeInactiveBinding(o)}},uncacheAction:function(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}});function Ea(t,e,n){pe.call(this,t,e),this.meshPerAttribute=n||1}Ea.prototype=Object.assign(Object.create(pe.prototype),{constructor:Ea,isInstancedInterleavedBuffer:!0,copy:function(t){return pe.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this},clone:function(t){const e=pe.prototype.clone.call(this,t);return e.meshPerAttribute=this.meshPerAttribute,e},toJSON:function(t){const e=pe.prototype.toJSON.call(this,t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}});function Aa(t,e,n,i,r){this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}Object.defineProperty(Aa.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}}),Object.assign(Aa.prototype,{isGLBufferAttribute:!0,setBuffer:function(t){return this.buffer=t,this},setType:function(t,e){return this.type=t,this.elementSize=e,this},setItemSize:function(t){return this.itemSize=t,this},setCount:function(t){return this.count=t,this}});function La(t,e,n,i){this.ray=new li(t,e),this.near=n||0,this.far=i||1/0,this.camera=null,this.layers=new js,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function Ca(t,e){return t.distance-e.distance}function Bs(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)Bs(r[s],e,n,!0)}}Object.assign(La.prototype,{set:function(t,e){this.ray.set(t,e)},setFromCamera:function(t,e){e&&e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e&&e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)},intersectObject:function(t,e,n){const i=n||[];return Bs(t,this,i,e),i.sort(Ca),i},intersectObjects:function(t,e,n){const i=n||[];if(Array.isArray(t)===!1)return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),i;for(let r=0,s=t.length;r<s;r++)Bs(t[r],this,i,e);return i.sort(Ca),i}});const Ra=new H;class od{constructor(e,n){Object.defineProperty(this,"isBox2",{value:!0}),this.min=e!==void 0?e:new H(1/0,1/0),this.max=n!==void 0?n:new H(-1/0,-1/0)}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ra.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return e===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),e=new H),this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),e=new H),this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,n){return n===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),n=new H),n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,n){return n===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),n=new H),n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Ra.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}function Lr(t){ft.call(this),this.material=t,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}Lr.prototype=Object.create(ft.prototype),Lr.prototype.constructor=Lr,Lr.prototype.isImmediateRenderObject=!0;const hn=new S,Cr=new Mt,Os=new Mt;class ad extends fr{constructor(e){const n=Pa(e),i=new Dt,r=[],s=[],o=new ct(0,0,1),a=new ct(0,1,0);for(let l=0;l<n.length;l++){const f=n[l];f.parent&&f.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}i.setAttribute("position",new Pt(r,3)),i.setAttribute("color",new Pt(s,3));const c=new me({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,c),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=n,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const n=this.bones,i=this.geometry,r=i.getAttribute("position");Os.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<n.length;s++){const a=n[s];a.parent&&a.parent.isBone&&(Cr.multiplyMatrices(Os,a.matrixWorld),hn.setFromMatrixPosition(Cr),r.setXYZ(o,hn.x,hn.y,hn.z),Cr.multiplyMatrices(Os,a.parent.matrixWorld),hn.setFromMatrixPosition(Cr),r.setXYZ(o+1,hn.x,hn.y,hn.z),o+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function Pa(t){const e=[];t&&t.isBone&&e.push(t);for(let n=0;n<t.children.length;n++)e.push.apply(e,Pa(t.children[n]));return e}class cd extends fr{constructor(e=10,n=10,i=4473924,r=8947848){i=new ct(i),r=new ct(r);const s=n/2,o=e/n,a=e/2,c=[],l=[];for(let d=0,u=0,p=-a;d<=n;d++,p+=o){c.push(-a,0,p,a,0,p),c.push(p,0,-a,p,0,a);const y=d===s?i:r;y.toArray(l,u),u+=3,y.toArray(l,u),u+=3,y.toArray(l,u),u+=3,y.toArray(l,u),u+=3}const f=new Dt;f.setAttribute("position",new Pt(c,3)),f.setAttribute("color",new Pt(l,3));const h=new me({vertexColors:!0,toneMapped:!1});super(f,h),this.type="GridHelper"}}const ld=new Float32Array(1);new Int32Array(ld.buffer),lt.create=function(t,e){return console.log("THREE.Curve.create() has been deprecated"),t.prototype=Object.create(lt.prototype),t.prototype.constructor=t,t.prototype.getPoint=e,t},Object.assign(ln.prototype,{createPointsGeometry:function(t){console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const e=this.getPoints(t);return this.createGeometry(e)},createSpacedPointsGeometry:function(t){console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const e=this.getSpacedPoints(t);return this.createGeometry(e)},createGeometry:function(t){console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const e=new ge;for(let n=0,i=t.length;n<i;n++){const r=t[n];e.vertices.push(new S(r.x,r.y,r.z||0))}return e}}),Object.assign(Ie.prototype,{fromPoints:function(t){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(t)}}),Object.create(ue.prototype),Object.create(ue.prototype);function Ia(t){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),ue.call(this,t),this.type="catmullrom"}Ia.prototype=Object.create(ue.prototype),Object.assign(Ia.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}}),cd.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")},ad.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")},Object.assign(Ft.prototype,{extractUrlBase:function(t){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),jf.extractUrlBase(t)}}),Ft.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}},Object.assign(od.prototype,{center:function(t){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(t)},empty:function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(t){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},size:function(t){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(t)}}),Object.assign(Ye.prototype,{center:function(t){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(t)},empty:function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(t){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},isIntersectionSphere:function(t){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)},size:function(t){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(t)}}),Object.assign(Qe.prototype,{empty:function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()}}),er.prototype.setFromMatrix=function(t){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(t)},Object.assign(yt,{random16:function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()},nearestPowerOfTwo:function(t){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),yt.floorPowerOfTwo(t)},nextPowerOfTwo:function(t){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),yt.ceilPowerOfTwo(t)}}),Object.assign(ie.prototype,{flattenToArrayOffset:function(t,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,e)},multiplyVector3:function(t){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),t.applyMatrix3(this)},multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBufferAttribute:function(t){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),t.applyMatrix3(this)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")},getInverse:function(t){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(t).invert()}}),Object.assign(Mt.prototype,{extractPosition:function(t){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(t)},flattenToArrayOffset:function(t,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,e)},getPosition:function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new S().setFromMatrixColumn(this,3)},setRotationFromQuaternion:function(t){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(t)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(t){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},multiplyVector4:function(t){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},rotateAxis:function(t){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),t.transformDirection(this)},crossVector:function(t){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBufferAttribute:function(t){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(t,e,n,i,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(t,e,i,n,r,s)},getInverse:function(t){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(t).invert()}}),Ue.prototype.isIntersectionLine=function(t){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(t)},Object.assign(ae.prototype,{multiplyVector3:function(t){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),t.applyQuaternion(this)},inverse:function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()}}),Object.assign(li.prototype,{isIntersectionBox:function(t){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},isIntersectionPlane:function(t){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(t)},isIntersectionSphere:function(t){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)}}),Object.assign(Qt.prototype,{area:function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},barycoordFromPoint:function(t,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(t,e)},midpoint:function(t){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(t)},normal:function(t){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(t)},plane:function(t){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(t)}}),Object.assign(Qt,{barycoordFromPoint:function(t,e,n,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),Qt.getBarycoord(t,e,n,i,r)},normal:function(t,e,n,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),Qt.getNormal(t,e,n,i)}}),Object.assign(si.prototype,{extractAllPoints:function(t){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(t)},extrude:function(t){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Tf(this,t)},makeGeometry:function(t){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Cf(this,t)}}),Object.assign(H.prototype,{fromAttribute:function(t,e,n){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},distanceToManhattan:function(t){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(t)},lengthManhattan:function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}}),Object.assign(S.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(t){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(t)},getScaleFromMatrix:function(t){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(t)},getColumnFromMatrix:function(t,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,t)},applyProjection:function(t){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(t)},fromAttribute:function(t,e,n){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},distanceToManhattan:function(t){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(t)},lengthManhattan:function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}}),Object.assign(Nt.prototype,{fromAttribute:function(t,e,n){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},lengthManhattan:function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}}),Object.assign(ge.prototype,{computeTangents:function(){console.error("THREE.Geometry: .computeTangents() has been removed.")},computeLineDistances:function(){console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")},applyMatrix:function(t){return console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}}),Object.assign(ft.prototype,{getChildByName:function(t){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(t)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(t,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,t)},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},applyMatrix:function(t){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}}),Object.defineProperties(ft.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(t){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=t}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}}),Object.assign($t.prototype,{setDrawMode:function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}),Object.defineProperties($t.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),0},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}}),Object.defineProperties(as.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}}),Object.defineProperty(hs.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}}),cs.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")},Object.defineProperty(lt.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(t){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=t}}),Jt.prototype.setLens=function(t,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(t)},Object.defineProperties(Gt.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(t){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=t}},shadowCameraLeft:{set:function(t){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=t}},shadowCameraRight:{set:function(t){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=t}},shadowCameraTop:{set:function(t){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=t}},shadowCameraBottom:{set:function(t){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=t}},shadowCameraNear:{set:function(t){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=t}},shadowCameraFar:{set:function(t){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=t}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(t){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=t}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(t){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=t}},shadowMapHeight:{set:function(t){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=t}}}),Object.defineProperties(gt.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===35048},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(35048)}}}),Object.assign(gt.prototype,{setDynamic:function(t){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(t===!0?35048:35044),this},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},setArray:function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}}),Object.assign(Dt.prototype,{addIndex:function(t){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(t)},addAttribute:function(t,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(t,new gt(arguments[1],arguments[2]))):t==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(t,e)},addDrawCall:function(t,e,n){n!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(t,e)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},removeAttribute:function(t){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(t)},applyMatrix:function(t){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}}),Object.defineProperties(Dt.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}}),Object.defineProperties(Er.prototype,{maxInstancedCount:{get:function(){return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount},set:function(t){console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount=t}}}),Object.defineProperties(La.prototype,{linePrecision:{get:function(){return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold},set:function(t){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold=t}}}),Object.defineProperties(pe.prototype,{dynamic:{get:function(){return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.usage===35048},set:function(t){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.setUsage(t)}}}),Object.assign(pe.prototype,{setDynamic:function(t){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(t===!0?35048:35044),this},setArray:function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}}),Object.assign(ea.prototype,{getArrays:function(){console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")},addShapeList:function(){console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")},addShape:function(){console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")}}),Object.assign(ef.prototype,{dispose:function(){console.error("THREE.Scene: .dispose() has been removed.")}}),Object.defineProperties(pt.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new ct}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(t){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===1}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(t){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=t}}}),Object.defineProperties(wn.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}}),Object.defineProperties(Mn.prototype,{transparency:{get:function(){return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission},set:function(t){console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission=t}}}),Object.defineProperties(re.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(t){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=t}}}),Object.assign(nr.prototype,{clearTarget:function(t,e,n,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(t),this.clear(e,n,i)},animate:function(t){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(t)},getCurrentRenderTarget:function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},getMaxAnisotropy:function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},getPrecision:function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},resetGLState:function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},supportsFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},supportsInstancedArrays:function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(t){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(t)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},allocTextureUnit:function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},setTexture:function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},setTexture2D:function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},setTextureCube:function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},getActiveMipMapLevel:function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()}}),Object.defineProperties(nr.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=t}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=t}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(t){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=t===!0?3001:3e3}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}}),Object.defineProperties(Eo.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}}),Object.defineProperties(xe.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(t){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=t}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(t){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=t}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(t){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=t}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(t){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=t}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(t){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=t}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(t){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=t}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(t){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=t}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(t){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=t}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(t){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=t}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(t){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=t}}}),Hn.prototype.updateCubeMap=function(t,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(t,e)},Hn.prototype.clear=function(t,e,n,i){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(t,e,n,i)},En.crossOrigin=void 0,En.loadTexture=function(t,e,n,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const r=new Ss;r.setCrossOrigin(this.crossOrigin);const s=r.load(t,n,void 0,i);return e&&(s.mapping=e),s},En.loadTextureCube=function(t,e,n,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const r=new ws;r.setCrossOrigin(this.crossOrigin);const s=r.load(t,n,void 0,i);return e&&(s.mapping=e),s},En.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},En.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"124"}})),self.onmessage=function(t){const{position:e,normal:n,index:i,thresholdAngle:r,id:s}=t.data;try{const o=new Dt;o.setAttribute("position",new Pt(e,3)),n&&o.setAttribute("normal",new Pt(n,3)),i&&o.setIndex(new gt(i,1));const a=hd(o,r),c=[a.position.buffer,a.control0.buffer,a.control1.buffer,a.direction.buffer,a.collapse.buffer];self.postMessage({id:s,data:a},c)}catch(o){console.error("Worker Conditional Geometry Error:",o)}};function hd(t,e){let n=new ge;n.fromBufferGeometry(t),n.mergeVertices(),n.computeFaceNormals();const i=n.vertices,r=n.faces,s=[],o=[],a=[],c=[],l=[],f=Math.cos(e*Math.PI/180),h=[0,0],d={},u=["a","b","c"];let p,y,v;const g=new S,m=new S,T=new S,E=new S,w=new S;for(let x=0,A=r.length;x<A;x++){const O=r[x];for(let I=0;I<3;I++)p=O[u[I]],y=O[u[(I+1)%3]],h[0]=Math.min(p,y),h[1]=Math.max(p,y),v=h[0]+","+h[1],d[v]===void 0?d[v]={index1:h[0],index2:h[1],face1:x,face2:void 0}:d[v].face2=x}for(v in d){const x=d[v];if(!r[x.face1])continue;const A=x.face2!==void 0&&r[x.face2]?r[x.face1].normal.dot(r[x.face2].normal):1/0;if(x.face2===void 0||!r[x.face2]||A<=f){const O=i[x.index1],I=i[x.index2];if(!O||!I)continue;s.push(O.x,O.y,O.z),s.push(I.x,I.y,I.z),l.push(0,1),g.subVectors(I,O),c.push(g.x,g.y,g.z),g.subVectors(O,I),c.push(g.x,g.y,g.z);const et=new S().subVectors(I,O).normalize();if(m.copy(r[x.face1].normal),E.crossVectors(et,m),x.face2!==void 0&&r[x.face2]){const P=new S().subVectors(O,I).normalize();T.copy(r[x.face2].normal),w.crossVectors(P,T)}else w.copy(E).negate();o.push(O.x+E.x,O.y+E.y,O.z+E.z),a.push(O.x+w.x,O.y+w.y,O.z+w.z),o.push(I.x+E.x,I.y+E.y,I.z+E.z),a.push(I.x+w.x,I.y+w.y,I.z+w.z)}}return{position:new Float32Array(s),control0:new Float32Array(o),control1:new Float32Array(a),direction:new Float32Array(c),collapse:new Float32Array(l)}}})();
