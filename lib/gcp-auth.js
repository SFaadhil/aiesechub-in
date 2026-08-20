import crypto from 'crypto';

// Shared-password session for the /login GCP Hub review dashboard.
// The cookie stores `${expiry}.${hmac}` — no user data, so there is nothing
// to leak, and it can't be forged without GCP_SESSION_SECRET.

export const GCP_SESSION_COOKIE = 'gcphub_session';
const SESSION_TTL_MS = 1000 * 60 * 60 * 12; // 12 hours

function getSecret() {
  const secret = process.env.GCP_SESSION_SECRET;
  if (!secret) throw new Error('GCP_SESSION_SECRET is not set');
  return secret;
}

function sign(value) {
  return crypto.createHmac('sha256', getSecret()).update(value).digest('hex');
}

export function createSessionToken() {
  const expires = Date.now() + SESSION_TTL_MS;
  const payload = String(expires);
  return `${payload}.${sign(payload)}`;
}

export function isValidSessionToken(token) {
  if (!token || typeof token !== 'string') return false;
  const [payload, signature] = token.split('.');
  if (!payload || !signature) return false;

  let expectedBuf, actualBuf;
  try {
    expectedBuf = Buffer.from(sign(payload), 'hex');
    actualBuf = Buffer.from(signature, 'hex');
  } catch {
    return false;
  }
  if (expectedBuf.length !== actualBuf.length) return false;
  if (!crypto.timingSafeEqual(expectedBuf, actualBuf)) return false;

  const expires = Number(payload);
  if (!Number.isFinite(expires) || Date.now() > expires) return false;

  return true;
}

export function checkAdminPassword(password) {
  const expected = process.env.GCP_ADMIN_PASSWORD;
  if (!expected || typeof password !== 'string' || !password) return false;
  const expectedBuf = Buffer.from(expected);
  const actualBuf = Buffer.from(password);
  if (expectedBuf.length !== actualBuf.length) return false;
  return crypto.timingSafeEqual(expectedBuf, actualBuf);
}
