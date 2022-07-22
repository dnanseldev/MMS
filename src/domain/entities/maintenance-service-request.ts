import { TRequestService } from "../interfaces/request-service"

export class MaintenanceServiceRequest  extends TRequestService
{
    
     SSCode!: string

     constructor( guideId: any
                 ,description: string 
                 )
    {
        super()
        this.ID = guideId
        this.description = description
        this.SSCode = this.GenerateSSCode
        this.solicitationCriationDate = new Date()
     }

     get GenerateSSCode(): string {
        return Math.floor(Math.random() * 1000000000).toString() + '-' +new Date().getFullYear()
     }
       

     InfoServiceInfo(): void
     {
        console.log(
            `SSN: ${this.SSCode}, Descricao: ${this.description}, Local: ${this.description}, Dta: ${this.solicitationCriationDate!.toLocaleDateString('pt-BR')} `
        )
     }

     set GenerateEntityID(id: any) {
      throw new Error("Method not implemented.")
     }
     
}