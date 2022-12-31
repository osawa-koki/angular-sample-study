
const isProd = process.env["NODE_ENV"] === 'production';

const setting = {
  isProd,
  title: 'Angular Sample Study 👍👍👍',
  subdir: isProd ? '/angular-sample-study' : '',
}

export default setting;
