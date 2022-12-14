
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
  priveteKey: `-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQClmC9Tgnn2kZXO
Ps/Ca8XEolinvFDyBP+8PaFMzwqcoeqa/Frn5Gea9h70FcBjLODipfDHvpO34cPn
hygcNV1zHQ1PhTgHUrOrx8Lnmyt05BPyWvqPKIPprb1xSRZoVXpgSgMDcjSObDzB
y+lhMO64wK9cEuPecOS26KWzzm9uEflouy8JLuxyECU2QWEUFWvH+7ffXnnerWUt
xlXBYri80CHZOUgG42LtlNF0gOjW6ghs4pPVF+kXStX2ZVmssKLAdtf/tWX4soz3
XDyVmFgEXdoPvINYkbrDZn0YA9RYr/52Ztu2W2zNQ1i4u/RpNm5DBaN2btkMwjWh
D+kjluw/AgMBAAECggEAFCnPuW9twmQ/xXlIevf8gNDz0pjPkmihax5mAaBEPoZI
ts57kzjwlKHbawUrA+h3CaIDC49dFUrcO9jtPWISGu4yrLgf9mRPlF8ikGkIhZcw
BpalY8EfLtkE9EJeBB5EZG0eqNDDLYRocYCOzlLS/pQXxjJWpMNCVjNF2fsM/m3n
uHar4qJ6g1g8CH5tw3Ui6GTAX8aaxI7q+sAJ04lvHiFAU3jY9Er/znCz3TGcAnmv
5g7KJZEjL93qeg7uR/OQr6wOoNVlYm1YifFlV2VGMmDsCLnsKSK4YWuMPEJW09dg
GtTggAWf4ngWBhUxx3W7IMHo+N4QfKXkMDYhW2vDAQKBgQDN6loC3GcWO/C/k/lb
wyAGmKmSaO9S4KdO+xuE9GmhBzwb2GkXGwOdredmYYVRYIEbA2TlN0Jo15rF4ntJ
0aavkwSzHUKaD5WMxvlQ0b8CNj4iMfDxAftXWEiiLFXP/8HEdtKJScNUGOd+BLR6
ndZ5r5MROUhIKO8kuML1mzFxHwKBgQDN3y9fdhqx92n4qosPZKB/05Ua7GTOF8Me
Ooa9LmRpdrBuj7mXzE8FfcSy33qXNAN6UQYUnsFUlmWwm6HvTElywLv7qj49/lOy
1Zn+WJ3/+D3L1ODYLMpwHiBeU8ss06m0eVMHMwnKrrawi2BoEK8L2bvqTmBlLIGO
NZqI+g2A4QKBgHH4zo1a1KwXzS8chh5mJ+m+wczJy/1BXxl2H0s9xOFeEcUPyUsC
psO1p6ihPZtHIO6EuGmuZlGFVKNGshqvseToKOfCwERpb8sVrpUvItvkjgt7PPMI
t8cmlD0+8NhJpURKyEk4zKZVinvTutlLV5TOu0YDQKDAF21p3m720SzdAoGANY2R
LSvz1ceecWkrs11hwt6vMsm7j0DvKLXgxuWCiUyuqJQKm0oyZCNLP5ySrzKAlRju
k/6YHADjgwV5Il6d3JP2Uoj+l/HIpAScgmVa9HMG4DcIJjPAlVnA4ci6WXbV9nR4
/K5yJZ89Nr+K3Ic6gcKp91FcEfV53hxjjq49RQECgYAKoiQMTFTPsTZzK8hFZMWZ
9SW3CVc9g+dT7oN82q+s0d6sx95BV+RsQUyVRAvfYxzUVYqmDhxRNTyaKwJUuBdz
+NlyvqkRVX53BR5n336NqJXAKLRuM/FaaNOFv1EL9wlUtKwd9ueb0uJYr0wbLMhQ
ZyaVBH849FHDDwvkmtcoVw==
-----END PRIVATE KEY-----`
}