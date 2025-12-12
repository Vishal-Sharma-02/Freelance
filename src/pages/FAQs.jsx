import FAQ from "../components/FAQ";

const faqs = [
  {
    question: "What is Anaylix Hub?",
    answer: "Anaylix Hub is a digital learning platform that provides high-quality skill-based courses, mentorship, and a complete earning roadmap for students."
  },
  {
    question: "I am unable to access my course. What should I do?",
    answer: "First, try logging out and logging back in. If the issue still continues, clear your browser cache or contact support."
  },
  {
    question: "I completed the payment but my course is not unlocked.",
    answer: "Sometimes the payment verification may take a few seconds. Refresh the page or log in again. If still locked, contact Anaylix support with your payment ID."
  },
  {
    question: "Can I use Anaylix Hub on mobile?",
    answer: "Yes, the platform is fully optimized for both mobile and desktop devices."
  },
  {
    question: "Do I need technical knowledge to start?",
    answer: "No. All courses start from basics and are designed for complete beginners."
  },
  {
    question: "What if I face a technical issue while learning?",
    answer: "You can reach out to our support team anytime. Most issues can be fixed by simply logging out and logging in again."
  }
];

const FAQs = () => {
  return <FAQ faqs={faqs} />;
}

export default FAQs;