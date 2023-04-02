export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png","logo_512.png","manifest.json","service-worker.js"]),
	mimeTypes: {".png":"image/png",".json":"application/json"},
	_: {
		entry: {"file":"_app/immutable/start-7c31a2d5.js","imports":["_app/immutable/start-7c31a2d5.js","_app/immutable/chunks/index-44df08c7.js","_app/immutable/chunks/singletons-b6a05648.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
