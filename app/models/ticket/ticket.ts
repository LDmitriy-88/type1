// Определить интерфейс ITicket

export interface ITicket{
    name: string;
    description: string;
};

// Определить интерфейс IVipTicket который расширяет  ITicket
export interface IVipTicket{
    vipStatus: string;
    name: string;
    description: string;
    tourOperator: string;
};

// Определить тип TicketType который будет объединять 2 интерфейса IVipTicket и ITicket

export type TicketType = ITicket & IVipTicket 
