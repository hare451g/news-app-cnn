import { CATEGORIES } from '../../api/constants';
import NewsCategoryItem from './NewsCategoryItem';
import './index.css';

const availableCategories = CATEGORIES.map((category) => ({
  imgUrl: `/images/${category}.png`,
  name: category,
}));

function NewsCategoryFeature() {
  return (
    <div className="news-category-container">
      {availableCategories.map(({ imgUrl, name }) => (
        <NewsCategoryItem imgURL={imgUrl} name={name} key={name} />
      ))}
    </div>
  );
}

export default NewsCategoryFeature;
