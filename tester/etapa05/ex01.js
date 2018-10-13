function a(a) {
  if (!Array.isArray(a)) {
    console.log('isso não é uma array');
    return null;
  } else {
    return a.length;
  }
}
