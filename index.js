let count = 0;
const too = document.getElementById("too");
const hasah = document.getElementById("hasah")
const dahin = document.getElementById("dahin")
const nemeh = document.getElementById("nemeh")
hasah.addEventListener("click", function () {
    count--;
    too.textContent = count;
//  if(too != 0)
})
dahin.addEventListener("click", function () {
    count=0
    too.textContent = 0;
})
nemeh.addEventListener("click", function () {
    count++;
    too.textContent = count;
}
)


