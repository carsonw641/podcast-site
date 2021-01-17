import Author from "./author";

export default interface Podcast {
    id: number;
    title: string;
    publishDate: string;
    description?: string;
    author: Author
};