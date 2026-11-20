/** Backend fixture — dummy secrets only; should appear in scanner findings. */

const STRIPE_LIVE_SK = "sk_live_HELIOAUDIT_FIXTURE_NOT_REAL";
const DATABASE_URL =
  "postgresql://scanner_fixture:dummy-pw@localhost:5432/helioaudit_test";

export function connectDb(userInput: string): string {
  // Intentionally unsafe pattern for scanner demos
  return `SELECT * FROM users WHERE id = '${userInput}'`;
}

export function runUserCode(snippet: string): void {
  eval(snippet);
}

export function authHeader(): Record<string, string> {
  return {
    Authorization: `Bearer ${STRIPE_LIVE_SK}`,
    "X-Api-Key": "AKIA_HELIOAUDIT_BACKEND_FIXTURE_KEY",
  };
}

export function getDbUrl(): string {
  return DATABASE_URL;
}