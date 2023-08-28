import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { CreatePublicationDto } from './dto/create.publication.dto';
import { UpdatePublicationDto } from './dto/update.publication.dto';

@Controller('publication')
export class PublicationsController {
    constructor(private readonly publicationService: PublicationsService) { }

    @Post()
    create(@Body() body: CreatePublicationDto) {
        return this.publicationService.createPublication(body);
    }

    @Get()
    findAll() {
        return this.publicationService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.publicationService.findById(+id);
    }

    @Put(':id')
    updatePublication(@Param('id') id: string, @Body() body: UpdatePublicationDto) {
        return this.publicationService.updatePublication(+id, body);
    }

    @Delete(':id')
    deletePublication(@Param('id') id: string) {
        return this.publicationService.deletePublication(+id);
    }
}