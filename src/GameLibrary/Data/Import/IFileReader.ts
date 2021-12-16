interface IFileReader {
  readFile(fileName: string): Promise<string>;
  saveFile(filePath: string, filename: string): string;
}

export default IFileReader;
