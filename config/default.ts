
export default {
  port: 3050,
  dbUri: process.env.MONGO_URI,
  saltWorkFactor: 10,
  accessTokenTtl: '15m',
  refreshTokenTtl:'1y',
  publicKey: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApZgvU4J59pGVzj7PwmvF
xKJYp7xQ8gT/vD2hTM8KnKHqmvxa5+RnmvYe9BXAYyzg4qXwx76Tt+HD54coHDVd
cx0NT4U4B1Kzq8fC55srdOQT8lr6jyiD6a29cUkWaFV6YEoDA3I0jmw8wcvpYTDu
uMCvXBLj3nDktuils85vbhH5aLsvCS7schAlNkFhFBVrx/u331553q1lLcZVwWK4
vNAh2TlIBuNi7ZTRdIDo1uoIbOKT1RfpF0rV9mVZrLCiwHbX/7Vl+LKM91w8lZhY
BF3aD7yDWJG6w2Z9GAPUWK/+dmbbtltszUNYuLv0aTZuQwWjdm7ZDMI1oQ/pI5bs
PwIDAQAB
-----END PUBLIC KEY-----`,
  priveteKey: process.env.PRIVATE_JWT_KEY
}