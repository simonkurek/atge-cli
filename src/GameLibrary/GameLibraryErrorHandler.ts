class GameLibraryErrorHandler {
  public handleError(error: Error, errorMessage: string): void {
    console.error(errorMessage);
    console.error('Developer info');
    console.error(error);
    process.exit(0);
    //in the future send error to server anonyomously
  }
}

export default GameLibraryErrorHandler;
