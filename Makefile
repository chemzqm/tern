
rebase:
	@git fetch origin
	@git rebase origin/master

.PHONY: rebase
