import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create.post.dto';
import { UpdatePostDto } from './dto/update.post.dto';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) { }

    @Post()
    create(@Body() body: CreatePostDto) {
        return this.postsService.createPost(body);
    }

    @Get()
    findAll() {
        return this.postsService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.postsService.findById(+id);
    }

    @Put(':id')
    updatePost(@Param('id') id: string, @Body() body: UpdatePostDto) {
        return this.postsService.updatePost(+id, body);
    }

    @Delete(':id')
    deletePost(@Param('id') id: string) {
        return this.postsService.deletePost(+id);
    }
}