'use strict';

function collectSameElements(collectionA, collectionB) {
  var arr=new Array;
  for (var i=0;i<collectionA.length;i++){
    for(var j=0;j<collectionB[0].length;j++){
      if(collectionB[0][j]==collectionA[i]){
        arr.push(collectionA[i]);
      }
    }
  }
  return arr;
}
