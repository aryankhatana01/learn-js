let myLeads = []
const inputEl = document.getElementById("input")
const inputBtn = document.getElementById("btn")
const items = document.getElementById("items")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    console.log(myLeads)
    items.textContent = myLeads
})

inputEl.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    inputBtn.click();
  }
})