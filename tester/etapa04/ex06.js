function aa(a) {
  if (typeof a !== 'number') {
    return false;
  } else if (a % 2 === 0 && a >= 0) return true;
  else {
    return false;
  }
}
