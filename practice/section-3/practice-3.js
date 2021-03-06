'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var arr=[];
  for (var i=0;i<collectionA.length;i++){
    var time=0;
    if(arr.length==0){
      arr.push({key:collectionA[i],count:1});
    }
    else{
      for(var j=0;j<arr.length;j++){
        if(collectionA[i]==arr[j].key){
          arr[j].count++;
          break;
        }
        else{
          time++;
        }
      }
      if(time==arr.length){
        arr.push({key:collectionA[i],count:1});
      }
    }
  }
  for(var i=0;i<arr.length;i++){
    var num=arr[i].count;
    var time=0;
    for(var j=0;j<objectB.value.length;j++){
      if(arr[i].key==objectB.value[j]){
        while(num>=3){
          time++;
          num-=3;
        }
        arr[i].count-=time;
        break;
      }
    }
  }
  return arr;
}
