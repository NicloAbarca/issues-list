import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { checkSnapshot } from '../utils/testUtils';
import IssueComment from './IssueComment';

Enzyme.configure({ adapter: new Adapter() });
it('renders a comment', () => {
  const comment = {
    user: {
      login: "somebody",
      avatar_url: "http://foo"
    },
    body: "a comment"
  };
  const tree = shallow(
    <IssueComment comment={comment}/>
  );
  checkSnapshot(tree);
});