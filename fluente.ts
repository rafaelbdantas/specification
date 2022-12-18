interface Specification<T> {
  isSatisfiedBy(candidate: T): boolean;
  and(other: Specification<T>): Specification<T>;
  or(other: Specification<T>): Specification<T>;
  not(): Specification<T>;
}

class AbstractSpecification<T> implements Specification<T> {
  isSatisfiedBy(candidate: T): boolean {
    throw new Error('Not implemented');
  }

  and(other: Specification<T>): Specification<T> {
    return new AndSpecification(this, other);
  }

  or(other: Specification<T>): Specification<T> {
    return new OrSpecification(this, other);
  }

  not(): Specification<T> {
    return new NotSpecification(this);
  }
}

class PredicateSpecification<T> extends AbstractSpecification<T> {
  private readonly predicate: (candidate: T) => boolean;

  constructor(predicate: (candidate: T) => boolean) {
    super();
    this.predicate = predicate;
  }

  isSatisfiedBy(candidate: T): boolean {
    return this.predicate(candidate);
  }
}

class AndSpecification<T> extends AbstractSpecification<T> {
  private readonly left: Specification<T>;
  private readonly right: Specification<T>;

  constructor(left: Specification<T>, right: Specification<T>) {
    super();
    this.left = left;
    this.right = right;
  }

  isSatisfiedBy(candidate: T): boolean {
    return this.left.isSatisfiedBy(candidate) && this.right.isSatisfiedBy(candidate);
  }
}

class OrSpecification<T> extends AbstractSpecification<T> {
  private readonly left: Specification<T>;
  private readonly right: Specification<T>;

  constructor(left: Specification<T>, right: Specification<T>) {
    super();
    this.left = left;
    this.right = right;
  }

  isSatisfiedBy(candidate: T): boolean {
    return this.left.isSatisfiedBy(candidate) || this.right.isSatisfiedBy(candidate);
  }
}

class NotSpecification<T> extends AbstractSpecification<T> {
  private readonly spec: Specification<T>;

  constructor(spec: Specification<T>) {
    super();
    this.spec = spec;
  }

  isSatisfiedBy(candidate: T): boolean {
    return !this.spec.isSatisfiedBy(candidate);
  }
}

// Exemplo de uso:

