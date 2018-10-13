function cap(a) {
  const init = a.slice(0, 3).toUpperCase()
  const rest = a.slice(3, a.length)
  return init + rest;
}
