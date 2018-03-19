<?php @error_reporting(0);
$yh=$_POST['yh'];
$mm=$_POST['mm'];
$sj=$_POST['sj'];
$yx=$_POST['yx'];
$sql= new mysqli();
	//第二步：执行连接数据库的代码
				//1.主机名		2.数据库账号          3.数据库密码   4.数据库的表名   没有的话用空字符串表示
$sql->connect('www.hulihong.top','hulihong','hbBE79jmJY','hulihong');
	//第三步：设置字符串编码
$sql -> set_charset('utf8');
//if($flag==0){
	$res =$sql ->query("INSERT INTO `hulihong`.`zhuce` (`name`, `password`, `shouji`, `youxiang`) VALUES ('".$yh."', '".$mm."', '".$sj."', '".$yx."')");
    if($res==1){
	echo "success";
}else{
	echo "failed";
}

?>
	