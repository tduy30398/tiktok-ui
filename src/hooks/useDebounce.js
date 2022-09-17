import { useState, useEffect } from 'react';

// Sử dụng để khi người dùng ngừng gõ mới bắt đầu gửi request
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);

        // Clear đi giá trị của lần trước đó (trừ lần đầu)
        return () => clearTimeout(handler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debouncedValue;
}

export default useDebounce;
