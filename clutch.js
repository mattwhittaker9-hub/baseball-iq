// Diamond IQ — Clutch Mode Engine v1.0
(function() {
  'use strict';
  const LEVEL_ORDER=['foundation','development','competitive','elite'];
  const LEVEL_LABELS={foundation:{name:'Foundation',next:'Development',emoji:'⚾'},development:{name:'Development',next:'Competitive',emoji:'🥎'},competitive:{name:'Competitive',next:'Elite',emoji:'🏆'},elite:{name:'Elite',next:null,emoji:'💎'}};
  const MIN_Q=15,CLUTCH_T=0.72,PROMOTE_T=0.80,DEMOTE_T=0.55,CLUTCH_QC=3;
  const SB_URL='https://kcisieenoznaorioagqq.supabase.co';
  const SB_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjaXNpZWVub3puYW9yaW9hZ3FxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2MzI2MTQsImV4cCI6MjA5MDIwODYxNH0.yGa1Mc9N1X1tmnQvVy7arTQSZT8w0YJn_wNNEW0mQDg';

  const CM={active:false,gauntletQ:0,gauntletOk:0,levelSeen:0,levelOk:0,currentLevel:null,vignetteEl:null};

  function getPlayerLevel(){try{const cu=window.currentUser;if(cu&&cu.effective_level)return cu.effective_level;if(cu&&cu.age){if(cu.age<=12)return 'foundation';if(cu.age<=15)return 'development';if(cu.age<=18)return 'competitive';return 'elite';}}catch(e){}return 'competitive';}

  function haptic(p){try{if(navigator.vibrate)navigator.vibrate(p);}catch(e){}}

  function injectCSS(){
    const s=document.createElement('style');
    s.textContent=`
.clutch-vignette{position:fixed;inset:0;pointer-events:none;z-index:500;opacity:0;transition:opacity 0.8s ease;}
.clutch-vignette.active{opacity:1;background:radial-gradient(ellipse at center,transparent 35%,rgba(160,20,20,0.5) 100%);animation:vignettePulse 1.8s ease-in-out infinite;}
@keyframes vignettePulse{0%,100%{opacity:0.65}50%{opacity:1}}
.clutch-scoreboard{display:none;background:linear-gradient(135deg,#0d0a14,#14080a);border:1px solid rgba(200,50,50,0.5);border-radius:10px;padding:10px 16px 8px;margin:0 0 10px;text-align:center;animation:sbIn 0.4s ease both;}
.clutch-scoreboard.show{display:block;}
@keyframes sbIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}
.clutch-sb-inning{font-family:'Barlow Condensed',sans-serif;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#e05050;font-weight:700;}
.clutch-sb-score{font-family:'Barlow Condensed',sans-serif;font-size:20px;font-weight:900;color:#fff;letter-spacing:1px;margin:4px 0 2px;}
.clutch-sb-sub{font-size:10px;color:#7a8fa8;letter-spacing:1px;}
.clutch-sb-dots{display:flex;gap:6px;justify-content:center;margin-top:6px;}
.clutch-sb-dot{width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,0.15);}
.clutch-sb-dot.ok{background:#3ecf82;}
.clutch-sb-dot.bad{background:#e05050;}
.clutch-sb-dot.now{background:#c8a84b;animation:dotPulse 0.8s ease-in-out infinite;}
@keyframes dotPulse{0%,100%{opacity:0.6;transform:scale(0.9)}50%{opacity:1;transform:scale(1.2)}}
.clutch-pressure-wrap{padding:0 16px;margin-bottom:4px;}
.clutch-pressure-bar{height:3px;background:rgba(255,255,255,0.08);border-radius:2px;overflow:hidden;}
.clutch-pressure-fill{height:100%;border-radius:2px;background:linear-gradient(90deg,#c8a84b,#e05050);transition:width 0.6s ease;width:0%;}
.clutch-pressure-label{font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#c8a84b;text-align:right;margin-top:3px;opacity:0;transition:opacity 0.3s;}
.clutch-pressure-label.show{opacity:1;}
.clutch-card-pulse{animation:cPulse 1.6s ease-in-out infinite;}
@keyframes cPulse{0%,100%{box-shadow:0 0 0 0 rgba(200,50,50,0)}50%{box-shadow:0 0 0 6px rgba(200,50,50,0.15)}}
.levelup-overlay{position:fixed;inset:0;z-index:900;background:linear-gradient(135deg,rgba(5,9,16,0.97),rgba(10,14,24,0.97));display:flex;flex-direction:column;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity 0.4s ease;padding:32px;}
.levelup-overlay.show{opacity:1;pointer-events:all;}
.levelup-trophy{font-size:72px;display:block;text-align:center;margin-bottom:8px;animation:luPop 0.6s cubic-bezier(0.34,1.56,0.64,1) both;}
@keyframes luPop{0%{transform:scale(0) rotate(-20deg);opacity:0}100%{transform:scale(1) rotate(0deg);opacity:1}}
.levelup-title{font-family:'Barlow Condensed',sans-serif;font-size:42px;font-weight:900;letter-spacing:6px;text-transform:uppercase;color:#c8a84b;margin:0 0 4px;text-align:center;}
.levelup-sub{font-family:'Barlow Condensed',sans-serif;font-size:13px;letter-spacing:3px;text-transform:uppercase;color:#7a8fa8;margin-bottom:28px;text-align:center;}
.levelup-badge{background:linear-gradient(135deg,rgba(200,168,75,0.12),rgba(200,168,75,0.04));border:1px solid rgba(200,168,75,0.35);border-radius:14px;padding:18px 36px;text-align:center;margin-bottom:36px;width:100%;max-width:280px;}
.levelup-badge-name{font-family:'Barlow Condensed',sans-serif;font-size:26px;font-weight:700;color:#fff;letter-spacing:3px;text-transform:uppercase;}
.levelup-badge-sub{font-size:11px;color:#c8a84b;letter-spacing:2px;text-transform:uppercase;margin-top:5px;}
.levelup-btn{background:#c8a84b;color:#0a1628;border:none;padding:14px 40px;border-radius:8px;font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;letter-spacing:2px;text-transform:uppercase;cursor:pointer;}
    `;
    document.head.appendChild(s);
  }

  function injectHTML(){
    const v=document.createElement('div');v.className='clutch-vignette';v.id='clutch-vignette';document.body.appendChild(v);CM.vignetteEl=v;
    const lu=document.createElement('div');lu.className='levelup-overlay';lu.id='levelup-overlay';
    lu.innerHTML='<span class="levelup-trophy" id="lu-trophy">🏆</span><div class="levelup-title">LEVEL UP</div><div class="levelup-sub" id="lu-sub">You earned it</div><div class="levelup-badge"><div class="levelup-badge-name" id="lu-name">Competitive</div><div class="levelup-badge-sub">New Level Unlocked</div></div><button class="levelup-btn" onclick="window._clutchDismiss()">Let's Go ›</button>';
    document.body.appendChild(lu);
  }

  function hookRecordAnswer(){
    const orig=window.recordAnswer;
    if(typeof orig==='function') window.recordAnswer=function(ok,ci,q){orig.call(this,ok,ci,q);onAnswer(ok);};
    const origD=window.recordDailyAnswer;
    if(typeof origD==='function') window.recordDailyAnswer=function(ok){origD.call(this,ok);onAnswer(ok);};
  }

  function onAnswer(ok){
    CM.levelSeen++;if(ok)CM.levelOk++;
    if(CM.active){
      CM.gauntletQ++;if(ok)CM.gauntletOk++;
      haptic(ok?[50,0,50,0,100]:[80,40,80]);
      updateSB();
      if(CM.gauntletQ>=CLUTCH_QC){
        if(CM.gauntletOk>=2)doLevelUp();
        else{deactivate();CM.gauntletQ=0;CM.gauntletOk=0;}
      }
      return;
    }
    if(CM.levelSeen>=MIN_Q){
      const acc=CM.levelOk/CM.levelSeen;
      if(acc>=PROMOTE_T)doLevelUp();
      else if(acc>=CLUTCH_T)activate();
      else if(acc<DEMOTE_T&&CM.levelSeen>=20)doLevelDown();
    }
    updatePressure();
  }

  function activate(){
    CM.active=true;CM.gauntletQ=0;CM.gauntletOk=0;
    CM.vignetteEl.classList.add('active');
    haptic([30,200,30,200,30,200,80]);
    buildSB();
    const card=document.querySelector('.gc-card')||document.querySelector('.daily-gc-card');
    if(card)card.classList.add('clutch-card-pulse');
  }

  function deactivate(){
    CM.active=false;CM.vignetteEl.classList.remove('active');
    const sb=document.getElementById('clutch-sb');if(sb)sb.classList.remove('show');
    const card=document.querySelector('.gc-card')||document.querySelector('.daily-gc-card');
    if(card)card.classList.remove('clutch-card-pulse');
  }

  function buildSB(){
    let sb=document.getElementById('clutch-sb');
    if(!sb){
      sb=document.createElement('div');sb.className='clutch-scoreboard';sb.id='clutch-sb';
      const card=document.querySelector('.gc-card')||document.querySelector('#daily-gc-scenario')||document.querySelector('.gc-scenario');
      if(card&&card.parentNode)card.parentNode.insertBefore(sb,card);
      else document.body.appendChild(sb);
    }
    const nl=LEVEL_LABELS[CM.currentLevel]?.next||'Elite';
    sb.innerHTML='<div class="clutch-sb-inning">⚡ CLUTCH MODE — Bottom of the 9th</div><div class="clutch-sb-score" id="clutch-sb-score">Get 2 more right</div><div class="clutch-sb-sub">Earn your spot at '+nl+'</div><div class="clutch-sb-dots" id="clutch-sb-dots"></div>';
    sb.classList.add('show');updateSB();
  }

  function updateSB(){
    const score=document.getElementById('clutch-sb-score');
    if(score){const n=Math.max(0,2-CM.gauntletOk);score.textContent=n>0?n+' more right to level up':'Level up secured! ✓';}
    const dots=document.getElementById('clutch-sb-dots');
    if(dots){dots.innerHTML='';for(let i=0;i<CLUTCH_QC;i++){const d=document.createElement('div');if(i<CM.gauntletQ)d.className='clutch-sb-dot '+(i<CM.gauntletOk?'ok':'bad');else if(i===CM.gauntletQ)d.className='clutch-sb-dot now';else d.className='clutch-sb-dot';dots.appendChild(d);}}
  }

  function updatePressure(){
    if(CM.levelSeen<5)return;
    const acc=CM.levelOk/CM.levelSeen;if(acc<0.50)return;
    let wrap=document.getElementById('clutch-pw');
    if(!wrap){
      wrap=document.createElement('div');wrap.className='clutch-pressure-wrap';wrap.id='clutch-pw';
      wrap.innerHTML='<div class="clutch-pressure-bar"><div class="clutch-pressure-fill" id="clutch-pf"></div></div><div class="clutch-pressure-label" id="clutch-pl"></div>';
      const hdr=document.querySelector('.gc-header')||document.querySelector('#gc-dots')?.parentNode;
      if(hdr)hdr.appendChild(wrap);
    }
    const fill=document.getElementById('clutch-pf');
    const label=document.getElementById('clutch-pl');
    const pct=Math.min(100,Math.max(0,((acc-0.55)/(PROMOTE_T-0.55))*100));
    if(fill)fill.style.width=pct+'%';
    if(label){if(acc>=CLUTCH_T){label.textContent='⚡ Clutch zone — keep it going';label.classList.add('show');}else if(acc>=0.65){label.textContent=Math.round(pct)+'% to next level';label.classList.add('show');}else label.classList.remove('show');}
  }

  function doLevelUp(){
    const idx=LEVEL_ORDER.indexOf(CM.currentLevel);
    if(idx>=LEVEL_ORDER.length-1){showLU(CM.currentLevel,true);return;}
    const nl=LEVEL_ORDER[idx+1];
    haptic([100,50,100,50,200,50,200]);
    if(window.currentUser){window.currentUser.effective_level=nl;try{localStorage.setItem('biq_user',JSON.stringify(window.currentUser));}catch(e){}}
    try{fetch(SB_URL+'/rest/v1/players?id=eq.'+window.currentUser?.id,{method:'PATCH',headers:{'Content-Type':'application/json','apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY},body:JSON.stringify({effective_level:nl})});}catch(e){}
    showLU(nl,false);
    deactivate();CM.currentLevel=nl;CM.levelSeen=0;CM.levelOk=0;CM.gauntletQ=0;CM.gauntletOk=0;
  }

  function doLevelDown(){
    const idx=LEVEL_ORDER.indexOf(CM.currentLevel);if(idx<=0)return;
    const nl=LEVEL_ORDER[idx-1];CM.currentLevel=nl;CM.levelSeen=0;CM.levelOk=0;
    if(window.currentUser){window.currentUser.effective_level=nl;try{localStorage.setItem('biq_user',JSON.stringify(window.currentUser));}catch(e){}}
    try{fetch(SB_URL+'/rest/v1/players?id=eq.'+window.currentUser?.id,{method:'PATCH',headers:{'Content-Type':'application/json','apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY},body:JSON.stringify({effective_level:nl})});}catch(e){}
  }

  function showLU(level,elite){
    const overlay=document.getElementById('levelup-overlay');if(!overlay)return;
    const lbl=LEVEL_LABELS[level];
    document.getElementById('lu-trophy').textContent=lbl.emoji;
    document.getElementById('lu-name').textContent=(lbl.name).toUpperCase();
    document.getElementById('lu-sub').textContent=elite?'You\'re at the top. Stay there.':'You earned your spot. Time to prove it.';
    overlay.classList.add('show');
  }

  window._clutchDismiss=function(){const o=document.getElementById('levelup-overlay');if(o)o.classList.remove('show');};
  window._clutchMode=CM;
  window._clutchActivate=activate;
  window._clutchLevelUp=doLevelUp;

  function init(){injectCSS();injectHTML();CM.currentLevel=getPlayerLevel();hookRecordAnswer();console.log('[ClutchMode] ready — level:',CM.currentLevel);}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(init,800));
  else setTimeout(init,800);
})();