export interface Post{
    id: string;

    title: string;
    content: string;
    timestamp: Date;

    tags: string[];
}

export interface Pageable{
    content: Post[];
    
    pageable: any;
    
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    sort: any;
    first: boolean;

    number: number;
    numberOfElements: number;

    empty: boolean;
}