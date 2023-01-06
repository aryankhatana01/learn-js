let cnt = 0;
let count = document.getElementById("counter");
function increment() {
    cnt++;
    count.innerHTML = cnt;
}

function save() {
    console.log(cnt);
}