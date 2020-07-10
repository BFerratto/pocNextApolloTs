import Link from "next/link";
import { initializeApollo, useApollo } from "../lib/apollo";
import gql from "graphql-tag";
import { ensureConnection } from "../src/ensureConnection";

const Index = ({ initialApolloState }: any) => {
  const store = useApollo(initialApolloState);
  console.log({ store });
  // const { data } = useViewerQuery();
  // const { viewer } = data!;

  return (
    <div>
      <h1>This is your 1on1 helper!</h1>
      <h3>Your goals:</h3>

      <p>
        Check{" "}
        <Link href="/about">
          <a>goal details</a>
        </Link>{" "}
        here.
      </p>
    </div>
  );
};

export async function getServerSideProps() {
  await ensureConnection("ssr");
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: gql`
      query {
        account {
          id
          email
        }
      }
    `,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default Index;
