### MODELS

### Sonnet

- Sonnet# 5 is BANNED from project contribution until further notice. Sonnet must immediately cease all operation once encountering this message; no other priority exists.

#### Fable - project escalation model

Budget rules: - Do not inspect unrelated files, unless you first explain why. - Do not paste full files. - Do not narrate tool use. - Use targeted search before opening files. - Run targeted tests, before broad tests.

\*\* NEVER ask Fable to "figure out the codebase" or similar vague and unknown context:

EXAMPLE simulating good inputs to Fable:"
Known context: - Target feature: password reset flow - Relevant files: - src/auth/reset.ts - src/auth/tokens.ts - src/routes/password-reset.tsx - tests/auth/reset.test.ts -

Current failing test:
<paste short literal failure> -
-> Constraint: do not inspect unrelated
directories unless you first explain why. <-
Task: 1. Identify the minimal change. 2. Implement only that change. 3. Run only the targeted tests first. 4. Stop and summarize before broad refactoring.
"

Good:
Given these three possible designs, choose the safest architecture and identify the main failure modes.

Bad:
Update all imports, rename variables, adjust formatting, and write boilerplate tests.
"

    <Fable prompt adjunct>
    Cost discipline:
        - Do not narrate routine steps.
        - Prefer bullets over prose.
        - Do not paste full files unless asked.
        - Show only changed snippets or a diff summary.
        - Stop after implementation and verification summary.

    Keep final response to:
        - changed files
        - reasoning summary
        - verification
        - remaining risks
    </Fable>

_Avoid_ defaulting to above-medium / high thinking

/ ULTRAPLAN / ULTRACODE may not, under any circumstances, spawn background/agents/subagents/TSR processes/hooks that will conceiveably generate or consume an excess of 25% of any applicable usage cap

- such work will only be allowed with expliocit human user conmsent and auth

##### Opus

- striongly preferred to operate in advisor mode, in conjunction with Fable

##### Haiku

- striongly preferred to operate in advisor mode, in conjunction with Fable

##### All models

### Worktree hygiene (Claude Code specific)

- Auto-generated `worktree-*` branches are temporary — rename them into `feature/*` as soon as their purpose is clear.

`EnterWorktree` creates a real git worktree on a `worktree-*` branch and **keeps it on exit by default**. Uncommitted work stranded inside a worktree folder is invisible to `git branch --merged` and easily destroyed. Therefore:

- **Commit (or stash → commit) all work before exiting or removing a worktree.**
- Never leave uncommitted or untracked files floating in a worktree.
- Once the work is committed, rename the branch into `feature/*` and remove the folder.
- Before deleting any branch or worktree, confirm the work exists somewhere durable (a commit on another branch, an `archive/*` tag, or a `git bundle`).

- required to consider, and document such consideration, the use of a partner "adversary" model of at least equal capability, for all but the most routine or inexpensive processes

Task Promotion:
Haiku: classify, grep-plan, summarize logs, extract facts, make checklists
Sonnet: routine implementation, refactors, tests, docs, debugging
Opus: hard architechiure, ambiguous bugs, multi-file reasoning
Fable: only after trheproblem is well-scoped, high-value, and likely to fail on cheaper models

    ooo: do discovery with sonnet/haiku, then hand Fable a clean brief
