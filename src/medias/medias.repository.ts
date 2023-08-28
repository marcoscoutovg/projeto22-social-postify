import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateMediaDto } from "./dto/create.media.dto";
import { UpdateMediaDto } from "./dto/update.media.dto";

@Injectable()
export class MediasRepository {
    constructor(private readonly prisma: PrismaService) { }

    async createMedia(body: CreateMediaDto) {
        return await this.prisma.media.create({
            data: body
        });
    }

    async findAll() {
        return await this.prisma.media.findMany();
    }

    async findById(id: number) {
        return await this.prisma.media.findUnique({
            where: { id }
        });
    }

    async updateMedia(id: number, body: UpdateMediaDto) {
        return await this.prisma.media.update({
            where: { id },
            data:
                body
        })
    }

    async deleteMedia(id: number) {
        return await this.prisma.media.delete({
            where: { id }
        });
    }

}