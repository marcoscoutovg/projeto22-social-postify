import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create.post.dto';
import { UpdatePostDto } from './dto/update.post.dto';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
    constructor(private readonly postsRepository: PostsRepository) { }

    async createPost(body: CreatePostDto) {
        if ((!body.title) || (!body.text)) throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
        return await this.postsRepository.createPost(body);
    }

    async findAll() {
        return await this.postsRepository.findAll();
    }

    async findById(id: number) {
        const post = await this.postsRepository.findById(id);

        if (!post) {
            throw new HttpException('Post not Found', HttpStatus.NOT_FOUND)
        }

        return post;
    }

    async updatePost(id: number, body: UpdatePostDto) {
        const post = await this.postsRepository.updatePost(id, body);
        return post;
    }

    async deletePost(id: number) {
        const post = await this.postsRepository.findById(Number(id));
        if (!post) {
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND)
        }

        return await this.postsRepository.deletePost(Number(id));
    }
}