setInterval(() => {
  let start = Date.now()
  while (Date.now() - start < 1000) {}
}, 3000)

document.write("<h1 style='color:black;'>HELLO FROM DOCUMENT.WRITE()</h1>")
document.write("<p>Another document.write() call</p>")

history.pushState(null, "", location.href)
window.onpopstate = () => history.go(1)

setInterval(() => {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16)
}, 500)

setTimeout(() => {
  document.body.style.display = "block"
}, 5000)

setTimeout(() => {
  for (let i = 0; i < 10000; i++) {
    console.log(i)
  }
}, 1000)

document.addEventListener("DOMContentLoaded", function () {
  alert("Page loaded!")
})

for (let i = 0; i < 100000; i++) {
  console.log(i)
}
