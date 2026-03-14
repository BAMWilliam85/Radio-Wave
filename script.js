var STATIONS = {

  /* ════════════════════════════
     FM FRANCE
  ════════════════════════════ */
  fr: [
    { name:'NRJ',            freq:'100.3 FM', desc:'Hit Music Only',        flag:'🇫🇷', url:'https://cdn.nrjaudio.fm/audio1/fr/30001/mp3_128.mp3' },
    { name:'RTL',            freq:'104.3 FM', desc:'Info & Divertissement',  flag:'🇫🇷', url:'https://streaming.radio.rtl.fr/rtl-1-44-128', alt:'https://rtl.lmn.fm/rtl.mp3' },
    { name:'Europe 1',       freq:'104.7 FM', desc:'News & Talk',            flag:'🇫🇷', url:'https://europe1.lmn.fm/europe1.mp3' },
    { name:'Skyrock',        freq:'96.0 FM',  desc:'Rap & R&B France',       flag:'🇫🇷', url:'https://icecast.skyrock.net/s/natio_mp3_128k', alt:'https://icecast.skyrock.net/s/natio_aac_96k' },
    { name:'FIP',            freq:'105.1 FM', desc:'Electro · Jazz · World', flag:'🇫🇷', url:'https://icecast.radiofrance.fr/fip-hifi.aac' },
    { name:'France Inter',   freq:'87.8 FM',  desc:'Culture & Info',         flag:'🇫🇷', url:'https://icecast.radiofrance.fr/franceinter-hifi.aac' },
    { name:'France Info',    freq:'105.5 FM', desc:'Information continue',   flag:'🇫🇷', url:'https://icecast.radiofrance.fr/franceinfo-hifi.aac' },
    { name:'Fun Radio',      freq:'101.9 FM', desc:'Dance & EDM',            flag:'🇫🇷', url:'https://icecast.funradio.fr/fun-1-44-128', alt:'https://cdn.nrjaudio.fm/audio1/fr/30401/mp3_128.mp3' },
    { name:'RFM',            freq:'103.9 FM', desc:'Varietes francaises',    flag:'🇫🇷', url:'https://rfm.lmn.fm/rfm.mp3' },
    { name:'Radio Nova',     freq:'101.5 FM', desc:'Urban & World',          flag:'🇫🇷', url:'https://novazz.ice.infomaniak.ch/novazz-128.mp3' },
    { name:"Mouv'",          freq:'97.1 FM',  desc:'Hip-Hop & Urbain',       flag:'🇫🇷', url:'https://icecast.radiofrance.fr/mouv-hifi.aac' },
    { name:'France Musique', freq:'91.7 FM',  desc:'Classique & Jazz',       flag:'🇫🇷', url:'https://icecast.radiofrance.fr/francemusique-hifi.aac' },
    { name:'France Culture', freq:'93.5 FM',  desc:'Idees & Savoirs',        flag:'🇫🇷', url:'https://icecast.radiofrance.fr/franceculture-hifi.aac' },
    { name:'OUI FM',         freq:'102.3 FM', desc:'Rock Alternatif',        flag:'🇫🇷', url:'https://ouifm.ice.infomaniak.ch/ouifm-high.mp3' },
    { name:'TSF Jazz',       freq:'89.9 FM',  desc:'Jazz parisien',          flag:'🇫🇷', url:'https://tsfjazz.ice.infomaniak.ch/tsfjazz-high.mp3' },
    { name:'Radio Classique',freq:'101.1 FM', desc:'Musique classique',      flag:'🇫🇷', url:'https://radioclassique.ice.infomaniak.ch/radioclassique-high.mp3' },
    { name:'RTL2',           freq:'105.9 FM', desc:'Pop Rock',               flag:'🇫🇷', url:'https://streaming.radio.rtl2.fr/rtl2-1-44-128', alt:'https://rtl2.lmn.fm/rtl2.mp3' },
  ],

  /* ════════════════════════════
     RAP / HIP-HOP
  ════════════════════════════ */
  rap: [
    // RAP FR
    { name:'Skyrock',   freq:'ONLINE', desc:'Rap FR — N1',                    flag:'🇫🇷', url:'https://icecast.skyrock.net/s/natio_mp3_128k', alt:'https://icecast.skyrock.net/s/natio_aac_96k', badge:'RAP FR' },
    { name:"Mouv'",     freq:'ONLINE', desc:'Hip-Hop officiel Radio France',   flag:'🇫🇷', url:'https://icecast.radiofrance.fr/mouv-hifi.aac', badge:'RAP FR' },
    // RAP RU — obligatoire
    { name:'DFM Russia',  freq:'ONLINE', desc:'Dance & Hip-Hop Russe',         flag:'🇷🇺', url:'https://dfm.hostingradio.ru/dfm96.aacp',                    badge:'RAP RU' },
    { name:'Record Rap',  freq:'ONLINE', desc:'Radio Record — Rap RU',         flag:'🇷🇺', url:'https://radiorecord.hostingradio.ru/rap96.aacp',             badge:'RAP RU' },
    // UK
    { name:'Capital XTRA',freq:'ONLINE', desc:'Hip-Hop & Afrobeats UK',        flag:'🇬🇧', url:'https://media-ssl.musicradio.com/CapitalXTRANationalMP3',     badge:'UK' },
  ],

  /* ════════════════════════════
     WORLD / DIVERS
  ════════════════════════════ */
  world: [
    { name:'KEXP',           freq:'ONLINE', desc:'Indie / Alternative — Seattle', flag:'🇺🇸', url:'https://kexp-mp3-128.streamguys1.com/kexp128.mp3' },
    { name:'Radio Paradise', freq:'ONLINE', desc:'Rock / Indie — Californie',     flag:'🇺🇸', url:'https://stream.radioparadise.com/rock-128' },
    { name:'TSF Jazz',       freq:'ONLINE', desc:'Jazz — Paris',                  flag:'🇫🇷', url:'https://tsfjazz.ice.infomaniak.ch/tsfjazz-high.mp3' },
    { name:'NRK P1',         freq:'ONLINE', desc:'Radio nationale — Norvege',     flag:'🇳🇴', url:'https://lyd.nrk.no/nrk_radio_p1_ostlandssendingen_aac_h' },
    { name:'Groove Salad',   freq:'ONLINE', desc:'Ambient · Downtempo — SomaFM', flag:'🎵', url:'https://ice6.somafm.com/groovesalad-128-mp3', alt:'https://ice1.somafm.com/groovesalad-128-mp3', badge:'LOFI' },
    { name:'Indie Pop Rocks', freq:'ONLINE', desc:'Indie Pop — SomaFM',          flag:'🎸', url:'https://ice6.somafm.com/indiepop-128-mp3',   alt:'https://ice1.somafm.com/indiepop-128-mp3' },
    { name:'Deep Space One', freq:'ONLINE', desc:'Ambient & Space — SomaFM',     flag:'🌌', url:'https://ice6.somafm.com/deepspaceone-128-mp3', alt:'https://ice1.somafm.com/deepspaceone-128-mp3' },
    { name:'Underground 80s',freq:'ONLINE', desc:'Synthpop & New Wave 80s',      flag:'🎹', url:'https://ice6.somafm.com/u80s-128-mp3',        alt:'https://ice1.somafm.com/u80s-128-mp3' },
    { name:'Metal Detector', freq:'ONLINE', desc:'Heavy Metal — SomaFM',         flag:'🤘', url:'https://ice6.somafm.com/metal-128-mp3',       alt:'https://ice1.somafm.com/metal-128-mp3' },
    { name:'Salsa Beat',     freq:'ONLINE', desc:'Salsa Latine',                  flag:'🇵🇷', url:'https://stream.zeno.fm/0r0xa792kwzuv' },
  ],
};

