const beforeText = document.getElementById("text");
const addBtn = document.getElementById("btn");

const afterText = 'クリック後の表示';

console.log ( beforeText );
console.log ( addBtn  );
console.log ( afterText );

addBtn.addEventListener('click',() => {
    beforeText.textContent = afterText;
});
