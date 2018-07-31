<?php
/**
 * Created by PhpStorm.
 * User: 耿志强
 * Date: 2018/7/20
 * Time: 15:23
 */


/*
* 定义请求数据的方法,如GET、POST、AJAX
*/
define('IS_POST',strtolower($_SERVER["REQUEST_METHOD"]) == 'post');//判断是否是post方法
define('IS_GET',strtolower($_SERVER["REQUEST_METHOD"]) == 'get');//判断是否是get方法
define('IS_AJAX',isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest');//判断是否是ajax请求


/*
* array unique_rand( int $min, int $max, int $num )
* 生成一定数量的不重复随机数
* $min 和 $max: 指定随机数的范围
* $num: 指定生成数量
*/
function unique_rand($min, $max, $num) {
    $count = 0;
    $return = array();
    while ($count < $num) {
        $return[] = mt_rand($min, $max);             //mt_rand 比 rand快四倍
        print_r($return);
        $return = array_flip(array_flip($return));   //翻翻法去除重复数组，比使用array_unique()快得多
        $count = count($return);

    }
    shuffle($return);           //    打乱数组，为数组赋予新的键名，保证键名是 0-n 连续的数字。如果不进行此步骤，可能在删除重复值时造成键名不连续，给遍历带来麻烦;
    return $return;
}



echo unique_rand(1,100,5);
