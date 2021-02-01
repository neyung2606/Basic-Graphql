import { CreateAuthorDto } from "src/author/dto/create-author.dto";

export class CreatePostDto {
    id: string;
    title: string;
    content: string;
    categories: [];
    createdAt: number;
    createdBy: CreateAuthorDto;
}