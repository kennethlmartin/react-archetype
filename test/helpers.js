/**
 * @module test/helpers
 */

const Adapter = require('enzyme-adapter-react-16');
const sinon = require('sinon');
const { expect } = require('chai');
const { mount, render, shallow, configure } = require('enzyme');

const config = require('config');

require('regenerator-runtime/runtime');
require('@babel/register')({
  extensions: config.get('files.extensions'),
});
require('ignore-styles');

configure({ adapter: new Adapter() });

global.expect = expect;
global.mount = mount;
global.render = render;
global.shallow = shallow;
global.sinon = sinon;
