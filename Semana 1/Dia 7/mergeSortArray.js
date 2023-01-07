const merge = (nums1, m, nums2, n) => {
    let i = m - 1 , j = n - 1;
    let k = m + n - 1;
    while(i >= 0 && j >= 0) {
        if(nums1[i] >= nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
    while(i >= 0)
        nums1[k--] = nums1[i--]
    while(j >= 0)
        nums1[k--] = nums2[j--]
    return nums1
}

module.exports = merge;