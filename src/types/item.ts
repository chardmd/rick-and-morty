export interface Item {
    id: number,
    name: string;
    species: string;
    status: string;
    type: string;
    gender: string;
    origin: {
        name: string;
    }
    location: {
        name: string
    }
    image: string;
}