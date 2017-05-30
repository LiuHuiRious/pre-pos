'use strict';

function countSameElements(collection) {
  var arr=[];
  for (var i=0;i<collection.length;i++){
    var time=0;
    if(collection[i].length==1){
      if(arr.length==0){
        arr.push({name:collection[i],summary:1});
      }
      else{
        for(var j=0;j<arr.length;j++){
          if(collection[i]==arr[j].name){
            arr[j].summary++;
            break;
          }
          else{
            time++;
          }
        }
        if(time==arr.length){
          arr.push({name:collection[i],summary:1});
        }
      }
    }
    else{
      var reg1=/\d+/;
      var reg2=/[a-z]/;
      var count =collection[i].match(reg1);
      var char =collection[i].match(reg2);
      if(arr.length==0){
        arr.push({name:char.toString(),summary:parseInt(count)});
      }
      else{
        for(var j=0;j<arr.length;j++){
          if(char.toString()==arr[j].name){
            arr[j].summary+=parseInt(count);
            break;
          }
          else{
            time++;
          }
        }
        if(time==arr.length){
          arr.push({name:char.toString(),summary:parseInt(count)});
        }
      }
    }
  }
  return arr;
}
