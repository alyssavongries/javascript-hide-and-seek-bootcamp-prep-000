function getFirstSelector(selector){
 return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n){
  const ranked = document.querySelectorAll('.ranked-list')
  const fList = ranked[0].children
  const sList = ranked[1].children
  
  for (let i = 0 ; i < fList.length ; i++){
    fList[i].innerHTML = parseInt(1*fList[i].innerHTML + 1*n)
  }
  
  for (let i = 0 ; i < sList.length ; i++){
    sList[i].innerHTML = parseInt(1*sList[i].innerHTML + 1*n)
  }
}

function deepestChild(){
  var deeper = document.getElementById('grand-node').querySelectorAll('div');
  return deeper[deeper.length-1]
}

