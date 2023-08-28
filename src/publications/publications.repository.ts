import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatePublicationDto } from "./dto/create.publication.dto";
import { UpdatePublicationDto } from "./dto/update.publication.dto";

@Injectable()
export class PublicationsRepository {
    constructor(private readonly prisma: PrismaService) { }

    async createPublication(body: CreatePublicationDto) {
        return await this.prisma.publication.create({ data: body });
    }

    async findAll() {
        return await this.prisma.publication.findMany();
    }

    async findById(id: number) {
        return await this.prisma.publication.findUnique({
            where: { id }
        });
    }

    async updatePublication(id: number, body: UpdatePublicationDto) {
        return await this.prisma.publication.update({
            where: { id },
            data: body
        });
    }

    async deletePublication(id: number) {
        return await this.prisma.publication.delete({
            where: { id }
        });
    }
}