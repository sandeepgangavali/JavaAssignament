console.log(differenceOfArrays([1, 2, 3], [100, 2, 1, 10]));

function differenceOfArrays(array1,array2)
{

    var temp = [];
arr1 = array1.toString().split(',').map(Number);
arr2 = array2.toString().split(',').map(Number);

    for (var i in array1) {
        if(arr2.indexOf(arr1[i]) === -1) temp.push(arr1[i]);
        }
        for(i in array2) {
        if(arr1.indexOf(arr2[i]) === -1) temp.push(arr2[i]);
        }
        return temp.sort((a,b) => a-b);
        }
