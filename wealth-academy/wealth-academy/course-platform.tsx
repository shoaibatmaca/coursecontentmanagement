"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronDown,
  ChevronRight,
  BookOpen,
  FileText,
  Lightbulb,
  BarChart2,
  ArrowRight,
  X,
  CheckCircle2,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function CoursePlatform() {
  const [activeSection, setActiveSection] = useState<string | null>("resources")
  const [expandedMenu, setExpandedMenu] = useState("beginner")
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({})
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const [quizScore, setQuizScore] = useState(0)
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [activeVideo, setActiveVideo] = useState<{
    id: string
    title: string
    videoUrl: string
  } | null>(null)

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section)
  }

  const toggleMenu = (menu: string) => {
    setExpandedMenu(expandedMenu === menu ? "" : menu)
  }

  const handleQuizAnswer = (questionId: string, answer: string) => {
    setQuizAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }))
  }

  const submitQuiz = () => {
    const correctAnswers = {
      q1: "b",
      q2: "c",
      q3: "a",
      q4: "d",
      q5: "b",
    }

    let score = 0
    Object.keys(correctAnswers).forEach((questionId) => {
      if (quizAnswers[questionId] === correctAnswers[questionId as keyof typeof correctAnswers]) {
        score++
      }
    })

    setQuizScore(score)
    setQuizSubmitted(true)
  }

  const resetQuiz = () => {
    setQuizAnswers({})
    setQuizSubmitted(false)
    setQuizScore(0)
  }

  return (
    <div className="flex flex-col h-screen bg-valour-black text-white">

      
      {/* Header */}
      <header className="bg-valour-black border-b border-valour-gray">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-xl font-bold">Valour Academy</div>
          <Button className="bg-valour-green hover:bg-valour-darkGreen text-black">My Login</Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col w-64 border-r border-valour-gray bg-valour-darkGray">
          <ScrollArea className="flex-1">
            <div className="p-4 space-y-1">
              <div className="mb-4 px-2 text-sm font-semibold text-gray-400 uppercase">Course Levels</div>
              <Link href="/" className="block">
                <CourseLevel
                  title="Beginner"
                  isActive={expandedMenu === "beginner"}
                  onClick={() => toggleMenu("beginner")}
                  isCurrentLevel={true}
                />
              </Link>
              <Link href="/intermediate" className="block">
                <CourseLevel
                  title="Intermediate"
                  isActive={expandedMenu === "intermediate"}
                  onClick={() => toggleMenu("intermediate")}
                />
              </Link>
              <Link href="/professional" className="block">
                <CourseLevel
                  title="Professional"
                  isActive={expandedMenu === "professional"}
                  onClick={() => toggleMenu("professional")}
                />
              </Link>

              
            </div>
          </ScrollArea>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Course Header */}
          <div className="constellation-bg border-b border-valour-gray">
            <div className="container mx-auto px-4 py-8 relative z-10">
              <div className="flex flex-col space-y-2 max-w-3xl">
                <div className="flex items-center text-sm text-gray-400">
                  <span>Beginner</span>
                  <ArrowRight className="mx-2 h-3 w-3" />
                  <span>Module 1</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold">Introduction to Wealth Management</h1>
                <p className="text-gray-300 max-w-2xl">
                  Master the fundamentals of wealth management and learn how to build a solid financial foundation for
                  long-term success.
                </p>
                <div className="flex items-center space-x-4 pt-2">
                  <div className="flex items-center text-sm">
                    <BookOpen className="mr-2 h-4 w-4 text-valour-green" />
                    <span>4 Lessons</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <BarChart2 className="mr-2 h-4 w-4 text-valour-green" />
                    <span>Beginner Level</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Course Content */}
          <ScrollArea className="flex-1">
            <div className="container mx-auto px-4 py-6 space-y-4">
              <CourseSection
                title="Resources"
                icon={<BookOpen className="h-5 w-5" />}
                isOpen={activeSection === "resources"}
                onToggle={() => toggleSection("resources")}
              >
                <div className="rounded-lg border border-valour-gray overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=500&width=800"
                    alt="Trading chart"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
                </div>
                <div className="mb-4">
                  <h3 className="font-medium mb-3">Course Videos</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        id: "beginner-video-1",
                        title: "Introduction to Financial Markets",
                        duration: "12:45",
                        thumbnail: "/placeholder.svg?height=200&width=350",
                        videoUrl: "https://a5f9ee7b3883a9c77c46adca93821bec.r2.cloudflarestorage.com/videos/beginner-intro.mp4",
                      },
                      {
                        id: "beginner-video-2",
                        title: "Understanding Risk & Return",
                        duration: "15:20",
                        thumbnail: "/placeholder.svg?height=200&width=350",
                        videoUrl: "https://your-r2-bucket.example.com/videos/beginner-risk-return.mp4",
                      },
                      {
                        id: "beginner-video-3",
                        title: "Building Your First Portfolio",
                        duration: "18:10",
                        thumbnail: "/placeholder.svg?height=200&width=350",
                        videoUrl: "https://your-r2-bucket.example.com/videos/beginner-portfolio.mp4",
                      },
                    ].map((video) => (
                      <VideoCard
                        key={video.id}
                        title={video.title}
                        duration={video.duration}
                        thumbnail={video.thumbnail}
                        onClick={() => {
                          setActiveVideo(video)
                          setVideoModalOpen(true)
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ResourceCard
                    title="Market Analysis Basics"
                    description="Learn how to read and interpret market charts and indicators"
                    icon={<BarChart2 className="h-5 w-5" />}
                  />
                  <ResourceCard
                    title="Investment Fundamentals"
                    description="Understanding the core principles of wealth building"
                    icon={<Lightbulb className="h-5 w-5" />}
                  />
                </div>
              </CourseSection>

              <CourseSection
                title="Notes"
                icon={<FileText className="h-5 w-5" />}
                isOpen={activeSection === "notes"}
                onToggle={() => toggleSection("notes")}
              >
                <div className="p-4 rounded-lg border border-valour-gray bg-valour-darkGray">
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <h3 className="text-white">Key Takeaways</h3>
                    <ul className="text-gray-300">
                      <li>
                        Wealth management combines financial planning, investment portfolio management, and other
                        financial services
                      </li>
                      <li>Risk assessment is fundamental to creating a balanced portfolio</li>
                      <li>Diversification helps protect against market volatility</li>
                      <li>Long-term planning requires regular review and adjustments</li>
                    </ul>
                    <h3 className="text-white mt-4">Questions to Consider</h3>
                    <p className="text-gray-300">
                      How does your risk tolerance affect your investment strategy? What timeframe are you considering
                      for your financial goals?
                    </p>
                  </div>
                </div>
              </CourseSection>

              <CourseSection
                title="Knowledge"
                icon={<Lightbulb className="h-5 w-5" />}
                isOpen={activeSection === "knowledge"}
                onToggle={() => toggleSection("knowledge")}
              >
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg border border-valour-gray bg-valour-darkGray">
                      <h3 className="font-medium mb-2">Wealth Management Definition</h3>
                      <p className="text-sm text-gray-300">
                        A high-level professional service that combines financial advice, investment management, and
                        other financial services for individuals with high net worth.
                      </p>
                    </div>
                    <div className="p-4 rounded-lg border border-valour-gray bg-valour-darkGray">
                      <h3 className="font-medium mb-2">Investment Vehicles</h3>
                      <p className="text-sm text-gray-300">
                        Financial products or assets that investors use to gain positive returns, including stocks,
                        bonds, ETFs, mutual funds, and real estate.
                      </p>
                    </div>
                  </div>

                  {/* Quiz Section */}
                  <div className="p-4 rounded-lg border border-valour-gray bg-valour-darkGray">
                    <h3 className="font-medium mb-4 text-lg flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-valour-green" />
                      Knowledge Check Quiz
                    </h3>

                    {quizSubmitted ? (
                      <div className="space-y-4">
                        <div className="p-4 rounded-lg bg-valour-green/10 border border-valour-green">
                          <p className="font-medium text-valour-green">Your Score: {quizScore}/5</p>
                          <p className="text-sm text-gray-300 mt-1">
                            {quizScore === 5
                              ? "Excellent! You've mastered this section."
                              : quizScore >= 3
                                ? "Good job! Review the questions you missed."
                                : "Keep studying! Review the material and try again."}
                          </p>
                        </div>
                        <Button onClick={resetQuiz} className="bg-valour-green hover:bg-valour-darkGreen text-black">
                          Retake Quiz
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {/* Question 1 */}
                        <div className="space-y-2">
                          <p className="font-medium">1. What is the primary goal of wealth management?</p>
                          <RadioGroup
                            value={quizAnswers.q1}
                            onValueChange={(value) => handleQuizAnswer("q1", value)}
                            className="space-y-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="a" id="q1-a" className="border-valour-gray text-valour-green" />
                              <Label htmlFor="q1-a" className="text-gray-300">
                                To maximize short-term gains
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="b" id="q1-b" className="border-valour-gray text-valour-green" />
                              <Label htmlFor="q1-b" className="text-gray-300">
                                To grow and protect wealth over time
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="c" id="q1-c" className="border-valour-gray text-valour-green" />
                              <Label htmlFor="q1-c" className="text-gray-300">
                                To minimize all investment risks
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="d" id="q1-d" className="border-valour-gray text-valour-green" />
                              <Label htmlFor="q1-d" className="text-gray-300">
                                To avoid paying taxes on investments
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>

                        {/* Question 2 */}
                        <div className="space-y-2">
                          <p className="font-medium">
                            2. Which of the following is NOT typically considered an asset class?
                          </p>
                          <RadioGroup
                            value={quizAnswers.q2}
                            onValueChange={(value) => handleQuizAnswer("q2", value)}
                            className="space-y-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="a" id="q2-a" className="border-valour-gray text-valour-green" />
                              <Label htmlFor="q2-a" className="text-gray-300">
                                Bonds
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="b" id="q2-b" className="border-valour-gray text-valour-green" />
                              <Label htmlFor="q2-b" className="text-gray-300">
                                Real Estate
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="c" id="q2-c" className="border-valour-gray text-valour-green" />
                              <Label htmlFor="q2-c" className="text-gray-300">
                                Credit Score
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="d" id="q2-d" className="border-valour-gray text-valour-green" />
                              <Label htmlFor="q2-d" className="text-gray-300">
                                Commodities
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>

                        {/* Question 3 */}
                        <div className="space-y-2">
                          <p className="font-medium">3. What is diversification in investment terms?</p>
                          <RadioGroup
                            value={quizAnswers.q3}
                            onValueChange={(value) => handleQuizAnswer("q3", value)}
                            className="space-y-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="a" id="q3-a" className="border-valour-gray text-valour-green" />
                              <Label htmlFor="q3-a" className="text-gray-300">
                                Spreading investments across different asset classes to reduce risk
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="b" id="q3-b" className="border-valour-gray text-valour-green" />
                              <Label htmlFor="q3-b" className="text-gray-300">
                                Investing all your money in different stocks
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="c" id="q3-c" className="border-valour-gray text-valour-green" />
                              <Label htmlFor="q3-c" className="text-gray-300">
                                Changing your investment strategy frequently
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="d" id="q3-d" className="border-valour-gray text-valour-green" />
                              <Label htmlFor="q3-d" className="text-gray-300">
                                Investing in international markets only
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>

                        {/* Question 4 */}
                        <div className="space-y-2">
                          <p className="font-medium">
                            4. Which of the following is generally considered the lowest risk investment?
                          </p>
                          <RadioGroup
                            value={quizAnswers.q4}
                            onValueChange={(value) => handleQuizAnswer("q4", value)}
                            className="space-y-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="a" id="q4-a" className="border-valour-gray text-valour-green" />
                              <Label htmlFor="q4-a" className="text-gray-300">
                                Individual stocks
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="b" id="q4-b" className="border-valour-gray text-valour-green" />
                              <Label htmlFor="q4-b" className="text-gray-300">
                                Cryptocurrency
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="c" id="q4-c" className="border-valour-gray text-valour-green" />
                              <Label htmlFor="q4-c" className="text-gray-300">
                                Commodities
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="d" id="q4-d" className="border-valour-gray text-valour-green" />
                              <Label htmlFor="q4-d" className="text-gray-300">
                                Government bonds
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>

                        {/* Question 5 */}
                        <div className="space-y-2">
                          <p className="font-medium">5. What is a mutual fund?</p>
                          <RadioGroup
                            value={quizAnswers.q5}
                            onValueChange={(value) => handleQuizAnswer("q5", value)}
                            className="space-y-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="a" id="q5-a" className="border-valour-gray text-valour-green" />
                              <Label htmlFor="q5-a" className="text-gray-300">
                                A loan given by multiple banks
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="b" id="q5-b" className="border-valour-gray text-valour-green" />
                              <Label htmlFor="q5-b" className="text-gray-300">
                                A professionally managed investment fund that pools money from many investors
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="c" id="q5-c" className="border-valour-gray text-valour-green" />
                              <Label htmlFor="q5-c" className="text-gray-300">
                                A government savings program
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="d" id="q5-d" className="border-valour-gray text-valour-green" />
                              <Label htmlFor="q5-d" className="text-gray-300">
                                A type of retirement account
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <Button
                          onClick={submitQuiz}
                          className="bg-valour-green hover:bg-valour-darkGreen text-black"
                          disabled={Object.keys(quizAnswers).length < 5}
                        >
                          Submit Answers
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </CourseSection>
            </div>
          </ScrollArea>

          {/* Course Navigation */}
          <div className="border-t border-valour-gray bg-valour-darkGray p-4">
            <div className="container mx-auto flex justify-between">
              <Button variant="outline" disabled className="border-valour-gray text-gray-400">
                Previous Lesson
              </Button>
              <Button className="bg-valour-green hover:bg-valour-darkGreen text-black">
                Next Lesson
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Video Modal */}
      {videoModalOpen && activeVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-valour-darkGray rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-4 flex items-center justify-between border-b border-valour-gray">
              <h3 className="font-medium">{activeVideo.title}</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setVideoModalOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="relative w-full aspect-video bg-black">
              <video className="w-full h-full" controls autoPlay src={activeVideo.videoUrl}>
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

interface CourseLevelProps {
  title: string
  isActive: boolean
  isCurrentLevel?: boolean
  onClick: () => void
}

function CourseLevel({ title, isActive, isCurrentLevel, onClick }: CourseLevelProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-between w-full px-2 py-2 text-sm rounded-md transition-colors",
        isCurrentLevel ? "text-valour-green font-medium" : "text-white",
        isActive ? "bg-valour-gray" : "hover:bg-valour-gray/50",
      )}
    >
      <span>{title}</span>
      <ChevronRight className={cn("h-4 w-4 transition-transform", isActive && "rotate-90")} />
    </button>
  )
}

interface CourseSectionProps {
  title: string
  icon: React.ReactNode
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

function CourseSection({ title, icon, isOpen, onToggle, children }: CourseSectionProps) {
  return (
    <div className="rounded-lg border border-valour-gray bg-valour-darkGray overflow-hidden">
      <button onClick={onToggle} className="flex items-center justify-between w-full p-4 text-left">
        <div className="flex items-center space-x-2">
          <div className="text-valour-green">{icon}</div>
          <h2 className="font-medium">{title}</h2>
        </div>
        {isOpen ? <X className="h-5 w-5 text-gray-400" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
      </button>
      {isOpen && <div className="p-4 pt-0 border-t border-valour-gray">{children}</div>}
    </div>
  )
}

interface ResourceCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

function ResourceCard({ title, description, icon }: ResourceCardProps) {
  return (
    <div className="p-4 rounded-lg border border-valour-gray bg-valour-darkGray hover:bg-valour-gray/50 transition-colors cursor-pointer">
      <div className="flex items-start space-x-3">
        <div className="p-2 rounded-full bg-valour-green/10 text-valour-green">{icon}</div>
        <div>
          <h3 className="font-medium mb-1">{title}</h3>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  )
}

interface VideoCardProps {
  title: string
  duration: string
  thumbnail: string
  onClick: () => void
}

function VideoCard({ title, duration, thumbnail, onClick }: VideoCardProps) {
  return (
    <div
      className="rounded-lg overflow-hidden border border-valour-gray bg-valour-darkGray hover:bg-valour-gray/50 transition-colors cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative">
        <Image
          src={thumbnail || "/placeholder.svg"}
          alt={title}
          width={350}
          height={200}
          className="w-full aspect-video object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-12 h-12 rounded-full bg-valour-green/90 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-black"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">{duration}</div>
      </div>
      <div className="p-3">
        <h4 className="font-medium text-sm line-clamp-2">{title}</h4>
      </div>
    </div>
  )
}

