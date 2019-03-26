import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped, initialState;

beforeEach(() => {
  initialState = {
    comments: ['Comment 1', 'Comment 2']
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('creates one LI per comment', () => {
  expect(wrapped.find('li').length).toEqual(initialState.comments.length);
});

it('shows the text for each comment', () => {
  initialState.comments.forEach((comment) => {
    expect(wrapped.render().text()).toContain(comment);
  });
});