const sm = document.getElementById("small");
const onClickHandler=(e)=> console.log(e.currentTarget.id)


sm.onclick = onClickHandler
sm.onclick = null

sm.addEventListener("click",onClickHandler)
//sm.removeEventListener("click",onClickHandler)
