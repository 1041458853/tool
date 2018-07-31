



//，返回一个数组，这个数组保存了
/*
* 作用：为map数组排序
* 参数：   map：准备排序的数组
*         shunxu：决定是从小到大还是从大到小，0为从小到大，1为从大到小，默认为0
* 返回：一个数组，此数组按顺序记录了map中的键
* */
function sortMap(map,shunxu = 0){
    var keys = new Array();
    for(var key in map){
        keys.push(key);
    }
    if(shunxu == 1){
        keys.sort(function(a,b){return a-b});
    }else {
        keys.sort(function(a,b){return b-a});
    }

    for(var index in keys){
        keys[index];
    }
    return keys;
}