export const Md1  = (location, cb) => {
  require.ensure([], require => {
    console.log(require('../3.md'),'qqqqqqqqqq')
    cb(null, require('../3.md').default);
  }, 'Md1');
};

