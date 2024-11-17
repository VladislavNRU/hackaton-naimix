export const useDebounce = () => {
    function debounce<T extends (...args: any[]) => void>(callback: T, delay = 20) {
        let timeout: ReturnType<typeof setTimeout> | null = null;
    
        return (...args: Parameters<T>) => {
            if (timeout) clearTimeout(timeout);
            
            timeout = setTimeout(() => {
                callback(...args);
                timeout = null;
            }, delay);
        };
    }

    return { debounce }
};
