import {Injectable} from '@nestjs/common'
import {TypeOrmModuleOptions, TypeOrmOptionsFactory} from '@nestjs/typeorm'
import {TYPEORM} from 'src/environments'

@Injectable()
export class TypeOrmService implements TypeOrmOptionsFactory {
   async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
      return {
         ...TYPEORM
         //entities: [getMetadataArgsStorage().tables.map(tbl => tbl.target)]
         // synchronize: true,
         // autoLoadEntities: true,
         // useNewUrlParser: true,
         // useUnifiedTopology: true,
         // keepConnectionAlive: true,
         // logging: true
      }
   }
}