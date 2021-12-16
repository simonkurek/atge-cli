declare class GameInfo {
    private gameID;
    private fullName;
    private description;
    private creator;
    private version;
    constructor(gameID: string, fullName: string, description: string, creator: string, version: string);
    getGameID(): string;
    getFullName(): string;
    getDescription(): string;
    getCreator(): string;
    getVersion(): string;
}
export default GameInfo;
