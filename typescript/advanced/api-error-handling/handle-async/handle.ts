const handleAsync = async <T>(promise: Promise<T>): Promise<[T, null] | [null, Error]> => {
    try {
      const data = await promise;
      return [data, null];
    } catch (error) {
      return [null, error instanceof Error ? error : new Error(String(error))];
    }
  };