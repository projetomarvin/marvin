function aa(a) {
  let count = 0
  for (var i = 0; i < a.length; i++) {
    if (typeof a[i] === 'string') {
      count++
    }
  }
  return count;
}
