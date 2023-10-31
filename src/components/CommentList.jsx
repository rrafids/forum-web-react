import { commentModel } from '../models';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';

export default function CommentList({ comments }) {
  return (
    <div>
      {comments.map((comment) => (
        <CommentItem key={comment.id} {...comment} />
      ))}
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentModel)).isRequired,
};
