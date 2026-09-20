import { Button } from "#components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <header className="border-b">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2 font-semibold">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <MessageCircle className="h-5 w-5" />
            </div>

            <span className="text-lg">Chatter</span>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost">Login</Button>

            <Link to={"/auth/register"}>
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center justify-center px-6 py-20">
          <div className="max-w-2xl text-center">
            <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border bg-muted/50 px-4 py-2 text-sm text-muted-foreground">
              <MessageCircle className="h-4 w-4" />
              Simple. Private. Real-time.
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Chat with the people
              <span className="block text-primary">that matter.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              A simple and fast messaging platform built for real-time
              conversations. Connect with friends and start chatting instantly.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" className="gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>

              <Button size="lg" variant="outline">
                Login
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              No complicated setup. Just create an account and start chatting.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
