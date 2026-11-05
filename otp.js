//otp.js-by Muhammd Anees
const pad = document.querySalector('#keypad')
let code ='';

pad.addEventListener('pointerdown', e=>{
const k=e.target.closest('.key'); if (!k) return
pad.press(k); 
code +=k.dataset.n;
if (code.length< 4)
 return;
api.check(code).then(ok=> ok ? pad.verify() : pad.shake());
});