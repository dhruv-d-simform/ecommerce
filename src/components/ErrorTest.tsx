import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function ErrorTest() {
    const [error, setError] = useState(false);

    if (error) {
        throw new Error('Error produced manually for testing.');
    }

    return (
        <Button
            onClick={() => setError(true)}
            variant="link"
            className="text-white text-lg cursor-pointer"
        >
            Throw Error
        </Button>
    );
}
