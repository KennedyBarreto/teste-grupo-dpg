function PesquisaDePalavras(grid, word) {
    const m = grid.length; // número de linhas na grade
    const n = grid[0].length; // número de colunas na grade
    const direcoes = [[0, 1], [0, -1], [1, 0], [-1, 0]]; // todas as direções possíveis (cima, baixo, esquerda, direita)

    // Função de busca em profundidade (DFS) para encontrar a word na grade
    function dfs(i, j, index) {
        // Se o índice for igual ao comprimento da word, a word foi encontrada
        if (index === word.length) return true;

        // Se as coordenadas estiverem fora dos limites da grade ou se a letra não corresponder, retorna falso
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j].toUpperCase() !== word[index].toUpperCase()) return false;

        const temp = grid[i][j]; // guarda o valor atual da célula
        grid[i][j] = ''; // marca a célula como vazia para evitar reutilização

        // Itera sobre todas as direções possíveis e continua a busca em profundidade
        for (let direcao of direcoes) {
            const novoI = i + direcao[0]; // atualiza a linha
            const novoJ = j + direcao[1]; // atualiza a coluna
            if (dfs(novoI, novoJ, index + 1)) return true; // se a busca encontrar a word, retorna verdadeiro
        }

        grid[i][j] = temp; // restaura o valor original da célula para futuras iterações
        return false; // se a word não for encontrada nesta direção, retorna falso
    }

    // Itera sobre todas as células da grade para encontrar o início potencial da word
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // Verifica se a primeira letra da word coincide com a letra atual na grade
            if (grid[i][j].toUpperCase() === word[0].toUpperCase() && dfs(i, j, 0)) return true; // inicia a busca em profundidade se houver correspondência
        }
    }

    return false; // Se a word não for encontrada em nenhuma célula da grade, retorna falso
}

// Exemplo de uso:
const grid = [
    ['O', 'C', 'Q', 'S'],
    ['B', 'D', 'F', 'A']
];
const word = "FADA"; // Palavra a ser procurada
const word2 = "safq"; // Não é necessário que a word esteja em letras maiúsculas

console.log(PesquisaDePalavras(grid, word)); // Deve retornar false
console.log(PesquisaDePalavras(grid, word2)); // Deve retornar true
