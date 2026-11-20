/** Fixture only — coverage/ must not appear in HelioAudit findings */

const apiKey = "sk-test-coverage-should-not-appear";
const stripeSecret = "sk_live_helioaudit_coverage_fixture_not_real";
const awsAccessKeyId = "AKIA_HELIOAUDIT_COV_FIXTURE";
const awsSecretAccessKey = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYHELIODUMMYKEY";
const githubPat = "ghp_HELIOAUDIT_COVERAGE_TEST_DO_NOT_REPORT";
const databaseUrl =
  "postgres://cov_user:dummy_cov_password@127.0.0.1:5432/coverage_fixture";
const slackWebhook =
  "https://hooks.slack.com/services/T000/HELIOAUDIT/COVERAGE_FIXTURE";

module.exports = {
  apiKey,
  stripeSecret,
  awsAccessKeyId,
  awsSecretAccessKey,
  githubPat,
  databaseUrl,
  slackWebhook,
};