import PropTypes from 'prop-types';

import Page from '../components/Page';
import AllNewsFeature from '../features/AllNewsFeature';

const NewsListPage = ({ category }) => (
  <Page title={`Berita ${category}`}>
    <AllNewsFeature category={category} />
  </Page>
);

NewsListPage.propTypes = {
  category: PropTypes.string,
};

NewsListPage.defaultProps = {
  category: 'terkini',
};

export default NewsListPage;
