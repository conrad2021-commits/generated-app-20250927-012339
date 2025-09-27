import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Code, Wrench, Cloud, ArrowRight, LayoutDashboard, ShoppingCart, BrainCircuit, CalendarClock, Workflow, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import Autoplay from "embla-carousel-autoplay";
import { AspectRatio } from '@/components/ui/aspect-ratio';
const heroSlides = [
  {
    supertitle: "Legacy Systems, Modern Solutions",
    title: "Modernize Your WinForms Applications",
    description: "Breathe new life into your trusted desktop apps. We upgrade, enhance, and migrate your WinForms software to modern platforms with zero disruption.",
    cta: "Start Your Modernization",
  },
  {
    supertitle: "Seamless Cloud Integration",
    title: "Migrate to the Cloud with Confidence",
    description: "Unlock scalability, security, and accessibility. Our experts seamlessly migrate your applications to the cloud, ensuring performance and reliability.",
    cta: "Plan Your Migration",
  },
  {
    supertitle: "Dedicated Support & Maintenance",
    title: "Expert Maintenance for Peak Performance",
    description: "Focus on your business, not on bug fixes. We provide ongoing support and maintenance to keep your applications running smoothly and securely.",
    cta: "Explore Support Plans",
  },
];
const services = [
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Custom Development",
    description: "From simple utilities to complex business logic, we build robust and intuitive WinForms applications tailored to your exact needs.",
    points: ["Bespoke UI/UX Design", "Efficient Data Handling", "Third-Party API Integration", "Scalable Architecture"],
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: "Upgrade & Maintain",
    description: "Keep your applications up-to-date and secure. We handle framework upgrades, performance tuning, and ongoing maintenance.",
    points: [".NET Framework Updates", "Performance Optimization", "Bug Fixes & Patching", "UI/UX Refreshes"],
  },
  {
    icon: <Cloud className="h-10 w-10 text-primary" />,
    title: "Cloud Migration",
    description: "Move your desktop applications to the cloud. We refactor and re-architect your apps for platforms like Azure and AWS.",
    points: ["Azure & AWS Deployment", "Database Migration", "API-driven Architecture", "Enhanced Security"],
  },
];
const winformsIdeas = [
  {
    icon: <LayoutDashboard className="h-10 w-10 text-primary" />,
    title: "Custom Business Dashboard",
    description: "Visualize your key performance indicators (KPIs) in real-time. A custom dashboard that integrates with your existing databases and APIs.",
    tags: ["Data Visualization", "API Integration", "BI"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: <ShoppingCart className="h-10 w-10 text-primary" />,
    title: "Retail Point-of-Sale (POS)",
    description: "A fast, reliable, and easy-to-use POS system. Manage inventory, process sales, and track customer data with a tailored workflow.",
    tags: ["Inventory", "Hardware Integration", "Retail"],
    imageUrl: "https://images.unsplash.com/photo-1580910222123-5b8e4b3a86a5?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: "Data Analysis Tool",
    description: "For complex data sets in engineering, finance, or research. Allows for advanced data manipulation, analysis, and reporting.",
    tags: ["Data Analysis", "Reporting", "Science"],
    imageUrl: "https://images.unsplash.com/photo-1532622785990-d2c12b534941?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: <CalendarClock className="h-10 w-10 text-primary" />,
    title: "Appointment Scheduling",
    description: "A powerful scheduling tool for service-based businesses. Manage calendars, staff, and client bookings in one place.",
    tags: ["Scheduling", "Calendar", "Service Business"],
    imageUrl: "https://images.unsplash.com/photo-1554224311-5e0f75f3b1b6?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: <Workflow className="h-10 w-10 text-primary" />,
    title: "Onboarding Pipelines",
    description: "Streamline new employee or client onboarding with a step-by-step workflow management tool to ensure consistency.",
    tags: ["HR", "Workflow", "Automation"],
    imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "Sales Workdesk",
    description: "An all-in-one interface for sales teams to manage leads, track communication, and generate quotes efficiently.",
    tags: ["CRM", "Sales", "Productivity"],
    imageUrl: "https://images.unsplash.com/photo-1612550761236-e8139d284c74?q=80&w=800&auto=format&fit=crop",
  },
];
const faqItems = [
  {
    question: "What is WinForms Modernization?",
    answer: "It's the process of taking your existing Windows Forms applications and updating them with modern technologies, user interfaces, and architectural patterns. This can involve upgrading the .NET framework, refactoring code for better performance, redesigning the UI for a better user experience, or migrating the application to the cloud.",
  },
  {
    question: "Why should I migrate my WinForms app to the cloud?",
    answer: "Migrating to the cloud offers numerous benefits, including improved accessibility from anywhere, enhanced scalability to handle more users, better data security and backup, and easier integration with other modern web services and APIs. It future-proofs your application.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on the complexity and scope. A simple UI refresh might take a few weeks, while a full cloud migration of a complex application could take several months. We provide a detailed project plan and timeline after our initial free consultation.",
  },
  {
    question: "Do you provide support after the project is complete?",
    answer: "Yes, all our packages come with a support period. We also offer ongoing maintenance and support plans to ensure your application remains secure, up-to-date, and performs optimally long after the initial project is finished.",
  },
];
export function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Abstract code background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 dark:bg-black/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Carousel
            plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
            opts={{ loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {heroSlides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="text-center">
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-lg font-semibold text-orange-400"
                    >
                      {slide.supertitle}
                    </motion.p>
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="mt-4 text-4xl font-display font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.4 }}
                      className="mt-6 max-w-2xl mx-auto text-lg text-gray-300"
                    >
                      {slide.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="mt-10"
                    >
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
                        {slide.cta} <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex text-white" />
            <CarouselNext className="hidden md:flex text-white" />
          </Carousel>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Team working on laptops"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/80 dark:bg-gray-950/90 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Comprehensive solutions for your Windows Forms applications.
            </p>
          </div>
          <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card/70 dark:bg-card/50 backdrop-blur-md">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {service.icon}
                    <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="pt-2">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Winforms Ideas Section */}
      <section id="winforms-ideas" className="relative py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534665482403-a909d0d97c67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Abstract code on a screen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-50/90 dark:bg-gray-900/95 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Some Winforms Ideas
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Inspiration for your next powerful desktop application.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {winformsIdeas.map((idea) => (
              <Card key={idea.title} className="flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-card/70 dark:bg-card/50 backdrop-blur-md overflow-hidden">
                <div className="p-2.5 bg-card/50">
                  <AspectRatio ratio={1 / 1}>
                    <img src={idea.imageUrl} alt={idea.title} className="w-full h-full object-cover rounded-md" />
                  </AspectRatio>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {idea.icon}
                    <CardTitle className="text-xl font-bold">{idea.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{idea.description}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {idea.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Have questions? We have answers.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full mt-12">
            {faqItems.map((item, index) => (
              <AccordionItem value={`item-${index + 1}`} key={index}>
                <AccordionTrigger className="text-lg font-medium text-left">{item.question}</AccordionTrigger>
                <AccordionContent className="text-base text-gray-600 dark:text-gray-400">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}