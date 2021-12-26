export default () => ({
  s3: {
    access_key: process.env.ACCESS_KEY,
    secret_key: process.env.SECRET_KEY,
    region: process.env.S3_REGION,
    bucket: process.env.S3_BUCKET,
  },
});
