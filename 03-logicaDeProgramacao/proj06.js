/* Entre 0 e 11 = 'Bom dia';
 * Entre 12 e 17 = 'Boa tarde';
 * Entre 18 e 23 = 'Boa noite';
 */

/* If pode ser usado sozinho
 * esmpre que utilizo a palavra else, preciso de um if antes
 * Eu posso ter vários else ifs na checagem
 * Só posso ter um else na checagem
 */
const hora = 10;

if (hora >= 0 && hora <= 11) {
  console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
  console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
  console.log('Boa noite');
} else {
  console.log('Olá');
}
