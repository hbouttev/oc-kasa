import heroImage from '../assets/hero2.png';
import Hero from '../components/Hero';

export default function AboutPage() {
  return (
    <>
      <Hero
        imageUrl={heroImage}
        imageAlt="Paysage saisissant de montagnes et forêt."
      />
      <div>
        Quisquam voluptatum, quibusdam, quia, quae voluptates voluptatem quod
        voluptatibus quos doloribus quidem voluptate.
      </div>
    </>
  );
}
