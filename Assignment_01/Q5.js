var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
result = removeDuplicates(Mynum);
function removeDuplicates(num)
{
 var x;
 length=num.length,
 out=[],
 obj={};
 for(x=0;x<length;x++)
 {
     obj[num[x]]=0;
 }

console.log(obj);
console.log("--------------");
console.log(out);
for(x in obj)
{
    out.push(x);
}
console.log(out);
}