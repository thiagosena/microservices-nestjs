import { Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ClientProxy, EventPattern } from '@nestjs/microservices';
import { Product } from './product.model';

@Controller('products')
export class ProductController {
   constructor(
      private productService: ProductService,
      @Inject('PRODUCT_SERVICE') private readonly client: ClientProxy
   ) { }

   @Get()
   async all() {
      return this.productService.all();
   }

   @Get(':id')
   async get(@Param('id') id: number) {
      return this.productService.findOne(id);
   }

   @Post(':id/like')
   async like(@Param('id') id: number) {
      const product: Product = await this.productService.findOne(id);
      product.likes += 1

      console.log(product)
      this.client.emit('product_liked', {
         id,
         likes: product.likes
      });

      return this.productService.update(id, {
         likes: product.likes
      });
   }

   @EventPattern('product_created')
   async created(product: any) {
      await this.productService.create({
         id: product.id,
         title: product.title,
         image: product.image,
         likes: product.likes
      });
   }

   @EventPattern('product_updated')
   async updated(product: any) {
      await this.productService.update(product.id, {
         id: product.id,
         title: product.title,
         image: product.image,
         likes: product.likes
      });
   }

   @EventPattern('product_deleted')
   async deleted(id: number) {
      await this.productService.delete(id);
   }
}
