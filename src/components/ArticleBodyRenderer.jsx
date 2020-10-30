import PropTypes from 'prop-types';
import './ArticleBodyRenderer.css';

const ArticleBodyRenderer = ({ body = '' }) => (
  <article>
    {body.split('\n').map((paragraph, idx) => (
      <p className="news-article-paragraph" key={`p-news-${idx + 1}`}>
        {paragraph}
      </p>
    ))}
  </article>
);

ArticleBodyRenderer.propTypes = {
  body: PropTypes.string,
};

ArticleBodyRenderer.default = {
  body: 'empty text',
};

export default ArticleBodyRenderer;
