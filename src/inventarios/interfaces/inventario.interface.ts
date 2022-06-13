export interface Inventario extends Document {
    readonly idProducto: number;
    readonly movement: string;
    readonly date: Date;
    readonly nroInvoice: string;
    readonly description: string;
    readonly units: number;
    readonly unitPrice: number;
    readonly totalPrice: number;
}
