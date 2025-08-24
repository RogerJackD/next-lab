import { useState } from "react";

export function useCounter( initialValue: number = 0 ) {

    const [counter, setCounter] = useState(initialValue);

    const increment = () => {
        setCounter(prev => prev + 1)
    }

    const decrement = () => {
        setCounter(prev => prev <= 0 ? prev : prev - 1)
    }

    const reset = () => {
        setCounter(initialValue)
    }


    return { increment, decrement, reset, counter  }
}
