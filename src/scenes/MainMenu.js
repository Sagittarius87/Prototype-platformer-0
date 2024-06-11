import { Scene } from 'phaser';

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

        

        /*
        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });
        */
        console.log('MainMenu');
    }
}
