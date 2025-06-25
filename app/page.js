import HomePage from "./HomePage/page";
import NewReleases from "./NewReleases/page";
import ComingSoon from "./ComingSoon/page";
import NewsletterSignup from "./NewsLetterSignup/page";

export default function Home() {
  return (
    <div>
      <HomePage />
      <NewReleases />
      <ComingSoon />
      <NewsletterSignup />
    </div>
  );
}
