document.querySelector('.hamburger').onclick=()=>document.querySelector('.nav-links').classList.toggle('active');
const lightbox=document.getElementById('lightbox'), lbImg=document.getElementById('lightbox-img');
document.addEventListener('click',e=>{
 if(e.target.classList.contains('lightbox-img')||e.target.classList.contains('gallery-thumb')){
  lbImg.src=e.target.src; lightbox.classList.add('active');
 }
});
document.querySelectorAll('.close-lightbox').forEach(el=>el.onclick=()=>lightbox.classList.remove('active'));
if(lightbox)lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.classList.remove('active')});
if(window.jQuery){$('.acc-header').click(function(){$(this).next('.acc-content').slideToggle(300).toggleClass('active');});}
if(document.getElementById('map')){
 const map=L.map('map').setView([-23.9045,29.4689],14);
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap'}).addTo(map);
 L.marker([-23.9045,29.4689]).addTo(map).bindPopup('Aroma Heaven - Mall of the North').openPopup();
}