// your JS here


function apply()
{
    
var blockid=document.getElementById("block_id").value;
var color=document.getElementById("colour_id").value;

if(blockid>=1 && blockid<=9)
  document.getElementById(blockid).style.backgroundColor=color;
else
  alert("Id can not exceed 9");
}


// for(var id=0;id<idArr.length;id++)
// {
//     if(idArr[id]!=blockid)
//      {
//          document.getElementById(idArr[id]).style.backgroundColor="transparent";
//      }
// }


function reset()
{
    for(let id=1;id<=9;id++)
    {
        document.getElementById(id).style.backgroundColor="transparent";
    }

    document.getElementById("block_id").value="";
    document.getElementById("colour_id").value="";

}