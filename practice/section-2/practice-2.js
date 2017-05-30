'use strict';

function countSameElements(collection) {
  var arr=[];
  for (var i=0;i<collection.length;i++){
    var time=0;
    if(collection[i].length==1){
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
    else{
      var arrN=collection[i].split('-');
      if(arr.length==0){
        arr.push({key:arrN[0],count:parseInt(arr[1])});
      }
      else{
        for(var j=0;j<arr.length;j++){
          if(arr[0]==arr[j].key){
            arr[j].count+=arrN[1];
            break;
          }
          else{
            time++;
          }
        }
        if(time==arr.length){
          arr.push({key:arrN[0],count:parseInt(arrN[1])});
        }
      }
    }
  }
  return arr;
}
