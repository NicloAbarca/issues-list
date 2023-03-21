import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { checkSnapshot } from '../utils/testUtils';
import IssueComments from './IssueComments';

Enzyme.configure({ adapter: new Adapter() });

it('renders with no comments', () => {
  const tree = shallow(<IssueComments/>);
  checkSnapshot(tree);
});

it('renders comments', () => {
  const comment = {
    user: {
      login: "somebody",
      avatar_url: "http://foo"
    },
    body: "a comment"
  };
  const comments = [{...comment, id: 1}, {...comment, id: 2}];
  const tree = shallow(
    <IssueComments comments={comments}/>
    );
  checkSnapshot(tree);
});