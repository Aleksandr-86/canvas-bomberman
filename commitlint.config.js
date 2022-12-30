module.exports = {
  "extends": ["@commitlint/config-conventional"],
  "plugins": ["selective-scope"],
  "rules": {
    "selective-scope": [
      2,
      "always",
      {
        "feat": ["client", "server"],
        "refactor": ["client", "server"],
        "fix": ["client", "server"],
      }
    ]
  }
}
