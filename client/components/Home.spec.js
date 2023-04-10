/* global describe beforeEach it */

import { expect } from 'chai';
import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemberHome } from './MemberHome';

const adapter = new Adapter();
enzyme.configure({ adapter });

describe('MemberHome', () => {
  let memberHome = shallow(<MemberHome username="cody" />);

  it("renders the user's name in an h3", () => {
    expect(memberHome.text()).to.be.equal('Welcome back, cody!');
  });
});
