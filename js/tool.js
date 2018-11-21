
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


//收起、展开文本段落
<script>
    $(function(){
        var len = 60;      //默认显示字数
        var ctn = document.getElementById("details");  //获取div对象
        var content = ctn.innerHTML;                   //获取div里的内容

        //alert(content);
        var span = document.createElement("span");     //创建<span>元素
        var a = document.createElement("a");           //创建<a>元素
        span.innerHTML = content.substring(0,len);     //span里的内容为content的前len个字符

        a.innerHTML = content.length>len?"... 展开":"";  ////判断显示的字数是否大于默认显示的字数    来设置a的显示
        a.href = "javascript:void(0)";//让a链接点击不跳转

        a.onclick = function(){
            if(a.innerHTML.indexOf("展开")>0){      //如果a中含有"展开"则显示"收起"
                a.innerHTML = "<<&nbsp;收起";
                span.innerHTML = content;
            }else{
                a.innerHTML = "... 展开";
                span.innerHTML = content.substring(0,len);
            }
        }
        // 设置div内容为空，span元素 a元素加入到div中
        ctn.innerHTML = "";
        ctn.appendChild(span);
        ctn.appendChild(a);
    })
</script>
