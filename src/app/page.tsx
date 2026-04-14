"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactText from '@/components/sections/contact/ContactText';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Fish, Heart, Sun, Users, Utensils, Waves } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="mediumLarge"
        background="noiseDiagonalGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Menu", id: "menu" },
        { name: "Contact", id: "contact" },
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CKleccl9xBRYvvTTluraIxpYfT/uploaded-1776142781790-ow1cqr66.png"
      brandName="Jude's Coastal Kitchen"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{ variant: "radial-gradient" }}
      title="Fresh Seafood & Sunset Views at Jude's Coastal Kitchen"
      description="Experience the authentic taste of the Indian Ocean from our famous second-floor balcony."
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/friends-talking-by-lunch_1098-14622.jpg", alt: "Guest 1" },
        { src: "http://img.b2bpic.net/free-photo/woman-eating-seafood-dish-with-salmon_23-2150463267.jpg", alt: "Guest 2" },
        { src: "http://img.b2bpic.net/free-photo/friends-having-fun-their-reunion_23-2149215791.jpg", alt: "Guest 3" },
        { src: "http://img.b2bpic.net/free-photo/group-diverse-friends-are-having-dinner-together_53876-40927.jpg", alt: "Guest 4" },
        { src: "http://img.b2bpic.net/free-photo/friends-having-fun-their-reunion_23-2149215775.jpg", alt: "Guest 5" },
      ]}
      avatarText="Loved by locals and travelers"
      buttons={[{ text: "Book Your Table", href: "#contact" }]}
      marqueeItems={[
        { type: "text-icon", text: "Authentic Cuisine", icon: Utensils },
        { type: "text-icon", text: "Ocean View Balcony", icon: Waves },
        { type: "text-icon", text: "Family Run", icon: Heart },
        { type: "text-icon", text: "Fresh Catch Daily", icon: Fish },
        { type: "text-icon", text: "Sunset Dining", icon: Sun },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={true}
      title="Our Family Story"
      metrics={[
        { icon: Fish, label: "Daily Catch", value: "Sourced Fresh" },
        { icon: Sun, label: "Balcony Setting", value: "Sunset Views" },
        { icon: Users, label: "Local Tradition", value: "Family Run" },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "p1", name: "Grilled Jumbo Prawns", price: "Fresh Catch", imageSrc: "http://img.b2bpic.net/free-photo/seafood-plate-with-fried-salmon-mussels-shrimps-calamari-lemon_140725-1613.jpg" },
        { id: "p2", name: "Butter Garlic Crab", price: "Signature", imageSrc: "http://img.b2bpic.net/free-photo/green-curry-with-eggs-black-cups-with-lemon-lemongrass-chili-tomatoes_1150-25741.jpg" },
        { id: "p3", name: "Rice & Curry (10-Dish)", price: "Traditional", imageSrc: "http://img.b2bpic.net/free-photo/indian-food-arrangement-top-view_23-2148723466.jpg" },
        { id: "p4", name: "Brinjal Pasta (V)", price: "Vegan Choice", imageSrc: "http://img.b2bpic.net/free-photo/pasta-with-pesto-parmesan_23-2152015849.jpg" },
        { id: "p5", name: "Vegetable Roti", price: "Appetizer", imageSrc: "http://img.b2bpic.net/free-photo/indian-delicious-roti-with-copy-space_23-2149073355.jpg" },
        { id: "p6", name: "Coastal Dessert", price: "Sweet", imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-healthy-breakfast_23-2148694999.jpg" },
      ]}
      title="Signature Flavors"
      description="Our authentic Sri Lankan coastal kitchen menu"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      testimonials={[
        { id: "1", name: "Sarah J.", role: "Traveler", company: "UK", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/front-view-friends-enyoing-dinner-party_23-2150717851.jpg" },
        { id: "2", name: "Mark L.", role: "Foodie", company: "Local", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-women-with-pizza_23-2149333835.jpg" },
        { id: "3", name: "Elena R.", role: "Blogger", company: "Spain", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/friends-birthday-good-summer-sunny-day_146671-18997.jpg" },
        { id: "4", name: "David W.", role: "Expat", company: "Negombo", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/happy-family-havinf-dinner-together_23-2149117541.jpg" },
        { id: "5", name: "Chloe M.", role: "Traveler", company: "France", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/friends-having-fun-their-reunion_23-2149215775.jpg" },
      ]}
      title="Guest Experiences"
      description="What our guests say about Jude's"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{ variant: "rotated-rays-animated-grid" }}
      text="Visit us at 100/11 B, Beach Rd, Negombo. We are open daily from 10:00 AM – 10:00 PM. Call +94 77 714 5823 to book your table."
      buttons={[{ text: "Call Now", href: "tel:+94777145823" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/sand-beach-ocean-wave_58702-10473.jpg"
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CKleccl9xBRYvvTTluraIxpYfT/uploaded-1776142781790-ow1cqr66.png"
      logoText="Jude's Coastal Kitchen"
      columns={[
        { title: "Location", items: [{ label: "100/11 B, Beach Rd, Negombo", href: "#" }] },
        { title: "Contact", items: [{ label: "+94 77 714 5823", href: "tel:+94777145823" }] },
        { title: "Social", items: [{ label: "Instagram", href: "#" }, { label: "Facebook", href: "#" }] },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
