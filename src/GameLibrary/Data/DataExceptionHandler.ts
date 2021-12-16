class DataExceptionHandler {
  handleFileReadException() {
    console.error(
      '\n Engine cannot read files corectly.\n',
      'Make sure engine has access to data/ directory \n',
      '(to read files) and files are not corrupted and exists.\n',
    );
    // handled error is critical to work of engine so exit process
    process.exit(0);
  }
}

export default DataExceptionHandler;
