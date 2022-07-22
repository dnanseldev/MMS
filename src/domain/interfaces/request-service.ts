import { Str } from "../types/utility-types"
import { TEntity } from "./base"


export abstract class TRequestService extends TEntity {
    protected solicitationCriationDate?: Date
    protected SSCode: string = Str.empty
    protected description: string = Str.empty
    protected userID: any
    protected location: string = Str.empty

    abstract set GenerateEntityID(id: any)
    abstract get GenerateSSCode(): string

    get GetEntityId() {
        if (this.ID !== null)
           return this.ID;         
    }
}