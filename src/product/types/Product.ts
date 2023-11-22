import { ObjectType, Field, ID, Directive } from 'type-graphql';

@Directive('@key(fields: "id")')
@ObjectType()
export class Product {
    @Field(() => ID)
    id: string;

	@Field()
    name: string;

	@Field()
    price: number;
}
