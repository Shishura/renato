// Dados simulados
const artigos = [
    { titulo: 'Javascript', descricao: 'Linguagem de programação', autor: 'roberto', paginas: 1 },
    { titulo: 'Java', descricao: 'Uma linguagem de programação', autor: 'mauricio', paginas: 4 },
    { titulo: 'Python', descricao: 'Uma linguagem', autor: 'textor', paginas: 1 },
];

// Função para criar um novo artigo
exports.criarTitulo = (req, res) => {
    const { titulo, descricao, autor, paginas } = req.body;

    // Verifica se o autor já existe no array de artigos
    const autorExistente = artigos.some(artigo => artigo.autor === autor);
    
    if (!autorExistente) {
        return res.status(400).send('Autor não encontrado entre os artigos cadastrados. Por favor, adicione um artigo com esse autor.');
    }

    artigos.push({ titulo, descricao, autor, paginas });
    res.status(201).send('Artigo criado com sucesso');
};

// Função para listar todos os artigos
exports.listarArtigos = (req, res) => {
    res.render('artigos', { artigos }); // Renderiza todos os artigos
};

// Função para buscar um artigo pelo título
exports.listarTitulos = (req, res) => {
    const index = artigos.findIndex(a => a.titulo === req.params.titulo); // Busca o artigo pelo título
    if (index === -1) {
        res.status(404).send('Artigo não encontrado');
    } else {
        res.status(200).json(artigos[index]); // Retorna o artigo encontrado em formato JSON
    }
};

// Função para remover um artigo pelo título
exports.removerTitulo = (req, res) => {
    const index = artigos.findIndex(a => a.titulo === req.params.titulo); // Procura o artigo pelo título
    if (index === -1) {
        res.status(404).send('Artigo não encontrado');
    } else {
        artigos.splice(index, 1); // Remove o artigo da lista
        res.status(200).send('Artigo deletado com sucesso');
    }
};

// Função para listar todos os autores
exports.listarAutores = (req, res) => {
    const autores = [...new Set(artigos.map(a => a.autor))]; // Cria uma lista única de autores
    res.render('autores', { autores }); // Renderiza os autores
};

// Função para criar um novo autor (não precisamos mais de controle separado)
exports.criarAutor = (req, res) => {
    const { autor } = req.body;
    
    // Verifica se o autor já existe entre os artigos
    const autorExistente = artigos.some(artigo => artigo.autor === autor);
    
    if (autorExistente) {
        return res.status(400).send('Autor já existe nos artigos.');
    }

    // Cria um artigo fictício para o autor
    artigos.push({ titulo: 'Novo Artigo', descricao: 'Artigo para autor', autor, paginas: 1 });
    res.status(201).send('Autor registrado com sucesso.');
};

// Função para remover um autor (remove todos os artigos associados ao autor)
exports.removerAutor = (req, res) => {
    const autor = req.params.autor;
    const artigosFiltrados = artigos.filter(a => a.autor !== autor);

    if (artigosFiltrados.length === artigos.length) {
        return res.status(404).send('Autor não encontrado.');
    }

    // Filtra todos os artigos que não pertencem ao autor
    artigos.length = 0; // Limpa o array de artigos
    artigos.push(...artigosFiltrados); // Insere de volta os artigos restantes
    res.status(200).send('Autor removido com sucesso e artigos deletados.');
};