/* ════════════════════════════
   STATE
════════════════════════════ */
var currentStation = null;
var isPlaying      = false;
var audio = document.getElementById('audio');
audio.volume = 0.8;

/* ════════════════════════════
   HORLOGE
════════════════════════════ */
function updateClock() {
  var n = new Date();
  document.getElementById('clock').textContent =
    String(n.getHours()).padStart(2,'0')   + ':' +
    String(n.getMinutes()).padStart(2,'0') + ':' +
    String(n.getSeconds()).padStart(2,'0');
}
setInterval(updateClock, 1000);
updateClock();

/* ════════════════════════════
   VISUALIZER
════════════════════════════ */
var visBars = document.querySelectorAll('.vis-bar');
var visInterval = null;

function animateVis(on) {
  clearInterval(visInterval);
  if (!on) { visBars.forEach(function(b){ b.style.height='4px'; }); return; }
  visInterval = setInterval(function(){
    visBars.forEach(function(b){ b.style.height=(Math.random()*30+4)+'px'; });
  }, 120);
}

/* ════════════════════════════
   LECTURE
════════════════════════════ */
function playStation(st) {
  currentStation = st;
  document.getElementById('station-name').textContent = st.flag+'  '+st.name;
  document.getElementById('station-meta').textContent =
    st.desc+(st.freq && st.freq!=='ONLINE' ? '  —  '+st.freq : '');

  var led = document.getElementById('status-led');
  var btn = document.getElementById('play-btn');

  document.querySelectorAll('.station-card').forEach(function(c){ c.classList.remove('active'); });
  document.querySelectorAll('.station-card').forEach(function(c){
    if (c.dataset.name===st.name) c.classList.add('active');
  });

  led.className='status-led loading'; btn.innerHTML='⏹'; btn.classList.add('playing');
  animateVis(false);
  audio.pause(); audio.src=st.url;

  audio.play()
    .then(function(){ isPlaying=true; led.className='status-led active'; animateVis(true); })
    .catch(function(){
      if (st.alt) {
        audio.src=st.alt;
        audio.play()
          .then(function(){ isPlaying=true; led.className='status-led active'; animateVis(true); })
          .catch(function(){ showToast('⚠️ '+st.name+' — flux indisponible.'); stopPlayback(); });
      } else {
        showToast('⚠️ '+st.name+' — flux indisponible.'); stopPlayback();
      }
    });
}

