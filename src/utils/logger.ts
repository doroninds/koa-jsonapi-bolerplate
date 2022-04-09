enum LoggerColors {
  RED = '\u001b[1;31m',
  YELLOW = '\u001b[1;33m',
  GREEN = '\u001b[1;32m',
  RESET = '\x1b[0m',
}

export const logger = {
  table: (rows: any[], props?: string[]) => console.table(rows, props),
  info: (...args: any[]) => console.info(`INFO: ${LoggerColors.GREEN}`, ...args, `${LoggerColors.RESET}`),
  warn: (...args: any[]) => console.warn(`WARN: ${LoggerColors.YELLOW}`, ...args, `${LoggerColors.RESET}`),
  error: (...args: any[]) => console.error(`ERROR: ${LoggerColors.RED}`, ...args, `${LoggerColors.RESET}`),
}
