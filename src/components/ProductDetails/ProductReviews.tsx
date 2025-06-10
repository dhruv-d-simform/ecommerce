import { Rating } from '@/components/Rating';
import type { Product } from '@/types/product.types';

type ProductReviewsProps = Pick<Product, 'reviews'>;

export function ProductReviews({ reviews }: ProductReviewsProps) {
    return (
        <div className="pt-6">
            <h2 className="text-xl font-semibold mb-4">
                Customer Reviews ({reviews.length})
            </h2>

            {reviews.length > 0 ? (
                <div className="space-y-4">
                    {reviews.map((review, index) => (
                        <div key={index} className="border p-4 rounded-md">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-medium">
                                        {review.reviewerName}
                                    </p>
                                    <Rating rating={review.rating} />
                                </div>
                                <span className="text-xs text-gray-500">
                                    {new Date(review.date).toLocaleDateString()}
                                </span>
                            </div>
                            <p className="text-gray-700 mt-2 text-sm">
                                {review.comment}
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500 text-sm">
                    No reviews yet. Be the first to review!
                </p>
            )}
        </div>
    );
}
