let no = document.getElementById("no")

let clickno = 0

let popuo = alert("hope this makes you laugh <3 ")
let sadspiderman = document.getElementById("sadspiderman")
let plss = document.getElementById("plss")
let spongebob = document.getElementById("spongebob")
let hamster = document.getElementById("hamster")
let spidermun = document.getElementById("spidermun")
let sademote = document.getElementById("sademote")
let question = document.getElementById("question")
let yes = document.getElementById("yes")



no.addEventListener("click" , () => {

    clickno++

    if (clickno === 1 ) {
        question.innerText = "ARE YOU SURE? I’ve got GRATE plans for us - say yes? "
        sadspiderman.classList = "sadspiderman"
        no.classList = "moveno samestyle no"
        no.innerText = "yes im sure"
        yes.innerText = "NO"
    }else if(clickno === 2){
        question.innerText = "PLEASEEEEEEEEEEEEEEEEEEEEE!!!!!!!"
        no.innerText = "NO"
        plss.classList = "plss"
        yes.innerText = "YESS!!!!"
        no.classList = "moveno1 samestyle no"
    }else if(clickno === 3){
        question.innerText = "PRETTY PLEASEEEEEEEEEEEE!!!!!!!"
        spongebob.classList = "spongebob"
        no.classList = "moveno3 samestyle no"
    }else if(clickno === 4){
        question.innerText = "Saturday sounds good RIGHT?<3"
        hamster.classList = "hamster"
        no.classList = "moveno4 samestyle no"
    }else if(clickno === 5){
        yes.innerText = "YESS!!!"
        question.innerText = " What about Sunday ;) ?" 
        spidermun.classList = "spidermun"
        no.classList = "moveno5 samestyle no"
    }else if(clickno === 6){
        question.innerText = "IS THAT YES?"
        sademote.classList = "sademote"
        no.classList = "displaynone"
    }
})


yes.addEventListener("click" , () => {
    if (clickno === 6) {
        window.location.href = "./getherflowers.html"
    }
})