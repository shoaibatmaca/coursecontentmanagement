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
  DollarSign,
  LineChart,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function ProfessionalCourse() {
  const [activeSection, setActiveSection] = useState<string | null>("resources")
  const [expandedMenu, setExpandedMenu] = useState("professional")
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

  return (
    <div className="flex flex-col h-screen bg-valour-black text-white">
      {/* 
      
      <div className="bg-valour-darkGray text-xs py-1 px-4 overflow-hidden whitespace-nowrap">
        <div className="flex space-x-4 animate-[marquee_30s_linear_infinite]">
          <div className="flex items-center">
            <span className="font-semibold">BTCUSD</span>
            <span className="ml-1 text-valour-green">88825.21945</span>
            <span className="ml-1 text-valour-green">+1285.2195 (0.32%)</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold">ETHUSD</span>
            <span className="ml-1 text-red-500">2188.99861</span>
            <span className="ml-1 text-red-500">-2.1014 (-0.10%)</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold">GBPUSD</span>
            <span className="ml-1 text-valour-green">1.29548</span>
            <span className="ml-1 text-valour-green">+0.0055 (0.43%)</span>
          </div>
        </div>
      </div>
      */}

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
                <CourseLevel title="Beginner" isActive={false} onClick={() => {}} />
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
                  isCurrentLevel={true}
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
                  <span>Professional</span>
                  <ArrowRight className="mx-2 h-3 w-3" />
                  <span>Module 1</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold">Institutional Trading Strategies</h1>
                <p className="text-gray-300 max-w-2xl">
                  Master advanced trading techniques used by institutional investors and develop sophisticated
                  strategies for high-volume trading.
                </p>
                <div className="flex items-center space-x-4 pt-2">
                  <div className="flex items-center text-sm">
                    <BookOpen className="mr-2 h-4 w-4 text-valour-green" />
                    <span>8 Lessons</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <BarChart2 className="mr-2 h-4 w-4 text-valour-green" />
                    <span>Professional Level</span>
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
                    alt="Institutional trading dashboard"
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
                        id: "professional-video-1",
                        title: "Institutional Trading Strategies",
                        duration: "28:50",
                        thumbnail: "/placeholder.svg?height=200&width=350",
                        videoUrl: "https://your-r2-bucket.example.com/videos/professional-trading.mp4",
                      },
                      {
                        id: "professional-video-2",
                        title: "Algorithmic Trading Systems",
                        duration: "32:15",
                        thumbnail: "/placeholder.svg?height=200&width=350",
                        videoUrl: "https://your-r2-bucket.example.com/videos/professional-algo-trading.mp4",
                      },
                      {
                        id: "professional-video-3",
                        title: "Advanced Derivatives & Structured Products",
                        duration: "25:40",
                        thumbnail: "/placeholder.svg?height=200&width=350",
                        videoUrl: "https://your-r2-bucket.example.com/videos/professional-derivatives.mp4",
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
                    title="Algorithmic Trading Systems"
                    description="Design and implementation of automated trading strategies"
                    icon={<LineChart className="h-5 w-5" />}
                  />
                  <ResourceCard
                    title="Derivatives & Structured Products"
                    description="Advanced financial instruments for sophisticated investors"
                    icon={<DollarSign className="h-5 w-5" />}
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
                    <h3 className="text-white">Advanced Trading Concepts</h3>
                    <ul className="text-gray-300">
                      <li>Market microstructure and order flow analysis</li>
                      <li>High-frequency trading strategies and execution algorithms</li>
                      <li>Statistical arbitrage and pairs trading methodologies</li>
                      <li>Volatility trading and options strategies for institutional portfolios</li>
                    </ul>
                    <h3 className="text-white mt-4">Risk Management Framework</h3>
                    <p className="text-gray-300">
                      How do institutional traders manage risk across multiple asset classes? What quantitative methods
                      are used to measure and mitigate systemic risk?
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg border border-valour-gray bg-valour-darkGray">
                    <h3 className="font-medium mb-2">Market Microstructure</h3>
                    <p className="text-sm text-gray-300">
                      The study of how exchange mechanisms affect the price formation process, focusing on transaction
                      costs, quotes, prices, volume, and trading behavior.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-valour-gray bg-valour-darkGray">
                    <h3 className="font-medium mb-2">Statistical Arbitrage</h3>
                    <p className="text-sm text-gray-300">
                      A quantitative trading strategy that employs mean reversion models to identify and exploit price
                      inefficiencies between related securities.
                    </p>
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

