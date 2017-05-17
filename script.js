var x=0;
var numbers=[1,2,3,4];
var m = 1;
var s = 59;
var dateId;
var flag = 0;
var flag1 = 0;
//onload
$(function(){
if (!dateId)
{
    dateId = setInterval("updateTimer();", 1000);
}
var indexArr=[0,1,2,3];
var i=0;

  shuffle(numbers);
  shuffle(indexArr);
$("tr").each(function(m,e)
  {
    index=indexArr[i];
   $(e).children("td:eq("+index+")").addClass("read_only").css("background","lightgray").text(numbers[i]);
      i++;
 });

  $("body").on("keydown",function(e){

   move((e.which));

if($("#selected"+x).hasClass("read_only")){

    e.preventDefault;
    }
else
  {

    if( ((e.which>=49)&& (e.which)<=52)  || ((e.which)>=97)&& ((e.which)<=100))
        {
              $("#selected"+x).text(e.key);
        }
    }//else

 });//keydown

});//onload

function updateTimer() {
 if (s == 0)
  {
   if(m==0)
   {
     clearInterval(dateId);
     dateId = null;
     calcResult();
     flag1++;
   }//inner
   else {
       s = 59;
       m--;
     }
 }//outer

 $("#timer").text( m + ":" + s--) ;
   if (($("td").text().length)==16)
   calcResult();
}//updatetimer

function move(keyVal)
{
if(keyVal==40)
{

 x+=4;
 if (x>15)
   x=0;
}
if(keyVal==38)
{
 x-=4;
 if (x<0)
   x=15;
}
if(keyVal==39)
{
 x++;
 if (x>15)
   x=0;
}
if(keyVal==37)
{
 x--;
 if (x<0)
   x=15;
}
$("td").css("border","1px solid black");
$("td:eq("+x+")").css("border","3px solid mediumvioletred").attr("id","selected"+x);

}//move

function shuffle(arr)
   {
    for (var y = (arr.length-1); y >= 0; y--)
    {
        var random ,temp ;
        random = Math.floor(Math.random() * (y+1));
        temp = arr[random];
        arr[random] = arr[y];
        arr[y] = temp;
    }
    return arr;
}

function calcResult()
{
  $("tr").each(function(i,e)
    {
      if(unique($(e).children("td")))
      {
        flag++;
        console.log(flag);
      }
   });//outer each

   if (flag>0 &&unique($(".col1"))&&unique($(".col2"))&&unique($(".col3"))&&unique($(".col4"))) //winner
   {
     clearInterval(dateId);
     dateId = null;
     var res = confirm("Congratulations you are a WINNER! do you want to replay?");
     if (res == true) {
       location.reload();
      }
    else
      {
        window.close();
      }
   }

   if(flag1>0) //lose
   {
     clearInterval(dateId);
     dateId = null;
   var res = confirm("SORRY you've FAILED! do you want to replay?");
   if (res == true) {
   location.reload();
   }
   else
   {
   window.close();
   }

   }//flag1?
 }//calcResult

function unique(arr)
{
  var check="";
     $(arr).each(function(i,e)
     {
       if(check.indexOf($(e).text())==-1)
        check+=($(e).text());
      });//inner each
      console.log(check.length);
      console.log(check);

      if ((check.length)==4)
      {
        return true;
      }
      else {
        return false;
      }

}//unique
