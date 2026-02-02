import type { Metadata } from "next";
import "../globals.css";
import ThemeRegistry from "@/components/ThemeRegistery";

export const metadata: Metadata = {
  title: {
    template: "%s | MoodTune",
    default: "Dashboard | MoodTune",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full"> 
      <body className="min-h-screen antialiased">
        <ThemeRegistry>
          <div className="flex flex-row h-screen w-full overflow-hidden">
            
            <div className="bg-green-500 w-66 shrink-0 p-2">
              Sidebar
            </div>

            <div className="flex flex-col flex-1 min-w-0">
              <div className="bg-red-500 h-17 w-full shrink-0 p-2">
                Header
              </div>
              
              <div className="bg-orange-500 flex-1 overflow-y-auto p-4">
                { children }
              </div>
            </div>

          </div>
        </ThemeRegistry>
      </body>
    </html>
  );
}