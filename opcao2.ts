// interface Specification<T> {
//     isSatisfiedBy(candidate: T): boolean;
//   }
  
//   class AndSpecification<T> implements Specification<T> {
//     private readonly left: Specification<T>;
//     private readonly right: Specification<T>;
  
//     constructor(left: Specification<T>, right: Specification<T>) {
//       this.left = left;
//       this.right = right;
//     }
  
//     isSatisfiedBy(candidate: T): boolean {
//       return this.left.isSatisfiedBy(candidate) && this.right.isSatisfiedBy(candidate);
//     }
//   }
  
//   class OrSpecification<T> implements Specification<T> {
//     private readonly left: Specification<T>;
//     private readonly right: Specification<T>;
  
//     constructor(left: Specification<T>, right: Specification<T>) {
//       this.left = left;
//       this.right = right;
//     }
  
//     isSatisfiedBy(candidate: T): boolean {
//       return this.left.isSatisfiedBy(candidate) || this.right.isSatisfiedBy(candidate);
//     }
//   }
  
//   class NotSpecification<T> implements Specification<T> {
//     private readonly spec: Specification<T>;
  
//     constructor(spec: Specification<T>) {
//       this.spec = spec;
//     }
  
//     isSatisfiedBy(candidate: T): boolean {
//       return !this.spec.isSatisfiedBy(candidate);
//     }
//   }
  
//   // Exemplo de uso:
  
//   const spec1 = new MinimumLengthSpecification(5);
//   const spec2 = new ContainsNumberSpecification();
  
//   const andSpec = new AndSpecification(spec1, spec2);
//   const orSpec = new OrSpecification(spec1, spec2);
//   const notSpec = new NotSpecification(spec1);
  
//   if (andSpec.isSatisfiedBy('12345')) {
//     console.log('A senha atende a todas as especificações');
//   }
  
//   if (orSpec.isSatisfiedBy('abcde')) {
//     console.log('A senha atende a pelo menos uma das especificações');
//   }
  
//   if (notSpec.isSatisfiedBy('123')) {
//     console.log('A senha não atende à especificação');
//   }
  