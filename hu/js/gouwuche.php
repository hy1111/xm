<?php
$id=$_POST['id'];
$jiage=$_POST['jiage'];
$shuliang=$_POST['shuliang'];
$title=$_POST['title'];
$urll=$_POST['urll'];
//第一步：实例化一个数据库对象
$sql= new mysqli();
	//第二步：执行连接数据库的代码
				//1.主机名		2.数据库账号          3.数据库密码   4.数据库的表名   没有的话用空字符串表示
$sql->connect('sql.m219.vhostgo.com','huyin','hu19971996520','huyin');
	//第三步：设置字符串编码
$sql -> set_charset('utf8');

	       //给数据库添加数据
	$res =$sql ->query("INSERT INTO `huyin`.`gouwuche` (`id`, `jiage`, `title`, `shuliang`, `url`) VALUES ('".$id."', '".$jiage."', '".$title."', '".$shuliang."', '".$urll."')");
//$res =$sql ->query("DELETE FROM `mysql`.`login` WHERE `login`.`name` = 'hy';");
if($res==1){
	echo "添加成功";
}else{
	echo "添加失败";
}


?>