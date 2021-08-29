export interface IAddress{
    street:string, 
    city:string,
    zipcode:string
}

export interface IUsers{
    id:number,
    name: string,
    email:string,
    address:IAddress
}