export const Md1  = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../3.md').default);
  }, 'Md1');
};

