import { useState } from 'react';
import type { Product } from '@/types/product.types';

type ProductImagesProps = Pick<Product, 'images' | 'title'>;

export function ProductImages({ images, title }: ProductImagesProps) {
    const [selectedImage, setSelectedImage] = useState(0);

    const handleImageClick = (index: number) => {
        setSelectedImage(index);
    };

    return (
        <div className="md:w-1/2">
            <div className="bg-gray-50 rounded-lg mb-4 flex items-center justify-center h-[400px] overflow-hidden">
                <img
                    src={images[selectedImage]}
                    alt={title}
                    className="object-contain h-full w-full"
                />
            </div>

            <div className="grid grid-cols-6 gap-2">
                {images.map((image, idx) => (
                    <div
                        key={idx}
                        onClick={() => handleImageClick(idx)}
                        className={`cursor-pointer border-2 rounded overflow-hidden h-16 ${
                            selectedImage === idx
                                ? 'border-main'
                                : 'border-transparent'
                        }`}
                    >
                        <img
                            src={image}
                            alt={`${title} - view ${idx + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
