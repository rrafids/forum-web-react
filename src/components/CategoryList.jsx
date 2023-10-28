import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';
import { categoryModel } from '../models';

export default function CategoryList({ categories }) {
  return (
    <div className='flex space-x-[10px] text-gray-600 mt-[10px] text-sm'>
      {categories.map((category) => (
        <CategoryItem key={category.id} {...category} />
      ))}
    </div>
  );
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape(categoryModel)).isRequired,
};
