let countEl = document.getElementById("count-el")
let countHistoryEl = document.getElementById("count-history")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    countHistoryEl.textContent += countStr
     countEl.textContent = count
    count = 0
   
}