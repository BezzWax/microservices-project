import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ArticlesService } from "./article.service";
import { CreateArticleDto } from "./dto/create-article.dto";
import { UpdateArticleDto } from "./dto/update-article.dto";


@Controller('article')
export class ArticleController {
    constructor(private readonly articleService: ArticlesService) {}

    @Post()
    create(@Body() createArticleDto: CreateArticleDto) {
        return this.articleService.create(createArticleDto);
    }

    @Get()
    findAll() {
        return this.articleService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.articleService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
      return this.articleService.update(id, updateArticleDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.articleService.delete(id);
    }
}