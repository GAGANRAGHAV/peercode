"use client"

// ...existing code...
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Users, Trophy, Zap, Github, ArrowRight } from "lucide-react"

export default function LandingPage() {
  const [isAuthOpen, setIsAuthOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-serif text-xl font-bold text-foreground">PeerCode</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How it Works
            </a>
            <a href="#community" className="text-muted-foreground hover:text-foreground transition-colors">
              Community
            </a>
          </nav>
          <Dialog open={isAuthOpen} onOpenChange={setIsAuthOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-secondary text-primary-foreground font-medium">Get Started</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl">Join the Community</DialogTitle>
                <DialogDescription>
                  Start your coding journey with friends and stay motivated together.
                </DialogDescription>
              </DialogHeader>
              <AuthTabs />
            </DialogContent>
          </Dialog>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Boost Your Coding Motivation</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Unleash Your <span className="text-primary">Coding Potential</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Stay motivated, track progress, and celebrate victories with friends. Turn your LeetCode journey into a
            social experience that keeps you coding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Dialog open={isAuthOpen} onOpenChange={setIsAuthOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-secondary text-primary-foreground font-medium px-8 py-3 text-lg"
                >
                  Start Coding Together
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </DialogTrigger>
            </Dialog>
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-accent/10 px-8 py-3 text-lg bg-transparent"
            >
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Why Choose PeerCode?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your solo coding sessions into an engaging social experience
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl">Friend Tracking</CardTitle>
                <CardDescription>
                  Add friends and get notified when they solve new problems. Stay connected and motivated together.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="font-serif text-xl">Progress Celebration</CardTitle>
                <CardDescription>
                  Celebrate every victory, no matter how small. Get instant notifications when friends achieve
                  milestones.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl">Daily Motivation</CardTitle>
                <CardDescription>
                  Receive motivational emails and updates that keep you engaged and excited about coding challenges.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Simple. Social. Motivating.</h2>
          <p className="text-xl text-muted-foreground mb-12">Get started in three easy steps</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto">
                1
              </div>
              <h3 className="font-serif text-xl font-semibold">Sign Up</h3>
              <p className="text-muted-foreground">Create your account and connect your LeetCode profile</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl mx-auto">
                2
              </div>
              <h3 className="font-serif text-xl font-semibold">Add Friends</h3>
              <p className="text-muted-foreground">Invite friends or find coding buddies in our community</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto">
                3
              </div>
              <h3 className="font-serif text-xl font-semibold">Stay Motivated</h3>
              <p className="text-muted-foreground">Get notifications and celebrate progress together</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section id="community" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12">Join Our Growing Community</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">1,000+</div>
              <div className="text-muted-foreground">Active Coders</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">50,000+</div>
              <div className="text-muted-foreground">Problems Solved</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">95%</div>
              <div className="text-muted-foreground">Stay Motivated</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6">Ready to Level Up Your Coding?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of developers who are staying motivated and improving together.
          </p>
          <Dialog open={isAuthOpen} onOpenChange={setIsAuthOpen}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-primary hover:bg-secondary text-primary-foreground font-medium px-8 py-3 text-lg"
              >
                Get Started for Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </DialogTrigger>
          </Dialog>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-serif text-xl font-bold text-foreground">PeerCode</span>
            </div>
            <div className="flex items-center space-x-6">
            <p>&copy; 2025 PeerCode. Built with ❤️ for the coding community.</p>
            </div>
          </div>
          {/* <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
           
          </div> */}
        </div>
      </footer>
    </div>
  )
}

import axios from "axios"
import { useState } from "react"

function AuthTabs() {
  const [registerUsername, setRegisterUsername] = useState("")
  const [registerEmail, setRegisterEmail] = useState("")
  const [loginUsername, setLoginUsername] = useState("")
  const [loginEmail, setLoginEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const handleRegister = async () => {
    setLoading(true)
    try {
      await axios.post("https://leettrack-r65x.onrender.com/register", {
        username: registerUsername,
        email: registerEmail,
      })
      alert("Registration successful! You can now log in.")
      setRegisterUsername("")
      setRegisterEmail("")
    } catch (err: any) {
      alert(err.response?.data?.error || "Registration failed.")
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = async () => {
    setLoading(true)
    try {
      const res = await axios.post("https://leettrack-r65x.onrender.com/login", {
        username: loginUsername,
        email: loginEmail,
      })
      // Store user info and redirect to dashboard
      localStorage.setItem("leettrack_user", JSON.stringify(res.data.user))
      window.location.href = "/dashboard"
    } catch (err: any) {
      alert(err.response?.data?.error || "Login failed.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Tabs defaultValue="register" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="register">Sign Up</TabsTrigger>
        <TabsTrigger value="login">Log In</TabsTrigger>
      </TabsList>
      <TabsContent value="register" className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="register-username">Username</Label>
          <Input id="register-username" placeholder="Your LeetCode username" value={registerUsername} onChange={e => setRegisterUsername(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="register-email">Email</Label>
          <Input id="register-email" type="email" placeholder="your@email.com" value={registerEmail} onChange={e => setRegisterEmail(e.target.value)} />
        </div>
        <Button className="w-full bg-primary hover:bg-secondary text-primary-foreground" onClick={handleRegister} disabled={loading}>
          {loading ? "Registering..." : "Create Account"}
        </Button>
        <p className="text-sm text-muted-foreground text-center">
          By signing up, you agree to our Terms of Service and Privacy Policy.
        </p>
      </TabsContent>
      <TabsContent value="login" className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="login-username">Username</Label>
          <Input id="login-username" placeholder="Your username" value={loginUsername} onChange={e => setLoginUsername(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="login-email">Email</Label>
          <Input id="login-email" type="email" placeholder="your@email.com" value={loginEmail} onChange={e => setLoginEmail(e.target.value)} />
        </div>
        <Button className="w-full bg-primary hover:bg-secondary text-primary-foreground" onClick={handleLogin} disabled={loading}>
          {loading ? "Signing in..." : "Sign In"}
        </Button>
      </TabsContent>
    </Tabs>
  )
}
