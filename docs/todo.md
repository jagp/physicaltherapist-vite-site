### Open items / TODO

- **Testing suite in the PR step (planned):** stand up an automated test suite that runs on every PR into `develop`, so nothing merges without passing tests. Wire it as CI (GitHub Actions) triggered on `pull_request` targeting `develop`. Tracked here until built.
- **Merge queue — open question:** the Trunk merge queue is being retired as overkill for a small team (Trunk itself is already off; renaming its workflow `.github/workflows/main.yml` → `main.yml.bak` is a pending manual step — pushing workflow-file changes needs the `workflow` OAuth scope the CLI token lacks). A merge queue mainly earns its keep at high throughput with many contributors racing independent merges. Revisit if the project shifts toward an open-source / many-remote-contributor model, where queued, individually-tested merges add real value. For now, a simple per-PR CI check (above) is the right scope.


thicker pass on the lettering in logo

design pass on optional service cards in service template pages


ensure CTA's jump-link to the #top of contact