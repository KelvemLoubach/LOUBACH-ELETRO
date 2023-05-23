
interface createProductsInterface  {
    userId: number;
    description: string;
    price: number;
    inStock?: string | null
    name: string;
    category: string
    guarantee?: string | null 
    image1?: string | null
    image2?: string | null
    image3?: string | null
    image4?: string | null
    oldPrice?: string | null
}

export default createProductsInterface;

// description String
// price Int
// inStock String? 
// name String
// guarantee String?
// image String?
// oldPrice Int?