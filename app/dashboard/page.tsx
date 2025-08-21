"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarInitials } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Code, Users, Plus, Trash2, Trophy, Zap, User, LogOut } from "lucide-react"
import axios from "axios"

interface Friend {
  username: string
  lastSolvedCount: number
}

interface UserData {
  username: string
  email: string
  friends: Friend[]
}

export default function Dashboard() {
  const [userData, setUserData] = useState<UserData | null>(null)
  const [friendUsername, setFriendUsername] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [currentUser, setCurrentUser] = useState("") // This would come from auth context

  // Use logged-in user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("leettrack_user")
    if (storedUser) {
      const user = JSON.parse(storedUser)
      setCurrentUser(user.username)
      fetchUserData(user.username)
    } else {
      // Redirect to login if not logged in
      window.location.href = "/"
    }
  }, [])

  const fetchUserData = async (username: string) => {
    try {
      const response = await axios.get(`https://leettrack-r65x.onrender.com/user/${username}`)
      setUserData(response.data)
    } catch (error) {
      console.error("Failed to fetch user data:", error)
    }
  }

  const addFriend = async () => {
    if (!friendUsername.trim() || !currentUser) return

    setIsLoading(true)
    try {
      await axios.post("https://leettrack-r65x.onrender.com/add-friend", {
        username: currentUser,
        friendUsername: friendUsername.trim(),
      })
      setFriendUsername("")
      fetchUserData(currentUser)
    } catch (error: any) {
      if (error.response?.data?.error) {
        alert("Error: " + error.response.data.error)
      } else {
        alert("Failed to add friend")
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = () => {
    // In real app, this would clear auth state and redirect
    window.location.href = "/"
  }

  if (!userData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
            <Code className="w-5 h-5 text-primary-foreground animate-pulse" />
          </div>
          <p className="text-muted-foreground">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

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
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Avatar className="w-8 h-8">
                <AvatarFallback>
                  <AvatarInitials name={userData.username} />
                </AvatarFallback>
              </Avatar>
              <span className="font-medium text-foreground">{userData.username}</span>
            </div>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Welcome Section */}
            <Card className="border-border bg-gradient-to-r from-primary/5 to-accent/5">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="font-serif text-2xl">Welcome back, {userData.username}!</CardTitle>
                    <CardDescription>Ready to tackle some coding challenges today?</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Add Friend Section */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-serif flex items-center">
                  <Plus className="w-5 h-5 mr-2 text-primary" />
                  Add a Friend
                </CardTitle>
                <CardDescription>
                  Connect with friends to stay motivated and track each other's progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2">
                  <div className="flex-1">
                    <Label htmlFor="friend-username" className="sr-only">
                      Friend's LeetCode Username
                    </Label>
                    <Input
                      id="friend-username"
                      placeholder="Friend's LeetCode username"
                      value={friendUsername}
                      onChange={(e) => setFriendUsername(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && addFriend()}
                    />
                  </div>
                  <Button
                    onClick={addFriend}
                    disabled={isLoading || !friendUsername.trim()}
                    className="bg-primary hover:bg-secondary text-primary-foreground"
                  >
                    {isLoading ? "Adding..." : "Add Friend"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Friends List */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-serif flex items-center justify-between">
                  <span className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-primary" />
                    Your Peer Friends ({userData.friends.length})
                  </span>
                </CardTitle>
                <CardDescription>Track your friends' progress and celebrate their achievements</CardDescription>
              </CardHeader>
              <CardContent>
                {userData.friends.length === 0 ? (
                  <div className="text-center py-8">
                    <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-2">No friends added yet</p>
                    <p className="text-sm text-muted-foreground">
                      Add friends above to start tracking progress together!
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {userData.friends.map((friend, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border border-border rounded-lg bg-card/50"
                      >
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarFallback>
                              <AvatarInitials name={friend.username} />
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-foreground">{friend.username}</p>
                            <p className="text-sm text-muted-foreground">{friend.lastSolvedCount} problems solved</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary" className="bg-accent/10 text-accent">
                            <Trophy className="w-3 h-3 mr-1" />
                            {friend.lastSolvedCount}
                          </Badge>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-destructive hover:text-destructive bg-transparent"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* User Stats */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-serif flex items-center">
                  <User className="w-5 h-5 mr-2 text-primary" />
                  Your Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <Avatar className="w-16 h-16 mx-auto mb-3">
                    <AvatarFallback className="text-lg">
                      <AvatarInitials name={userData.username} />
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-medium text-foreground">{userData.username}</h3>
                  <p className="text-sm text-muted-foreground">{userData.email}</p>
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Friends</span>
                    <span className="text-sm font-medium">{userData.friends.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Total Notifications</span>
                    <span className="text-sm font-medium">0</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Motivation Card */}
            <Card className="border-border bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="font-serif flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-primary" />
                  Daily Motivation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="text-sm text-muted-foreground italic">
                  "The only way to do great work is to love what you do. Keep coding, keep growing!"
                </blockquote>
                <p className="text-xs text-muted-foreground mt-2">— Steve Jobs</p>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-serif text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Code className="w-4 h-4 mr-2" />
                  View LeetCode Profile
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Trophy className="w-4 h-4 mr-2" />
                  Check Leaderboard
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Zap className="w-4 h-4 mr-2" />
                  Get Daily Challenge
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
