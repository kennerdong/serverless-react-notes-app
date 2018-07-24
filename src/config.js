export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    // REGION: "ap-southeast-1",
    BUCKET: "my-react-notes"
  },
  apiGateway: {
    REGION: "ap-southeast-1",
    URL: "https://d3f1crmguk.execute-api.ap-southeast-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "ap-southeast-1",
    USER_POOL_ID: "ap-southeast-1_IBFdPh68L",
    APP_CLIENT_ID: "1875cu5fv20adpdaot2ppindhr",
    IDENTITY_POOL_ID: "ap-southeast-1:d1fddb5f-85de-44c3-817d-cbe1a0f767a1"
  }
};
