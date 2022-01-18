const tasks = (arr) => arr.join(" && ");

module.exports = {
  hooks: {
    "pre-commit": tasks(["lint-staged", "yarn tsc --noEmit", "yarn test"]),
    "prepare-commit-msg": tasks(["exec < /dev/tty", "git cz --hook || true"]),
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
  },
};
