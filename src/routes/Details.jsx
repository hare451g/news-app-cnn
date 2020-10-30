import BackButton from '../components/BackButton';
import Page from '../components/Page';
import NewsDetail from '../features/NewsDetails';

const DetailsPage = ({ category, id, slug }) => (
  <Page>
    <BackButton to="/" label={category} />
    <NewsDetail category={category} id={id} slug={slug} />
  </Page>
);

export default DetailsPage;
