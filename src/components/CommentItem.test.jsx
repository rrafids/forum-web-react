import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import CommentItem from './CommentItem';

describe('CommentItem component', () => {
  it('should comment item correctly', async () => {
    // arrange
    const item = {
      id: 'comment-1',
      content: 'Ini adalah komentar pertama',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'user-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
    };

    render(<CommentItem {...item} />);

    // action
    const ownerNameElement = screen.getByRole('heading', {
      name: 'John Doer',
    });

    // assert
    expect(ownerNameElement).toHaveTextContent(item.owner.name);
  });

  afterEach(() => {
    cleanup();
  });
});
