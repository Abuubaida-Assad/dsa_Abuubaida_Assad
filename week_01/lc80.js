var merge = function(nums1, m, nums2, n) {
    let low = m - 1;
    let high = n - 1;
    let k = m + n - 1;

    while (high >= 0) {
        if (low >= 0 && nums1[low] > nums2[high]) {
            nums1[k] = nums1[low];
            low--;
        } else {
            nums1[k] = nums2[high];
            high--;
        }

        k--;
    }
};
