import { ISBN } from "@/library/domain/ISBN.ts";

export interface Book {
  isbn: ISBN;
  title: string;
  pages: number;
}
