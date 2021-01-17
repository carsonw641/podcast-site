import Author from "./author";

export default interface Blog {
    id: number;
    header: string;
    publishDate: string;
    body: string;
    author: Author;
};