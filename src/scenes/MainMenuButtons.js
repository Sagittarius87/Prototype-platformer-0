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
            })
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                this.buttonImage.setVisible(false);
                this.buttonImageMove.setVisible(false);
                this.buttonImageClick.setVisible(true);
                console.log('Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN');
            })
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
                this.buttonImage.setVisible(false);
                this.buttonImageMove.setVisible(true);
                this.buttonImageClick.setVisible(false);
                console.log('Phaser.Input.Events.GAMEOBJECT_POINTER_UP');
            });
    }
}

export class ButtonNewGame extends MainMenuButtons
{
    buttonText = 'Новая игра';

    constructor(scene, x, y)
    {
        super(scene, x, y);

        this.text = scene.add.text(0, 0, this.buttonText, { fontFamily: 'Arial Black', fontSize: 12, color: '#ffffff' }).setOrigin(0.5);

        this.add(this.text);        

        this.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            console.log('ButtonNewGame');
        });
    }
}

export class ButtonContinueGame extends MainMenuButtons
{
    buttonText = 'Продолжить игру';

    constructor(scene, x, y)
    {
        super(scene, x, y);

        this.text = scene.add.text(0, 0, this.buttonText, { fontFamily: 'Arial Black', fontSize: 12, color: '#ffffff' }).setOrigin(0.5);

        this.add(this.text);

        this.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            console.log('ButtonContinueGame');
        });
    }
}

export class ButtonGameSettings extends MainMenuButtons
{
    buttonText = 'Настройки';

    constructor(scene, x, y)
    {
        super(scene, x, y);

        this.text = scene.add.text(0, 0, this.buttonText, { fontFamily: 'Arial Black', fontSize: 12, color: '#ffffff' }).setOrigin(0.5);

        this.add(this.text);

        this.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            console.log('ButtonGameSettings');
        });
    }
}

export class ButtonGameExit extends MainMenuButtons
{
    buttonText = 'Выход';

    constructor(scene, x, y)
    {
        super(scene, x, y);

        this.text = scene.add.text(0, 0, this.buttonText, { fontFamily: 'Arial Black', fontSize: 12, color: '#ffffff' }).setOrigin(0.5);

        this.add(this.text);

        this.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            console.log('ButtonGameExit');
        });
    }
}