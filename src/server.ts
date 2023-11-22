import 'reflect-metadata';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { ProductResolver } from './product';
import { buildFederatedSchema } from './helper/buildFederatedSchema';
async function startApolloServer() {
	const schema = await buildFederatedSchema({resolvers: [ProductResolver]});

	const server = new ApolloServer({ schema });
	const port = 4000;

	try {
		const { url } = await startStandaloneServer(server, {
			listen: { port },
		});

		console.log(`🚀 Subgraph reviews running at ${url}`);
	} catch (err) {
		console.error(err);
	}
}

startApolloServer();
