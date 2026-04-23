// Diamond IQ — Clutch Mode Engine v1.1
// Polls for currentUser after login, then hooks into answer recording
(function() {
  'use strict';
  const LEVEL_ORDER=["foundation","development","competitive","elite"];
  const LEVEL_LABELS={"foundation":{"name":"Foundation","next":"Development","emoji":"⚾"},"development":{"name":"Development","next":"Competitive","emoji":"🥎"},"competitive":{"name":"Competitive","next":"Elite","emoji":"🏆"},"elite":{"name":"Elite","next":null,"emoji":"💎"}};
  const MIN_Q=15,CLUTCH_T=0.72,PROMOTE_T=0.80,DEMOTE_T=0.55,CLUTCH_QC=3;
  const SB_URL='https://kcisieenoznaorioagqq.supabase.co';
  const SB_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjaXNpZWVub3puYW9yaW9hZ3FxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2MzI2MTQsImV4cCI6MjA5MDIwODYxNH0.yGa1Mc9N1X1tmnQvVy7arTQSZT8w0YJn_wNNEW0mQDg';
  let CM={active:false,gauntletQ:0,gauntletOk:0,levelSeen:0,levelOk:0,currentLevel:'competitive',vignetteEl:null,initialized:false};
  let _pollTimer=null;

  function getPlayerLevel(){
    try{
      const cu=window.currentUser;
      if(cu&&cu.effective_level)return cu.effective_level;
      if(cu&&cu.age){
        if(cu.age<=12)return'foundation';
        if(cu.age<=15)return'development';
        if(cu.age<=18)return'competitive';
        return'elite';
      }
    }catch(e){}
    return'competitive';
  }

  function haptic(p){try{if(navigator.vibrate)navigator.vibrate(p);}catch(e){}}

  function injectCSS(){
    if(document.getElementById('clutch-css'))return;
    const s=document.createElement('style');
    s.id='clutch-css';
    s.textContent=`
.clutch-vignette{position:fixed;inset:0;pointer-events:none;z-index:500;opacity:0;transition:opacity 0.8s ease;}
.clutch-vignette.active{opacity:1;background:radial-gradient(ellipse at center,transparent 35%,rgba(160,20,20,0.5) 100%);animation:vPulse 1.8s ease-in-out infinite;}
@keyframes vPulse{0%,100%{opacity:0.65}50%{opacity:1}}
.clutch-sb{display:none;background:linear-gradient(135deg,#0d0a14,#14080a);border:1px solid rgba(200,50,50,0.5);border-radius:10px;padding:10px 16px 8px;margin:0 0 10px;text-align:center;animation:sbIn 0.4s ease both;}
.clutch-sb.show{display:block;}
@keyframes sbIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}
.csb-inn{font-family:'Barlow Condensed',sans-serif;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#e05050;font-weight:700;}
.csb-score{font-family:'Barlow Condensed',sans-serif;font-size:20px;font-weight:900;color:#fff;letter-spacing:1px;margin:4px 0 2px;}
.csb-sub{font-size:10px;color:#7a8fa8;letter-spacing:1px;}
.csb-dots{display:flex;gap:6px;justify-content:center;margin-top:6px;}
.csb-dot{width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,0.15);}
.csb-dot.ok{background:#3ecf82;}.csb-dot.bad{background:#e05050;}
.csb-dot.now{background:#c8a84b;animation:dPulse 0.8s ease-in-out infinite;}
@keyframes dPulse{0%,100%{opacity:0.6;transform:scale(0.9)}50%{opacity:1;transform:scale(1.2)}}
.clutch-pw{padding:0 16px;margin-bottom:4px;}
.clutch-pb{height:3px;background:rgba(255,255,255,0.08);border-radius:2px;overflow:hidden;}
.clutch-pf{height:100%;border-radius:2px;background:linear-gradient(90deg,#c8a84b,#e05050);transition:width 0.6s ease;width:0%;}
.clutch-pl{font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#c8a84b;text-align:right;margin-top:3px;opacity:0;transition:opacity 0.3s;}
.clutch-pl.show{opacity:1;}
.clutch-cp{animation:cPulse 1.6s ease-in-out infinite;}
@keyframes cPulse{0%,100%{box-shadow:0 0 0 0 rgba(200,50,50,0)}50%{box-shadow:0 0 0 6px rgba(200,50,50,0.15)}}
.lu-overlay{position:fixed;inset:0;z-index:900;background:linear-gradient(135deg,rgba(5,9,16,0.97),rgba(10,14,24,0.97));display:flex;flex-direction:column;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity 0.4s ease;padding:32px;}
.lu-overlay.show{opacity:1;pointer-events:all;}
.lu-trophy{font-size:72px;display:block;text-align:center;margin-bottom:8px;animation:luPop 0.6s cubic-bezier(0.34,1.56,0.64,1) both;}
@keyframes luPop{0%{transform:scale(0) rotate(-20deg);opacity:0}100%{transform:scale(1) rotate(0deg);opacity:1}}
.lu-title{font-family:'Barlow Condensed',sans-serif;font-size:42px;font-weight:900;letter-spacing:6px;text-transform:uppercase;color:#c8a84b;margin:0 0 4px;text-align:center;}
.lu-sub{font-family:'Barlow Condensed',sans-serif;font-size:13px;letter-spacing:3px;text-transform:uppercase;color:#7a8fa8;margin-bottom:28px;text-align:center;}
.lu-badge{background:linear-gradient(135deg,rgba(200,168,75,0.12),rgba(200,168,75,0.04));border:1px solid rgba(200,168,75,0.35);border-radius:14px;padding:18px 36px;text-align:center;margin-bottom:36px;width:100%;max-width:280px;}
.lu-badge-name{font-family:'Barlow Condensed',sans-serif;font-size:26px;font-weight:700;color:#fff;letter-spacing:3px;text-transform:uppercase;}
.lu-badge-sub{font-size:11px;color:#c8a84b;letter-spacing:2px;text-transform:uppercase;margin-top:5px;}
.lu-btn{background:#c8a84b;color:#0a1628;border:none;padding:14px 40px;border-radius:8px;font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;letter-spacing:2px;text-transform:uppercase;cursor:pointer;}
.level-pill{display:inline-flex;align-items:center;gap:5px;padding:3px 10px 3px 8px;background:rgba(200,168,75,0.1);border:1px solid rgba(200,168,75,0.2);border-radius:20px;font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:#c8a84b;font-family:'Barlow Condensed',sans-serif;font-weight:600;}
.level-pill-dot{width:5px;height:5px;border-radius:50%;background:#c8a84b;flex-shrink:0;}
`;
    document.head.appendChild(s);
  }

  function injectHTML(){
    if(document.getElementById('clutch-vignette'))return;
    const v=document.createElement('div');v.className='clutch-vignette';v.id='clutch-vignette';document.body.appendChild(v);CM.vignetteEl=v;
    const lu=document.createElement('div');lu.className='lu-overlay';lu.id='lu-overlay';
    lu.innerHTML='<span class="lu-trophy" id="lu-trophy">🏆</span><div class="lu-title">LEVEL UP</div><div class="lu-sub" id="lu-sub">You earned it</div><div class="lu-badge"><div class="lu-badge-name" id="lu-name">Competitive</div><div class="lu-badge-sub">New Level Unlocked</div></div><button class="lu-btn" onclick="window._clutchDismiss()">Let\'s Go ›</button>';
    document.body.appendChild(lu);
  }

  function addLevelPill(){
    if(document.getElementById('level-pill'))return;
    const lbl=LEVEL_LABELS[CM.currentLevel]?.name||CM.currentLevel;
    const pill=document.createElement('span');
    pill.className='level-pill';pill.id='level-pill';
    pill.innerHTML='<span class="level-pill-dot"></span>'+lbl;
    // Try several possible nav attachment points
    const targets=['#nav-iq','.nav-iq','.iq-badge','.player-iq','#player-iq','.header-right','.nav-right','nav'];
    for(const t of targets){const el=document.querySelector(t);if(el){el.appendChild(pill);break;}}
  }

  function hookAnswers(){
    const wrapFn=(name,cb)=>{
      const orig=window[name];
      if(typeof orig==='function'&&!orig._clutchWrapped){
        window[name]=function(){
          const r=orig.apply(this,arguments);
          try{cb.apply(this,arguments);}catch(e){}
          return r;
        };
        window[name]._clutchWrapped=true;
      }
    };
    wrapFn('recordAnswer',(ok)=>onAnswer(ok===true||arguments[0]===true));
    wrapFn('recordDailyAnswer',(ok)=>onAnswer(ok===true||arguments[0]===true));
    // Also watch for showCardFeedback which fires with ok boolean
    wrapFn('showCardFeedback',(ok)=>onAnswer(ok===true));
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
    CM.vignetteEl&&CM.vignetteEl.classList.add('active');
    haptic([30,200,30,200,30,200,80]);
    buildSB();
    const card=document.querySelector('.gc-card')||document.querySelector('.daily-gc-card');
    if(card)card.classList.add('clutch-cp');
  }

  function deactivate(){
    CM.active=false;
    CM.vignetteEl&&CM.vignetteEl.classList.remove('active');
    const sb=document.getElementById('clutch-sb');if(sb)sb.classList.remove('show');
    const card=document.querySelector('.gc-card')||document.querySelector('.daily-gc-card');
    if(card)card.classList.remove('clutch-cp');
  }

  function buildSB(){
    let sb=document.getElementById('clutch-sb');
    if(!sb){
      sb=document.createElement('div');sb.className='clutch-sb';sb.id='clutch-sb';
      const card=document.querySelector('.gc-card')||document.querySelector('#daily-gc-scenario')||document.querySelector('.gc-scenario');
      if(card&&card.parentNode)card.parentNode.insertBefore(sb,card);
      else document.body.appendChild(sb);
    }
    const nl=LEVEL_LABELS[CM.currentLevel]?.next||'Elite';
    sb.innerHTML='<div class="csb-inn">⚡ CLUTCH MODE — Bottom of the 9th</div><div class="csb-score" id="csb-score">Get 2 more right</div><div class="csb-sub">Earn your spot at '+nl+'</div><div class="csb-dots" id="csb-dots"></div>';
    sb.classList.add('show');updateSB();
  }

  function updateSB(){
    const score=document.getElementById('csb-score');
    if(score){const n=Math.max(0,2-CM.gauntletOk);score.textContent=n>0?n+' more right to level up':'Level up secured! ✓';}
    const dots=document.getElementById('csb-dots');
    if(dots){dots.innerHTML='';for(let i=0;i<CLUTCH_QC;i++){const d=document.createElement('div');if(i<CM.gauntletQ)d.className='csb-dot '+(i<CM.gauntletOk?'ok':'bad');else if(i===CM.gauntletQ)d.className='csb-dot now';else d.className='csb-dot';dots.appendChild(d);}}
  }

  function updatePressure(){
    if(CM.levelSeen<5)return;
    const acc=CM.levelOk/CM.levelSeen;if(acc<0.50)return;
    let wrap=document.getElementById('clutch-pw');
    if(!wrap){
      wrap=document.createElement('div');wrap.className='clutch-pw';wrap.id='clutch-pw';
      wrap.innerHTML='<div class="clutch-pb"><div class="clutch-pf" id="clutch-pf"></div></div><div class="clutch-pl" id="clutch-pl"></div>';
      const hdr=document.querySelector('.gc-header')||document.querySelector('#gc-dots')?.parentNode||document.querySelector('.daily-header');
      if(hdr)hdr.appendChild(wrap);
    }
    const fill=document.getElementById('clutch-pf');
    const label=document.getElementById('clutch-pl');
    const pct=Math.min(100,Math.max(0,((acc-0.55)/(PROMOTE_T-0.55))*100));
    if(fill)fill.style.width=pct+'%';
    if(label){
      if(acc>=CLUTCH_T){label.textContent='⚡ Clutch zone — keep it going';label.classList.add('show');}
      else if(acc>=0.65){label.textContent=Math.round(pct)+'% to next level';label.classList.add('show');}
      else label.classList.remove('show');
    }
  }

  function doLevelUp(){
    const idx=LEVEL_ORDER.indexOf(CM.currentLevel);
    const nl=idx<LEVEL_ORDER.length-1?LEVEL_ORDER[idx+1]:null;
    haptic([100,50,100,50,200,50,200]);
    if(nl){
      CM.currentLevel=nl;
      if(window.currentUser){window.currentUser.effective_level=nl;}
      try{fetch(SB_URL+'/rest/v1/players?id=eq.'+(window.currentUser?.id||''),{method:'PATCH',headers:{'Content-Type':'application/json','apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY},body:JSON.stringify({effective_level:nl})});}catch(e){}
      const lbl=LEVEL_LABELS[nl];
      const o=document.getElementById('lu-overlay');if(!o)return;
      document.getElementById('lu-trophy').textContent=lbl.emoji;
      document.getElementById('lu-name').textContent=lbl.name.toUpperCase();
      document.getElementById('lu-sub').textContent='You earned your spot. Time to prove it.';
      o.classList.add('show');
      // Update pill
      const pill=document.getElementById('level-pill');if(pill)pill.innerHTML='<span class="level-pill-dot"></span>'+lbl.name;
    }
    deactivate();CM.levelSeen=0;CM.levelOk=0;CM.gauntletQ=0;CM.gauntletOk=0;
  }

  function doLevelDown(){
    const idx=LEVEL_ORDER.indexOf(CM.currentLevel);if(idx<=0)return;
    CM.currentLevel=LEVEL_ORDER[idx-1];CM.levelSeen=0;CM.levelOk=0;
    if(window.currentUser)window.currentUser.effective_level=CM.currentLevel;
    try{fetch(SB_URL+'/rest/v1/players?id=eq.'+(window.currentUser?.id||''),{method:'PATCH',headers:{'Content-Type':'application/json','apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY},body:JSON.stringify({effective_level:CM.currentLevel})});}catch(e){}
  }

  window._clutchDismiss=function(){const o=document.getElementById('lu-overlay');if(o)o.classList.remove('show');};
  window._clutchMode=CM;
  window._clutchActivate=activate;
  window._clutchLevelUp=doLevelUp;

  function tryInit(){
    // Poll until currentUser is available (set after login)
    if(window.currentUser&&window.currentUser.id){
      clearInterval(_pollTimer);
      if(CM.initialized)return;
      CM.initialized=true;
      CM.currentLevel=getPlayerLevel();
      injectCSS();
      injectHTML();
      hookAnswers();
      addLevelPill();
      console.log('[ClutchMode v1.1] initialized — level:',CM.currentLevel);
    }
  }

  // Start polling for currentUser every 500ms, give up after 60s
  let _pollCount=0;
  _pollTimer=setInterval(()=>{_pollCount++;if(_pollCount>120)clearInterval(_pollTimer);tryInit();},500);
  // Also try immediately in case already logged in
  setTimeout(tryInit,1000);
})();