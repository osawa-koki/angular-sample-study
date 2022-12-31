
const isProd = process.env["NODE_ENV"] === 'production';

const setting = {
  isProd,
  title: 'Angular Sample Study 👍👍👍',
  subdirectory: isProd ? '/angular-sample-study' : '',
}

export default setting;
