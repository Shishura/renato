class Tabela{
    init(conexao){
        this.conexao = conexao;
        this.criarTabelaTickets();
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