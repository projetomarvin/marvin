function aa(a) {
  let max = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] > max) {
        max = a[i];
    }
  }
  return max;
}