function stopPlayback() {
  audio.pause(); audio.src=''; isPlaying=false;
  document.getElementById('status-led').className='status-led';
  document.getElementById('play-btn').innerHTML='▶';
  document.getElementById('play-btn').classList.remove('playing');
  document.querySelectorAll('.station-card').forEach(function(c){ c.classList.remove('active'); });
  animateVis(false); currentStation=null;
}

document.getElementById('play-btn').addEventListener('click', function(){
  if (isPlaying) stopPlayback(); else if (currentStation) playStation(currentStation);
});
document.getElementById('volume').addEventListener('input', function(e){
  audio.volume=parseFloat(e.target.value);
});

/* ════════════════════════════
   CARTES
════════════════════════════ */
function buildCard(st) {
  var div=document.createElement('div');
  div.className='station-card';
  div.dataset.name=st.name;
  div.dataset.search=(st.name+' '+(st.desc||'')+' '+(st.badge||'')).toLowerCase();
  var badge=st.badge?'<div class="card-badge">'+st.badge+'</div>':'';
  var fc=(!st.freq||st.freq==='ONLINE')?'diverse':'';
  div.innerHTML=badge+
    '<div class="card-flag">'+(st.flag||'📻')+'</div>'+
    '<div class="card-name">'+st.name+'</div>'+
    '<div class="card-desc">'+(st.desc||'')+'</div>'+
    '<div class="card-freq '+fc+'">'+(st.freq||'ONLINE')+'</div>'+
    '<div class="playing-indicator">'+
      '<div class="pi-bar"></div><div class="pi-bar"></div>'+
      '<div class="pi-bar"></div><div class="pi-bar"></div>'+
      '<div class="pi-bar"></div>'+
    '</div>';
  div.addEventListener('click', function(){ playStation(st); });
  return div;
}

function buildGrid(list, gId, cId) {
  var g=document.getElementById(gId); g.innerHTML='';
  list.forEach(function(st){ g.appendChild(buildCard(st)); });
  if (cId) document.getElementById(cId).textContent=list.length+' stations';
}

buildGrid(STATIONS.fr,    'grid-fr',    'count-fr');
buildGrid(STATIONS.rap,   'grid-rap',   'count-rap');
buildGrid(STATIONS.world, 'grid-world', 'count-world');

/* ════════════════════════════
   TABS
════════════════════════════ */
document.querySelectorAll('.tab').forEach(function(tab){
  tab.addEventListener('click', function(){
    document.querySelectorAll('.tab').forEach(function(t){ t.classList.remove('active'); });
    document.querySelectorAll('.panel').forEach(function(p){ p.classList.remove('active'); });
    tab.classList.add('active');
    document.getElementById(tab.dataset.panel).classList.add('active');
    document.getElementById('search').value=''; filterCards('');
  });
});

/* ════════════════════════════
   RECHERCHE
════════════════════════════ */
function filterCards(q) {
  document.querySelectorAll('.station-card').forEach(function(c){
    c.style.display=(!q||c.dataset.search.includes(q.toLowerCase()))?'':'none';
  });
}
document.getElementById('search').addEventListener('input', function(e){
  var q=e.target.value.trim(); filterCards(q);
  if (q) {
    document.querySelectorAll('.panel').forEach(function(p){ p.classList.add('active'); });
    document.querySelectorAll('.tab').forEach(function(t){ t.classList.remove('active'); });
  } else {
    var at=document.querySelector('.tab.active')||document.querySelector('.tab');
    document.querySelectorAll('.panel').forEach(function(p){ p.classList.remove('active'); });
    if (at){ at.classList.add('active'); document.getElementById(at.dataset.panel).classList.add('active'); }
  }
});

/* ════════════════════════════
   TOAST
════════════════════════════ */
var toastTmr;
function showToast(msg){
  var t=document.getElementById('toast'); t.textContent=msg; t.classList.add('show');
  clearTimeout(toastTmr); toastTmr=setTimeout(function(){ t.classList.remove('show'); },5000);
}

/* ════════════════════════════
   AUDIO EVENTS
════════════════════════════ */
audio.addEventListener('error',   function(){ if(currentStation) showToast('⚠️ Connexion perdue — '+currentStation.name+'.'); stopPlayback(); });
audio.addEventListener('waiting', function(){ document.getElementById('status-led').className='status-led loading'; animateVis(false); });
audio.addEventListener('playing', function(){ document.getElementById('status-led').className='status-led active'; animateVis(true); isPlaying=true; });
audio.addEventListener('stalled', function(){ document.getElementById('status-led').className='status-led loading'; });
