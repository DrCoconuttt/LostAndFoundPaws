#!/bin/bash

# Match any jsx or js files
LINT_FILES_PATTERN="\.jsx\|\.js$"

COLOR_RED='\033[0;31m'
COLOR_GREEN='\033[0;32m'
COLOR_CYAN='\033[0;36m'
COLOR_CLOSE='\033[0m'


# Helper functions for logging
info() {
    local message="$1"
    echo -e "${COLOR_CYAN}[INFO] ${message}${COLOR_CLOSE}"
}

success() {
    local message="$1"
    echo -e "${COLOR_GREEN}[SUCCESS] ${message}${COLOR_CLOSE}"
}

error() {
    local message="$1"
    echo -e "${COLOR_RED}[ERROR] ${message}${COLOR_CLOSE}"
}

STAGED_FILES=$(git diff --cached --name-only | grep "$LINT_FILES_PATTERN")

if [ -z "$STAGED_FILES" ]; then
  success "No JSX files found in commit. Skipping ESLint."
  exit 0
fi

info "Validating JavaScript files:\n"


if ! command -v npx &> /dev/null; then
  error "npx is not installed. Please install it and retry commiting your changes."
  exit 1
fi


for FILE in $STAGED_FILES; do
  if npx eslint --fix "$FILE"; then
    info "ESLint passed for file $FILE"
  else
    error "ESLint failed for file $FILE. Please check your code and try again. You can run ESLint manually via npx eslint."
    exit 1
  fi
done


info "JavaScript validation completed.\n"
success "Commit succeeded"
