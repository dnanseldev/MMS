
import { TRequestService } from "../interfaces/request-service"
import { MaintenanceServiceRequest } from "./maintenance-service-request"


const msr: TRequestService = new MaintenanceServiceRequest()

msr.InfoServiceInfo()