# Open items

- **Testing suite in the PR step (planned):** stand up an automated test suite that runs on every PR into `develop`, so nothing merges without passing tests. Wire it as CI (GitHub Actions) triggered on `pull_request` targeting `develop`. Tracked here until built.

**Merge queue — open question:** the Trunk merge queue is being retired as overkill for a small team (Trunk itself is already off; renaming its workflow `.github/workflows/main.yml` → `main.yml.bak` is a pending manual step — pushing workflow-file changes needs the `workflow` OAuth scope the CLI token lacks). A merge queue mainly earns its keep at high throughput with many contributors racing independent merges. Revisit if the project shifts toward an open-source /

- many-remote-contributor model, where queued, individually-tested merges add real value. For now, a simple per-PR CI check (above) is the right scope.

Add versioning to deploy messages, admin sitelog
Automatic changelog created with git commits

Pipe successful deployments TO MAIN to mom's professional email (and mine)
Pipe successful deployments to my email
Pipe BROKEN deployments to my email with urgent flag

add testing suite to ensure:
contact form is sending live email
no links that don't navigate anywhere on live
no image placeholders
nav

Fix timeline hover functoinality

wire up contact form to termporary cloudflare email for now

long-term: send and receive mail from domain-based email account

Book a Consultation header, CTA links dont appear to navigate correctly on live

Timeline view on About does not appear to have recent dev changes to hover

thicker pass on the lettering in logo

design pass on optional service cards in service template pages

add preload to inner services/about/contact
tweak footer h4->h3 for seo hierarchy
ensure CTA's jump-link to the #top of contact

Re-enable Trunk

Re-enable github./trunk CI

Draft post-mortem

OPerform & record initial Lighthouse audit results

Set up automatic testing by lighthouse

from Lighthouse:
add meta desc

Perform JSON/LD validation

Inconsistent subject match on servivce page images

set up tom e tracking softwarde
stg rram]trnailer
set mom up in a opafypfurTrim planning docs / Fork main project to PII agnostic version?
