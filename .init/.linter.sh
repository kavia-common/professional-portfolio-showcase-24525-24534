#!/bin/bash
cd /home/kavia/workspace/code-generation/professional-portfolio-showcase-24525-24534/frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

