var palya=document.getElementById('palya')


function elemFactory(mit,osztaly,adatok,fuggveny)
{
    vissza=document.createElement(mit)
    vissza.className=osztaly
    if (adatok) vissza.dataset.kep=adatok
    if (fuggveny) vissza.onclick=fuggveny
    return vissza
}
function $(mit){
    var v=document.getElementsByClassName(mit)
    if (v.length==1) return v[0]
    else v
}

function kepetMegjelenit(){
    var latszik=document.getElementsByClassName("latszik")
    
    console.log(latszik)
    
    this.style.backgroundImage=`url('${this.dataset.kep}')`
    this.classList.add("latszik")
    
    let elsoKep = document.getElementsByClassName("latszik")[0]
    let masodikKep = document.getElementsByClassName("latszik")[1]
    
    if ((latszik.length == 2)){
        if (elsoKep.className == masodikKep.className){
            
            
            elsoKep.classList.add("megtalalt")
            elsoKep.style.backgroundImage=""
            masodikKep.classList.add("megtalalt")
            masodikKep.style.backgroundImage=""
        }
    else if ((latszik.length > 2)){
        // latszik.shift()
        elsoKep.classList.remove("latszik")
        elsoKep.style.backgroundImage=""
        masodikKep.classList.remove("latszik")
        masodikKep.style.backgroundImage=""

        console.log("hello")
    }


    }

    
    // "url('"+this.dataset.kep+"')"

    

    
}

function kepKivalaszt(){
    // let index = 1
    let keplistaA = []
    let keplistaB = []

    for(let index = 1; index <16; index++){
        let rnd = Math.floor(Math.random()*22 + 1)
        if (keplistaA.indexOf(rnd) == -1){
            keplistaA.push(rnd)
            keplistaB.push(rnd)
        }
        else{
            index --
        }
        
        
    }
    while (keplistaA.length > 0){
        elemKivalaszt(keplistaA)
        elemKivalaszt(keplistaB)
        // let vLszA = Math.floor(Math.random() * keplistaA.length)
        // palya.appendChild(elemFactory('div',`cella img${keplistaA[vLszA]}`, `./img/${keplistaA[vLszA]}.png`,kepetMegjelenit))
        // keplistaA.splice(vLszA, 1)
        // let vLszB = Math.floor(Math.random() * keplistaB.length)
        // palya.appendChild(elemFactory('div','cella',`./img/${keplistaB[vLszB]}.png`,kepetMegjelenit))
        // keplistaB.splice(vLszB, 1)
        
    }

}

function elemKivalaszt(lista){
    let vLsz = Math.floor(Math.random() * lista.length)
    kepSzam = lista[vLsz]
    palya.appendChild(elemFactory('div',`cella img${kepSzam}`, `./img/${kepSzam}.png`,kepetMegjelenit))
    lista.splice(vLsz, 1)

}





kepKivalaszt();



// palya.appendChild(elemFactory('div','cella','./img/2.png',kepetMegjelenit))
// palya.appendChild(elemFactory('div','cella','./img/3.png',kepetMegjelenit))
// palya.appendChild(elemFactory('div','cella','./img/4.png',kepetMegjelenit))
// palya.appendChild(elemFactory('div','cella','./img/5.png',kepetMegjelenit))
// palya.appendChild(elemFactory('div','cella','./img/6.png',kepetMegjelenit))
// palya.appendChild(elemFactory('div','cella','./img/1.png',kepetMegjelenit))
// palya.appendChild(elemFactory('div','cella','./img/2.png',kepetMegjelenit))
// palya.appendChild(elemFactory('div','cella','./img/3.png',kepetMegjelenit))
// palya.appendChild(elemFactory('div','cella','./img/4.png',kepetMegjelenit))
// palya.appendChild(elemFactory('div','cella','./img/5.png',kepetMegjelenit))
// palya.appendChild(elemFactory('div','cella','./img/6.png',kepetMegjelenit))
// palya.appendChild(elemFactory('div','cella','./img/1.png',kepetMegjelenit))
// palya.appendChild(elemFactory('div','cella','./img/2.png',kepetMegjelenit))
// palya.appendChild(elemFactory('div','cella','./img/3.png',kepetMegjelenit))
// palya.appendChild(elemFactory('div','cella','./img/4.png',kepetMegjelenit))
// palya.appendChild(elemFactory('div','cella','./img/5.png',kepetMegjelenit))
// palya.appendChild(elemFactory('div','cella','./img/6.png',kepetMegjelenit))
// palya.appendChild(elemFactory('div','cella','./img/1.png',kepetMegjelenit))
// palya.appendChild(elemFactory('div','cella','./img/2.png',kepetMegjelenit))
// palya.appendChild(elemFactory('div','cella','./img/3.png',kepetMegjelenit))
// palya.appendChild(elemFactory('div','cella','./img/4.png',kepetMegjelenit))
// palya.appendChild(elemFactory('div','cella','./img/5.png',kepetMegjelenit))
// palya.appendChild(elemFactory('div','cella','./img/6.png',kepetMegjelenit))













// var query=document.querySelectorAll('.cella')
// var getele=document.getElementsByClassName('cella')

// console.log("query",query)
// console.log("getele",getele)

// query.forEach(
//     (e)=>e.classList.remove('cella')
// )

// console.log("query",query)
// console.log("getele",getele)
