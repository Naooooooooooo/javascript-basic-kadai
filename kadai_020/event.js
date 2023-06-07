const beforeText = document.getElementById("text");
const addBtn = document.getElementById("btn");

const afterText = 'ボタンをクリックしました';

console.log ( beforeText );
console.log ( addBtn  );
console.log ( afterText );

addBtn.addEventListener('click',() => {
    setTimeout(() => {beforeText.textContent = afterText},2000);
    
});
