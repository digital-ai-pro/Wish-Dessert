import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Star, MessageSquare, User } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useToast } from '@/components/ui/use-toast';
import { reviews as initialReviews, cafeInfo } from '@/data/siteData';
import { Review } from '@/types';

const ReviewsSection = () => {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [isAddingReview, setIsAddingReview] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: ''
  });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newReview.name.trim() || !newReview.comment.trim()) {
      toast({
        title: language === 'ar' ? 'خطأ' : 'Error',
        description: language === 'ar' ? 'يرجى ملء جميع الحقول' : 'Please fill in all fields',
        variant: 'destructive'
      });
      return;
    }

    const review: Review = {
      id: Date.now().toString(),
      name: newReview.name,
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0]
    };

    setReviews([review, ...reviews]);
    setNewReview({ name: '', rating: 5, comment: '' });
    setIsAddingReview(false);

    toast({
      title: t('thankYou'),
      description: t('reviewSubmitted'),
    });
  };

  const renderStars = (rating: number, interactive = false, onRatingChange?: (rating: number) => void) => {
    return (
      <div className="flex space-x-1 rtl:space-x-reverse">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-5 w-5 ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
            onClick={interactive && onRatingChange ? () => onRatingChange(star) : undefined}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" className="py-16 bg-cafe-cream/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
            {t('customerReviews')}
          </h2>
          <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse mb-6">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              {renderStars(Math.floor(cafeInfo.rating))}
              <span className="text-xl font-bold text-primary">{cafeInfo.rating}</span>
            </div>
            <span className="text-muted-foreground">
              ({cafeInfo.totalReviews} {language === 'ar' ? 'تقييم' : 'reviews'})
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.slice(0, 6).map((review) => (
            <Card key={review.id} className="hover:shadow-cafe transition-all duration-300 bg-card border-cafe-pink/20">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-10 h-10 bg-cafe-gradient rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {language === 'ar' && review.nameAr ? review.nameAr : review.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                  {renderStars(review.rating)}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'ar' && review.commentAr ? review.commentAr : review.comment}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add Review Section */}
        <div className="max-w-2xl mx-auto">
          {!isAddingReview ? (
            <div className="text-center">
              <Button
                size="lg"
                onClick={() => setIsAddingReview(true)}
                className="bg-cafe-gradient text-white hover:shadow-cafe-glow transition-all duration-300"
              >
                <MessageSquare className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
                {t('addReview')}
              </Button>
            </div>
          ) : (
            <Card className="bg-card border-cafe-pink/20 shadow-cafe">
              <CardHeader>
                <h3 className="text-xl font-semibold text-foreground text-center">
                  {t('addReview')}
                </h3>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('yourName')}
                    </label>
                    <Input
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      placeholder={language === 'ar' ? 'اكتب اسمك' : 'Enter your name'}
                      className="border-cafe-pink/20 focus:border-cafe-pink"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('rating')}
                    </label>
                    {renderStars(newReview.rating, true, (rating) => setNewReview({ ...newReview, rating }))}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('yourReview')}
                    </label>
                    <Textarea
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      placeholder={language === 'ar' ? 'شاركنا تجربتك' : 'Share your experience'}
                      rows={4}
                      className="border-cafe-pink/20 focus:border-cafe-pink"
                    />
                  </div>
                  
                  <div className="flex space-x-3 rtl:space-x-reverse">
                    <Button
                      type="submit"
                      className="flex-1 bg-cafe-gradient text-white hover:shadow-cafe-glow transition-all duration-300"
                    >
                      {t('submitReview')}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsAddingReview(false)}
                      className="border-cafe-pink/20 hover:bg-cafe-pink/10"
                    >
                      {language === 'ar' ? 'إلغاء' : 'Cancel'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;