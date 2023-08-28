import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMediaDto } from './dto/create.media.dto';
import { UpdateMediaDto } from './dto/update.media.dto';
import { MediasRepository } from './medias.repository';

@Injectable()
export class MediasService {
    constructor(
        private readonly mediasRepository: MediasRepository
    ) { }

    async createMedia(body: CreateMediaDto) {
        return await this.mediasRepository.createMedia(body);
    }

    async findAll() {
        return await this.mediasRepository.findAll();
    }

    async findById(id: number) {
        const media = await this.mediasRepository.findById(id);

        if (!media) {
            throw new HttpException('Media not found', HttpStatus.NOT_FOUND);
        }

        return media;
    }

    async updateMedia(id: number, body: UpdateMediaDto) {
        const media = await this.mediasRepository.findById(id);

        if (!media) {
            throw new HttpException('Media not found', HttpStatus.NOT_FOUND);
        }

        return await this.mediasRepository.updateMedia(id, body);
    }

    async deleteMedia(id: number) {
        const media = await this.mediasRepository.findById(id);

        if (!media) {
            throw new HttpException('Media not found', HttpStatus.NOT_FOUND);
        }

        return await this.mediasRepository.deleteMedia(id);
    }
}