'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for(var i=0;i<collectionA.length;i++){
    var num=collectionA[i].count;
    var time=0;
    for(var j=0;j<objectB.value.length;j++){
      if(collectionA[i].key==objectB.value[j]){
        while(num>=3){
          time++;
          num-=3;
        }
        collectionA[i].count-=time;
        break;
      }
    }
  }
  return collectionA;
}
