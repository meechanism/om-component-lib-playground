#!/bin/bash

# We need to npm symlink some dependencies. Assumes you have already npm linked
# the required packages

npm link @westfield/one-base
npm link @westfield/one-utilities
npm link @westfield/om-react-components
echo "Done symlinking some npm dependencies from onestyleguide."
