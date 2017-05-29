'use strict';

function collectSameElements(collectionA, objectB) {
  var arr=new Array;
  for (var i=0;i<collectionA.length;i++){
    for(var j=0;j<objectB.value.length;j++){
      if(objectB.value[j]==collectionA[i]){
        arr.push(collectionA[i]);
      }
    }
  }
  return arr;
}
