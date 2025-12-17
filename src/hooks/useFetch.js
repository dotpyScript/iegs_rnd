import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

/**
 * Enhanced useFetch hook with flexible error handling
 *
 * @param {string} url - API endpoint URL
 * @param {object} options - Axios config options
 * @param {object} errorHandling - Error handling configuration
 * @param {boolean} errorHandling.redirect - Auto-redirect on errors (default: true)
 * @param {boolean} errorHandling.redirect404 - Redirect to 404 page (default: true)
 * @param {boolean} errorHandling.redirect500 - Redirect to 500 page (default: true)
 * @param {function} errorHandling.onError - Custom error handler callback
 */
export const useFetch = (url, options = {}, errorHandling = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statusCode, setStatusCode] = useState(null);
  const navigate = useNavigate();

  // Default error handling configuration
  const {
    redirect = true,
    redirect404 = true,
    redirect500 = true,
    onError = null,
  } = errorHandling;

  const handleError = (err) => {
    const status = err.response?.status;
    const errorMessage =
      err.response?.data?.message || err.message || 'An error occurred';

    setStatusCode(status);
    setError(errorMessage);
    setData(null);

    // Call custom error handler if provided
    if (onError) {
      onError(err, status);
    }

    // Handle automatic redirects
    if (redirect) {
      if (status === 404 && redirect404) {
        navigate('/404', { replace: true });
      } else if (
        (status === 500 ||
          status === 502 ||
          status === 503 ||
          status === 504) &&
        redirect500
      ) {
        navigate('/500', { replace: true });
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url, options);
        setData(response.data);
        setStatusCode(response.status);
        setError(null);
      } catch (err) {
        handleError(err);
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, [url]);

  const refetch = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url, options);
      setData(response.data);
      setStatusCode(response.status);
      setError(null);
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, statusCode, refetch };
};

// import { useState, useEffect } from 'react';
// import axios from 'axios';

// export const useFetch = (url, options = {}) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(url, options);
//         setData(response.data);
//         setError(null);
//       } catch (err) {
//         setError(err.message || 'An error occurred');
//         setData(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (url) {
//       fetchData();
//     }
//   }, [url]);

//   const refetch = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(url, options);
//       setData(response.data);
//       setError(null);
//     } catch (err) {
//       setError(err.message || 'An error occurred');
//       setData(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { data, loading, error, refetch };
// };
