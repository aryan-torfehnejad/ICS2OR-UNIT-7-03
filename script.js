let age = 0
document.getElementById('button').addEventListener('click', rating)
function rating () {
  age = document.getElementById('input').value
  age = parseInt(age)
  if ( age > 18){
    document.getElementById('answer').innerHTML = 'You can watch a R rated movie or anything below'}
  else if ( age >= 13){
    document.getElementById('answer').innerHTML = 'You can watch a pg 13 rated movie or anything below'
  }
  else if (age>=10){
    document.getElementById('answer').innerHTML='You can watch pg rated movies or G rated movies'
  } 
  else {
    document.getElementById('answer').innerHTML='your too young to watch any movie'
  }
}
