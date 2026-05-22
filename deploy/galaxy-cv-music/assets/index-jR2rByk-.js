(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cl="170",Lm=0,Vu=1,Dm=2,Kf=1,Im=2,hi=3,Bi=0,tn=1,qn=2,Ni=0,Gr=1,Hu=2,Wu=3,Xu=4,Um=5,tr=100,Nm=101,Fm=102,Om=103,Bm=104,km=200,zm=201,Gm=202,Vm=203,yc=204,Tc=205,Hm=206,Wm=207,Xm=208,qm=209,Ym=210,jm=211,Km=212,$m=213,Zm=214,Ac=0,bc=1,wc=2,qr=3,Rc=4,Cc=5,Pc=6,Lc=7,$f=0,Jm=1,Qm=2,Fi=0,t0=1,e0=2,n0=3,i0=4,r0=5,s0=6,o0=7,Zf=300,Yr=301,jr=302,Dc=303,Ic=304,ia=306,Uc=1e3,nr=1001,Nc=1002,un=1003,a0=1004,co=1005,Yn=1006,Na=1007,ir=1008,gi=1009,Jf=1010,Qf=1011,Vs=1012,Pl=1013,hr=1014,jn=1015,Ys=1016,Ll=1017,Dl=1018,Kr=1020,td=35902,ed=1021,nd=1022,Fn=1023,id=1024,rd=1025,Vr=1026,$r=1027,Il=1028,Ul=1029,sd=1030,Nl=1031,Fl=1033,zo=33776,Go=33777,Vo=33778,Ho=33779,Fc=35840,Oc=35841,Bc=35842,kc=35843,zc=36196,Gc=37492,Vc=37496,Hc=37808,Wc=37809,Xc=37810,qc=37811,Yc=37812,jc=37813,Kc=37814,$c=37815,Zc=37816,Jc=37817,Qc=37818,tl=37819,el=37820,nl=37821,Wo=36492,il=36494,rl=36495,od=36283,sl=36284,ol=36285,al=36286,c0=3200,l0=3201,u0=0,h0=1,Ii="",Tn="srgb",ls="srgb-linear",ra="linear",ee="srgb",Sr=7680,qu=519,f0=512,d0=513,p0=514,ad=515,m0=516,g0=517,_0=518,v0=519,Yu=35044,ju="300 es",pi=2e3,jo=2001;class us{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fa=Math.PI/180,cl=180/Math.PI;function js(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ge[e&255]+Ge[e>>8&255]+Ge[e>>16&255]+Ge[e>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[n&63|128]+Ge[n>>8&255]+"-"+Ge[n>>16&255]+Ge[n>>24&255]+Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]).toLowerCase()}function Qe(e,t,n){return Math.max(t,Math.min(n,e))}function x0(e,t){return(e%t+t)%t}function Oa(e,t,n){return(1-n)*e+n*t}function bs(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function $e(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}class se{constructor(t=0,n=0){se.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,n,i,r,s,o,a,c,l){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,r,s,o,a,c,l)}set(t,n,i,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],d=i[2],m=i[5],_=i[8],M=r[0],p=r[3],h=r[6],A=r[1],T=r[4],S=r[7],B=r[2],C=r[5],b=r[8];return s[0]=o*M+a*A+c*B,s[3]=o*p+a*T+c*C,s[6]=o*h+a*S+c*b,s[1]=l*M+u*A+f*B,s[4]=l*p+u*T+f*C,s[7]=l*h+u*S+f*b,s[2]=d*M+m*A+_*B,s[5]=d*p+m*T+_*C,s[8]=d*h+m*S+_*b,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return n*o*u-n*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,d=a*c-u*s,m=l*s-o*c,_=n*f+i*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return t[0]=f*M,t[1]=(r*l-u*i)*M,t[2]=(a*i-r*o)*M,t[3]=d*M,t[4]=(u*n-r*c)*M,t[5]=(r*s-a*n)*M,t[6]=m*M,t[7]=(i*c-l*n)*M,t[8]=(o*n-i*s)*M,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+n,0,0,1),this}scale(t,n){return this.premultiply(Ba.makeScale(t,n)),this}rotate(t){return this.premultiply(Ba.makeRotation(-t)),this}translate(t,n){return this.premultiply(Ba.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ba=new Nt;function cd(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ko(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function M0(){const e=Ko("canvas");return e.style.display="block",e}const Ku={};function Us(e){e in Ku||(Ku[e]=!0,console.warn(e))}function S0(e,t,n){return new Promise(function(i,r){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function E0(e){const t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function y0(e){const t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const qt={enabled:!0,workingColorSpace:ls,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===ee&&(e.r=mi(e.r),e.g=mi(e.g),e.b=mi(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===ee&&(e.r=Hr(e.r),e.g=Hr(e.g),e.b=Hr(e.b))),e},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===Ii?ra:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}};function mi(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Hr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}const $u=[.64,.33,.3,.6,.15,.06],Zu=[.2126,.7152,.0722],Ju=[.3127,.329],Qu=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),th=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qt.define({[ls]:{primaries:$u,whitePoint:Ju,transfer:ra,toXYZ:Qu,fromXYZ:th,luminanceCoefficients:Zu,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:$u,whitePoint:Ju,transfer:ee,toXYZ:Qu,fromXYZ:th,luminanceCoefficients:Zu,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}});let Er;class T0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Er===void 0&&(Er=Ko("canvas")),Er.width=t.width,Er.height=t.height;const i=Er.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Er}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Ko("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=mi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(mi(n[i]/255)*255):n[i]=mi(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let A0=0;class ld{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=js(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ka(r[o].image)):s.push(ka(r[o]))}else s=ka(r);i.url=s}return n||(t.images[this.uuid]=i),i}}function ka(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?T0.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let b0=0;class je extends us{constructor(t=je.DEFAULT_IMAGE,n=je.DEFAULT_MAPPING,i=nr,r=nr,s=Yn,o=ir,a=Fn,c=gi,l=je.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=js(),this.name="",this.source=new ld(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Uc:t.x=t.x-Math.floor(t.x);break;case nr:t.x=t.x<0?0:1;break;case Nc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Uc:t.y=t.y-Math.floor(t.y);break;case nr:t.y=t.y<0?0:1;break;case Nc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=Zf;je.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,n=0,i=0,r=1){Ae.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,r){return this.x=t,this.y=n,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,r,s;const c=t.elements,l=c[0],u=c[4],f=c[8],d=c[1],m=c[5],_=c[9],M=c[2],p=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-M)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+M)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(l+1)/2,S=(m+1)/2,B=(h+1)/2,C=(u+d)/4,b=(f+M)/4,I=(_+p)/4;return T>S&&T>B?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=C/i,s=b/i):S>B?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=I/r):B<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(B),i=b/s,r=I/s),this.set(i,r,s,n),this}let A=Math.sqrt((p-_)*(p-_)+(f-M)*(f-M)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(p-_)/A,this.y=(f-M)/A,this.z=(d-u)/A,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class w0 extends us{constructor(t=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new Ae(0,0,t,n),this.scissorTest=!1,this.viewport=new Ae(0,0,t,n);const r={width:t,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new je(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new ld(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fr extends w0{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class ud extends je{constructor(t=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class R0 extends je{constructor(t=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ks{constructor(t=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=r}static slerpFlat(t,n,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],m=s[o+1],_=s[o+2],M=s[o+3];if(a===0){t[n+0]=c,t[n+1]=l,t[n+2]=u,t[n+3]=f;return}if(a===1){t[n+0]=d,t[n+1]=m,t[n+2]=_,t[n+3]=M;return}if(f!==M||c!==d||l!==m||u!==_){let p=1-a;const h=c*d+l*m+u*_+f*M,A=h>=0?1:-1,T=1-h*h;if(T>Number.EPSILON){const B=Math.sqrt(T),C=Math.atan2(B,h*A);p=Math.sin(p*C)/B,a=Math.sin(a*C)/B}const S=a*A;if(c=c*p+d*S,l=l*p+m*S,u=u*p+_*S,f=f*p+M*S,p===1-a){const B=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=B,l*=B,u*=B,f*=B}}t[n]=c,t[n+1]=l,t[n+2]=u,t[n+3]=f}static multiplyQuaternionsFlat(t,n,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[o],d=s[o+1],m=s[o+2],_=s[o+3];return t[n]=a*_+u*f+c*m-l*d,t[n+1]=c*_+u*d+l*f-a*m,t[n+2]=l*_+u*m+a*d-c*f,t[n+3]=u*_-a*f-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,r){return this._x=t,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),f=a(s/2),d=c(i/2),m=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=d*u*f+l*m*_,this._y=l*m*f-d*u*_,this._z=l*u*_+d*m*f,this._w=l*u*f-d*m*_;break;case"YXZ":this._x=d*u*f+l*m*_,this._y=l*m*f-d*u*_,this._z=l*u*_-d*m*f,this._w=l*u*f+d*m*_;break;case"ZXY":this._x=d*u*f-l*m*_,this._y=l*m*f+d*u*_,this._z=l*u*_+d*m*f,this._w=l*u*f-d*m*_;break;case"ZYX":this._x=d*u*f-l*m*_,this._y=l*m*f+d*u*_,this._z=l*u*_-d*m*f,this._w=l*u*f+d*m*_;break;case"YZX":this._x=d*u*f+l*m*_,this._y=l*m*f+d*u*_,this._z=l*u*_-d*m*f,this._w=l*u*f-d*m*_;break;case"XZY":this._x=d*u*f-l*m*_,this._y=l*m*f-d*u*_,this._z=l*u*_+d*m*f,this._w=l*u*f+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],c=n[9],l=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qe(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,r=t._y,s=t._z,o=t._w,a=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-n)*u)/l,d=Math.sin(n*u)/l;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,n=0,i=0){N.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(eh.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(eh.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const n=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+c*l+o*f-a*u,this.y=i+c*u+a*l-s*f,this.z=r+c*f+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,r=t.y,s=t.z,o=n.x,a=n.y,c=n.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return za.copy(this).projectOnVector(t),this.sub(za)}reflect(t){return this.sub(za.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return n*n+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const r=Math.sin(n)*t;return this.x=r*Math.sin(i),this.y=Math.cos(n)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const za=new N,eh=new Ks;class gr{constructor(t=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Dn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Dn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=Dn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Dn):Dn.fromBufferAttribute(s,o),Dn.applyMatrix4(t.matrixWorld),this.expandByPoint(Dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lo.copy(i.boundingBox)),lo.applyMatrix4(t.matrixWorld),this.union(lo)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Dn),Dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ws),uo.subVectors(this.max,ws),yr.subVectors(t.a,ws),Tr.subVectors(t.b,ws),Ar.subVectors(t.c,ws),Ti.subVectors(Tr,yr),Ai.subVectors(Ar,Tr),Xi.subVectors(yr,Ar);let n=[0,-Ti.z,Ti.y,0,-Ai.z,Ai.y,0,-Xi.z,Xi.y,Ti.z,0,-Ti.x,Ai.z,0,-Ai.x,Xi.z,0,-Xi.x,-Ti.y,Ti.x,0,-Ai.y,Ai.x,0,-Xi.y,Xi.x,0];return!Ga(n,yr,Tr,Ar,uo)||(n=[1,0,0,0,1,0,0,0,1],!Ga(n,yr,Tr,Ar,uo))?!1:(ho.crossVectors(Ti,Ai),n=[ho.x,ho.y,ho.z],Ga(n,yr,Tr,Ar,uo))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const oi=[new N,new N,new N,new N,new N,new N,new N,new N],Dn=new N,lo=new gr,yr=new N,Tr=new N,Ar=new N,Ti=new N,Ai=new N,Xi=new N,ws=new N,uo=new N,ho=new N,qi=new N;function Ga(e,t,n,i,r){for(let s=0,o=e.length-3;s<=o;s+=3){qi.fromArray(e,s);const a=r.x*Math.abs(qi.x)+r.y*Math.abs(qi.y)+r.z*Math.abs(qi.z),c=t.dot(qi),l=n.dot(qi),u=i.dot(qi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const C0=new gr,Rs=new N,Va=new N;class $s{constructor(t=new N,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):C0.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rs.subVectors(t,this.center);const n=Rs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Rs,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Va.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rs.copy(t.center).add(Va)),this.expandByPoint(Rs.copy(t.center).sub(Va))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new N,Ha=new N,fo=new N,bi=new N,Wa=new N,po=new N,Xa=new N;class P0{constructor(t=new N,n=new N(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ai.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,n),ai.distanceToSquared(t))}distanceSqToSegment(t,n,i,r){Ha.copy(t).add(n).multiplyScalar(.5),fo.copy(n).sub(t).normalize(),bi.copy(this.origin).sub(Ha);const s=t.distanceTo(n)*.5,o=-this.direction.dot(fo),a=bi.dot(this.direction),c=-bi.dot(fo),l=bi.lengthSq(),u=Math.abs(1-o*o);let f,d,m,_;if(u>0)if(f=o*c-a,d=o*a-c,_=s*u,f>=0)if(d>=-_)if(d<=_){const M=1/u;f*=M,d*=M,m=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l):d<=_?(f=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ha).addScaledVector(fo,d),m}intersectSphere(t,n){ai.subVectors(t.center,this.origin);const i=ai.dot(this.direction),r=ai.dot(ai)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,n,i,r,s){Wa.subVectors(n,t),po.subVectors(i,t),Xa.crossVectors(Wa,po);let o=this.direction.dot(Xa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,t);const c=a*this.direction.dot(po.crossVectors(bi,po));if(c<0)return null;const l=a*this.direction.dot(Wa.cross(bi));if(l<0||c+l>o)return null;const u=-a*bi.dot(Xa);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(t,n,i,r,s,o,a,c,l,u,f,d,m,_,M,p){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,r,s,o,a,c,l,u,f,d,m,_,M,p)}set(t,n,i,r,s,o,a,c,l,u,f,d,m,_,M,p){const h=this.elements;return h[0]=t,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=_,h[11]=M,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,r=1/br.setFromMatrixColumn(t,0).length(),s=1/br.setFromMatrixColumn(t,1).length(),o=1/br.setFromMatrixColumn(t,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=o*u,m=o*f,_=a*u,M=a*f;n[0]=c*u,n[4]=-c*f,n[8]=l,n[1]=m+_*l,n[5]=d-M*l,n[9]=-a*c,n[2]=M-d*l,n[6]=_+m*l,n[10]=o*c}else if(t.order==="YXZ"){const d=c*u,m=c*f,_=l*u,M=l*f;n[0]=d+M*a,n[4]=_*a-m,n[8]=o*l,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=m*a-_,n[6]=M+d*a,n[10]=o*c}else if(t.order==="ZXY"){const d=c*u,m=c*f,_=l*u,M=l*f;n[0]=d-M*a,n[4]=-o*f,n[8]=_+m*a,n[1]=m+_*a,n[5]=o*u,n[9]=M-d*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(t.order==="ZYX"){const d=o*u,m=o*f,_=a*u,M=a*f;n[0]=c*u,n[4]=_*l-m,n[8]=d*l+M,n[1]=c*f,n[5]=M*l+d,n[9]=m*l-_,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(t.order==="YZX"){const d=o*c,m=o*l,_=a*c,M=a*l;n[0]=c*u,n[4]=M-d*f,n[8]=_*f+m,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-l*u,n[6]=m*f+_,n[10]=d-M*f}else if(t.order==="XZY"){const d=o*c,m=o*l,_=a*c,M=a*l;n[0]=c*u,n[4]=-f,n[8]=l*u,n[1]=d*f+M,n[5]=o*u,n[9]=m*f-_,n[2]=_*f-m,n[6]=a*u,n[10]=M*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(L0,t,D0)}lookAt(t,n,i){const r=this.elements;return sn.subVectors(t,n),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),wi.crossVectors(i,sn),wi.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),wi.crossVectors(i,sn)),wi.normalize(),mo.crossVectors(sn,wi),r[0]=wi.x,r[4]=mo.x,r[8]=sn.x,r[1]=wi.y,r[5]=mo.y,r[9]=sn.y,r[2]=wi.z,r[6]=mo.z,r[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],d=i[9],m=i[13],_=i[2],M=i[6],p=i[10],h=i[14],A=i[3],T=i[7],S=i[11],B=i[15],C=r[0],b=r[4],I=r[8],E=r[12],x=r[1],w=r[5],H=r[9],k=r[13],j=r[2],K=r[6],X=r[10],Z=r[14],G=r[3],it=r[7],lt=r[11],Tt=r[15];return s[0]=o*C+a*x+c*j+l*G,s[4]=o*b+a*w+c*K+l*it,s[8]=o*I+a*H+c*X+l*lt,s[12]=o*E+a*k+c*Z+l*Tt,s[1]=u*C+f*x+d*j+m*G,s[5]=u*b+f*w+d*K+m*it,s[9]=u*I+f*H+d*X+m*lt,s[13]=u*E+f*k+d*Z+m*Tt,s[2]=_*C+M*x+p*j+h*G,s[6]=_*b+M*w+p*K+h*it,s[10]=_*I+M*H+p*X+h*lt,s[14]=_*E+M*k+p*Z+h*Tt,s[3]=A*C+T*x+S*j+B*G,s[7]=A*b+T*w+S*K+B*it,s[11]=A*I+T*H+S*X+B*lt,s[15]=A*E+T*k+S*Z+B*Tt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],d=t[10],m=t[14],_=t[3],M=t[7],p=t[11],h=t[15];return _*(+s*c*f-r*l*f-s*a*d+i*l*d+r*a*m-i*c*m)+M*(+n*c*m-n*l*d+s*o*d-r*o*m+r*l*u-s*c*u)+p*(+n*l*f-n*a*m-s*o*f+i*o*m+s*a*u-i*l*u)+h*(-r*a*u-n*c*f+n*a*d+r*o*f-i*o*d+i*c*u)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],d=t[10],m=t[11],_=t[12],M=t[13],p=t[14],h=t[15],A=f*p*l-M*d*l+M*c*m-a*p*m-f*c*h+a*d*h,T=_*d*l-u*p*l-_*c*m+o*p*m+u*c*h-o*d*h,S=u*M*l-_*f*l+_*a*m-o*M*m-u*a*h+o*f*h,B=_*f*c-u*M*c-_*a*d+o*M*d+u*a*p-o*f*p,C=n*A+i*T+r*S+s*B;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return t[0]=A*b,t[1]=(M*d*s-f*p*s-M*r*m+i*p*m+f*r*h-i*d*h)*b,t[2]=(a*p*s-M*c*s+M*r*l-i*p*l-a*r*h+i*c*h)*b,t[3]=(f*c*s-a*d*s-f*r*l+i*d*l+a*r*m-i*c*m)*b,t[4]=T*b,t[5]=(u*p*s-_*d*s+_*r*m-n*p*m-u*r*h+n*d*h)*b,t[6]=(_*c*s-o*p*s-_*r*l+n*p*l+o*r*h-n*c*h)*b,t[7]=(o*d*s-u*c*s+u*r*l-n*d*l-o*r*m+n*c*m)*b,t[8]=S*b,t[9]=(_*f*s-u*M*s-_*i*m+n*M*m+u*i*h-n*f*h)*b,t[10]=(o*M*s-_*a*s+_*i*l-n*M*l-o*i*h+n*a*h)*b,t[11]=(u*a*s-o*f*s-u*i*l+n*f*l+o*i*m-n*a*m)*b,t[12]=B*b,t[13]=(u*M*r-_*f*r+_*i*d-n*M*d-u*i*p+n*f*p)*b,t[14]=(_*a*r-o*M*r-_*i*c+n*M*c+o*i*p-n*a*p)*b,t[15]=(o*f*r-u*a*r+u*i*c-n*f*c-o*i*d+n*a*d)*b,this}scale(t){const n=this.elements,i=t.x,r=t.y,s=t.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,n,r,1,0,0,0,0,1),this}compose(t,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,c=n._w,l=s+s,u=o+o,f=a+a,d=s*l,m=s*u,_=s*f,M=o*u,p=o*f,h=a*f,A=c*l,T=c*u,S=c*f,B=i.x,C=i.y,b=i.z;return r[0]=(1-(M+h))*B,r[1]=(m+S)*B,r[2]=(_-T)*B,r[3]=0,r[4]=(m-S)*C,r[5]=(1-(d+h))*C,r[6]=(p+A)*C,r[7]=0,r[8]=(_+T)*b,r[9]=(p-A)*b,r[10]=(1-(d+M))*b,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,i){const r=this.elements;let s=br.set(r[0],r[1],r[2]).length();const o=br.set(r[4],r[5],r[6]).length(),a=br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],In.copy(this);const l=1/s,u=1/o,f=1/a;return In.elements[0]*=l,In.elements[1]*=l,In.elements[2]*=l,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=f,In.elements[9]*=f,In.elements[10]*=f,n.setFromRotationMatrix(In),i.x=s,i.y=o,i.z=a,this}makePerspective(t,n,i,r,s,o,a=pi){const c=this.elements,l=2*s/(n-t),u=2*s/(i-r),f=(n+t)/(n-t),d=(i+r)/(i-r);let m,_;if(a===pi)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===jo)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,r,s,o,a=pi){const c=this.elements,l=1/(n-t),u=1/(i-r),f=1/(o-s),d=(n+t)*l,m=(i+r)*u;let _,M;if(a===pi)_=(o+s)*f,M=-2*f;else if(a===jo)_=s*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=M,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const br=new N,In=new ve,L0=new N(0,0,0),D0=new N(1,1,1),wi=new N,mo=new N,sn=new N,nh=new ve,ih=new Ks;class _i{constructor(t=0,n=0,i=0,r=_i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,r=this._order){return this._x=t,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return nh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nh,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return ih.setFromEuler(this),this.setFromQuaternion(ih,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_i.DEFAULT_ORDER="XYZ";class hd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let I0=0;const rh=new N,wr=new Ks,ci=new ve,go=new N,Cs=new N,U0=new N,N0=new Ks,sh=new N(1,0,0),oh=new N(0,1,0),ah=new N(0,0,1),ch={type:"added"},F0={type:"removed"},Rr={type:"childadded",child:null},qa={type:"childremoved",child:null};class en extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const t=new N,n=new _i,i=new Ks,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ve},normalMatrix:{value:new Nt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return wr.setFromAxisAngle(t,n),this.quaternion.multiply(wr),this}rotateOnWorldAxis(t,n){return wr.setFromAxisAngle(t,n),this.quaternion.premultiply(wr),this}rotateX(t){return this.rotateOnAxis(sh,t)}rotateY(t){return this.rotateOnAxis(oh,t)}rotateZ(t){return this.rotateOnAxis(ah,t)}translateOnAxis(t,n){return rh.copy(t).applyQuaternion(this.quaternion),this.position.add(rh.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(sh,t)}translateY(t){return this.translateOnAxis(oh,t)}translateZ(t){return this.translateOnAxis(ah,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?go.copy(t):go.set(t,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Cs,go,this.up):ci.lookAt(go,Cs,this.up),this.quaternion.setFromRotationMatrix(ci),r&&(ci.extractRotation(r.matrixWorld),wr.setFromRotationMatrix(ci),this.quaternion.premultiply(wr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ch),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(F0),qa.child=t,this.dispatchEvent(qa),qa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ch),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,n);if(o!==void 0)return o}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,t,U0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,N0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(n){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),d=o(t.skeletons),m=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}en.DEFAULT_UP=new N(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new N,li=new N,Ya=new N,ui=new N,Cr=new N,Pr=new N,lh=new N,ja=new N,Ka=new N,$a=new N,Za=new Ae,Ja=new Ae,Qa=new Ae;class Nn{constructor(t=new N,n=new N,i=new N){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,r){r.subVectors(i,n),Un.subVectors(t,n),r.cross(Un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,n,i,r,s){Un.subVectors(r,n),li.subVectors(i,n),Ya.subVectors(t,n);const o=Un.dot(Un),a=Un.dot(li),c=Un.dot(Ya),l=li.dot(li),u=li.dot(Ya),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(l*c-a*u)*d,_=(o*u-a*c)*d;return s.set(1-m-_,_,m)}static containsPoint(t,n,i,r){return this.getBarycoord(t,n,i,r,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(t,n,i,r,s,o,a,c){return this.getBarycoord(t,n,i,r,ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ui.x),c.addScaledVector(o,ui.y),c.addScaledVector(a,ui.z),c)}static getInterpolatedAttribute(t,n,i,r,s,o){return Za.setScalar(0),Ja.setScalar(0),Qa.setScalar(0),Za.fromBufferAttribute(t,n),Ja.fromBufferAttribute(t,i),Qa.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Za,s.x),o.addScaledVector(Ja,s.y),o.addScaledVector(Qa,s.z),o}static isFrontFacing(t,n,i,r){return Un.subVectors(i,n),li.subVectors(t,n),Un.cross(li).dot(r)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,r){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,i,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Un.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Un.cross(li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Nn.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,r,s){return Nn.getInterpolation(t,this.a,this.b,this.c,n,i,r,s)}containsPoint(t){return Nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,r=this.b,s=this.c;let o,a;Cr.subVectors(r,i),Pr.subVectors(s,i),ja.subVectors(t,i);const c=Cr.dot(ja),l=Pr.dot(ja);if(c<=0&&l<=0)return n.copy(i);Ka.subVectors(t,r);const u=Cr.dot(Ka),f=Pr.dot(Ka);if(u>=0&&f<=u)return n.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),n.copy(i).addScaledVector(Cr,o);$a.subVectors(t,s);const m=Cr.dot($a),_=Pr.dot($a);if(_>=0&&m<=_)return n.copy(s);const M=m*l-c*_;if(M<=0&&l>=0&&_<=0)return a=l/(l-_),n.copy(i).addScaledVector(Pr,a);const p=u*_-m*f;if(p<=0&&f-u>=0&&m-_>=0)return lh.subVectors(s,r),a=(f-u)/(f-u+(m-_)),n.copy(r).addScaledVector(lh,a);const h=1/(p+M+d);return o=M*h,a=d*h,n.copy(i).addScaledVector(Cr,o).addScaledVector(Pr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},_o={h:0,s:0,l:0};function tc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class Qt{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,n),this}setRGB(t,n,i,r=qt.workingColorSpace){return this.r=t,this.g=n,this.b=i,qt.toWorkingColorSpace(this,r),this}setHSL(t,n,i,r=qt.workingColorSpace){if(t=x0(t,1),n=Qe(n,0,1),i=Qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=tc(o,s,t+1/3),this.g=tc(o,s,t),this.b=tc(o,s,t-1/3)}return qt.toWorkingColorSpace(this,r),this}setStyle(t,n=Tn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Tn){const i=fd[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}copyLinearToSRGB(t){return this.r=Hr(t.r),this.g=Hr(t.g),this.b=Hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Tn){return qt.fromWorkingColorSpace(Ve.copy(this),t),Math.round(Qe(Ve.r*255,0,255))*65536+Math.round(Qe(Ve.g*255,0,255))*256+Math.round(Qe(Ve.b*255,0,255))}getHexString(t=Tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=qt.workingColorSpace){qt.fromWorkingColorSpace(Ve.copy(this),n);const i=Ve.r,r=Ve.g,s=Ve.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,n=qt.workingColorSpace){return qt.fromWorkingColorSpace(Ve.copy(this),n),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Tn){qt.fromWorkingColorSpace(Ve.copy(this),t);const n=Ve.r,i=Ve.g,r=Ve.b;return t!==Tn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,n,i){return this.getHSL(Ri),this.setHSL(Ri.h+t,Ri.s+n,Ri.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Ri),t.getHSL(_o);const i=Oa(Ri.h,_o.h,n),r=Oa(Ri.s,_o.s,n),s=Oa(Ri.l,_o.l,n);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new Qt;Qt.NAMES=fd;let O0=0;class sa extends us{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=js(),this.name="",this.blending=Gr,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yc,this.blendDst=Tc,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(i.blending=this.blending),this.side!==Bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yc&&(i.blendSrc=this.blendSrc),this.blendDst!==Tc&&(i.blendDst=this.blendDst),this.blendEquation!==tr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(n){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class oa extends sa{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=$f,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new N,vo=new se;class On{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Yu,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=n.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)vo.fromBufferAttribute(this,n),vo.applyMatrix3(t),this.setXY(n,vo.x,vo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)be.fromBufferAttribute(this,n),be.applyMatrix3(t),this.setXYZ(n,be.x,be.y,be.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)be.fromBufferAttribute(this,n),be.applyMatrix4(t),this.setXYZ(n,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)be.fromBufferAttribute(this,n),be.applyNormalMatrix(t),this.setXYZ(n,be.x,be.y,be.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)be.fromBufferAttribute(this,n),be.transformDirection(t),this.setXYZ(n,be.x,be.y,be.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=bs(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=$e(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=bs(n,this.array)),n}setX(t,n){return this.normalized&&(n=$e(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=bs(n,this.array)),n}setY(t,n){return this.normalized&&(n=$e(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=bs(n,this.array)),n}setZ(t,n){return this.normalized&&(n=$e(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=bs(n,this.array)),n}setW(t,n){return this.normalized&&(n=$e(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=$e(n,this.array),i=$e(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,r){return t*=this.itemSize,this.normalized&&(n=$e(n,this.array),i=$e(i,this.array),r=$e(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,n,i,r,s){return t*=this.itemSize,this.normalized&&(n=$e(n,this.array),i=$e(i,this.array),r=$e(r,this.array),s=$e(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Yu&&(t.usage=this.usage),t}}class dd extends On{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class pd extends On{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class $n extends On{constructor(t,n,i){super(new Float32Array(t),n,i)}}let B0=0;const Mn=new ve,ec=new en,Lr=new N,on=new gr,Ps=new gr,Fe=new N;class Vi extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cd(t)?pd:dd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Nt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,n,i){return Mn.makeTranslation(t,n,i),this.applyMatrix4(Mn),this}scale(t,n,i){return Mn.makeScale(t,n,i),this.applyMatrix4(Mn),this}lookAt(t){return ec.lookAt(t),ec.updateMatrix(),this.applyMatrix4(ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $n(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=t[i];n.setXYZ(i,s.x,s.y,s.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gr);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];on.setFromBufferAttribute(s),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $s);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(t),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ps.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(on.min,Ps.min),on.expandByPoint(Fe),Fe.addVectors(on.max,Ps.max),on.expandByPoint(Fe)):(on.expandByPoint(Ps.min),on.expandByPoint(Ps.max))}on.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Fe.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Fe));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Fe.fromBufferAttribute(a,l),c&&(Lr.fromBufferAttribute(t,l),Fe.add(Lr)),r=Math.max(r,i.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<i.count;I++)a[I]=new N,c[I]=new N;const l=new N,u=new N,f=new N,d=new se,m=new se,_=new se,M=new N,p=new N;function h(I,E,x){l.fromBufferAttribute(i,I),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,x),d.fromBufferAttribute(s,I),m.fromBufferAttribute(s,E),_.fromBufferAttribute(s,x),u.sub(l),f.sub(l),m.sub(d),_.sub(d);const w=1/(m.x*_.y-_.x*m.y);isFinite(w)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(w),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(w),a[I].add(M),a[E].add(M),a[x].add(M),c[I].add(p),c[E].add(p),c[x].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let I=0,E=A.length;I<E;++I){const x=A[I],w=x.start,H=x.count;for(let k=w,j=w+H;k<j;k+=3)h(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const T=new N,S=new N,B=new N,C=new N;function b(I){B.fromBufferAttribute(r,I),C.copy(B);const E=a[I];T.copy(E),T.sub(B.multiplyScalar(B.dot(E))).normalize(),S.crossVectors(C,E);const w=S.dot(c[I])<0?-1:1;o.setXYZW(I,T.x,T.y,T.z,w)}for(let I=0,E=A.length;I<E;++I){const x=A[I],w=x.start,H=x.count;for(let k=w,j=w+H;k<j;k+=3)b(t.getX(k+0)),b(t.getX(k+1)),b(t.getX(k+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new On(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new N,s=new N,o=new N,a=new N,c=new N,l=new N,u=new N,f=new N;if(t)for(let d=0,m=t.count;d<m;d+=3){const _=t.getX(d+0),M=t.getX(d+1),p=t.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,M),o.fromBufferAttribute(n,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,M),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Fe.fromBufferAttribute(t,n),Fe.normalize(),t.setXYZ(n,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,f=a.normalized,d=new l.constructor(c.length*u);let m=0,_=0;for(let M=0,p=c.length;M<p;M++){a.isInterleavedBufferAttribute?m=c[M]*a.data.stride+a.offset:m=c[M]*u;for(let h=0;h<u;h++)d[_++]=l[m++]}return new On(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Vi,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,i);n.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const d=l[u],m=t(d,i);c.push(m)}n.morphAttributes[a]=c}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const m=l[f];u.push(m.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(n));const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(n))}const s=t.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uh=new ve,Yi=new P0,xo=new $s,hh=new N,Mo=new N,So=new N,Eo=new N,nc=new N,yo=new N,fh=new N,To=new N;class bn extends en{constructor(t=new Vi,n=new oa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){yo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],f=s[c];u!==0&&(nc.fromBufferAttribute(f,t),o?yo.addScaledVector(nc,u):yo.addScaledVector(nc.sub(n),u))}n.add(yo)}return n}raycast(t,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(s),Yi.copy(t.ray).recast(t.near),!(xo.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(xo,hh)===null||Yi.origin.distanceToSquared(hh)>(t.far-t.near)**2))&&(uh.copy(s).invert(),Yi.copy(t.ray).applyMatrix4(uh),!(i.boundingBox!==null&&Yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Yi)))}_computeIntersections(t,n,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=d.length;_<M;_++){const p=d[_],h=o[p.materialIndex],A=Math.max(p.start,m.start),T=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=A,B=T;S<B;S+=3){const C=a.getX(S),b=a.getX(S+1),I=a.getX(S+2);r=Ao(this,h,t,i,l,u,f,C,b,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let p=_,h=M;p<h;p+=3){const A=a.getX(p),T=a.getX(p+1),S=a.getX(p+2);r=Ao(this,o,t,i,l,u,f,A,T,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,M=d.length;_<M;_++){const p=d[_],h=o[p.materialIndex],A=Math.max(p.start,m.start),T=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let S=A,B=T;S<B;S+=3){const C=S,b=S+1,I=S+2;r=Ao(this,h,t,i,l,u,f,C,b,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),M=Math.min(c.count,m.start+m.count);for(let p=_,h=M;p<h;p+=3){const A=p,T=p+1,S=p+2;r=Ao(this,o,t,i,l,u,f,A,T,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function k0(e,t,n,i,r,s,o,a){let c;if(t.side===tn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===Bi,a),c===null)return null;To.copy(a),To.applyMatrix4(e.matrixWorld);const l=n.ray.origin.distanceTo(To);return l<n.near||l>n.far?null:{distance:l,point:To.clone(),object:e}}function Ao(e,t,n,i,r,s,o,a,c,l){e.getVertexPosition(a,Mo),e.getVertexPosition(c,So),e.getVertexPosition(l,Eo);const u=k0(e,t,n,i,Mo,So,Eo,fh);if(u){const f=new N;Nn.getBarycoord(fh,Mo,So,Eo,f),r&&(u.uv=Nn.getInterpolatedAttribute(r,a,c,l,f,new se)),s&&(u.uv1=Nn.getInterpolatedAttribute(s,a,c,l,f,new se)),o&&(u.normal=Nn.getInterpolatedAttribute(o,a,c,l,f,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new N,materialIndex:0};Nn.getNormal(Mo,So,Eo,d.normal),u.face=d,u.barycoord=f}return u}class Zs extends Vi{constructor(t=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let d=0,m=0;_("z","y","x",-1,-1,i,n,t,o,s,0),_("z","y","x",1,-1,i,n,-t,o,s,1),_("x","z","y",1,1,t,i,n,r,o,2),_("x","z","y",1,-1,t,i,-n,r,o,3),_("x","y","z",1,-1,t,n,i,r,s,4),_("x","y","z",-1,-1,t,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new $n(l,3)),this.setAttribute("normal",new $n(u,3)),this.setAttribute("uv",new $n(f,2));function _(M,p,h,A,T,S,B,C,b,I,E){const x=S/b,w=B/I,H=S/2,k=B/2,j=C/2,K=b+1,X=I+1;let Z=0,G=0;const it=new N;for(let lt=0;lt<X;lt++){const Tt=lt*w-k;for(let Bt=0;Bt<K;Bt++){const ie=Bt*x-H;it[M]=ie*A,it[p]=Tt*T,it[h]=j,l.push(it.x,it.y,it.z),it[M]=0,it[p]=0,it[h]=C>0?1:-1,u.push(it.x,it.y,it.z),f.push(Bt/b),f.push(1-lt/I),Z+=1}}for(let lt=0;lt<I;lt++)for(let Tt=0;Tt<b;Tt++){const Bt=d+Tt+K*lt,ie=d+Tt+K*(lt+1),W=d+(Tt+1)+K*(lt+1),tt=d+(Tt+1)+K*lt;c.push(Bt,ie,tt),c.push(ie,W,tt),G+=6}a.addGroup(m,G,E),m+=G,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zr(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const r=e[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=r.clone():Array.isArray(r)?t[n][i]=r.slice():t[n][i]=r}}return t}function Ye(e){const t={};for(let n=0;n<e.length;n++){const i=Zr(e[n]);for(const r in i)t[r]=i[r]}return t}function z0(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function md(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const G0={clone:Zr,merge:Ye};var V0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends sa{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=V0,this.fragmentShader=H0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zr(t.uniforms),this.uniformsGroups=z0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class gd extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=pi}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new N,dh=new se,ph=new se;class An extends gd{constructor(t=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=cl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cl*2*Math.atan(Math.tan(Fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z)}getViewSize(t,n){return this.getViewBounds(t,dh,ph),n.subVectors(ph,dh)}setViewOffset(t,n,i,r,s,o){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Fa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,n-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Dr=-90,Ir=1;class W0 extends en{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new An(Dr,Ir,t,n);r.layers=this.layers,this.add(r);const s=new An(Dr,Ir,t,n);s.layers=this.layers,this.add(s);const o=new An(Dr,Ir,t,n);o.layers=this.layers,this.add(o);const a=new An(Dr,Ir,t,n);a.layers=this.layers,this.add(a);const c=new An(Dr,Ir,t,n);c.layers=this.layers,this.add(c);const l=new An(Dr,Ir,t,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,c]=n;for(const l of n)this.remove(l);if(t===pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===jo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of n)this.add(l),l.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(n,s),t.setRenderTarget(i,1,r),t.render(n,o),t.setRenderTarget(i,2,r),t.render(n,a),t.setRenderTarget(i,3,r),t.render(n,c),t.setRenderTarget(i,4,r),t.render(n,l),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,r),t.render(n,u),t.setRenderTarget(f,d,m),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class _d extends je{constructor(t,n,i,r,s,o,a,c,l,u){t=t!==void 0?t:[],n=n!==void 0?n:Yr,super(t,n,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class X0 extends fr{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new _d(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Yn}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Zs(5,5,5),s=new ki({name:"CubemapFromEquirect",uniforms:Zr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:Ni});s.uniforms.tEquirect.value=n;const o=new bn(r,s),a=n.minFilter;return n.minFilter===ir&&(n.minFilter=Yn),new W0(1,10,this).update(t,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,n,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(n,i,r);t.setRenderTarget(s)}}const ic=new N,q0=new N,Y0=new Nt;class Ji{constructor(t=new N(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,r){return this.normal.set(t,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const r=ic.subVectors(i,n).cross(q0.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(ic),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||Y0.getNormalMatrix(t),r=this.coplanarPoint(ic).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new $s,bo=new N;class vd{constructor(t=new Ji,n=new Ji,i=new Ji,r=new Ji,s=new Ji,o=new Ji){this.planes=[t,n,i,r,s,o]}set(t,n,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=pi){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],f=r[6],d=r[7],m=r[8],_=r[9],M=r[10],p=r[11],h=r[12],A=r[13],T=r[14],S=r[15];if(i[0].setComponents(c-s,d-l,p-m,S-h).normalize(),i[1].setComponents(c+s,d+l,p+m,S+h).normalize(),i[2].setComponents(c+o,d+u,p+_,S+A).normalize(),i[3].setComponents(c-o,d-u,p-_,S-A).normalize(),i[4].setComponents(c-a,d-f,p-M,S-T).normalize(),n===pi)i[5].setComponents(c+a,d+f,p+M,S+T).normalize();else if(n===jo)i[5].setComponents(a,f,M,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ji.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(t){return ji.center.set(0,0,0),ji.radius=.7071067811865476,ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(t){const n=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(bo.x=r.normal.x>0?t.max.x:t.min.x,bo.y=r.normal.y>0?t.max.y:t.min.y,bo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(bo)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xd(){let e=null,t=!1,n=null,i=null;function r(s,o){n(s,o),i=e.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(r),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function j0(e){const t=new WeakMap;function n(a,c){const l=a.array,u=a.usage,f=l.byteLength,d=e.createBuffer();e.bindBuffer(c,d),e.bufferData(c,l,u),a.onUploadCallback();let m;if(l instanceof Float32Array)m=e.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=e.HALF_FLOAT:m=e.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=e.SHORT;else if(l instanceof Uint32Array)m=e.UNSIGNED_INT;else if(l instanceof Int32Array)m=e.INT;else if(l instanceof Int8Array)m=e.BYTE;else if(l instanceof Uint8Array)m=e.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){const u=c.array,f=c.updateRanges;if(e.bindBuffer(l,a),f.length===0)e.bufferSubData(l,0,u);else{f.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<f.length;m++){const _=f[d],M=f[m];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++d,f[d]=M)}f.length=d+1;for(let m=0,_=f.length;m<_;m++){const M=f[m];e.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(e.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,n(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class aa extends Vi{constructor(t=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:r};const s=t/2,o=n/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,f=t/a,d=n/c,m=[],_=[],M=[],p=[];for(let h=0;h<u;h++){const A=h*d-o;for(let T=0;T<l;T++){const S=T*f-s;_.push(S,-A,0),M.push(0,0,1),p.push(T/a),p.push(1-h/c)}}for(let h=0;h<c;h++)for(let A=0;A<a;A++){const T=A+l*h,S=A+l*(h+1),B=A+1+l*(h+1),C=A+1+l*h;m.push(T,S,C),m.push(S,B,C)}this.setIndex(m),this.setAttribute("position",new $n(_,3)),this.setAttribute("normal",new $n(M,3)),this.setAttribute("uv",new $n(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new aa(t.width,t.height,t.widthSegments,t.heightSegments)}}var K0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Z0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,J0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ng=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ig=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,og=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ag=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ug=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,Mg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ag="gl_FragColor = linearToOutputTexel( gl_FragColor );",bg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wg=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Rg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lg=`#ifdef USE_ENVMAP
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
#endif`,Dg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ig=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ug=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ng=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Og=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
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
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Vg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Yg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
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
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$g=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,e_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,r_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,a_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,c_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,l_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,h_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,d_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,p_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,__=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,v_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,T_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,L_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,D_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,I_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,U_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,F_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O_=`#ifdef USE_SKINNING
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
#endif`,B_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,z_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,V_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,H_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,W_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,X_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Y_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const j_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,e1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,n1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,i1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,r1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,l1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
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
}`,h1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,d1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,m1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,g1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
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
}`,_1=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
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
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,x1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
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
}`,S1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
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
}`,y1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,b1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,w1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ot={alphahash_fragment:K0,alphahash_pars_fragment:$0,alphamap_fragment:Z0,alphamap_pars_fragment:J0,alphatest_fragment:Q0,alphatest_pars_fragment:tg,aomap_fragment:eg,aomap_pars_fragment:ng,batching_pars_vertex:ig,batching_vertex:rg,begin_vertex:sg,beginnormal_vertex:og,bsdfs:ag,iridescence_fragment:cg,bumpmap_pars_fragment:lg,clipping_planes_fragment:ug,clipping_planes_pars_fragment:hg,clipping_planes_pars_vertex:fg,clipping_planes_vertex:dg,color_fragment:pg,color_pars_fragment:mg,color_pars_vertex:gg,color_vertex:_g,common:vg,cube_uv_reflection_fragment:xg,defaultnormal_vertex:Mg,displacementmap_pars_vertex:Sg,displacementmap_vertex:Eg,emissivemap_fragment:yg,emissivemap_pars_fragment:Tg,colorspace_fragment:Ag,colorspace_pars_fragment:bg,envmap_fragment:wg,envmap_common_pars_fragment:Rg,envmap_pars_fragment:Cg,envmap_pars_vertex:Pg,envmap_physical_pars_fragment:Gg,envmap_vertex:Lg,fog_vertex:Dg,fog_pars_vertex:Ig,fog_fragment:Ug,fog_pars_fragment:Ng,gradientmap_pars_fragment:Fg,lightmap_pars_fragment:Og,lights_lambert_fragment:Bg,lights_lambert_pars_fragment:kg,lights_pars_begin:zg,lights_toon_fragment:Vg,lights_toon_pars_fragment:Hg,lights_phong_fragment:Wg,lights_phong_pars_fragment:Xg,lights_physical_fragment:qg,lights_physical_pars_fragment:Yg,lights_fragment_begin:jg,lights_fragment_maps:Kg,lights_fragment_end:$g,logdepthbuf_fragment:Zg,logdepthbuf_pars_fragment:Jg,logdepthbuf_pars_vertex:Qg,logdepthbuf_vertex:t_,map_fragment:e_,map_pars_fragment:n_,map_particle_fragment:i_,map_particle_pars_fragment:r_,metalnessmap_fragment:s_,metalnessmap_pars_fragment:o_,morphinstance_vertex:a_,morphcolor_vertex:c_,morphnormal_vertex:l_,morphtarget_pars_vertex:u_,morphtarget_vertex:h_,normal_fragment_begin:f_,normal_fragment_maps:d_,normal_pars_fragment:p_,normal_pars_vertex:m_,normal_vertex:g_,normalmap_pars_fragment:__,clearcoat_normal_fragment_begin:v_,clearcoat_normal_fragment_maps:x_,clearcoat_pars_fragment:M_,iridescence_pars_fragment:S_,opaque_fragment:E_,packing:y_,premultiplied_alpha_fragment:T_,project_vertex:A_,dithering_fragment:b_,dithering_pars_fragment:w_,roughnessmap_fragment:R_,roughnessmap_pars_fragment:C_,shadowmap_pars_fragment:P_,shadowmap_pars_vertex:L_,shadowmap_vertex:D_,shadowmask_pars_fragment:I_,skinbase_vertex:U_,skinning_pars_vertex:N_,skinning_vertex:F_,skinnormal_vertex:O_,specularmap_fragment:B_,specularmap_pars_fragment:k_,tonemapping_fragment:z_,tonemapping_pars_fragment:G_,transmission_fragment:V_,transmission_pars_fragment:H_,uv_pars_fragment:W_,uv_pars_vertex:X_,uv_vertex:q_,worldpos_vertex:Y_,background_vert:j_,background_frag:K_,backgroundCube_vert:$_,backgroundCube_frag:Z_,cube_vert:J_,cube_frag:Q_,depth_vert:t1,depth_frag:e1,distanceRGBA_vert:n1,distanceRGBA_frag:i1,equirect_vert:r1,equirect_frag:s1,linedashed_vert:o1,linedashed_frag:a1,meshbasic_vert:c1,meshbasic_frag:l1,meshlambert_vert:u1,meshlambert_frag:h1,meshmatcap_vert:f1,meshmatcap_frag:d1,meshnormal_vert:p1,meshnormal_frag:m1,meshphong_vert:g1,meshphong_frag:_1,meshphysical_vert:v1,meshphysical_frag:x1,meshtoon_vert:M1,meshtoon_frag:S1,points_vert:E1,points_frag:y1,shadow_vert:T1,shadow_frag:A1,sprite_vert:b1,sprite_frag:w1},et={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},Xn={basic:{uniforms:Ye([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Ye([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Ye([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Ye([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Ye([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Ye([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Ye([et.points,et.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Ye([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Ye([et.common,et.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Ye([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Ye([et.sprite,et.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Ye([et.common,et.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Ye([et.lights,et.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};Xn.physical={uniforms:Ye([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const wo={r:0,b:0,g:0},Ki=new _i,R1=new ve;function C1(e,t,n,i,r,s,o){const a=new Qt(0);let c=s===!0?0:1,l,u,f=null,d=0,m=null;function _(A){let T=A.isScene===!0?A.background:null;return T&&T.isTexture&&(T=(A.backgroundBlurriness>0?n:t).get(T)),T}function M(A){let T=!1;const S=_(A);S===null?h(a,c):S&&S.isColor&&(h(S,1),T=!0);const B=e.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,o):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(e.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function p(A,T){const S=_(T);S&&(S.isCubeTexture||S.mapping===ia)?(u===void 0&&(u=new bn(new Zs(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:Zr(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(B,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ki.copy(T.backgroundRotation),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(R1.makeRotationFromEuler(Ki)),u.material.toneMapped=qt.getTransfer(S.colorSpace)!==ee,(f!==S||d!==S.version||m!==e.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,m=e.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new bn(new aa(2,2),new ki({name:"BackgroundMaterial",uniforms:Zr(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=qt.getTransfer(S.colorSpace)!==ee,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||m!==e.toneMapping)&&(l.material.needsUpdate=!0,f=S,d=S.version,m=e.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function h(A,T){A.getRGB(wo,md(e)),i.buffers.color.setClear(wo.r,wo.g,wo.b,T,o)}return{getClearColor:function(){return a},setClearColor:function(A,T=1){a.set(A),c=T,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(A){c=A,h(a,c)},render:M,addToRenderList:p}}function P1(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(x,w,H,k,j){let K=!1;const X=f(k,H,w);s!==X&&(s=X,l(s.object)),K=m(x,k,H,j),K&&_(x,k,H,j),j!==null&&t.update(j,e.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,S(x,w,H,k),j!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function c(){return e.createVertexArray()}function l(x){return e.bindVertexArray(x)}function u(x){return e.deleteVertexArray(x)}function f(x,w,H){const k=H.wireframe===!0;let j=i[x.id];j===void 0&&(j={},i[x.id]=j);let K=j[w.id];K===void 0&&(K={},j[w.id]=K);let X=K[k];return X===void 0&&(X=d(c()),K[k]=X),X}function d(x){const w=[],H=[],k=[];for(let j=0;j<n;j++)w[j]=0,H[j]=0,k[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:H,attributeDivisors:k,object:x,attributes:{},index:null}}function m(x,w,H,k){const j=s.attributes,K=w.attributes;let X=0;const Z=H.getAttributes();for(const G in Z)if(Z[G].location>=0){const lt=j[G];let Tt=K[G];if(Tt===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(Tt=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(Tt=x.instanceColor)),lt===void 0||lt.attribute!==Tt||Tt&&lt.data!==Tt.data)return!0;X++}return s.attributesNum!==X||s.index!==k}function _(x,w,H,k){const j={},K=w.attributes;let X=0;const Z=H.getAttributes();for(const G in Z)if(Z[G].location>=0){let lt=K[G];lt===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(lt=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(lt=x.instanceColor));const Tt={};Tt.attribute=lt,lt&&lt.data&&(Tt.data=lt.data),j[G]=Tt,X++}s.attributes=j,s.attributesNum=X,s.index=k}function M(){const x=s.newAttributes;for(let w=0,H=x.length;w<H;w++)x[w]=0}function p(x){h(x,0)}function h(x,w){const H=s.newAttributes,k=s.enabledAttributes,j=s.attributeDivisors;H[x]=1,k[x]===0&&(e.enableVertexAttribArray(x),k[x]=1),j[x]!==w&&(e.vertexAttribDivisor(x,w),j[x]=w)}function A(){const x=s.newAttributes,w=s.enabledAttributes;for(let H=0,k=w.length;H<k;H++)w[H]!==x[H]&&(e.disableVertexAttribArray(H),w[H]=0)}function T(x,w,H,k,j,K,X){X===!0?e.vertexAttribIPointer(x,w,H,j,K):e.vertexAttribPointer(x,w,H,k,j,K)}function S(x,w,H,k){M();const j=k.attributes,K=H.getAttributes(),X=w.defaultAttributeValues;for(const Z in K){const G=K[Z];if(G.location>=0){let it=j[Z];if(it===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(it=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(it=x.instanceColor)),it!==void 0){const lt=it.normalized,Tt=it.itemSize,Bt=t.get(it);if(Bt===void 0)continue;const ie=Bt.buffer,W=Bt.type,tt=Bt.bytesPerElement,xt=W===e.INT||W===e.UNSIGNED_INT||it.gpuType===Pl;if(it.isInterleavedBufferAttribute){const rt=it.data,Ct=rt.stride,Dt=it.offset;if(rt.isInstancedInterleavedBuffer){for(let kt=0;kt<G.locationSize;kt++)h(G.location+kt,rt.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let kt=0;kt<G.locationSize;kt++)p(G.location+kt);e.bindBuffer(e.ARRAY_BUFFER,ie);for(let kt=0;kt<G.locationSize;kt++)T(G.location+kt,Tt/G.locationSize,W,lt,Ct*tt,(Dt+Tt/G.locationSize*kt)*tt,xt)}else{if(it.isInstancedBufferAttribute){for(let rt=0;rt<G.locationSize;rt++)h(G.location+rt,it.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let rt=0;rt<G.locationSize;rt++)p(G.location+rt);e.bindBuffer(e.ARRAY_BUFFER,ie);for(let rt=0;rt<G.locationSize;rt++)T(G.location+rt,Tt/G.locationSize,W,lt,Tt*tt,Tt/G.locationSize*rt*tt,xt)}}else if(X!==void 0){const lt=X[Z];if(lt!==void 0)switch(lt.length){case 2:e.vertexAttrib2fv(G.location,lt);break;case 3:e.vertexAttrib3fv(G.location,lt);break;case 4:e.vertexAttrib4fv(G.location,lt);break;default:e.vertexAttrib1fv(G.location,lt)}}}}A()}function B(){I();for(const x in i){const w=i[x];for(const H in w){const k=w[H];for(const j in k)u(k[j].object),delete k[j];delete w[H]}delete i[x]}}function C(x){if(i[x.id]===void 0)return;const w=i[x.id];for(const H in w){const k=w[H];for(const j in k)u(k[j].object),delete k[j];delete w[H]}delete i[x.id]}function b(x){for(const w in i){const H=i[w];if(H[x.id]===void 0)continue;const k=H[x.id];for(const j in k)u(k[j].object),delete k[j];delete H[x.id]}}function I(){E(),o=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:B,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:M,enableAttribute:p,disableUnusedAttributes:A}}function L1(e,t,n){let i;function r(l){i=l}function s(l,u){e.drawArrays(i,l,u),n.update(u,i,1)}function o(l,u,f){f!==0&&(e.drawArraysInstanced(i,l,u,f),n.update(u,i,f))}function a(l,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,f);let m=0;for(let _=0;_<f;_++)m+=u[_];n.update(m,i,1)}function c(l,u,f,d){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<l.length;_++)o(l[_],u[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,f);let _=0;for(let M=0;M<f;M++)_+=u[M]*d[M];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function D1(e,t,n,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==Fn&&i.convert(b)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const I=b===Ys&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==gi&&i.convert(b)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==jn&&!I)}function c(b){if(b==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),p=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),A=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),T=e.getParameter(e.MAX_VARYING_VECTORS),S=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),B=_>0,C=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:B,maxSamples:C}}function I1(e){const t=this;let n=null,i=0,r=!1,s=!1;const o=new Ji,a=new Nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,m){const _=f.clippingPlanes,M=f.clipIntersection,p=f.clipShadows,h=e.get(f);if(!r||_===null||_.length===0||s&&!p)s?u(null):l();else{const A=s?0:i,T=A*4;let S=h.clippingState||null;c.value=S,S=u(_,d,T,m);for(let B=0;B!==T;++B)S[B]=n[B];h.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,d,m,_){const M=f!==null?f.length:0;let p=null;if(M!==0){if(p=c.value,_!==!0||p===null){const h=m+M*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(p===null||p.length<h)&&(p=new Float32Array(h));for(let T=0,S=m;T!==M;++T,S+=4)o.copy(f[T]).applyMatrix4(A,a),o.normal.toArray(p,S),p[S+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,p}}function U1(e){let t=new WeakMap;function n(o,a){return a===Dc?o.mapping=Yr:a===Ic&&(o.mapping=jr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Dc||a===Ic)if(t.has(o)){const c=t.get(o).texture;return n(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new X0(c.height);return l.fromEquirectangularTexture(e,o),t.set(o,l),o.addEventListener("dispose",r),n(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class N1 extends gd{constructor(t=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const kr=4,mh=[.125,.215,.35,.446,.526,.582],er=20,rc=new N1,gh=new Qt;let sc=null,oc=0,ac=0,cc=!1;const Qi=(1+Math.sqrt(5))/2,Ur=1/Qi,_h=[new N(-Qi,Ur,0),new N(Qi,Ur,0),new N(-Ur,0,Qi),new N(Ur,0,Qi),new N(0,Qi,-Ur),new N(0,Qi,Ur),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class vh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,r=100){sc=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sc,oc,ac),this._renderer.xr.enabled=cc,t.scissorTest=!1,Ro(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Yr||t.mapping===jr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sc=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:Ys,format:Fn,colorSpace:ls,depthBuffer:!1},r=xh(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xh(t,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=F1(s)),this._blurMaterial=O1(s,t,n)}return r}_compileMaterial(t){const n=new bn(this._lodPlanes[0],t);this._renderer.compile(n,rc)}_sceneToCubeUV(t,n,i,r){const a=new An(90,1,n,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(gh),u.toneMapping=Fi,u.autoClear=!1;const m=new oa({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),_=new bn(new Zs,m);let M=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,M=!0):(m.color.copy(gh),M=!0);for(let h=0;h<6;h++){const A=h%3;A===0?(a.up.set(0,c[h],0),a.lookAt(l[h],0,0)):A===1?(a.up.set(0,0,c[h]),a.lookAt(0,l[h],0)):(a.up.set(0,c[h],0),a.lookAt(0,0,l[h]));const T=this._cubeSize;Ro(r,A*T,h>2?T:0,T,T),u.setRenderTarget(r),M&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=p}_textureToCubeUV(t,n){const i=this._renderer,r=t.mapping===Yr||t.mapping===jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new bn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Ro(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(o,rc)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=_h[(r-s-1)%_h.length];this._blur(t,s-1,s,o,a)}n.autoClear=i}_blur(t,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,n,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,n,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new bn(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*er-1),M=s/_,p=isFinite(s)?1+Math.floor(u*M):er;p>er&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${er}`);const h=[];let A=0;for(let b=0;b<er;++b){const I=b/M,E=Math.exp(-I*I/2);h.push(E),b===0?A+=E:b<p&&(A+=2*E)}for(let b=0;b<h.length;b++)h[b]=h[b]/A;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:T}=this;d.dTheta.value=_,d.mipInt.value=T-i;const S=this._sizeLods[r],B=3*S*(r>T-kr?r-T+kr:0),C=4*(this._cubeSize-S);Ro(n,B,C,3*S,2*S),c.setRenderTarget(n),c.render(f,rc)}}function F1(e){const t=[],n=[],i=[];let r=e;const s=e-kr+1+mh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let c=1/a;o>e-kr?c=mh[o-e+kr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,M=3,p=2,h=1,A=new Float32Array(M*_*m),T=new Float32Array(p*_*m),S=new Float32Array(h*_*m);for(let C=0;C<m;C++){const b=C%3*2/3-1,I=C>2?0:-1,E=[b,I,0,b+2/3,I,0,b+2/3,I+1,0,b,I,0,b+2/3,I+1,0,b,I+1,0];A.set(E,M*_*C),T.set(d,p*_*C);const x=[C,C,C,C,C,C];S.set(x,h*_*C)}const B=new Vi;B.setAttribute("position",new On(A,M)),B.setAttribute("uv",new On(T,p)),B.setAttribute("faceIndex",new On(S,h)),t.push(B),r>kr&&r--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function xh(e,t,n){const i=new fr(e,t,n);return i.texture.mapping=ia,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ro(e,t,n,i,r){e.viewport.set(t,n,i,r),e.scissor.set(t,n,i,r)}function O1(e,t,n){const i=new Float32Array(er),r=new N(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Mh(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Sh(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Ol(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function B1(e){let t=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Dc||c===Ic,u=c===Yr||c===jr;if(l||u){let f=t.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new vh(e)),f=l?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return l&&m&&m.height>0||u&&m&&r(m)?(n===null&&(n=new vh(e)),f=l?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function k1(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return t[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Us("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function z1(e,t,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const M=d.morphAttributes[_];for(let p=0,h=M.length;p<h;p++)t.remove(M[p])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function c(f){const d=f.attributes;for(const _ in d)t.update(d[_],e.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const M=m[_];for(let p=0,h=M.length;p<h;p++)t.update(M[p],e.ARRAY_BUFFER)}}function l(f){const d=[],m=f.index,_=f.attributes.position;let M=0;if(m!==null){const A=m.array;M=m.version;for(let T=0,S=A.length;T<S;T+=3){const B=A[T+0],C=A[T+1],b=A[T+2];d.push(B,C,C,b,b,B)}}else if(_!==void 0){const A=_.array;M=_.version;for(let T=0,S=A.length/3-1;T<S;T+=3){const B=T+0,C=T+1,b=T+2;d.push(B,C,C,b,b,B)}}else return;const p=new(cd(d)?pd:dd)(d,1);p.version=M;const h=s.get(f);h&&t.remove(h),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function G1(e,t,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,m){e.drawElements(i,m,s,d*o),n.update(m,i,1)}function l(d,m,_){_!==0&&(e.drawElementsInstanced(i,m,s,d*o,_),n.update(m,i,_))}function u(d,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,_);let p=0;for(let h=0;h<_;h++)p+=m[h];n.update(p,i,1)}function f(d,m,_,M){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)l(d[h]/o,m[h],M[h]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,M,0,_);let h=0;for(let A=0;A<_;A++)h+=m[A]*M[A];n.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function V1(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case e.TRIANGLES:n.triangles+=a*(s/3);break;case e.LINES:n.lines+=a*(s/2);break;case e.LINE_STRIP:n.lines+=a*(s-1);break;case e.LINE_LOOP:n.lines+=a*s;break;case e.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:i}}function H1(e,t,n){const i=new WeakMap,r=new Ae;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let x=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var m=x;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),M===!0&&(S=2),p===!0&&(S=3);let B=a.attributes.position.count*S,C=1;B>t.maxTextureSize&&(C=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const b=new Float32Array(B*C*4*f),I=new ud(b,B,C,f);I.type=jn,I.needsUpdate=!0;const E=S*4;for(let w=0;w<f;w++){const H=h[w],k=A[w],j=T[w],K=B*C*4*w;for(let X=0;X<H.count;X++){const Z=X*E;_===!0&&(r.fromBufferAttribute(H,X),b[K+Z+0]=r.x,b[K+Z+1]=r.y,b[K+Z+2]=r.z,b[K+Z+3]=0),M===!0&&(r.fromBufferAttribute(k,X),b[K+Z+4]=r.x,b[K+Z+5]=r.y,b[K+Z+6]=r.z,b[K+Z+7]=0),p===!0&&(r.fromBufferAttribute(j,X),b[K+Z+8]=r.x,b[K+Z+9]=r.y,b[K+Z+10]=r.z,b[K+Z+11]=j.itemSize===4?r.w:1)}}d={count:f,texture:I,size:new se(B,C)},i.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(e,"morphTexture",o.morphTexture,n);else{let _=0;for(let p=0;p<l.length;p++)_+=l[p];const M=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(e,"morphTargetBaseInfluence",M),c.getUniforms().setValue(e,"morphTargetInfluences",l)}c.getUniforms().setValue(e,"morphTargetsTexture",d.texture,n),c.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:s}}function W1(e,t,n,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==l&&(t.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:s,dispose:o}}class Md extends je{constructor(t,n,i,r,s,o,a,c,l,u=Vr){if(u!==Vr&&u!==$r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Vr&&(i=hr),i===void 0&&u===$r&&(i=Kr),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=a!==void 0?a:un,this.minFilter=c!==void 0?c:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Sd=new je,Eh=new Md(1,1),Ed=new ud,yd=new R0,Td=new _d,yh=[],Th=[],Ah=new Float32Array(16),bh=new Float32Array(9),wh=new Float32Array(4);function hs(e,t,n){const i=e[0];if(i<=0||i>0)return e;const r=t*n;let s=yh[r];if(s===void 0&&(s=new Float32Array(r),yh[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=n,e[o].toArray(s,a)}return s}function Ie(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ue(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function ca(e,t){let n=Th[t];n===void 0&&(n=new Int32Array(t),Th[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function X1(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function q1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ie(n,t))return;e.uniform2fv(this.addr,t),Ue(n,t)}}function Y1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ie(n,t))return;e.uniform3fv(this.addr,t),Ue(n,t)}}function j1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ie(n,t))return;e.uniform4fv(this.addr,t),Ue(n,t)}}function K1(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ie(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ue(n,t)}else{if(Ie(n,i))return;wh.set(i),e.uniformMatrix2fv(this.addr,!1,wh),Ue(n,i)}}function $1(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ie(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ue(n,t)}else{if(Ie(n,i))return;bh.set(i),e.uniformMatrix3fv(this.addr,!1,bh),Ue(n,i)}}function Z1(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ie(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ue(n,t)}else{if(Ie(n,i))return;Ah.set(i),e.uniformMatrix4fv(this.addr,!1,Ah),Ue(n,i)}}function J1(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Q1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ie(n,t))return;e.uniform2iv(this.addr,t),Ue(n,t)}}function t2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ie(n,t))return;e.uniform3iv(this.addr,t),Ue(n,t)}}function e2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ie(n,t))return;e.uniform4iv(this.addr,t),Ue(n,t)}}function n2(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function i2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ie(n,t))return;e.uniform2uiv(this.addr,t),Ue(n,t)}}function r2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ie(n,t))return;e.uniform3uiv(this.addr,t),Ue(n,t)}}function s2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ie(n,t))return;e.uniform4uiv(this.addr,t),Ue(n,t)}}function o2(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let s;this.type===e.SAMPLER_2D_SHADOW?(Eh.compareFunction=ad,s=Eh):s=Sd,n.setTexture2D(t||s,r)}function a2(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(t||yd,r)}function c2(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(t||Td,r)}function l2(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(t||Ed,r)}function u2(e){switch(e){case 5126:return X1;case 35664:return q1;case 35665:return Y1;case 35666:return j1;case 35674:return K1;case 35675:return $1;case 35676:return Z1;case 5124:case 35670:return J1;case 35667:case 35671:return Q1;case 35668:case 35672:return t2;case 35669:case 35673:return e2;case 5125:return n2;case 36294:return i2;case 36295:return r2;case 36296:return s2;case 35678:case 36198:case 36298:case 36306:case 35682:return o2;case 35679:case 36299:case 36307:return a2;case 35680:case 36300:case 36308:case 36293:return c2;case 36289:case 36303:case 36311:case 36292:return l2}}function h2(e,t){e.uniform1fv(this.addr,t)}function f2(e,t){const n=hs(t,this.size,2);e.uniform2fv(this.addr,n)}function d2(e,t){const n=hs(t,this.size,3);e.uniform3fv(this.addr,n)}function p2(e,t){const n=hs(t,this.size,4);e.uniform4fv(this.addr,n)}function m2(e,t){const n=hs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function g2(e,t){const n=hs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function _2(e,t){const n=hs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function v2(e,t){e.uniform1iv(this.addr,t)}function x2(e,t){e.uniform2iv(this.addr,t)}function M2(e,t){e.uniform3iv(this.addr,t)}function S2(e,t){e.uniform4iv(this.addr,t)}function E2(e,t){e.uniform1uiv(this.addr,t)}function y2(e,t){e.uniform2uiv(this.addr,t)}function T2(e,t){e.uniform3uiv(this.addr,t)}function A2(e,t){e.uniform4uiv(this.addr,t)}function b2(e,t,n){const i=this.cache,r=t.length,s=ca(n,r);Ie(i,s)||(e.uniform1iv(this.addr,s),Ue(i,s));for(let o=0;o!==r;++o)n.setTexture2D(t[o]||Sd,s[o])}function w2(e,t,n){const i=this.cache,r=t.length,s=ca(n,r);Ie(i,s)||(e.uniform1iv(this.addr,s),Ue(i,s));for(let o=0;o!==r;++o)n.setTexture3D(t[o]||yd,s[o])}function R2(e,t,n){const i=this.cache,r=t.length,s=ca(n,r);Ie(i,s)||(e.uniform1iv(this.addr,s),Ue(i,s));for(let o=0;o!==r;++o)n.setTextureCube(t[o]||Td,s[o])}function C2(e,t,n){const i=this.cache,r=t.length,s=ca(n,r);Ie(i,s)||(e.uniform1iv(this.addr,s),Ue(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(t[o]||Ed,s[o])}function P2(e){switch(e){case 5126:return h2;case 35664:return f2;case 35665:return d2;case 35666:return p2;case 35674:return m2;case 35675:return g2;case 35676:return _2;case 5124:case 35670:return v2;case 35667:case 35671:return x2;case 35668:case 35672:return M2;case 35669:case 35673:return S2;case 5125:return E2;case 36294:return y2;case 36295:return T2;case 36296:return A2;case 35678:case 36198:case 36298:case 36306:case 35682:return b2;case 35679:case 36299:case 36307:return w2;case 35680:case 36300:case 36308:case 36293:return R2;case 36289:case 36303:case 36311:case 36292:return C2}}class L2{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=u2(n.type)}}class D2{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=P2(n.type)}}class I2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,n[a.id],i)}}}const lc=/(\w+)(\])?(\[|\.)?/g;function Rh(e,t){e.seq.push(t),e.map[t.id]=t}function U2(e,t,n){const i=e.name,r=i.length;for(lc.lastIndex=0;;){const s=lc.exec(i),o=lc.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Rh(n,l===void 0?new L2(a,e,t):new D2(a,e,t));break}else{let f=n.map[a];f===void 0&&(f=new I2(a),Rh(n,f)),n=f}}}class Xo{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(n,r),o=t.getUniformLocation(n,s.name);U2(s,o,this)}}setValue(t,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(t,i,r)}setOptional(t,n,i){const r=n[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,n){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in n&&i.push(o)}return i}}function Ch(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const N2=37297;let F2=0;function O2(e,t){const n=e.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Ph=new Nt;function B2(e){qt._getMatrix(Ph,qt.workingColorSpace,e);const t=`mat3( ${Ph.elements.map(n=>n.toFixed(4))} )`;switch(qt.getTransfer(e)){case ra:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Lh(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),r=e.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+O2(e.getShaderSource(t),o)}else return r}function k2(e,t){const n=B2(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function z2(e,t){let n;switch(t){case t0:n="Linear";break;case e0:n="Reinhard";break;case n0:n="Cineon";break;case i0:n="ACESFilmic";break;case s0:n="AgX";break;case o0:n="Neutral";break;case r0:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Co=new N;function G2(){qt.getLuminanceCoefficients(Co);const e=Co.x.toFixed(4),t=Co.y.toFixed(4),n=Co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V2(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function H2(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function W2(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=e.getActiveAttrib(t,r),o=s.name;let a=1;s.type===e.FLOAT_MAT2&&(a=2),s.type===e.FLOAT_MAT3&&(a=3),s.type===e.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:e.getAttribLocation(t,o),locationSize:a}}return n}function Ns(e){return e!==""}function Dh(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ih(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const X2=/^[ \t]*#include +<([\w\d./]+)>/gm;function ll(e){return e.replace(X2,Y2)}const q2=new Map;function Y2(e,t){let n=Ot[t];if(n===void 0){const i=q2.get(t);if(i!==void 0)n=Ot[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ll(n)}const j2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uh(e){return e.replace(j2,K2)}function K2(e,t,n,i){let r="";for(let s=parseInt(t);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Nh(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function $2(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Kf?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===Im?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===hi&&(t="SHADOWMAP_TYPE_VSM"),t}function Z2(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Yr:case jr:t="ENVMAP_TYPE_CUBE";break;case ia:t="ENVMAP_TYPE_CUBE_UV";break}return t}function J2(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case jr:t="ENVMAP_MODE_REFRACTION";break}return t}function Q2(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case $f:t="ENVMAP_BLENDING_MULTIPLY";break;case Jm:t="ENVMAP_BLENDING_MIX";break;case Qm:t="ENVMAP_BLENDING_ADD";break}return t}function tv(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function ev(e,t,n,i){const r=e.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const c=$2(n),l=Z2(n),u=J2(n),f=Q2(n),d=tv(n),m=V2(n),_=H2(s),M=r.createProgram();let p,h,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ns).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ns).join(`
`),h.length>0&&(h+=`
`)):(p=[Nh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),h=[Nh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Fi?"#define TONE_MAPPING":"",n.toneMapping!==Fi?Ot.tonemapping_pars_fragment:"",n.toneMapping!==Fi?z2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,k2("linearToOutputTexel",n.outputColorSpace),G2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ns).join(`
`)),o=ll(o),o=Dh(o,n),o=Ih(o,n),a=ll(a),a=Dh(a,n),a=Ih(a,n),o=Uh(o),a=Uh(a),n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",n.glslVersion===ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=A+p+o,S=A+h+a,B=Ch(r,r.VERTEX_SHADER,T),C=Ch(r,r.FRAGMENT_SHADER,S);r.attachShader(M,B),r.attachShader(M,C),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function b(w){if(e.debug.checkShaderErrors){const H=r.getProgramInfoLog(M).trim(),k=r.getShaderInfoLog(B).trim(),j=r.getShaderInfoLog(C).trim();let K=!0,X=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(K=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,M,B,C);else{const Z=Lh(r,B,"vertex"),G=Lh(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+H+`
`+Z+`
`+G)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(k===""||j==="")&&(X=!1);X&&(w.diagnostics={runnable:K,programLog:H,vertexShader:{log:k,prefix:p},fragmentShader:{log:j,prefix:h}})}r.deleteShader(B),r.deleteShader(C),I=new Xo(r,M),E=W2(r,M)}let I;this.getUniforms=function(){return I===void 0&&b(this),I};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(M,N2)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=F2++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=B,this.fragmentShader=C,this}let nv=0;class iv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new rv(t),n.set(t,i)),i}}class rv{constructor(t){this.id=nv++,this.code=t,this.usedTimes=0}}function sv(e,t,n,i,r,s,o){const a=new hd,c=new iv,l=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return l.add(E),E===0?"uv":`uv${E}`}function p(E,x,w,H,k){const j=H.fog,K=k.geometry,X=E.isMeshStandardMaterial?H.environment:null,Z=(E.isMeshStandardMaterial?n:t).get(E.envMap||X),G=Z&&Z.mapping===ia?Z.image.height:null,it=_[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const lt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Tt=lt!==void 0?lt.length:0;let Bt=0;K.morphAttributes.position!==void 0&&(Bt=1),K.morphAttributes.normal!==void 0&&(Bt=2),K.morphAttributes.color!==void 0&&(Bt=3);let ie,W,tt,xt;if(it){const te=Xn[it];ie=te.vertexShader,W=te.fragmentShader}else ie=E.vertexShader,W=E.fragmentShader,c.update(E),tt=c.getVertexShaderID(E),xt=c.getFragmentShaderID(E);const rt=e.getRenderTarget(),Ct=e.state.buffers.depth.getReversed(),Dt=k.isInstancedMesh===!0,kt=k.isBatchedMesh===!0,pe=!!E.map,Wt=!!E.matcap,ye=!!Z,D=!!E.aoMap,vn=!!E.lightMap,zt=!!E.bumpMap,Gt=!!E.normalMap,wt=!!E.displacementMap,ce=!!E.emissiveMap,bt=!!E.metalnessMap,y=!!E.roughnessMap,g=E.anisotropy>0,U=E.clearcoat>0,q=E.dispersion>0,$=E.iridescence>0,V=E.sheen>0,St=E.transmission>0,st=g&&!!E.anisotropyMap,ut=U&&!!E.clearcoatMap,Xt=U&&!!E.clearcoatNormalMap,J=U&&!!E.clearcoatRoughnessMap,ft=$&&!!E.iridescenceMap,Rt=$&&!!E.iridescenceThicknessMap,Pt=V&&!!E.sheenColorMap,dt=V&&!!E.sheenRoughnessMap,Vt=!!E.specularMap,Ft=!!E.specularColorMap,oe=!!E.specularIntensityMap,R=St&&!!E.transmissionMap,nt=St&&!!E.thicknessMap,z=!!E.gradientMap,Y=!!E.alphaMap,ct=E.alphaTest>0,ot=!!E.alphaHash,It=!!E.extensions;let Me=Fi;E.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Me=e.toneMapping);const ze={shaderID:it,shaderType:E.type,shaderName:E.name,vertexShader:ie,fragmentShader:W,defines:E.defines,customVertexShaderID:tt,customFragmentShaderID:xt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:kt,batchingColor:kt&&k._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&k.instanceColor!==null,instancingMorph:Dt&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?e.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ls,alphaToCoverage:!!E.alphaToCoverage,map:pe,matcap:Wt,envMap:ye,envMapMode:ye&&Z.mapping,envMapCubeUVHeight:G,aoMap:D,lightMap:vn,bumpMap:zt,normalMap:Gt,displacementMap:d&&wt,emissiveMap:ce,normalMapObjectSpace:Gt&&E.normalMapType===h0,normalMapTangentSpace:Gt&&E.normalMapType===u0,metalnessMap:bt,roughnessMap:y,anisotropy:g,anisotropyMap:st,clearcoat:U,clearcoatMap:ut,clearcoatNormalMap:Xt,clearcoatRoughnessMap:J,dispersion:q,iridescence:$,iridescenceMap:ft,iridescenceThicknessMap:Rt,sheen:V,sheenColorMap:Pt,sheenRoughnessMap:dt,specularMap:Vt,specularColorMap:Ft,specularIntensityMap:oe,transmission:St,transmissionMap:R,thicknessMap:nt,gradientMap:z,opaque:E.transparent===!1&&E.blending===Gr&&E.alphaToCoverage===!1,alphaMap:Y,alphaTest:ct,alphaHash:ot,combine:E.combine,mapUv:pe&&M(E.map.channel),aoMapUv:D&&M(E.aoMap.channel),lightMapUv:vn&&M(E.lightMap.channel),bumpMapUv:zt&&M(E.bumpMap.channel),normalMapUv:Gt&&M(E.normalMap.channel),displacementMapUv:wt&&M(E.displacementMap.channel),emissiveMapUv:ce&&M(E.emissiveMap.channel),metalnessMapUv:bt&&M(E.metalnessMap.channel),roughnessMapUv:y&&M(E.roughnessMap.channel),anisotropyMapUv:st&&M(E.anisotropyMap.channel),clearcoatMapUv:ut&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:dt&&M(E.sheenRoughnessMap.channel),specularMapUv:Vt&&M(E.specularMap.channel),specularColorMapUv:Ft&&M(E.specularColorMap.channel),specularIntensityMapUv:oe&&M(E.specularIntensityMap.channel),transmissionMapUv:R&&M(E.transmissionMap.channel),thicknessMapUv:nt&&M(E.thicknessMap.channel),alphaMapUv:Y&&M(E.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Gt||g),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!K.attributes.uv&&(pe||Y),fog:!!j,useFog:E.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ct,skinning:k.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Bt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&w.length>0,shadowMapType:e.shadowMap.type,toneMapping:Me,decodeVideoTexture:pe&&E.map.isVideoTexture===!0&&qt.getTransfer(E.map.colorSpace)===ee,decodeVideoTextureEmissive:ce&&E.emissiveMap.isVideoTexture===!0&&qt.getTransfer(E.emissiveMap.colorSpace)===ee,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===qn,flipSided:E.side===tn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:It&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&E.extensions.multiDraw===!0||kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function h(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const w in E.defines)x.push(w),x.push(E.defines[w]);return E.isRawShaderMaterial===!1&&(A(x,E),T(x,E),x.push(e.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function A(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function T(E,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),E.push(a.mask)}function S(E){const x=_[E.type];let w;if(x){const H=Xn[x];w=G0.clone(H.uniforms)}else w=E.uniforms;return w}function B(E,x){let w;for(let H=0,k=u.length;H<k;H++){const j=u[H];if(j.cacheKey===x){w=j,++w.usedTimes;break}}return w===void 0&&(w=new ev(e,x,E,s),u.push(w)),w}function C(E){if(--E.usedTimes===0){const x=u.indexOf(E);u[x]=u[u.length-1],u.pop(),E.destroy()}}function b(E){c.remove(E)}function I(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:S,acquireProgram:B,releaseProgram:C,releaseShaderCache:b,programs:u,dispose:I}}function ov(){let e=new WeakMap;function t(o){return e.has(o)}function n(o){let a=e.get(o);return a===void 0&&(a={},e.set(o,a)),a}function i(o){e.delete(o)}function r(o,a,c){e.get(o)[a]=c}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:r,dispose:s}}function av(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Fh(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Oh(){const e=[];let t=0;const n=[],i=[],r=[];function s(){t=0,n.length=0,i.length=0,r.length=0}function o(f,d,m,_,M,p){let h=e[t];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:_,renderOrder:f.renderOrder,z:M,group:p},e[t]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=M,h.group=p),t++,h}function a(f,d,m,_,M,p){const h=o(f,d,m,_,M,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):n.push(h)}function c(f,d,m,_,M,p){const h=o(f,d,m,_,M,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):n.unshift(h)}function l(f,d){n.length>1&&n.sort(f||av),i.length>1&&i.sort(d||Fh),r.length>1&&r.sort(d||Fh)}function u(){for(let f=t,d=e.length;f<d;f++){const m=e[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function cv(){let e=new WeakMap;function t(i,r){const s=e.get(i);let o;return s===void 0?(o=new Oh,e.set(i,[o])):r>=s.length?(o=new Oh,s.push(o)):o=s[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function lv(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new N,color:new Qt};break;case"SpotLight":n={position:new N,direction:new N,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":n={color:new Qt,position:new N,halfWidth:new N,halfHeight:new N};break}return e[t.id]=n,n}}}function uv(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let hv=0;function fv(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function dv(e){const t=new lv,n=uv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new N);const r=new N,s=new ve,o=new ve;function a(l){let u=0,f=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,_=0,M=0,p=0,h=0,A=0,T=0,S=0,B=0,C=0,b=0;l.sort(fv);for(let E=0,x=l.length;E<x;E++){const w=l[E],H=w.color,k=w.intensity,j=w.distance,K=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=H.r*k,f+=H.g*k,d+=H.b*k;else if(w.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(w.sh.coefficients[X],k);b++}else if(w.isDirectionalLight){const X=t.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const Z=w.shadow,G=n.get(w);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,i.directionalShadow[m]=G,i.directionalShadowMap[m]=K,i.directionalShadowMatrix[m]=w.shadow.matrix,A++}i.directional[m]=X,m++}else if(w.isSpotLight){const X=t.get(w);X.position.setFromMatrixPosition(w.matrixWorld),X.color.copy(H).multiplyScalar(k),X.distance=j,X.coneCos=Math.cos(w.angle),X.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),X.decay=w.decay,i.spot[M]=X;const Z=w.shadow;if(w.map&&(i.spotLightMap[B]=w.map,B++,Z.updateMatrices(w),w.castShadow&&C++),i.spotLightMatrix[M]=Z.matrix,w.castShadow){const G=n.get(w);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,i.spotShadow[M]=G,i.spotShadowMap[M]=K,S++}M++}else if(w.isRectAreaLight){const X=t.get(w);X.color.copy(H).multiplyScalar(k),X.halfWidth.set(w.width*.5,0,0),X.halfHeight.set(0,w.height*.5,0),i.rectArea[p]=X,p++}else if(w.isPointLight){const X=t.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),X.distance=w.distance,X.decay=w.decay,w.castShadow){const Z=w.shadow,G=n.get(w);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,i.pointShadow[_]=G,i.pointShadowMap[_]=K,i.pointShadowMatrix[_]=w.shadow.matrix,T++}i.point[_]=X,_++}else if(w.isHemisphereLight){const X=t.get(w);X.skyColor.copy(w.color).multiplyScalar(k),X.groundColor.copy(w.groundColor).multiplyScalar(k),i.hemi[h]=X,h++}}p>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=et.LTC_FLOAT_1,i.rectAreaLTC2=et.LTC_FLOAT_2):(i.rectAreaLTC1=et.LTC_HALF_1,i.rectAreaLTC2=et.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==m||I.pointLength!==_||I.spotLength!==M||I.rectAreaLength!==p||I.hemiLength!==h||I.numDirectionalShadows!==A||I.numPointShadows!==T||I.numSpotShadows!==S||I.numSpotMaps!==B||I.numLightProbes!==b)&&(i.directional.length=m,i.spot.length=M,i.rectArea.length=p,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=S+B-C,i.spotLightMap.length=B,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=b,I.directionalLength=m,I.pointLength=_,I.spotLength=M,I.rectAreaLength=p,I.hemiLength=h,I.numDirectionalShadows=A,I.numPointShadows=T,I.numSpotShadows=S,I.numSpotMaps=B,I.numLightProbes=b,i.version=hv++)}function c(l,u){let f=0,d=0,m=0,_=0,M=0;const p=u.matrixWorldInverse;for(let h=0,A=l.length;h<A;h++){const T=l[h];if(T.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),f++}else if(T.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(T.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),d++}else if(T.isHemisphereLight){const S=i.hemi[M];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(p),M++}}}return{setup:a,setupView:c,state:i}}function Bh(e){const t=new dv(e),n=[],i=[];function r(u){l.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){t.setup(n)}function c(u){t.setupView(n,u)}const l={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function pv(e){let t=new WeakMap;function n(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Bh(e),t.set(r,[a])):s>=o.length?(a=new Bh(e),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class mv extends sa{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=c0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gv extends sa{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const _v=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xv(e,t,n){let i=new vd;const r=new se,s=new se,o=new Ae,a=new mv({depthPacking:l0}),c=new gv,l={},u=n.maxTextureSize,f={[Bi]:tn,[tn]:Bi,[qn]:qn},d=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:_v,fragmentShader:vv}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Vi;_.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new bn(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kf;let h=this.type;this.render=function(C,b,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const E=e.getRenderTarget(),x=e.getActiveCubeFace(),w=e.getActiveMipmapLevel(),H=e.state;H.setBlending(Ni),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const k=h!==hi&&this.type===hi,j=h===hi&&this.type!==hi;for(let K=0,X=C.length;K<X;K++){const Z=C[K],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const it=G.getFrameExtents();if(r.multiply(it),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/it.x),r.x=s.x*it.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/it.y),r.y=s.y*it.y,G.mapSize.y=s.y)),G.map===null||k===!0||j===!0){const Tt=this.type!==hi?{minFilter:un,magFilter:un}:{};G.map!==null&&G.map.dispose(),G.map=new fr(r.x,r.y,Tt),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}e.setRenderTarget(G.map),e.clear();const lt=G.getViewportCount();for(let Tt=0;Tt<lt;Tt++){const Bt=G.getViewport(Tt);o.set(s.x*Bt.x,s.y*Bt.y,s.x*Bt.z,s.y*Bt.w),H.viewport(o),G.updateMatrices(Z,Tt),i=G.getFrustum(),S(b,I,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===hi&&A(G,I),G.needsUpdate=!1}h=this.type,p.needsUpdate=!1,e.setRenderTarget(E,x,w)};function A(C,b){const I=t.update(M);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new fr(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,e.setRenderTarget(C.mapPass),e.clear(),e.renderBufferDirect(b,null,I,d,M,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,e.setRenderTarget(C.map),e.clear(),e.renderBufferDirect(b,null,I,m,M,null)}function T(C,b,I,E){let x=null;const w=I.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)x=w;else if(x=I.isPointLight===!0?c:a,e.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const H=x.uuid,k=b.uuid;let j=l[H];j===void 0&&(j={},l[H]=j);let K=j[k];K===void 0&&(K=x.clone(),j[k]=K,b.addEventListener("dispose",B)),x=K}if(x.visible=b.visible,x.wireframe=b.wireframe,E===hi?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:f[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const H=e.properties.get(x);H.light=I}return x}function S(C,b,I,E,x){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===hi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,C.matrixWorld);const k=t.update(C),j=C.material;if(Array.isArray(j)){const K=k.groups;for(let X=0,Z=K.length;X<Z;X++){const G=K[X],it=j[G.materialIndex];if(it&&it.visible){const lt=T(C,it,E,x);C.onBeforeShadow(e,C,b,I,k,lt,G),e.renderBufferDirect(I,null,k,lt,C,G),C.onAfterShadow(e,C,b,I,k,lt,G)}}}else if(j.visible){const K=T(C,j,E,x);C.onBeforeShadow(e,C,b,I,k,K,null),e.renderBufferDirect(I,null,k,K,C,null),C.onAfterShadow(e,C,b,I,k,K,null)}}const H=C.children;for(let k=0,j=H.length;k<j;k++)S(H[k],b,I,E,x)}function B(C){C.target.removeEventListener("dispose",B);for(const I in l){const E=l[I],x=C.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}const Mv={[Ac]:bc,[wc]:Pc,[Rc]:Lc,[qr]:Cc,[bc]:Ac,[Pc]:wc,[Lc]:Rc,[Cc]:qr};function Sv(e,t){function n(){let R=!1;const nt=new Ae;let z=null;const Y=new Ae(0,0,0,0);return{setMask:function(ct){z!==ct&&!R&&(e.colorMask(ct,ct,ct,ct),z=ct)},setLocked:function(ct){R=ct},setClear:function(ct,ot,It,Me,ze){ze===!0&&(ct*=Me,ot*=Me,It*=Me),nt.set(ct,ot,It,Me),Y.equals(nt)===!1&&(e.clearColor(ct,ot,It,Me),Y.copy(nt))},reset:function(){R=!1,z=null,Y.set(-1,0,0,0)}}}function i(){let R=!1,nt=!1,z=null,Y=null,ct=null;return{setReversed:function(ot){if(nt!==ot){const It=t.get("EXT_clip_control");nt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);const Me=ct;ct=null,this.setClear(Me)}nt=ot},getReversed:function(){return nt},setTest:function(ot){ot?rt(e.DEPTH_TEST):Ct(e.DEPTH_TEST)},setMask:function(ot){z!==ot&&!R&&(e.depthMask(ot),z=ot)},setFunc:function(ot){if(nt&&(ot=Mv[ot]),Y!==ot){switch(ot){case Ac:e.depthFunc(e.NEVER);break;case bc:e.depthFunc(e.ALWAYS);break;case wc:e.depthFunc(e.LESS);break;case qr:e.depthFunc(e.LEQUAL);break;case Rc:e.depthFunc(e.EQUAL);break;case Cc:e.depthFunc(e.GEQUAL);break;case Pc:e.depthFunc(e.GREATER);break;case Lc:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Y=ot}},setLocked:function(ot){R=ot},setClear:function(ot){ct!==ot&&(nt&&(ot=1-ot),e.clearDepth(ot),ct=ot)},reset:function(){R=!1,z=null,Y=null,ct=null,nt=!1}}}function r(){let R=!1,nt=null,z=null,Y=null,ct=null,ot=null,It=null,Me=null,ze=null;return{setTest:function(te){R||(te?rt(e.STENCIL_TEST):Ct(e.STENCIL_TEST))},setMask:function(te){nt!==te&&!R&&(e.stencilMask(te),nt=te)},setFunc:function(te,Pn,ri){(z!==te||Y!==Pn||ct!==ri)&&(e.stencilFunc(te,Pn,ri),z=te,Y=Pn,ct=ri)},setOp:function(te,Pn,ri){(ot!==te||It!==Pn||Me!==ri)&&(e.stencilOp(te,Pn,ri),ot=te,It=Pn,Me=ri)},setLocked:function(te){R=te},setClear:function(te){ze!==te&&(e.clearStencil(te),ze=te)},reset:function(){R=!1,nt=null,z=null,Y=null,ct=null,ot=null,It=null,Me=null,ze=null}}}const s=new n,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,m=[],_=null,M=!1,p=null,h=null,A=null,T=null,S=null,B=null,C=null,b=new Qt(0,0,0),I=0,E=!1,x=null,w=null,H=null,k=null,j=null;const K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Z=0;const G=e.getParameter(e.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=Z>=2);let it=null,lt={};const Tt=e.getParameter(e.SCISSOR_BOX),Bt=e.getParameter(e.VIEWPORT),ie=new Ae().fromArray(Tt),W=new Ae().fromArray(Bt);function tt(R,nt,z,Y){const ct=new Uint8Array(4),ot=e.createTexture();e.bindTexture(R,ot),e.texParameteri(R,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(R,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let It=0;It<z;It++)R===e.TEXTURE_3D||R===e.TEXTURE_2D_ARRAY?e.texImage3D(nt,0,e.RGBA,1,1,Y,0,e.RGBA,e.UNSIGNED_BYTE,ct):e.texImage2D(nt+It,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ct);return ot}const xt={};xt[e.TEXTURE_2D]=tt(e.TEXTURE_2D,e.TEXTURE_2D,1),xt[e.TEXTURE_CUBE_MAP]=tt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[e.TEXTURE_2D_ARRAY]=tt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),xt[e.TEXTURE_3D]=tt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(e.DEPTH_TEST),o.setFunc(qr),zt(!1),Gt(Vu),rt(e.CULL_FACE),D(Ni);function rt(R){u[R]!==!0&&(e.enable(R),u[R]=!0)}function Ct(R){u[R]!==!1&&(e.disable(R),u[R]=!1)}function Dt(R,nt){return f[R]!==nt?(e.bindFramebuffer(R,nt),f[R]=nt,R===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=nt),R===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=nt),!0):!1}function kt(R,nt){let z=m,Y=!1;if(R){z=d.get(nt),z===void 0&&(z=[],d.set(nt,z));const ct=R.textures;if(z.length!==ct.length||z[0]!==e.COLOR_ATTACHMENT0){for(let ot=0,It=ct.length;ot<It;ot++)z[ot]=e.COLOR_ATTACHMENT0+ot;z.length=ct.length,Y=!0}}else z[0]!==e.BACK&&(z[0]=e.BACK,Y=!0);Y&&e.drawBuffers(z)}function pe(R){return _!==R?(e.useProgram(R),_=R,!0):!1}const Wt={[tr]:e.FUNC_ADD,[Nm]:e.FUNC_SUBTRACT,[Fm]:e.FUNC_REVERSE_SUBTRACT};Wt[Om]=e.MIN,Wt[Bm]=e.MAX;const ye={[km]:e.ZERO,[zm]:e.ONE,[Gm]:e.SRC_COLOR,[yc]:e.SRC_ALPHA,[Ym]:e.SRC_ALPHA_SATURATE,[Xm]:e.DST_COLOR,[Hm]:e.DST_ALPHA,[Vm]:e.ONE_MINUS_SRC_COLOR,[Tc]:e.ONE_MINUS_SRC_ALPHA,[qm]:e.ONE_MINUS_DST_COLOR,[Wm]:e.ONE_MINUS_DST_ALPHA,[jm]:e.CONSTANT_COLOR,[Km]:e.ONE_MINUS_CONSTANT_COLOR,[$m]:e.CONSTANT_ALPHA,[Zm]:e.ONE_MINUS_CONSTANT_ALPHA};function D(R,nt,z,Y,ct,ot,It,Me,ze,te){if(R===Ni){M===!0&&(Ct(e.BLEND),M=!1);return}if(M===!1&&(rt(e.BLEND),M=!0),R!==Um){if(R!==p||te!==E){if((h!==tr||S!==tr)&&(e.blendEquation(e.FUNC_ADD),h=tr,S=tr),te)switch(R){case Gr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Hu:e.blendFunc(e.ONE,e.ONE);break;case Wu:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Xu:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Gr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Hu:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case Wu:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Xu:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}A=null,T=null,B=null,C=null,b.set(0,0,0),I=0,p=R,E=te}return}ct=ct||nt,ot=ot||z,It=It||Y,(nt!==h||ct!==S)&&(e.blendEquationSeparate(Wt[nt],Wt[ct]),h=nt,S=ct),(z!==A||Y!==T||ot!==B||It!==C)&&(e.blendFuncSeparate(ye[z],ye[Y],ye[ot],ye[It]),A=z,T=Y,B=ot,C=It),(Me.equals(b)===!1||ze!==I)&&(e.blendColor(Me.r,Me.g,Me.b,ze),b.copy(Me),I=ze),p=R,E=!1}function vn(R,nt){R.side===qn?Ct(e.CULL_FACE):rt(e.CULL_FACE);let z=R.side===tn;nt&&(z=!z),zt(z),R.blending===Gr&&R.transparent===!1?D(Ni):D(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),s.setMask(R.colorWrite);const Y=R.stencilWrite;a.setTest(Y),Y&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),ce(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?rt(e.SAMPLE_ALPHA_TO_COVERAGE):Ct(e.SAMPLE_ALPHA_TO_COVERAGE)}function zt(R){x!==R&&(R?e.frontFace(e.CW):e.frontFace(e.CCW),x=R)}function Gt(R){R!==Lm?(rt(e.CULL_FACE),R!==w&&(R===Vu?e.cullFace(e.BACK):R===Dm?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ct(e.CULL_FACE),w=R}function wt(R){R!==H&&(X&&e.lineWidth(R),H=R)}function ce(R,nt,z){R?(rt(e.POLYGON_OFFSET_FILL),(k!==nt||j!==z)&&(e.polygonOffset(nt,z),k=nt,j=z)):Ct(e.POLYGON_OFFSET_FILL)}function bt(R){R?rt(e.SCISSOR_TEST):Ct(e.SCISSOR_TEST)}function y(R){R===void 0&&(R=e.TEXTURE0+K-1),it!==R&&(e.activeTexture(R),it=R)}function g(R,nt,z){z===void 0&&(it===null?z=e.TEXTURE0+K-1:z=it);let Y=lt[z];Y===void 0&&(Y={type:void 0,texture:void 0},lt[z]=Y),(Y.type!==R||Y.texture!==nt)&&(it!==z&&(e.activeTexture(z),it=z),e.bindTexture(R,nt||xt[R]),Y.type=R,Y.texture=nt)}function U(){const R=lt[it];R!==void 0&&R.type!==void 0&&(e.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function q(){try{e.compressedTexImage2D.apply(e,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function $(){try{e.compressedTexImage3D.apply(e,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function V(){try{e.texSubImage2D.apply(e,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function St(){try{e.texSubImage3D.apply(e,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function st(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ut(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Xt(){try{e.texStorage2D.apply(e,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function J(){try{e.texStorage3D.apply(e,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ft(){try{e.texImage2D.apply(e,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Rt(){try{e.texImage3D.apply(e,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Pt(R){ie.equals(R)===!1&&(e.scissor(R.x,R.y,R.z,R.w),ie.copy(R))}function dt(R){W.equals(R)===!1&&(e.viewport(R.x,R.y,R.z,R.w),W.copy(R))}function Vt(R,nt){let z=l.get(nt);z===void 0&&(z=new WeakMap,l.set(nt,z));let Y=z.get(R);Y===void 0&&(Y=e.getUniformBlockIndex(nt,R.name),z.set(R,Y))}function Ft(R,nt){const Y=l.get(nt).get(R);c.get(nt)!==Y&&(e.uniformBlockBinding(nt,Y,R.__bindingPointIndex),c.set(nt,Y))}function oe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},it=null,lt={},f={},d=new WeakMap,m=[],_=null,M=!1,p=null,h=null,A=null,T=null,S=null,B=null,C=null,b=new Qt(0,0,0),I=0,E=!1,x=null,w=null,H=null,k=null,j=null,ie.set(0,0,e.canvas.width,e.canvas.height),W.set(0,0,e.canvas.width,e.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:rt,disable:Ct,bindFramebuffer:Dt,drawBuffers:kt,useProgram:pe,setBlending:D,setMaterial:vn,setFlipSided:zt,setCullFace:Gt,setLineWidth:wt,setPolygonOffset:ce,setScissorTest:bt,activeTexture:y,bindTexture:g,unbindTexture:U,compressedTexImage2D:q,compressedTexImage3D:$,texImage2D:ft,texImage3D:Rt,updateUBOMapping:Vt,uniformBlockBinding:Ft,texStorage2D:Xt,texStorage3D:J,texSubImage2D:V,texSubImage3D:St,compressedTexSubImage2D:st,compressedTexSubImage3D:ut,scissor:Pt,viewport:dt,reset:oe}}function kh(e,t,n,i){const r=Ev(i);switch(n){case ed:return e*t;case id:return e*t;case rd:return e*t*2;case Il:return e*t/r.components*r.byteLength;case Ul:return e*t/r.components*r.byteLength;case sd:return e*t*2/r.components*r.byteLength;case Nl:return e*t*2/r.components*r.byteLength;case nd:return e*t*3/r.components*r.byteLength;case Fn:return e*t*4/r.components*r.byteLength;case Fl:return e*t*4/r.components*r.byteLength;case zo:case Go:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Vo:case Ho:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Oc:case kc:return Math.max(e,16)*Math.max(t,8)/4;case Fc:case Bc:return Math.max(e,8)*Math.max(t,8)/2;case zc:case Gc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Vc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Hc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Wc:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Xc:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case qc:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Yc:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case jc:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Kc:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case $c:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Zc:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Jc:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Qc:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case tl:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case el:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case nl:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Wo:case il:case rl:return Math.ceil(e/4)*Math.ceil(t/4)*16;case od:case sl:return Math.ceil(e/4)*Math.ceil(t/4)*8;case ol:case al:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Ev(e){switch(e){case gi:case Jf:return{byteLength:1,components:1};case Vs:case Qf:case Ys:return{byteLength:2,components:1};case Ll:case Dl:return{byteLength:2,components:4};case hr:case Pl:case jn:return{byteLength:4,components:1};case td:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function yv(e,t,n,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new se,u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,g){return m?new OffscreenCanvas(y,g):Ko("canvas")}function M(y,g,U){let q=1;const $=bt(y);if(($.width>U||$.height>U)&&(q=U/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const V=Math.floor(q*$.width),St=Math.floor(q*$.height);f===void 0&&(f=_(V,St));const st=g?_(V,St):f;return st.width=V,st.height=St,st.getContext("2d").drawImage(y,0,0,V,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+V+"x"+St+")."),st}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),y;return y}function p(y){return y.generateMipmaps}function h(y){e.generateMipmap(y)}function A(y){return y.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?e.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function T(y,g,U,q,$=!1){if(y!==null){if(e[y]!==void 0)return e[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let V=g;if(g===e.RED&&(U===e.FLOAT&&(V=e.R32F),U===e.HALF_FLOAT&&(V=e.R16F),U===e.UNSIGNED_BYTE&&(V=e.R8)),g===e.RED_INTEGER&&(U===e.UNSIGNED_BYTE&&(V=e.R8UI),U===e.UNSIGNED_SHORT&&(V=e.R16UI),U===e.UNSIGNED_INT&&(V=e.R32UI),U===e.BYTE&&(V=e.R8I),U===e.SHORT&&(V=e.R16I),U===e.INT&&(V=e.R32I)),g===e.RG&&(U===e.FLOAT&&(V=e.RG32F),U===e.HALF_FLOAT&&(V=e.RG16F),U===e.UNSIGNED_BYTE&&(V=e.RG8)),g===e.RG_INTEGER&&(U===e.UNSIGNED_BYTE&&(V=e.RG8UI),U===e.UNSIGNED_SHORT&&(V=e.RG16UI),U===e.UNSIGNED_INT&&(V=e.RG32UI),U===e.BYTE&&(V=e.RG8I),U===e.SHORT&&(V=e.RG16I),U===e.INT&&(V=e.RG32I)),g===e.RGB_INTEGER&&(U===e.UNSIGNED_BYTE&&(V=e.RGB8UI),U===e.UNSIGNED_SHORT&&(V=e.RGB16UI),U===e.UNSIGNED_INT&&(V=e.RGB32UI),U===e.BYTE&&(V=e.RGB8I),U===e.SHORT&&(V=e.RGB16I),U===e.INT&&(V=e.RGB32I)),g===e.RGBA_INTEGER&&(U===e.UNSIGNED_BYTE&&(V=e.RGBA8UI),U===e.UNSIGNED_SHORT&&(V=e.RGBA16UI),U===e.UNSIGNED_INT&&(V=e.RGBA32UI),U===e.BYTE&&(V=e.RGBA8I),U===e.SHORT&&(V=e.RGBA16I),U===e.INT&&(V=e.RGBA32I)),g===e.RGB&&U===e.UNSIGNED_INT_5_9_9_9_REV&&(V=e.RGB9_E5),g===e.RGBA){const St=$?ra:qt.getTransfer(q);U===e.FLOAT&&(V=e.RGBA32F),U===e.HALF_FLOAT&&(V=e.RGBA16F),U===e.UNSIGNED_BYTE&&(V=St===ee?e.SRGB8_ALPHA8:e.RGBA8),U===e.UNSIGNED_SHORT_4_4_4_4&&(V=e.RGBA4),U===e.UNSIGNED_SHORT_5_5_5_1&&(V=e.RGB5_A1)}return(V===e.R16F||V===e.R32F||V===e.RG16F||V===e.RG32F||V===e.RGBA16F||V===e.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function S(y,g){let U;return y?g===null||g===hr||g===Kr?U=e.DEPTH24_STENCIL8:g===jn?U=e.DEPTH32F_STENCIL8:g===Vs&&(U=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===hr||g===Kr?U=e.DEPTH_COMPONENT24:g===jn?U=e.DEPTH_COMPONENT32F:g===Vs&&(U=e.DEPTH_COMPONENT16),U}function B(y,g){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==un&&y.minFilter!==Yn?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function C(y){const g=y.target;g.removeEventListener("dispose",C),I(g),g.isVideoTexture&&u.delete(g)}function b(y){const g=y.target;g.removeEventListener("dispose",b),x(g)}function I(y){const g=i.get(y);if(g.__webglInit===void 0)return;const U=y.source,q=d.get(U);if(q){const $=q[g.__cacheKey];$.usedTimes--,$.usedTimes===0&&E(y),Object.keys(q).length===0&&d.delete(U)}i.remove(y)}function E(y){const g=i.get(y);e.deleteTexture(g.__webglTexture);const U=y.source,q=d.get(U);delete q[g.__cacheKey],o.memory.textures--}function x(y){const g=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(g.__webglFramebuffer[q]))for(let $=0;$<g.__webglFramebuffer[q].length;$++)e.deleteFramebuffer(g.__webglFramebuffer[q][$]);else e.deleteFramebuffer(g.__webglFramebuffer[q]);g.__webglDepthbuffer&&e.deleteRenderbuffer(g.__webglDepthbuffer[q])}else{if(Array.isArray(g.__webglFramebuffer))for(let q=0;q<g.__webglFramebuffer.length;q++)e.deleteFramebuffer(g.__webglFramebuffer[q]);else e.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&e.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&e.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let q=0;q<g.__webglColorRenderbuffer.length;q++)g.__webglColorRenderbuffer[q]&&e.deleteRenderbuffer(g.__webglColorRenderbuffer[q]);g.__webglDepthRenderbuffer&&e.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const U=y.textures;for(let q=0,$=U.length;q<$;q++){const V=i.get(U[q]);V.__webglTexture&&(e.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(U[q])}i.remove(y)}let w=0;function H(){w=0}function k(){const y=w;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),w+=1,y}function j(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function K(y,g){const U=i.get(y);if(y.isVideoTexture&&wt(y),y.isRenderTargetTexture===!1&&y.version>0&&U.__version!==y.version){const q=y.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(U,y,g);return}}n.bindTexture(e.TEXTURE_2D,U.__webglTexture,e.TEXTURE0+g)}function X(y,g){const U=i.get(y);if(y.version>0&&U.__version!==y.version){W(U,y,g);return}n.bindTexture(e.TEXTURE_2D_ARRAY,U.__webglTexture,e.TEXTURE0+g)}function Z(y,g){const U=i.get(y);if(y.version>0&&U.__version!==y.version){W(U,y,g);return}n.bindTexture(e.TEXTURE_3D,U.__webglTexture,e.TEXTURE0+g)}function G(y,g){const U=i.get(y);if(y.version>0&&U.__version!==y.version){tt(U,y,g);return}n.bindTexture(e.TEXTURE_CUBE_MAP,U.__webglTexture,e.TEXTURE0+g)}const it={[Uc]:e.REPEAT,[nr]:e.CLAMP_TO_EDGE,[Nc]:e.MIRRORED_REPEAT},lt={[un]:e.NEAREST,[a0]:e.NEAREST_MIPMAP_NEAREST,[co]:e.NEAREST_MIPMAP_LINEAR,[Yn]:e.LINEAR,[Na]:e.LINEAR_MIPMAP_NEAREST,[ir]:e.LINEAR_MIPMAP_LINEAR},Tt={[f0]:e.NEVER,[v0]:e.ALWAYS,[d0]:e.LESS,[ad]:e.LEQUAL,[p0]:e.EQUAL,[_0]:e.GEQUAL,[m0]:e.GREATER,[g0]:e.NOTEQUAL};function Bt(y,g){if(g.type===jn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Yn||g.magFilter===Na||g.magFilter===co||g.magFilter===ir||g.minFilter===Yn||g.minFilter===Na||g.minFilter===co||g.minFilter===ir)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(y,e.TEXTURE_WRAP_S,it[g.wrapS]),e.texParameteri(y,e.TEXTURE_WRAP_T,it[g.wrapT]),(y===e.TEXTURE_3D||y===e.TEXTURE_2D_ARRAY)&&e.texParameteri(y,e.TEXTURE_WRAP_R,it[g.wrapR]),e.texParameteri(y,e.TEXTURE_MAG_FILTER,lt[g.magFilter]),e.texParameteri(y,e.TEXTURE_MIN_FILTER,lt[g.minFilter]),g.compareFunction&&(e.texParameteri(y,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(y,e.TEXTURE_COMPARE_FUNC,Tt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===un||g.minFilter!==co&&g.minFilter!==ir||g.type===jn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const U=t.get("EXT_texture_filter_anisotropic");e.texParameterf(y,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function ie(y,g){let U=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",C));const q=g.source;let $=d.get(q);$===void 0&&($={},d.set(q,$));const V=j(g);if(V!==y.__cacheKey){$[V]===void 0&&($[V]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,U=!0),$[V].usedTimes++;const St=$[y.__cacheKey];St!==void 0&&($[y.__cacheKey].usedTimes--,St.usedTimes===0&&E(g)),y.__cacheKey=V,y.__webglTexture=$[V].texture}return U}function W(y,g,U){let q=e.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=e.TEXTURE_2D_ARRAY),g.isData3DTexture&&(q=e.TEXTURE_3D);const $=ie(y,g),V=g.source;n.bindTexture(q,y.__webglTexture,e.TEXTURE0+U);const St=i.get(V);if(V.version!==St.__version||$===!0){n.activeTexture(e.TEXTURE0+U);const st=qt.getPrimaries(qt.workingColorSpace),ut=g.colorSpace===Ii?null:qt.getPrimaries(g.colorSpace),Xt=g.colorSpace===Ii||st===ut?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let J=M(g.image,!1,r.maxTextureSize);J=ce(g,J);const ft=s.convert(g.format,g.colorSpace),Rt=s.convert(g.type);let Pt=T(g.internalFormat,ft,Rt,g.colorSpace,g.isVideoTexture);Bt(q,g);let dt;const Vt=g.mipmaps,Ft=g.isVideoTexture!==!0,oe=St.__version===void 0||$===!0,R=V.dataReady,nt=B(g,J);if(g.isDepthTexture)Pt=S(g.format===$r,g.type),oe&&(Ft?n.texStorage2D(e.TEXTURE_2D,1,Pt,J.width,J.height):n.texImage2D(e.TEXTURE_2D,0,Pt,J.width,J.height,0,ft,Rt,null));else if(g.isDataTexture)if(Vt.length>0){Ft&&oe&&n.texStorage2D(e.TEXTURE_2D,nt,Pt,Vt[0].width,Vt[0].height);for(let z=0,Y=Vt.length;z<Y;z++)dt=Vt[z],Ft?R&&n.texSubImage2D(e.TEXTURE_2D,z,0,0,dt.width,dt.height,ft,Rt,dt.data):n.texImage2D(e.TEXTURE_2D,z,Pt,dt.width,dt.height,0,ft,Rt,dt.data);g.generateMipmaps=!1}else Ft?(oe&&n.texStorage2D(e.TEXTURE_2D,nt,Pt,J.width,J.height),R&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,J.width,J.height,ft,Rt,J.data)):n.texImage2D(e.TEXTURE_2D,0,Pt,J.width,J.height,0,ft,Rt,J.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ft&&oe&&n.texStorage3D(e.TEXTURE_2D_ARRAY,nt,Pt,Vt[0].width,Vt[0].height,J.depth);for(let z=0,Y=Vt.length;z<Y;z++)if(dt=Vt[z],g.format!==Fn)if(ft!==null)if(Ft){if(R)if(g.layerUpdates.size>0){const ct=kh(dt.width,dt.height,g.format,g.type);for(const ot of g.layerUpdates){const It=dt.data.subarray(ot*ct/dt.data.BYTES_PER_ELEMENT,(ot+1)*ct/dt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,z,0,0,ot,dt.width,dt.height,1,ft,It)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,z,0,0,0,dt.width,dt.height,J.depth,ft,dt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,z,Pt,dt.width,dt.height,J.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?R&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,z,0,0,0,dt.width,dt.height,J.depth,ft,Rt,dt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,z,Pt,dt.width,dt.height,J.depth,0,ft,Rt,dt.data)}else{Ft&&oe&&n.texStorage2D(e.TEXTURE_2D,nt,Pt,Vt[0].width,Vt[0].height);for(let z=0,Y=Vt.length;z<Y;z++)dt=Vt[z],g.format!==Fn?ft!==null?Ft?R&&n.compressedTexSubImage2D(e.TEXTURE_2D,z,0,0,dt.width,dt.height,ft,dt.data):n.compressedTexImage2D(e.TEXTURE_2D,z,Pt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?R&&n.texSubImage2D(e.TEXTURE_2D,z,0,0,dt.width,dt.height,ft,Rt,dt.data):n.texImage2D(e.TEXTURE_2D,z,Pt,dt.width,dt.height,0,ft,Rt,dt.data)}else if(g.isDataArrayTexture)if(Ft){if(oe&&n.texStorage3D(e.TEXTURE_2D_ARRAY,nt,Pt,J.width,J.height,J.depth),R)if(g.layerUpdates.size>0){const z=kh(J.width,J.height,g.format,g.type);for(const Y of g.layerUpdates){const ct=J.data.subarray(Y*z/J.data.BYTES_PER_ELEMENT,(Y+1)*z/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Y,J.width,J.height,1,ft,Rt,ct)}g.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ft,Rt,J.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Pt,J.width,J.height,J.depth,0,ft,Rt,J.data);else if(g.isData3DTexture)Ft?(oe&&n.texStorage3D(e.TEXTURE_3D,nt,Pt,J.width,J.height,J.depth),R&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ft,Rt,J.data)):n.texImage3D(e.TEXTURE_3D,0,Pt,J.width,J.height,J.depth,0,ft,Rt,J.data);else if(g.isFramebufferTexture){if(oe)if(Ft)n.texStorage2D(e.TEXTURE_2D,nt,Pt,J.width,J.height);else{let z=J.width,Y=J.height;for(let ct=0;ct<nt;ct++)n.texImage2D(e.TEXTURE_2D,ct,Pt,z,Y,0,ft,Rt,null),z>>=1,Y>>=1}}else if(Vt.length>0){if(Ft&&oe){const z=bt(Vt[0]);n.texStorage2D(e.TEXTURE_2D,nt,Pt,z.width,z.height)}for(let z=0,Y=Vt.length;z<Y;z++)dt=Vt[z],Ft?R&&n.texSubImage2D(e.TEXTURE_2D,z,0,0,ft,Rt,dt):n.texImage2D(e.TEXTURE_2D,z,Pt,ft,Rt,dt);g.generateMipmaps=!1}else if(Ft){if(oe){const z=bt(J);n.texStorage2D(e.TEXTURE_2D,nt,Pt,z.width,z.height)}R&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ft,Rt,J)}else n.texImage2D(e.TEXTURE_2D,0,Pt,ft,Rt,J);p(g)&&h(q),St.__version=V.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function tt(y,g,U){if(g.image.length!==6)return;const q=ie(y,g),$=g.source;n.bindTexture(e.TEXTURE_CUBE_MAP,y.__webglTexture,e.TEXTURE0+U);const V=i.get($);if($.version!==V.__version||q===!0){n.activeTexture(e.TEXTURE0+U);const St=qt.getPrimaries(qt.workingColorSpace),st=g.colorSpace===Ii?null:qt.getPrimaries(g.colorSpace),ut=g.colorSpace===Ii||St===st?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Xt=g.isCompressedTexture||g.image[0].isCompressedTexture,J=g.image[0]&&g.image[0].isDataTexture,ft=[];for(let Y=0;Y<6;Y++)!Xt&&!J?ft[Y]=M(g.image[Y],!0,r.maxCubemapSize):ft[Y]=J?g.image[Y].image:g.image[Y],ft[Y]=ce(g,ft[Y]);const Rt=ft[0],Pt=s.convert(g.format,g.colorSpace),dt=s.convert(g.type),Vt=T(g.internalFormat,Pt,dt,g.colorSpace),Ft=g.isVideoTexture!==!0,oe=V.__version===void 0||q===!0,R=$.dataReady;let nt=B(g,Rt);Bt(e.TEXTURE_CUBE_MAP,g);let z;if(Xt){Ft&&oe&&n.texStorage2D(e.TEXTURE_CUBE_MAP,nt,Vt,Rt.width,Rt.height);for(let Y=0;Y<6;Y++){z=ft[Y].mipmaps;for(let ct=0;ct<z.length;ct++){const ot=z[ct];g.format!==Fn?Pt!==null?Ft?R&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct,0,0,ot.width,ot.height,Pt,ot.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct,Vt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?R&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct,0,0,ot.width,ot.height,Pt,dt,ot.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct,Vt,ot.width,ot.height,0,Pt,dt,ot.data)}}}else{if(z=g.mipmaps,Ft&&oe){z.length>0&&nt++;const Y=bt(ft[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,nt,Vt,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(J){Ft?R&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ft[Y].width,ft[Y].height,Pt,dt,ft[Y].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Vt,ft[Y].width,ft[Y].height,0,Pt,dt,ft[Y].data);for(let ct=0;ct<z.length;ct++){const It=z[ct].image[Y].image;Ft?R&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct+1,0,0,It.width,It.height,Pt,dt,It.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct+1,Vt,It.width,It.height,0,Pt,dt,It.data)}}else{Ft?R&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Pt,dt,ft[Y]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Vt,Pt,dt,ft[Y]);for(let ct=0;ct<z.length;ct++){const ot=z[ct];Ft?R&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct+1,0,0,Pt,dt,ot.image[Y]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct+1,Vt,Pt,dt,ot.image[Y])}}}p(g)&&h(e.TEXTURE_CUBE_MAP),V.__version=$.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function xt(y,g,U,q,$,V){const St=s.convert(U.format,U.colorSpace),st=s.convert(U.type),ut=T(U.internalFormat,St,st,U.colorSpace),Xt=i.get(g),J=i.get(U);if(J.__renderTarget=g,!Xt.__hasExternalTextures){const ft=Math.max(1,g.width>>V),Rt=Math.max(1,g.height>>V);$===e.TEXTURE_3D||$===e.TEXTURE_2D_ARRAY?n.texImage3D($,V,ut,ft,Rt,g.depth,0,St,st,null):n.texImage2D($,V,ut,ft,Rt,0,St,st,null)}n.bindFramebuffer(e.FRAMEBUFFER,y),Gt(g)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,q,$,J.__webglTexture,0,zt(g)):($===e.TEXTURE_2D||$>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,q,$,J.__webglTexture,V),n.bindFramebuffer(e.FRAMEBUFFER,null)}function rt(y,g,U){if(e.bindRenderbuffer(e.RENDERBUFFER,y),g.depthBuffer){const q=g.depthTexture,$=q&&q.isDepthTexture?q.type:null,V=S(g.stencilBuffer,$),St=g.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,st=zt(g);Gt(g)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,st,V,g.width,g.height):U?e.renderbufferStorageMultisample(e.RENDERBUFFER,st,V,g.width,g.height):e.renderbufferStorage(e.RENDERBUFFER,V,g.width,g.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,St,e.RENDERBUFFER,y)}else{const q=g.textures;for(let $=0;$<q.length;$++){const V=q[$],St=s.convert(V.format,V.colorSpace),st=s.convert(V.type),ut=T(V.internalFormat,St,st,V.colorSpace),Xt=zt(g);U&&Gt(g)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Xt,ut,g.width,g.height):Gt(g)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Xt,ut,g.width,g.height):e.renderbufferStorage(e.RENDERBUFFER,ut,g.width,g.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ct(y,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(g.depthTexture);q.__renderTarget=g,(!q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),K(g.depthTexture,0);const $=q.__webglTexture,V=zt(g);if(g.depthTexture.format===Vr)Gt(g)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,$,0,V):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,$,0);else if(g.depthTexture.format===$r)Gt(g)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,$,0,V):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Dt(y){const g=i.get(y),U=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const q=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),q){const $=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,q.removeEventListener("dispose",$)};q.addEventListener("dispose",$),g.__depthDisposeCallback=$}g.__boundDepthTexture=q}if(y.depthTexture&&!g.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Ct(g.__webglFramebuffer,y)}else if(U){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]===void 0)g.__webglDepthbuffer[q]=e.createRenderbuffer(),rt(g.__webglDepthbuffer[q],y,!1);else{const $=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,V=g.__webglDepthbuffer[q];e.bindRenderbuffer(e.RENDERBUFFER,V),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,V)}}else if(n.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=e.createRenderbuffer(),rt(g.__webglDepthbuffer,y,!1);else{const q=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,$=g.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,$),e.framebufferRenderbuffer(e.FRAMEBUFFER,q,e.RENDERBUFFER,$)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function kt(y,g,U){const q=i.get(y);g!==void 0&&xt(q.__webglFramebuffer,y,y.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),U!==void 0&&Dt(y)}function pe(y){const g=y.texture,U=i.get(y),q=i.get(g);y.addEventListener("dispose",b);const $=y.textures,V=y.isWebGLCubeRenderTarget===!0,St=$.length>1;if(St||(q.__webglTexture===void 0&&(q.__webglTexture=e.createTexture()),q.__version=g.version,o.memory.textures++),V){U.__webglFramebuffer=[];for(let st=0;st<6;st++)if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer[st]=[];for(let ut=0;ut<g.mipmaps.length;ut++)U.__webglFramebuffer[st][ut]=e.createFramebuffer()}else U.__webglFramebuffer[st]=e.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer=[];for(let st=0;st<g.mipmaps.length;st++)U.__webglFramebuffer[st]=e.createFramebuffer()}else U.__webglFramebuffer=e.createFramebuffer();if(St)for(let st=0,ut=$.length;st<ut;st++){const Xt=i.get($[st]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=e.createTexture(),o.memory.textures++)}if(y.samples>0&&Gt(y)===!1){U.__webglMultisampledFramebuffer=e.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let st=0;st<$.length;st++){const ut=$[st];U.__webglColorRenderbuffer[st]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,U.__webglColorRenderbuffer[st]);const Xt=s.convert(ut.format,ut.colorSpace),J=s.convert(ut.type),ft=T(ut.internalFormat,Xt,J,ut.colorSpace,y.isXRRenderTarget===!0),Rt=zt(y);e.renderbufferStorageMultisample(e.RENDERBUFFER,Rt,ft,y.width,y.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+st,e.RENDERBUFFER,U.__webglColorRenderbuffer[st])}e.bindRenderbuffer(e.RENDERBUFFER,null),y.depthBuffer&&(U.__webglDepthRenderbuffer=e.createRenderbuffer(),rt(U.__webglDepthRenderbuffer,y,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(V){n.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),Bt(e.TEXTURE_CUBE_MAP,g);for(let st=0;st<6;st++)if(g.mipmaps&&g.mipmaps.length>0)for(let ut=0;ut<g.mipmaps.length;ut++)xt(U.__webglFramebuffer[st][ut],y,g,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut);else xt(U.__webglFramebuffer[st],y,g,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);p(g)&&h(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(St){for(let st=0,ut=$.length;st<ut;st++){const Xt=$[st],J=i.get(Xt);n.bindTexture(e.TEXTURE_2D,J.__webglTexture),Bt(e.TEXTURE_2D,Xt),xt(U.__webglFramebuffer,y,Xt,e.COLOR_ATTACHMENT0+st,e.TEXTURE_2D,0),p(Xt)&&h(e.TEXTURE_2D)}n.unbindTexture()}else{let st=e.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(st=y.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(st,q.__webglTexture),Bt(st,g),g.mipmaps&&g.mipmaps.length>0)for(let ut=0;ut<g.mipmaps.length;ut++)xt(U.__webglFramebuffer[ut],y,g,e.COLOR_ATTACHMENT0,st,ut);else xt(U.__webglFramebuffer,y,g,e.COLOR_ATTACHMENT0,st,0);p(g)&&h(st),n.unbindTexture()}y.depthBuffer&&Dt(y)}function Wt(y){const g=y.textures;for(let U=0,q=g.length;U<q;U++){const $=g[U];if(p($)){const V=A(y),St=i.get($).__webglTexture;n.bindTexture(V,St),h(V),n.unbindTexture()}}}const ye=[],D=[];function vn(y){if(y.samples>0){if(Gt(y)===!1){const g=y.textures,U=y.width,q=y.height;let $=e.COLOR_BUFFER_BIT;const V=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,St=i.get(y),st=g.length>1;if(st)for(let ut=0;ut<g.length;ut++)n.bindFramebuffer(e.FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,St.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let ut=0;ut<g.length;ut++){if(y.resolveDepthBuffer&&(y.depthBuffer&&($|=e.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&($|=e.STENCIL_BUFFER_BIT)),st){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,St.__webglColorRenderbuffer[ut]);const Xt=i.get(g[ut]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Xt,0)}e.blitFramebuffer(0,0,U,q,0,0,U,q,$,e.NEAREST),c===!0&&(ye.length=0,D.length=0,ye.push(e.COLOR_ATTACHMENT0+ut),y.depthBuffer&&y.resolveDepthBuffer===!1&&(ye.push(V),D.push(V),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,D)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ye))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),st)for(let ut=0;ut<g.length;ut++){n.bindFramebuffer(e.FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.RENDERBUFFER,St.__webglColorRenderbuffer[ut]);const Xt=i.get(g[ut]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,St.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.TEXTURE_2D,Xt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&c){const g=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[g])}}}function zt(y){return Math.min(r.maxSamples,y.samples)}function Gt(y){const g=i.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function wt(y){const g=o.render.frame;u.get(y)!==g&&(u.set(y,g),y.update())}function ce(y,g){const U=y.colorSpace,q=y.format,$=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||U!==ls&&U!==Ii&&(qt.getTransfer(U)===ee?(q!==Fn||$!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),g}function bt(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(l.width=y.naturalWidth||y.width,l.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(l.width=y.displayWidth,l.height=y.displayHeight):(l.width=y.width,l.height=y.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=H,this.setTexture2D=K,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=G,this.rebindTextures=kt,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Gt}function Tv(e,t){function n(i,r=Ii){let s;const o=qt.getTransfer(r);if(i===gi)return e.UNSIGNED_BYTE;if(i===Ll)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Dl)return e.UNSIGNED_SHORT_5_5_5_1;if(i===td)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Jf)return e.BYTE;if(i===Qf)return e.SHORT;if(i===Vs)return e.UNSIGNED_SHORT;if(i===Pl)return e.INT;if(i===hr)return e.UNSIGNED_INT;if(i===jn)return e.FLOAT;if(i===Ys)return e.HALF_FLOAT;if(i===ed)return e.ALPHA;if(i===nd)return e.RGB;if(i===Fn)return e.RGBA;if(i===id)return e.LUMINANCE;if(i===rd)return e.LUMINANCE_ALPHA;if(i===Vr)return e.DEPTH_COMPONENT;if(i===$r)return e.DEPTH_STENCIL;if(i===Il)return e.RED;if(i===Ul)return e.RED_INTEGER;if(i===sd)return e.RG;if(i===Nl)return e.RG_INTEGER;if(i===Fl)return e.RGBA_INTEGER;if(i===zo||i===Go||i===Vo||i===Ho)if(o===ee)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===zo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===zo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Go)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ho)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fc||i===Oc||i===Bc||i===kc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Fc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Oc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zc||i===Gc||i===Vc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===zc||i===Gc)return o===ee?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Vc)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Hc||i===Wc||i===Xc||i===qc||i===Yc||i===jc||i===Kc||i===$c||i===Zc||i===Jc||i===Qc||i===tl||i===el||i===nl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Hc)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wc)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xc)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qc)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yc)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jc)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kc)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$c)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zc)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jc)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qc)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===tl)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===el)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nl)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wo||i===il||i===rl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Wo)return o===ee?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===il)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===od||i===sl||i===ol||i===al)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Wo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===sl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ol)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===al)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Kr?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}class Av extends An{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Fs extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bv={type:"move"};class uc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const M of t.hand.values()){const p=n.getJointPose(M,i),h=this._getHandJoint(l,M);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,_=.005;l.inputState.pinching&&d>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=n.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bv)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Fs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const wv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Cv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,i){if(this.texture===null){const r=new je,s=t.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new ki({vertexShader:wv,fragmentShader:Rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new bn(new aa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pv extends us{constructor(t,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,d=null,m=null,_=null;const M=new Cv,p=n.getContextAttributes();let h=null,A=null;const T=[],S=[],B=new se;let C=null;const b=new An;b.viewport=new Ae;const I=new An;I.viewport=new Ae;const E=[b,I],x=new Av;let w=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let tt=T[W];return tt===void 0&&(tt=new uc,T[W]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(W){let tt=T[W];return tt===void 0&&(tt=new uc,T[W]=tt),tt.getGripSpace()},this.getHand=function(W){let tt=T[W];return tt===void 0&&(tt=new uc,T[W]=tt),tt.getHandSpace()};function k(W){const tt=S.indexOf(W.inputSource);if(tt===-1)return;const xt=T[tt];xt!==void 0&&(xt.update(W.inputSource,W.frame,l||o),xt.dispatchEvent({type:W.type,data:W.inputSource}))}function j(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",K);for(let W=0;W<T.length;W++){const tt=S[W];tt!==null&&(S[W]=null,T[W].disconnect(tt))}w=null,H=null,M.reset(),t.setRenderTarget(h),m=null,d=null,f=null,r=null,A=null,ie.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(h=t.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",j),r.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await n.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(B),r.renderState.layers===void 0){const tt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,tt),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new fr(m.framebufferWidth,m.framebufferHeight,{format:Fn,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let tt=null,xt=null,rt=null;p.depth&&(rt=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,tt=p.stencil?$r:Vr,xt=p.stencil?Kr:hr);const Ct={colorFormat:n.RGBA8,depthFormat:rt,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Ct),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),A=new fr(d.textureWidth,d.textureHeight,{format:Fn,type:gi,depthTexture:new Md(d.textureWidth,d.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),ie.setContext(r),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function K(W){for(let tt=0;tt<W.removed.length;tt++){const xt=W.removed[tt],rt=S.indexOf(xt);rt>=0&&(S[rt]=null,T[rt].disconnect(xt))}for(let tt=0;tt<W.added.length;tt++){const xt=W.added[tt];let rt=S.indexOf(xt);if(rt===-1){for(let Dt=0;Dt<T.length;Dt++)if(Dt>=S.length){S.push(xt),rt=Dt;break}else if(S[Dt]===null){S[Dt]=xt,rt=Dt;break}if(rt===-1)break}const Ct=T[rt];Ct&&Ct.connect(xt)}}const X=new N,Z=new N;function G(W,tt,xt){X.setFromMatrixPosition(tt.matrixWorld),Z.setFromMatrixPosition(xt.matrixWorld);const rt=X.distanceTo(Z),Ct=tt.projectionMatrix.elements,Dt=xt.projectionMatrix.elements,kt=Ct[14]/(Ct[10]-1),pe=Ct[14]/(Ct[10]+1),Wt=(Ct[9]+1)/Ct[5],ye=(Ct[9]-1)/Ct[5],D=(Ct[8]-1)/Ct[0],vn=(Dt[8]+1)/Dt[0],zt=kt*D,Gt=kt*vn,wt=rt/(-D+vn),ce=wt*-D;if(tt.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ce),W.translateZ(wt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ct[10]===-1)W.projectionMatrix.copy(tt.projectionMatrix),W.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const bt=kt+wt,y=pe+wt,g=zt-ce,U=Gt+(rt-ce),q=Wt*pe/y*bt,$=ye*pe/y*bt;W.projectionMatrix.makePerspective(g,U,q,$,bt,y),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function it(W,tt){tt===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(tt.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let tt=W.near,xt=W.far;M.texture!==null&&(M.depthNear>0&&(tt=M.depthNear),M.depthFar>0&&(xt=M.depthFar)),x.near=I.near=b.near=tt,x.far=I.far=b.far=xt,(w!==x.near||H!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,H=x.far),b.layers.mask=W.layers.mask|2,I.layers.mask=W.layers.mask|4,x.layers.mask=b.layers.mask|I.layers.mask;const rt=W.parent,Ct=x.cameras;it(x,rt);for(let Dt=0;Dt<Ct.length;Dt++)it(Ct[Dt],rt);Ct.length===2?G(x,b,I):x.projectionMatrix.copy(b.projectionMatrix),lt(W,x,rt)};function lt(W,tt,xt){xt===null?W.matrix.copy(tt.matrixWorld):(W.matrix.copy(xt.matrixWorld),W.matrix.invert(),W.matrix.multiply(tt.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(tt.projectionMatrix),W.projectionMatrixInverse.copy(tt.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=cl*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(x)};let Tt=null;function Bt(W,tt){if(u=tt.getViewerPose(l||o),_=tt,u!==null){const xt=u.views;m!==null&&(t.setRenderTargetFramebuffer(A,m.framebuffer),t.setRenderTarget(A));let rt=!1;xt.length!==x.cameras.length&&(x.cameras.length=0,rt=!0);for(let Dt=0;Dt<xt.length;Dt++){const kt=xt[Dt];let pe=null;if(m!==null)pe=m.getViewport(kt);else{const ye=f.getViewSubImage(d,kt);pe=ye.viewport,Dt===0&&(t.setRenderTargetTextures(A,ye.colorTexture,d.ignoreDepthValues?void 0:ye.depthStencilTexture),t.setRenderTarget(A))}let Wt=E[Dt];Wt===void 0&&(Wt=new An,Wt.layers.enable(Dt),Wt.viewport=new Ae,E[Dt]=Wt),Wt.matrix.fromArray(kt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(kt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(pe.x,pe.y,pe.width,pe.height),Dt===0&&(x.matrix.copy(Wt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),rt===!0&&x.cameras.push(Wt)}const Ct=r.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const Dt=f.getDepthInformation(xt[0]);Dt&&Dt.isValid&&Dt.texture&&M.init(t,Dt,r.renderState)}}for(let xt=0;xt<T.length;xt++){const rt=S[xt],Ct=T[xt];rt!==null&&Ct!==void 0&&Ct.update(rt,tt,l||o)}Tt&&Tt(W,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),_=null}const ie=new xd;ie.setAnimationLoop(Bt),this.setAnimationLoop=function(W){Tt=W},this.dispose=function(){}}}const $i=new _i,Lv=new ve;function Dv(e,t){function n(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,md(e)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,A,T,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,S)):h.isMeshMatcapMaterial?(s(p,h),_(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),M(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?c(p,h,A,T):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,n(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,n(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===tn&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,n(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===tn&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,n(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,n(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const A=t.get(h),T=A.envMap,S=A.envMapRotation;T&&(p.envMap.value=T,$i.copy(S),$i.x*=-1,$i.y*=-1,$i.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),p.envMapRotation.value.setFromMatrix4(Lv.makeRotationFromEuler($i)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,n(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function c(p,h,A,T){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*A,p.scale.value=T*.5,h.map&&(p.map.value=h.map,n(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,n(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,A){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===tn&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,h){h.matcap&&(p.matcap.value=h.matcap)}function M(p,h){const A=t.get(h).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Iv(e,t,n,i){let r={},s={},o=[];const a=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,T){const S=T.program;i.uniformBlockBinding(A,S)}function l(A,T){let S=r[A.id];S===void 0&&(_(A),S=u(A),r[A.id]=S,A.addEventListener("dispose",p));const B=T.program;i.updateUBOMapping(A,B);const C=t.render.frame;s[A.id]!==C&&(d(A),s[A.id]=C)}function u(A){const T=f();A.__bindingPointIndex=T;const S=e.createBuffer(),B=A.__size,C=A.usage;return e.bindBuffer(e.UNIFORM_BUFFER,S),e.bufferData(e.UNIFORM_BUFFER,B,C),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,S),S}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const T=r[A.id],S=A.uniforms,B=A.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let C=0,b=S.length;C<b;C++){const I=Array.isArray(S[C])?S[C]:[S[C]];for(let E=0,x=I.length;E<x;E++){const w=I[E];if(m(w,C,E,B)===!0){const H=w.__offset,k=Array.isArray(w.value)?w.value:[w.value];let j=0;for(let K=0;K<k.length;K++){const X=k[K],Z=M(X);typeof X=="number"||typeof X=="boolean"?(w.__data[0]=X,e.bufferSubData(e.UNIFORM_BUFFER,H+j,w.__data)):X.isMatrix3?(w.__data[0]=X.elements[0],w.__data[1]=X.elements[1],w.__data[2]=X.elements[2],w.__data[3]=0,w.__data[4]=X.elements[3],w.__data[5]=X.elements[4],w.__data[6]=X.elements[5],w.__data[7]=0,w.__data[8]=X.elements[6],w.__data[9]=X.elements[7],w.__data[10]=X.elements[8],w.__data[11]=0):(X.toArray(w.__data,j),j+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,H,w.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function m(A,T,S,B){const C=A.value,b=T+"_"+S;if(B[b]===void 0)return typeof C=="number"||typeof C=="boolean"?B[b]=C:B[b]=C.clone(),!0;{const I=B[b];if(typeof C=="number"||typeof C=="boolean"){if(I!==C)return B[b]=C,!0}else if(I.equals(C)===!1)return I.copy(C),!0}return!1}function _(A){const T=A.uniforms;let S=0;const B=16;for(let b=0,I=T.length;b<I;b++){const E=Array.isArray(T[b])?T[b]:[T[b]];for(let x=0,w=E.length;x<w;x++){const H=E[x],k=Array.isArray(H.value)?H.value:[H.value];for(let j=0,K=k.length;j<K;j++){const X=k[j],Z=M(X),G=S%B,it=G%Z.boundary,lt=G+it;S+=it,lt!==0&&B-lt<Z.storage&&(S+=B-lt),H.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=Z.storage}}}const C=S%B;return C>0&&(S+=B-C),A.__size=S,A.__cache={},this}function M(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function p(A){const T=A.target;T.removeEventListener("dispose",p);const S=o.indexOf(T.__bindingPointIndex);o.splice(S,1),e.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function h(){for(const A in r)e.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:c,update:l,dispose:h}}class Uv{constructor(t={}){const{canvas:n=M0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const _=new Uint32Array(4),M=new Int32Array(4);let p=null,h=null;const A=[],T=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tn,this.toneMapping=Fi,this.toneMappingExposure=1;const S=this;let B=!1,C=0,b=0,I=null,E=-1,x=null;const w=new Ae,H=new Ae;let k=null;const j=new Qt(0);let K=0,X=n.width,Z=n.height,G=1,it=null,lt=null;const Tt=new Ae(0,0,X,Z),Bt=new Ae(0,0,X,Z);let ie=!1;const W=new vd;let tt=!1,xt=!1;const rt=new ve,Ct=new ve,Dt=new N,kt=new Ae,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function ye(){return I===null?G:1}let D=i;function vn(v,P){return n.getContext(v,P)}try{const v={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Cl}`),n.addEventListener("webglcontextlost",Y,!1),n.addEventListener("webglcontextrestored",ct,!1),n.addEventListener("webglcontextcreationerror",ot,!1),D===null){const P="webgl2";if(D=vn(P,v),D===null)throw vn(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let zt,Gt,wt,ce,bt,y,g,U,q,$,V,St,st,ut,Xt,J,ft,Rt,Pt,dt,Vt,Ft,oe,R;function nt(){zt=new k1(D),zt.init(),Ft=new Tv(D,zt),Gt=new D1(D,zt,t,Ft),wt=new Sv(D,zt),Gt.reverseDepthBuffer&&d&&wt.buffers.depth.setReversed(!0),ce=new V1(D),bt=new ov,y=new yv(D,zt,wt,bt,Gt,Ft,ce),g=new U1(S),U=new B1(S),q=new j0(D),oe=new P1(D,q),$=new z1(D,q,ce,oe),V=new W1(D,$,q,ce),Pt=new H1(D,Gt,y),J=new I1(bt),St=new sv(S,g,U,zt,Gt,oe,J),st=new Dv(S,bt),ut=new cv,Xt=new pv(zt),Rt=new C1(S,g,U,wt,V,m,c),ft=new xv(S,V,Gt),R=new Iv(D,ce,Gt,wt),dt=new L1(D,zt,ce),Vt=new G1(D,zt,ce),ce.programs=St.programs,S.capabilities=Gt,S.extensions=zt,S.properties=bt,S.renderLists=ut,S.shadowMap=ft,S.state=wt,S.info=ce}nt();const z=new Pv(S,D);this.xr=z,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const v=zt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=zt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(v){v!==void 0&&(G=v,this.setSize(X,Z,!1))},this.getSize=function(v){return v.set(X,Z)},this.setSize=function(v,P,F=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=v,Z=P,n.width=Math.floor(v*G),n.height=Math.floor(P*G),F===!0&&(n.style.width=v+"px",n.style.height=P+"px"),this.setViewport(0,0,v,P)},this.getDrawingBufferSize=function(v){return v.set(X*G,Z*G).floor()},this.setDrawingBufferSize=function(v,P,F){X=v,Z=P,G=F,n.width=Math.floor(v*F),n.height=Math.floor(P*F),this.setViewport(0,0,v,P)},this.getCurrentViewport=function(v){return v.copy(w)},this.getViewport=function(v){return v.copy(Tt)},this.setViewport=function(v,P,F,O){v.isVector4?Tt.set(v.x,v.y,v.z,v.w):Tt.set(v,P,F,O),wt.viewport(w.copy(Tt).multiplyScalar(G).round())},this.getScissor=function(v){return v.copy(Bt)},this.setScissor=function(v,P,F,O){v.isVector4?Bt.set(v.x,v.y,v.z,v.w):Bt.set(v,P,F,O),wt.scissor(H.copy(Bt).multiplyScalar(G).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(v){wt.setScissorTest(ie=v)},this.setOpaqueSort=function(v){it=v},this.setTransparentSort=function(v){lt=v},this.getClearColor=function(v){return v.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(v=!0,P=!0,F=!0){let O=0;if(v){let L=!1;if(I!==null){const Q=I.texture.format;L=Q===Fl||Q===Nl||Q===Ul}if(L){const Q=I.texture.type,at=Q===gi||Q===hr||Q===Vs||Q===Kr||Q===Ll||Q===Dl,pt=Rt.getClearColor(),mt=Rt.getClearAlpha(),Lt=pt.r,Ut=pt.g,gt=pt.b;at?(_[0]=Lt,_[1]=Ut,_[2]=gt,_[3]=mt,D.clearBufferuiv(D.COLOR,0,_)):(M[0]=Lt,M[1]=Ut,M[2]=gt,M[3]=mt,D.clearBufferiv(D.COLOR,0,M))}else O|=D.COLOR_BUFFER_BIT}P&&(O|=D.DEPTH_BUFFER_BIT),F&&(O|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Y,!1),n.removeEventListener("webglcontextrestored",ct,!1),n.removeEventListener("webglcontextcreationerror",ot,!1),ut.dispose(),Xt.dispose(),bt.dispose(),g.dispose(),U.dispose(),V.dispose(),oe.dispose(),R.dispose(),St.dispose(),z.dispose(),z.removeEventListener("sessionstart",Uu),z.removeEventListener("sessionend",Nu),Wi.stop()};function Y(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const v=ce.autoReset,P=ft.enabled,F=ft.autoUpdate,O=ft.needsUpdate,L=ft.type;nt(),ce.autoReset=v,ft.enabled=P,ft.autoUpdate=F,ft.needsUpdate=O,ft.type=L}function ot(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function It(v){const P=v.target;P.removeEventListener("dispose",It),Me(P)}function Me(v){ze(v),bt.remove(v)}function ze(v){const P=bt.get(v).programs;P!==void 0&&(P.forEach(function(F){St.releaseProgram(F)}),v.isShaderMaterial&&St.releaseShaderCache(v))}this.renderBufferDirect=function(v,P,F,O,L,Q){P===null&&(P=pe);const at=L.isMesh&&L.matrixWorld.determinant()<0,pt=Rm(v,P,F,O,L);wt.setMaterial(O,at);let mt=F.index,Lt=1;if(O.wireframe===!0){if(mt=$.getWireframeAttribute(F),mt===void 0)return;Lt=2}const Ut=F.drawRange,gt=F.attributes.position;let jt=Ut.start*Lt,ae=(Ut.start+Ut.count)*Lt;Q!==null&&(jt=Math.max(jt,Q.start*Lt),ae=Math.min(ae,(Q.start+Q.count)*Lt)),mt!==null?(jt=Math.max(jt,0),ae=Math.min(ae,mt.count)):gt!=null&&(jt=Math.max(jt,0),ae=Math.min(ae,gt.count));const le=ae-jt;if(le<0||le===1/0)return;oe.setup(L,O,pt,F,mt);let Ke,Zt=dt;if(mt!==null&&(Ke=q.get(mt),Zt=Vt,Zt.setIndex(Ke)),L.isMesh)O.wireframe===!0?(wt.setLineWidth(O.wireframeLinewidth*ye()),Zt.setMode(D.LINES)):Zt.setMode(D.TRIANGLES);else if(L.isLine){let Et=O.linewidth;Et===void 0&&(Et=1),wt.setLineWidth(Et*ye()),L.isLineSegments?Zt.setMode(D.LINES):L.isLineLoop?Zt.setMode(D.LINE_LOOP):Zt.setMode(D.LINE_STRIP)}else L.isPoints?Zt.setMode(D.POINTS):L.isSprite&&Zt.setMode(D.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)Zt.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const Et=L._multiDrawStarts,si=L._multiDrawCounts,Jt=L._multiDrawCount,Ln=mt?q.get(mt).bytesPerElement:1,Mr=bt.get(O).currentProgram.getUniforms();for(let rn=0;rn<Jt;rn++)Mr.setValue(D,"_gl_DrawID",rn),Zt.render(Et[rn]/Ln,si[rn])}else if(L.isInstancedMesh)Zt.renderInstances(jt,le,L.count);else if(F.isInstancedBufferGeometry){const Et=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,si=Math.min(F.instanceCount,Et);Zt.renderInstances(jt,le,si)}else Zt.render(jt,le)};function te(v,P,F){v.transparent===!0&&v.side===qn&&v.forceSinglePass===!1?(v.side=tn,v.needsUpdate=!0,ao(v,P,F),v.side=Bi,v.needsUpdate=!0,ao(v,P,F),v.side=qn):ao(v,P,F)}this.compile=function(v,P,F=null){F===null&&(F=v),h=Xt.get(F),h.init(P),T.push(h),F.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(h.pushLight(L),L.castShadow&&h.pushShadow(L))}),v!==F&&v.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(h.pushLight(L),L.castShadow&&h.pushShadow(L))}),h.setupLights();const O=new Set;return v.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const Q=L.material;if(Q)if(Array.isArray(Q))for(let at=0;at<Q.length;at++){const pt=Q[at];te(pt,F,L),O.add(pt)}else te(Q,F,L),O.add(Q)}),T.pop(),h=null,O},this.compileAsync=function(v,P,F=null){const O=this.compile(v,P,F);return new Promise(L=>{function Q(){if(O.forEach(function(at){bt.get(at).currentProgram.isReady()&&O.delete(at)}),O.size===0){L(v);return}setTimeout(Q,10)}zt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Pn=null;function ri(v){Pn&&Pn(v)}function Uu(){Wi.stop()}function Nu(){Wi.start()}const Wi=new xd;Wi.setAnimationLoop(ri),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(v){Pn=v,z.setAnimationLoop(v),v===null?Wi.stop():Wi.start()},z.addEventListener("sessionstart",Uu),z.addEventListener("sessionend",Nu),this.render=function(v,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(P),P=z.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,P,I),h=Xt.get(v,T.length),h.init(P),T.push(h),Ct.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),W.setFromProjectionMatrix(Ct),xt=this.localClippingEnabled,tt=J.init(this.clippingPlanes,xt),p=ut.get(v,A.length),p.init(),A.push(p),z.enabled===!0&&z.isPresenting===!0){const Q=S.xr.getDepthSensingMesh();Q!==null&&Ua(Q,P,-1/0,S.sortObjects)}Ua(v,P,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort(it,lt),Wt=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,Wt&&Rt.addToRenderList(p,v),this.info.render.frame++,tt===!0&&J.beginShadows();const F=h.state.shadowsArray;ft.render(F,v,P),tt===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=p.opaque,L=p.transmissive;if(h.setupLights(),P.isArrayCamera){const Q=P.cameras;if(L.length>0)for(let at=0,pt=Q.length;at<pt;at++){const mt=Q[at];Ou(O,L,v,mt)}Wt&&Rt.render(v);for(let at=0,pt=Q.length;at<pt;at++){const mt=Q[at];Fu(p,v,mt,mt.viewport)}}else L.length>0&&Ou(O,L,v,P),Wt&&Rt.render(v),Fu(p,v,P);I!==null&&(y.updateMultisampleRenderTarget(I),y.updateRenderTargetMipmap(I)),v.isScene===!0&&v.onAfterRender(S,v,P),oe.resetDefaultState(),E=-1,x=null,T.pop(),T.length>0?(h=T[T.length-1],tt===!0&&J.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,A.pop(),A.length>0?p=A[A.length-1]:p=null};function Ua(v,P,F,O){if(v.visible===!1)return;if(v.layers.test(P.layers)){if(v.isGroup)F=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(P);else if(v.isLight)h.pushLight(v),v.castShadow&&h.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||W.intersectsSprite(v)){O&&kt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ct);const at=V.update(v),pt=v.material;pt.visible&&p.push(v,at,pt,F,kt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||W.intersectsObject(v))){const at=V.update(v),pt=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),kt.copy(v.boundingSphere.center)):(at.boundingSphere===null&&at.computeBoundingSphere(),kt.copy(at.boundingSphere.center)),kt.applyMatrix4(v.matrixWorld).applyMatrix4(Ct)),Array.isArray(pt)){const mt=at.groups;for(let Lt=0,Ut=mt.length;Lt<Ut;Lt++){const gt=mt[Lt],jt=pt[gt.materialIndex];jt&&jt.visible&&p.push(v,at,jt,F,kt.z,gt)}}else pt.visible&&p.push(v,at,pt,F,kt.z,null)}}const Q=v.children;for(let at=0,pt=Q.length;at<pt;at++)Ua(Q[at],P,F,O)}function Fu(v,P,F,O){const L=v.opaque,Q=v.transmissive,at=v.transparent;h.setupLightsView(F),tt===!0&&J.setGlobalState(S.clippingPlanes,F),O&&wt.viewport(w.copy(O)),L.length>0&&oo(L,P,F),Q.length>0&&oo(Q,P,F),at.length>0&&oo(at,P,F),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function Ou(v,P,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[O.id]===void 0&&(h.state.transmissionRenderTarget[O.id]=new fr(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?Ys:gi,minFilter:ir,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const Q=h.state.transmissionRenderTarget[O.id],at=O.viewport||w;Q.setSize(at.z,at.w);const pt=S.getRenderTarget();S.setRenderTarget(Q),S.getClearColor(j),K=S.getClearAlpha(),K<1&&S.setClearColor(16777215,.5),S.clear(),Wt&&Rt.render(F);const mt=S.toneMapping;S.toneMapping=Fi;const Lt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),h.setupLightsView(O),tt===!0&&J.setGlobalState(S.clippingPlanes,O),oo(v,F,O),y.updateMultisampleRenderTarget(Q),y.updateRenderTargetMipmap(Q),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let gt=0,jt=P.length;gt<jt;gt++){const ae=P[gt],le=ae.object,Ke=ae.geometry,Zt=ae.material,Et=ae.group;if(Zt.side===qn&&le.layers.test(O.layers)){const si=Zt.side;Zt.side=tn,Zt.needsUpdate=!0,Bu(le,F,O,Ke,Zt,Et),Zt.side=si,Zt.needsUpdate=!0,Ut=!0}}Ut===!0&&(y.updateMultisampleRenderTarget(Q),y.updateRenderTargetMipmap(Q))}S.setRenderTarget(pt),S.setClearColor(j,K),Lt!==void 0&&(O.viewport=Lt),S.toneMapping=mt}function oo(v,P,F){const O=P.isScene===!0?P.overrideMaterial:null;for(let L=0,Q=v.length;L<Q;L++){const at=v[L],pt=at.object,mt=at.geometry,Lt=O===null?at.material:O,Ut=at.group;pt.layers.test(F.layers)&&Bu(pt,P,F,mt,Lt,Ut)}}function Bu(v,P,F,O,L,Q){v.onBeforeRender(S,P,F,O,L,Q),v.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),L.onBeforeRender(S,P,F,O,v,Q),L.transparent===!0&&L.side===qn&&L.forceSinglePass===!1?(L.side=tn,L.needsUpdate=!0,S.renderBufferDirect(F,P,O,L,v,Q),L.side=Bi,L.needsUpdate=!0,S.renderBufferDirect(F,P,O,L,v,Q),L.side=qn):S.renderBufferDirect(F,P,O,L,v,Q),v.onAfterRender(S,P,F,O,L,Q)}function ao(v,P,F){P.isScene!==!0&&(P=pe);const O=bt.get(v),L=h.state.lights,Q=h.state.shadowsArray,at=L.state.version,pt=St.getParameters(v,L.state,Q,P,F),mt=St.getProgramCacheKey(pt);let Lt=O.programs;O.environment=v.isMeshStandardMaterial?P.environment:null,O.fog=P.fog,O.envMap=(v.isMeshStandardMaterial?U:g).get(v.envMap||O.environment),O.envMapRotation=O.environment!==null&&v.envMap===null?P.environmentRotation:v.envMapRotation,Lt===void 0&&(v.addEventListener("dispose",It),Lt=new Map,O.programs=Lt);let Ut=Lt.get(mt);if(Ut!==void 0){if(O.currentProgram===Ut&&O.lightsStateVersion===at)return zu(v,pt),Ut}else pt.uniforms=St.getUniforms(v),v.onBeforeCompile(pt,S),Ut=St.acquireProgram(pt,mt),Lt.set(mt,Ut),O.uniforms=pt.uniforms;const gt=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(gt.clippingPlanes=J.uniform),zu(v,pt),O.needsLights=Pm(v),O.lightsStateVersion=at,O.needsLights&&(gt.ambientLightColor.value=L.state.ambient,gt.lightProbe.value=L.state.probe,gt.directionalLights.value=L.state.directional,gt.directionalLightShadows.value=L.state.directionalShadow,gt.spotLights.value=L.state.spot,gt.spotLightShadows.value=L.state.spotShadow,gt.rectAreaLights.value=L.state.rectArea,gt.ltc_1.value=L.state.rectAreaLTC1,gt.ltc_2.value=L.state.rectAreaLTC2,gt.pointLights.value=L.state.point,gt.pointLightShadows.value=L.state.pointShadow,gt.hemisphereLights.value=L.state.hemi,gt.directionalShadowMap.value=L.state.directionalShadowMap,gt.directionalShadowMatrix.value=L.state.directionalShadowMatrix,gt.spotShadowMap.value=L.state.spotShadowMap,gt.spotLightMatrix.value=L.state.spotLightMatrix,gt.spotLightMap.value=L.state.spotLightMap,gt.pointShadowMap.value=L.state.pointShadowMap,gt.pointShadowMatrix.value=L.state.pointShadowMatrix),O.currentProgram=Ut,O.uniformsList=null,Ut}function ku(v){if(v.uniformsList===null){const P=v.currentProgram.getUniforms();v.uniformsList=Xo.seqWithValue(P.seq,v.uniforms)}return v.uniformsList}function zu(v,P){const F=bt.get(v);F.outputColorSpace=P.outputColorSpace,F.batching=P.batching,F.batchingColor=P.batchingColor,F.instancing=P.instancing,F.instancingColor=P.instancingColor,F.instancingMorph=P.instancingMorph,F.skinning=P.skinning,F.morphTargets=P.morphTargets,F.morphNormals=P.morphNormals,F.morphColors=P.morphColors,F.morphTargetsCount=P.morphTargetsCount,F.numClippingPlanes=P.numClippingPlanes,F.numIntersection=P.numClipIntersection,F.vertexAlphas=P.vertexAlphas,F.vertexTangents=P.vertexTangents,F.toneMapping=P.toneMapping}function Rm(v,P,F,O,L){P.isScene!==!0&&(P=pe),y.resetTextureUnits();const Q=P.fog,at=O.isMeshStandardMaterial?P.environment:null,pt=I===null?S.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ls,mt=(O.isMeshStandardMaterial?U:g).get(O.envMap||at),Lt=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ut=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),gt=!!F.morphAttributes.position,jt=!!F.morphAttributes.normal,ae=!!F.morphAttributes.color;let le=Fi;O.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(le=S.toneMapping);const Ke=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Zt=Ke!==void 0?Ke.length:0,Et=bt.get(O),si=h.state.lights;if(tt===!0&&(xt===!0||v!==x)){const xn=v===x&&O.id===E;J.setState(O,v,xn)}let Jt=!1;O.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==si.state.version||Et.outputColorSpace!==pt||L.isBatchedMesh&&Et.batching===!1||!L.isBatchedMesh&&Et.batching===!0||L.isBatchedMesh&&Et.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Et.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Et.instancing===!1||!L.isInstancedMesh&&Et.instancing===!0||L.isSkinnedMesh&&Et.skinning===!1||!L.isSkinnedMesh&&Et.skinning===!0||L.isInstancedMesh&&Et.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Et.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Et.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Et.instancingMorph===!1&&L.morphTexture!==null||Et.envMap!==mt||O.fog===!0&&Et.fog!==Q||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==J.numPlanes||Et.numIntersection!==J.numIntersection)||Et.vertexAlphas!==Lt||Et.vertexTangents!==Ut||Et.morphTargets!==gt||Et.morphNormals!==jt||Et.morphColors!==ae||Et.toneMapping!==le||Et.morphTargetsCount!==Zt)&&(Jt=!0):(Jt=!0,Et.__version=O.version);let Ln=Et.currentProgram;Jt===!0&&(Ln=ao(O,P,L));let Mr=!1,rn=!1,Ts=!1;const ue=Ln.getUniforms(),Vn=Et.uniforms;if(wt.useProgram(Ln.program)&&(Mr=!0,rn=!0,Ts=!0),O.id!==E&&(E=O.id,rn=!0),Mr||x!==v){wt.buffers.depth.getReversed()?(rt.copy(v.projectionMatrix),E0(rt),y0(rt),ue.setValue(D,"projectionMatrix",rt)):ue.setValue(D,"projectionMatrix",v.projectionMatrix),ue.setValue(D,"viewMatrix",v.matrixWorldInverse);const Ei=ue.map.cameraPosition;Ei!==void 0&&Ei.setValue(D,Dt.setFromMatrixPosition(v.matrixWorld)),Gt.logarithmicDepthBuffer&&ue.setValue(D,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ue.setValue(D,"isOrthographic",v.isOrthographicCamera===!0),x!==v&&(x=v,rn=!0,Ts=!0)}if(L.isSkinnedMesh){ue.setOptional(D,L,"bindMatrix"),ue.setOptional(D,L,"bindMatrixInverse");const xn=L.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),ue.setValue(D,"boneTexture",xn.boneTexture,y))}L.isBatchedMesh&&(ue.setOptional(D,L,"batchingTexture"),ue.setValue(D,"batchingTexture",L._matricesTexture,y),ue.setOptional(D,L,"batchingIdTexture"),ue.setValue(D,"batchingIdTexture",L._indirectTexture,y),ue.setOptional(D,L,"batchingColorTexture"),L._colorsTexture!==null&&ue.setValue(D,"batchingColorTexture",L._colorsTexture,y));const As=F.morphAttributes;if((As.position!==void 0||As.normal!==void 0||As.color!==void 0)&&Pt.update(L,F,Ln),(rn||Et.receiveShadow!==L.receiveShadow)&&(Et.receiveShadow=L.receiveShadow,ue.setValue(D,"receiveShadow",L.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Vn.envMap.value=mt,Vn.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&P.environment!==null&&(Vn.envMapIntensity.value=P.environmentIntensity),rn&&(ue.setValue(D,"toneMappingExposure",S.toneMappingExposure),Et.needsLights&&Cm(Vn,Ts),Q&&O.fog===!0&&st.refreshFogUniforms(Vn,Q),st.refreshMaterialUniforms(Vn,O,G,Z,h.state.transmissionRenderTarget[v.id]),Xo.upload(D,ku(Et),Vn,y)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Xo.upload(D,ku(Et),Vn,y),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ue.setValue(D,"center",L.center),ue.setValue(D,"modelViewMatrix",L.modelViewMatrix),ue.setValue(D,"normalMatrix",L.normalMatrix),ue.setValue(D,"modelMatrix",L.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const xn=O.uniformsGroups;for(let Ei=0,yi=xn.length;Ei<yi;Ei++){const Gu=xn[Ei];R.update(Gu,Ln),R.bind(Gu,Ln)}}return Ln}function Cm(v,P){v.ambientLightColor.needsUpdate=P,v.lightProbe.needsUpdate=P,v.directionalLights.needsUpdate=P,v.directionalLightShadows.needsUpdate=P,v.pointLights.needsUpdate=P,v.pointLightShadows.needsUpdate=P,v.spotLights.needsUpdate=P,v.spotLightShadows.needsUpdate=P,v.rectAreaLights.needsUpdate=P,v.hemisphereLights.needsUpdate=P}function Pm(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(v,P,F){bt.get(v.texture).__webglTexture=P,bt.get(v.depthTexture).__webglTexture=F;const O=bt.get(v);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,P){const F=bt.get(v);F.__webglFramebuffer=P,F.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(v,P=0,F=0){I=v,C=P,b=F;let O=!0,L=null,Q=!1,at=!1;if(v){const mt=bt.get(v);if(mt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(D.FRAMEBUFFER,null),O=!1;else if(mt.__webglFramebuffer===void 0)y.setupRenderTarget(v);else if(mt.__hasExternalTextures)y.rebindTextures(v,bt.get(v.texture).__webglTexture,bt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const gt=v.depthTexture;if(mt.__boundDepthTexture!==gt){if(gt!==null&&bt.has(gt)&&(v.width!==gt.image.width||v.height!==gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(v)}}const Lt=v.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(at=!0);const Ut=bt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ut[P])?L=Ut[P][F]:L=Ut[P],Q=!0):v.samples>0&&y.useMultisampledRTT(v)===!1?L=bt.get(v).__webglMultisampledFramebuffer:Array.isArray(Ut)?L=Ut[F]:L=Ut,w.copy(v.viewport),H.copy(v.scissor),k=v.scissorTest}else w.copy(Tt).multiplyScalar(G).floor(),H.copy(Bt).multiplyScalar(G).floor(),k=ie;if(wt.bindFramebuffer(D.FRAMEBUFFER,L)&&O&&wt.drawBuffers(v,L),wt.viewport(w),wt.scissor(H),wt.setScissorTest(k),Q){const mt=bt.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+P,mt.__webglTexture,F)}else if(at){const mt=bt.get(v.texture),Lt=P||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,mt.__webglTexture,F||0,Lt)}E=-1},this.readRenderTargetPixels=function(v,P,F,O,L,Q,at){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=bt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&at!==void 0&&(pt=pt[at]),pt){wt.bindFramebuffer(D.FRAMEBUFFER,pt);try{const mt=v.texture,Lt=mt.format,Ut=mt.type;if(!Gt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=v.width-O&&F>=0&&F<=v.height-L&&D.readPixels(P,F,O,L,Ft.convert(Lt),Ft.convert(Ut),Q)}finally{const mt=I!==null?bt.get(I).__webglFramebuffer:null;wt.bindFramebuffer(D.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(v,P,F,O,L,Q,at){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=bt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&at!==void 0&&(pt=pt[at]),pt){const mt=v.texture,Lt=mt.format,Ut=mt.type;if(!Gt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=v.width-O&&F>=0&&F<=v.height-L){wt.bindFramebuffer(D.FRAMEBUFFER,pt);const gt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,gt),D.bufferData(D.PIXEL_PACK_BUFFER,Q.byteLength,D.STREAM_READ),D.readPixels(P,F,O,L,Ft.convert(Lt),Ft.convert(Ut),0);const jt=I!==null?bt.get(I).__webglFramebuffer:null;wt.bindFramebuffer(D.FRAMEBUFFER,jt);const ae=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await S0(D,ae,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,gt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Q),D.deleteBuffer(gt),D.deleteSync(ae),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,P=null,F=0){v.isTexture!==!0&&(Us("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,v=arguments[1]);const O=Math.pow(2,-F),L=Math.floor(v.image.width*O),Q=Math.floor(v.image.height*O),at=P!==null?P.x:0,pt=P!==null?P.y:0;y.setTexture2D(v,0),D.copyTexSubImage2D(D.TEXTURE_2D,F,0,0,at,pt,L,Q),wt.unbindTexture()},this.copyTextureToTexture=function(v,P,F=null,O=null,L=0){v.isTexture!==!0&&(Us("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,v=arguments[1],P=arguments[2],L=arguments[3]||0,F=null);let Q,at,pt,mt,Lt,Ut,gt,jt,ae;const le=v.isCompressedTexture?v.mipmaps[L]:v.image;F!==null?(Q=F.max.x-F.min.x,at=F.max.y-F.min.y,pt=F.isBox3?F.max.z-F.min.z:1,mt=F.min.x,Lt=F.min.y,Ut=F.isBox3?F.min.z:0):(Q=le.width,at=le.height,pt=le.depth||1,mt=0,Lt=0,Ut=0),O!==null?(gt=O.x,jt=O.y,ae=O.z):(gt=0,jt=0,ae=0);const Ke=Ft.convert(P.format),Zt=Ft.convert(P.type);let Et;P.isData3DTexture?(y.setTexture3D(P,0),Et=D.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(y.setTexture2DArray(P,0),Et=D.TEXTURE_2D_ARRAY):(y.setTexture2D(P,0),Et=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,P.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,P.unpackAlignment);const si=D.getParameter(D.UNPACK_ROW_LENGTH),Jt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ln=D.getParameter(D.UNPACK_SKIP_PIXELS),Mr=D.getParameter(D.UNPACK_SKIP_ROWS),rn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,le.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,le.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,mt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Lt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ut);const Ts=v.isDataArrayTexture||v.isData3DTexture,ue=P.isDataArrayTexture||P.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){const Vn=bt.get(v),As=bt.get(P),xn=bt.get(Vn.__renderTarget),Ei=bt.get(As.__renderTarget);wt.bindFramebuffer(D.READ_FRAMEBUFFER,xn.__webglFramebuffer),wt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let yi=0;yi<pt;yi++)Ts&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,bt.get(v).__webglTexture,L,Ut+yi),v.isDepthTexture?(ue&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,bt.get(P).__webglTexture,L,ae+yi),D.blitFramebuffer(mt,Lt,Q,at,gt,jt,Q,at,D.DEPTH_BUFFER_BIT,D.NEAREST)):ue?D.copyTexSubImage3D(Et,L,gt,jt,ae+yi,mt,Lt,Q,at):D.copyTexSubImage2D(Et,L,gt,jt,ae+yi,mt,Lt,Q,at);wt.bindFramebuffer(D.READ_FRAMEBUFFER,null),wt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ue?v.isDataTexture||v.isData3DTexture?D.texSubImage3D(Et,L,gt,jt,ae,Q,at,pt,Ke,Zt,le.data):P.isCompressedArrayTexture?D.compressedTexSubImage3D(Et,L,gt,jt,ae,Q,at,pt,Ke,le.data):D.texSubImage3D(Et,L,gt,jt,ae,Q,at,pt,Ke,Zt,le):v.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,L,gt,jt,Q,at,Ke,Zt,le.data):v.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,L,gt,jt,le.width,le.height,Ke,le.data):D.texSubImage2D(D.TEXTURE_2D,L,gt,jt,Q,at,Ke,Zt,le);D.pixelStorei(D.UNPACK_ROW_LENGTH,si),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Jt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ln),D.pixelStorei(D.UNPACK_SKIP_ROWS,Mr),D.pixelStorei(D.UNPACK_SKIP_IMAGES,rn),L===0&&P.generateMipmaps&&D.generateMipmap(Et),wt.unbindTexture()},this.copyTextureToTexture3D=function(v,P,F=null,O=null,L=0){return v.isTexture!==!0&&(Us("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,v=arguments[2],P=arguments[3],L=arguments[4]||0),Us('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,P,F,O,L)},this.initRenderTarget=function(v){bt.get(v).__webglFramebuffer===void 0&&y.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?y.setTextureCube(v,0):v.isData3DTexture?y.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?y.setTexture2DArray(v,0):y.setTexture2D(v,0),wt.unbindTexture()},this.resetState=function(){C=0,b=0,I=null,wt.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),n.unpackColorSpace=qt._getUnpackColorSpace()}}class Bl{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Qt(t),this.density=n}clone(){return new Bl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Nv extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Fv extends je{constructor(t=null,n=1,i=1,r,s,o,a,c,l=un,u=un,f,d){super(null,o,a,c,l,u,r,s,f,d),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zh extends On{constructor(t,n,i,r=1){super(t,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Nr=new ve,Gh=new ve,Po=[],Vh=new gr,Ov=new ve,Ls=new bn,Ds=new $s;class Bv extends bn{constructor(t,n,i){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new zh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Ov)}computeBoundingBox(){const t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new gr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Nr),Vh.copy(t.boundingBox).applyMatrix4(Nr),this.boundingBox.union(Vh)}computeBoundingSphere(){const t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new $s),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Nr),Ds.copy(t.boundingSphere).applyMatrix4(Nr),this.boundingSphere.union(Ds)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(t,n){const i=this.matrixWorld,r=this.count;if(Ls.geometry=this.geometry,Ls.material=this.material,Ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ds.copy(this.boundingSphere),Ds.applyMatrix4(i),t.ray.intersectsSphere(Ds)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Nr),Gh.multiplyMatrices(i,Nr),Ls.matrixWorld=Gh,Ls.raycast(t,Po);for(let o=0,a=Po.length;o<a;o++){const c=Po[o];c.instanceId=s,c.object=this,n.push(c)}Po.length=0}}setColorAt(t,n){this.instanceColor===null&&(this.instanceColor=new zh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,n){n.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Fv(new Float32Array(r*this.count),r,this.count,Il,jn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*t;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class la extends Vi{constructor(t=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new N,d=new N,m=[],_=[],M=[],p=[];for(let h=0;h<=i;h++){const A=[],T=h/i;let S=0;h===0&&o===0?S=.5/n:h===i&&c===Math.PI&&(S=-.5/n);for(let B=0;B<=n;B++){const C=B/n;f.x=-t*Math.cos(r+C*s)*Math.sin(o+T*a),f.y=t*Math.cos(o+T*a),f.z=t*Math.sin(r+C*s)*Math.sin(o+T*a),_.push(f.x,f.y,f.z),d.copy(f).normalize(),M.push(d.x,d.y,d.z),p.push(C+S,1-T),A.push(l++)}u.push(A)}for(let h=0;h<i;h++)for(let A=0;A<n;A++){const T=u[h][A+1],S=u[h][A],B=u[h+1][A],C=u[h+1][A+1];(h!==0||o>0)&&m.push(T,S,C),(h!==i-1||c<Math.PI)&&m.push(S,B,C)}this.setIndex(m),this.setAttribute("position",new $n(_,3)),this.setAttribute("normal",new $n(M,3)),this.setAttribute("uv",new $n(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new la(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cl);const Lo=[4,8,12,16,20],Do=[3,6,10,14,18];function kv(e,t){const n=e[4],i=e[3],r=e[2];return t.toLowerCase().includes("right")?n.x<i.x-.02&&n.x<r.x:n.x>i.x+.02&&n.x>r.x}function Io(e,t,n){const i=e[t],r=e[n],s=e[0],o=e[n-1],a=hc(i,s),c=hc(r,s),l=hc(o,s);return a>c&&a>l*1.05}function hc(e,t){const n=e.x-t.x,i=e.y-t.y;return n*n+i*i}function zv(e,t){return[kv(e,t),Io(e,Lo[1],Do[1]),Io(e,Lo[2],Do[2]),Io(e,Lo[3],Do[3]),Io(e,Lo[4],Do[4])]}const ua=[{id:"C4",midi:60,label:"C4",gesture:"Thumb — middle C"},{id:"Cs4",midi:61,label:"C♯4",gesture:"Index only"},{id:"D4",midi:62,label:"D4",gesture:"Middle only"},{id:"Ds4",midi:63,label:"D♯4",gesture:"Ring only"},{id:"E4",midi:64,label:"E4",gesture:"Pinky only"},{id:"F4",midi:65,label:"F4",gesture:"Index + middle"},{id:"Fs4",midi:66,label:"F♯4",gesture:"Middle + ring"},{id:"G4",midi:67,label:"G4",gesture:"Ring + pinky"},{id:"Gs4",midi:68,label:"G♯4",gesture:"Index + middle + ring"},{id:"A4",midi:69,label:"A4",gesture:"Middle + ring + pinky"},{id:"As4",midi:70,label:"A♯4",gesture:"Four fingers (no thumb)"},{id:"B4",midi:71,label:"B4",gesture:"Four fingers + thumb"},{id:"C5",midi:72,label:"C5",gesture:"Open palm (all five)"}];function Gv(e,t){const n=zv(e,t),i=n.filter(Boolean).length,[r,s,o,a,c]=n;if(i===0)return{mode:"dust",noteIndex:-1,fingerCount:0,states:n};const l=n.map(f=>f?"1":"0").join(""),u=Vv.get(l);return u===void 0?{mode:"dust",noteIndex:-1,fingerCount:i,states:n}:{mode:"note",noteIndex:u,fingerCount:i,states:n}}const Vv=new Map([["10000",0],["01000",1],["00100",2],["00010",3],["00001",4],["01100",5],["00110",6],["00011",7],["01110",8],["00111",9],["01111",10],["11111",12],["11110",11]]);function Hv(e){if(!e||e.mode==="dust")return(e==null?void 0:e.fingerCount)>0?`${e.fingerCount} fingers — unrecognized pose (see guide)`:"Fist — orbiting space dust (rest)";const t=ua[e.noteIndex];return`${t.gesture} — playing ${t.label}`}const fi=6e3;function Wv(e){return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2}function Hh(){const e=Math.random()*Math.PI*2,t=Math.acos(2*Math.random()-1),n=1.8+Math.random()*2.2;return new N(n*Math.sin(t)*Math.cos(e),n*Math.cos(t)*.6,n*Math.sin(t)*Math.sin(e))}const Wh={C:["01110","10001","10000","10000","10001","10001","01110"],"#":["00100","01110","00100","01110","00100","00000","00000"],D:["11110","10001","10001","10001","10001","10001","11110"],E:["11111","10000","11110","10000","10000","10000","11111"],F:["11111","10000","11110","10000","10000","10000","10000"],G:["01110","10001","10000","10111","10001","10001","01110"],A:["01110","10001","10001","11111","10001","10001","10001"],B:["11110","10001","11110","10001","10001","10001","11110"],4:["00100","01100","10100","10100","11111","00100","00100"],5:["01111","10000","11110","00001","00001","10001","01110"],"♯":["01100","11110","01100","11110","01100","00000","00000"]};function Xv(e){const t=[...e.replace("♯","#")],n=.11,i=[];let r=0;for(const s of t){const o=Wh[s]||Wh.C;for(let a=0;a<o.length;a++)for(let c=0;c<o[a].length;c++)o[a][c]==="1"&&i.push(new N(r+c*n-t.length*3*n/2,(o.length-a)*n-.35,(Math.random()-.5)*.08));r+=o[0].length*n+n*1.2}for(;i.length<fi;){const s=i[i.length%Math.max(i.length,1)];i.push(s.clone().add(new N((Math.random()-.5)*.25,(Math.random()-.5)*.25,(Math.random()-.5)*.15)))}return i.slice(0,fi)}function qv(e){return e/12*.85+.05}function Yv(e){const t=new Uv({canvas:e,antialias:!0,alpha:!1});t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.setSize(window.innerWidth,window.innerHeight),t.setClearColor(131080);const n=new Nv;n.fog=new Bl(131080,.035);const i=new An(55,window.innerWidth/window.innerHeight,.1,200);i.position.set(0,.5,6),i.lookAt(0,0,0);const r=new bn(new la(2.5,32,32),new oa({color:3807334,transparent:!0,opacity:.12,side:qn}));return n.add(r),{scene:n,camera:i,renderer:t}}class jv{constructor(t){this.group=new Fs,t.add(this.group),this.mode="dust",this.noteIndex=-1,this.transition=1;const n=new la(.015,6,6),i=new oa({color:16777215});this.mesh=new Bv(n,i,fi),this.group.add(this.mesh),this.particles=[],this.currentPos=[],this.sourcePos=[],this.targetPos=[];for(let r=0;r<fi;r++){const s=Hh(),o=new Qt().setHSL(.72+Math.random()*.12,.75,.55+Math.random()*.2);this.particles.push({color:o,dustTheta:Math.random()*Math.PI*2,dustPhi:Math.acos(2*Math.random()-1)}),this.currentPos.push(s.clone()),this.sourcePos.push(s.clone()),this.targetPos.push(s.clone()),this.mesh.setColorAt(r,o)}this.mesh.instanceColor.needsUpdate=!0,this.applyPositions(this.currentPos)}applyPositions(t){const n=new en;for(let i=0;i<fi;i++)n.position.copy(t[i]),n.updateMatrix(),this.mesh.setMatrixAt(i,n.matrix);this.mesh.instanceMatrix.needsUpdate=!0}dustPosition(t,n){const i=1.8+.4*Math.sin(n*.4+t.dustTheta);return new N(i*Math.sin(t.dustPhi)*Math.cos(t.dustTheta+n*.15),i*Math.cos(t.dustPhi)*.6,i*Math.sin(t.dustPhi)*Math.sin(t.dustTheta+n*.12))}setMode(t,n=-1,i=!1){var r;if(!(!i&&t===this.mode&&n===this.noteIndex)){for(let s=0;s<fi;s++)this.sourcePos[s].copy(this.currentPos[s]);if(this.mode=t,this.noteIndex=n,this.transition=0,t==="dust")for(let s=0;s<fi;s++){this.targetPos[s].copy(Hh());const o=.72+Math.random()*.1;this.particles[s].color.setHSL(o,.7,.55),this.mesh.setColorAt(s,this.particles[s].color)}else{const s=((r=ua[n])==null?void 0:r.label)??"C4",o=Xv(s),a=qv(n);for(let c=0;c<fi;c++)this.targetPos[c].copy(o[c]),this.particles[c].color.setHSL(a,.85,.62),this.mesh.setColorAt(c,this.particles[c].color)}this.mesh.instanceColor.needsUpdate=!0}}update(t,n){const i=this.mode==="note";this.transition=Math.min(1,this.transition+1.8*n);const r=Wv(this.transition);this.group.rotation.y+=n*(i?.55:.85);const s=t*.001;for(let o=0;o<fi;o++)this.mode==="dust"&&r>=1?this.currentPos[o].copy(this.dustPosition(this.particles[o],s)):(this.currentPos[o].lerpVectors(this.sourcePos[o],this.targetPos[o],r),i&&r>=1&&(this.currentPos[o].y+=Math.sin(s*3+o*.01)*.012));this.applyPositions(this.currentPos)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.group.remove(this.mesh)}}var Jr=typeof self<"u"?self:{};function Ad(e,t){t:{for(var n=["CLOSURE_FLAGS"],i=Jr,r=0;r<n.length;r++)if((i=i[n[r]])==null){n=null;break t}n=i}return(e=n&&n[e])!=null?e:t}function Zi(){throw Error("Invalid UTF8")}function Xh(e,t){return t=String.fromCharCode.apply(null,t),e==null?t:e+t}let Uo,fc;const Kv=typeof TextDecoder<"u";let $v;const Zv=typeof TextEncoder<"u";function bd(e){if(Zv)e=($v||($v=new TextEncoder)).encode(e);else{let n=0;const i=new Uint8Array(3*e.length);for(let r=0;r<e.length;r++){var t=e.charCodeAt(r);if(t<128)i[n++]=t;else{if(t<2048)i[n++]=t>>6|192;else{if(t>=55296&&t<=57343){if(t<=56319&&r<e.length){const s=e.charCodeAt(++r);if(s>=56320&&s<=57343){t=1024*(t-55296)+s-56320+65536,i[n++]=t>>18|240,i[n++]=t>>12&63|128,i[n++]=t>>6&63|128,i[n++]=63&t|128;continue}r--}t=65533}i[n++]=t>>12|224,i[n++]=t>>6&63|128}i[n++]=63&t|128}}e=n===i.length?i:i.subarray(0,n)}return e}function wd(e){Jr.setTimeout((()=>{throw e}),0)}var ul,Jv=Ad(610401301,!1),qh=Ad(748402147,!0);function Yh(){var e=Jr.navigator;return e&&(e=e.userAgent)?e:""}const jh=Jr.navigator;function ha(e){return ha[" "](e),e}ul=jh&&jh.userAgentData||null,ha[" "]=function(){};const Rd={};let Os=null;function Qv(e){const t=e.length;let n=3*t/4;n%3?n=Math.floor(n):"=.".indexOf(e[t-1])!=-1&&(n="=.".indexOf(e[t-2])!=-1?n-2:n-1);const i=new Uint8Array(n);let r=0;return(function(s,o){function a(l){for(;c<s.length;){const u=s.charAt(c++),f=Os[u];if(f!=null)return f;if(!/^[\s\xa0]*$/.test(u))throw Error("Unknown base64 encoding at char: "+u)}return l}Cd();let c=0;for(;;){const l=a(-1),u=a(0),f=a(64),d=a(64);if(d===64&&l===-1)break;o(l<<2|u>>4),f!=64&&(o(u<<4&240|f>>2),d!=64&&o(f<<6&192|d))}})(e,(function(s){i[r++]=s})),r!==n?i.subarray(0,r):i}function Cd(){if(!Os){Os={};var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const i=e.concat(t[n].split(""));Rd[n]=i;for(let r=0;r<i.length;r++){const s=i[r];Os[s]===void 0&&(Os[s]=r)}}}}var tx=typeof Uint8Array<"u",Pd=!(!(Jv&&ul&&ul.brands.length>0)&&(Yh().indexOf("Trident")!=-1||Yh().indexOf("MSIE")!=-1))&&typeof btoa=="function";const Kh=/[-_.]/g,ex={"-":"+",_:"/",".":"="};function nx(e){return ex[e]||""}function Ld(e){if(!Pd)return Qv(e);e=Kh.test(e)?e.replace(Kh,nx):e,e=atob(e);const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}function kl(e){return tx&&e!=null&&e instanceof Uint8Array}var Qr={};function dr(){return ix||(ix=new Zn(null,Qr))}function zl(e){Dd(Qr);var t=e.g;return(t=t==null||kl(t)?t:typeof t=="string"?Ld(t):null)==null?t:e.g=t}var Zn=class{h(){return new Uint8Array(zl(this)||0)}constructor(e,t){if(Dd(t),this.g=e,e!=null&&e.length===0)throw Error("ByteString should be constructed with non-empty values")}};let ix,rx;function Dd(e){if(e!==Qr)throw Error("illegal external caller")}function Id(e,t){e.__closure__error__context__984382||(e.__closure__error__context__984382={}),e.__closure__error__context__984382.severity=t}function hl(e){return Id(e=Error(e),"warning"),e}function ts(e,t){if(e!=null){var n=rx??(rx={}),i=n[e]||0;i>=t||(n[e]=i+1,Id(e=Error(),"incident"),wd(e))}}function fs(){return typeof BigInt=="function"}var ds=typeof Symbol=="function"&&typeof Symbol()=="symbol";function Qn(e,t,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&e?Symbol.for(e):e!=null?Symbol(e):Symbol():t}var sx=Qn("jas",void 0,!0),$h=Qn(void 0,"0di"),Is=Qn(void 0,"1oa"),hn=Qn(void 0,Symbol()),ox=Qn(void 0,"0ub"),ax=Qn(void 0,"0ubs"),fl=Qn(void 0,"0ubsb"),cx=Qn(void 0,"0actk"),es=Qn("m_m","Pa",!0),Zh=Qn();const Ud={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},Nd=Object.defineProperties,_t=ds?sx:"Ga";var _r;const Jh=[];function Js(e,t){ds||_t in e||Nd(e,Ud),e[_t]|=t}function Ne(e,t){ds||_t in e||Nd(e,Ud),e[_t]=t}function Qs(e){return Js(e,34),e}function Hs(e){return Js(e,8192),e}Ne(Jh,7),_r=Object.freeze(Jh);var ns={};function dn(e,t){return t===void 0?e.h!==pr&&!!(2&(0|e.v[_t])):!!(2&t)&&e.h!==pr}const pr={};function Gl(e,t){if(e!=null){if(typeof e=="string")e=e?new Zn(e,Qr):dr();else if(e.constructor!==Zn)if(kl(e))e=e.length?new Zn(new Uint8Array(e),Qr):dr();else{if(!t)throw Error();e=void 0}}return e}class Qh{constructor(t,n,i){this.g=t,this.h=n,this.l=i}next(){const t=this.g.next();return t.done||(t.value=this.h.call(this.l,t.value)),t}[Symbol.iterator](){return this}}var lx=Object.freeze({});function Fd(e,t,n){const i=128&t?0:-1,r=e.length;var s;(s=!!r)&&(s=(s=e[r-1])!=null&&typeof s=="object"&&s.constructor===Object);const o=r+(s?-1:0);for(t=128&t?1:0;t<o;t++)n(t-i,e[t]);if(s){e=e[r-1];for(const a in e)!isNaN(a)&&n(+a,e[a])}}var Od={};function ps(e){return 128&e?Od:void 0}function fa(e){return e.Na=!0,e}var ux=fa((e=>typeof e=="number")),tf=fa((e=>typeof e=="string")),hx=fa((e=>typeof e=="boolean")),da=typeof Jr.BigInt=="function"&&typeof Jr.BigInt(0)=="bigint";function fn(e){var t=e;if(tf(t)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(t))throw Error(String(t))}else if(ux(t)&&!Number.isSafeInteger(t))throw Error(String(t));return da?BigInt(e):e=hx(e)?e?"1":"0":tf(e)?e.trim()||"0":String(e)}var dl=fa((e=>da?e>=dx&&e<=mx:e[0]==="-"?ef(e,fx):ef(e,px)));const fx=Number.MIN_SAFE_INTEGER.toString(),dx=da?BigInt(Number.MIN_SAFE_INTEGER):void 0,px=Number.MAX_SAFE_INTEGER.toString(),mx=da?BigInt(Number.MAX_SAFE_INTEGER):void 0;function ef(e,t){if(e.length>t.length)return!1;if(e.length<t.length||e===t)return!0;for(let n=0;n<e.length;n++){const i=e[n],r=t[n];if(i>r)return!1;if(i<r)return!0}}const gx=typeof Uint8Array.prototype.slice=="function";let _x,me=0,we=0;function nf(e){const t=e>>>0;me=t,we=(e-t)/4294967296>>>0}function is(e){if(e<0){nf(-e);const[t,n]=Wl(me,we);me=t>>>0,we=n>>>0}else nf(e)}function Vl(e){const t=_x||(_x=new DataView(new ArrayBuffer(8)));t.setFloat32(0,+e,!0),we=0,me=t.getUint32(0,!0)}function Bd(e,t){const n=4294967296*t+(e>>>0);return Number.isSafeInteger(n)?n:Ws(e,t)}function vx(e,t){return fn(fs()?BigInt.asUintN(64,(BigInt(t>>>0)<<BigInt(32))+BigInt(e>>>0)):Ws(e,t))}function kd(e,t){return fs()?fn(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(t))<<BigInt(32))+BigInt.asUintN(32,BigInt(e)))):fn(Hl(e,t))}function Ws(e,t){if(e>>>=0,(t>>>=0)<=2097151)var n=""+(4294967296*t+e);else fs()?n=""+(BigInt(t)<<BigInt(32)|BigInt(e)):(e=(16777215&e)+6777216*(n=16777215&(e>>>24|t<<8))+6710656*(t=t>>16&65535),n+=8147497*t,t*=2,e>=1e7&&(n+=e/1e7>>>0,e%=1e7),n>=1e7&&(t+=n/1e7>>>0,n%=1e7),n=t+rf(n)+rf(e));return n}function rf(e){return e=String(e),"0000000".slice(e.length)+e}function Hl(e,t){if(2147483648&t)if(fs())e=""+(BigInt(0|t)<<BigInt(32)|BigInt(e>>>0));else{const[n,i]=Wl(e,t);e="-"+Ws(n,i)}else e=Ws(e,t);return e}function pa(e){if(e.length<16)is(Number(e));else if(fs())e=BigInt(e),me=Number(e&BigInt(4294967295))>>>0,we=Number(e>>BigInt(32)&BigInt(4294967295));else{const t=+(e[0]==="-");we=me=0;const n=e.length;for(let i=t,r=(n-t)%6+t;r<=n;i=r,r+=6){const s=Number(e.slice(i,r));we*=1e6,me=1e6*me+s,me>=4294967296&&(we+=Math.trunc(me/4294967296),we>>>=0,me>>>=0)}if(t){const[i,r]=Wl(me,we);me=i,we=r}}}function Wl(e,t){return t=~t,e?e=1+~e:t+=1,[e,t]}function Bn(e){return Array.prototype.slice.call(e)}const to=typeof BigInt=="function"?BigInt.asIntN:void 0,xx=typeof BigInt=="function"?BigInt.asUintN:void 0,mr=Number.isSafeInteger,ma=Number.isFinite,rs=Math.trunc,Mx=fn(0);function Bs(e){if(e!=null&&typeof e!="number")throw Error(`Value of float/double field must be a number, found ${typeof e}: ${e}`);return e}function Kn(e){return e==null||typeof e=="number"?e:e==="NaN"||e==="Infinity"||e==="-Infinity"?Number(e):void 0}function Xs(e){if(e!=null&&typeof e!="boolean"){var t=typeof e;throw Error(`Expected boolean but got ${t!="object"?t:e?Array.isArray(e)?"array":t:"null"}: ${e}`)}return e}function zd(e){return e==null||typeof e=="boolean"?e:typeof e=="number"?!!e:void 0}const Sx=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function eo(e){switch(typeof e){case"bigint":return!0;case"number":return ma(e);case"string":return Sx.test(e);default:return!1}}function ms(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return ma(e)?0|e:void 0}function Gd(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return ma(e)?e>>>0:void 0}function Vd(e){const t=e.length;return(e[0]==="-"?t<20||t===20&&e<="-9223372036854775808":t<19||t===19&&e<="9223372036854775807")?e:(pa(e),Hl(me,we))}function Xl(e){if(e=rs(e),!mr(e)){is(e);var t=me,n=we;(e=2147483648&n)&&(n=~n>>>0,(t=1+~t>>>0)==0&&(n=n+1>>>0)),e=typeof(t=Bd(t,n))=="number"?e?-t:t:e?"-"+t:t}return e}function Hd(e){var t=rs(Number(e));return mr(t)?String(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),Vd(e))}function Wd(e){var t=rs(Number(e));return mr(t)?fn(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),fs()?fn(to(64,BigInt(e))):fn(Vd(e)))}function Xd(e){return mr(e)?e=fn(Xl(e)):(e=rs(e),mr(e)?e=String(e):(is(e),e=Hl(me,we)),e=fn(e)),e}function $o(e){const t=typeof e;return e==null?e:t==="bigint"?fn(to(64,e)):eo(e)?t==="string"?Wd(e):Xd(e):void 0}function qd(e){if(typeof e!="string")throw Error();return e}function no(e){if(e!=null&&typeof e!="string")throw Error();return e}function ke(e){return e==null||typeof e=="string"?e:void 0}function ql(e,t,n,i){return e!=null&&e[es]===ns?e:Array.isArray(e)?((i=(n=0|e[_t])|32&i|2&i)!==n&&Ne(e,i),new t(e)):(n?2&i?((e=t[$h])||(Qs((e=new t).v),e=t[$h]=e),t=e):t=new t:t=void 0,t)}function Ex(e,t,n){if(t)t:{if(!eo(t=e))throw hl("int64");switch(typeof t){case"string":t=Wd(t);break t;case"bigint":t=fn(to(64,t));break t;default:t=Xd(t)}}else t=$o(e);return(e=t)==null?n?Mx:void 0:e}const yx={};let Tx=(function(){try{return ha(new class extends Map{constructor(){super()}}),!1}catch{return!0}})();class dc{constructor(){this.g=new Map}get(t){return this.g.get(t)}set(t,n){return this.g.set(t,n),this.size=this.g.size,this}delete(t){return t=this.g.delete(t),this.size=this.g.size,t}clear(){this.g.clear(),this.size=this.g.size}has(t){return this.g.has(t)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(t,n){return this.g.forEach(t,n)}[Symbol.iterator](){return this.entries()}}const Ax=Tx?(Object.setPrototypeOf(dc.prototype,Map.prototype),Object.defineProperties(dc.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),dc):class extends Map{constructor(){super()}};function sf(e){return e}function pc(e){if(2&e.J)throw Error("Cannot mutate an immutable Map")}var vi=class extends Ax{constructor(e,t,n=sf,i=sf){super(),this.J=0|e[_t],this.K=t,this.S=n,this.fa=this.K?bx:i;for(let r=0;r<e.length;r++){const s=e[r],o=n(s[0],!1,!0);let a=s[1];t?a===void 0&&(a=null):a=i(s[1],!1,!0,void 0,void 0,this.J),super.set(o,a)}}V(e){return Hs(Array.from(super.entries(),e))}clear(){pc(this),super.clear()}delete(e){return pc(this),super.delete(this.S(e,!0,!1))}entries(){if(this.K){var e=super.keys();e=new Qh(e,wx,this)}else e=super.entries();return e}values(){if(this.K){var e=super.keys();e=new Qh(e,vi.prototype.get,this)}else e=super.values();return e}forEach(e,t){this.K?super.forEach(((n,i,r)=>{e.call(t,r.get(i),i,r)})):super.forEach(e,t)}set(e,t){return pc(this),(e=this.S(e,!0,!1))==null?this:t==null?(super.delete(e),this):super.set(e,this.fa(t,!0,!0,this.K,!1,this.J))}Ma(e){const t=this.S(e[0],!1,!0);e=e[1],e=this.K?e===void 0?null:e:this.fa(e,!1,!0,void 0,!1,this.J),super.set(t,e)}has(e){return super.has(this.S(e,!1,!1))}get(e){e=this.S(e,!1,!1);const t=super.get(e);if(t!==void 0){var n=this.K;return n?((n=this.fa(t,!1,!0,n,this.ra,this.J))!==t&&super.set(e,n),n):t}}[Symbol.iterator](){return this.entries()}};function bx(e,t,n,i,r,s){return e=ql(e,i,n,s),r&&(e=jl(e)),e}function wx(e){return[e,this.get(e)]}let Rx;function of(){return Rx||(Rx=new vi(Qs([]),void 0,void 0,void 0,yx))}function ga(e){return hn?e[hn]:void 0}function Zo(e,t){for(const n in e)!isNaN(n)&&t(e,+n,e[n])}vi.prototype.toJSON=void 0;var pl=class{};const Cx={Ka:!0};function Px(e,t){t<100||ts(ax,1)}function _a(e,t,n,i){const r=i!==void 0;i=!!i;var s,o=hn;!r&&ds&&o&&(s=e[o])&&Zo(s,Px),o=[];var a=e.length;let c;s=4294967295;let l=!1;const u=!!(64&t),f=u?128&t?0:-1:void 0;1&t||(c=a&&e[a-1],c!=null&&typeof c=="object"&&c.constructor===Object?s=--a:c=void 0,!u||128&t||r||(l=!0,s=s-f+f)),t=void 0;for(var d=0;d<a;d++){let m=e[d];if(m!=null&&(m=n(m,i))!=null)if(u&&d>=s){const _=d-f;(t??(t={}))[_]=m}else o[d]=m}if(c)for(let m in c){if((a=c[m])==null||(a=n(a,i))==null)continue;let _;d=+m,u&&!Number.isNaN(d)&&(_=d+f)<s?o[_]=a:(t??(t={}))[m]=a}return t&&(l?o.push(t):o[s]=t),r&&hn&&(e=ga(e))&&e instanceof pl&&(o[hn]=(function(m){const _=new pl;return Zo(m,((M,p,h)=>{_[p]=Bn(h)})),_.da=m.da,_})(e)),o}function Lx(e){return e[0]=qs(e[0]),e[1]=qs(e[1]),e}function qs(e){switch(typeof e){case"number":return Number.isFinite(e)?e:""+e;case"bigint":return dl(e)?Number(e):""+e;case"boolean":return e?1:0;case"object":if(Array.isArray(e)){var t=0|e[_t];return e.length===0&&1&t?void 0:_a(e,t,qs)}if(e!=null&&e[es]===ns)return Yd(e);if(e instanceof Zn){if((t=e.g)==null)e="";else if(typeof t=="string")e=t;else{if(Pd){for(var n="",i=0,r=t.length-10240;i<r;)n+=String.fromCharCode.apply(null,t.subarray(i,i+=10240));n+=String.fromCharCode.apply(null,i?t.subarray(i):t),t=btoa(n)}else{n===void 0&&(n=0),Cd(),n=Rd[n],i=Array(Math.floor(t.length/3)),r=n[64]||"";let l=0,u=0;for(;l<t.length-2;l+=3){var s=t[l],o=t[l+1],a=t[l+2],c=n[s>>2];s=n[(3&s)<<4|o>>4],o=n[(15&o)<<2|a>>6],a=n[63&a],i[u++]=c+s+o+a}switch(c=0,a=r,t.length-l){case 2:a=n[(15&(c=t[l+1]))<<2]||r;case 1:t=t[l],i[u]=n[t>>2]+n[(3&t)<<4|c>>4]+a+r}t=i.join("")}e=e.g=t}return e}return e instanceof vi?e=e.size!==0?e.V(Lx):void 0:void 0}return e}let Dx,Ix;function Yd(e){return _a(e=e.v,0|e[_t],qs)}function or(e,t){return jd(e,t[0],t[1])}function jd(e,t,n,i=0){if(e==null){var r=32;n?(e=[n],r|=128):e=[],t&&(r=-16760833&r|(1023&t)<<14)}else{if(!Array.isArray(e))throw Error("narr");if(r=0|e[_t],qh&&1&r)throw Error("rfarr");if(2048&r&&!(2&r)&&(function(){if(qh)throw Error("carr");ts(cx,5)})(),256&r)throw Error("farr");if(64&r)return(r|i)!==r&&Ne(e,r|i),e;if(n&&(r|=128,n!==e[0]))throw Error("mid");t:{r|=64;var s=(n=e).length;if(s){var o=s-1;const c=n[o];if(c!=null&&typeof c=="object"&&c.constructor===Object){if((o-=t=128&r?0:-1)>=1024)throw Error("pvtlmt");for(var a in c)(s=+a)<o&&(n[s+t]=c[a],delete c[a]);r=-16760833&r|(1023&o)<<14;break t}}if(t){if((a=Math.max(t,s-(128&r?0:-1)))>1024)throw Error("spvt");r=-16760833&r|(1023&a)<<14}}}return Ne(e,64|r|i),e}function Ux(e,t){if(typeof e!="object")return e;if(Array.isArray(e)){var n=0|e[_t];return e.length===0&&1&n?void 0:af(e,n,t)}if(e!=null&&e[es]===ns)return cf(e);if(e instanceof vi){if(2&(t=e.J))return e;if(!e.size)return;if(n=Qs(e.V()),e.K)for(e=0;e<n.length;e++){const i=n[e];let r=i[1];r=r==null||typeof r!="object"?void 0:r!=null&&r[es]===ns?cf(r):Array.isArray(r)?af(r,0|r[_t],!!(32&t)):void 0,i[1]=r}return n}return e instanceof Zn?e:void 0}function af(e,t,n){return 2&t||(!n||4096&t||16&t?e=gs(e,t,!1,n&&!(16&t)):(Js(e,34),4&t&&Object.freeze(e))),e}function Yl(e,t,n){return e=new e.constructor(t),n&&(e.h=pr),e.m=pr,e}function cf(e){const t=e.v,n=0|t[_t];return dn(e,n)?e:Kl(e,t,n)?Yl(e,t):gs(t,n)}function gs(e,t,n,i){return i??(i=!!(34&t)),e=_a(e,t,Ux,i),i=32,n&&(i|=2),Ne(e,t=16769217&t|i),e}function jl(e){const t=e.v,n=0|t[_t];return dn(e,n)?Kl(e,t,n)?Yl(e,t,!0):new e.constructor(gs(t,n,!1)):e}function _s(e){if(e.h!==pr)return!1;var t=e.v;return Js(t=gs(t,0|t[_t]),2048),e.v=t,e.h=void 0,e.m=void 0,!0}function vs(e){if(!_s(e)&&dn(e,0|e.v[_t]))throw Error()}function vr(e,t){t===void 0&&(t=0|e[_t]),32&t&&!(4096&t)&&Ne(e,4096|t)}function Kl(e,t,n){return!!(2&n)||!(!(32&n)||4096&n)&&(Ne(t,2|n),e.h=pr,!0)}const Kd=fn(0),Pi={};function ge(e,t,n,i,r){if((t=xi(e.v,t,n,r))!==null||i&&e.m!==pr)return t}function xi(e,t,n,i){if(t===-1)return null;const r=t+(n?0:-1),s=e.length-1;let o,a;if(!(s<1+(n?0:-1))){if(r>=s)if(o=e[s],o!=null&&typeof o=="object"&&o.constructor===Object)n=o[t],a=!0;else{if(r!==s)return;n=o}else n=e[r];if(i&&n!=null){if((i=i(n))==null)return i;if(!Object.is(i,n))return a?o[t]=i:e[r]=i,i}return n}}function ne(e,t,n,i){vs(e),Le(e=e.v,0|e[_t],t,n,i)}function Le(e,t,n,i,r){const s=n+(r?0:-1);var o=e.length-1;if(o>=1+(r?0:-1)&&s>=o){const a=e[o];if(a!=null&&typeof a=="object"&&a.constructor===Object)return a[n]=i,t}return s<=o?(e[s]=i,t):(i!==void 0&&(n>=(o=(t??(t=0|e[_t]))>>14&1023||536870912)?i!=null&&(e[o+(r?0:-1)]={[n]:i}):e[s]=i),t)}function rr(){return lx===void 0?2:4}function sr(e,t,n,i,r){let s=e.v,o=0|s[_t];i=dn(e,o)?1:i,r=!!r||i===3,i===2&&_s(e)&&(s=e.v,o=0|s[_t]);let a=(e=$l(s,t))===_r?7:0|e[_t],c=Zl(a,o);var l=!(4&c);if(l){4&c&&(e=Bn(e),a=0,c=cr(c,o),o=Le(s,o,t,e));let u=0,f=0;for(;u<e.length;u++){const d=n(e[u]);d!=null&&(e[f++]=d)}f<u&&(e.length=f),n=-513&(4|c),c=n&=-1025,c&=-4097}return c!==a&&(Ne(e,c),2&c&&Object.freeze(e)),$d(e,c,s,o,t,i,l,r)}function $d(e,t,n,i,r,s,o,a){let c=t;return s===1||s===4&&(2&t||!(16&t)&&32&i)?ar(t)||((t|=!e.length||o&&!(4096&t)||32&i&&!(4096&t||16&t)?2:256)!==c&&Ne(e,t),Object.freeze(e)):(s===2&&ar(t)&&(e=Bn(e),c=0,t=cr(t,i),i=Le(n,i,r,e)),ar(t)||(a||(t|=16),t!==c&&Ne(e,t))),2&t||!(4096&t||16&t)||vr(n,i),e}function $l(e,t,n){return e=xi(e,t,n),Array.isArray(e)?e:_r}function Zl(e,t){return 2&t&&(e|=2),1|e}function ar(e){return!!(2&e)&&!!(4&e)||!!(256&e)}function Zd(e){return Gl(e,!0)}function Jd(e){e=Bn(e);for(let t=0;t<e.length;t++){const n=e[t]=Bn(e[t]);Array.isArray(n[1])&&(n[1]=Qs(n[1]))}return Hs(e)}function Di(e,t,n,i){vs(e),Le(e=e.v,0|e[_t],t,(i==="0"?Number(n)===0:n===i)?void 0:n)}function xs(e,t,n){if(2&t)throw Error();const i=ps(t);let r=$l(e,n,i),s=r===_r?7:0|r[_t],o=Zl(s,t);return(2&o||ar(o)||16&o)&&(o===s||ar(o)||Ne(r,o),r=Bn(r),s=0,o=cr(o,t),Le(e,t,n,r,i)),o&=-13,o!==s&&Ne(r,o),r}function mc(e,t){var n=Hp;return Ql(Jl(e=e.v),e,void 0,n)===t?t:-1}function Jl(e){if(ds)return e[Is]??(e[Is]=new Map);if(Is in e)return e[Is];const t=new Map;return Object.defineProperty(e,Is,{value:t}),t}function Qd(e,t,n,i,r){const s=Jl(e),o=Ql(s,e,t,n,r);return o!==i&&(o&&(t=Le(e,t,o,void 0,r)),s.set(n,i)),t}function Ql(e,t,n,i,r){let s=e.get(i);if(s!=null)return s;s=0;for(let o=0;o<i.length;o++){const a=i[o];xi(t,a,r)!=null&&(s!==0&&(n=Le(t,n,s,void 0,r)),s=a)}return e.set(i,s),s}function tu(e,t,n){let i=0|e[_t];const r=ps(i),s=xi(e,n,r);let o;if(s!=null&&s[es]===ns){if(!dn(s))return _s(s),s.v;o=s.v}else Array.isArray(s)&&(o=s);if(o){const a=0|o[_t];2&a&&(o=gs(o,a))}return o=or(o,t),o!==s&&Le(e,i,n,o,r),o}function tp(e,t,n,i,r){let s=!1;if((i=xi(e,i,r,(o=>{const a=ql(o,n,!1,t);return s=a!==o&&a!=null,a})))!=null)return s&&!dn(i)&&vr(e,t),i}function Kt(e,t,n,i){let r=e.v,s=0|r[_t];if((t=tp(r,s,t,n,i))==null)return t;if(s=0|r[_t],!dn(e,s)){const o=jl(t);o!==t&&(_s(e)&&(r=e.v,s=0|r[_t]),s=Le(r,s,n,t=o,i),vr(r,s))}return t}function ep(e,t,n,i,r,s,o,a){var c=dn(e,n);s=c?1:s,o=!!o||s===3,c=a&&!c,(s===2||c)&&_s(e)&&(n=0|(t=e.v)[_t]);var l=(e=$l(t,r))===_r?7:0|e[_t],u=Zl(l,n);if(a=!(4&u)){var f=e,d=n;const m=!!(2&u);m&&(d|=2);let _=!m,M=!0,p=0,h=0;for(;p<f.length;p++){const A=ql(f[p],i,!1,d);if(A instanceof i){if(!m){const T=dn(A);_&&(_=!T),M&&(M=T)}f[h++]=A}}h<p&&(f.length=h),u|=4,u=M?-4097&u:4096|u,u=_?8|u:-9&u}if(u!==l&&(Ne(e,u),2&u&&Object.freeze(e)),c&&!(8&u||!e.length&&(s===1||s===4&&(2&u||!(16&u)&&32&n)))){for(ar(u)&&(e=Bn(e),u=cr(u,n),n=Le(t,n,r,e)),i=e,c=u,l=0;l<i.length;l++)(f=i[l])!==(u=jl(f))&&(i[l]=u);c|=8,Ne(e,u=c=i.length?4096|c:-4097&c)}return $d(e,u,t,n,r,s,a,o)}function Mi(e,t,n){const i=e.v;return ep(e,i,0|i[_t],t,n,rr(),!1,!0)}function np(e){return e==null&&(e=void 0),e}function At(e,t,n,i,r){return ne(e,n,i=np(i),r),i&&!dn(i)&&vr(e.v),e}function ks(e,t,n,i){t:{var r=i=np(i);vs(e);const s=e.v;let o=0|s[_t];if(r==null){const a=Jl(s);if(Ql(a,s,o,n)!==t)break t;a.set(n,0)}else o=Qd(s,o,n,t);Le(s,o,t,r)}i&&!dn(i)&&vr(e.v)}function cr(e,t){return-273&(2&t?2|e:-3&e)}function eu(e,t,n,i){var r=i;vs(e),e=ep(e,i=e.v,0|i[_t],n,t,2,!0),r=r??new n,e.push(r),t=n=e===_r?7:0|e[_t],(r=dn(r))?(n&=-9,e.length===1&&(n&=-4097)):n|=4096,n!==t&&Ne(e,n),r||vr(i)}function wn(e,t,n){return ms(ge(e,t,void 0,n))}function Te(e,t){return ge(e,t,void 0,void 0,Kn)??0}function Si(e,t,n){if(n!=null){if(typeof n!="number"||!ma(n))throw hl("int32");n|=0}ne(e,t,n)}function yt(e,t,n){ne(e,t,Bs(n))}function pn(e,t,n){Di(e,t,no(n),"")}function Jo(e,t,n){{vs(e);const o=e.v;let a=0|o[_t];if(n==null)Le(o,a,t);else{var i=e=n===_r?7:0|n[_t],r=ar(e),s=r||Object.isFrozen(n);for(r||(e=0),s||(n=Bn(n),i=0,e=cr(e,a),s=!1),e|=5,e|=(4&e?512&e?512:1024&e?1024:0:void 0)??1024,r=0;r<n.length;r++){const c=n[r],l=qd(c);Object.is(c,l)||(s&&(n=Bn(n),i=0,e=cr(e,a),s=!1),n[r]=l)}e!==i&&(s&&(n=Bn(n),e=cr(e,a)),Ne(n,e)),Le(o,a,t,n)}}}function va(e,t,n){vs(e),sr(e,t,ke,2,!0).push(qd(n))}var Fr=class{constructor(e,t,n){if(this.buffer=e,n&&!t)throw Error();this.g=t}};function nu(e,t){if(typeof e=="string")return new Fr(Ld(e),t);if(Array.isArray(e))return new Fr(new Uint8Array(e),t);if(e.constructor===Uint8Array)return new Fr(e,!1);if(e.constructor===ArrayBuffer)return e=new Uint8Array(e),new Fr(e,!1);if(e.constructor===Zn)return t=zl(e)||new Uint8Array(0),new Fr(t,!0,e);if(e instanceof Uint8Array)return e=e.constructor===Uint8Array?e:new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new Fr(e,!1);throw Error()}function iu(e,t){let n,i=0,r=0,s=0;const o=e.h;let a=e.g;do n=o[a++],i|=(127&n)<<s,s+=7;while(s<32&&128&n);if(s>32)for(r|=(127&n)>>4,s=3;s<32&&128&n;s+=7)n=o[a++],r|=(127&n)<<s;if(lr(e,a),!(128&n))return t(i>>>0,r>>>0);throw Error()}function ru(e){let t=0,n=e.g;const i=n+10,r=e.h;for(;n<i;){const s=r[n++];if(t|=s,(128&s)==0)return lr(e,n),!!(127&t)}throw Error()}function zi(e){const t=e.h;let n=e.g,i=t[n++],r=127&i;if(128&i&&(i=t[n++],r|=(127&i)<<7,128&i&&(i=t[n++],r|=(127&i)<<14,128&i&&(i=t[n++],r|=(127&i)<<21,128&i&&(i=t[n++],r|=i<<28,128&i&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++])))))throw Error();return lr(e,n),r}function Jn(e){return zi(e)>>>0}function Qo(e){var t=e.h;const n=e.g;var i=t[n],r=t[n+1];const s=t[n+2];return t=t[n+3],lr(e,e.g+4),e=2*((r=(i<<0|r<<8|s<<16|t<<24)>>>0)>>31)+1,i=r>>>23&255,r&=8388607,i==255?r?NaN:e*(1/0):i==0?1401298464324817e-60*e*r:e*Math.pow(2,i-150)*(r+8388608)}function Nx(e){return zi(e)}function lr(e,t){if(e.g=t,t>e.l)throw Error()}function ip(e,t){if(t<0)throw Error();const n=e.g;if((t=n+t)>e.l)throw Error();return e.g=t,n}function rp(e,t){if(t==0)return dr();var n=ip(e,t);return e.Y&&e.j?n=e.h.subarray(n,n+t):(e=e.h,n=n===(t=n+t)?new Uint8Array(0):gx?e.slice(n,t):new Uint8Array(e.subarray(n,t))),n.length==0?dr():new Zn(n,Qr)}var lf=[];function sp(e,t,n,i){if(ta.length){const r=ta.pop();return r.o(i),r.g.init(e,t,n,i),r}return new Fx(e,t,n,i)}function op(e){e.g.clear(),e.l=-1,e.h=-1,ta.length<100&&ta.push(e)}function ap(e){var t=e.g;if(t.g==t.l)return!1;e.m=e.g.g;var n=Jn(e.g);if(t=n>>>3,!((n&=7)>=0&&n<=5)||t<1)throw Error();return e.l=t,e.h=n,!0}function qo(e){switch(e.h){case 0:e.h!=0?qo(e):ru(e.g);break;case 1:lr(e=e.g,e.g+8);break;case 2:if(e.h!=2)qo(e);else{var t=Jn(e.g);lr(e=e.g,e.g+t)}break;case 5:lr(e=e.g,e.g+4);break;case 3:for(t=e.l;;){if(!ap(e))throw Error();if(e.h==4){if(e.l!=t)throw Error();break}qo(e)}break;default:throw Error()}}function io(e,t,n){const i=e.g.l;var r=Jn(e.g);let s=(r=e.g.g+r)-i;if(s<=0&&(e.g.l=r,n(t,e,void 0,void 0,void 0),s=r-e.g.g),s)throw Error();return e.g.g=r,e.g.l=i,t}function su(e){var t=Jn(e.g),n=ip(e=e.g,t);if(e=e.h,Kv){var i,r=e;(i=fc)||(i=fc=new TextDecoder("utf-8",{fatal:!0})),t=n+t,r=n===0&&t===r.length?r:r.subarray(n,t);try{var s=i.decode(r)}catch(a){if(Uo===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),Uo=!0}catch{Uo=!1}}throw!Uo&&(fc=void 0),a}}else{t=(s=n)+t,n=[];let a,c=null;for(;s<t;){var o=e[s++];o<128?n.push(o):o<224?s>=t?Zi():(a=e[s++],o<194||(192&a)!=128?(s--,Zi()):n.push((31&o)<<6|63&a)):o<240?s>=t-1?Zi():(a=e[s++],(192&a)!=128||o===224&&a<160||o===237&&a>=160||(192&(i=e[s++]))!=128?(s--,Zi()):n.push((15&o)<<12|(63&a)<<6|63&i)):o<=244?s>=t-2?Zi():(a=e[s++],(192&a)!=128||a-144+(o<<28)>>30!=0||(192&(i=e[s++]))!=128||(192&(r=e[s++]))!=128?(s--,Zi()):(o=(7&o)<<18|(63&a)<<12|(63&i)<<6|63&r,o-=65536,n.push(55296+(o>>10&1023),56320+(1023&o)))):Zi(),n.length>=8192&&(c=Xh(c,n),n.length=0)}s=Xh(c,n)}return s}function cp(e){const t=Jn(e.g);return rp(e.g,t)}function xa(e,t,n){var i=Jn(e.g);for(i=e.g.g+i;e.g.g<i;)n.push(t(e.g))}var Fx=class{constructor(e,t,n,i){if(lf.length){const r=lf.pop();r.init(e,t,n,i),e=r}else e=new class{constructor(r,s,o,a){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.init(r,s,o,a)}init(r,s,o,{Y:a=!1,ea:c=!1}={}){this.Y=a,this.ea=c,r&&(r=nu(r,this.ea),this.h=r.buffer,this.j=r.g,this.m=s||0,this.l=o!==void 0?this.m+o:this.h.length,this.g=this.m)}clear(){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.Y=!1}}(e,t,n,i);this.g=e,this.m=this.g.g,this.h=this.l=-1,this.o(i)}o({ha:e=!1}={}){this.ha=e}},ta=[];function uf(e){return e?/^\d+$/.test(e)?(pa(e),new ml(me,we)):null:Ox||(Ox=new ml(0,0))}var ml=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}};let Ox;function hf(e){return e?/^-?\d+$/.test(e)?(pa(e),new gl(me,we)):null:Bx||(Bx=new gl(0,0))}var gl=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}};let Bx;function Wr(e,t,n){for(;n>0||t>127;)e.g.push(127&t|128),t=(t>>>7|n<<25)>>>0,n>>>=7;e.g.push(t)}function Ms(e,t){for(;t>127;)e.g.push(127&t|128),t>>>=7;e.g.push(t)}function Ma(e,t){if(t>=0)Ms(e,t);else{for(let n=0;n<9;n++)e.g.push(127&t|128),t>>=7;e.g.push(1)}}function ou(e){var t=me;e.g.push(t>>>0&255),e.g.push(t>>>8&255),e.g.push(t>>>16&255),e.g.push(t>>>24&255)}function ss(e,t){t.length!==0&&(e.l.push(t),e.h+=t.length)}function Rn(e,t,n){Ms(e.g,8*t+n)}function au(e,t){return Rn(e,t,2),t=e.g.end(),ss(e,t),t.push(e.h),t}function cu(e,t){var n=t.pop();for(n=e.h+e.g.length()-n;n>127;)t.push(127&n|128),n>>>=7,e.h++;t.push(n),e.h++}function Sa(e,t,n){Rn(e,t,2),Ms(e.g,n.length),ss(e,e.g.end()),ss(e,n)}function ea(e,t,n,i){n!=null&&(t=au(e,t),i(n,e),cu(e,t))}function ti(){const e=class{constructor(){throw Error()}};return Object.setPrototypeOf(e,e.prototype),e}var lu=ti(),lp=ti(),uu=ti(),hu=ti(),fu=ti(),up=ti(),kx=ti(),Ea=ti(),hp=ti(),fp=ti();function ei(e,t,n){var i=e.v;hn&&hn in i&&(i=i[hn])&&delete i[t.g],t.h?t.j(e,t.h,t.g,n,t.l):t.j(e,t.g,n,t.l)}var vt=class{constructor(e,t){this.v=jd(e,t,void 0,2048)}toJSON(){return Yd(this)}j(){var r;var e=M3,t=this.v,n=e.g,i=hn;if(ds&&i&&((r=t[i])==null?void 0:r[n])!=null&&ts(ox,3),t=e.g,Zh&&hn&&Zh===void 0&&(i=(n=this.v)[hn])&&(i=i.da))try{i(n,t,Cx)}catch(s){wd(s)}return e.h?e.m(this,e.h,e.g,e.l):e.m(this,e.g,e.defaultValue,e.l)}clone(){const e=this.v,t=0|e[_t];return Kl(this,e,t)?Yl(this,e,!0):new this.constructor(gs(e,t,!1))}};vt.prototype[es]=ns,vt.prototype.toString=function(){return this.v.toString()};var Ss=class{constructor(e,t,n){this.g=e,this.h=t,e=lu,this.l=!!e&&n===e||!1}};function ya(e,t){return new Ss(e,t,lu)}function dp(e,t,n,i,r){ea(e,n,_p(t,i),r)}const zx=ya((function(e,t,n,i,r){return e.h===2&&(io(e,tu(t,i,n),r),!0)}),dp),Gx=ya((function(e,t,n,i,r){return e.h===2&&(io(e,tu(t,i,n),r),!0)}),dp);var Ta=Symbol(),Aa=Symbol(),_l=Symbol(),ff=Symbol(),df=Symbol();let pp,mp;function xr(e,t,n,i){var r=i[e];if(r)return r;(r={}).qa=i,r.T=(function(f){switch(typeof f){case"boolean":return Dx||(Dx=[0,void 0,!0]);case"number":return f>0?void 0:f===0?Ix||(Ix=[0,void 0]):[-f,void 0];case"string":return[0,f];case"object":return f}})(i[0]);var s=i[1];let o=1;s&&s.constructor===Object&&(r.ba=s,typeof(s=i[++o])=="function"&&(r.ma=!0,pp??(pp=s),mp??(mp=i[o+1]),s=i[o+=2]));const a={};for(;s&&Array.isArray(s)&&s.length&&typeof s[0]=="number"&&s[0]>0;){for(var c=0;c<s.length;c++)a[s[c]]=s;s=i[++o]}for(c=1;s!==void 0;){let f;typeof s=="number"&&(c+=s,s=i[++o]);var l=void 0;if(s instanceof Ss?f=s:(f=zx,o--),f==null?void 0:f.l){s=i[++o],l=i;var u=o;typeof s=="function"&&(s=s(),l[u]=s),l=s}for(u=c+1,typeof(s=i[++o])=="number"&&s<0&&(u-=s,s=i[++o]);c<u;c++){const d=a[c];l?n(r,c,f,l,d):t(r,c,f,d)}}return i[e]=r}function gp(e){return Array.isArray(e)?e[0]instanceof Ss?e:[Gx,e]:[e,void 0]}function _p(e,t){return e instanceof vt?e.v:Array.isArray(e)?or(e,t):void 0}function du(e,t,n,i){const r=n.g;e[t]=i?(s,o,a)=>r(s,o,a,i):r}function pu(e,t,n,i,r){const s=n.g;let o,a;e[t]=(c,l,u)=>s(c,l,u,a||(a=xr(Aa,du,pu,i).T),o||(o=mu(i)),r)}function mu(e){let t=e[_l];if(t!=null)return t;const n=xr(Aa,du,pu,e);return t=n.ma?(i,r)=>pp(i,r,n):(i,r)=>{for(;ap(r)&&r.h!=4;){var s=r.l,o=n[s];if(o==null){var a=n.ba;a&&(a=a[s])&&(a=Hx(a))!=null&&(o=n[s]=a)}if(o==null||!o(r,i,s)){if(o=(a=r).m,qo(a),a.ha)var c=void 0;else c=a.g.g-o,a.g.g=o,c=rp(a.g,c);o=void 0,a=i,c&&((o=a[hn]??(a[hn]=new pl))[s]??(o[s]=[])).push(c)}}return(i=ga(i))&&(i.da=n.qa[df]),!0},e[_l]=t,e[df]=Vx.bind(e),t}function Vx(e,t,n,i){var r=this[Aa];const s=this[_l],o=or(void 0,r.T),a=ga(e);if(a){var c=!1,l=r.ba;if(l){if(r=(u,f,d)=>{if(d.length!==0)if(l[f])for(const m of d){u=sp(m);try{c=!0,s(o,u)}finally{op(u)}}else i==null||i(e,f,d)},t==null)Zo(a,r);else if(a!=null){const u=a[t];u&&r(a,t,u)}if(c){let u=0|e[_t];if(2&u&&2048&u&&!(n!=null&&n.Ka))throw Error();const f=ps(u),d=(m,_)=>{if(xi(e,m,f)!=null){if((n==null?void 0:n.Qa)===1)return;throw Error()}_!=null&&(u=Le(e,u,m,_,f)),delete a[m]};t==null?Fd(o,0|o[_t],((m,_)=>{d(m,_)})):d(t,xi(o,t,f))}}}}function Hx(e){const t=(e=gp(e))[0].g;if(e=e[1]){const n=mu(e),i=xr(Aa,du,pu,e).T;return(r,s,o)=>t(r,s,o,i,n)}return t}function ba(e,t,n){e[t]=n.h}function wa(e,t,n,i){let r,s;const o=n.h;e[t]=(a,c,l)=>o(a,c,l,s||(s=xr(Ta,ba,wa,i).T),r||(r=vp(i)))}function vp(e){let t=e[ff];if(!t){const n=xr(Ta,ba,wa,e);t=(i,r)=>xp(i,r,n),e[ff]=t}return t}function xp(e,t,n){Fd(e,0|e[_t],((i,r)=>{if(r!=null){var s=(function(o,a){var c=o[a];if(c)return c;if((c=o.ba)&&(c=c[a])){var l=(c=gp(c))[0].h;if(c=c[1]){const u=vp(c),f=xr(Ta,ba,wa,c).T;c=o.ma?mp(f,u):(d,m,_)=>l(d,m,_,f,u)}else c=l;return o[a]=c}})(n,i);s?s(t,r,i):i<500||ts(fl,3)}})),(e=ga(e))&&Zo(e,((i,r,s)=>{for(ss(t,t.g.end()),i=0;i<s.length;i++)ss(t,zl(s[i])||new Uint8Array(0))}))}const Wx=fn(0);function Es(e,t){if(Array.isArray(t)){var n=0|t[_t];if(4&n)return t;for(var i=0,r=0;i<t.length;i++){const s=e(t[i]);s!=null&&(t[r++]=s)}return r<i&&(t.length=r),(e=-1537&(5|n))!==n&&Ne(t,e),2&e&&Object.freeze(t),t}}function Xe(e,t,n){return new Ss(e,t,n)}function ys(e,t,n){return new Ss(e,t,n)}function qe(e,t,n){Le(e,0|e[_t],t,n,ps(0|e[_t]))}var Xx=ya((function(e,t,n,i,r){if(e.h!==2)return!1;if(e=Bn(e=io(e,or([void 0,void 0],i),r)),r=ps(i=0|t[_t]),2&i)throw Error();let s=xi(t,n,r);if(s instanceof vi)(2&s.J)!=0?(s=s.V(),s.push(e),Le(t,i,n,s,r)):s.Ma(e);else if(Array.isArray(s)){var o=0|s[_t];8192&o||Ne(s,o|=8192),2&o&&(s=Jd(s),Le(t,i,n,s,r)),s.push(e)}else Le(t,i,n,Hs([e]),r);return!0}),(function(e,t,n,i,r){if(t instanceof vi)t.forEach(((s,o)=>{ea(e,n,or([o,s],i),r)}));else if(Array.isArray(t)){for(let s=0;s<t.length;s++){const o=t[s];Array.isArray(o)&&ea(e,n,or(o,i),r)}Hs(t)}}));function Mp(e,t,n){(t=Kn(t))!=null&&(Rn(e,n,5),e=e.g,Vl(t),ou(e))}function Sp(e,t,n){if(t=(function(i){if(i==null)return i;const r=typeof i;if(r==="bigint")return String(to(64,i));if(eo(i)){if(r==="string")return Hd(i);if(r==="number")return Xl(i)}})(t),t!=null&&(typeof t=="string"&&hf(t),t!=null))switch(Rn(e,n,0),typeof t){case"number":e=e.g,is(t),Wr(e,me,we);break;case"bigint":n=BigInt.asUintN(64,t),n=new gl(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Wr(e.g,n.h,n.g);break;default:n=hf(t),Wr(e.g,n.h,n.g)}}function Ep(e,t,n){(t=ms(t))!=null&&t!=null&&(Rn(e,n,0),Ma(e.g,t))}function yp(e,t,n){(t=zd(t))!=null&&(Rn(e,n,0),e.g.g.push(t?1:0))}function Tp(e,t,n){(t=ke(t))!=null&&Sa(e,n,bd(t))}function Ap(e,t,n,i,r){ea(e,n,_p(t,i),r)}function bp(e,t,n){(t=t==null||typeof t=="string"||t instanceof Zn?t:void 0)!=null&&Sa(e,n,nu(t,!0).buffer)}function wp(e,t,n){(t=Gd(t))!=null&&t!=null&&(Rn(e,n,0),Ms(e.g,t))}function Rp(e,t,n){return(e.h===5||e.h===2)&&(t=xs(t,0|t[_t],n),e.h==2?xa(e,Qo,t):t.push(Qo(e.g)),!0)}var Re=Xe((function(e,t,n){return e.h===5&&(qe(t,n,Qo(e.g)),!0)}),Mp,Ea),qx=ys(Rp,(function(e,t,n){if((t=Es(Kn,t))!=null)for(let o=0;o<t.length;o++){var i=e,r=n,s=t[o];s!=null&&(Rn(i,r,5),i=i.g,Vl(s),ou(i))}}),Ea),gu=ys(Rp,(function(e,t,n){if((t=Es(Kn,t))!=null&&t.length){Rn(e,n,2),Ms(e.g,4*t.length);for(let i=0;i<t.length;i++)n=e.g,Vl(t[i]),ou(n)}}),Ea),Yx=Xe((function(e,t,n){return e.h===5&&(qe(t,n,(e=Qo(e.g))===0?void 0:e),!0)}),Mp,Ea),Gi=Xe((function(e,t,n){return e.h!==0?e=!1:(qe(t,n,iu(e.g,kd)),e=!0),e}),Sp,up),gc=Xe((function(e,t,n){return e.h!==0?t=!1:(qe(t,n,(e=iu(e.g,kd))===Wx?void 0:e),t=!0),t}),Sp,up),jx=Xe((function(e,t,n){return e.h!==0?e=!1:(qe(t,n,iu(e.g,vx)),e=!0),e}),(function(e,t,n){if(t=(function(i){if(i==null)return i;var r=typeof i;if(r==="bigint")return String(xx(64,i));if(eo(i)){if(r==="string")return r=rs(Number(i)),mr(r)&&r>=0?i=String(r):((r=i.indexOf("."))!==-1&&(i=i.substring(0,r)),(r=i[0]!=="-"&&((r=i.length)<20||r===20&&i<="18446744073709551615"))||(pa(i),i=Ws(me,we))),i;if(r==="number")return(i=rs(i))>=0&&mr(i)||(is(i),i=Bd(me,we)),i}})(t),t!=null&&(typeof t=="string"&&uf(t),t!=null))switch(Rn(e,n,0),typeof t){case"number":e=e.g,is(t),Wr(e,me,we);break;case"bigint":n=BigInt.asUintN(64,t),n=new ml(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Wr(e.g,n.h,n.g);break;default:n=uf(t),Wr(e.g,n.h,n.g)}}),kx),Pe=Xe((function(e,t,n){return e.h===0&&(qe(t,n,zi(e.g)),!0)}),Ep,hu),ro=ys((function(e,t,n){return(e.h===0||e.h===2)&&(t=xs(t,0|t[_t],n),e.h==2?xa(e,zi,t):t.push(zi(e.g)),!0)}),(function(e,t,n){if((t=Es(ms,t))!=null&&t.length){n=au(e,n);for(let i=0;i<t.length;i++)Ma(e.g,t[i]);cu(e,n)}}),hu),zr=Xe((function(e,t,n){return e.h===0&&(qe(t,n,(e=zi(e.g))===0?void 0:e),!0)}),Ep,hu),_e=Xe((function(e,t,n){return e.h===0&&(qe(t,n,ru(e.g)),!0)}),yp,lp),ur=Xe((function(e,t,n){return e.h===0&&(qe(t,n,(e=ru(e.g))===!1?void 0:e),!0)}),yp,lp),He=ys((function(e,t,n){return e.h===2&&(e=su(e),xs(t,0|t[_t],n).push(e),!0)}),(function(e,t,n){if((t=Es(ke,t))!=null)for(let o=0;o<t.length;o++){var i=e,r=n,s=t[o];s!=null&&Sa(i,r,bd(s))}}),uu),Ui=Xe((function(e,t,n){return e.h===2&&(qe(t,n,(e=su(e))===""?void 0:e),!0)}),Tp,uu),re=Xe((function(e,t,n){return e.h===2&&(qe(t,n,su(e)),!0)}),Tp,uu),Be=(function(e,t,n=lu){return new Ss(e,t,n)})((function(e,t,n,i,r){return e.h===2&&(i=or(void 0,i),xs(t,0|t[_t],n).push(i),io(e,i,r),!0)}),(function(e,t,n,i,r){if(Array.isArray(t)){for(let s=0;s<t.length;s++)Ap(e,t[s],n,i,r);1&(e=0|t[_t])||Ne(t,1|e)}})),fe=ya((function(e,t,n,i,r,s){if(e.h!==2)return!1;let o=0|t[_t];return Qd(t,o,s,n,ps(o)),io(e,t=tu(t,i,n),r),!0}),Ap),Cp=Xe((function(e,t,n){return e.h===2&&(qe(t,n,cp(e)),!0)}),bp,hp),Kx=ys((function(e,t,n){return(e.h===0||e.h===2)&&(t=xs(t,0|t[_t],n),e.h==2?xa(e,Jn,t):t.push(Jn(e.g)),!0)}),(function(e,t,n){if((t=Es(Gd,t))!=null)for(let o=0;o<t.length;o++){var i=e,r=n,s=t[o];s!=null&&(Rn(i,r,0),Ms(i.g,s))}}),fu),$x=Xe((function(e,t,n){return e.h===0&&(qe(t,n,(e=Jn(e.g))===0?void 0:e),!0)}),wp,fu),We=Xe((function(e,t,n){return e.h===0&&(qe(t,n,zi(e.g)),!0)}),(function(e,t,n){(t=ms(t))!=null&&(t=parseInt(t,10),Rn(e,n,0),Ma(e.g,t))}),fp);class Zx{constructor(t,n){var i=gn;this.g=t,this.h=n,this.m=Kt,this.j=At,this.defaultValue=void 0,this.l=i.Oa!=null?Od:void 0}register(){ha(this)}}function ni(e,t){return new Zx(e,t)}function Hi(e,t){return(n,i)=>{{const s={ea:!0};i&&Object.assign(s,i),n=sp(n,void 0,void 0,s);try{const o=new e,a=o.v;mu(t)(a,n);var r=o}finally{op(n)}}return r}}function Ra(e){return function(){const t=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const o=this.g;return this.g=[],o}}}};xp(this.v,t,xr(Ta,ba,wa,e)),ss(t,t.g.end());const n=new Uint8Array(t.h),i=t.l,r=i.length;let s=0;for(let o=0;o<r;o++){const a=i[o];n.set(a,s),s+=a.length}return t.l=[n],n}}var pf=class extends vt{constructor(e){super(e)}},mf=[0,Ui,Xe((function(e,t,n){return e.h===2&&(qe(t,n,(e=cp(e))===dr()?void 0:e),!0)}),(function(e,t,n){if(t!=null){if(t instanceof vt){const i=t.Ra;return void(i?(t=i(t),t!=null&&Sa(e,n,nu(t,!0).buffer)):ts(fl,3))}if(Array.isArray(t))return void ts(fl,3)}bp(e,t,n)}),hp)];let _c,gf=globalThis.trustedTypes;function _f(e){var t;return _c===void 0&&(_c=(function(){let n=null;if(!gf)return n;try{const i=r=>r;n=gf.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})()),e=(t=_c)?t.createScriptURL(e):e,new class{constructor(n){this.g=n}toString(){return this.g+""}}(e)}function No(e,...t){if(t.length===0)return _f(e[0]);let n=e[0];for(let i=0;i<t.length;i++)n+=encodeURIComponent(t[i])+e[i+1];return _f(n)}var Pp=[0,Pe,We,_e,-1,ro,We,-1,_e],Jx=class extends vt{constructor(e){super(e)}},Lp=[0,_e,re,_e,We,-1,ys((function(e,t,n){return(e.h===0||e.h===2)&&(t=xs(t,0|t[_t],n),e.h==2?xa(e,Nx,t):t.push(zi(e.g)),!0)}),(function(e,t,n){if((t=Es(ms,t))!=null&&t.length){n=au(e,n);for(let i=0;i<t.length;i++)Ma(e.g,t[i]);cu(e,n)}}),fp),re,-1,[0,_e,-1],We,_e,-1],Dp=[0,3,_e,-1,2,[0,[2],Pe,fe,[0,Xe((function(e,t,n){return e.h===0&&(qe(t,n,Jn(e.g)),!0)}),wp,fu)]],[0,We,_e,We,_e,We,_e,re,-1],[0,[3,4],re,-1,fe,[0,Pe],fe,[0,We]],[0]],Ip=[0,re,-2],vf=class extends vt{constructor(e){super(e)}},Up=[0],Np=[0,Pe,_e,1,_e,-4],gn=class extends vt{constructor(e){super(e,2)}},De={};De[336783863]=[0,re,_e,-1,Pe,[0,[1,2,3,4,5,6,7,8,9],fe,Up,fe,Lp,fe,Ip,fe,Np,fe,Pp,fe,[0,re,-2],fe,[0,re,We],fe,Dp,fe,[0,We,-1,_e]],[0,re],_e,[0,[1,3],[2,4],fe,[0,ro],-1,fe,[0,He],-1,Be,[0,re,-1]],re];var xf=[0,gc,-1,ur,-3,gc,ro,Ui,zr,gc,-1,ur,zr,ur,-2,Ui];function de(e,t){va(e,3,t)}function Ht(e,t){va(e,4,t)}var nn=class extends vt{constructor(e){super(e,500)}o(e){return At(this,0,7,e)}},zs=[-1,{}],Mf=[0,re,1,zs],Sf=[0,re,He,zs];function Cn(e,t){eu(e,1,nn,t)}function xe(e,t){va(e,10,t)}function $t(e,t){va(e,15,t)}var _n=class extends vt{constructor(e){super(e,500)}o(e){return At(this,0,1001,e)}},Fp=[-500,Be,[-500,Ui,-1,He,-3,[-2,De,_e],Be,mf,zr,-1,Mf,Sf,Be,[0,Ui,ur],Ui,xf,zr,He,987,He],4,Be,[-500,re,-1,[-1,{}],998,re],Be,[-500,re,He,-1,[-2,{},_e],997,He,-1],zr,Be,[-500,re,He,zs,998,He],He,zr,Mf,Sf,Be,[0,Ui,-1,zs],He,-2,xf,Ui,-1,ur,[0,ur,$x],978,zs,Be,mf];_n.prototype.g=Ra(Fp);var Qx=Hi(_n,Fp),t3=class extends vt{constructor(e){super(e)}},Op=class extends vt{constructor(e){super(e)}g(){return Mi(this,t3,1)}},Bp=[0,Be,[0,Pe,Re,re,-1]],Ca=Hi(Op,Bp),e3=class extends vt{constructor(e){super(e)}},n3=class extends vt{constructor(e){super(e)}},vc=class extends vt{constructor(e){super(e)}l(){return Kt(this,e3,2)}g(){return Mi(this,n3,5)}},kp=Hi(class extends vt{constructor(e){super(e)}},[0,He,ro,gu,[0,We,[0,Pe,-3],[0,Re,-3],[0,Pe,-1,[0,Be,[0,Pe,-2]]],Be,[0,Re,-1,re,Re]],re,-1,Gi,Be,[0,Pe,Re],He,Gi]),zp=class extends vt{constructor(e){super(e)}},Xr=Hi(class extends vt{constructor(e){super(e)}},[0,Be,[0,Re,-4]]),Gp=class extends vt{constructor(e){super(e)}},so=Hi(class extends vt{constructor(e){super(e)}},[0,Be,[0,Re,-4]]),i3=class extends vt{constructor(e){super(e)}},r3=[0,Pe,-1,gu,We],Vp=class extends vt{constructor(e){super(e)}};Vp.prototype.g=Ra([0,Re,-4,Gi]);var s3=class extends vt{constructor(e){super(e)}},o3=Hi(class extends vt{constructor(e){super(e)}},[0,Be,[0,1,Pe,re,Bp],Gi]),Ef=class extends vt{constructor(e){super(e)}},a3=class extends vt{constructor(e){super(e)}na(){const e=ge(this,1,void 0,void 0,Zd);return e??dr()}},c3=class extends vt{constructor(e){super(e)}},Hp=[1,2],l3=Hi(class extends vt{constructor(e){super(e)}},[0,Be,[0,Hp,fe,[0,gu],fe,[0,Cp],Pe,re],Gi]),_u=class extends vt{constructor(e){super(e)}},Wp=[0,re,Pe,Re,He,-1],yf=class extends vt{constructor(e){super(e)}},u3=[0,_e,-1],Tf=class extends vt{constructor(e){super(e)}},Yo=[1,2,3,4,5,6],na=class extends vt{constructor(e){super(e)}g(){return ge(this,1,void 0,void 0,Zd)!=null}l(){return ke(ge(this,2))!=null}},Ee=class extends vt{constructor(e){super(e)}g(){return zd(ge(this,2))??!1}},Xp=[0,Cp,re,[0,Pe,Gi,-1],[0,jx,Gi]],Ce=[0,Xp,_e,[0,Yo,fe,Np,fe,Lp,fe,Pp,fe,Up,fe,Ip,fe,Dp],We],Pa=class extends vt{constructor(e){super(e)}},vu=[0,Ce,Re,-1,Pe],h3=ni(502141897,Pa);De[502141897]=vu;var f3=Hi(class extends vt{constructor(e){super(e)}},[0,[0,We,-1,qx,Kx],r3]),qp=class extends vt{constructor(e){super(e)}},Yp=class extends vt{constructor(e){super(e)}},vl=[0,Ce,Re,[0,Ce],_e],d3=ni(508968150,Yp);De[508968150]=[0,Ce,vu,vl,Re,[0,[0,Xp]]],De[508968149]=vl;var Or=class extends vt{constructor(e){super(e)}l(){return Kt(this,_u,2)}g(){ne(this,2)}},jp=[0,Ce,Wp];De[478825465]=jp;var p3=class extends vt{constructor(e){super(e)}},Kp=class extends vt{constructor(e){super(e)}},xu=class extends vt{constructor(e){super(e)}},Mu=class extends vt{constructor(e){super(e)}},$p=class extends vt{constructor(e){super(e)}},Af=[0,Ce,[0,Ce],jp,-1],Zp=[0,Ce,Re,Pe],Su=[0,Ce,Re],Jp=[0,Ce,Zp,Su,Re],m3=ni(479097054,$p);De[479097054]=[0,Ce,Jp,Af],De[463370452]=Af,De[464864288]=Zp;var g3=ni(462713202,Mu);De[462713202]=Jp,De[474472470]=Su;var _3=class extends vt{constructor(e){super(e)}},Qp=class extends vt{constructor(e){super(e)}},tm=class extends vt{constructor(e){super(e)}},em=class extends vt{constructor(e){super(e)}},Eu=[0,Ce,Re,-1,Pe],xl=[0,Ce,Re,_e];em.prototype.g=Ra([0,Ce,Su,[0,Ce],vu,vl,Eu,xl]);var nm=class extends vt{constructor(e){super(e)}},v3=ni(456383383,nm);De[456383383]=[0,Ce,Wp];var im=class extends vt{constructor(e){super(e)}},x3=ni(476348187,im);De[476348187]=[0,Ce,u3];var rm=class extends vt{constructor(e){super(e)}},bf=class extends vt{constructor(e){super(e)}},sm=[0,We,-1],M3=ni(458105876,class extends vt{constructor(e){super(e)}g(){let e;var t=this.v;const n=0|t[_t];return e=dn(this,n),t=(function(i,r,s,o){var a=bf;!o&&_s(i)&&(s=0|(r=i.v)[_t]);var c=xi(r,2);if(i=!1,c==null){if(o)return of();c=[]}else if(c.constructor===vi){if(!(2&c.J)||o)return c;c=c.V()}else Array.isArray(c)?i=!!(2&(0|c[_t])):c=[];if(o){if(!c.length)return of();i||(i=!0,Qs(c))}else i&&(i=!1,Hs(c),c=Jd(c));return!i&&32&s&&Js(c,32),s=Le(r,s,2,o=new vi(c,a,Ex,void 0)),i||vr(r,s),o})(this,t,n,e),!e&&bf&&(t.ra=!0),t}});De[458105876]=[0,sm,Xx,[!0,Gi,[0,re,-1,He]],[0,ro,_e,We]];var yu=class extends vt{constructor(e){super(e)}},om=ni(458105758,yu);De[458105758]=[0,Ce,re,sm];var xc=class extends vt{constructor(e){super(e)}},wf=[0,Yx,-1,ur],S3=class extends vt{constructor(e){super(e)}},am=class extends vt{constructor(e){super(e)}},Ml=[1,2];am.prototype.g=Ra([0,Ml,fe,wf,fe,[0,Be,wf]]);var cm=class extends vt{constructor(e){super(e)}},E3=ni(443442058,cm);De[443442058]=[0,Ce,re,Pe,Re,He,-1,_e,Re],De[514774813]=Eu;var lm=class extends vt{constructor(e){super(e)}},y3=ni(516587230,lm);function Sl(e,t){return t=t?t.clone():new _u,e.displayNamesLocale!==void 0?ne(t,1,no(e.displayNamesLocale)):e.displayNamesLocale===void 0&&ne(t,1),e.maxResults!==void 0?Si(t,2,e.maxResults):"maxResults"in e&&ne(t,2),e.scoreThreshold!==void 0?yt(t,3,e.scoreThreshold):"scoreThreshold"in e&&ne(t,3),e.categoryAllowlist!==void 0?Jo(t,4,e.categoryAllowlist):"categoryAllowlist"in e&&ne(t,4),e.categoryDenylist!==void 0?Jo(t,5,e.categoryDenylist):"categoryDenylist"in e&&ne(t,5),t}function um(e){const t=Number(e);return Number.isSafeInteger(t)?t:String(e)}function Tu(e,t=-1,n=""){return{categories:e.map((i=>({index:wn(i,1)??0??-1,score:Te(i,2)??0,categoryName:ke(ge(i,3))??""??"",displayName:ke(ge(i,4))??""??""}))),headIndex:t,headName:n}}function T3(e){const t={classifications:Mi(e,s3,1).map((n=>{var i;return Tu(((i=Kt(n,Op,4))==null?void 0:i.g())??[],wn(n,2)??0,ke(ge(n,3))??"")}))};return(function(n){return n==null?n:typeof n=="bigint"?(dl(n)?n=Number(n):(n=to(64,n),n=dl(n)?Number(n):String(n)),n):eo(n)?typeof n=="number"?Xl(n):Hd(n):void 0})(ge(e,2,void 0,void 0,$o))!=null&&(t.timestampMs=um(ge(e,2,void 0,void 0,$o)??Kd)),t}function hm(e){var o,a;var t=sr(e,3,Kn,rr()),n=sr(e,2,ms,rr()),i=sr(e,1,ke,rr()),r=sr(e,9,ke,rr());const s={categories:[],keypoints:[]};for(let c=0;c<t.length;c++)s.categories.push({score:t[c],index:n[c]??-1,categoryName:i[c]??"",displayName:r[c]??""});if((t=(o=Kt(e,vc,4))==null?void 0:o.l())&&(s.boundingBox={originX:wn(t,1,Pi)??0,originY:wn(t,2,Pi)??0,width:wn(t,3,Pi)??0,height:wn(t,4,Pi)??0,angle:0}),(a=Kt(e,vc,4))==null?void 0:a.g().length)for(const c of Kt(e,vc,4).g())s.keypoints.push({x:ge(c,1,void 0,Pi,Kn)??0,y:ge(c,2,void 0,Pi,Kn)??0,score:ge(c,4,void 0,Pi,Kn)??0,label:ke(ge(c,3,void 0,Pi))??""});return s}function La(e){const t=[];for(const n of Mi(e,Gp,1))t.push({x:Te(n,1)??0,y:Te(n,2)??0,z:Te(n,3)??0,visibility:Te(n,4)??0});return t}function Gs(e){const t=[];for(const n of Mi(e,zp,1))t.push({x:Te(n,1)??0,y:Te(n,2)??0,z:Te(n,3)??0,visibility:Te(n,4)??0});return t}function Rf(e){return Array.from(e,(t=>t>127?t-256:t))}function Cf(e,t){if(e.length!==t.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${e.length} vs. ${t.length}).`);let n=0,i=0,r=0;for(let s=0;s<e.length;s++)n+=e[s]*t[s],i+=e[s]*e[s],r+=t[s]*t[s];if(i<=0||r<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*r)}let Fo;De[516587230]=[0,Ce,Eu,xl,Re],De[518928384]=xl;const A3=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function fm(e){if(e)return!0;if(Fo===void 0)try{await WebAssembly.instantiate(A3),Fo=!0}catch{Fo=!1}return Fo}async function Oo(e,t,n){return{wasmLoaderPath:`${t}/${e}_${n=`wasm${n?"_module":""}${await fm(n)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${t}/${e}_${n}.wasm`}}var Br=class{};function dm(){var e=navigator;return typeof OffscreenCanvas<"u"&&(!(function(t=navigator){return(t=t.userAgent).includes("Safari")&&!t.includes("Chrome")})(e)||!!((e=e.userAgent.match(/Version\/([\d]+).*Safari/))&&e.length>=1&&Number(e[1])>=17))}async function Pf(e){if(typeof importScripts!="function"){const t=document.createElement("script");return t.src=e.toString(),t.crossOrigin="anonymous",new Promise(((n,i)=>{t.addEventListener("load",(()=>{n()}),!1),t.addEventListener("error",(r=>{i(r)}),!1),document.body.appendChild(t)}))}try{importScripts(e.toString())}catch(t){if(!(t instanceof TypeError))throw t;{const n=self.import;n?await n(e.toString()):await import(e.toString())}}}function pm(e){return e.videoWidth!==void 0?[e.videoWidth,e.videoHeight]:e.naturalWidth!==void 0?[e.naturalWidth,e.naturalHeight]:e.displayWidth!==void 0?[e.displayWidth,e.displayHeight]:[e.width,e.height]}function Mt(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(t=e.i.stringToNewUTF8(t)),e.i._free(t)}function Lf(e,t,n){if(!e.i.canvas)throw Error("No OpenGL canvas configured.");if(n?e.i._bindTextureToStream(n):e.i._bindTextureToCanvas(),!(n=e.i.canvas.getContext("webgl2")||e.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,r]=pm(t);return!e.l||i===e.i.canvas.width&&r===e.i.canvas.height||(e.i.canvas.width=i,e.i.canvas.height=r),[i,r]}function Df(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(t.length);for(let r=0;r<t.length;r++)i[r]=e.i.stringToNewUTF8(t[r]);t=e.i._malloc(4*i.length),e.i.HEAPU32.set(i,t>>2),n(t);for(const r of i)e.i._free(r);e.i._free(t)}function Hn(e,t,n){e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=n}function Li(e,t,n){let i=[];e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=(r,s,o)=>{s?(n(i,o),i=[]):i.push(r)}}Br.forVisionTasks=function(e,t=!1){return Oo("vision",e??No``,t)},Br.forTextTasks=function(e,t=!1){return Oo("text",e??No``,t)},Br.forGenAiTasks=function(e,t=!1){return Oo("genai",e??No``,t)},Br.forAudioTasks=function(e,t=!1){return Oo("audio",e??No``,t)},Br.isSimdSupported=function(e=!1){return fm(e)};async function b3(e,t,n,i){return e=await(async(r,s,o,a,c)=>{if(s&&await Pf(s),!self.ModuleFactory||o&&(await Pf(o),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((s=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new r(c,a)})(e,n.wasmLoaderPath,n.assetLoaderPath,t,{locateFile:r=>r.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&r.endsWith(".data")?n.assetBinaryPath.toString():r}),await e.o(i),e}function Mc(e,t){const n=Kt(e.baseOptions,na,1)||new na;typeof t=="string"?(ne(n,2,no(t)),ne(n,1)):t instanceof Uint8Array&&(ne(n,1,Gl(t,!1)),ne(n,2)),At(e.baseOptions,0,1,n)}function If(e){try{const t=e.H.length;if(t===1)throw Error(e.H[0].message);if(t>1)throw Error("Encountered multiple errors: "+e.H.map((n=>n.message)).join(", "))}finally{e.H=[]}}function ht(e,t){e.C=Math.max(e.C,t)}function Da(e,t){e.B=new nn,pn(e.B,2,"PassThroughCalculator"),de(e.B,"free_memory"),Ht(e.B,"free_memory_unused_out"),xe(t,"free_memory"),Cn(t,e.B)}function os(e,t){de(e.B,t),Ht(e.B,t+"_unused_out")}function Ia(e){e.g.addBoolToStream(!0,"free_memory",e.C)}var El=class{constructor(e){this.g=e,this.H=[],this.C=0,this.g.setAutoRenderToScreen(!1)}l(e,t=!0){var n,i,r,s,o,a;if(t){const c=e.baseOptions||{};if((n=e.baseOptions)!=null&&n.modelAssetBuffer&&((i=e.baseOptions)!=null&&i.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((r=Kt(this.baseOptions,na,1))!=null&&r.g()||(s=Kt(this.baseOptions,na,1))!=null&&s.l()||(o=e.baseOptions)!=null&&o.modelAssetBuffer||(a=e.baseOptions)!=null&&a.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(l,u){let f=Kt(l.baseOptions,Tf,3);if(!f){var d=f=new Tf,m=new vf;ks(d,4,Yo,m)}"delegate"in u&&(u.delegate==="GPU"?(u=f,d=new Jx,ks(u,2,Yo,d)):(u=f,d=new vf,ks(u,4,Yo,d))),At(l.baseOptions,0,3,f)})(this,c),c.modelAssetPath)return fetch(c.modelAssetPath.toString()).then((l=>{if(l.ok)return l.arrayBuffer();throw Error(`Failed to fetch model: ${c.modelAssetPath} (${l.status})`)})).then((l=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(l),!0,!1,!1),Mc(this,"/model.dat"),this.m(),this.L()}));if(c.modelAssetBuffer instanceof Uint8Array)Mc(this,c.modelAssetBuffer);else if(c.modelAssetBuffer)return(async function(l){const u=[];for(var f=0;;){const{done:d,value:m}=await l.read();if(d)break;u.push(m),f+=m.length}if(u.length===0)return new Uint8Array(0);if(u.length===1)return u[0];l=new Uint8Array(f),f=0;for(const d of u)l.set(d,f),f+=d.length;return l})(c.modelAssetBuffer).then((l=>{Mc(this,l),this.m(),this.L()}))}return this.m(),this.L(),Promise.resolve()}L(){}ca(){let e;if(this.g.ca((t=>{e=Qx(t)})),!e)throw Error("Failed to retrieve CalculatorGraphConfig");return e}setGraph(e,t){this.g.attachErrorListener(((n,i)=>{this.H.push(Error(i))})),this.g.Ja(),this.g.setGraph(e,t),this.B=void 0,If(this)}finishProcessing(){this.g.finishProcessing(),If(this)}close(){this.B=void 0,this.g.closeGraph()}};function Oi(e,t){if(!e)throw Error(`Unable to obtain required WebGL resource: ${t}`);return e}El.prototype.close=El.prototype.close;class w3{constructor(t,n,i,r){this.g=t,this.h=n,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function Uf(e,t,n){const i=e.g;if(n=Oi(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,t),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(e.h,n),n}function Nf(e,t){const n=e.g,i=Oi(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const r=Oi(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(e.O),n.vertexAttribPointer(e.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const s=Oi(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(e.L),n.vertexAttribPointer(e.L,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(t?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new w3(n,i,r,s)}function Au(e,t){if(e.g){if(t!==e.g)throw Error("Cannot change GL context once initialized")}else e.g=t}function R3(e,t,n,i){return Au(e,t),e.h||(e.m(),e.D()),n?(e.u||(e.u=Nf(e,!0)),n=e.u):(e.A||(e.A=Nf(e,!1)),n=e.A),t.useProgram(e.h),n.bind(),e.l(),e=i(),n.g.bindVertexArray(null),e}function mm(e,t,n){return Au(e,t),e=Oi(t.createTexture(),"Failed to create texture"),t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n??t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n??t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),e}function gm(e,t,n){Au(e,t),e.B||(e.B=Oi(t.createFramebuffer(),"Failed to create framebuffe.")),t.bindFramebuffer(t.FRAMEBUFFER,e.B),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0)}function C3(e){var t;(t=e.g)==null||t.bindFramebuffer(e.g.FRAMEBUFFER,null)}var _m=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const e=this.g;if(this.h=Oi(e.createProgram(),"Failed to create WebGL program"),this.X=Uf(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,e.VERTEX_SHADER),this.W=Uf(this,this.H(),e.FRAGMENT_SHADER),e.linkProgram(this.h),!e.getProgramParameter(this.h,e.LINK_STATUS))throw Error(`Error during program linking: ${e.getProgramInfoLog(this.h)}`);this.O=e.getAttribLocation(this.h,"aVertex"),this.L=e.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const e=this.g;e.deleteProgram(this.h),e.deleteShader(this.X),e.deleteShader(this.W)}this.B&&this.g.deleteFramebuffer(this.B),this.A&&this.A.close(),this.u&&this.u.close()}};function di(e,t){switch(t){case 0:return e.g.find((n=>n instanceof Uint8Array));case 1:return e.g.find((n=>n instanceof Float32Array));case 2:return e.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${t}`)}}function yl(e){var t=di(e,1);if(!t){if(t=di(e,0))t=new Float32Array(t).map((i=>i/255));else{t=new Float32Array(e.width*e.height);const i=as(e);var n=bu(e);if(gm(n,i,vm(e)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(e.width*e.height*4),i.readPixels(0,0,e.width,e.height,i.RGBA,i.FLOAT,n);for(let r=0,s=0;r<t.length;++r,s+=4)t[r]=n[s]}else i.readPixels(0,0,e.width,e.height,i.RED,i.FLOAT,t)}e.g.push(t)}return t}function vm(e){let t=di(e,2);if(!t){const n=as(e);t=Mm(e);const i=yl(e),r=xm(e);n.texImage2D(n.TEXTURE_2D,0,r,e.width,e.height,0,n.RED,n.FLOAT,i),Tl(e)}return t}function as(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.h||(e.h=Oi(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function xm(e){if(e=as(e),!Bo)if(e.getExtension("EXT_color_buffer_float")&&e.getExtension("OES_texture_float_linear")&&e.getExtension("EXT_float_blend"))Bo=e.R32F;else{if(!e.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");Bo=e.R16F}return Bo}function bu(e){return e.l||(e.l=new _m),e.l}function Mm(e){const t=as(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=di(e,2);return n||(n=mm(bu(e),t,e.m?t.LINEAR:t.NEAREST),e.g.push(n),e.j=!0),t.bindTexture(t.TEXTURE_2D,n),n}function Tl(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}var Bo,Oe=class{constructor(e,t,n,i,r,s,o){this.g=e,this.m=t,this.j=n,this.canvas=i,this.l=r,this.width=s,this.height=o,this.j&&--Ff===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!di(this,0)}ka(){return!!di(this,1)}R(){return!!di(this,2)}ja(){return(t=di(e=this,0))||(t=yl(e),t=new Uint8Array(t.map((n=>Math.round(255*n)))),e.g.push(t)),t;var e,t}ia(){return yl(this)}N(){return vm(this)}clone(){const e=[];for(const t of this.g){let n;if(t instanceof Uint8Array)n=new Uint8Array(t);else if(t instanceof Float32Array)n=new Float32Array(t);else{if(!(t instanceof WebGLTexture))throw Error(`Type is not supported: ${t}`);{const i=as(this),r=bu(this);i.activeTexture(i.TEXTURE1),n=mm(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const s=xm(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),gm(r,i,n),R3(r,i,!1,(()=>{Mm(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Tl(this)})),C3(r),Tl(this)}}e.push(n)}return new Oe(e,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&as(this).deleteTexture(di(this,2)),Ff=-1}};Oe.prototype.close=Oe.prototype.close,Oe.prototype.clone=Oe.prototype.clone,Oe.prototype.getAsWebGLTexture=Oe.prototype.N,Oe.prototype.getAsFloat32Array=Oe.prototype.ia,Oe.prototype.getAsUint8Array=Oe.prototype.ja,Oe.prototype.hasWebGLTexture=Oe.prototype.R,Oe.prototype.hasFloat32Array=Oe.prototype.ka,Oe.prototype.hasUint8Array=Oe.prototype.Fa;var Ff=250;function kn(...e){return e.map((([t,n])=>({start:t,end:n})))}const P3=(function(e){return class extends e{Ja(){this.i._registerModelResourcesGraphService()}}})((Of=class{constructor(e,t){this.l=!0,this.i=e,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",t!==void 0?this.i.canvas=t:dm()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(e){const t=await(await fetch(e)).arrayBuffer();e=!(e.endsWith(".pbtxt")||e.endsWith(".textproto")),this.setGraph(new Uint8Array(t),e)}setGraphFromString(e){this.setGraph(new TextEncoder().encode(e),!1)}setGraph(e,t){const n=e.length,i=this.i._malloc(n);this.i.HEAPU8.set(e,i),t?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(e,t,n,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Mt(this,i||"input_audio",(s=>{Mt(this,r=r||"audio_header",(o=>{this.i._configureAudio(s,o,e,t??0,n)}))}))}setAutoResizeCanvas(e){this.l=e}setAutoRenderToScreen(e){this.i._setAutoRenderToScreen(e)}setGpuBufferVerticalFlip(e){this.i.gpuOriginForWebTexturesIsBottomLeft=e}ca(e){Hn(this,"__graph_config__",(t=>{e(t)})),Mt(this,"__graph_config__",(t=>{this.i._getGraphConfig(t,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(e){this.i.errorListener=e}attachEmptyPacketListener(e,t){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[e]=t}addAudioToStream(e,t,n){this.addAudioToStreamWithShape(e,0,0,t,n)}addAudioToStreamWithShape(e,t,n,i,r){const s=4*e.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(e,this.g/4),Mt(this,i,(o=>{this.i._addAudioToInputStream(this.g,t,n,o,r)}))}addGpuBufferToStream(e,t,n){Mt(this,t,(i=>{const[r,s]=Lf(this,e,i);this.i._addBoundTextureToStream(i,r,s,n)}))}addBoolToStream(e,t,n){Mt(this,t,(i=>{this.i._addBoolToInputStream(e,i,n)}))}addDoubleToStream(e,t,n){Mt(this,t,(i=>{this.i._addDoubleToInputStream(e,i,n)}))}addFloatToStream(e,t,n){Mt(this,t,(i=>{this.i._addFloatToInputStream(e,i,n)}))}addIntToStream(e,t,n){Mt(this,t,(i=>{this.i._addIntToInputStream(e,i,n)}))}addUintToStream(e,t,n){Mt(this,t,(i=>{this.i._addUintToInputStream(e,i,n)}))}addStringToStream(e,t,n){Mt(this,t,(i=>{Mt(this,e,(r=>{this.i._addStringToInputStream(r,i,n)}))}))}addStringRecordToStream(e,t,n){Mt(this,t,(i=>{Df(this,Object.keys(e),(r=>{Df(this,Object.values(e),(s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(e).length,i,n)}))}))}))}addProtoToStream(e,t,n,i){Mt(this,n,(r=>{Mt(this,t,(s=>{const o=this.i._malloc(e.length);this.i.HEAPU8.set(e,o),this.i._addProtoToInputStream(o,e.length,s,r,i),this.i._free(o)}))}))}addEmptyPacketToStream(e,t){Mt(this,e,(n=>{this.i._addEmptyPacketToInputStream(n,t)}))}addBoolVectorToStream(e,t,n){Mt(this,t,(i=>{const r=this.i._allocateBoolVector(e.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of e)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,n)}))}addDoubleVectorToStream(e,t,n){Mt(this,t,(i=>{const r=this.i._allocateDoubleVector(e.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of e)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,n)}))}addFloatVectorToStream(e,t,n){Mt(this,t,(i=>{const r=this.i._allocateFloatVector(e.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of e)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,n)}))}addIntVectorToStream(e,t,n){Mt(this,t,(i=>{const r=this.i._allocateIntVector(e.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of e)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,n)}))}addUintVectorToStream(e,t,n){Mt(this,t,(i=>{const r=this.i._allocateUintVector(e.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of e)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,n)}))}addStringVectorToStream(e,t,n){Mt(this,t,(i=>{const r=this.i._allocateStringVector(e.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of e)Mt(this,s,(o=>{this.i._addStringVectorEntry(r,o)}));this.i._addStringVectorToInputStream(r,i,n)}))}addBoolToInputSidePacket(e,t){Mt(this,t,(n=>{this.i._addBoolToInputSidePacket(e,n)}))}addDoubleToInputSidePacket(e,t){Mt(this,t,(n=>{this.i._addDoubleToInputSidePacket(e,n)}))}addFloatToInputSidePacket(e,t){Mt(this,t,(n=>{this.i._addFloatToInputSidePacket(e,n)}))}addIntToInputSidePacket(e,t){Mt(this,t,(n=>{this.i._addIntToInputSidePacket(e,n)}))}addUintToInputSidePacket(e,t){Mt(this,t,(n=>{this.i._addUintToInputSidePacket(e,n)}))}addStringToInputSidePacket(e,t){Mt(this,t,(n=>{Mt(this,e,(i=>{this.i._addStringToInputSidePacket(i,n)}))}))}addProtoToInputSidePacket(e,t,n){Mt(this,n,(i=>{Mt(this,t,(r=>{const s=this.i._malloc(e.length);this.i.HEAPU8.set(e,s),this.i._addProtoToInputSidePacket(s,e.length,r,i),this.i._free(s)}))}))}addBoolVectorToInputSidePacket(e,t){Mt(this,t,(n=>{const i=this.i._allocateBoolVector(e.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of e)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,n)}))}addDoubleVectorToInputSidePacket(e,t){Mt(this,t,(n=>{const i=this.i._allocateDoubleVector(e.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of e)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,n)}))}addFloatVectorToInputSidePacket(e,t){Mt(this,t,(n=>{const i=this.i._allocateFloatVector(e.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of e)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,n)}))}addIntVectorToInputSidePacket(e,t){Mt(this,t,(n=>{const i=this.i._allocateIntVector(e.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of e)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,n)}))}addUintVectorToInputSidePacket(e,t){Mt(this,t,(n=>{const i=this.i._allocateUintVector(e.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of e)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,n)}))}addStringVectorToInputSidePacket(e,t){Mt(this,t,(n=>{const i=this.i._allocateStringVector(e.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of e)Mt(this,r,(s=>{this.i._addStringVectorEntry(i,s)}));this.i._addStringVectorToInputSidePacket(i,n)}))}attachBoolListener(e,t){Hn(this,e,t),Mt(this,e,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(e,t){Li(this,e,t),Mt(this,e,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(e,t){Hn(this,e,t),Mt(this,e,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(e,t){Li(this,e,t),Mt(this,e,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(e,t){Hn(this,e,t),Mt(this,e,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(e,t){Li(this,e,t),Mt(this,e,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(e,t){Hn(this,e,t),Mt(this,e,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(e,t){Li(this,e,t),Mt(this,e,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(e,t){Hn(this,e,t),Mt(this,e,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(e,t){Li(this,e,t),Mt(this,e,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(e,t){Hn(this,e,t),Mt(this,e,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(e,t){Li(this,e,t),Mt(this,e,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(e,t,n){Hn(this,e,t),Mt(this,e,(i=>{this.i._attachProtoListener(i,n||!1)}))}attachProtoVectorListener(e,t,n){Li(this,e,t),Mt(this,e,(i=>{this.i._attachProtoVectorListener(i,n||!1)}))}attachAudioListener(e,t,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Hn(this,e,((i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),t(i,r)})),Mt(this,e,(i=>{this.i._attachAudioListener(i,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends Of{get ga(){return this.i}pa(e,t,n){Mt(this,t,(i=>{const[r,s]=Lf(this,e,i);this.ga._addBoundTextureAsImageToStream(i,r,s,n)}))}Z(e,t){Hn(this,e,t),Mt(this,e,(n=>{this.ga._attachImageListener(n)}))}aa(e,t){Li(this,e,t),Mt(this,e,(n=>{this.ga._attachImageVectorListener(n)}))}}));var Of,zn=class extends P3{};async function Yt(e,t,n){return(async function(i,r,s,o){return b3(i,r,s,o)})(e,n.canvas??(dm()?void 0:document.createElement("canvas")),t,n)}function Sm(e,t,n,i){if(e.U){const s=new Vp;if(n!=null&&n.regionOfInterest){if(!e.oa)throw Error("This task doesn't support region-of-interest.");var r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");yt(s,1,(r.left+r.right)/2),yt(s,2,(r.top+r.bottom)/2),yt(s,4,r.right-r.left),yt(s,3,r.bottom-r.top)}else yt(s,1,.5),yt(s,2,.5),yt(s,4,1),yt(s,3,1);if(n!=null&&n.rotationDegrees){if((n==null?void 0:n.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(yt(s,5,-Math.PI*n.rotationDegrees/180),(n==null?void 0:n.rotationDegrees)%180!=0){const[o,a]=pm(t);n=Te(s,3)*a/o,r=Te(s,4)*o/a,yt(s,4,n),yt(s,3,r)}}e.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",e.U,i)}e.g.pa(t,e.X,i??performance.now()),e.finishProcessing()}function Gn(e,t,n){var i;if((i=e.baseOptions)!=null&&i.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");Sm(e,t,n,e.C+1)}function ii(e,t,n,i){var r;if(!((r=e.baseOptions)!=null&&r.g()))throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");Sm(e,t,n,i)}function cs(e,t,n,i){var r=t.data;const s=t.width,o=s*(t=t.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==o)throw Error("Unsupported channel count: "+r.length/o);return e=new Oe([r],n,!1,e.g.i.canvas,e.P,s,t),i?e.clone():e}var mn=class extends El{constructor(e,t,n,i){super(e),this.g=e,this.X=t,this.U=n,this.oa=i,this.P=new _m}l(e,t=!0){if("runningMode"in e&&ne(this.baseOptions,2,Xs(!!e.runningMode&&e.runningMode!=="IMAGE")),e.canvas!==void 0&&this.g.i.canvas!==e.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(e,t)}close(){this.P.close(),super.close()}};mn.prototype.close=mn.prototype.close;var Sn=class extends mn{constructor(e,t){super(new zn(e,t),"image_in","norm_rect_in",!1),this.j={detections:[]},At(e=this.h=new Pa,0,1,t=new Ee),yt(this.h,2,.5),yt(this.h,3,.3)}get baseOptions(){return Kt(this.h,Ee,1)}set baseOptions(e){At(this.h,0,1,e)}o(e){return"minDetectionConfidence"in e&&yt(this.h,2,e.minDetectionConfidence??.5),"minSuppressionThreshold"in e&&yt(this.h,3,e.minSuppressionThreshold??.3),this.l(e)}F(e,t){return this.j={detections:[]},Gn(this,e,t),this.j}G(e,t,n){return this.j={detections:[]},ii(this,e,n,t),this.j}m(){var e=new _n;xe(e,"image_in"),xe(e,"norm_rect_in"),$t(e,"detections");const t=new gn;ei(t,h3,this.h);const n=new nn;pn(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),de(n,"IMAGE:image_in"),de(n,"NORM_RECT:norm_rect_in"),Ht(n,"DETECTIONS:detections"),n.o(t),Cn(e,n),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=kp(s),this.j.detections.push(hm(i));ht(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{ht(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Sn.prototype.detectForVideo=Sn.prototype.G,Sn.prototype.detect=Sn.prototype.F,Sn.prototype.setOptions=Sn.prototype.o,Sn.createFromModelPath=async function(e,t){return Yt(Sn,e,{baseOptions:{modelAssetPath:t}})},Sn.createFromModelBuffer=function(e,t){return Yt(Sn,e,{baseOptions:{modelAssetBuffer:t}})},Sn.createFromOptions=function(e,t){return Yt(Sn,e,t)};var wu=kn([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Ru=kn([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Cu=kn([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),Em=kn([474,475],[475,476],[476,477],[477,474]),Pu=kn([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Lu=kn([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),ym=kn([469,470],[470,471],[471,472],[472,469]),Du=kn([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),Tm=[...wu,...Ru,...Cu,...Pu,...Lu,...Du],Am=kn([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Bf(e){e.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Se=class extends mn{constructor(e,t){super(new zn(e,t),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,At(e=this.h=new Yp,0,1,t=new Ee),this.A=new qp,At(this.h,0,3,this.A),this.u=new Pa,At(this.h,0,2,this.u),Si(this.u,4,1),yt(this.u,2,.5),yt(this.A,2,.5),yt(this.h,4,.5)}get baseOptions(){return Kt(this.h,Ee,1)}set baseOptions(e){At(this.h,0,1,e)}o(e){return"numFaces"in e&&Si(this.u,4,e.numFaces??1),"minFaceDetectionConfidence"in e&&yt(this.u,2,e.minFaceDetectionConfidence??.5),"minTrackingConfidence"in e&&yt(this.h,4,e.minTrackingConfidence??.5),"minFacePresenceConfidence"in e&&yt(this.A,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in e&&(this.outputFacialTransformationMatrixes=!!e.outputFacialTransformationMatrixes),this.l(e)}F(e,t){return Bf(this),Gn(this,e,t),this.j}G(e,t,n){return Bf(this),ii(this,e,n,t),this.j}m(){var e=new _n;xe(e,"image_in"),xe(e,"norm_rect"),$t(e,"face_landmarks");const t=new gn;ei(t,d3,this.h);const n=new nn;pn(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),de(n,"IMAGE:image_in"),de(n,"NORM_RECT:norm_rect"),Ht(n,"NORM_LANDMARKS:face_landmarks"),n.o(t),Cn(e,n),this.g.attachProtoVectorListener("face_landmarks",((i,r)=>{for(const s of i)i=so(s),this.j.faceLandmarks.push(La(i));ht(this,r)})),this.g.attachEmptyPacketListener("face_landmarks",(i=>{ht(this,i)})),this.outputFaceBlendshapes&&($t(e,"blendshapes"),Ht(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=Ca(s),this.j.faceBlendshapes.push(Tu(i.g()??[]));ht(this,r)})),this.g.attachEmptyPacketListener("blendshapes",(i=>{ht(this,i)}))),this.outputFacialTransformationMatrixes&&($t(e,"face_geometry"),Ht(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=Kt(i=f3(s),i3,2))&&this.j.facialTransformationMatrixes.push({rows:wn(i,1)??0??0,columns:wn(i,2)??0??0,data:sr(i,3,Kn,rr()).slice()??[]});ht(this,r)})),this.g.attachEmptyPacketListener("face_geometry",(i=>{ht(this,i)}))),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Se.prototype.detectForVideo=Se.prototype.G,Se.prototype.detect=Se.prototype.F,Se.prototype.setOptions=Se.prototype.o,Se.createFromModelPath=function(e,t){return Yt(Se,e,{baseOptions:{modelAssetPath:t}})},Se.createFromModelBuffer=function(e,t){return Yt(Se,e,{baseOptions:{modelAssetBuffer:t}})},Se.createFromOptions=function(e,t){return Yt(Se,e,t)},Se.FACE_LANDMARKS_LIPS=wu,Se.FACE_LANDMARKS_LEFT_EYE=Ru,Se.FACE_LANDMARKS_LEFT_EYEBROW=Cu,Se.FACE_LANDMARKS_LEFT_IRIS=Em,Se.FACE_LANDMARKS_RIGHT_EYE=Pu,Se.FACE_LANDMARKS_RIGHT_EYEBROW=Lu,Se.FACE_LANDMARKS_RIGHT_IRIS=ym,Se.FACE_LANDMARKS_FACE_OVAL=Du,Se.FACE_LANDMARKS_CONTOURS=Tm,Se.FACE_LANDMARKS_TESSELATION=Am;var Iu=kn([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function kf(e){e.gestures=[],e.landmarks=[],e.worldLandmarks=[],e.handedness=[]}function zf(e){return e.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:e.gestures,landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handedness:e.handedness,handednesses:e.handedness}}function Gf(e,t=!0){const n=[];for(const r of e){var i=Ca(r);e=[];for(const s of i.g())i=t&&wn(s,1)!=null?wn(s,1)??0:-1,e.push({score:Te(s,2)??0,index:i,categoryName:ke(ge(s,3))??""??"",displayName:ke(ge(s,4))??""??""});n.push(e)}return n}var an=class extends mn{constructor(e,t){super(new zn(e,t),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],At(e=this.j=new $p,0,1,t=new Ee),this.u=new Mu,At(this.j,0,2,this.u),this.D=new xu,At(this.u,0,3,this.D),this.A=new Kp,At(this.u,0,2,this.A),this.h=new p3,At(this.j,0,3,this.h),yt(this.A,2,.5),yt(this.u,4,.5),yt(this.D,2,.5)}get baseOptions(){return Kt(this.j,Ee,1)}set baseOptions(e){At(this.j,0,1,e)}o(e){var r,s,o,a;if(Si(this.A,3,e.numHands??1),"minHandDetectionConfidence"in e&&yt(this.A,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&yt(this.u,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&yt(this.D,2,e.minHandPresenceConfidence??.5),e.cannedGesturesClassifierOptions){var t=new Or,n=t,i=Sl(e.cannedGesturesClassifierOptions,(r=Kt(this.h,Or,3))==null?void 0:r.l());At(n,0,2,i),At(this.h,0,3,t)}else e.cannedGesturesClassifierOptions===void 0&&((s=Kt(this.h,Or,3))==null||s.g());return e.customGesturesClassifierOptions?(At(n=t=new Or,0,2,i=Sl(e.customGesturesClassifierOptions,(o=Kt(this.h,Or,4))==null?void 0:o.l())),At(this.h,0,4,t)):e.customGesturesClassifierOptions===void 0&&((a=Kt(this.h,Or,4))==null||a.g()),this.l(e)}Ha(e,t){return kf(this),Gn(this,e,t),zf(this)}Ia(e,t,n){return kf(this),ii(this,e,n,t),zf(this)}m(){var e=new _n;xe(e,"image_in"),xe(e,"norm_rect"),$t(e,"hand_gestures"),$t(e,"hand_landmarks"),$t(e,"world_hand_landmarks"),$t(e,"handedness");const t=new gn;ei(t,m3,this.j);const n=new nn;pn(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),de(n,"IMAGE:image_in"),de(n,"NORM_RECT:norm_rect"),Ht(n,"HAND_GESTURES:hand_gestures"),Ht(n,"LANDMARKS:hand_landmarks"),Ht(n,"WORLD_LANDMARKS:world_hand_landmarks"),Ht(n,"HANDEDNESS:handedness"),n.o(t),Cn(e,n),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i){i=so(s);const o=[];for(const a of Mi(i,Gp,1))o.push({x:Te(a,1)??0,y:Te(a,2)??0,z:Te(a,3)??0,visibility:Te(a,4)??0});this.landmarks.push(o)}ht(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{ht(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i){i=Xr(s);const o=[];for(const a of Mi(i,zp,1))o.push({x:Te(a,1)??0,y:Te(a,2)??0,z:Te(a,3)??0,visibility:Te(a,4)??0});this.worldLandmarks.push(o)}ht(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{ht(this,i)})),this.g.attachProtoVectorListener("hand_gestures",((i,r)=>{this.gestures.push(...Gf(i,!1)),ht(this,r)})),this.g.attachEmptyPacketListener("hand_gestures",(i=>{ht(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{this.handedness.push(...Gf(i)),ht(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{ht(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};function Vf(e){return{landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handednesses:e.handedness,handedness:e.handedness}}an.prototype.recognizeForVideo=an.prototype.Ia,an.prototype.recognize=an.prototype.Ha,an.prototype.setOptions=an.prototype.o,an.createFromModelPath=function(e,t){return Yt(an,e,{baseOptions:{modelAssetPath:t}})},an.createFromModelBuffer=function(e,t){return Yt(an,e,{baseOptions:{modelAssetBuffer:t}})},an.createFromOptions=function(e,t){return Yt(an,e,t)},an.HAND_CONNECTIONS=Iu;var Je=class extends mn{constructor(e,t){super(new zn(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],At(e=this.h=new Mu,0,1,t=new Ee),this.u=new xu,At(this.h,0,3,this.u),this.j=new Kp,At(this.h,0,2,this.j),Si(this.j,3,1),yt(this.j,2,.5),yt(this.u,2,.5),yt(this.h,4,.5)}get baseOptions(){return Kt(this.h,Ee,1)}set baseOptions(e){At(this.h,0,1,e)}o(e){return"numHands"in e&&Si(this.j,3,e.numHands??1),"minHandDetectionConfidence"in e&&yt(this.j,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&yt(this.h,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&yt(this.u,2,e.minHandPresenceConfidence??.5),this.l(e)}F(e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Gn(this,e,t),Vf(this)}G(e,t,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],ii(this,e,n,t),Vf(this)}m(){var e=new _n;xe(e,"image_in"),xe(e,"norm_rect"),$t(e,"hand_landmarks"),$t(e,"world_hand_landmarks"),$t(e,"handedness");const t=new gn;ei(t,g3,this.h);const n=new nn;pn(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),de(n,"IMAGE:image_in"),de(n,"NORM_RECT:norm_rect"),Ht(n,"LANDMARKS:hand_landmarks"),Ht(n,"WORLD_LANDMARKS:world_hand_landmarks"),Ht(n,"HANDEDNESS:handedness"),n.o(t),Cn(e,n),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i)i=so(s),this.landmarks.push(La(i));ht(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{ht(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i)i=Xr(s),this.worldLandmarks.push(Gs(i));ht(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{ht(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{var s=this.handedness,o=s.push;const a=[];for(const c of i){i=Ca(c);const l=[];for(const u of i.g())l.push({score:Te(u,2)??0,index:wn(u,1)??0??-1,categoryName:ke(ge(u,3))??""??"",displayName:ke(ge(u,4))??""??""});a.push(l)}o.call(s,...a),ht(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{ht(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Je.prototype.detectForVideo=Je.prototype.G,Je.prototype.detect=Je.prototype.F,Je.prototype.setOptions=Je.prototype.o,Je.createFromModelPath=function(e,t){return Yt(Je,e,{baseOptions:{modelAssetPath:t}})},Je.createFromModelBuffer=function(e,t){return Yt(Je,e,{baseOptions:{modelAssetBuffer:t}})},Je.createFromOptions=function(e,t){return Yt(Je,e,t)},Je.HAND_CONNECTIONS=Iu;var bm=kn([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function Hf(e){e.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Wf(e){try{if(!e.D)return e.h;e.D(e.h)}finally{Ia(e)}}function ko(e,t){e=so(e),t.push(La(e))}var he=class extends mn{constructor(e,t){super(new zn(e,t),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,At(e=this.j=new em,0,1,t=new Ee),this.I=new xu,At(this.j,0,2,this.I),this.W=new _3,At(this.j,0,3,this.W),this.u=new Pa,At(this.j,0,4,this.u),this.O=new qp,At(this.j,0,5,this.O),this.A=new Qp,At(this.j,0,6,this.A),this.M=new tm,At(this.j,0,7,this.M),yt(this.u,2,.5),yt(this.u,3,.3),yt(this.O,2,.5),yt(this.A,2,.5),yt(this.A,3,.3),yt(this.M,2,.5),yt(this.I,2,.5)}get baseOptions(){return Kt(this.j,Ee,1)}set baseOptions(e){At(this.j,0,1,e)}o(e){return"minFaceDetectionConfidence"in e&&yt(this.u,2,e.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in e&&yt(this.u,3,e.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in e&&yt(this.O,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"minPoseDetectionConfidence"in e&&yt(this.A,2,e.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in e&&yt(this.A,3,e.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in e&&yt(this.M,2,e.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in e&&(this.outputPoseSegmentationMasks=!!e.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in e&&yt(this.I,2,e.minHandLandmarksConfidence??.5),this.l(e)}F(e,t,n){const i=typeof t!="function"?t:{};return this.D=typeof t=="function"?t:n,Hf(this),Gn(this,e,i),Wf(this)}G(e,t,n,i){const r=typeof n!="function"?n:{};return this.D=typeof n=="function"?n:i,Hf(this),ii(this,e,r,t),Wf(this)}m(){var e=new _n;xe(e,"input_frames_image"),$t(e,"pose_landmarks"),$t(e,"pose_world_landmarks"),$t(e,"face_landmarks"),$t(e,"left_hand_landmarks"),$t(e,"left_hand_world_landmarks"),$t(e,"right_hand_landmarks"),$t(e,"right_hand_world_landmarks");const t=new gn,n=new pf;pn(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(r,s){if(s!=null)if(Array.isArray(s))ne(r,2,_a(s,0,qs));else{if(!(typeof s=="string"||s instanceof Zn||kl(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Di(r,2,Gl(s,!1),dr())}})(n,this.j.g());const i=new nn;pn(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),eu(i,8,pf,n),de(i,"IMAGE:input_frames_image"),Ht(i,"POSE_LANDMARKS:pose_landmarks"),Ht(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),Ht(i,"FACE_LANDMARKS:face_landmarks"),Ht(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),Ht(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),Ht(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),Ht(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(t),Cn(e,i),Da(this,e),this.g.attachProtoListener("pose_landmarks",((r,s)=>{ko(r,this.h.poseLandmarks),ht(this,s)})),this.g.attachEmptyPacketListener("pose_landmarks",(r=>{ht(this,r)})),this.g.attachProtoListener("pose_world_landmarks",((r,s)=>{var o=this.h.poseWorldLandmarks;r=Xr(r),o.push(Gs(r)),ht(this,s)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(r=>{ht(this,r)})),this.outputPoseSegmentationMasks&&(Ht(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),os(this,"pose_segmentation_mask"),this.g.Z("pose_segmentation_mask",((r,s)=>{this.h.poseSegmentationMasks=[cs(this,r,!0,!this.D)],ht(this,s)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(r=>{this.h.poseSegmentationMasks=[],ht(this,r)}))),this.g.attachProtoListener("face_landmarks",((r,s)=>{ko(r,this.h.faceLandmarks),ht(this,s)})),this.g.attachEmptyPacketListener("face_landmarks",(r=>{ht(this,r)})),this.outputFaceBlendshapes&&($t(e,"extra_blendshapes"),Ht(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((r,s)=>{var o=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=Ca(r),o.push(Tu(r.g()??[]))),ht(this,s)})),this.g.attachEmptyPacketListener("extra_blendshapes",(r=>{ht(this,r)}))),this.g.attachProtoListener("left_hand_landmarks",((r,s)=>{ko(r,this.h.leftHandLandmarks),ht(this,s)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(r=>{ht(this,r)})),this.g.attachProtoListener("left_hand_world_landmarks",((r,s)=>{var o=this.h.leftHandWorldLandmarks;r=Xr(r),o.push(Gs(r)),ht(this,s)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(r=>{ht(this,r)})),this.g.attachProtoListener("right_hand_landmarks",((r,s)=>{ko(r,this.h.rightHandLandmarks),ht(this,s)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(r=>{ht(this,r)})),this.g.attachProtoListener("right_hand_world_landmarks",((r,s)=>{var o=this.h.rightHandWorldLandmarks;r=Xr(r),o.push(Gs(r)),ht(this,s)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(r=>{ht(this,r)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};he.prototype.detectForVideo=he.prototype.G,he.prototype.detect=he.prototype.F,he.prototype.setOptions=he.prototype.o,he.createFromModelPath=function(e,t){return Yt(he,e,{baseOptions:{modelAssetPath:t}})},he.createFromModelBuffer=function(e,t){return Yt(he,e,{baseOptions:{modelAssetBuffer:t}})},he.createFromOptions=function(e,t){return Yt(he,e,t)},he.HAND_CONNECTIONS=Iu,he.POSE_CONNECTIONS=bm,he.FACE_LANDMARKS_LIPS=wu,he.FACE_LANDMARKS_LEFT_EYE=Ru,he.FACE_LANDMARKS_LEFT_EYEBROW=Cu,he.FACE_LANDMARKS_LEFT_IRIS=Em,he.FACE_LANDMARKS_RIGHT_EYE=Pu,he.FACE_LANDMARKS_RIGHT_EYEBROW=Lu,he.FACE_LANDMARKS_RIGHT_IRIS=ym,he.FACE_LANDMARKS_FACE_OVAL=Du,he.FACE_LANDMARKS_CONTOURS=Tm,he.FACE_LANDMARKS_TESSELATION=Am;var En=class extends mn{constructor(e,t){super(new zn(e,t),"input_image","norm_rect",!0),this.j={classifications:[]},At(e=this.h=new nm,0,1,t=new Ee)}get baseOptions(){return Kt(this.h,Ee,1)}set baseOptions(e){At(this.h,0,1,e)}o(e){return At(this.h,0,2,Sl(e,Kt(this.h,_u,2))),this.l(e)}sa(e,t){return this.j={classifications:[]},Gn(this,e,t),this.j}ta(e,t,n){return this.j={classifications:[]},ii(this,e,n,t),this.j}m(){var e=new _n;xe(e,"input_image"),xe(e,"norm_rect"),$t(e,"classifications");const t=new gn;ei(t,v3,this.h);const n=new nn;pn(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),de(n,"IMAGE:input_image"),de(n,"NORM_RECT:norm_rect"),Ht(n,"CLASSIFICATIONS:classifications"),n.o(t),Cn(e,n),this.g.attachProtoListener("classifications",((i,r)=>{this.j=T3(o3(i)),ht(this,r)})),this.g.attachEmptyPacketListener("classifications",(i=>{ht(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};En.prototype.classifyForVideo=En.prototype.ta,En.prototype.classify=En.prototype.sa,En.prototype.setOptions=En.prototype.o,En.createFromModelPath=function(e,t){return Yt(En,e,{baseOptions:{modelAssetPath:t}})},En.createFromModelBuffer=function(e,t){return Yt(En,e,{baseOptions:{modelAssetBuffer:t}})},En.createFromOptions=function(e,t){return Yt(En,e,t)};var cn=class extends mn{constructor(e,t){super(new zn(e,t),"image_in","norm_rect",!0),this.h=new im,this.embeddings={embeddings:[]},At(e=this.h,0,1,t=new Ee)}get baseOptions(){return Kt(this.h,Ee,1)}set baseOptions(e){At(this.h,0,1,e)}o(e){var t=this.h,n=Kt(this.h,yf,2);return n=n?n.clone():new yf,e.l2Normalize!==void 0?ne(n,1,Xs(e.l2Normalize)):"l2Normalize"in e&&ne(n,1),e.quantize!==void 0?ne(n,2,Xs(e.quantize)):"quantize"in e&&ne(n,2),At(t,0,2,n),this.l(e)}za(e,t){return Gn(this,e,t),this.embeddings}Aa(e,t,n){return ii(this,e,n,t),this.embeddings}m(){var e=new _n;xe(e,"image_in"),xe(e,"norm_rect"),$t(e,"embeddings_out");const t=new gn;ei(t,x3,this.h);const n=new nn;pn(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),de(n,"IMAGE:image_in"),de(n,"NORM_RECT:norm_rect"),Ht(n,"EMBEDDINGS:embeddings_out"),n.o(t),Cn(e,n),this.g.attachProtoListener("embeddings_out",((i,r)=>{i=l3(i),this.embeddings=(function(s){return{embeddings:Mi(s,c3,1).map((o=>{var l,u;const a={headIndex:wn(o,3)??0??-1,headName:ke(ge(o,4))??""??""};var c=o.v;return tp(c,0|c[_t],Ef,mc(o,1))!==void 0?(o=sr(o=Kt(o,Ef,mc(o,1),void 0),1,Kn,rr()),a.floatEmbedding=o.slice()):(c=new Uint8Array(0),a.quantizedEmbedding=((u=(l=Kt(o,a3,mc(o,2),void 0))==null?void 0:l.na())==null?void 0:u.h())??c),a})),timestampMs:um(ge(s,2,void 0,void 0,$o)??Kd)}})(i),ht(this,r)})),this.g.attachEmptyPacketListener("embeddings_out",(i=>{ht(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};cn.cosineSimilarity=function(e,t){if(e.floatEmbedding&&t.floatEmbedding)e=Cf(e.floatEmbedding,t.floatEmbedding);else{if(!e.quantizedEmbedding||!t.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");e=Cf(Rf(e.quantizedEmbedding),Rf(t.quantizedEmbedding))}return e},cn.prototype.embedForVideo=cn.prototype.Aa,cn.prototype.embed=cn.prototype.za,cn.prototype.setOptions=cn.prototype.o,cn.createFromModelPath=function(e,t){return Yt(cn,e,{baseOptions:{modelAssetPath:t}})},cn.createFromModelBuffer=function(e,t){return Yt(cn,e,{baseOptions:{modelAssetBuffer:t}})},cn.createFromOptions=function(e,t){return Yt(cn,e,t)};var Al=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){var e,t;(e=this.confidenceMasks)==null||e.forEach((n=>{n.close()})),(t=this.categoryMask)==null||t.close()}};function L3(e){var n,i;const t=(function(r){return Mi(r,nn,1)})(e.ca()).filter((r=>(ke(ge(r,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(e.u=[],t.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");t.length===1&&(((i=(n=Kt(t[0],gn,7))==null?void 0:n.j())==null?void 0:i.g())??new Map).forEach(((r,s)=>{e.u[Number(s)]=ke(ge(r,1))??""}))}function Xf(e){e.categoryMask=void 0,e.confidenceMasks=void 0,e.qualityScores=void 0}function qf(e){try{const t=new Al(e.confidenceMasks,e.categoryMask,e.qualityScores);if(!e.j)return t;e.j(t)}finally{Ia(e)}}Al.prototype.close=Al.prototype.close;var Ze=class extends mn{constructor(e,t){super(new zn(e,t),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new yu,this.A=new rm,At(this.h,0,3,this.A),At(e=this.h,0,1,t=new Ee)}get baseOptions(){return Kt(this.h,Ee,1)}set baseOptions(e){At(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?ne(this.h,2,no(e.displayNamesLocale)):"displayNamesLocale"in e&&ne(this.h,2),"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}L(){L3(this)}segment(e,t,n){const i=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:n,Xf(this),Gn(this,e,i),qf(this)}La(e,t,n,i){const r=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,Xf(this),ii(this,e,r,t),qf(this)}Da(){return this.u}m(){var e=new _n;xe(e,"image_in"),xe(e,"norm_rect");const t=new gn;ei(t,om,this.h);const n=new nn;pn(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),de(n,"IMAGE:image_in"),de(n,"NORM_RECT:norm_rect"),n.o(t),Cn(e,n),Da(this,e),this.outputConfidenceMasks&&($t(e,"confidence_masks"),Ht(n,"CONFIDENCE_MASKS:confidence_masks"),os(this,"confidence_masks"),this.g.aa("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>cs(this,s,!0,!this.j))),ht(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],ht(this,i)}))),this.outputCategoryMask&&($t(e,"category_mask"),Ht(n,"CATEGORY_MASK:category_mask"),os(this,"category_mask"),this.g.Z("category_mask",((i,r)=>{this.categoryMask=cs(this,i,!1,!this.j),ht(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,ht(this,i)}))),$t(e,"quality_scores"),Ht(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,ht(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,ht(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Ze.prototype.getLabels=Ze.prototype.Da,Ze.prototype.segmentForVideo=Ze.prototype.La,Ze.prototype.segment=Ze.prototype.segment,Ze.prototype.setOptions=Ze.prototype.o,Ze.createFromModelPath=function(e,t){return Yt(Ze,e,{baseOptions:{modelAssetPath:t}})},Ze.createFromModelBuffer=function(e,t){return Yt(Ze,e,{baseOptions:{modelAssetBuffer:t}})},Ze.createFromOptions=function(e,t){return Yt(Ze,e,t)};var bl=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){var e,t;(e=this.confidenceMasks)==null||e.forEach((n=>{n.close()})),(t=this.categoryMask)==null||t.close()}};bl.prototype.close=bl.prototype.close;var Wn=class extends mn{constructor(e,t){super(new zn(e,t),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new yu,this.u=new rm,At(this.h,0,3,this.u),At(e=this.h,0,1,t=new Ee)}get baseOptions(){return Kt(this.h,Ee,1)}set baseOptions(e){At(this.h,0,1,e)}o(e){return"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}segment(e,t,n,i){const r=typeof n!="function"?n:{};if(this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.C+1,i=new am,t.keypoint&&t.scribble)throw Error("Cannot provide both keypoint and scribble.");if(t.keypoint){var s=new xc;Di(s,3,Xs(!0),!1),Di(s,1,Bs(t.keypoint.x),0),Di(s,2,Bs(t.keypoint.y),0),ks(i,1,Ml,s)}else{if(!t.scribble)throw Error("Must provide either a keypoint or a scribble.");{const a=new S3;for(s of t.scribble)Di(t=new xc,3,Xs(!0),!1),Di(t,1,Bs(s.x),0),Di(t,2,Bs(s.y),0),eu(a,1,xc,t);ks(i,2,Ml,a)}}this.g.addProtoToStream(i.g(),"mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest","roi_in",n),Gn(this,e,r);t:{try{const a=new bl(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var o=a;break t}this.j(a)}finally{Ia(this)}o=void 0}return o}m(){var e=new _n;xe(e,"image_in"),xe(e,"roi_in"),xe(e,"norm_rect_in");const t=new gn;ei(t,om,this.h);const n=new nn;pn(n,2,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"),de(n,"IMAGE:image_in"),de(n,"ROI:roi_in"),de(n,"NORM_RECT:norm_rect_in"),n.o(t),Cn(e,n),Da(this,e),this.outputConfidenceMasks&&($t(e,"confidence_masks"),Ht(n,"CONFIDENCE_MASKS:confidence_masks"),os(this,"confidence_masks"),this.g.aa("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>cs(this,s,!0,!this.j))),ht(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],ht(this,i)}))),this.outputCategoryMask&&($t(e,"category_mask"),Ht(n,"CATEGORY_MASK:category_mask"),os(this,"category_mask"),this.g.Z("category_mask",((i,r)=>{this.categoryMask=cs(this,i,!1,!this.j),ht(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,ht(this,i)}))),$t(e,"quality_scores"),Ht(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,ht(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,ht(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Wn.prototype.segment=Wn.prototype.segment,Wn.prototype.setOptions=Wn.prototype.o,Wn.createFromModelPath=function(e,t){return Yt(Wn,e,{baseOptions:{modelAssetPath:t}})},Wn.createFromModelBuffer=function(e,t){return Yt(Wn,e,{baseOptions:{modelAssetBuffer:t}})},Wn.createFromOptions=function(e,t){return Yt(Wn,e,t)};var yn=class extends mn{constructor(e,t){super(new zn(e,t),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},At(e=this.h=new cm,0,1,t=new Ee)}get baseOptions(){return Kt(this.h,Ee,1)}set baseOptions(e){At(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?ne(this.h,2,no(e.displayNamesLocale)):"displayNamesLocale"in e&&ne(this.h,2),e.maxResults!==void 0?Si(this.h,3,e.maxResults):"maxResults"in e&&ne(this.h,3),e.scoreThreshold!==void 0?yt(this.h,4,e.scoreThreshold):"scoreThreshold"in e&&ne(this.h,4),e.categoryAllowlist!==void 0?Jo(this.h,5,e.categoryAllowlist):"categoryAllowlist"in e&&ne(this.h,5),e.categoryDenylist!==void 0?Jo(this.h,6,e.categoryDenylist):"categoryDenylist"in e&&ne(this.h,6),this.l(e)}F(e,t){return this.j={detections:[]},Gn(this,e,t),this.j}G(e,t,n){return this.j={detections:[]},ii(this,e,n,t),this.j}m(){var e=new _n;xe(e,"input_frame_gpu"),xe(e,"norm_rect"),$t(e,"detections");const t=new gn;ei(t,E3,this.h);const n=new nn;pn(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),de(n,"IMAGE:input_frame_gpu"),de(n,"NORM_RECT:norm_rect"),Ht(n,"DETECTIONS:detections"),n.o(t),Cn(e,n),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=kp(s),this.j.detections.push(hm(i));ht(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{ht(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};yn.prototype.detectForVideo=yn.prototype.G,yn.prototype.detect=yn.prototype.F,yn.prototype.setOptions=yn.prototype.o,yn.createFromModelPath=async function(e,t){return Yt(yn,e,{baseOptions:{modelAssetPath:t}})},yn.createFromModelBuffer=function(e,t){return Yt(yn,e,{baseOptions:{modelAssetBuffer:t}})},yn.createFromOptions=function(e,t){return Yt(yn,e,t)};var wl=class{constructor(e,t,n){this.landmarks=e,this.worldLandmarks=t,this.segmentationMasks=n}close(){var e;(e=this.segmentationMasks)==null||e.forEach((t=>{t.close()}))}};function Yf(e){e.landmarks=[],e.worldLandmarks=[],e.segmentationMasks=void 0}function jf(e){try{const t=new wl(e.landmarks,e.worldLandmarks,e.segmentationMasks);if(!e.u)return t;e.u(t)}finally{Ia(e)}}wl.prototype.close=wl.prototype.close;var ln=class extends mn{constructor(e,t){super(new zn(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,At(e=this.h=new lm,0,1,t=new Ee),this.A=new tm,At(this.h,0,3,this.A),this.j=new Qp,At(this.h,0,2,this.j),Si(this.j,4,1),yt(this.j,2,.5),yt(this.A,2,.5),yt(this.h,4,.5)}get baseOptions(){return Kt(this.h,Ee,1)}set baseOptions(e){At(this.h,0,1,e)}o(e){return"numPoses"in e&&Si(this.j,4,e.numPoses??1),"minPoseDetectionConfidence"in e&&yt(this.j,2,e.minPoseDetectionConfidence??.5),"minTrackingConfidence"in e&&yt(this.h,4,e.minTrackingConfidence??.5),"minPosePresenceConfidence"in e&&yt(this.A,2,e.minPosePresenceConfidence??.5),"outputSegmentationMasks"in e&&(this.outputSegmentationMasks=e.outputSegmentationMasks??!1),this.l(e)}F(e,t,n){const i=typeof t!="function"?t:{};return this.u=typeof t=="function"?t:n,Yf(this),Gn(this,e,i),jf(this)}G(e,t,n,i){const r=typeof n!="function"?n:{};return this.u=typeof n=="function"?n:i,Yf(this),ii(this,e,r,t),jf(this)}m(){var e=new _n;xe(e,"image_in"),xe(e,"norm_rect"),$t(e,"normalized_landmarks"),$t(e,"world_landmarks"),$t(e,"segmentation_masks");const t=new gn;ei(t,y3,this.h);const n=new nn;pn(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),de(n,"IMAGE:image_in"),de(n,"NORM_RECT:norm_rect"),Ht(n,"NORM_LANDMARKS:normalized_landmarks"),Ht(n,"WORLD_LANDMARKS:world_landmarks"),n.o(t),Cn(e,n),Da(this,e),this.g.attachProtoVectorListener("normalized_landmarks",((i,r)=>{this.landmarks=[];for(const s of i)i=so(s),this.landmarks.push(La(i));ht(this,r)})),this.g.attachEmptyPacketListener("normalized_landmarks",(i=>{this.landmarks=[],ht(this,i)})),this.g.attachProtoVectorListener("world_landmarks",((i,r)=>{this.worldLandmarks=[];for(const s of i)i=Xr(s),this.worldLandmarks.push(Gs(i));ht(this,r)})),this.g.attachEmptyPacketListener("world_landmarks",(i=>{this.worldLandmarks=[],ht(this,i)})),this.outputSegmentationMasks&&(Ht(n,"SEGMENTATION_MASK:segmentation_masks"),os(this,"segmentation_masks"),this.g.aa("segmentation_masks",((i,r)=>{this.segmentationMasks=i.map((s=>cs(this,s,!0,!this.u))),ht(this,r)})),this.g.attachEmptyPacketListener("segmentation_masks",(i=>{this.segmentationMasks=[],ht(this,i)}))),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};ln.prototype.detectForVideo=ln.prototype.G,ln.prototype.detect=ln.prototype.F,ln.prototype.setOptions=ln.prototype.o,ln.createFromModelPath=function(e,t){return Yt(ln,e,{baseOptions:{modelAssetPath:t}})},ln.createFromModelBuffer=function(e,t){return Yt(ln,e,{baseOptions:{modelAssetBuffer:t}})},ln.createFromOptions=function(e,t){return Yt(ln,e,t)},ln.POSE_CONNECTIONS=bm;class D3{constructor(t){this.video=t,this.landmarker=null,this.stream=null,this.running=!1,this.handDetected=!1,this.fingerCount=0,this.currentMode="dust",this.noteIndex=-1,this.gestureResult=null}async init(){const t=await Br.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.18/wasm");this.landmarker=await Je.createFromOptions(t,{baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",delegate:"GPU"},runningMode:"VIDEO",numHands:1}),this.stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:1280},height:{ideal:720}},audio:!1}),this.video.srcObject=this.stream,await this.video.play(),this.running=!0}update(){var n,i,r,s;if(!this.running||!this.landmarker||this.video.readyState<2)return;const t=this.landmarker.detectForVideo(this.video,performance.now());if((n=t.landmarks)!=null&&n.length){this.handDetected=!0;const o=t.landmarks[0],a=((s=(r=(i=t.handedness)==null?void 0:i[0])==null?void 0:r[0])==null?void 0:s.categoryName)??"Right";this.gestureResult=Gv(o,a),this.fingerCount=this.gestureResult.fingerCount,this.currentMode=this.gestureResult.mode,this.noteIndex=this.gestureResult.noteIndex}else this.handDetected=!1,this.fingerCount=0,this.currentMode="dust",this.noteIndex=-1,this.gestureResult={mode:"dust",noteIndex:-1,fingerCount:0}}getStatusText(){return Hv(this.gestureResult)}getNoteLabel(){return this.noteIndex<0?"—":ua[this.noteIndex].label}dispose(){var t;if(this.running=!1,this.stream)for(const n of this.stream.getTracks())n.stop();(t=this.landmarker)==null||t.close()}}class I3{constructor(){this.ctx=null,this.master=null,this.active=new Map,this.lastNoteIndex=-1,this.enabled=!1}async unlock(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.35,this.master.connect(this.ctx.destination)}this.ctx.state==="suspended"&&await this.ctx.resume(),this.enabled=!0}midiToFreq(t){return 440*Math.pow(2,(t-69)/12)}updateNote(t){!this.enabled||!this.ctx||t!==this.lastNoteIndex&&(this.lastNoteIndex>=0&&this.releaseNote(this.lastNoteIndex),this.lastNoteIndex=t,t>=0&&this.playNote(t))}playNote(t){const n=ua[t],i=this.ctx.currentTime,r=this.midiToFreq(n.midi),s=this.ctx.createOscillator(),o=this.ctx.createOscillator();s.type="triangle",o.type="sine",s.frequency.value=r,o.frequency.value=r*2;const a=this.ctx.createGain();a.gain.setValueAtTime(0,i),a.gain.linearRampToValueAtTime(.22,i+.02),a.gain.setValueAtTime(.18,i+.15),a.gain.exponentialRampToValueAtTime(.001,i+.9),s.connect(a),o.connect(a),a.connect(this.master),s.start(i),o.start(i),s.stop(i+.95),o.stop(i+.95),this.active.set(t,{osc1:s,osc2:o,gain:a,stopAt:i+.95})}releaseNote(t){const n=this.active.get(t);if(!n||!this.ctx)return;const i=this.ctx.currentTime;try{n.gain.gain.cancelScheduledValues(i),n.gain.gain.setValueAtTime(n.gain.gain.value,i),n.gain.gain.exponentialRampToValueAtTime(.001,i+.08),n.osc1.stop(i+.1),n.osc2.stop(i+.1)}catch{}this.active.delete(t)}dispose(){for(const t of[...this.active.keys()])this.releaseNote(t);this.lastNoteIndex=-1,this.ctx&&(this.ctx.close(),this.ctx=null)}}const U3=document.getElementById("galaxy-canvas"),N3=document.getElementById("webcam"),wm=document.getElementById("loading"),F3=document.getElementById("gesture-label"),O3=document.getElementById("note-label"),Sc=document.getElementById("hud"),Ec=document.getElementById("hud-toggle"),Rl=new I3;Ec.addEventListener("click",()=>{Sc.classList.toggle("minimized"),Ec.textContent=Sc.classList.contains("minimized")?"+":"−",Ec.setAttribute("aria-label",Sc.classList.contains("minimized")?"Expand panel":"Minimize panel")});document.body.addEventListener("click",()=>{Rl.unlock()},{once:!0});async function B3(){const{scene:e,camera:t,renderer:n}=Yv(U3),i=new jv(e),r=new D3(N3);let s="",o=-2;function a(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",a),await r.init(),wm.classList.add("hidden"),i.setMode("dust",-1,!0),s="dust",o=-1;const c={last:performance.now()};function l(u){requestAnimationFrame(l);const f=Math.min((u-c.last)/1e3,.05);c.last=u,r.update();const d=r.currentMode,m=r.noteIndex;(d!==s||m!==o)&&(i.setMode(d,m),Rl.updateNote(m),s=d,o=m),F3.textContent=r.getStatusText(),O3.textContent=r.getNoteLabel(),i.update(u,f),n.render(e,t)}requestAnimationFrame(l),window.addEventListener("beforeunload",()=>{r.dispose(),i.dispose(),Rl.dispose(),n.dispose()})}B3().catch(e=>{console.error(e),wm.textContent="Could not start camera or hand tracking."});
