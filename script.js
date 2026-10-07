const nav=document.querySelector('.nav'), menu=document.querySelector('.menu');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('quoteForm').addEventListener('submit',e=>{
  e.preventDefault();
  const f=new FormData(e.target);
  const text=`Hi Madina Drilling, I would like to request a quote.%0A%0AName: ${f.get('name')}%0APhone: ${f.get('phone')}%0AService: ${f.get('service')}%0ALocation: ${f.get('location')}%0ARequirements: ${f.get('message')}`;
  window.open(`https://wa.me/27723686227?text=${text}`,'_blank');
});