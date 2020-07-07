import Link from "next/link";
import { useViewerQuery, ViewerDocument } from "../lib/viewer.graphql";
import { initializeApollo } from "../lib/apollo";

const Index = () => {
  const { data } = useViewerQuery();
  const { viewer } = data!;

  return (
    <div>
      <h1>This is your 1on1 helper!</h1>
      <h3>Your goals:</h3>
      <p>Goal name: {viewer.name}. </p>
      <p>The status of this goal is: {viewer.status}.</p>
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

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ViewerDocument,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default Index;
