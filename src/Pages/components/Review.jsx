import { MdOutlineStarPurple500 } from "react-icons/md";
import SectionHeader from "./shared/SectionHeader";

const Review = () => {
    
// Data from data base
const review = [
        {
            id: 1,
            name: 'Maya R.',
            rating: 5,
            comment: "I stopped rewriting the same to-do list every morning. Now I just open StudyFlow and my day is already there.",
            designation: 'Pre-med, sophomore'
        },
        {
            id: 2,
            name: 'Devon L.',
            rating: 3.5,
            comment: "Seeing the progress bar move is honestly the reason I keep coming back. It's a small thing but it works on me.",
            designation: 'Computer Science, junior'
        },
        {
            id: 3,
            name: 'Priya S.',
            rating: 4.5,
            comment: "The focus timer plus subject tracking finally showed me I was neglecting Physics. Fixed that in two weeks.",
            designation: 'Engineering, freshman'
        }
    ];  
    
    return (
        <section className="space-y-3 py-10 bg-[#F8F9F4] mt-20">
            <div className="container mx-auto max-w-280 space-y-10">
                <SectionHeader 
                    title="Students are getting more done" 
                />

                <div className="grid grid-cols-3 gap-4">
                    {review.map((review) => (
                        <div key={review.id} className="bg-white p-6 mb-4 card rounded-3xl shadow-xl space-y-2 border border-gray-200">
                            <p className="flex text-2xl text-yellow-500">
                                {Array.from({ length: Math.floor(review.rating) }, (_, i) => <MdOutlineStarPurple500 key={i} />)}{review.rating % 1 !== 0 ? <MdOutlineStarPurple500 /> : ""}
                            </p>
                            <p className="mt-2">{review.comment}</p>
                            <h3 className="text-lg font-semibold mt-3">{review.name}</h3>
                            <p className="text-sm text-gray-500">{review.designation}</p>
                        </div>
                    ))}
                </div>
                </div>
        </section>
    );
};

export default Review;