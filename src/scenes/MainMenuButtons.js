import Phaser from "phaser";

export class MainMenuButtons extends Phaser.GameObjects.Container
{
    buttonTexture = 'buttonImage';
    buttonTextureMove = 'buttonImageMove';
    buttonTextureClick = 'buttonImageClick';

    constructor(scene, x, y)
    {
        super(scene, x, y);

        this.scene = scene;
        this.x = x;
        this.y = y;

        this.buttonImage = scene.add.image(0, 0, this.buttonTexture);
        this.buttonImageMove = scene.add.image(0, 0, this.buttonTextureMove);
        this.buttonImageClick = scene.add.image(0, 0, this.buttonTextureClick);

        this.add(this.buttonImage);
        this.add(this.buttonImageMove);
        this.add(this.buttonImageClick);

        this.buttonImageMove.setVisible(false);
        this.buttonImageClick.setVisible(false);

        this.setSize(this.buttonImage.width, this.buttonImage.height);

        this.setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
                this.buttonImage.setVisible(false);
                this.buttonImageMove.setVisible(true);
                console.log('Phaser.Input.Events.GAMEOBJECT_POINTER_OVER');
            })
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
                this.buttonImage.setVisible(true);
                this.buttonImageMove.setVisible(false);
                console.log('Phaser.Input.Events.GAMEOBJECT_POINTER_OUT');
            });

    }
}