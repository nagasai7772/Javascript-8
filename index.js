var arr=[3,5,10,15,23,22,25,35,56];
var arr1=[];
for (value in arr)
{
    if(arr[value]%5==0)
    {
        arr1.push(arr[value]);
        
    }
}
console.log(arr1);

var str=["html","css","js","react","angular"];
var str1=[];
for (ans in str)
{
    if(ans%2==0)
    {

        str1.push(str[ans].toUpperCase());
        
    }
}
console.log(str1);

var arr=["htmL","csS","javaScripT","react","angulaR","nodE","EXPREss"];
var arr1=[];


for(value in arr)
{                    
        
               if(arr[value].at(-1)==arr[value].at(-1).toUpperCase())                       {
                arr1.push(arr[value]);
                
                
               }
               


               
}
console.log(arr1)
