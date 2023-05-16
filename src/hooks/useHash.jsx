import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const createHash = () => uuidv4();

export default function useHash(expiration) {
  const DEFAULT_EXPIRATION = 50000;

  const [hash, setHash] = useState(uuidv4());
  useEffect(() => {
    //Pretend this is some serious authentication method;
    setInterval(() => setHash(uuidv4()), expiration ?? DEFAULT_EXPIRATION);
  }, []);

  return hash;
}


  