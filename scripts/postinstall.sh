#!/bin/bash

# We need to npm symlink some dependencies. Assumes you have already npm linked
# the required packages

npm link one-base
npm link one-utilities
npm link om-react-components
echo "Done symlinking some npm dependencies from onestyleguide."
