import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatePublicationDto } from "./dto/create.publication.dto";
import { UpdatePublicationDto } from "./dto/update.publication.dto";

@Injectable()
export class PublicationsRepository {
    constructor(private readonly prisma: PrismaService) { }

    createPublication(body: CreatePublicationDto) {
        return this.prisma.publication.create({ data: body });
    }

    findAll() {
        return this.prisma.publication.findMany();
    }

    findById(id: number) {
        return this.prisma.publication.findUnique({
            where: { id }
        });
    }

    updatePublication(id: number, body: UpdatePublicationDto) {
        return this.prisma.publication.update({
            where: { id },
            data: body
        });
    }

    deletePublication(id: number) {
        return this.prisma.publication.delete({
            where: { id }
        });
    }
}