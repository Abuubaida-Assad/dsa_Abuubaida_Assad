

var intersect = function(nums1, nums2) {
    const map = new Map();
    for(let n of nums1){
        if (map.has(n)){
            map.set(n,map.get(n)+1)

        }
        else{
            map.set(n,1);
        }
    }
    let  result = [];
    for (let n of nums2){
        if(map.has(n)&&map.get(n)>0){
            result.push(n);
            map.set(n,map.grt(n)-1)
        }
    }
    return result
};

