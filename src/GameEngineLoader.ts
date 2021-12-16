import GameLibraryManager from './GameLibrary/GameLibraryManager';

class GameEngineLoader {
  static initialized: boolean = false;
  private gameLibrary: GameLibraryManager;

  static bootstrap() {
    if (!GameEngineLoader.initialized) {
      GameEngineLoader.initialized = true;
      new GameEngineLoader();
    } else {
      throw new Error('GameEngineLoader already initialized');
    }
  }

  //private conctructor to be 100% sure that this class is not instantiated more than once (singleton)
  private constructor() {
    this.gameLibrary = new GameLibraryManager();
    this.run();
  }

  private run(): void {
    this.gameLibrary.start();
  }
}

GameEngineLoader.bootstrap();

/*  TODO:
  - display options after scenario commands execution ✔️
  - load scenario from options ✔️
  - scenartio loop ✔️ (to tests)
  - scenario loop rules (
    - if is one option auto-exec this option  ✔️
    - if is no option end game end return to game library
  )
  - after game uninstall canelling back to game library

  * - write prezentation and scenario
  * - create landing page (basic ✔️)
*/
