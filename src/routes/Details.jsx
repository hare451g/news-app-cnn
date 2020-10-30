import Page from '../components/Page';
import NewsDetail from '../features/NewsDetails';

const DetailsPage = ({ category, id, slug }) => (
  <Page>
    <NewsDetail category={category} id={id} slug={slug} />
  </Page>
);

export default DetailsPage;
