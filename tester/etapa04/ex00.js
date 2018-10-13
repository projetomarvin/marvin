function (a) {
  if (a.length > 1)
    return 'inválido';
  else if (a.toLowerCase() == 'a' || a.toLowerCase() == 'e' || a.toLowerCase() == 'i' ||a.toLowerCase() == 'o' || a.toLowerCase() == 'u')
    return 'vogal';
  else {
    return 'consoante';
  }
}
