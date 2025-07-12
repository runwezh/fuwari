// Global type declarations
declare global {
	// Add any global type declarations here if needed
	interface Window {
		swup?: {
			hooks: {
				on: (_event: string, _callback: Function, _options?: any) => void;
			};
		};
	}
}

export {};
