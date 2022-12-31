
const isProd = process.env["NODE_ENV"] === 'production';

const setting = {
  isProd,
  subdir: isProd ? '/angular-sample-study' : '',
}

export default setting;
