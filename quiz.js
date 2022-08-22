let ran1 = Math.floor( Math.random()*50+1)
let ran2 = Math.floor(Math.random()*50+1)
 let box1 = document.getElementById("box-1")
 let box2 = document.getElementById("box-2")
 let mark = document.getElementById("tip")
 box1.textContent = ran1
 box2.textContent = ran2
 answer = ran1 + ran2   
 const checker = document.getElementById("checker")
 checker.addEventListener("click", ()=>{
    let placer = document.getElementById("input-answer").value
    let finalAns = document.getElementById("final-answer")
 
    if (placer == answer) {
        finalAns.textContent = `correct! the answer is ${answer}`
        finalAns.style.color = 'white'
        document.getElementById("input-answer").value = ""
    }else if (placer == "") {
        alert("input a number")
    }
    else{
        finalAns.textContent = `oops, your asnwer is incorrect the correct answer is ${answer}`
        finalAns.style.color = 'red'
        document.getElementById("input-answer").value = ""
    }
    let ran1 = Math.floor( Math.random()*50+1)
 let ran2 = Math.floor(Math.random()*50+1)
 let box1 = document.getElementById("box-1")
 let box2 = document.getElementById("box-2")
 let mark = document.getElementById("tip")
 box1.textContent = ran1
 box2.textContent = ran2
 answer = ran1 + ran2
 })
 mark.addEventListener("click", ()=>{
    placer = document.getElementById("input-answer").value
    mark = document.getElementById("tip")
    if (placer == "") {
        alert("give it a shot first!")
    }else if (placer == answer) {
        alert("click on the 'check answer' button")
    }
    else if (placer !== answer) {
        alert(`the correct answer is ${answer}`)
    }
 })

