import {Controller, Get, HttpService, Param, Post} from '@nestjs/common';
import {ProductService} from './product.service';
import {EventPattern} from '@nestjs/microservices';

@Controller('products')
export class ProductController {
   constructor(
      private productService: ProductService,
      private httpService: HttpService
   ) {
   }

   @Get()
   async all() {
      return this.productService.all();
   }

   @Post(':id/like')
   async like(@Param('id') id: number) {
      const product = await this.productService.findOne(id);
      this.httpService.post(`http://localhost:8001/api/products/${id}/like`, {}).subscribe(
         res => {
            console.log('liked', res);
         }
      )
      return this.productService.update(id, {
         likes: product.likes + 1
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
