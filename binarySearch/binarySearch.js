const binarySearch = (list, item) => {
  let low = 0,
    high = list.length - 1;
  let mid;
  //console.log(mid);

  while (low <= high) {
    mid = low + Math.round((high - low) / 2);
    if (list[mid] === item) {
      return mid;
    }
    if (list[mid] > item) {
      high = mid - 1;
    }
    if (list[mid] < item) {
      low = mid + 1;
    }
  }
  return null;
};

let list, item;
list = [1, 2, 4, 6, 7, 10, 20, 30];
item = 0;
console.log(binarySearch(list, item));
