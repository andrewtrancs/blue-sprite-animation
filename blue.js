class Blue{
    constructor(game) {
        this.game = game
        //spritesheet, xStart, yStart, width, height, frameCount, frameDuration
        this.animator = new Animator(ASSET_MANAGER.getAsset("./blue.png"), 0, 0, 35, 52, 5, 0.1);
        this.x = 0;
        this.y = 0;
        this.speed = 200;
    };

    update() {
        this.x += this.speed * this.game.clockTick;
        if(this.x > 1024) this.x = 0;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y); 
    };
}
