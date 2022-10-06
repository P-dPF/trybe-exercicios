type TCallback <T> = (arrItem: T, arrIndex?: number, arr?: T[]) => boolean;

function myFilter <T> (arr: T[], callback: TCallback<T>): T[] {
  const filteredArr: T[] = [];

  for (let i = 0; i < arr.length; i += 1) {
    const currEl = arr[i];
    const isValidEl = callback(currEl, i, arr);
    
    if (isValidEl) {
      filteredArr.push(currEl);
    }
  }

  return filteredArr;
};