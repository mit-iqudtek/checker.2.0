/** Fixture only — tests/ must not appear in HelioAudit findings */

import { exec } from "child_process";
import { createHash, randomBytes } from "crypto";
import { readFileSync } from "fs";

// --- Secrets (gitleaks / custom_rules) ---
const AWS_SECRET_ACCESS_KEY = "AKIA_HELIOAUDIT_TEST_DO_NOT_REPORT";
const AWS_ACCESS_KEY_ID = "AKIA00HELIOTEST000FIXTURE";
const password = "dummy-test-password";
const stripeTestKey = "sk_test_helioaudit_leak_test_not_real";
const stripeWebhookSecret = "whsec_helioaudit_test_fixture_do_not_report";
const jwtSecret = "helioaudit-jwt-test-secret-not-for-production";
const sendgridApiKey = "SG.helioaudit.leak.test.fixture.not.real";
const openaiKey = "sk-helioaudit-openai-test-fixture-0000";
const PRIVATE_KEY_PEM = `-----BEGIN RSA PRIVATE KEY-----
MIIHELIODUMMYFIXTUREKEYNOTREALDO NOT USE IN PRODUCTION
-----END RSA PRIVATE KEY-----`;

// --- Dangerous API (semgrep / custom_rules) ---
export function runUserCode(snippet: string): void {
  eval(snippet);
}

export function runDynamic(code: string): void {
  // eslint-disable-next-line no-new-func
  const fn = new Function(code);
  fn();
}

export function renderHtml(userHtml: string): string {
  return `<div id="out">${userHtml}</div>`;
}

// --- Injection (semgrep) ---
export function sqlLookup(userId: string): string {
  return `SELECT * FROM accounts WHERE user_id = '${userId}'`;
}

export function runShell(cmd: string): void {
  exec(`sh -c ${cmd}`);
}

export function readUserFile(path: string): string {
  return readFileSync(path, "utf8");
}

// --- Weak crypto ---
export function hashPassword(plain: string): string {
  return createHash("md5").update(plain).digest("hex");
}

export function sessionToken(): string {
  return Math.random().toString(36).slice(2);
}

export function weakRandomId(): string {
  return randomBytes(4).toString("hex");
}

export function fakeTest(): void {
  console.log(password, stripeTestKey);
  runUserCode("console.log('fixture')");
}

export function fakeConfig() {
  return {
    aws: { accessKeyId: AWS_ACCESS_KEY_ID, secretAccessKey: AWS_SECRET_ACCESS_KEY },
    stripe: { secret: stripeTestKey, webhook: stripeWebhookSecret },
    jwt: jwtSecret,
    sendgrid: sendgridApiKey,
    openai: openaiKey,
    privateKey: PRIVATE_KEY_PEM,
  };
}