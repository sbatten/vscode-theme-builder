#!/usr/bin/env node
import * as path from 'path';
import { addPath } from 'app-module-path';
addPath(path.join(process.cwd(), "node_modules"));

import { parse } from "./parser";

parse();