import { HttpService } from '@nestjs/common';
import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    private httpService;
    constructor(productService: ProductService, httpService: HttpService);
    all(): Promise<import("./product.model").Product[]>;
    like(id: number): Promise<any>;
    created(product: any): Promise<void>;
    updated(product: any): Promise<void>;
    deleted(id: number): Promise<void>;
}
