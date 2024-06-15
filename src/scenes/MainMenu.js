import { Scene } from 'phaser';
import { ButtonContinueGame, ButtonGameExit, ButtonGameSettings, ButtonNewGame, MainMenuButtons } from './MainMenuButtons';

export class MainMenu extends Scene
{
    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.add.image(128, 112, 'backgroundMenu');
        
        this.add.text(128, 56, 'Prototype platformer 0', {
            fontFamily: 'Arial Black', fontSize: 18, color: '#ffffff', align: 'center'
        }).setOrigin(0.5);

        //const button = new MainMenuButtons(this, 128, 112);
        //this.add.existing(button);
        const buttonNewGame = new ButtonNewGame(this, 128, 112);
        this.add.existing(buttonNewGame);
        const buttonContinueGame = new ButtonContinueGame(this, 128, 112 + 32);
        this.add.existing(buttonContinueGame);
        const buttonGameSettings = new ButtonGameSettings(this, 128, 112 + 64);
        this.add.existing(buttonGameSettings);
        const buttonGameExit = new ButtonGameExit(this, 128, 112 + 96);
        this.add.existing(buttonGameExit);

        /*
        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });
        */
        console.log('MainMenu');
    }
}
