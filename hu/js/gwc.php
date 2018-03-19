<?php @error_reporting(0);
$id=$_POST['id'];
$sql= new mysqli();
$sql->connect('sql.m219.vhostgo.com','huyin','hu19971996520','huyin');
$sql -> set_charset('utf8');
   $res =$sql ->query("SELECT * FROM  `gouwuche` WHERE  `id` = '".$id."'LIMIT 0 , 30");
$row=$res ->fetch_row();
  echo $row; 
//  $.each($row,function(k,v){
//	 echo $row[k];
// });
    
   
//if($row[0]==$yh && $row[1]==$mm){
//	echo "登陆成功";
//}else{
//	echo "登陆失败";
//};

?>