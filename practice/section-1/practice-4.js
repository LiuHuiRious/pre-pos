'use strict';

function collectSameElements(collectionA, collectionB) {
  var arr=new Array;
  for (var i=0;i<collectionA.length;i++){
    for(var j=0;j<collectionB.value.length;j++){
      if(collectionB.value[j]==collectionA[i].key){
        arr.push(collectionA[i].key);
      }
    }
  }
  return arr;
}
