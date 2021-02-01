import { Author } from "src/author/interface/author.interface";

export interface Post {
    id: string;
    title: string;
    content: string;
    categories: [];
    createdAt: number;
    createdBy: Author;
}