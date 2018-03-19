<?php @error_reporting(0);
$yh=$_POST['yh'];
$mm=$_POST['mm'];
$sql= new mysqli();
$sql->connect('www.hulihong.top','hulihong','hbBE79jmJY','hulihong');
$sql -> set_charset('utf8');
   $res =$sql ->query("SELECT * FROM `zhuce` WHERE `name` LIKE '".$yh."' AND `password` LIKE '".$mm."'");
//      $content=array();
//		while($arr = $res -> fetch_array()){
//          $content[] = $arr;
//      }
//		echo json_encode($content);		
//	}	
$row=$res ->fetch_row();
if($row[0]==$yh && $row[1]==$mm){
	echo "登陆成功";
}else{
	echo "登陆失败";
};

?>