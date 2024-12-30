export default class Cliente{
    private id: string;
    private nome: string;
    private idade: number;
    constructor(nome: string, idade:number, id:string = null){
        this.nome=nome;
        this.idade=idade;
        this.id=id;
    }
    static vazio(): Cliente {
        return new Cliente('', 0, '');  // Retorna um cliente vazio, não lança um erro
    }
    getIdade():number{
        return this.idade;
    }
    getId():string{
        return this.id;
    }
    getNome():string{
        return this.nome;
    }
}