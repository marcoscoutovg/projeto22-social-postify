import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateMediaDto } from "./dto/create.media.dto";
import { UpdateMediaDto } from "./dto/update.media.dto";

@Injectable()
export class MediasRepository {
    constructor(private readonly prisma: PrismaService) { }

    createMedia(body: CreateMediaDto) {
        return this.prisma.media.create({
            data: body
        });
    }

    findAll() {
        return this.prisma.media.findMany();
    }

    findById(id: number) {
        return this.prisma.media.findUnique({
            where: { id }
        });
    }

    updateMedia(id: number, body: UpdateMediaDto) {
        return this.prisma.media.update({
            where: { id },
            data:
                body
        })
    }

    deleteMedia(id: number) {
        return this.prisma.media.delete({
            where: { id }
        });
    }

}