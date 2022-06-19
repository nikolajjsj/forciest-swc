import { Flex, Page } from '~/components/stitches/containers';
import { NextPageWithLayout } from './_app';
import { trpc } from '../utils/trpc';
import { Character } from '../components/Character';

const IndexPage: NextPageWithLayout = () => {
  // const utils = trpc.useContext();
  const optionsQuery = trpc.useQuery(['options.get-two-characters'], {});
  // const addPost = trpc.useMutation('post.add', {
  //   async onSuccess() {
  //     // refetches posts after a post is added
  //     await utils.invalidateQueries(['post.all']);
  //   },
  // });

  if (optionsQuery.isLoading) return null;
  if (!optionsQuery.data) return null;

  const { first, second } = optionsQuery.data;

  if (first === undefined || second === undefined) {
    return <div>Error</div>;
  }

  return (
    <Page>
      <h1>Welcome to the forciest Star Wars character</h1>

      <Flex flow="row" css={{ justifyContent: 'center', gap: 100 }}>
        <Character option={first} />

        <Character option={second} />
      </Flex>
    </Page>
  );
};

export default IndexPage;
