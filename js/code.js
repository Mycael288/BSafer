const btns1 = document.getElementsByClassName("btn-ry")
	for(let e of btns1){
		e.onmouseover = function(){
			e.style.backgroundColor = "#f8d044" //amarelo
		}
		e.onmouseout = function(){
			e.style.backgroundColor = "#f8143c" //vermelho
		}
	}

const btns2 = document.getElementsByClassName("btn-bw")
	for(let e of btns2){
		e.onmouseover = function(){
			e.style.backgroundColor = "#f8143c" //vermelho
			e.style.color = "#ffffff" //branco
		}
		e.onmouseout = function(){
			e.style.backgroundColor = "#ffffff" //branco
			e.style.color = "#000000" //preto
		}
	}
const btn1 = document.getElementById("btn1")
btn1.onmousedown = function(){
	document.getElementById('contat').scrollIntoView({behavior: "smooth"})
}

const menu = document.getElementById("menu")
menu.onmousedown = function(){
	document.getElementById('list').style.display = 'block'
	document.getElementById('list').style.width = '100%'
	document.getElementById('list').style.height = '100%'
	document.getElementById('list').style.backgroundColor = '#ffffff'
	document.getElementById('list').style.position = 'fixed'
	document.getElementById('list').style.opacity = '90%'
}

	// const card = document.getElementsByClassName("card")
	// const title6 = document.getElementById("titulo6")
	// const title7 = document.getElementById("titulo7")
	// const title8 = document.getElementById("titulo8")

	// for(let e of card){
	// 	e.onmouseover = function(){
	// 		e.style.backgroundColor = "#333333" //cinza escuro
	// 		e.style.color = "#ffffff" //branco
			
	// 		if(e.id == "secao3"){
	// 			title6.style.color = "gold"
	// 		}
	// 		else if(e.id == "secao4"){
	// 			title7.style.color = "gold"
	// 		}
	// 		else{
	// 			title8.style.color = "gold"
	// 		}
	// 	}
	// 	e.onmouseout = function(){
	// 		e.style.backgroundColor = "#ffffff" //branco
	// 		e.style.color = "#000000" //preto
	// 		title6.style.color = "#000000"
	// 		title7.style.color = "#000000"
	// 		title8.style.color = "#000000"
	// 	}
	// }

	// const memb = document.getElementsByClassName("memb")
	// for(let e of memb){
	// 	e.onmouseover = function(){
	// 		// box-shadow: 30px 16px 16px #e6e6e6;
	// 		e.style.boxShadow = "7px 16px 16px #4d4d4d" //cinza escuro
	// 	}
	// 	e.onmouseout = function(){
	// 		// box-shadow: 0px 0px 0px #ffffff;
	// 		e.style.boxShadow = "0px 0px 0px #ffffff" //branco
	// 	}
	// }

	// window.onresize = function(){alert(document.getElementById('body').getBoundingClientRect())}

	// document.onreadystatechange = function () {
	// 	if (document.readyState == 'complete') {
	// 			const tam = (document.getElementById('div1').getBoundingClientRect().bottom -
	// 			document.getElementById('div1').getBoundingClientRect().top) - 3

	// 			document.getElementById('img2').style.height = String(tam) + "px"
	// 	}
	// }