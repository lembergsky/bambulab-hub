import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  BookOpen,
  Clock,
  Users,
  CheckCircle,
  GraduationCap,
  Video,
  MessageSquare,
  Award,
  TrendingUp,
  Smartphone,
  Briefcase,
  Lightbulb,
  Target,
  ArrowRight,
  Star
} from "lucide-react";
import { course, courseOverview, expansionIdeas, instructorInfo } from "@/data/course";

const Course = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-primary/10 text-primary border-primary/20 text-lg px-4 py-1">
              Complete BambuLab Training Program
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              {courseOverview.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {courseOverview.subtitle}
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {courseOverview.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg" variant="hero" className="text-lg">
                <GraduationCap className="mr-2 h-5 w-5" />
                Start Learning Now
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Download Syllabus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="container mx-auto px-4 -mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <Card className="border-primary/20 bg-card/80 backdrop-blur">
            <CardContent className="pt-6 text-center">
              <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{courseOverview.totalModules}</div>
              <div className="text-sm text-muted-foreground">Modules</div>
            </CardContent>
          </Card>
          <Card className="border-primary/20 bg-card/80 backdrop-blur">
            <CardContent className="pt-6 text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{courseOverview.totalDuration}</div>
              <div className="text-sm text-muted-foreground">Content</div>
            </CardContent>
          </Card>
          <Card className="border-primary/20 bg-card/80 backdrop-blur">
            <CardContent className="pt-6 text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">All Levels</div>
              <div className="text-sm text-muted-foreground">Skill Range</div>
            </CardContent>
          </Card>
          <Card className="border-primary/20 bg-card/80 backdrop-blur">
            <CardContent className="pt-6 text-center">
              <Award className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">Certificate</div>
              <div className="text-sm text-muted-foreground">Available</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Who Is This Course For?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Designed for two distinct learning paths, each tailored to your specific goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {courseOverview.targetAudiences.map((audience, index) => (
            <Card key={index} className="border-primary/20 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  {audience.type === "Hobbyist" ? (
                    <Lightbulb className="h-8 w-8 text-primary" />
                  ) : (
                    <Briefcase className="h-8 w-8 text-primary" />
                  )}
                  <CardTitle className="text-2xl">{audience.type}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {audience.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-foreground mb-3">You'll Be Able To:</h4>
                <ul className="space-y-2">
                  {audience.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="container mx-auto px-4 py-20 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What You'll Learn
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive skills from beginner to advanced level
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {courseOverview.whatYouWillLearn.map((skill, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Course Curriculum
            </h2>
            <p className="text-lg text-muted-foreground">
              12 comprehensive modules covering everything you need to master BambuLab 3D printing
            </p>
          </div>

          {/* Filter Tabs */}
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="beginner">Beginner</TabsTrigger>
              <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>

            {["all", "beginner", "intermediate", "advanced"].map((level) => (
              <TabsContent key={level} value={level} className="mt-6">
                <Accordion type="single" collapsible className="space-y-4">
                  {course
                    .filter(module => level === "all" || module.difficulty.toLowerCase() === level)
                    .map((module) => (
                      <AccordionItem
                        key={module.id}
                        value={`module-${module.id}`}
                        className="border border-border rounded-lg px-6 bg-card hover:border-primary/50 transition-colors"
                      >
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex items-start gap-4 text-left w-full pr-4">
                            <div className="bg-primary/10 text-primary rounded-full w-10 h-10 shrink-0 flex items-center justify-center font-bold">
                              {module.id}
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-wrap items-center gap-2 mb-2">
                                <h3 className="text-lg font-semibold text-foreground">
                                  {module.title}
                                </h3>
                                <Badge variant={
                                  module.difficulty === "Beginner" ? "default" :
                                  module.difficulty === "Intermediate" ? "secondary" : "outline"
                                }>
                                  {module.difficulty}
                                </Badge>
                                {module.targetAudience.map((audience, idx) => (
                                  <Badge key={idx} variant="outline" className="text-xs">
                                    {audience}
                                  </Badge>
                                ))}
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">
                                {module.description}
                              </p>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  {module.duration}
                                </span>
                                <span className="flex items-center gap-1">
                                  <BookOpen className="h-4 w-4" />
                                  {module.lessons.length} lessons
                                </span>
                              </div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-4">
                          <div className="space-y-6 pl-14">
                            {/* Lessons */}
                            <div>
                              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                                <BookOpen className="h-4 w-4 text-primary" />
                                Lessons
                              </h4>
                              <div className="space-y-3">
                                {module.lessons.map((lesson, idx) => (
                                  <div key={idx} className="border-l-2 border-primary/30 pl-4 py-2">
                                    <div className="flex items-center justify-between mb-1">
                                      <h5 className="font-medium text-foreground">{lesson.title}</h5>
                                      <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-2">{lesson.description}</p>
                                    <details className="text-sm">
                                      <summary className="cursor-pointer text-primary hover:underline">
                                        View topics covered ({lesson.topics.length})
                                      </summary>
                                      <ul className="mt-2 space-y-1 pl-4">
                                        {lesson.topics.map((topic, topicIdx) => (
                                          <li key={topicIdx} className="text-muted-foreground list-disc">
                                            {topic}
                                          </li>
                                        ))}
                                      </ul>
                                    </details>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Key Takeaways */}
                            <div>
                              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                                <Target className="h-4 w-4 text-primary" />
                                Key Takeaways
                              </h4>
                              <div className="grid sm:grid-cols-2 gap-2">
                                {module.keyTakeaways.map((takeaway, idx) => (
                                  <div key={idx} className="flex items-start gap-2 text-sm">
                                    <Star className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                    <span className="text-muted-foreground">{takeaway}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="container mx-auto px-4 py-20 bg-card/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What You'll Need
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple requirements to get started
            </p>
          </div>

          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {courseOverview.prerequisites.map((prerequisite, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{prerequisite}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Course Format */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How The Course Works
            </h2>
            <p className="text-lg text-muted-foreground">
              {courseOverview.courseFormat.structure}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseOverview.courseFormat.content.map((item, index) => (
              <Card key={index} className="border-primary/20 hover:border-primary/50 transition-colors text-center">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Expansion Ideas */}
      <section className="container mx-auto px-4 py-20 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Future Course Enhancements
            </h2>
            <p className="text-lg text-muted-foreground">
              We're constantly improving. Here's what's coming next
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expansionIdeas.map((idea, index) => {
              const icons = [Video, MessageSquare, Users, Award, TrendingUp, Target, Briefcase, Smartphone];
              const Icon = icons[index % icons.length];

              return (
                <Card key={index} className="border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg group">
                  <CardHeader>
                    <Icon className="h-10 w-10 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <CardTitle className="text-xl">{idea.title}</CardTitle>
                    <CardDescription>{idea.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {idea.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <ArrowRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Instructor Info */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Teaching Philosophy
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  Practical, Hands-On Approach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{instructorInfo.approach}</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Ongoing Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{instructorInfo.support}</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Our Commitment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{instructorInfo.commitment}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-card border border-border p-12 md:p-16 text-center max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-hero opacity-10" />
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Ready to Master BambuLab 3D Printing?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join the course today and start creating amazing prints, whether you're a hobbyist or professional. Lifetime access included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="hero" size="lg" className="text-lg">
                <GraduationCap className="mr-2 h-5 w-5" />
                Enroll Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg border-foreground/20 hover:bg-foreground/10">
                Download Free Preview
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Course;
