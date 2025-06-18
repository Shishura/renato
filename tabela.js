class Tabela{
    init(conexao){
        this.conexao = conexao;
        this.criarTabelaTickets();
    }

    

criarTabelaUsuarios(){
    const sql = `
        CREATE TABLE IF NOT EXISTS usuarios(
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(255) NOT NULL UNIQUE,
            senha VARCHAR (255) NOT NULL 
           );`;


    this.conexao.query(sql,(error)=>{
        if(error){
            comsole.log(error.message);
        }
        console.log('Tabela criada com sucesso')
    })
}
    criarTabelaTickets(){
        const sql = `
                CREATE TABLE IF NOT EXIST tickts(
                codigo INT PRIMARY KEY,
                titulo VARCHAR(255) NOT NULL,
                descricao TEXT NOT NULL, 
                dataAbertura DATE NOT NULL,
                resolvido BOOLEAN NOT NULL
                );`;
                this.conexao.query(sql , (error) =>{
                    if(error) console.log(error.message);
                    console.log('Tabela criada com sucesso')
                });
    }
}
module.exports = new Tabela(); 