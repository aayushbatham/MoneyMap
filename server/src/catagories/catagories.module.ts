import { Module } from '@nestjs/common';
import { CatagoriesService } from './catagories.service';
import { CatagoriesController } from './catagories.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Catagory, CatagorySchema } from './schemas/catagory/catagory';

@Module({
  providers: [CatagoriesService],
  controllers: [CatagoriesController],
  imports: [
    MongooseModule.forFeature([
      { name: Catagory.name, schema: CatagorySchema },
    ]),
  ],
})
export class CatagoriesModule {}
