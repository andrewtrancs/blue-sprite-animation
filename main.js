const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./blue.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothEnabled = false;

	gameEngine.addEntity(new Blue(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
