<?php
  if(isset($_POST['ddir'])) 
  {
    $str =$_POST['ddir'];
while($str[strlen($str)-1]!='\\'){
$str = substr($str,0,-1);}
$str = substr($str,0,-1);
$str = substr($str,1);
//echo $str;

if (!file_exists('../corner/del'.$str)) {
  
    // Create a new file or direcotry
    mkdir('../corner/del'.$str, 0777, true);
    //echo "done";
}
if (file_exists($_POST['ddir'])) {
    //unlink($_POST['ddir']);
$main=$_POST['ddir'];
//$mainl= "del/".$_POST['ddir'];
rename($main,'../corner/del'.$main);
    echo "Deleted";
} else {
    echo "Already deleted";
}

  }
  if(isset($_POST['rdir'])) 
  {
    
    $fileName =$_POST['rdir'];
    $degrees = -90;
    $info   = getimagesize($fileName);
  $mime   = $info['mime'];
  //echo $mime;
if(str_contains($mime, 'png')){
    $source = imagecreatefrompng($fileName);
     
    $rotate = imagerotate($source, $degrees, 0);
    
    imagepng($rotate, $fileName);
    
    echo "Rotated";}
if(str_contains($mime, 'jpeg')){
    $source = imagecreatefromjpeg($fileName);
     
    $rotate = imagerotate($source, $degrees, 0);
    
    imagejpeg($rotate, $fileName);
    
    echo "Rotated";}
if(str_contains($mime, 'webp')){
    $source = imagecreatefromwebp($fileName);
     
    $rotate = imagerotate($source, $degrees, 0);
    
    imagewebp($rotate, $fileName);
    
    echo "Rotated";}
if(str_contains($mime, 'gif')){
    $source = imagecreatefromgif($fileName);
     
    $rotate = imagerotate($source, $degrees, 0);
    
    imagegif($rotate, $fileName);
    
    echo "Rotated";}

if(str_contains($mime, 'bmp')){
    $source = imagecreatefrombmp($fileName);
     
    $rotate = imagerotate($source, $degrees, 0);
    
    imagebmp($rotate, $fileName);
    
    echo "Rotated";}

  }
if(isset($_POST['refresh'])) {
$cd=1;
  }
  if(isset($_POST['edit'])) {
echo exec('mspaint.exe "D:\ProgramCache\CodeBlocks\MinGW\bin\nn\pics'.$_POST['edit'].'"');
  }
  if(isset($cd)) {
    $path = './';
$array = array();
$arrayf = array();$fi=0;

$i=0;
$objects = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($path), RecursiveIteratorIterator::SELF_FIRST);
foreach($objects as $name => $object){
    if(str_contains(strtolower($name), '.jpg')||str_contains(strtolower($name), '.gif')||str_contains(strtolower($name), '.tiff')||str_contains(strtolower($name), '.jpeg')||str_contains(strtolower($name), '.jfif')||str_contains(strtolower($name), '.png')){
        if(str_contains($name, '\\for\\')){
            $arrayf[] = array('id' => $fi, 'url' => $name);$fi=$fi+1;
        }
        $array[] = array('id' => $i, 'url' => $name);$i=$i+1;
    //echo "$name\n";$i=$i+1;
    }
}
$fp = fopen('dir.js', 'w');
fwrite($fp, 'DATA='.json_encode($array).';'.PHP_EOL .'DATAf='.json_encode($arrayf)).';';
fclose($fp);unset($cd);
  }
  ?>