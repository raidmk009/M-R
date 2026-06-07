import { pbkdf2Sync, randomBytes, timingSafeEqual } from "crypto";

const DEFAULT_ADMIN_EMAIL = "admin@mr.dz";
const DEFAULT_ADMIN_PASSWORD = "Admin@12345";

function hashPassword(password: string, salt = randomBytes(16).toString("hex")) {
  const iterations = 120000;
  const hash = pbkdf2Sync(password, salt, iterations, 64, "sha512").toString("hex");
  return `${iterations}:${salt}:${hash}`;
}

function verifyPassword(password: string, encodedHash: string) {
  const [iterations, salt, storedHash] = encodedHash.split(":");
  if (!iterations || !salt || !storedHash) return false;

  const candidateHash = pbkdf2Sync(password, salt, Number(iterations), 64, "sha512");
  const storedBuffer = Buffer.from(storedHash, "hex");

  return storedBuffer.length === candidateHash.length && timingSafeEqual(storedBuffer, candidateHash);
}

export function verifyAdminCredentials(email: string, password: string) {
  const adminEmail = process.env.ADMIN_EMAIL ?? DEFAULT_ADMIN_EMAIL;
  const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH ?? hashPassword(DEFAULT_ADMIN_PASSWORD, "mr-demo-salt");

  return email === adminEmail && verifyPassword(password, adminPasswordHash);
}
