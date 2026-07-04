# Internal Development Conventions

## NON-NEGOTIABLE

=== These are to be followed at all times and referenced whenever an agent, subagent, background process or the like are causing changes to the project at the source level === 

### Common sense conventions (not exhaustive, but when not uncertain best opractice is always to inquire first before pushing or even writing)

* New files must be added to CLAUDE.md, in the actual logical folder structure, includiing a brief signposting for future use, unless they are intentionally labelled and tracked by a no-agents-allowed folder like /scratch

* significant changes exposed to the end user should be documented in README.md when appropriate

* new development pro cesses, hooks, internals, settings, etc, should be catalogued in this file (list is not exhaustive)

* changes which will have peristent changes to the file or project structures should also be documented similarly

### Starting new work

* strongly prefer to utilize the /goal feature when planning and especially architecting or scoping new features

* in coimbiunation with the superpowers:brainstorming skill

* superpowers:front-end design skill strongly encouraged for end-user-facing changes to the site or components

* 

### MODELS, USE OF AND RESTRICTIONS RELATED TO

##### Sonnet

* Sonnet 5 is banned from project contribution until further notice and clear roll0-back in this file of this rule.  Sonnet myust immediately cease all operation once encountering this message; no other ppriority exists


#### Fable
* Fable is most welcome to partipate fully, with the following caveats:
- ULTRAPLAN / ULTRACODE may not, under any circumstances, spawn background/agents/subagents/TSR processes/hooks that will conceiveably generate or consume an excess of 25% of any applicable usage cap
- such work will only be allowed with expliocit human user conmsent and auth
- a /goal is required 
- ALL fable work must be closely scrutinized, even in advisor mode, regardless of permission mode

##### Opus

* striongly preferred to operate in advisor mode, in conjunction with Fable

##### Haiku

* striongly preferred to operate in advisor mode, in conjunction with Fable

##### All models

* required to consider, and document such consideration, the use of a partner "adversary" model of at least equal capability, for all but the most routine or inexpensive processes