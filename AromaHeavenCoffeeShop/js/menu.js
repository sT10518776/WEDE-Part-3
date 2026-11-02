const products=[
 {id:1,name:"Espresso",price:32,cat:"coffee",desc:"Double shot, rich crema",img:"https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400"},
 {id:2,name:"Cappuccino",price:45,cat:"coffee",desc:"Perfect foam art",img:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400"},
 {id:3,name:"Caramel Latte",price:52,cat:"coffee",desc:"House caramel drizzle",img:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400"},
 {id:4,name:"Croissant",price:38,cat:"pastry",desc:"Buttery, fresh baked",img:"https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400"},
 {id:5,name:"Heaven Mocha",price:58,cat:"coffee",desc:"Signature blend",img:"https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400"},
 {id:6,name:"Iced Aroma",price:48,cat:"coffee",desc:"Cold brew + vanilla",img:"https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400"}
];
const list=document.getElementById('product-list');
function render(arr){
 list.innerHTML=arr.map(p=>`<div class="card"><img src="${p.img}" alt="${p.name}" class="gallery-thumb" style="height:150px"><h2>${p.name} - R${p.price}</h2><p>${p.desc}</p></div>`).join('');
}
render(products);
document.getElementById('search')?.addEventListener('input',e=>{
 const q=e.target.value.toLowerCase();
 render(products.filter(p=>p.name.toLowerCase().includes(q)||p.desc.toLowerCase().includes(q)));
});
document.getElementById('sort')?.addEventListener('change',e=>{
 let sorted=[...products];
 if(e.target.value==='price-low')sorted.sort((a,b)=>a.price-b.price);
 if(e.target.value==='price-high')sorted.sort((a,b)=>b.price-a.price);
 if(e.target.value==='name')sorted.sort((a,b)=>a.name.localeCompare(b.name));
 render(sorted);
});