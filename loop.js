let qoyxona = ""

let qoy = +prompt("Nechta qo'yin  bor")
for (let i = 0; i < qoy; i++){
  if(i == 0){
    qoyxona = qoyxona + (i + 1) + " qo'y..."
  }else{
    qoyxona = qoyxona + (i + 1) + " qo'ylar..."

  }
}

console.log(qoyxona);