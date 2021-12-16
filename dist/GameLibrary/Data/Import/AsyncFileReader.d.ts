import IFileReader from './IFileReader';
declare class AsyncFileReader implements IFileReader {
    private dataDirectoryPath;
    constructor();
    pathFind(): string;
    readFile(fileName: string): Promise<string>;
    saveFile(filePath: string, filename: string): string;
}
export default AsyncFileReader;
