'use strict';

function countSameElements(collection) {
  var arr=[];
  for (var i=0;i<collection.length;i++){
    var time=0;
    if(arr.length==0){
      arr.push({key:collection[i],count:1});
    }
    else{
      for(var j=0;j<arr.length;j++){
        if(collection[i]==arr[j].key){
          arr[j].count++;
          break;
        }
        else{
          time++;
        }
      }
      if(time==arr.length){
        arr.push({key:collection[i],count:1});
      }
    }
  }
  return arr;
}
