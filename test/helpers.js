/**
 * @module test/helpers
 */

const Adapter = require('enzyme-adapter-react-16');
const { expect } = require('chai');
const { mount, render, shallow, configure } = require('enzyme');

configure({ adapter: new Adapter() });

global.expect = expect;
global.mount = mount;
global.render = render;
global.shallow = shallow;
