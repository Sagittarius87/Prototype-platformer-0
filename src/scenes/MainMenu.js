import { Scene } from 'phaser';
import { MainMenuButtons } from './MainMenuButtons';

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

        const button = new MainMenuButtons(this, 128, 112);
        this.add.existing(button);

        

        /*
        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });
        */
        console.log('MainMenu');
    }
}
