export class SolicitacaoServico
{
    private dataOperacao: Date;

    constructor( 
                private SSCode: string
                ,private descricao: string
                ,private userId: string
                ,private localizacao: string 
                ,private id?: string)
    {
        this.dataOperacao = new Date()
        this.SSCode = this.GenerateSolCode
    }

     InfoServiceInfo(): void
     {
        console.log(
            `SSN: ${this.SSCode}, Descricao: ${this.descricao}, Local: ${this.localizacao}, Dta: ${this.dataOperacao.toLocaleDateString('pt-BR')} `
        )
     }

     private get GenerateSolCode(): string  {        
        return Math.floor(Math.random() * 1000000000).toString() + '-' +new Date().getFullYear()        
     }
}