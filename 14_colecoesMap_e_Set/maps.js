/*Um Map é uma coleção de pares chave-valor que pode usar qualquer tipo de dados como uma chave e manter a ordem de suas entradas. Os Maps têm elementos de ambos os Objetos (uma coleção única de pares chave-valor) e Matrizes (uma coleção ordenada). Porém, conceitualmente, eles são mais parecidos aos Objetos. Isso acontece porque, embora o tamanho e a ordem das entradas sejam preservados como em uma Matriz, as entradas - propriamente ditas - são pares chave-valor, como os Objetos.
const map = new Map()
*/

const Mymap = new Map();
console.log(Mymap);//Map(0) {}


//---------------------------------------------------------------------//


//Para adicioar um elemento ao maps a sintaxe: map.set('key', 'value')
Mymap.set('pais', 'Brasil');
console.log(Mymap);//Map(1) { 'pais' => 'Brasil' }


//---------------------------------------------------------------------//

//A proposito se pode iniciar o map ja na sua declaração;
const novo = new Map([['firstName', 'Luke'],['lastName', 'Skywalker'],['occupation', 'Jedi Knight'],]);
console.log(novo);/*Map(3) {
    'firstName' => 'Luke',
    'lastName' => 'Skywalker',
    'occupation' => 'Jedi Knight'
  } */


//---------------------------------------------------------------------//



  //Se eu usar a mesma key mais de uma vez, ela ira sobreescrever o value antigo para o mais atual(em ordem de inserção);
  console.log(Mymap);//Map(1) { 'pais' => 'Brasil' }
  Mymap.set('pais', 'Uruguai');
  console.log(Mymap);//Map(1) { 'pais' => 'Uruguai' }


  //---------------------------------------------------------------------//

//Chegar se existe dentro do Map:
console.log(Mymap.has('pais'));//true
console.log(Mymap.has('Uruguai'));//false--> Pois ele so verifica keys



  //---------------------------------------------------------------------//

//Eu ainda posso pegar um objeto já declarado e jogalo dentro do Map, usando o comando Object.entiries(nomeDoObjeto);

  const luke = {
    firstName: 'Luke',
    lastName: 'Skywalker',
    occupation: 'Jedi Knight',
  }
  
  const objetos = new Map(Object.entries(luke));
  console.log(objetos);/*Map(3) {
    'firstName' => 'Luke',
    'lastName' => 'Skywalker',
    'occupation' => 'Jedi Knight'
  } */
//Eu eu posso desfazer essa transformação usando o comando const variavel = Object.fromEntries(variavelAtrelada a meu Map):
const DeMapParaObjeto = Object.fromEntries(objetos);
console.log(DeMapParaObjeto);//{ firstName: 'Luke', lastName: 'Skywalker', occupation: 'Jedi Knight' }

  //---------------------------------------------------------------------//

  //Pegar o valor de uma key do objeto:

  console.log(Mymap);//Map(1) { 'pais' => 'Uruguai' }
  console.log(Mymap.get('pais'));//Uruguai

  //Vamos deletar essa nova key e value:

  Mymap.delete('pais');//Eu posso usar .Clear para limpar tudo que está dentro do meu Map
console.log(Mymap);//Map(0) {}
    //---------------------------------------------------------------------//
/*Em suma, os Maps são semelhantes aos Objetos no sentido de que têm pares de chave-valor, mas os Maps têm diversas vantagens em relação aos objetos:

Tamanho - Os Maps têm uma propriedade size, ao passo que os Objetos não têm uma maneira integrada de descobrir seu tamanho.
Iteração - Os Maps podem ser iterados diretamente, ao passo que os Objetos não.
Flexibilidade - Os Maps podem ter qualquer tipo de dados (primitivo ou Objeto) como a chave para um valor, enquanto Objetos admitem apenas strings.
Ordenados - Os Maps retêm sua ordem de inserção, ao passo que os objetos não têm uma ordem garantida. */


