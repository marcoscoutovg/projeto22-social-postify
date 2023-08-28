import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePublicationDto } from './dto/create.publication.dto';
import { UpdatePublicationDto } from './dto/update.publication.dto';
import { PublicationsRepository } from './publications.repository';

@Injectable()
export class PublicationsService {
    constructor(
        private readonly publicationsRepository: PublicationsRepository,
    ) { }

    async createPublication(body: CreatePublicationDto) {
        return await this.publicationsRepository.createPublication(body);
    }

    async findAll() {
        return await this.publicationsRepository.findAll();
    }

    async findById(id: number) {
        const publication = await this.publicationsRepository.findById(id);

        if (!publication) {
            throw new HttpException('Publication not found', HttpStatus.NOT_FOUND);
        }

        return publication;
    }

    async updatePublication(id: number, body: UpdatePublicationDto) {
        const publication = await this.publicationsRepository.findById(id);
        if (!publication) {
            throw new HttpException('Publication not found', HttpStatus.NOT_FOUND);
        }

        return await this.publicationsRepository.updatePublication(id, body);
    }

    async deletePublication(id: number) {
        const publication = await this.publicationsRepository.findById(id);
        if (!publication) {
            throw new HttpException('Publication not found', HttpStatus.NOT_FOUND);
        }

        return await this.publicationsRepository.deletePublication(id);
    }
}