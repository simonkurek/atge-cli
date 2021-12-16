import { promises as fsPromises } from 'fs';
import DataExceptionHandler from '../DataExceptionHandler';
import IFileReader from './IFileReader';

class AsyncFileReader implements IFileReader {
  private dataDirectoryPath: string;

  constructor() {
    this.dataDirectoryPath = this.pathFind();
  }

  pathFind(): string {
    let pathArray: string[] = __dirname.split('/');
    pathArray.splice(-4, 4);
    pathArray.push('data');
    const result = pathArray.join('/') + '/';
    return result;
  }
  async readFile(fileName: string): Promise<string> {
    const data = await fsPromises.readFile(
      this.dataDirectoryPath + fileName,
      'utf8',
    );
    return data;
  }
  saveFile(filePath: string, filename: string): string {
    throw new Error('Method not implemented.');
  }
}

export default AsyncFileReader;
