let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let incrementBtn = document.getElementById("increment-btn")
let saveBtn = document.querySelector("#save-btn")
let count = 0;
let previousCount = 0;

incrementBtn.addEventListener('click', () => {
    count += 1;
    countEl.textContent = `${count}`
})

saveBtn.addEventListener('click', () => {
    previousCount += count;
    saveEl.textContent += ` ${previousCount} - `;
    count = 0;
})

