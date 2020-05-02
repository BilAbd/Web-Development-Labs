export class ProdItem {
    id: number;
    name: string;
    description: string;
    rating: number;

    ProdItem(name: string, description: string, rating: number){
        this.name = name;
        this.description = description;
        this.rating = rating;
    }
  }

  export class Category {
      id: number;
      name: string;
      products: ProdItem[];
  }