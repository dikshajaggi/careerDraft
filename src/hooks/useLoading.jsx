import React, { useEffect, useState } from 'react'

const useLoading = (loadingVal=false) => {
    const [isLoading, setIsLoading] = useState(loadingVal);

    useEffect(() => {
      setIsLoading(loadingVal);
    }, [loadingVal]);
  
    return [isLoading, setIsLoading];
}

export default useLoading
