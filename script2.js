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
    if (latszik.length==0){
        setTimeout(function(){
            let l=document.getElementsByClassName("latszik")
            Array.from(l).forEach(
                (e)=>{
                    e.style.backgroundImage=""
                    e.classList.remove('latszik')
                }
            )                   
        },1500)
    }
    console.log(latszik.length)
    if ((latszik.length<2)){
        this.style.backgroundImage=`url('${this.dataset.kep}')`
        this.classList.add("latszik")
    }
    
    if ((latszik.length == 2)){
        let elsoKep = document.getElementsByClassName("latszik")[0]
        let masodikKep = document.getElementsByClassName("latszik")[1]
        if (elsoKep.className == masodikKep.className){        
            elsoKep.classList.add("megtalalt")
            elsoKep.style.backgroundImage=""
            masodikKep.classList.add("megtalalt")
            masodikKep.style.backgroundImage=""
        }
    }    
}

function kepKivalaszt(){
    let keplistaA = []
    let keplistaB = []
    let kepekMax = 20
    for(let index = 1; index <kepekMax + 1; index++){
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
    }
}

function elemKivalaszt(lista){
    let vLsz = Math.floor(Math.random() * lista.length)
    kepSzam = lista[vLsz]
    palya.appendChild(elemFactory('div',`cella img${kepSzam}`, `./img/${kepSzam}.png`,kepetMegjelenit))
    lista.splice(vLsz, 1)
}

kepKivalaszt();
