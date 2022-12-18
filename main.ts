interface Product {
    name: string;
    price: number;
    category: string;
  }
  
  class ProductSpecification {
    private rules: ((product: Product) => boolean)[] = [];
  /**
   *
   */
  constructor() {
    
  }
    public withName(name: string): ProductSpecification {
      this.rules.push((product) => product.name === name);
      return this;
    }
  
    public withPriceGreaterThan(price: number): ProductSpecification {
      this.rules.push((product) => product.price > price);
      return this;
    }
  
    public withCategory(category: string): ProductSpecification {
      this.rules.push((product) => product.category === category);
      return this;
    }
  
    public isSatisfiedBy(product: Product): boolean {
      return this.rules.every((rule) => rule(product));
    }
  }
  
  const products: Product[] = [
    { name: "Product 1", price: 10, category: "Category 1" },
    { name: "Product 2", price: 20, category: "Category 1" },
    { name: "Product 3", price: 30, category: "Category 2" },
    { name: "Product 4", price: 40, category: "Category 2" },
  ];
  
  const specification = new ProductSpecification()
    .withCategory("Category 1")
    .withPriceGreaterThan(15);
  
  const result = products.filter(product => specification.isSatisfiedBy(product));
  
  console.log(result); // [{ name: "Product 2", price: 20, category: "Category 1" }]
  