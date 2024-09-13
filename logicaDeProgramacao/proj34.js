function soma(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new RefereceError ('x e y precisam ser números.'); // Lançando um erro com 'throw' novo erro 'RefereceError'
  }
  return x + y;
}

try {
  console.log(soma(1, 2));
  console.log(soma('1', 2));
} catch (error) {
  // console.log(error);
  console.log('Alguma coisa amigável pro usuário.');
}
