/**
 * Debounce a function call.
 *
 * @param callback The function to debounce.
 * @param delay The delay in milliseconds.
 * @returns A debounced version of the function that takes the same arguments as the original function.
 */
const useDebounce = <T extends unknown[]>(
  callback: (...args: T) => void,
  delay: number
): ((...args: T) => void) => {
  let timeoutId: number | undefined = undefined;

  const debouncedCallback = (...args: T) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback(...args);
    }, delay);
  };

  debouncedCallback.cancel = () => {
    window.clearTimeout(timeoutId);
  };

  return debouncedCallback;
};

export default useDebounce;
