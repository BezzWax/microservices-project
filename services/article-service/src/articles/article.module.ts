import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Article, ArticleSchema } from "./schemas/article.schema";
import { ArticleController } from "./articles.controller";
import { ArticlesService } from "./article.service";


@Module({
    imports: [
        MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }]),
    ],
    controllers: [ArticleController],
    providers: [ArticlesService],
    exports: [ArticlesService],
})

export class ArticleModule {}