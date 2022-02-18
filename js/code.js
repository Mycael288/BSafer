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

// const menu = document.getElementById("menu")
// menu.onmousedown = function(){
// 	document.getElementById('list').style.display = 'block'
// 	document.getElementById('list').style.width = '100%'
// 	document.getElementById('list').style.height = '100%'
// 	document.getElementById('list').style.backgroundColor = '#ffffff'
// 	document.getElementById('list').style.position = 'fixed'
// 	document.getElementById('list').style.opacity = '90%'
// }