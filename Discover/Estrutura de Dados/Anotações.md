----------------------------------------------------------------

Organizar os dados da aplicação
Entender estruturas para melhorar tomada de decisão
Escrever melhores algoritimos
Eficiência
Pode ser requisito para empresas

Alguns desafios diários de uso de dados são:
Entendimento de como estão nossos dados na aplicação
Criar listas
Repetição ou não de dados

----------------------------------------------------------------

O que é estrtura de dados?
Imagine um guarda roupa

Uma maneira de organizar e ordenar informações como textos, números, booleanos, etc e registrá-los na memória do computador.

Organizar dados (informações)
    Textos números e booleanos
    Como estão registrados na memória

// Array
[1, 2, 3]

// Object
{name: 'Fulano', idade: 20}

----------------------------------------------------------------

Gerenciando dados

Estrutura de dados tem a ver com a gestão das informações da aplicação

Para esse gerenciamento, podemos dividir em 3 etapas
1. Modelar a estrutura
2. Dar via à estrutura (instanciar essa estrutura)
3. Criar as funcionalidades dessa estrutura
    Exemplo: inserir, excluir, buscar, exibir, contar

----------------------------------------------------------------

Arrays

Array, vetor ou arranjo, é uma estrutura amplamente utilizada e implementada em quase todas as linguagens de programação.

Uma das estruturas mais básicas, simples de criar e utilizar

['a', 10, 'd', true] // total de 4 elementos
//0 ,1, 2, 3

Características
Acessa o elemento pelo index
Respeita a ordem de inserção dos elementos
Aceita valores duplicados

Arrays no JavaScript
São dinâmicos
Você pode criar array vazio e dados diferentes e mistrurados, strings, numbers, booleans, objetos, funções e outros arrays.
Existem muitos métodos já implementados
    push(), pop(), find(), filter(), entre outros

----------------------------------------------------------------

Matrix
Matriz ou Vetor multidimensional

Significa que é um array, dentro de outro array.
Poderemos ter muitos níveis.

----------------------------------------------------------------

Stack

Tradução de Stack é pilha

Como uma pilha de livros.
    Linear, um após o outro
    O último a entrar na pilha é o primeiro a sair

Conceitos

LIFO = Last In First Out
    O último elemento a entrar na pilha, aquele elemento do topo da pilha, é o primeiro a sair

----------------------------------------------------------------

Stack no código

Métodos fundamentais
    push() - adicionar um elemento à pilha
    pop() - remover o elemento do topo da pilha
    peek() - obter o elemento do topo da pilha

Outros métodos poderão ser implementados como o size() para mostrar o tamanho da pilha

----------------------------------------------------------------

Queue

Tradução de queue é fila

Como uma fila em uma loja ou restaurente.

    Linear
    O primeiro a entrar na fila é o primeiro a sair

Conceitos

FIFO = First In First Out
    O primeiro a entrar na fila, é o primeiro a sair dela

Front (frente) é a referência do primeiro elemento a entrar na fila = Dequeue (saindo da fila)

Back (fundo) é a referência do último elemento a entrar na fila = Enqueue (entrando na fila)

----------------------------------------------------------------

Queue no código

Métodos fundamentais
    enqueue() - adiciona um elemento ao final da fila
    dequeue() - remove o primeiro elemento a entrar na fila

Outros métodos poderão ser implementados como size() para mostrar o tamanho da fila ou front() para pegar o primeiro elemento

----------------------------------------------------------------

Visão geral

Usamos ED para gerenciar os dados, as informações da nossa aplicação
Organizar, ordenar, buscar, são algumas funcionalidades básicas
Melhorar a escrita de algoritmos
Melhorar a eficiência dos nossos aplicativos
Existem muitas estruturas a serem estudas

Estrutura de dados poderá ser um assunto pouco desafiador, especialmente para quem está no começo da jornada. Mas como qualquer outra habilidade, com o passar do tempo e prática diária, através de desafios da carreira, poderemos entender cada vez mais