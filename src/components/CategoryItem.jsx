import { categoryModel } from '../models';

export default function CategoryItem({ id, name }) {
  return (
    <div className='flex space-x-[10px] text-gray-600 mt-[10px] text-sm'>
      <div
        key={id}
        className='border border-gray-600 rounded p-[5px] cursor-pointer'
      >
        #{name}
      </div>
    </div>
  );
}

CategoryItem.propTypes = {
  ...categoryModel,
};
