function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const arr: number[] = [];
  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      arr.push(nums1[i]);
      i++;
    } else {
      arr.push(nums2[j]);
      j++;
    }
  }

  while (i < nums1.length) {
    arr.push(nums1[i]);
    i++;
  }

  while (j < nums2.length) {
    arr.push(nums2[j]);
    j++;
  }

  const length = arr.length;
  if (length % 2 === 0) {
    return (arr[length / 2 - 1] + arr[length / 2]) / 2;
  } else {
    return arr[Math.floor(length / 2)];
  }
}

console.log(findMedianSortedArrays([1, 3], [2])); // 2
