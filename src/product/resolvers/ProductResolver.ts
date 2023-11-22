import { Resolver, Query } from 'type-graphql';
import { Product } from '../types/Product';

@Resolver(() => Product)
export class ProductResolver {
  @Query(() => [Product])
	products(): Product[] {
		return [
			{ id: '1', name: 'Product 44', price: 19.99 },
			{ id: '2', name: 'Product 2', price: 29.99 },
		];
	}
}
