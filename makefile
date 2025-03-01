push:
	git add .
	git commit -m "Auto-commit: $(shell date)"
	git push origin main