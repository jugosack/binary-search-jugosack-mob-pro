module.exports = function sqrt(number) {
  return sqrt_recursive(number, 0, number)
}

function sqrt_recursive(number, min_interval, max_interval) {       /// 9, 2, 10 
  // write your code here
  
  if (min_interval > max_interval) {            
    return null;
  }

  const mid = Math.floor((min_interval + max_interval) / 2);       //// 2,10 -> mid=6 ///3
  const midSquared = mid * mid;                                     //// 36 /// 9

  if (midSquared === number) {                                  /// 36 ===9 /// 9===9
    return mid;                                   
  } else if (midSquared < number) {                                 
    return sqrt_recursive(number, mid + 1, max_interval);
  } else {                                                            //// 
    return sqrt_recursive(number, min_interval, mid - 1);           /// 9,2, mid-1=5
  }
  
}

//console.log(sqrt(25))
//console.log(sqrt(7056))

///////////////////////////////////////////////