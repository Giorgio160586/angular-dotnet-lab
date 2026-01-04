const LOG_LEVEL: 'Trace' | 'Debug' | 'Log' | 'Info' | 'Warnings' | 'Errors' = 'Debug';

(function () {
	const originalLog = console.log;
	const originalWarn = console.warn;
	const originalError = console.error;
	const originalDebug = console.debug;

	const splitText = (t: string, m: string) => [t.slice(0, t.indexOf(m)), m, t.slice(t.indexOf(m) + m.length)];
	const splitWords = (a: string) => { const [w, ...r] = a.trim().split(/\s+/); return [w || '', r.join(' ')]; };
	const styleNonString = (a: any): [string[], any[]] => typeof a === 'object' ? [['%o'], [a]] : [[`%c${String(a)}`], ['']];

	const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

	const LOG_COLORS = {
		bracket: isDarkTheme ? '#9ea5acff' : '#9ea5acff',
		keyword: isDarkTheme ? '#58a6ff' : '#0056b3'
	};

	function shouldLog(level: typeof LOG_LEVEL) {
		const levels = ['Trace', 'Debug', 'Log', 'Info', 'Warnings', 'Errors'] as const;
		return levels.indexOf(LOG_LEVEL) <= levels.indexOf(level as typeof LOG_LEVEL);
	}

	function slog(args: any[]) {
		const styledParts: string[] = [], styleValues: any[] = []; let styled = false;
		for (const arg of args) {
			if (typeof arg === 'string') {
				const [part, styles, done] = styleString(arg, styled);
				styledParts.push(...part); styleValues.push(...styles); if (done) styled = true;
			} else {
				const [part, styles] = styleNonString(arg);
				styledParts.push(...part); styleValues.push(...styles);
			}
		}
		return [styledParts.join(''), ...styleValues];
	}

	function styleString(text: string, styled: boolean): [string[], string[], boolean] {
		const match = text.match(/\[[^\]]+\]/); if (!match || styled) return [[`%c${text}`], [''], false];
		const [before, bracket, after] = splitText(text, match[0]); const [word, rest] = splitWords(after);
		return [
			['%c' + before, '%c' + bracket, '%c' + (word ? ' ' + word : ''), '%c' + (rest ? ' ' + rest : '')],
			['', `color: ${LOG_COLORS.bracket};`, word ? `color: ${LOG_COLORS.keyword};` : '', ''],
			true
		];
	}

	// TRACE → DEBUG [Verbose]
	console.trace = function (...args: any[]) {
		if (shouldLog('Trace')) { originalDebug.apply(console, slog(args)); }
	};

	// DEBUG [Verbose]
	console.debug = function (...args: any[]) {
		if (shouldLog('Debug')) { originalDebug.apply(console, slog(args)); }
	};

	// LOG → DEBUG [Verbose]
	console.log = function (...args: any[]) {
		if (shouldLog('Info')) { originalDebug.apply(console, slog(args)); }
	};

	// INFO [Info]
	console.info = function (...args: any[]) {
		if (shouldLog('Info')) { originalLog.apply(console, slog(args)); }
	};

	// WARN [Warnings]
	console.warn = function (...args: any[]) {
		if (shouldLog('Warnings')) { originalWarn.apply(console, slog(args)); }
	};

	// ERROR [Errors]
	console.error = function (...args: any[]) {
		if (shouldLog('Errors')) { originalError.apply(console, slog(args)); }
	};
})();
