import { ProductService } from './product.service';
import { ClientProxy } from '@nestjs/microservices';
import { Product } from './product.model';
export declare class ProductController {
    private productService;
    private readonly client;
    constructor(productService: ProductService, client: ClientProxy);
    all(): Promise<Product[]>;
    get(id: number): Promise<Product>;
    like(id: number): Promise<any>;
    created(product: any): Promise<void>;
    updated(product: any): Promise<void>;
    deleted(id: number): Promise<void>;
}
